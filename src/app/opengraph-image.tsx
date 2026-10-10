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
          backgroundColor: "#0e1012",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#8b96aa",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {personal.title} · {personal.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              color: "#a0aaba",
              fontSize: 30,
              lineHeight: 1.45,
              maxWidth: 940,
            }}
          >
            {personal.bio}
          </div>
        </div>

        <div style={{ display: "flex", color: "#566171", fontSize: 24 }}>
          {siteHost}
        </div>
      </div>
    ),
    { ...size },
  );
}
