/**
 * ARISE mark — "signal rise": the A drawn as a chart peak breaking above its
 * baseline. One horizontal stroke is both the chart baseline and the A's
 * crossbar; the cyan apex dot is the sensed signal. The hairline ring is the
 * instrument bezel, same language as the flow-diagram nodes.
 */
export function AriseMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.3" />
      <path
        d="M5.2 19.6h21.6"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.1 24.4 16 7.6l5.9 16.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="mark-halo" cx="16" cy="7.6" r="5" fill="var(--brand)" opacity="0.16" />
      <circle cx="16" cy="7.6" r="2.3" fill="var(--brand)" />
    </svg>
  );
}
