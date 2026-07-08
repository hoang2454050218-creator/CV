import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/content/types";
import { FlowDiagram } from "@/components/flow-diagram";

/** CSS-clock entrance: completes even in hidden tabs and headless renderers. */
function Entrance({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <div className={`anim-rise ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function Hero({ locale, content }: { locale: Locale; content: Content }) {
  const h = content.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="chart-grid absolute inset-0" aria-hidden="true" />
      <div className="radar-sweep" aria-hidden="true" />
      {/* stray signal pings on the chart */}
      <div aria-hidden="true">
        <span className="signal-ping" style={{ top: "18%", left: "72%" }} />
        <span className="signal-ping" style={{ top: "58%", left: "88%", animationDelay: "-1.4s" }} />
        <span className="signal-ping" style={{ top: "12%", left: "38%", animationDelay: "-2.6s" }} />
        <span className="signal-ping hidden md:block" style={{ top: "70%", left: "6%", animationDelay: "-3.4s" }} />
      </div>

      <div className="container-page relative pt-20 pb-14 md:pt-28 md:pb-20">
        <Entrance delay={0}>
          <p className="shimmer-border inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-line bg-surface px-3.5 py-1.5">
            <span className="live-dot inline-block size-2 rounded-full bg-accent-fill" aria-hidden="true" />
            <span className="mono-label font-semibold uppercase text-ink">{h.livePill}</span>
            <span className="mono-label hidden uppercase text-faint sm:inline">
              {h.liveDetail}
            </span>
          </p>
        </Entrance>

        <Entrance delay={0.08}>
          {/* human voice, not machine voice: the founder's name is not telemetry */}
          <div className="mt-10 flex items-center gap-4">
            <span className="avatar-ring shrink-0">
              <Image
                src="/avatar.jpg"
                alt={content.about.portraitAlt}
                width={64}
                height={64}
                className="size-16 object-cover"
                priority
              />
            </span>
            <p className="text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-muted">
              {h.kicker.includes(" — ") ? (
                <>
                  <span className="gradient-name">{h.kicker.split(" — ")[0]}</span>
                  <span> — {h.kicker.split(" — ").slice(1).join(" — ")}</span>
                </>
              ) : (
                h.kicker
              )}
            </p>
          </div>
        </Entrance>

        {/* the claim lands instantly — everything else assembles around it.
            Keeping the LCP element animation-free also keeps LCP honest. */}
        <h1 className="display-type mt-5 max-w-[17ch] text-[length:var(--text-display)] text-ink">
          {h.headline}
        </h1>

        <Entrance delay={0.2}>
          <p className="mt-7 max-w-[54ch] text-[1.1875rem] leading-relaxed text-muted">
            {h.subheadline}
          </p>
        </Entrance>

        <Entrance delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="mono-label uppercase text-faint">{h.lookingForLabel}</span>
            {h.lookingFor.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1 text-sm font-medium text-ink"
              >
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </Entrance>

        <Entrance delay={0.36}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#arise"
              data-magnetic
              className="shine cta-glow group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 font-semibold text-brand-ink"
            >
              {h.ctaExplore}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <Link
              href={`/${locale}/resume`}
              data-magnetic
              className="cta-glow rounded-full border border-line-strong px-6 py-2.5 font-semibold text-ink"
            >
              {h.ctaDownloadCv}
            </Link>
            <a
              href="#contact"
              className="px-2 py-2.5 font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              {h.ctaContact}
            </a>
          </div>
        </Entrance>

        <Entrance delay={0.48} className="mt-16 md:mt-20">
          <FlowDiagram
            services={content.arise.services}
            loopLabel={h.diagramLabels.loop}
            sourcesLabel={h.diagramLabels.sources}
            outputLabel={h.diagramLabels.output}
            ariaLabel={h.diagramAria}
          />
          <p className="mx-auto mt-6 max-w-[52ch] text-center text-sm text-muted">
            {h.diagramCaption}
          </p>

          {/* scroll hint */}
          <div className="mt-12 flex justify-center" aria-hidden="true">
            <div className="flex h-9 w-[22px] items-start justify-center rounded-full border border-line-strong pt-1.5">
              <span className="scroll-hint-dot block size-1.5 rounded-full bg-brand-strong" />
            </div>
          </div>
        </Entrance>
      </div>
    </section>
  );
}
