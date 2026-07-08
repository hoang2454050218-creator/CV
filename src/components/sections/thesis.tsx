import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function Thesis({ content }: { content: Content }) {
  const t = content.thesis;
  // highlight the product name inside the pull quote when present
  const [beforeArise, afterArise] = t.pull.split(" ARISE ");

  return (
    <section className="border-t border-line">
      <div className="container-page section-pad">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{t.heading}</h2>
          </Reveal>
          <div className="space-y-6">
            {t.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="measure text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 md:mt-24">
          <p className="heading-type mx-auto max-w-[30ch] text-center text-[clamp(1.5rem,1rem+2.2vw,2.4rem)] text-ink">
            {afterArise ? (
              <>
                {beforeArise} <span className="text-brand-strong">ARISE {afterArise}</span>
              </>
            ) : (
              t.pull
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
