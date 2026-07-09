import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { TechIcon } from "@/components/tech-icon";
import { TECH_ICONS } from "@/components/tech-icons-data";

/** per-channel accent identity — each row wears its own product color */
const ROW_ACCENT = [
  "var(--acc-omen)",
  "var(--acc-nexquote)",
  "var(--acc-vantis)",
  "var(--violet)",
  "var(--brand-strong)",
];

export function Skills({ content }: { content: Content }) {
  const s = content.skills;
  const totalItems = s.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="container-page section-pad">
        <Reveal>
          <SectionEyebrow index={6} text={s.eyebrow} />
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{s.heading}</h2>
          <p className="measure mt-5 text-muted">{s.intro}</p>
        </Reveal>

        {/* capability console — one glass instrument panel, hairline channel rows */}
        <Reveal className="mt-12">
          <div
            data-spotlight
            className="glass overflow-hidden rounded-2xl"
            style={{ ["--card-accent" as string]: "var(--brand-strong)" }}
          >
            {/* titlebar readout */}
            <div className="flex items-center gap-3 border-b border-line/70 bg-bg/20 px-5 py-3.5 sm:px-6">
              <span
                aria-hidden="true"
                className="live-dot size-[7px] rounded-full bg-brand-strong shadow-[0_0_8px_var(--brand-strong)]"
              />
              <span className="mono-label uppercase text-brand-strong">{s.consoleLabel}</span>
              <span className="mono-label ml-auto whitespace-nowrap uppercase text-faint">
                {`${String(s.groups.length).padStart(2, "0")} · ${totalItems}`}
              </span>
            </div>

            {/* channel rows — one per capability group, each with its own accent */}
            <ul>
              {s.groups.map((group, i) => (
                <li
                  key={group.name}
                  className="console-row grid gap-x-8 gap-y-3 border-t border-line/60 px-5 py-5 first:border-t-0 sm:px-6 md:grid-cols-[13rem_1fr] md:items-baseline"
                  style={{ ["--row-accent" as string]: ROW_ACCENT[i % ROW_ACCENT.length] }}
                >
                  {/* left rail — channel identity */}
                  <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
                    <span className="console-index mono-label text-faint" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-type text-[1.05rem] leading-tight text-ink">
                      {group.name}
                    </h3>
                    <span className="mono-label text-faint/70 md:mt-0.5" aria-hidden="true">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* tag field — sans readout tags with status dots */}
                  <ul className="flex flex-wrap items-center gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="console-tag">
                        <span className="console-tag-dot" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* orchestrated tools — one hairline-topped band, borderless marquee */}
        <Reveal className="mt-10">
          <p className="mono-label uppercase text-faint">{s.marqueeLabel}</p>
          <div className="marquee mt-4">
            <div className="marquee-track">
              {[false, true].map((clone) => (
                <div
                  key={clone ? "clone" : "main"}
                  aria-hidden={clone || undefined}
                  className="flex shrink-0 items-center gap-3 pr-3"
                >
                  {s.marqueeItems.map((tool) => {
                    const data = TECH_ICONS[tool];
                    return (
                      <span
                        key={tool}
                        className="tech-chip"
                        style={
                          data
                            ? {
                                ["--logo-l" as string]: data.light,
                                ["--logo-d" as string]: data.dark,
                              }
                            : undefined
                        }
                      >
                        <TechIcon name={tool} className="tech-chip-logo" />
                        <span className="tech-chip-name">{tool}</span>
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
