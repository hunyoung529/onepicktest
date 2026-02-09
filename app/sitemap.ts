import type { MetadataRoute } from "next";

const baseUrl = "https://onepick.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/ranking",
    "/search",
    "/login",
    "/me",
    "/privacy",
    "/terms",
    "/day/mon",
    "/day/tue",
    "/day/wed",
    "/day/thu",
    "/day/fri",
    "/day/sat",
    "/day/sun",
    "/genre/%EB%A1%9C%EB%A7%A8%EC%8A%A4",
    "/genre/%ED%8C%90%ED%83%80%EC%A7%80",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.7,
  }));
}
