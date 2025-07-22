import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// GET https://your-site.com/api/og?title=...
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Minji Byun Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0066FF 0%, #001133 100%)",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#FFD400",
          fontSize: 64,
          fontFamily: "Noto Sans JP, sans-serif",
          padding: "0 60px",
        }}
      >
        <span style={{ fontSize: 32, marginBottom: 24 }}>ホスピタリティ × Web3 × クリエイティブ</span>
        <strong>{title}</strong>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: await fetch(
            "https://fonts.gstatic.com/s/notosansjp/v52/-F61fjptAgt5VM-kVkqdyU8n1WJ1o8w.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 700,
        },
      ],
    }
  );
}
