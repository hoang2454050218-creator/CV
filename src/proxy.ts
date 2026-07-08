import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE } from "@/i18n/config";

/**
 * Locale routing: any path without an /en or /vi prefix is redirected to
 * the visitor's preferred locale (cookie first, then Accept-Language).
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  // match "vi" as a primary language subtag (vi, vi-VN, ...), not as a
  // substring of an unrelated tag or region
  const acceptsVietnamese = /(^|,)\s*vi(-|;|,|$)/.test(
    (request.headers.get("accept-language") ?? "").toLowerCase(),
  );

  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : acceptsVietnamese
        ? "vi"
        : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals, API routes, and any file with an extension
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
