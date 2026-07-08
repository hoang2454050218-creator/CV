"use client";

import { useEffect, useState } from "react";

export function BackToTop({ ariaLabel }: { ariaLabel: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => window.scrollTo({ top: 0 })}
      className={`back-top glass cta-glow inline-flex size-11 items-center justify-center rounded-full text-ink ${visible ? "visible" : ""}`}
    >
      <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
