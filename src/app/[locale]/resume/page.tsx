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

/** refined section label — a quiet index + strong small-caps + a hairline */
function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 mt-10 flex items-baseline gap-3.5 print:mt-7">
      <span className="font-mono text-[0.66rem] font-medium tabular-nums text-neutral-300">
        {index}
      </span>
      <h2 className="whitespace-nowrap text-[0.72rem] font-bold uppercase tracking-[0.2em] text-neutral-900">
        {children}
      </h2>
      <span className="h-px flex-1 translate-y-[-2px] bg-neutral-200" aria-hidden="true" />
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

      {/* the document — a premium paper sheet on screen, clean A4 in print */}
      <article className="resume-sheet mx-auto w-full max-w-[54rem] overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-[0_30px_90px_-32px_rgba(2,8,30,0.7)] ring-1 ring-black/5 print:max-w-none print:overflow-visible print:rounded-none print:shadow-none print:ring-0">
        {/* screen-only brand accent bar */}
        <div
          aria-hidden="true"
          className="h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-400 print:hidden"
        />

        <div className="px-9 py-11 sm:px-16 sm:py-14 print:p-0">
          {/* ── letterhead ── */}
          <header>
            <div className="flex items-start justify-between gap-8">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 text-neutral-900">
                  <AriseMark className="size-[1.35rem]" />
                  <span className="font-mono text-[0.64rem] font-medium uppercase tracking-[0.28em] text-neutral-400">
                    {r.documentTag}
                  </span>
                </div>
                <h1 className="heading-type mt-5 text-[2.6rem] leading-[0.98] tracking-[-0.025em] text-neutral-900">
                  {r.name}
                </h1>
                <p className="mt-3 text-[1.05rem] font-medium leading-snug text-neutral-600">
                  {r.role}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- plain img prints reliably */}
              <img
                src="/avatar.jpg"
                alt={content.about.portraitAlt}
                width={88}
                height={88}
                className="size-[4.75rem] shrink-0 rounded-full object-cover ring-1 ring-neutral-200 sm:size-[5.25rem]"
              />
            </div>

            <p className="mt-6 font-mono text-[0.74rem] leading-relaxed tracking-wide text-neutral-500">
              {r.contactLine.join("      ·      ")}
            </p>

            {/* commanding rule under the letterhead */}
            <div className="mt-6 flex items-center gap-0" aria-hidden="true">
              <span className="h-[2.5px] w-16 rounded-full bg-cyan-500 print:bg-neutral-900" />
              <span className="h-[1.5px] flex-1 bg-neutral-900" />
            </div>
          </header>

          {/* ── lead statement — the executive positioning ── */}
          <section className="print-avoid-break">
            <SectionHeading index="01">{r.summaryHeading}</SectionHeading>
            <p className="max-w-[62ch] text-[1.0625rem] leading-[1.72] text-neutral-800">
              {r.summary}
            </p>
          </section>

          <section>
            <SectionHeading index="02">{r.productHeading}</SectionHeading>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <p className="text-[1.05rem] font-bold text-neutral-900">{r.productName}</p>
              <p className="font-mono text-[0.74rem] text-neutral-500">{r.productPeriod}</p>
            </div>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-neutral-700">
              {r.productIntro}
            </p>
            <p className="mt-2 font-mono text-[0.72rem] text-neutral-500">{r.productLinks}</p>
            <div className="mt-4 space-y-4">
              {r.services.map((service) => (
                <div key={service.name} className="print-avoid-break">
                  <h3 className="flex items-center gap-2 text-[0.9375rem] font-semibold text-neutral-900">
                    <span
                      aria-hidden="true"
                      className="inline-block size-1.5 rounded-full bg-cyan-500 print:bg-neutral-900"
                    />
                    {service.name}
                  </h3>
                  <ul className="mt-2 space-y-1.5 pl-[1.4rem]">
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
            <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2 print:grid-cols-2">
              {r.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="relative pl-[1.05rem] text-[0.9rem] leading-relaxed text-neutral-700 before:absolute before:left-0 before:top-[0.62em] before:h-[3px] before:w-[7px] before:rounded-full before:bg-cyan-500 before:content-[''] print:before:bg-neutral-900"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid-break">
            <SectionHeading index="04">{r.skillsHeading}</SectionHeading>
            <dl className="space-y-2.5">
              {r.skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="grid gap-x-6 sm:grid-cols-[10.5rem_1fr] print:grid-cols-[10.5rem_1fr]"
                >
                  <dt className="text-[0.9rem] font-semibold text-neutral-900">{group.name}</dt>
                  <dd className="text-[0.9rem] leading-relaxed text-neutral-700">{group.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="grid gap-x-12 sm:grid-cols-[1.5fr_1fr] print:grid-cols-[1.5fr_1fr]">
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
            </section>

            <section className="print-avoid-break">
              <SectionHeading index="06">{r.lookingForHeading}</SectionHeading>
              <p className="text-[0.9rem] leading-relaxed text-neutral-800">{r.lookingFor}</p>
            </section>
          </div>

          {/* refined footer signature */}
          <div className="mt-12 flex items-center gap-3 border-t border-neutral-200 pt-4 print:mt-10">
            <AriseMark className="size-4 text-neutral-400" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-neutral-400">
              {r.name} · {r.documentTag}
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}
