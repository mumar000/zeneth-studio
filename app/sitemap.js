import { getIndexableProjects } from "@/lib/projects-data";
import { serviceSlugs } from "@/lib/services-detail-data";
import { absoluteUrl, isIndexableEnvironment } from "@/lib/site-config";

// Actual content revision dates, not the date of every build or crawl.
// Update only the entry for the page whose substantive content changed.
const contentRevisions = {
  "/": "2026-10-17",
  "/about": "2026-10-17",
  "/works": "2026-10-13",
  "/contact": "2026-10-17",
  "/services/brand-identity": "2026-10-17",
  "/services/interface-design": "2026-10-17",
  "/services/web-development": "2026-10-17",
  "/works/arpm": "2026-10-13",
  "/works/lets-grub": "2026-10-13",
  "/works/spreadshop": "2026-10-13",
  "/works/sapphire": "2026-10-13",
  "/works/mogulbay": "2026-10-13",
  "/works/feroce": "2026-10-17",
};

export default function sitemap() {
  if (!isIndexableEnvironment()) return [];

  const paths = [
    "/", "/about", "/works", "/contact", "/privacy", "/terms",
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...getIndexableProjects().map((project) => `/works/${project.slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    ...(contentRevisions[path] ? { lastModified: contentRevisions[path] } : {}),
  }));
}
