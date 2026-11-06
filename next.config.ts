import type { NextConfig } from "next";

// Every page is static, so the site builds to plain files in out/ for Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
