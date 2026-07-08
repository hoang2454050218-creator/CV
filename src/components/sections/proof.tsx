import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

/**
 * Evidence ledger — log-style rows, not metric cards. Each value is a
 * receipt the system generates about itself.
 */
export function Proof({ content }: { content: Content }) {
  const p = content.proof;

  return (
    <section id="proof" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="container-page section-pad">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{p.heading}</h2>
            <p className="mt-5 text-muted">{p.intro}</p>
          </Reveal>

          <div>
            <ul className="border-t border-line-strong">
              {p.rows.map((row, i) => (
                <li key={row.value + row.label} className="border-b border-line">
                  <Reveal delay={i * 0.06}>
                    <div className="grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[7rem_1fr]">
                      <p
                        className={`font-mono text-[1.75rem] font-semibold tabular-nums leading-none ${
                          row.channel === "accent" ? "text-accent" : "text-brand-strong"
                        }`}
                      >
                        {row.value}
                      </p>
                      <div>
                        <p className="font-semibold text-ink">{row.label}</p>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                          {row.detail}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="measure mt-8 font-medium text-ink">{p.closing}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
