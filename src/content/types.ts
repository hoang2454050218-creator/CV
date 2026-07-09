/**
 * Typed content schema — every visible string on the site lives in
 * content/en.ts and content/vi.ts, keyed by this shape.
 * Proper nouns, product names, and code identifiers stay in English
 * in BOTH locales.
 */

export interface NavContent {
  /** Anchor items rendered in the header. id must match a section id. */
  items: { id: SectionId; label: string }[];
  contactCta: string;
  downloadCv: string;
  mainNavAria: string;
  menuButtonAria: string;
  languageToggleAria: string;
  themeToggleAria: { toDark: string; toLight: string };
  skipToContent: string;
}

export type SectionId =
  | "arise"
  | "proof"
  | "discipline"
  | "timeline"
  | "skills"
  | "about"
  | "vision"
  | "contact";

export interface ServiceContent {
  id: "omen" | "vantis" | "nexquote";
  name: string;
  /** public product URL */
  url: string;
  /** what it does in 3–5 words, shown on the diagram node */
  nodeRole: string;
  /** one-sentence role in the pipeline */
  tagline: string;
  description: string;
  /** the "this is real" detail */
  realDetail: string;
  stack: string[];
}

export interface EvidenceRow {
  /** short mono value, e.g. "−34%", "3/3", "24/7" */
  value: string;
  label: string;
  detail: string;
  /** which data channel colors the value */
  channel: "brand" | "accent";
}

export interface Milestone {
  /** mono date, e.g. "2025.11" */
  date: string;
  title: string;
  body: string;
}

export interface Content {
  meta: {
    siteName: string;
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: NavContent;
  hero: {
    livePill: string;
    liveDetail: string;
    kicker: string;
    headline: string;
    subheadline: string;
    lookingForLabel: string;
    lookingFor: string[];
    ctaExplore: string;
    ctaDownloadCv: string;
    ctaContact: string;
    diagramCaption: string;
    diagramAria: string;
    diagramLabels: { sources: string; output: string; loop: string };
  };
  thesis: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pull: string;
  };
  arise: {
    eyebrow: string;
    heading: string;
    intro: string;
    flowHint: string;
    services: [ServiceContent, ServiceContent, ServiceContent];
    stackLabel: string;
    realLabel: string;
    visitLabel: string;
    pipelineNote: string;
  };
  proof: {
    eyebrow: string;
    heading: string;
    intro: string;
    rows: EvidenceRow[];
    closing: string;
  };
  discipline: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; body: string }[];
    moatQuote: string;
    moatCaption: string;
  };
  timeline: {
    eyebrow: string;
    heading: string;
    intro: string;
    milestones: Milestone[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    intro: string;
    groups: { name: string; items: string[] }[];
    consoleLabel: string;
    marqueeLabel: string;
    marqueeItems: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    portraitAlt: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  vision: {
    eyebrow: string;
    heading: string;
    body: string[];
    askHeading: string;
    asks: { title: string; body: string }[];
    ctaLabel: string;
  };
  footer: {
    contactHeading: string;
    contactBody: string;
    emailLabel: string;
    email: string;
    links: {
      label: string;
      value: string;
      href?: string;
      icon: "github" | "linkedin" | "telegram" | "mail";
    }[];
    downloadCv: string;
    localeNote: string;
    builtNote: string;
    copyEmail: string;
    copiedToast: string;
    backToTopAria: string;
  };
  resume: ResumeContent;
}

export interface ResumeContent {
  documentTitle: string;
  documentTag: string;
  name: string;
  role: string;
  contactLine: string[];
  summaryHeading: string;
  summary: string;
  productHeading: string;
  productName: string;
  productPeriod: string;
  productIntro: string;
  /** public product URLs, one mono line */
  productLinks: string;
  services: { name: string; bullets: string[] }[];
  highlightsHeading: string;
  highlights: string[];
  skillsHeading: string;
  skillGroups: { name: string; items: string }[];
  educationHeading: string;
  education: { school: string; detail: string; period: string }[];
  languagesHeading: string;
  languages: string[];
  lookingForHeading: string;
  lookingFor: string;
  printHint: string;
  backToSite: string;
  switchLocaleCv: string;
}
