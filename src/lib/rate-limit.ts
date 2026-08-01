import { NextResponse } from "next/server";

/**
 * Fixed-window, in-memory rate limiter for the public API routes.
 *
 * Deliberately dependency-free. The trade-off: state lives in the memory of a
 * single serverless instance, so a flood spread across several warm instances
 * gets a higher effective limit than the numbers below suggest. For this
 * site's traffic that is nearly always one or two instances, which is enough
 * to stop the realistic threat — a script hammering the contact form to burn
 * Resend quota and fill the inbox. If that ever stops being true, swap the
 * `buckets` Map for Redis; the call sites don't change.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const SWEEP_INTERVAL_MS = 60_000;
let lastSweep = 0;

/** Drop expired buckets so a long-lived instance doesn't grow the Map forever. */
function sweep(now: number) {
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Identifies the caller, namespaced per route. The `scope` matters: both API
 * routes import this module and therefore may share one `buckets` Map, so
 * without it a visitor who used the contact form would arrive at the
 * newsletter form with their budget already partly spent.
 *
 * Vercel sets both IP headers to the real client IP at the edge; `x-real-ip`
 * is preferred because `x-forwarded-for` is a chain that can carry
 * client-supplied entries ahead of the trustworthy one.
 *
 * Callers with no IP header (local dev) all collapse onto one "unknown"
 * bucket. That is intentional — better to throttle an unidentifiable caller
 * than to hand out an unlimited lane by omitting a header.
 */
export function clientKey(request: Request, scope: string): string {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return `${scope}:${realIp}`;

  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return `${scope}:${first || "unknown"}`;
}

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSec: number };

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (bucket.count >= limit) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return { ok: true };
}

/** 429 with the message the contact form surfaces to the visitor verbatim. */
export function tooManyRequests(retryAfterSec: number, message: string) {
  return NextResponse.json(
    { error: message },
    { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
  );
}
