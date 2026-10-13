import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

const MAX_TITLE_LENGTH = 76;
const MAX_EYEBROW_LENGTH = 46;

function clean(value, fallback, maxLength) {
  const normalized = value?.replace(/\s+/g, " ").trim();
  return (normalized || fallback).slice(0, maxLength);
}

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = clean(searchParams.get("title"), "Brand, interface, and web", MAX_TITLE_LENGTH);
  const eyebrow = clean(
    searchParams.get("eyebrow"),
    "Independent creative studio",
    MAX_EYEBROW_LENGTH,
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffcf7",
          color: "#171717",
          padding: "68px 76px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid rgba(23,23,23,0.18)",
            paddingBottom: "28px",
            fontSize: 23,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: siteConfig.themeColor, fontWeight: 700 }}>nymbor</span>
          <span style={{ color: "rgba(23,23,23,0.55)" }}>{eyebrow}</span>
        </div>

        <div style={{ display: "flex", maxWidth: 1060, fontSize: title.length > 54 ? 66 : 78, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.045em" }}>
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 25, color: "rgba(23,23,23,0.62)" }}>
            Strategy · Identity · Interface · Development
          </span>
          <span
            style={{
              display: "flex",
              height: 56,
              width: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: siteConfig.themeColor,
              color: "white",
              fontSize: 31,
              fontWeight: 700,
            }}
          >
            ny
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
      },
    },
  );
}
