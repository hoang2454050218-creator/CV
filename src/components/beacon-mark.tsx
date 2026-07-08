/** Monogram mark: a signal beacon — amber core, hairline sweep ring. */
export function BeaconMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2.5 3.5" />
      <circle cx="12" cy="12" r="2.6" fill="var(--brand)" />
    </svg>
  );
}
