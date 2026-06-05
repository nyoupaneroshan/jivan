// src/app/robots.js
import { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_WEBSITE_URL ||
  "https://jivanparivartan.com";

 
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/_next"],
    },
    sitemap: "https://jivanparivartan.com/sitemap.xml",
  };
}
