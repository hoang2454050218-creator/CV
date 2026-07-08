"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The single primary email action: shows the address with an integrated
 * copy icon; on click it copies to the clipboard and swaps to a ✓ +
 * confirmation for 2s. min-width is pinned so the swap never shifts layout.
 */
export function CopyEmail({
  email,
  copiedText,
  ariaLabel,
}: {
  email: string;
  copiedText: string;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — select-and-copy still possible from the CV
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={ariaLabel}
        className="shine cta-glow inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-brand px-6 font-semibold text-brand-ink"
        style={{ minWidth: `${email.length + 4}ch` }}
      >
        {copied ? (
          <svg viewBox="0 0 16 16" className="size-4 shrink-0" fill="none" aria-hidden="true">
            <path d="M2.5 8.5 6 12 13.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="size-4 shrink-0" fill="none" aria-hidden="true">
            <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        )}
        <span>{copied ? copiedText : email}</span>
      </button>
      {/* dedicated polite live region so the copy result is announced without
          fighting the button's static aria-label */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedText : ""}
      </span>
    </>
  );
}
