import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { AriseMark } from "@/components/arise-mark";
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

/** numbered mono heading + hairline — precise, document-grade */
function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-3.5 mt-8 flex items-center gap-3 print:mt-5">
      <span className="font-mono text-[0.7rem] font-semibold tabular-nums text-neutral-400">
        {index}
      </span>
      <h2 className="whitespace-nowrap text-[0.78rem] font-bold uppercase tracking-[0.14em] text-neutral-900">
        {children}
      </h2>
      <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
    </div>
  );
}

export default async function ResumePage({ params }: PageParams) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);
  const r = content.resume;
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <main className="resume-screen min-h-screen bg-bg py-10 print:bg-white print:py-0">
      {/* screen-only chrome */}
      <div className="no-print mx-auto mb-6 flex w-full max-w-[54rem] flex-wrap items-center justify-between gap-4 px-5">
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

      {/* the document — premium paper sheet on screen, clean A4 in print */}
      <article className="resume-sheet mx-auto w-full max-w-[54rem] overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-[0_30px_90px_-32px_rgba(2,8,30,0.7)] ring-1 ring-black/5 print:max-w-none print:overflow-visible print:rounded-none print:shadow-none print:ring-0">
        {/* screen-only brand accent bar */}
        <div
          aria-hidden="true"
          className="h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-400 print:hidden"
        />

        <div className="px-8 py-10 sm:px-14 print:px-0 print:py-0">
          {/* ── header / letterhead ── */}
          <header>
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 text-neutral-900">
                  <AriseMark className="size-6" />
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    {r.documentTag}
                  </span>
                </div>
                <h1 className="heading-type mt-3.5 text-[2.15rem] leading-[1.05] text-neutral-900">
                  {r.name}
                </h1>
                <p className="mt-1.5 text-[1.05rem] font-medium text-neutral-700">{r.role}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- plain img prints reliably */}
              <img
                src="/avatar.jpg"
                alt={content.about.portraitAlt}
                width={92}
                height={92}
                className="size-20 shrink-0 rounded-xl object-cover ring-1 ring-neutral-200 sm:size-[5.5rem]"
              />
            </div>

            <p className="mt-4 font-mono text-[0.76rem] leading-relaxed text-neutral-600">
              {r.contactLine.join("   ·   ")}
            </p>

            {/* accent + full rule under the letterhead */}
            <div className="mt-4 flex items-center" aria-hidden="true">
              <span className="h-[2px] w-14 rounded-full bg-cyan-500 print:bg-neutral-800" />
              <span className="h-px flex-1 bg-neutral-800" />
            </div>
          </header>

          <section className="print-avoid-break">
            <SectionHeading index="01">{r.summaryHeading}</SectionHeading>
            <p className="text-[0.9375rem] leading-relaxed text-neutral-800">{r.summary}</p>
          </section>

          <section>
            <SectionHeading index="02">{r.productHeading}</SectionHeading>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <p className="text-[1rem] font-bold text-neutral-900">{r.productName}</p>
              <p className="font-mono text-[0.76rem] text-neutral-500">{r.productPeriod}</p>
            </div>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-neutral-700">{r.productIntro}</p>
            <p className="mt-1.5 font-mono text-[0.72rem] text-neutral-500">{r.productLinks}</p>
            <div className="mt-3.5 space-y-3.5">
              {r.services.map((service) => (
                <div key={service.name} className="print-avoid-break">
                  <h3 className="flex items-center gap-2 text-[0.9375rem] font-semibold text-neutral-900">
                    <span
                      aria-hidden="true"
                      className="inline-block size-1.5 rounded-full bg-cyan-500 print:bg-neutral-800"
                    />
                    {service.name}
                  </h3>
                  <ul className="mt-1.5 space-y-1 pl-[1.4rem]">
                    {service.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative text-[0.9rem] leading-relaxed text-neutral-700 before:absolute before:-left-[1rem] before:top-[0.62em] before:h-[3px] before:w-[7px] before:rounded-full before:bg-neutral-400 before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="print-avoid-break">
            <SectionHeading index="03">{r.highlightsHeading}</SectionHeading>
            <ul className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2 print:grid-cols-2">
              {r.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="relative pl-[1rem] text-[0.9rem] leading-relaxed text-neutral-700 before:absolute before:left-0 before:top-[0.62em] before:h-[3px] before:w-[7px] before:rounded-full before:bg-cyan-500 before:content-[''] print:before:bg-neutral-800"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid-break">
            <SectionHeading index="04">{r.skillsHeading}</SectionHeading>
            <dl className="space-y-2">
              {r.skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="grid gap-x-5 sm:grid-cols-[10rem_1fr] print:grid-cols-[10rem_1fr]"
                >
                  <dt className="text-[0.9rem] font-semibold text-neutral-900">{group.name}</dt>
                  <dd className="text-[0.9rem] leading-relaxed text-neutral-700">{group.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="grid gap-x-10 sm:grid-cols-[1.4fr_1fr] print:grid-cols-[1.4fr_1fr]">
            <section className="print-avoid-break">
              <SectionHeading index="05">{r.educationHeading}</SectionHeading>
              {r.education.map((entry) => (
                <div key={entry.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-[0.9rem] font-semibold text-neutral-900">{entry.school}</p>
                    <p className="font-mono text-[0.72rem] text-neutral-500">{entry.period}</p>
                  </div>
                  <p className="mt-0.5 text-[0.9rem] leading-relaxed text-neutral-700">
                    {entry.detail}
                  </p>
                </div>
              ))}
              <SectionHeading index="06">{r.languagesHeading}</SectionHeading>
              <ul className="space-y-1">
                {r.languages.map((language) => (
                  <li key={language} className="text-[0.9rem] text-neutral-700">
                    {language}
                  </li>
                ))}
              </ul>
            </section>

            <section className="print-avoid-break">
              <SectionHeading index="07">{r.lookingForHeading}</SectionHeading>
              <p className="text-[0.9rem] leading-relaxed text-neutral-800">{r.lookingFor}</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
