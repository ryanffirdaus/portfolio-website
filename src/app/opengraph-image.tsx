import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";
import { SITE_URL } from "@/data/site";

export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteHost = new URL(SITE_URL).host;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0c0a",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(46,204,113,0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#2ecc71",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#2ecc71",
              display: "flex",
            }}
          />
          {personal.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#f8faf9",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              color: "#a8c8b2",
              fontSize: 30,
              lineHeight: 1.5,
              maxWidth: 900,
            }}
          >
            {personal.bio}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#4a6e53",
            fontSize: 26,
          }}
        >
          {siteHost}
        </div>
      </div>
    ),
    { ...size },
  );
}
