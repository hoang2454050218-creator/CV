import { TECH_ICONS } from "./tech-icons-data";

/** Explicit monograms where the auto-derived one would collide or read poorly.
 *  Codex would derive "Co" and clash with cosign. */
const MONOGRAM_OVERRIDE: Record<string, string> = {
  Codex: "Cx",
};

/** Short, distinct monogram for tools without an official brand mark, so each
 *  fallback chip reads as a designed token — not an identical "icon failed to
 *  load" placeholder. e.g. GPT, DRF, Sq (SQLAlchemy), Co (cosign), Cx, Pl, We. */
function monogram(name: string): string {
  if (MONOGRAM_OVERRIDE[name]) return MONOGRAM_OVERRIDE[name];
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, "").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  const w = words.find((x) => /[A-Z]/.test(x)) ?? words[0] ?? cleaned;
  if (/^[A-Z0-9]{2,3}$/.test(w)) return w.slice(0, 3);
  return (w[0] ?? "").toUpperCase() + (w[1] ?? "").toLowerCase();
}

/**
 * Official brand mark for a marquee tech label, filled with `currentColor`
 * so the chip controls the (theme-safe) tint. Labels without a brand icon in
 * simple-icons fall back to a neutral monogram node that matches the instrument
 * aesthetic, so no item ever looks like a broken asset.
 */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const data = TECH_ICONS[name];

  if (!data) {
    const mono = monogram(name);
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.7"
        />
        <text
          x="12"
          y="12"
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-stack-mono)",
            fontSize: mono.length >= 3 ? 6.6 : 8.4,
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          {mono}
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={data.path} fill="currentColor" />
    </svg>
  );
}
