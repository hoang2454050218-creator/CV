"use client";

import { useEffect } from "react";

/**
 * Global pointer effects, one delegated listener for the whole page:
 * - [data-spotlight]  → tracks --mx/--my for the spotlight border
 * - [data-magnetic]   → gently pulls the element toward the cursor
 * Skipped entirely under prefers-reduced-motion or without a fine pointer.
 */
export function EffectsProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      const target = event.target as Element | null;

      const spot = target?.closest<HTMLElement>("[data-spotlight]");
      if (spot) {
        const rect = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        spot.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      const magnet = target?.closest<HTMLElement>("[data-magnetic]");
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        magnet.style.translate = `${dx * 0.18}px ${dy * 0.22}px`;
      }
    };

    const onOut = (event: PointerEvent) => {
      const magnet = (event.target as Element | null)?.closest<HTMLElement>("[data-magnetic]");
      if (magnet && !magnet.contains(event.relatedTarget as Node)) {
        magnet.style.translate = "0px 0px";
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return null;
}
