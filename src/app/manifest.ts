import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Think Hawks — Digital Marketing Agency",
    short_name: "Think Hawks",
    description:
      "Premium digital marketing agency in Lahore. SEO, social media, web development, branding, and paid ads.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#8EA97A",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.png", sizes: "149x159", type: "image/png" },
    ],
  };
}
