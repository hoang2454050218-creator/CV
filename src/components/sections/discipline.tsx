import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function Discipline({ content }: { content: Content }) {
  const d = content.discipline;

  return (
    <section id="discipline" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{d.heading}</h2>
          <p className="measure mt-5 text-muted">{d.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {d.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="text-[1.125rem] font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 md:mt-24">
          <figure className="mx-auto max-w-[46ch] text-center">
            <blockquote className="display-type text-[clamp(1.6rem,1rem+2.4vw,2.6rem)] text-ink">
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
