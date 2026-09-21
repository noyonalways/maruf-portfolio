import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function truncate(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = truncate(
    searchParams.get("title") ?? siteConfig.tagline,
    96,
  );
  const subtitle = truncate(
    searchParams.get("subtitle") ?? siteConfig.description,
    150,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #10203f 45%, #1d3f8a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(96, 165, 250, 0.35)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "rgba(251, 191, 36, 0.28)",
            filter: "blur(90px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3b82f6, #fbbf24)",
              fontSize: 30,
              fontWeight: 700,
              color: "#0b1220",
            }}
          >
            MM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {siteConfig.role}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 24,
            fontSize: 20,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
          <div>{siteConfig.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
