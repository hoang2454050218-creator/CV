import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function Skills({ content }: { content: Content }) {
  const s = content.skills;

  return (
    <section id="skills" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="container-page section-pad">
        <Reveal>
          <SectionEyebrow index={6} text={s.eyebrow} />
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{s.heading}</h2>
          <p className="measure mt-5 text-muted">{s.intro}</p>
        </Reveal>

        {/* capability cards — glass, spotlight border, chips that light up */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:auto-rows-fr lg:grid-cols-3">
          {s.groups.map((group, i) => (
            <Reveal
              key={group.name}
              delay={(i % 3) * 0.06}
              className={i === s.groups.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <div
                data-spotlight
                className="contact-card glass flex h-full flex-col rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="mono-label text-brand-strong"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-strong/50 to-transparent" />
                </div>
                <h3 className="heading-type mt-3 text-[1.15rem] text-ink">{group.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="skill-chip mono-label rounded-md border border-line bg-bg/60 px-2.5 py-1 text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* infinite marquee of orchestrated tools — pauses on hover */}
        <Reveal className="mt-10">
          <p className="mono-label uppercase text-faint">{s.marqueeLabel}</p>
          <div className="marquee mt-4">
            <div className="marquee-track">
              {[false, true].map((clone) => (
                <div
                  key={clone ? "clone" : "main"}
                  aria-hidden={clone || undefined}
                  className="flex shrink-0 gap-3 pr-3"
                >
                  {s.marqueeItems.map((tool) => (
                    <span
                      key={tool}
                      className="glass mono-label whitespace-nowrap rounded-full px-3.5 py-1.5 text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
