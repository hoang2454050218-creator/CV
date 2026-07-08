import Image from "next/image";
import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function About({ content }: { content: Content }) {
  const a = content.about;

  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.6fr] md:gap-16">
          {/* portrait — glass frame, brand glow, subtle grade to sit in the theme */}
          <Reveal>
            <figure
              data-spotlight
              className="glass relative mx-auto max-w-[26rem] overflow-hidden rounded-3xl p-2 md:sticky md:top-24"
              style={{
                boxShadow: "0 24px 60px -24px color-mix(in oklch, var(--brand-strong) 45%, transparent)",
              }}
            >
              <Image
                src="/portrait.jpg"
                alt={a.portraitAlt}
                width={1280}
                height={1600}
                sizes="(min-width: 768px) 26rem, 90vw"
                className="rounded-2xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklch, var(--bg) 55%, transparent) 100%)",
                }}
              />
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <SectionEyebrow index={7} text={a.eyebrow} />
              <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{a.heading}</h2>
            </Reveal>
            <div className="mt-7 space-y-6">
              {a.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="measure text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="mt-10">
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
      </div>
    </section>
  );
}
