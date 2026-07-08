import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:4545";
const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find((p) => existsSync(p));

const WIDTHS = [360, 390, 414, 768, 834, 1024, 1280, 1440, 1920];
const LOCALES = ["vi", "en"];
const SCHEMES = ["dark", "light"];
const ROUTES = ["", "/resume"];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
let failures = 0;
let checks = 0;

for (const route of ROUTES) {
  for (const locale of LOCALES) {
    for (const scheme of SCHEMES) {
      for (const w of WIDTHS) {
        const page = await browser.newPage();
        const errors = [];
        page.on("console", (m) => {
          if (m.type() === "error") errors.push(m.text().slice(0, 100));
        });
        page.on("pageerror", (e) => errors.push("PAGEERROR " + String(e).slice(0, 100)));
        await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: scheme }]);
        await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
        await page.goto(`${BASE}/${locale}${route}`, { waitUntil: "networkidle0", timeout: 45000 });
        await new Promise((r) => setTimeout(r, 400));

        const report = await page.evaluate((vw) => {
          const docOverflow = document.documentElement.scrollWidth - window.innerWidth;
          const offenders = [];
          if (docOverflow > 1) {
            for (const el of document.querySelectorAll("*")) {
              const r = el.getBoundingClientRect();
              if (r.right > vw + 1.5 && r.width <= vw * 2 && r.width > 4) {
                const cls = (el.className?.baseVal ?? el.className ?? "").toString().slice(0, 40);
                offenders.push(`${el.tagName}.${cls}@${Math.round(r.right)}`);
                if (offenders.length >= 5) break;
              }
            }
          }
          // tap targets on narrow viewports
          const smallTaps = [];
          if (vw <= 414) {
            for (const el of document.querySelectorAll("a, button, [role=tab], input")) {
              // skip visually-hidden (sr-only skip link) — 1x1 by design, full-size on focus
              const cs = getComputedStyle(el);
              if (el.getBoundingClientRect().width <= 2 || cs.clip === "rect(0px, 0px, 0px, 0px)") continue;
              const r = el.getBoundingClientRect();
              // WCAG 2.5.8 AA minimum target is 24x24
              if (r.width > 0 && r.height > 0 && (r.height < 24 || r.width < 24)) {
                const label = (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 18);
                if (label) smallTaps.push(`${label}(${Math.round(r.width)}x${Math.round(r.height)})`);
              }
            }
          }
          return { docOverflow, offenders, smallTaps: [...new Set(smallTaps)].slice(0, 6) };
        }, w);

        checks++;
        const problems = [];
        if (report.docOverflow > 1) problems.push(`OVERFLOW ${report.docOverflow}px [${report.offenders.join(", ")}]`);
        if (errors.length) problems.push(`ERRORS ${errors.slice(0, 2).join(" | ")}`);
        if (report.smallTaps.length) problems.push(`TAPS ${report.smallTaps.join(", ")}`);

        const tag = `${route || "/"} ${locale} ${scheme} ${w}px`;
        if (problems.length) {
          failures++;
          console.log(`❌ ${tag}\n   ${problems.join("\n   ")}`);
        }
        await page.close();
      }
    }
  }
}

console.log(`\n=== ${checks} checks · ${failures} with problems ===`);
await browser.close();
process.exit(failures ? 1 : 0);
