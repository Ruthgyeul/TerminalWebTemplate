import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/siteConfig";

/**
 * Generates /sitemap.xml.
 *
 * List every public route here. As the site grows, add entries (or map over a
 * data source — CMS, filesystem, etc.) so search engines discover new pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
