import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      `${process.env.STRAPI_URL}/api/sitemap/index.xml` ||
      `http://localhost:1337/api/sitemap/index.xml`,
    host: `${process.env.NEXT_PUBLIC_SITE_URL}` || "http://localhost:3000",
  };
}
