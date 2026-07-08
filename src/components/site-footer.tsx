import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/content/types";
import { BackToTop } from "./back-to-top";
import { BeaconMark } from "./beacon-mark";
import { BrandIcon } from "./brand-icons";
import { CopyEmail } from "./copy-email";
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
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${f.email}`}
                className="shine cta-glow inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-brand-ink"
              >
                {f.email}
              </a>
              <CopyEmail email={f.email} label={f.copyEmail} toastText={f.copiedToast} />
            </div>
            <div className="mt-4">
              <Link
                href={`/${locale}/resume`}
                className="text-[0.9375rem] font-medium text-brand-strong underline decoration-line underline-offset-4 hover:decoration-brand-strong"
              >
                {f.downloadCv}
              </Link>
            </div>
          </div>

          {/* channel pills — full brand marks, 2×2 */}
          <div className="grid content-end gap-3 sm:grid-cols-2">
            {f.links.map((link) => {
              const inner = (
                <>
                  <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl text-ink">
                    <BrandIcon id={link.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">{link.label}</span>
                    <span className="mono-label block truncate text-faint">{link.value}</span>
                  </span>
                </>
              );
              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  data-spotlight
                  className="glass cta-glow group flex items-center gap-3 rounded-2xl px-4 py-3.5"
                >
                  {inner}
                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-strong"
                  >
                    ↗
                  </span>
                </a>
              ) : (
                <div
                  key={link.label}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 opacity-75"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="mono-label flex items-center gap-2 text-faint">
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

      <BackToTop ariaLabel={f.backToTopAria} />
    </footer>
  );
}
