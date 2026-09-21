import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "linear-gradient(135deg, #7c3aed 0%, #fbbf24 100%)",
          color: "#1b1130",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 300,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          M
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {siteConfig.shortName}
        </div>
      </div>
    ),
    size,
  );
}
