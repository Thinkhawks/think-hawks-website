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
      return NextResponse.redirect(new URL("/sitemap", request.url), {
        status: 301,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sitemap.xml"],
};
