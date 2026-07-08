import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function Vision({ content }: { content: Content }) {
  const v = content.vision;

  return (
    <section id="vision" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
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
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {v.asks.map((ask) => (
              <div key={ask.title} className="rounded-2xl border border-line-strong p-6 md:p-8">
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
            className="mt-9 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-brand-ink transition-opacity hover:opacity-85"
          >
            {v.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
