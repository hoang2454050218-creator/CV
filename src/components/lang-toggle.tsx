"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { LocaleLink } from "./locale-link";

function pathFor(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}

export function LangToggle({ current, ariaLabel }: { current: Locale; ariaLabel: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className="flex items-center rounded-full border border-line p-0.5">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <LocaleLink
            key={locale}
            locale={locale}
            href={pathFor(pathname, locale)}
            aria-current={active ? "true" : undefined}
            className={`mono-label rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? "bg-surface-2 font-semibold text-ink"
                : "text-faint hover:text-ink"
            }`}
          >
            {locale}
          </LocaleLink>
        );
      })}
    </nav>
  );
}
