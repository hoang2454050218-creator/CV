import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find((p) => existsSync(p));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.goto("http://localhost:4545/en", { waitUntil: "networkidle0" });

// theme toggle: dark <-> light, persisted
const before = await page.evaluate(() => document.documentElement.classList.contains("dark"));
await page.click('button[aria-label*="theme"]');
await new Promise((r) => setTimeout(r, 300));
const after = await page.evaluate(() => ({
  dark: document.documentElement.classList.contains("dark"),
  stored: localStorage.getItem("theme"),
}));
console.log("theme:", { before, after });

// tablist keyboard: focus active tab, ArrowRight -> VANTIS panel
await page.click("#tab-omen");
await page.keyboard.press("ArrowRight");
await new Promise((r) => setTimeout(r, 200));
const tabState = await page.evaluate(() => ({
  focused: document.activeElement?.id,
  panel: document.querySelector('[role="tabpanel"]')?.id,
}));
console.log("tabs after ArrowRight:", tabState);

// lang toggle persists cookie
await page.click('nav[aria-label="Switch language"] a[hreflang="vi"]');
await page.waitForNavigation({ waitUntil: "networkidle0" }).catch(() => {});
const langState = await page.evaluate(() => ({
  path: location.pathname,
  lang: document.documentElement.lang,
  cookie: document.cookie.includes("locale=vi"),
}));
console.log("lang:", langState);

await browser.close();
