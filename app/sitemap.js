import { getIndexableProjects } from "@/lib/projects-data";
import { serviceSlugs } from "@/lib/services-detail-data";
import { absoluteUrl, isIndexableEnvironment } from "@/lib/site-config";

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    // Update this only when the homepage content or structured data changes.
    lastModified: "2026-09-01",
  },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/works", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
];

export default function sitemap() {
  if (!isIndexableEnvironment()) return [];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectRoutes = getIndexableProjects().map((project) => ({
    path: `/works/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.lastModified
      ? { lastModified: new Date(route.lastModified) }
      : {}),
  }));
}
