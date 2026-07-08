import { getContent } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Thesis } from "@/components/sections/thesis";
import { AriseSystem } from "@/components/sections/arise-system";
import { Proof } from "@/components/sections/proof";
import { Discipline } from "@/components/sections/discipline";
import { Timeline } from "@/components/sections/timeline";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Vision } from "@/components/sections/vision";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);

  return (
    <>
      <SiteHeader locale={locale} nav={content.nav} />
      <main id="main">
        <Hero locale={locale} content={content} />
        <Thesis content={content} />
        <AriseSystem content={content} />
        <Proof content={content} />
        <Discipline content={content} />
        <Timeline content={content} />
        <Skills content={content} />
        <About content={content} />
        <Vision content={content} />
      </main>
      <SiteFooter locale={locale} content={content} />
    </>
  );
}
