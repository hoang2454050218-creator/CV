/**
 * Vector interpretations of the three product marks, redrawn as line-art
 * so they sit naturally on the chart. Colors ride the token system.
 *
 * OMEN     — split diamond with a lens/beacon core (intelligence terminal)
 * VANTIS   — V with an arrow breaking upward through it (prediction)
 * NEXQUOTE — N whose diagonal is a route between two waypoints (quoting)
 */

const STROKE = 1.6;

export function OmenMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 3 3 16l11 13M18 3l11 13-11 13"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M16 9.5c2.2 2.3 3.3 4.4 3.3 6.5s-1.1 4.2-3.3 6.5c-2.2-2.3-3.3-4.4-3.3-6.5s1.1-4.2 3.3-6.5Z" stroke="var(--brand-strong)" strokeWidth={STROKE} strokeLinejoin="round" />
      <circle cx="16" cy="16" r="1.4" fill="var(--brand-strong)" />
    </svg>
  );
}

export function VantisMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 6l9.5 20M28 6l-9.5 20h-5"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5 20.5 5.5M20.5 5.5h-4.2M20.5 5.5v4.2"
        stroke="var(--brand-strong)"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NexquoteMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M7 27V5M25 5v22" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M9.5 8.5 22.5 23.5" stroke="var(--brand-strong)" strokeWidth={STROKE} strokeLinecap="round" />
      <circle cx="8.6" cy="7.4" r="2.6" stroke="var(--brand-strong)" strokeWidth={STROKE} />
      <circle cx="23.4" cy="24.6" r="2.6" stroke="var(--brand-strong)" strokeWidth={STROKE} />
    </svg>
  );
}

export const SERVICE_MARKS = {
  omen: OmenMark,
  vantis: VantisMark,
  nexquote: NexquoteMark,
} as const;
