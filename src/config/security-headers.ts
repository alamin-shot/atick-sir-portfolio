import type { SecurityHeader } from "@/types/config";
import { env } from "./env";

const devOnly = (value: string) => (env.isDevelopment ? [value] : []);

// Static CSP (no nonce) so the route stays fully prerendered; inline scripts
// are allowed only for Next.js bootstrap, everything else is locked to 'self'.
const directives = [
  "default-src 'self'",
  ["script-src 'self' 'unsafe-inline'", ...devOnly("'unsafe-eval'")].join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  ["connect-src 'self'", ...devOnly("ws:")].join(" "),
  "worker-src 'self' blob:",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(env.isDevelopment ? [] : ["upgrade-insecure-requests"]),
];

export const securityHeaders: SecurityHeader[] = [
  { key: "Content-Security-Policy", value: directives.join("; ") },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];
