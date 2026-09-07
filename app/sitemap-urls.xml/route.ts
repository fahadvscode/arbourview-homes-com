import { NextResponse } from "next/server";
import { LAST_UPDATED_ISO, SITE_URL, SITEMAP_ROUTES } from "@/lib/content";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function GET() {
  const urls = SITEMAP_ROUTES.map((route) => {
    const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    return `<url>
<loc>${xmlEscape(loc)}</loc>
<lastmod>${LAST_UPDATED_ISO}</lastmod>
<changefreq>${route.changeFrequency}</changefreq>
<priority>${route.priority}</priority>
</url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Disposition": "inline",
      "Cache-Control": "private, no-store, no-transform",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
