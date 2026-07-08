import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function About({ content }: { content: Content }) {
  const a = content.about;

  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-20">
          <div>
            <Reveal>
              <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{a.heading}</h2>
            </Reveal>
            <div className="mt-7 space-y-6">
              {a.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="measure text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="self-end">
            <dl className="border-t border-line-strong">
              {a.facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-3.5">
                  <dt className="mono-label uppercase text-faint">{fact.label}</dt>
                  <dd className="mt-1 text-[0.9375rem] font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
