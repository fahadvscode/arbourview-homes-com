import { ImageResponse } from "next/og";

export const alt = "Arbourview Georgetown — townhomes and detached homes by Mattamy Homes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #243521 0%, #3E5B3A 58%, #4A6B45 100%)",
          padding: "64px",
          color: "#FAF8F1",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C07A3E",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Pre-construction · Georgetown, Ontario · Information Hub
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Arbourview Georgetown
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#C07A3E",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#F0ECDF",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Townhomes and detached WideLot™ homes by Mattamy Homes at 10114 Eighth Line.
        </div>
      </div>
    ),
    { ...size },
  );
}
