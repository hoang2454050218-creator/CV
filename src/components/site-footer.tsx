import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/content/types";
import { BeaconMark } from "./beacon-mark";
import { LocaleLink } from "./locale-link";

export function SiteFooter({ locale, content }: { locale: Locale; content: Content }) {
  const f = content.footer;
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <footer id="contact" className="border-t border-line bg-surface">
      <div className="container-page section-pad">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="heading-type text-h2 text-ink">{f.contactHeading}</h2>
            <p className="measure mt-4 text-muted">{f.contactBody}</p>
            <a
              href={`mailto:${f.email}`}
              className="mt-7 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-brand-ink transition-opacity hover:opacity-85"
            >
              {f.email}
            </a>
            <div className="mt-4">
              <Link
                href={`/${locale}/resume`}
                className="text-[0.9375rem] font-medium text-brand-strong underline decoration-line underline-offset-4 hover:decoration-brand-strong"
              >
                {f.downloadCv}
              </Link>
            </div>
          </div>

          <dl className="self-end">
            {f.links.map((link) => (
              <div
                key={link.label}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3 first:border-t"
              >
                <dt className="mono-label text-faint">{link.label}</dt>
                <dd className="text-[0.9375rem] text-muted">
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline decoration-line underline-offset-4 hover:text-brand-strong hover:decoration-brand-strong"
                    >
                      {link.value}
                    </a>
                  ) : (
                    link.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="flex items-center gap-2 text-sm text-faint">
            <BeaconMark className="size-4" />
            {f.builtNote}
          </p>
          <LocaleLink
            locale={otherLocale}
            href={`/${otherLocale}`}
            className="mono-label text-faint underline underline-offset-4 hover:text-ink"
          >
            {f.localeNote}
          </LocaleLink>
        </div>
      </div>
    </footer>
  );
}
