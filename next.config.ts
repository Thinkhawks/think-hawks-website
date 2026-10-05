import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop legacy XSS auditor leaking info, force-block reflected XSS
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Only send origin in the Referer header (no full URL)
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 2 years, include subdomains
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Restrict browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Tawk.to
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.tawk.to https://cdn.jsdelivr.net",
      // Styles: inline (Tailwind) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.tawk.to https://cdn.jsdelivr.net",
      // Fonts
      "font-src 'self' data: https://fonts.gstatic.com https://*.tawk.to https://cdn.jsdelivr.net",
      // Images: self + data URIs
      "img-src 'self' data: https:",
      // API calls + Tawk.to websocket
      "connect-src 'self' https://api.resend.com https://*.tawk.to wss://*.tawk.to https://cdn.jsdelivr.net",
      // Tawk.to iframe
      "frame-src https://tawk.to https://*.tawk.to",
      // Worker scripts (Tawk.to)
      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray lockfile in a parent
  // directory was making Turbopack infer the wrong root during builds.
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
