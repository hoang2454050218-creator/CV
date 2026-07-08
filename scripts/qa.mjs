import puppeteer from "puppeteer-core";
import { mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const BASE = "http://localhost:4545";
const OUT = path.join(process.env.QA_OUT ?? import.meta.dirname, "shots");
mkdirSync(OUT, { recursive: true });

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA + "/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = CHROME_PATHS.find((p) => existsSync(p));
if (!executablePath) throw new Error("No Chrome/Edge found");
console.log("browser:", executablePath);

const browser = await puppeteer.launch({ executablePath, headless: "new" });
const page = await browser.newPage();

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning")
    errors.push(`[${msg.type()}] ${msg.text().slice(0, 300)}`);
});
page.on("pageerror", (err) => errors.push(`[pageerror] ${String(err).slice(0, 300)}`));
page.on("requestfailed", (req) =>
  errors.push(`[requestfailed] ${req.url()} ${req.failure()?.errorText}`),
);

const cases = [
  { name: "en-dark-desktop", url: "/en", w: 1440, h: 900, scheme: "dark" },
  { name: "en-light-desktop", url: "/en", w: 1440, h: 900, scheme: "light" },
  { name: "vi-dark-desktop", url: "/vi", w: 1440, h: 900, scheme: "dark" },
  { name: "en-dark-mobile", url: "/en", w: 375, h: 812, scheme: "dark" },
  { name: "vi-light-mobile", url: "/vi", w: 375, h: 812, scheme: "light" },
  { name: "en-dark-360", url: "/en", w: 360, h: 740, scheme: "dark" },
  { name: "en-resume", url: "/en/resume", w: 1280, h: 900, scheme: "dark" },
  { name: "vi-resume", url: "/vi/resume", w: 1280, h: 900, scheme: "light" },
];

for (const c of cases) {
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: c.scheme }]);
  await page.setViewport({ width: c.w, height: c.h, deviceScaleFactor: 1 });
  await page.goto(BASE + c.url, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1600)); // let entrance animations settle

  const metrics = await page.evaluate(() => ({
    overflowX: document.documentElement.scrollWidth - window.innerWidth,
    title: document.title,
    lang: document.documentElement.lang,
    dark: document.documentElement.classList.contains("dark"),
    h1Visible: (() => {
      const h1 = document.querySelector("h1");
      if (!h1) return false;
      const st = getComputedStyle(h1.closest(".anim-rise") ?? h1);
      return st.opacity === "1";
    })(),
  }));
  console.log(c.name, JSON.stringify(metrics));

  await page.screenshot({ path: path.join(OUT, `${c.name}.png`), fullPage: true });
}

// print pdf sanity: emulate print on resume
await page.goto(BASE + "/en/resume", { waitUntil: "networkidle0" });
await page.emulateMediaType("print");
await page.pdf({ path: path.join(OUT, "cv-en.pdf"), format: "A4", printBackground: false });
await page.emulateMediaType("screen");
await page.goto(BASE + "/vi/resume", { waitUntil: "networkidle0" });
await page.emulateMediaType("print");
await page.pdf({ path: path.join(OUT, "cv-vi.pdf"), format: "A4", printBackground: false });

console.log("console/network issues:", errors.length ? errors : "NONE");
await browser.close();
