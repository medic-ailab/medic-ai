import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://medicai.health";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/demo/", "/vision/", "/review/"].map((path) => ({ url: `${BASE}${path}` }));
}
