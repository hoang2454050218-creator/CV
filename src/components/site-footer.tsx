import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/content/types";
import { BackToTop } from "./back-to-top";
import { AriseMark } from "./arise-mark";
import { BrandIcon } from "./brand-icons";
import { CopyEmail } from "./copy-email";
import { LocaleLink } from "./locale-link";

export function SiteFooter({ locale, content }: { locale: Locale; content: Content }) {
  const f = content.footer;
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <footer id="contact" className="border-t border-line bg-surface">
      <div className="container-page section-pad">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          {/* the invitation — a person, not a form */}
          <div className="relative">
            <div className="dot-grid" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-5">
                <span className="avatar-ring shrink-0">
                  <Image
                    src="/avatar.jpg"
                    alt={content.about.portraitAlt}
                    width={64}
                    height={64}
                    className="size-16 object-cover"
                  />
                </span>
                <h2 className="heading-type text-h2 text-ink">{f.contactHeading}</h2>
              </div>
              <p className="measure mt-5 text-muted">{f.contactBody}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CopyEmail email={f.email} copiedText={f.copiedToast} ariaLabel={f.copyEmail} />
                <Link
                  href={`/${locale}/resume`}
                  className="cta-glow inline-flex h-12 items-center rounded-full border border-line-strong px-6 font-semibold text-ink"
                >
                  {f.downloadCv}
                </Link>
              </div>
            </div>
          </div>

          {/* three channels, one column — full handles, never truncated */}
          <div className="flex flex-col justify-end gap-3">
            {f.links.map((link) => {
              const inner = (
                <>
                  <span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl text-ink">
                    <BrandIcon id={link.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">{link.label}</span>
                    <span className="mono-label block break-words text-faint">{link.value}</span>
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
                  className="contact-card glass group flex items-center gap-4 rounded-2xl px-5 py-4"
                >
                  {inner}
                  <span
                    aria-hidden="true"
                    className="text-muted transition-[transform,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-strong"
                  >
                    ↗
                  </span>
                </a>
              ) : (
                <div
                  key={link.label}
                  className="contact-card glass flex items-center gap-4 rounded-2xl px-5 py-4 opacity-80"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="mono-label flex items-center gap-2 text-faint">
            <AriseMark className="size-4" />
            {f.builtNote}
          </p>
          <LocaleLink
            locale={otherLocale}
            href={`/${otherLocale}`}
            className="mono-label inline-flex min-h-[44px] items-center text-faint underline underline-offset-4 hover:text-ink"
          >
            {f.localeNote}
          </LocaleLink>
        </div>
      </div>

      <BackToTop ariaLabel={f.backToTopAria} />
    </footer>
  );
}
