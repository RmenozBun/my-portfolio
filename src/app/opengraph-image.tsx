import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#ffffff88",
            fontFamily: "monospace",
            border: "1px solid #ffffff2a",
            borderRadius: 999,
            padding: "8px 24px",
            marginBottom: 24,
          }}
        >
          Hello, I&apos;m
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#fff" }}>
          RmenozBun
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#ffffffaa", marginTop: 16 }}>
          Computer Science Student
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#ffffff66", marginTop: 12 }}>
          AI · Computer Vision · Software Engineering
        </div>
      </div>
    ),
    { ...size }
  );
}
