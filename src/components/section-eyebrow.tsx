/**
 * The one shared section opener: a numbered terminal-comment label.
 * `// 03 — PHƯƠNG PHÁP` — machine voice announcing the human section.
 */
export function SectionEyebrow({ index, text }: { index: number; text: string }) {
  return (
    <p className="mono-label mb-3 uppercase text-brand-strong">
      {`// ${String(index).padStart(2, "0")} — ${text}`}
    </p>
  );
}
