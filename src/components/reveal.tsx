import type { ReactNode } from "react";

/**
 * Layout wrapper kept for call-site symmetry. Scroll reveals are
 * deliberately not implemented: any hide-then-show mechanism blanks
 * content in print, full-page screenshots, headless renderers, and for
 * assistive tech — see globals.css. Motion lives in the hero entrance,
 * diagram pulses, and interactions instead.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
