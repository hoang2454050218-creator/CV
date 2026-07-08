import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function Vision({ content }: { content: Content }) {
  const v = content.vision;

  return (
    <section id="vision" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
          <SectionEyebrow index={8} text={v.eyebrow} />
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{v.heading}</h2>
        </Reveal>
        <div className="mt-7 space-y-6">
          {v.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="measure text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="text-[1.35rem] font-semibold text-ink">{v.askHeading}</h3>
          <div className="mt-6 grid gap-5 md:auto-rows-fr md:grid-cols-2">
            {v.asks.map((ask) => (
              <div key={ask.title} data-spotlight className="contact-card glass h-full rounded-2xl p-6 md:p-8">
                <p className="flex items-center gap-2.5 text-[1.125rem] font-semibold text-ink">
                  <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
                  {ask.title}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{ask.body}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="shine cta-glow mt-9 inline-flex h-12 items-center rounded-full bg-brand px-6 font-semibold text-brand-ink"
          >
            {v.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
