import type { Metadata } from "next";
import { Archivo, Roboto_Mono } from "next/font/google";
import { redirect } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { getContent } from "@/content";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

// latin + vietnamese only: latin-ext adds ~25% payload for glyphs the site
// never renders, and the font is on the LCP critical path
// preload: false — only the 10KB display micro-subset below is preloaded;
// body text swaps in from a metrics-matched fallback, keeping FCP/LCP fast
const archivo = Archivo({
  subsets: ["latin", "vietnamese"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
  preload: false,
});

// Micro-subset of Archivo for display type (the LCP headline): full EN
// alphabet + digits + punctuation + complete Vietnamese diacritics in one
// tiny file, so the hero renders in the brand font almost immediately.
// Any character outside this set falls back per-glyph to the full Archivo
// above — same typeface, just a later arrival.
const archivoDisplay = Archivo({
  // @ts-expect-error -- `text` is a documented next/font option (subsets the
  // font to these characters); the generated per-font types omit it
  text: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:!?'‘’“”…()%–—·-→àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ",
  variable: "--font-archivo-display",
  axes: ["wdth"],
  display: "swap",
});

// Roboto Mono (not Geist Mono): the machine-voice font must cover Vietnamese
const robotoMono = Roboto_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono-var",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const c = getContent(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: c.meta.title,
      template: `%s — ${c.meta.siteName}`,
    },
    description: c.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", vi: "/vi" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      siteName: c.meta.siteName,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutParams & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    redirect(`/${defaultLocale}`);
  }

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${archivoDisplay.variable} ${robotoMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* pre-paint gate: entrance animations only in a visible document */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document;function on(){d.documentElement.setAttribute("data-anim","1");d.removeEventListener("visibilitychange",on)}if(d.visibilityState==="visible"){on()}else{d.addEventListener("visibilitychange",on)}})();`,
          }}
        />
      </head>
      <body className="bg-bg font-sans text-ink">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
