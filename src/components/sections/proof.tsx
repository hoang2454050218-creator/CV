import type { Content } from "@/content/types";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

/**
 * Evidence ledger — a live-telemetry readout. Each row is a receipt the
 * system prints about itself: a hero mono number that counts up, metered by
 * a gauge that draws on scroll, with a status flag. A 2-signal palette
 * (cyan = measured · mint = verified) keeps it distinct from the 5-color
 * console panels while sharing the deep-space instrument DNA.
 */
const accentFor = (channel: string) =>
  channel === "accent" ? "var(--accent)" : "var(--brand-strong)";

/** machine status flags — mono voice, language-neutral like the console counts */
const PROOF_FLAG = ["LIVE", "FUSED", "OOS", "PUBLIC", "SIGNED", "JUDGED"];

export function Proof({ content }: { content: Content }) {
  const p = content.proof;

  return (
    <section id="proof" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="container-page section-pad">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <Reveal className="col-sticky">
            <SectionEyebrow index={3} text={p.eyebrow} />
            <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{p.heading}</h2>
            <p className="mt-5 text-muted">{p.intro}</p>
            {/* closing statement anchored to the bottom of the sticky rail */}
            <p className="measure mt-8 border-t border-line pt-6 font-medium text-ink">
              {p.closing}
            </p>
          </Reveal>

          {/* Evidence ledger — receipts the system prints about itself */}
          <ol className="proof-ledger">
            {p.rows.map((row, i) => (
              <li
                key={row.value + row.label}
                className="proof-line"
                style={{ ["--row-accent" as string]: accentFor(row.channel) }}
              >
                {/* the ledger rule ignites when this line is active */}
                <span className="proof-line-rule" aria-hidden="true" />
                <Reveal delay={i * 0.05} className="proof-line-grid">
                  {/* hero metric — the reading */}
                  <div className="proof-metric">
                    <p className="proof-value">
                      <CountUp value={row.value} />
                    </p>
                    <span className="proof-gauge" aria-hidden="true">
                      <span className="proof-gauge-fill" />
                    </span>
                  </div>

                  {/* readout — status flag, label, detail */}
                  <div className="proof-read">
                    <span className="proof-flag mono-label">
                      <span className="proof-flag-dot" aria-hidden="true" />
                      {PROOF_FLAG[i % PROOF_FLAG.length]}
                    </span>
                    <p className="proof-label">{row.label}</p>
                    <p className="proof-detail">{row.detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
