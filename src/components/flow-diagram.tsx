"use client";

import type { ServiceContent } from "@/content/types";
import { SERVICE_MARKS } from "./service-marks";

type NodeId = ServiceContent["id"];

interface FlowDiagramProps {
  services: readonly ServiceContent[];
  /** feedback-loop label, e.g. "AIS · REAL OUTCOMES" */
  loopLabel: string;
  sourcesLabel: string;
  outputLabel: string;
  ariaLabel: string;
  selected?: NodeId | null;
  onSelect?: (id: NodeId) => void;
}

/**
 * The signature chart: OMEN → VANTIS → NEXQUOTE as a night routing chart.
 * Amber pulses travel the forward pipeline; a teal ground-truth arc feeds
 * real AIS outcomes back into VANTIS. Pure SVG; pulses are CSS dash
 * animations (static dashes under prefers-reduced-motion).
 */
export function FlowDiagram({
  services,
  loopLabel,
  sourcesLabel,
  outputLabel,
  ariaLabel,
  selected = null,
  onSelect,
}: FlowDiagramProps) {
  const interactive = Boolean(onSelect);

  return (
    <div role="img" aria-label={ariaLabel}>
      {/* ── horizontal chart (≥ md) ─────────────────────────────── */}
      <svg
        viewBox="0 0 900 320"
        className="hidden w-full md:block"
        fill="none"
        aria-hidden="true"
      >
        {/* source lines converging into OMEN */}
        {[
          "M0 50 C 60 50, 80 105, 118 118",
          "M0 105 C 50 105, 70 122, 112 130",
          "M0 165 C 50 165, 70 148, 112 140",
          "M0 220 C 60 220, 80 165, 118 152",
        ].map((d, i) => (
          <g key={d}>
            <path d={d} stroke="var(--line-strong)" strokeWidth="1" />
            <path
              d={d}
              pathLength={240}
              className="flow-path-slow"
              stroke="var(--brand-strong)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: `${i * -1.15}s` }}
            />
          </g>
        ))}
        <text x="8" y="34" className="diagram-mono" fill="var(--faint)">
          {sourcesLabel}
        </text>

        {/* forward paths */}
        <path d="M206 135 C 290 118, 360 118, 444 133" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M206 135 C 290 118, 360 118, 444 133"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M556 133 C 640 118, 710 118, 794 135" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M556 133 C 640 118, 710 118, 794 135"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: "-1.6s" }}
        />

        {/* output line from NEXQUOTE */}
        <path d="M888 140 L 848 140" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M848 140 L 888 140"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: "-0.8s" }}
        />
        <text x="892" y="34" textAnchor="end" className="diagram-mono" fill="var(--faint)">
          {outputLabel}
        </text>

        {/* teal ground-truth arc: reality → VANTIS */}
        <path
          d="M812 190 C 730 282, 570 292, 505 190"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M812 190 C 730 282, 570 292, 505 190"
          pathLength={240}
          className="flow-path accent-glow"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: "-2.3s", animationDuration: "4s" }}
        />
        <path d="M505 190 l 10 4 M505 190 l 11 -3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <text x="660" y="296" textAnchor="middle" className="diagram-mono" fill="var(--accent)">
          {loopLabel}
        </text>

        {/* nodes */}
        {services.map((service, i) => {
          const cx = [160, 500, 840][i];
          const cy = 140;
          const active = selected === service.id;
          const dim = selected !== null && !active;
          const Mark = SERVICE_MARKS[service.id];
          return (
            <g
              key={service.id}
              className={interactive ? "cursor-pointer" : undefined}
              onClick={interactive ? () => onSelect?.(service.id) : undefined}
              opacity={dim ? 0.45 : 1}
              style={{ transition: "opacity 0.4s var(--ease-out-expo)" }}
            >
              <circle cx={cx} cy={cy} r="46" fill="var(--bg)" stroke={active ? "var(--brand-strong)" : "var(--line-strong)"} strokeWidth={active ? 1.5 : 1} />
              <circle
                cx={cx}
                cy={cy}
                r="35"
                className="node-breathe node-spin"
                stroke={active ? "var(--brand-strong)" : "var(--muted)"}
                strokeWidth="1"
                strokeDasharray="3 5"
                style={{ animationDelay: `${i * -1.2}s` }}
              />
              <svg
                x={cx - 15}
                y={cy - 15}
                width="30"
                height="30"
                className="signal-glow"
                style={{ color: "var(--muted)" }}
              >
                <Mark className="" />
              </svg>
              <text x={cx} y={cy + 74} textAnchor="middle" className="diagram-name" fill="var(--ink)">
                {service.name}
              </text>
              <text x={cx} y={cy + 94} textAnchor="middle" className="diagram-mono" fill="var(--faint)">
                {service.nodeRole}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ── vertical chart (< md) ───────────────────────────────── */}
      <svg
        viewBox="0 0 360 640"
        className="mx-auto w-full max-w-[22rem] md:hidden"
        fill="none"
        aria-hidden="true"
      >
        {/* sources into OMEN */}
        {[
          "M60 0 C 60 40, 95 55, 112 74",
          "M120 0 C 120 35, 122 50, 126 68",
          "M185 0 C 185 35, 172 52, 152 70",
        ].map((d, i) => (
          <g key={d}>
            <path d={d} stroke="var(--line-strong)" strokeWidth="1" />
            <path
              d={d}
              pathLength={240}
              className="flow-path-slow"
              stroke="var(--brand-strong)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: `${i * -1.3}s` }}
            />
          </g>
        ))}
        <text x="230" y="20" className="diagram-mono" fill="var(--faint)">
          {sourcesLabel}
        </text>

        {/* forward vertical paths */}
        <path d="M132 156 C 120 210, 120 230, 132 282" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M132 156 C 120 210, 120 230, 132 282"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M132 368 C 120 422, 120 442, 132 494" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M132 368 C 120 422, 120 442, 132 494"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: "-1.6s" }}
        />

        {/* output */}
        <path d="M132 580 L 132 620" stroke="var(--line-strong)" strokeWidth="1" />
        <path
          d="M132 580 L 132 620"
          pathLength={240}
          className="flow-path"
          stroke="var(--brand-strong)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: "-0.8s" }}
        />
        <text x="150" y="614" className="diagram-mono" fill="var(--faint)">
          {outputLabel}
        </text>

        {/* teal ground-truth arc up the right side */}
        <path
          d="M172 540 C 300 500, 300 380, 176 330"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M172 540 C 300 500, 300 380, 176 330"
          pathLength={240}
          className="flow-path accent-glow"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: "-2.3s", animationDuration: "4s" }}
        />
        <path d="M176 330 l 11 -1 M176 330 l 7 9" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <text x="285" y="444" textAnchor="middle" className="diagram-mono" fill="var(--accent)" transform="rotate(90 285 444)">
          {loopLabel}
        </text>

        {/* nodes */}
        {services.map((service, i) => {
          const cy = [116, 326, 536][i];
          const cx = 132;
          const active = selected === service.id;
          const dim = selected !== null && !active;
          const Mark = SERVICE_MARKS[service.id];
          return (
            <g
              key={service.id}
              className={interactive ? "cursor-pointer" : undefined}
              onClick={interactive ? () => onSelect?.(service.id) : undefined}
              opacity={dim ? 0.45 : 1}
              style={{ transition: "opacity 0.4s var(--ease-out-expo)" }}
            >
              <circle cx={cx} cy={cy} r="40" fill="var(--bg)" stroke={active ? "var(--brand-strong)" : "var(--line-strong)"} strokeWidth={active ? 1.5 : 1} />
              <circle
                cx={cx}
                cy={cy}
                r="30"
                className="node-breathe node-spin"
                stroke={active ? "var(--brand-strong)" : "var(--muted)"}
                strokeWidth="1"
                strokeDasharray="3 5"
                style={{ animationDelay: `${i * -1.2}s` }}
              />
              <svg
                x={cx - 13}
                y={cy - 13}
                width="26"
                height="26"
                className="signal-glow"
                style={{ color: "var(--muted)" }}
              >
                <Mark className="" />
              </svg>
              <text x={cx + 56} y={cy - 2} className="diagram-name" fill="var(--ink)">
                {service.name}
              </text>
              <text x={cx + 56} y={cy + 18} className="diagram-mono" fill="var(--faint)">
                {service.nodeRole}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
