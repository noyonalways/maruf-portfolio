import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #7c3aed 0%, #fbbf24 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontSize: 112,
            fontWeight: 700,
            lineHeight: 1,
            color: "#1b1130",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size },
  );
}
