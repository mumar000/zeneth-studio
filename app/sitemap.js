import { getIndexableProjects } from "@/lib/projects-data";
import { serviceSlugs } from "@/lib/services-detail-data";
import { absoluteUrl, isIndexableEnvironment } from "@/lib/site-config";

// Actual content revision dates, not the date of every build or crawl.
// Update only the entry for the page whose substantive content changed.
const contentRevisions = {
  "/": "2026-10-12",
  "/about": "2026-10-12",
  "/services": "2026-10-12",
  "/works": "2026-10-12",
  "/contact": "2026-10-12",
  "/services/brand-identity": "2026-10-12",
  "/services/interface-design": "2026-10-12",
  "/services/web-development": "2026-10-12",
  "/works/arpm": "2026-10-12",
  "/works/lets-grub": "2026-10-12",
  "/works/spreadshop": "2026-10-12",
  "/works/sapphire": "2026-10-12",
  "/works/mogulbay": "2026-10-12",
};

export default function sitemap() {
  if (!isIndexableEnvironment()) return [];

  const paths = [
    "/", "/about", "/services", "/works", "/contact", "/privacy", "/terms",
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...getIndexableProjects().map((project) => `/works/${project.slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    ...(contentRevisions[path] ? { lastModified: contentRevisions[path] } : {}),
  }));
}
