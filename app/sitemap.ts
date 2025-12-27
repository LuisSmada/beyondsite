import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://groupebeyond.com";
  const routes = ["", "/about", "/services", "/contact"];

  const locales = ["fr", "en"] as const;

  return locales.flatMap((l) =>
    routes.map((r) => ({
      url: `${base}/${l}${r}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: r === "" ? 1 : 0.7,
    }))
  );
}
