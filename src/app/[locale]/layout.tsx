import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { redirect } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { getContent } from "@/content";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";
import { Backdrop } from "@/components/backdrop";
import { EffectsProvider } from "@/components/effects-provider";
import "../globals.css";

// Body: Be Vietnam Pro — drawn FOR Vietnamese; diacritics are first-class.
// Static weights (not variable): load only the four the site uses.
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

// Micro-subset of Be Vietnam Pro Bold for the LCP headline: full EN
// alphabet + digits + punctuation + complete Vietnamese diacritics in one
// tiny preloaded file at the REAL 700 weight (a variable-font text-subset
// previously came back as a Light instance and the browser faux-bolded
// it — the "uneven strokes" bug). Other glyphs fall back to the full face.
const bvpDisplay = Be_Vietnam_Pro({
  weight: "700",
  // @ts-expect-error -- `text` is a documented next/font option (subsets the
  // font to these characters); the generated per-font types omit it
  text: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:!?'‘’“”…()%–—·-→àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ",
  variable: "--font-display-sub",
  display: "swap",
});

// JetBrains Mono (variable, has a real Vietnamese subset) — machine voice
const jetbrainsMono = JetBrains_Mono({
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
      className={`${beVietnam.variable} ${bvpDisplay.variable} ${jetbrainsMono.variable}`}
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
          <Backdrop />
          <EffectsProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
