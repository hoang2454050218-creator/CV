# Design

Visual system for the ARISE founder portfolio. Register: **brand** (design IS the product).
Aesthetic lane, named: **"night-watch chart room"** — a ship's bridge / port control tower at night, now **identity-locked to the product logos**: VANTIS deep-water navy surfaces, OMEN cyan as the signal channel, VANTIS-gradient mint as the ground-truth channel. Industrial grotesque signage type, monospace strictly as instrument readouts. Explicitly NOT: editorial-serif magazine, terminal cosplay, SaaS-cream, purple-AI-gradient. (The blue family is not a category reflex here — it is the shipped products' own brand, redrawn as line-art marks in `service-marks.tsx`.)

## Theme

Dark-mode-first with full light-mode parity. Class-based switching (`.dark` on `<html>`, managed by next-themes), respects `prefers-color-scheme`, manual toggle persisted in localStorage. Scene sentence: an investor opens the link at 11pm after a pitch email — the page should feel like the product's own domain: signals moving over dark water.

## Color — OKLCH only, no hex

Strategy: **Committed** — OMEN cyan carries the identity (~15–25% of the surface: diagram, pulses, CTAs, key evidence) over VANTIS-navy surfaces. Two semantic data channels:

- **Cyan = signal / risk / the machine sensing** (`--brand`)
- **Mint = verified / ground truth / calm** (`--accent`)

Color never decorates; it encodes.

### Dark (default)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(0.148 0.03 262)` | page — VANTIS deep-water navy |
| `--surface` | `oklch(0.183 0.034 260)` | panels, cards |
| `--surface-2` | `oklch(0.222 0.037 258)` | raised / hover |
| `--line` | `oklch(0.305 0.04 255)` | hairline borders |
| `--line-strong` | `oklch(0.43 0.045 250)` | emphasized rules |
| `--ink` | `oklch(0.95 0.012 230)` | body text (≈14:1) |
| `--muted` | `oklch(0.75 0.032 235)` | secondary text (≈7.5:1) |
| `--faint` | `oklch(0.63 0.038 238)` | tertiary / mono labels (≈4.8:1, still AA) |
| `--brand` | `oklch(0.75 0.126 222)` | cyan fills (CTA, pills) — dark ink on them |
| `--brand-ink` | `oklch(0.16 0.04 255)` | text ON cyan fills |
| `--brand-strong` | `oklch(0.79 0.12 218)` | cyan lines/text on navy |
| `--accent` | `oklch(0.83 0.095 175)` | mint text/icons on navy |
| `--accent-ink` | `oklch(0.17 0.04 200)` | text on mint fills |

