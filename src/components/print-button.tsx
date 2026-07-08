"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-brand px-5 py-2 font-semibold text-brand-ink transition-opacity hover:opacity-85"
    >
      {label}
    </button>
  );
}
