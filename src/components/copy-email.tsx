"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({
  email,
  label,
  toastText,
}: {
  email: string;
  label: string;
  toastText: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard unavailable (permissions/http) — the mailto link still works
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="cta-glow inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink"
      >
        <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        {label}
      </button>
      <div
        role="status"
        aria-live="polite"
        className={`toast glass rounded-full px-5 py-2.5 text-sm font-semibold text-ink ${copied ? "show" : ""}`}
      >
        {copied ? toastText : ""}
      </div>
    </>
  );
}
