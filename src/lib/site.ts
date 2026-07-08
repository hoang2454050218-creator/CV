/**
 * Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (Vercel:
 * Project Settings → Environment Variables) so sitemap/OG/canonical
 * links point at the real domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
