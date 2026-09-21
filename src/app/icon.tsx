import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #7c3aed 0%, #fbbf24 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontSize: 30,
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
