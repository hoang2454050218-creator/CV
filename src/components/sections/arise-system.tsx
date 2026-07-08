"use client";

import { useState } from "react";
import type { Content, ServiceContent } from "@/content/types";
import { FlowDiagram } from "@/components/flow-diagram";
import { Reveal } from "@/components/reveal";

const PANEL_ACCENT: Record<ServiceContent["id"], string> = {
  omen: "var(--acc-omen)",
  vantis: "var(--acc-vantis)",
  nexquote: "var(--acc-nexquote)",
};

export function AriseSystem({ content }: { content: Content }) {
  const a = content.arise;
  const [selectedId, setSelectedId] = useState<ServiceContent["id"]>("omen");
  const selected = a.services.find((s) => s.id === selectedId) ?? a.services[0];
  const accent = PANEL_ACCENT[selected.id];

  return (
    <section id="arise" className="scroll-mt-16 border-t border-line">
      <div className="container-page section-pad">
        <Reveal>
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{a.heading}</h2>
          <p className="measure mt-5 text-muted">{a.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <FlowDiagram
            services={a.services}
            loopLabel={content.hero.diagramLabels.loop}
            sourcesLabel={content.hero.diagramLabels.sources}
            outputLabel={content.hero.diagramLabels.output}
            ariaLabel={content.hero.diagramAria}
            selected={selectedId}
            onSelect={setSelectedId}
          />
        </Reveal>

        {/* node selector — APG tabs pattern: roving tabindex + arrow keys */}
        <Reveal delay={0.05} className="mt-10">
          <p className="mb-3 text-sm text-faint">{a.flowHint}</p>
          <div
            role="tablist"
            aria-label={a.heading}
            className="flex flex-wrap gap-2"
            onKeyDown={(event) => {
              const ids = a.services.map((s) => s.id);
              const index = ids.indexOf(selectedId);
              let next: number | null = null;
              if (event.key === "ArrowRight") next = (index + 1) % ids.length;
              else if (event.key === "ArrowLeft") next = (index - 1 + ids.length) % ids.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = ids.length - 1;
              if (next === null) return;
              event.preventDefault();
              setSelectedId(ids[next]);
              document.getElementById(`tab-${ids[next]}`)?.focus();
            }}
          >
            {a.services.map((service) => {
              const active = service.id === selectedId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={active}
                  aria-controls={active ? `panel-${service.id}` : undefined}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setSelectedId(service.id)}
                  className={`rounded-full border px-4 py-1.5 text-[0.9375rem] font-semibold transition-colors ${
                    active
                      ? "border-brand-strong bg-brand text-brand-ink"
                      : "border-line text-muted hover:border-line-strong hover:text-ink"
                  }`}
                >
                  {service.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="relative mt-6">
          {/* keyed remount per service re-runs the CSS entrance — no rAF dependency */}
          <div
            key={selected.id}
            role="tabpanel"
            id={`panel-${selected.id}`}
            aria-labelledby={`tab-${selected.id}`}
            tabIndex={0}
            data-spotlight
            className="anim-rise glass rounded-2xl p-6 [animation-duration:0.4s] md:p-10"
            style={{ ["--card-accent" as string]: accent }}
          >
              <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:gap-14">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {/* real product mark in a glass tile, brand glow behind it */}
                    <span
                      className="glass group inline-flex size-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-105"
                      style={{
                        boxShadow: `0 0 24px -6px color-mix(in oklch, ${accent} 55%, transparent)`,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- small local SVG, no optimization needed */}
                      <img
                        src={`/logos/${selected.id}.svg`}
                        alt={`${selected.name} logo`}
                        width={44}
                        height={44}
                        className="size-11"
                        style={{
                          filter: `drop-shadow(0 0 8px color-mix(in oklch, ${accent} 60%, transparent))`,
                        }}
                      />
                    </span>
                    <h3 className="display-type text-[1.75rem] text-ink">{selected.name}</h3>
                    <p className="font-medium" style={{ color: accent }}>
                      {selected.tagline}
                    </p>
                  </div>
                  <p className="measure mt-5 text-muted">{selected.description}</p>

                  <div
                    className="mt-7 rounded-xl border bg-bg/50 p-5"
                    style={{ borderColor: `color-mix(in oklch, ${accent} 45%, var(--line))` }}
                  >
                    <p className="mono-label flex items-center gap-2 uppercase" style={{ color: accent }}>
                      <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden="true">
                        <path d="M1.5 6.5 4.5 9.5 10.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {a.realLabel}
                    </p>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink">{selected.realDetail}</p>
                  </div>
                </div>

                <div className="md:border-l md:border-line md:pl-10">
                  <p className="mono-label uppercase text-faint">{a.stackLabel}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {selected.stack.map((tech) => (
                      <li
                        key={tech}
                        className="mono-label stack-pill rounded-md border border-line px-2.5 py-1 text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
        </div>

        <Reveal delay={0.05}>
          <p className="measure mt-10 text-muted">{a.pipelineNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
