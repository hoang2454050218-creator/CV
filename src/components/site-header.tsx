"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { NavContent } from "@/content/types";
import { AriseMark } from "./arise-mark";
import { LangToggle } from "./lang-toggle";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, nav }: { locale: Locale; nav: NavContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active-section indicator
  useEffect(() => {
    const sections = nav.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    for (const section of sections) io.observe(section);
    return () => io.disconnect();
  }, [nav.items]);

  return (
    <header
      className="header-glass sticky top-0 border-b border-line"
      data-scrolled={scrolled}
      style={{ zIndex: "var(--z-nav)" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink"
      >
        {nav.skipToContent}
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 text-ink"
          onClick={() => setOpen(false)}
        >
          <AriseMark className="size-7" />
          <span className="heading-type text-[1.05rem] tracking-[0.14em]">ARISE</span>
        </Link>

        <nav aria-label={nav.mainNavAria} className="hidden items-center gap-7 lg:flex">
          {nav.items.map((item) => (
            <a
              key={item.id}
              href={`/${locale}#${item.id}`}
              data-active={activeId === item.id}
              className="nav-link text-[0.9375rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LangToggle current={locale} ariaLabel={nav.languageToggleAria} />
          <ThemeToggle labels={nav.themeToggleAria} />
          <a
            href={`/${locale}#contact`}
            className="shine cta-glow hidden rounded-full bg-brand px-4 py-1.5 text-[0.9375rem] font-semibold text-brand-ink lg:inline-block"
          >
            {nav.contactCta}
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={nav.menuButtonAria}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 20 20" className="size-[18px]" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* kept mounted (hidden) so aria-controls stays a valid reference */}
      <nav
        id="mobile-nav"
        aria-label={nav.mainNavAria}
        hidden={!open}
        className="header-glass border-t border-line lg:hidden"
        data-scrolled="true"
      >
        <div className="container-page flex flex-col py-3">
          {nav.items.map((item) => (
            <a
              key={item.id}
              href={`/${locale}#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-[1rem] font-medium text-muted last:border-b-0 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`/${locale}#contact`}
            onClick={() => setOpen(false)}
            className="mt-3 self-start rounded-full bg-brand px-5 py-2 font-semibold text-brand-ink"
          >
            {nav.contactCta}
          </a>
        </div>
      </nav>
    </header>
  );
}
