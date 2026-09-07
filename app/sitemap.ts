import type { MetadataRoute } from "next";
import { LAST_UPDATED_ISO, SITE_URL, SITEMAP_ROUTES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${LAST_UPDATED_ISO}T00:00:00.000Z`);

  return SITEMAP_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
