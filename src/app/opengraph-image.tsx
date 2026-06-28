import { ImageResponse } from "next/og";

export const alt = "Think Hawks — Digital Marketing Agency in Lahore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0d1a0d 0%, #111111 55%, #1a1a2e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#A9C193",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#8EA97A",
            }}
          />
          Digital Marketing Agency · Lahore
        </div>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 104,
            fontWeight: 800,
            marginTop: 28,
            lineHeight: 1.05,
          }}
        >
          Think Hawks
        </div>

        <div
          style={{
            display: "flex",
            color: "#8EA97A",
            fontSize: 60,
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          Dominate the Digital Sky
        </div>

        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.65)",
            fontSize: 30,
            marginTop: 36,
            maxWidth: 900,
          }}
        >
          SEO · Social Media · Web Development · Paid Ads · E-commerce
        </div>
      </div>
    ),
    { ...size },
  );
}
