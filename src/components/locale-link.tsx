"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";

export function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

/** Link to another locale that also persists the choice in the cookie. */
export function LocaleLink({
  locale,
  onClick,
  ...props
}: ComponentProps<typeof Link> & { locale: Locale }) {
  return (
    <Link
      {...props}
      hrefLang={locale}
      onClick={(event) => {
        persistLocale(locale);
        onClick?.(event);
      }}
    />
  );
}
