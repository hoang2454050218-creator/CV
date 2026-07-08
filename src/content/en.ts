import type { Content } from "./types";

// ── remaining TODO ───────────────────────────────────────────────────
// Timeline dates → adjust milestone months if they differ from reality
// ─────────────────────────────────────────────────────────────────────

export const en: Content = {
  meta: {
    siteName: "ARISE — Founder Portfolio",
    title: "Bùi Xuân Hoàng — Founder & sole builder of ARISE",
    description:
      "Second-year logistics student. Sole builder of ARISE — a live, three-service freight risk-intelligence platform (OMEN → VANTIS → NEXQUOTE), shipped solo in seven months by directing AI agents under a self-designed engineering discipline.",
    ogAlt: "ARISE — OMEN senses the world, VANTIS predicts the risk, NEXQUOTE prices the shipment.",
  },

  nav: {
    items: [
      { id: "arise", label: "The system" },
      { id: "proof", label: "Proof" },
      { id: "discipline", label: "How I build" },
      { id: "timeline", label: "Timeline" },
      { id: "about", label: "About" },
      { id: "vision", label: "The ask" },
    ],
    contactCta: "Get in touch",
    downloadCv: "Download CV",
    mainNavAria: "Main",
    menuButtonAria: "Menu",
    languageToggleAria: "Switch language",
    themeToggleAria: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
    skipToContent: "Skip to content",
  },

  hero: {
    livePill: "LIVE IN PRODUCTION",
    liveDetail: "3 services · real signals · since mid-2026",
    kicker: "Bùi Xuân Hoàng — founder, sole builder",
    headline: "I built a live risk-intelligence platform for global freight. Alone. In seven months.",
    subheadline:
      "I'm a second-year logistics student who taught himself to ship software. ARISE is the result: three production services that sense the world's risk, predict its impact on freight routes, and price shipments — built solo by directing AI coding agents under an engineering discipline I designed.",
    lookingForLabel: "Currently looking for",
    lookingFor: ["Seed investment", "Design partners in logistics"],
    ctaExplore: "Explore ARISE",
    ctaDownloadCv: "Download CV",
    ctaContact: "Get in touch",
    diagramCaption:
      "OMEN senses the world → VANTIS predicts the risk → NEXQUOTE prices the shipment.",
    diagramAria:
      "Animated system diagram: data flows from OMEN, a risk signal engine, into VANTIS, a prediction layer, into NEXQUOTE, a freight quoting service. Real AIS outcomes feed back into VANTIS.",
    diagramLabels: {
      sources: "18+ live sources",
      output: "quote · PDF",
      loop: "AIS · real outcomes",
    },
  },

  thesis: {
    heading: "Why I built ARISE",
    paragraphs: [
      "Freight is where the world's risk becomes a number. A drought in Panama, a strike in Rotterdam, a missile in the Red Sea — every one of them eventually lands on an invoice. I study logistics, and I kept seeing the same gap: the people pricing shipments find out about risk last, after it has already cost them.",
      "I couldn't build a team, so I became one. I taught myself software engineering from zero and directed AI coding agents the way a chief engineer directs a crew — with tests, reviews, and security gates they cannot skip. Seven months later, ARISE runs in production: it watches the world, grades its own predictions against real ship movements, and prices freight with math no AI is allowed to invent.",
    ],
    pull: "The people pricing shipments find out about risk last. ARISE exists to make them first.",
  },

  arise: {
    heading: "ARISE — the system",
    intro:
      "Three independent services, deployed in production, wired into one pipeline. Each one is real software with its own repo, CI/CD, and users — together they close the loop from world events to a priced shipment.",
    flowHint: "Select a node to inspect the service",
    stackLabel: "Stack",
    realLabel: "This is real",
    services: [
      {
        id: "omen",
        name: "OMEN",
        nodeRole: "senses the world",
        tagline: "Real-time global risk signal engine.",
        description:
          "OMEN ingests 18+ live data sources — world news, commodities, bunker fuel, weather, port congestion, trade and tariff actions, prediction markets — and fuses them into structured risk signals. Every signal carries its provenance: which sources, which timestamps, which confidence.",
        realDetail:
          "Fail-closed by design: if a source can't be verified in production, OMEN emits nothing rather than a guess. No mock data can reach a downstream consumer. Outputs are signed.",
        stack: ["FastAPI", "Python 3.10+", "Redis", "Kubernetes-ready", "Signed outputs", "SDKs"],
      },
      {
        id: "vantis",
        name: "VANTIS",
        nodeRole: "predicts the risk",
        tagline: "Decision layer that grades itself against real ships.",
        description:
          "VANTIS (RISKCAST) consumes OMEN's signals and grounds them in reality: actual vessel movements from AIS data are the ground truth. It produces calibrated route-risk predictions and forward scenarios — then publishes them, and keeps score.",
        realDetail:
          "Calibration against real outcome data cut out-of-sample error by ~34%. A live Telegram proof-bot publishes predictions and a running scorecard — graded by what ships actually did.",
        stack: ["FastAPI", "Pydantic v2", "async SQLAlchemy", "Postgres", "Redis", "React 19", "Vite", "TypeScript", "Tailwind", "Radix"],
      },
      {
        id: "nexquote",
        name: "NEXQUOTE",
        nodeRole: "prices the shipment",
        tagline: "Multi-tenant freight-quoting SaaS for logistics SMEs.",
        description:
          "NEXQUOTE turns messy real-world requests — dirty text, spreadsheets, PDFs — into deterministic, audit-safe freight quotes: PDF generation, AI-assisted rate import, ERP-style approval workflows. Built for the small forwarders who run on WhatsApp and Excel today.",
        realDetail:
          "Enforces a Security Floor: AI informs context but never invents charge math — pricing is deterministic and auditable. Strict multi-tenant isolation; customer-facing output fails closed.",
        stack: ["Django 5", "DRF", "Celery", "Postgres", "Redis", "Vue 3", "Vite", "TypeScript", "Pinia", "Tailwind", "Playwright E2E"],
      },
    ],
    pipelineNote:
      "The pipeline closes a proof loop: micro quotes meet macro risk, predictions meet real outcomes, and the scorecard keeps everyone honest — including me.",
  },

  proof: {
    heading: "Proof, not demos",
    intro:
      "A student project lives on localhost. ARISE lives in production, and it keeps receipts. The numbers below come from the running system — not from a pitch deck.",
    rows: [
      {
        value: "3/3",
        label: "services live in production",
        detail:
          "OMEN, VANTIS, and NEXQUOTE run on real infrastructure, serving real signals since mid-2026 — not a slide, not a mockup.",
        channel: "brand",
      },
      {
        value: "18+",
        label: "live data sources fused",
        detail:
          "News, commodities, bunker fuel, weather, port congestion, tariffs, prediction markets — each signal traceable to its sources.",
        channel: "brand",
      },
      {
        value: "−34%",
        label: "out-of-sample error after calibration",
        detail:
          "VANTIS predictions calibrated against real AIS vessel outcomes. The number comes from held-out data, not the training set.",
        channel: "accent",
      },
      {
        value: "24/7",
        label: "public proof-bot with a running scorecard",
        detail:
          "A Telegram bot publishes predictions before outcomes are known, then grades itself against what ships actually did. It cannot quietly delete a miss.",
        channel: "accent",
      },
      {
        value: "×3",
        label: "security-hardened CI/CD pipelines",
        detail:
          "All three repos: CodeQL, Dependabot, SBOM + cosign signing, Trivy scans, contract tests. Every release is signed and scanned before it ships.",
        channel: "brand",
      },
      {
        value: "2×",
        label: "Top 10 at national startup competitions",
        detail:
          "ARISE reached the Top 10 at 'Khởi nghiệp cùng Kawai' and I-STARTUP — judged by investors as a venture, not graded as a class project.",
        channel: "accent",
      },
    ],
    closing:
      "The scorecard is the point. Anyone can claim accuracy; ARISE publishes its predictions first and lets reality grade them.",
  },

  discipline: {
    heading: "How I build",
    intro:
      "Solo doesn't mean casual. I ship under a discipline I designed for one specific situation: a founder directing AI coding agents on software that touches money and risk.",
    items: [
      {
        title: "Tests before trust",
        body: "TDD is the contract between me and the agents. Behavior is specified in tests first; an agent's diff that doesn't pass doesn't land. The test suite is my hiring bar.",
      },
      {
        title: "Adversarial verification",
        body: "Every meaningful change is attacked before it merges — a second pass, often a second agent, tries to break the first one's work: edge cases, injection, race conditions, silent failures.",
      },
      {
        title: "Deterministic money paths",
        body: "AI never invents charge math. Pricing, totals, and customer-facing numbers come from deterministic, audited code. AI reads context; arithmetic stays boring on purpose.",
      },
      {
        title: "Fail-closed everything",
        body: "When a data source can't be verified, OMEN emits nothing. When tenant isolation is in doubt, NEXQUOTE refuses the request. Absence of output is a feature; a confident guess is a bug.",
      },
      {
        title: "Surgical diffs",
        body: "Agents work in small, reviewable increments. No thousand-line rewrites, no drive-by refactors. Every diff has one job and I can explain every line that ships.",
      },
      {
        title: "Hardened supply chain",
        body: "CodeQL and Trivy on every push, Dependabot on every dependency, SBOMs generated and releases signed with cosign. The pipeline assumes I will be attacked, because one day I will be.",
      },
    ],
    moatQuote: "I architect, direct, and verify. AI implements — under a discipline I designed.",
    moatCaption:
      "This is the moat: not that I use AI, but that I built the regime that makes AI output trustworthy enough for production.",
  },

  timeline: {
    heading: "Seven months, end to end",
    intro: "From first line of code to a self-grading production system.",
    milestones: [
      {
        date: "2025.11",
        title: "Zero",
        body: "A logistics student with no software background starts teaching himself to build — and to direct AI agents instead of just prompting them.",
      },
      {
        date: "2025.12",
        title: "First end-to-end quote",
        body: "NEXQUOTE turns a messy rate sheet into a clean, deterministic freight quote with a generated PDF for the first time.",
      },
      {
        date: "2026.01",
        title: "First production deploy",
        body: "NEXQUOTE goes live on real infrastructure with multi-tenant isolation and the Security Floor enforced from day one.",
      },
      {
        date: "2026.02",
        title: "OMEN comes online",
        body: "The signal engine starts ingesting live sources; the first fused, provenance-tracked risk signal ships to Redis.",
      },
      {
        date: "2026.04",
        title: "Calibration against reality",
        body: "VANTIS grounds predictions in AIS vessel outcomes. Out-of-sample error drops ~34% — the platform's first earned number.",
      },
      {
        date: "2026.05",
        title: "The proof-bot goes public",
        body: "A Telegram bot begins publishing predictions and a running scorecard. From here on, misses are public record.",
      },
      {
        date: "2026.06",
        title: "Supply chain hardened",
        body: "CodeQL, SBOM + cosign signing, Trivy, and contract tests land across all three repos. The pipeline now defends itself.",
      },
    ],
  },

  skills: {
    heading: "Skills",
    intro:
      "Grouped and honest — everything below is in production code I direct and can explain line by line.",
    groups: [
      {
        name: "Backend",
        items: ["Python", "FastAPI", "Django 5 / DRF", "Celery", "Pydantic v2", "async SQLAlchemy", "PostgreSQL", "Redis"],
      },
      {
        name: "Frontend",
        items: ["TypeScript", "React 19", "Vue 3", "Vite", "Tailwind CSS", "Radix UI", "Pinia"],
      },
      {
        name: "Data & AI",
        items: ["Signal fusion & provenance", "Prediction calibration", "Evaluation & scorecards", "AI-agent orchestration", "Prompt & context engineering"],
      },
      {
        name: "Infra & DevOps",
        items: ["Docker", "Kubernetes-ready services", "CI/CD (GitHub Actions)", "CodeQL / Trivy / Dependabot", "SBOM + cosign signing", "Playwright E2E"],
      },
      {
        name: "Product & Domain",
        items: ["Freight quoting workflows", "Route risk & port operations", "Tariff / trade actions", "Logistics SME operations", "Bilingual product (EN/VN)"],
      },
    ],
    marqueeLabel: "Tools & technologies I orchestrate — not a list of hand-typed code",
    marqueeItems: [
      "Claude Code", "GPT", "Cursor", "FastAPI", "Django 5", "DRF", "Celery",
      "PostgreSQL", "Redis", "React 19", "Vue 3", "Vite", "TypeScript",
      "Tailwind CSS", "Pinia", "Radix UI", "Pydantic v2", "async SQLAlchemy",
      "Docker", "Kubernetes", "GitHub Actions", "CodeQL", "Trivy", "cosign",
      "Playwright", "Telegram Bot API", "Webhooks",
    ],
  },

  about: {
    heading: "About me",
    paragraphs: [
      "I'm Bùi Xuân Hoàng, a second-year logistics and supply-chain student at Da Nang Architecture University (DAU). Two years ago I couldn't write a line of code; I learned because the problems I cared about weren't going to solve themselves, and nobody was going to hand a student an engineering team.",
      "Logistics is my home turf — quoting desks, port delays, tariff notices, the way small forwarders actually work. Software became the lever. Directing AI agents under real engineering discipline is what lets one person operate like a team without pretending to be one.",
    ],
    facts: [
      { label: "Location", value: "Da Nang, Vietnam" },
      { label: "Education", value: "2nd-year Logistics & Supply Chain, Da Nang Architecture University (DAU)" },
      { label: "Recognition", value: "Top 10 — Khởi nghiệp cùng Kawai · Top 10 — I-STARTUP" },
      { label: "Languages", value: "Vietnamese (native), English (professional)" },
      { label: "Email", value: "hoangpro2607004@gmail.com" },
    ],
  },

  vision: {
    heading: "Where ARISE goes",
    body: [
      "Today ARISE closes one loop: world events → route risk → a priced quote, graded by reality. The next step is opening that loop to others — the forwarders, brokers, and shippers who feel these risks first and quantify them last.",
      "The scorecard becomes the product: risk intelligence you don't have to take on faith, because it has a public track record. Vietnam's logistics market is the beachhead; the discipline that built ARISE is what scales it.",
    ],
    askHeading: "What I'm looking for",
    asks: [
      {
        title: "Seed investment",
        body: "To turn a working solo-built platform into a company: infrastructure, data licensing, and the first hires — under the same engineering discipline that got it this far.",
      },
      {
        title: "Design partners",
        body: "Logistics SMEs — forwarders and brokers — who want deterministic quoting and honest risk signals, and are willing to shape the product with real workflows.",
      },
    ],
    ctaLabel: "Start a conversation",
  },

  footer: {
    contactHeading: "Get in touch",
    contactBody:
      "If you're an investor, a logistics operator, or someone who checks the receipts — I'd like to talk.",
    emailLabel: "Email",
    email: "hoangpro2607004@gmail.com",
    links: [
      {
        label: "GitHub",
        value: "hoang2454050218-creator",
        href: "https://github.com/hoang2454050218-creator",
      },
      {
        label: "LinkedIn",
        value: "hoang-bui-404201375",
        href: "https://www.linkedin.com/in/hoang-bui-404201375",
      },
      { label: "Telegram proof-bot", value: "Available on request" },
    ],
    downloadCv: "Download CV (PDF)",
    localeNote: "Đọc bằng tiếng Việt",
    builtNote: "// designed & orchestrated with AI — Bùi Xuân Hoàng © 2026",
    copyEmail: "Copy email",
    copiedToast: "Copied ✓",
    backToTopAria: "Back to top",
  },

  resume: {
    documentTitle: "CV — Bùi Xuân Hoàng",
    name: "Bùi Xuân Hoàng",
    role: "Founder & sole builder, ARISE — freight risk-intelligence platform",
    contactLine: [
      "Da Nang, Vietnam",
      "hoangpro2607004@gmail.com",
      "github.com/hoang2454050218-creator",
      "linkedin.com/in/hoang-bui-404201375",
    ],
    summaryHeading: "Summary",
    summary:
      "Second-year logistics student and self-taught engineer. Solo-designed, built, and operate ARISE: three production services (OMEN → VANTIS → NEXQUOTE) that sense global risk, predict freight-route impact, and generate deterministic quotes — shipped in ~7 months by directing AI coding agents under a self-designed discipline of TDD, adversarial verification, and fail-closed security. Seeking seed investment and logistics design partners.",
    productHeading: "ARISE — the platform",
    productName: "ARISE",
    productPeriod: "2025 — present · live in production since mid-2026",
    productIntro:
      "End-to-end supply-chain risk intelligence: three independent, production-deployed services in one pipeline.",
    services: [
      {
        name: "OMEN — real-time risk signal engine",
        bullets: [
          "Ingests and fuses 18+ live sources (news, commodities, bunker fuel, weather, port congestion, tariffs, prediction markets) into provenance-tracked signals.",
          "Fail-closed 'no mock in production'; signed outputs; SDKs. FastAPI · Python · Redis · Kubernetes-ready.",
        ],
      },
      {
        name: "VANTIS (RISKCAST) — prediction & decision layer",
        bullets: [
          "Calibrated route-risk predictions grounded in real AIS vessel outcomes; calibration cut out-of-sample error ~34%.",
          "Live Telegram proof-bot publishes predictions + self-grading scorecard. FastAPI · Pydantic v2 · async SQLAlchemy · Postgres/Redis · React 19 · TypeScript.",
        ],
      },
      {
        name: "NEXQUOTE — multi-tenant freight-quoting SaaS",
        bullets: [
          "Messy input (text, spreadsheets, PDFs) → deterministic, audit-safe quotes; PDF generation, AI-assisted rate import, ERP-style approvals.",
          "'Security Floor': deterministic pricing, strict tenant isolation, fail-closed output. Django 5 · DRF · Celery · Postgres/Redis · Vue 3 · TypeScript · Playwright E2E.",
        ],
      },
    ],
    highlightsHeading: "Selected proof",
    highlights: [
      "3 services live in production on real infrastructure since mid-2026.",
      "~34% out-of-sample error reduction from calibration against real vessel data.",
      "Public Telegram proof-bot with a running, self-grading prediction scorecard.",
      "Top 10 at two national startup competitions with ARISE: 'Khởi nghiệp cùng Kawai' and I-STARTUP.",
      "Security-hardened CI/CD on all repos: CodeQL, Dependabot, SBOM + cosign, Trivy, contract tests.",
      "AI-native workflow: architect, direct, and verify AI agents under TDD + adversarial review.",
    ],
    skillsHeading: "Skills",
    skillGroups: [
      { name: "Backend", items: "Python, FastAPI, Django/DRF, Celery, Pydantic v2, async SQLAlchemy, PostgreSQL, Redis" },
      { name: "Frontend", items: "TypeScript, React 19, Vue 3, Vite, Tailwind, Radix, Pinia" },
      { name: "Data & AI", items: "Signal fusion, prediction calibration, evaluation/scorecards, AI-agent orchestration" },
      { name: "Infra & DevOps", items: "Docker, Kubernetes-ready, GitHub Actions CI/CD, CodeQL, Trivy, SBOM/cosign, Playwright" },
      { name: "Domain", items: "Freight quoting, route risk, port operations, tariffs, logistics SME workflows" },
    ],
    educationHeading: "Education",
    education: [
      {
        school: "Da Nang Architecture University (DAU)",
        detail: "Logistics & Supply Chain Management (2nd year) — software engineering self-taught in parallel",
        period: "2024 — present",
      },
    ],
    languagesHeading: "Languages",
    languages: ["Vietnamese — native", "English — professional working proficiency"],
    lookingForHeading: "Looking for",
    lookingFor: "Seed investment · design partners (logistics SMEs)",
    printHint: "Print or save as PDF: Ctrl/Cmd + P",
    backToSite: "← Back to site",
    switchLocaleCv: "Xem CV tiếng Việt",
  },
};
