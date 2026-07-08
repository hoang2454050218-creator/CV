import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { LocaleLink } from "@/components/locale-link";
import { PrintButton } from "@/components/print-button";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const r = getContent(locale).resume;
  return {
    title: r.documentTitle,
    alternates: {
      canonical: `/${locale}/resume`,
      languages: { en: "/en/resume", vi: "/vi/resume" },
    },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-7 border-b border-neutral-300 pb-1 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-neutral-900 print:mt-5">
      {children}
    </h2>
  );
}

export default async function ResumePage({ params }: PageParams) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);
  const r = content.resume;
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <main className="min-h-screen bg-bg py-10 print:bg-white print:py-0">
      {/* screen-only chrome */}
      <div className="no-print mx-auto mb-8 flex w-full max-w-[52rem] flex-wrap items-center justify-between gap-4 px-5">
        <Link
          href={`/${locale}`}
          className="font-medium text-muted transition-colors hover:text-ink"
        >
          {r.backToSite}
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span className="hidden text-sm text-faint sm:inline">{r.printHint}</span>
          <LocaleLink
            locale={otherLocale}
            href={`/${otherLocale}/resume`}
            className="rounded-full border border-line-strong px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            {r.switchLocaleCv}
          </LocaleLink>
          <PrintButton label={content.nav.downloadCv} />
        </div>
      </div>

      {/* the document — always paper-white, ATS-friendly single column */}
      <article className="mx-auto w-full max-w-[52rem] border border-line bg-white px-8 py-10 text-neutral-900 shadow-sm sm:px-12 print:max-w-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[1.75rem] font-bold leading-tight">{r.name}</h1>
            <p className="mt-1 text-[1.0625rem] font-medium text-neutral-700">{r.role}</p>
            <p className="mt-2 text-sm text-neutral-600">{r.contactLine.join("  ·  ")}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- plain img prints reliably */}
          <img
            src="/avatar.jpg"
            alt={content.about.portraitAlt}
            width={96}
            height={96}
            className="size-24 shrink-0 rounded-xl border border-neutral-300 object-cover"
          />
        </header>

        <section className="print-avoid-break">
          <SectionHeading>{r.summaryHeading}</SectionHeading>
          <p className="text-[0.9375rem] leading-relaxed">{r.summary}</p>
        </section>

        <section>
          <SectionHeading>{r.productHeading}</SectionHeading>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6">
            <p className="font-bold">{r.productName}</p>
            <p className="text-sm text-neutral-600">{r.productPeriod}</p>
          </div>
          <p className="mt-1 text-[0.9375rem] leading-relaxed">{r.productIntro}</p>
          <p className="mt-1 font-mono text-[0.8125rem] text-neutral-600">{r.productLinks}</p>
          <div className="mt-3 space-y-3">
            {r.services.map((service) => (
              <div key={service.name} className="print-avoid-break">
                <h3 className="text-[0.9375rem] font-semibold">{service.name}</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-[0.9375rem] leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="print-avoid-break">
          <SectionHeading>{r.highlightsHeading}</SectionHeading>
          <ul className="list-disc space-y-1 pl-5">
            {r.highlights.map((highlight, i) => (
              <li key={i} className="text-[0.9375rem] leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="print-avoid-break">
          <SectionHeading>{r.skillsHeading}</SectionHeading>
          <dl className="space-y-1.5">
            {r.skillGroups.map((group) => (
              <div key={group.name} className="grid gap-x-4 sm:grid-cols-[9rem_1fr] print:grid-cols-[9rem_1fr]">
                <dt className="text-[0.9375rem] font-semibold">{group.name}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-neutral-700">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="print-avoid-break">
          <SectionHeading>{r.educationHeading}</SectionHeading>
          {r.education.map((entry) => (
            <div key={entry.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <p className="text-[0.9375rem] font-semibold">{entry.school}</p>
                <p className="text-sm text-neutral-600">{entry.period}</p>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-neutral-700">{entry.detail}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-x-10 sm:grid-cols-2 print:grid-cols-2">
          <section className="print-avoid-break">
            <SectionHeading>{r.languagesHeading}</SectionHeading>
            <ul className="space-y-1">
              {r.languages.map((language) => (
                <li key={language} className="text-[0.9375rem]">
                  {language}
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid-break">
            <SectionHeading>{r.lookingForHeading}</SectionHeading>
            <p className="text-[0.9375rem] leading-relaxed">{r.lookingFor}</p>
          </section>
        </div>
      </article>
    </main>
  );
}
