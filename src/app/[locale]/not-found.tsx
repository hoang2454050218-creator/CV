import Link from "next/link";

/**
 * Bilingual by design: not-found boundaries receive no params, and a 404
 * is exactly where a visitor may have the "wrong" URL — show both voices.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="mono-label uppercase text-faint">404 — signal lost</p>
      <h1 className="display-type text-4xl text-ink">
        This route doesn&apos;t exist.
        <span className="mt-2 block text-[0.55em] font-medium text-muted">
          Trang này không tồn tại.
        </span>
      </h1>
      <Link
        href="/"
        className="rounded-full border border-line-strong px-6 py-2.5 font-semibold text-ink transition-colors hover:border-ink"
      >
        ← Home · Trang chính
      </Link>
    </main>
  );
}
