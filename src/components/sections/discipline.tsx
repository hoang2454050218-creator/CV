import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

/** per-principle accent identity, cohesive with the Skills console rows */
const PRINCIPLE_ACCENT = [
  "var(--acc-omen)",
  "var(--acc-vantis)",
  "var(--acc-nexquote)",
  "var(--violet)",
  "var(--brand-strong)",
  "var(--acc-omen)",
];

export function Discipline({ content }: { content: Content }) {
  const d = content.discipline;

  return (
    <section id="discipline" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
          <SectionEyebrow index={4} text={d.eyebrow} />
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{d.heading}</h2>
          <p className="measure mt-5 text-muted">{d.intro}</p>
        </Reveal>

        {/* Protocol Console — the Capability Console language applied to method:
            six numbered principles stationed on a spine that draws itself as
            you scroll. One system with #skills. */}
        <Reveal className="mt-12">
          <div
            data-spotlight
            className="glass protocol-panel overflow-hidden rounded-2xl"
            style={{ ["--card-accent" as string]: "var(--brand-strong)" }}
          >
            {/* titlebar readout — mirrors the Skills console chrome */}
            <div className="flex items-center gap-3 border-b border-line/70 bg-bg/20 px-5 py-3.5 sm:px-6">
              <span
                aria-hidden="true"
                className="live-dot size-[7px] rounded-full bg-brand-strong shadow-[0_0_8px_var(--brand-strong)]"
              />
              <span className="mono-label uppercase text-brand-strong">{d.eyebrow}</span>
              <span
                aria-hidden="true"
                className="mono-label ml-auto whitespace-nowrap uppercase text-faint"
              >
                {String(d.items.length).padStart(2, "0")}
              </span>
            </div>

            {/* rows + scroll-drawn spine. base rail painted always; the bright
                draw + traveling head run only where scroll-timeline is supported */}
            <div className="protocol-body-wrap">
              <span className="protocol-spine-head" aria-hidden="true" />
              <ol className="protocol-list">
                {d.items.map((item, i) => (
                  <li
                    key={item.title}
                    className="protocol-row"
                    style={{
                      ["--row-accent" as string]: PRINCIPLE_ACCENT[i % PRINCIPLE_ACCENT.length],
                    }}
                  >
                    <span className="protocol-index" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="protocol-node" aria-hidden="true" />
                    <h3 className="protocol-title heading-type">{item.title}</h3>
                    <p className="protocol-body">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* moat — the conclusion readout */}
        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <figure className="mx-auto max-w-[46ch] text-center">
            <span aria-hidden="true" className="protocol-outro-rule" />
            <blockquote className="display-type mt-8 text-[clamp(1.6rem,1rem+2.4vw,2.6rem)] text-ink">
              &ldquo;{d.moatQuote}&rdquo;
            </blockquote>
            <figcaption className="mx-auto mt-6 max-w-[52ch] text-[0.9375rem] text-muted">
              {d.moatCaption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
