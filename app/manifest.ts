import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEDIC AI",
    short_name: "MEDIC AI",
    description: "An AI health assistant in development. Not medical advice.",
    start_url: "/",
    display: "standalone",
    background_color: "#05052b",
    theme_color: "#05052b",
    icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
