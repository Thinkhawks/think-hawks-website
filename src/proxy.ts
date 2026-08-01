import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // When a human browser opens /sitemap.xml they see raw XML.
  // Redirect them to the styled HTML sitemap instead.
  // Search-engine bots (Googlebot etc.) don't send "text/html" in Accept,
  // so they fall through and receive the proper XML response.
  if (pathname === "/sitemap.xml") {
    const accept = request.headers.get("accept") ?? "";
    if (accept.includes("text/html")) {
      // 307, not 301: a permanent redirect is cached against the URL alone,
      // so a browser or CDN that stored the human redirect could replay it
      // for a crawler's XML fetch and hide the sitemap. Vary tells caches the
      // response depends on Accept.
      const res = NextResponse.redirect(new URL("/sitemap", request.url), {
        status: 307,
      });
      res.headers.set("Vary", "Accept");
      return res;
    }
    const res = NextResponse.next();
    res.headers.set("Vary", "Accept");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sitemap.xml"],
};
