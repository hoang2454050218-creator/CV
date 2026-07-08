import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function Timeline({ content }: { content: Content }) {
  const t = content.timeline;

  return (
    <section id="timeline" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{t.heading}</h2>
          <p className="measure mt-5 text-muted">{t.intro}</p>
        </Reveal>

        <ol className="timeline-rail relative mt-14 border-l border-line pl-8 md:ml-[7.5rem] md:pl-12">
          {t.milestones.map((milestone, i) => (
            <li key={milestone.date} className="relative pb-12 last:pb-0">
              <Reveal delay={i * 0.04}>
                {/* rail marker */}
                <span
                  className="absolute top-[0.4rem] size-2.5 rounded-full bg-brand md:hidden"
                  style={{ left: "calc(-2rem - 5px)", boxShadow: "0 0 10px color-mix(in oklch, var(--brand-strong) 70%, transparent)" }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-[0.4rem] hidden size-2.5 rounded-full bg-brand md:inline-block"
                  style={{ left: "calc(-3rem - 5px)", boxShadow: "0 0 10px color-mix(in oklch, var(--brand-strong) 70%, transparent)" }}
                  aria-hidden="true"
                />
                <p className="mono-label uppercase text-brand-strong md:absolute md:-left-[10.5rem] md:top-[0.15rem] md:w-[6.5rem] md:text-right">
                  {milestone.date}
                </p>
                <h3 className="mt-1 text-[1.125rem] font-semibold text-ink md:mt-0">
                  {milestone.title}
                </h3>
                <p className="measure mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {milestone.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
