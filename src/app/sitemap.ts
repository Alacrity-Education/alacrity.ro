import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alacrity.education/en",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          ro: "https://alacrity.education/ro",
        },
      },
    },
    {
      url: "https://alacrity.education/en/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ro: "https://alacrity.education/ro/about",
        },
      },
    },
    {
      url: "https://blog.alacrity.education",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
