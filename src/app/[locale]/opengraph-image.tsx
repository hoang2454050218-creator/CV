import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "ARISE — OMEN senses the world, VANTIS predicts the risk, NEXQUOTE prices the shipment.";

// Satori (next/og) doesn't parse oklch — hex approximations of the tokens,
// used only in this generated image. Be Vietnam Pro is bundled because the
// default OG font has no Vietnamese glyphs.
const BG = "#10142b";
const INK = "#eef2fa";
const MUTED = "#a9b4d0";
const CYAN = "#3ec6e8";
const MINT = "#7fe0c4";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const c = getContent(locale);

  const [semiBold, regular] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/BeVietnamPro-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/assets/BeVietnamPro-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: 72,
          fontFamily: "BeVietnamPro",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: CYAN,
              display: "flex",
            }}
          />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: INK, letterSpacing: 4 }}>
            ARISE
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              border: `1.5px solid ${MINT}`,
              borderRadius: 999,
              color: MINT,
              fontSize: 20,
              padding: "8px 22px",
              letterSpacing: 2,
            }}
          >
            {c.hero.livePill}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 600,
              color: INK,
              lineHeight: 1.16,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {c.hero.headline}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 27, color: MUTED }}>
            {c.arise.services.map((service, i) => (
              <div key={service.id} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {i > 0 && <span>→</span>}
                <span style={{ color: CYAN, fontWeight: 600 }}>{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: MUTED }}>
          <span>{`${c.hero.lookingForLabel}: ${c.hero.lookingFor.join(" · ")}`}</span>
          <span style={{ color: MINT }}>{c.hero.diagramLabels.loop}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "BeVietnamPro", data: semiBold, weight: 600, style: "normal" },
        { name: "BeVietnamPro", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
