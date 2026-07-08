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
                      className="mono-label whitespace-nowrap rounded-full border border-line bg-bg/60 px-3.5 py-1.5 text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <dl className="mt-12 border-t border-line-strong">
          {s.groups.map((group) => (
            <div
              key={group.name}
              className="grid gap-x-8 gap-y-3 border-b border-line py-6 md:grid-cols-[14rem_1fr]"
            >
              <dt className="font-semibold text-ink">{group.name}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono-label rounded-md border border-line bg-bg px-2.5 py-1 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