### Light

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(1 0 0)` | pure white, literal |
| `--surface` | `oklch(0.97 0.008 245)` | panels (cool-tinted toward brand) |
| `--surface-2` | `oklch(0.94 0.012 245)` | raised |
| `--line` | `oklch(0.89 0.015 245)` | hairlines |
| `--line-strong` | `oklch(0.76 0.025 245)` | emphasized rules |
| `--ink` | `oklch(0.19 0.03 258)` | navy-ink body (≈14:1) |
| `--muted` | `oklch(0.43 0.035 250)` | secondary (≈7:1) |
| `--faint` | `oklch(0.52 0.035 248)` | tertiary (≈4.8:1) |
| `--brand` | `oklch(0.75 0.126 222)` | cyan fills keep identity; dark text on them |
| `--brand-ink` | `oklch(0.16 0.04 255)` | text on cyan |
| `--brand-strong` | `oklch(0.5 0.11 230)` | deep cyan for TEXT/strokes on white (≈5:1) |
| `--accent` | `oklch(0.46 0.09 178)` | mint-teal text on white (≈5:1) |
| `--accent-ink` | `oklch(1 0 0)` | white text on (dark) mint fills |

Rule: components use `--brand-strong` for anything that must read against `--bg` (text, strokes, icons); `--brand` only as a fill paired with `--brand-ink`.

## Typography

- **Be Vietnam Pro** (static 400/500/600/700) — ONE family for display, headings, and body: drawn for Vietnamese, diacritics perfectly integrated. Display 700 at −0.03em / lh 1.08; h2 700 at −0.02em. Headings use `text-wrap: balance`. (Space Grotesk was dropped: its variable-font `text=` micro-subset came back as a Light instance that browsers faux-bolded — visibly uneven strokes.)
- **JetBrains Mono** (variable, real Vietnamese subset) — machine voice only: timestamps, metrics, provenance labels, scorecard rows. Never body copy or instructional sentences. Labels ≤ 0.875rem at `letter-spacing: 0.08em`; the one sanctioned exception is evidence-ledger VALUES (proof section), which render as large tabular numerals (1.75rem) — they are data, not labels.
- Scale (fluid): display `clamp(2.6rem, 1rem + 6.6vw, 5.9rem)`; h2 `clamp(1.9rem, 1rem + 3vw, 3rem)`; h3 `1.35rem`; body `1.0625rem/1.7` (dark) `1.65` (light); mono label `0.8125rem`.
- LCP note: `.display-type` loads a tiny `text=` micro-subset of Be Vietnam Pro **700** first (full EN alphabet + Vietnamese diacritics, the only preloaded font, real bold — never a faux-bolded instance), falling back per-glyph to the full family.
- Body measure ≤ 62ch. Vietnamese subset REQUIRED on both families.

## Spacing & layout

- Section rhythm: `clamp(5rem, 14vh, 9.5rem)` vertical; varied — tight groupings inside, generous separations between.
- Page container: max-width 72rem, padding-inline `clamp(1.25rem, 4vw, 2.5rem)`.
- Asymmetry over centered-everything; the chart/diagram may bleed full-width.
- Chart-grid motif: faint 1px graticule lines (`--line` at low alpha) as section backdrop in hero/diagram only.
- Z-scale: nav 40 · overlay 50 · toast 60 · tooltip 70.

## Logo — the ARISE mark ("signal rise")

The A of ARISE drawn as a chart peak breaking above its baseline: one horizontal stroke is simultaneously the chart baseline and the A's crossbar; a cyan dot (`--brand`) at the apex is the sensed signal. Reads four ways at once — the letter A, a risk signal spiking above the noise floor (what OMEN does), a peak (= arise), a beacon light. Two size cuts, one geometry:

- **Display cut** (`arise-mark.tsx`, header ≥24px / footer / OG image): hairline bezel ring (same instrument language as the diagram nodes), strokes in `currentColor` so it adapts to theme, apex dot + soft halo in `--brand`. The halo breathes (`mark-halo-breathe`, 3.6s ease-in-out; static under reduced motion) — same liveness cue as the LIVE pill.
- **Tile cut** (`app/icon.svg` favicon, `app/apple-icon.tsx`): no ring — the navy tile is the container; strokes ~30% bolder for 16px legibility. Hex approximations of the tokens (SVG file / Satori can't resolve CSS vars).

Lockup: mark + "ARISE" in the display face (`heading-type`, wght 650) at `letter-spacing: 0.14em` (signage voice). The wordmark never appears without the mark in nav/OG contexts.

## Skills — the Capability Console

One cohesive **glass instrument panel**, not a grid of cards (multi-agent design bake-off winner, unanimous). A titlebar (pulsing status dot + mono `BẢNG NĂNG LỰC` / `CAPABILITY CONSOLE` + a `NN · MM` readout = channels · items). Below, one hairline-divided **channel row** per capability group: left rail = mono index + sans group name + mono item-count; right = the skills as soft **readout tags** (sans, NOT mono boxes — that was the "crude" failure mode) each with a 4px status-dot that ignites with a glow on hover (the site's LIVE-signal language). Each row carries its own `--row-accent` (Backend cyan · Frontend blue · Data&AI mint · Infra violet · Product cyan) that tints its dots/hover — per-channel identity. Rows are content-height, so no dead space; mobile stacks the rail above the tags.

## Components

- **Buttons**: primary = amber fill (`--brand`/`--brand-ink`), radius 999px, weight 600; secondary = 1px `--line-strong` outline, ink text. Focus: 2px `--brand-strong` outline, offset 2px.
- **LIVE pill**: teal dot pulsing (static in reduced motion) + mono label.
- **Evidence rows** (proof section): ledger-style rows — mono value + prose caption, hairline separators. NOT big-number metric cards.
- **Diagram nodes**: circular instrument nodes, amber core, hairline ring, mono label; expandable detail panel below the chart (one panel, not three identical cards).

## Motion

All CSS — no animation library. Ease: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). No bounce.

- Signature: amber data pulses traveling the OMEN→VANTIS→NEXQUOTE paths (SVG `pathLength`-normalized dash animation); node rings breathe; the teal ground-truth arc pulses back into VANTIS.
- Hero entrance: a short CSS-clock choreography (`.anim-rise`, ≤0.7s), gated behind `html[data-anim]` — a pre-paint inline script sets it only in a *visible* document, so hidden tabs, headless renderers, and no-JS visitors get static, fully visible content. The LCP headline uses a transform-only variant so it paints on frame one.
- Scroll reveals are deliberately absent: any hide-then-show mechanism blanks content in print, full-page screenshots, and headless renderers. Below the fold, content is always instantly readable — investors skim.
- Tab-panel switches re-run the CSS entrance via keyed remount.
- `prefers-reduced-motion`: pulses become static dashes, entrances render final-state, pill dot stops. CSS media query only — non-negotiable.
