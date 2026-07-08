import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen cut of the ARISE mark: bolder strokes, no bezel ring — the
// tile is the container. Hex because Satori doesn't parse oklch.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10142b",
        }}
      >
        <svg width={136} height={136} viewBox="0 0 32 32" fill="none">
          <path d="M4.6 21h22.8" stroke="#8fa3cc" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M9.6 26.4 16 7.8l6.4 18.6"
            stroke="#eef2fa"
            strokeWidth="2.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="7.8" r="5.2" fill="#3ec6e8" opacity="0.22" />
          <circle cx="16" cy="7.8" r="2.7" fill="#3ec6e8" />
        </svg>
      </div>
    ),
    size,
  );
}
