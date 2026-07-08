"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal that cannot blank the page: the server renders content
 * fully visible; only in a VISIBLE tab, with reduced-motion off, are
 * below-the-fold elements hidden and then revealed on intersection.
 * Headless renderers, background tabs, no-JS visitors, and print always
 * get static, fully visible content (see globals.css). A fail-safe timer
 * guarantees nothing stays hidden.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (document.visibilityState !== "visible") return;

    // already on screen — leave it visible, no flash
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    el.classList.add("will-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("revealed");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const failSafe = window.setTimeout(() => {
      el.classList.add("revealed");
      io.disconnect();
    }, 8000);

    return () => {
      window.clearTimeout(failSafe);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ ["--reveal-delay" as string]: `${delay}s` }}>
      {children}
    </div>
  );
}
