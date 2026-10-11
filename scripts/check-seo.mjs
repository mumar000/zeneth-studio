// Run after npm run build. Checks the HTML crawlers actually receive.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { siteConfig, isIndexableEnvironment } from "../lib/site-config.js";
import { getIndexableProjects } from "../lib/projects-data.js";
import { serviceSlugs } from "../lib/services-detail-data.js";

const output = resolve(".next/server/app");
const read = (file) => readFileSync(resolve(output, file), "utf8");
const htmlFile = (path) => path === "/" ? "index.html" : `${path.slice(1)}.html`;
const decode = (value) => value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi, (entity) => {
  const named = { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">" };
  return named[entity] ?? String.fromCodePoint(entity.startsWith("&#x") ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});
const text = (value) => decode(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));
const normalizeUrl = (value) => new URL(value).href.replace(/\/$/, "");
const flatten = (value) => Array.isArray(value) ? value.flatMap(flatten) : value["@graph"] ? value["@graph"].flatMap(flatten) : [value];

assert(existsSync(resolve(output, "sitemap.xml.body")), "Production output missing. Run npm run build first.");
const expectedPaths = ["/", "/about", "/services", "/works", "/contact", "/privacy", "/terms",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  ...getIndexableProjects().map((project) => `/works/${project.slug}`),
];
const urls = [...read("sitemap.xml.body").matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => decode(m[1]));
assert.equal(urls.length, new Set(urls).size, "Duplicate sitemap URLs");
assert.deepEqual(urls.map((url) => new URL(url).pathname).sort(), [...expectedPaths].sort(), "Sitemap does not match published routes");
assert(read("robots.txt.body").includes(`Sitemap: ${siteConfig.url}/sitemap.xml`));
assert(!/^Disallow: \/\s*$/m.test(read("robots.txt.body")), "Production crawling is blocked");

const titles = new Set();
const descriptions = new Set();
const links = new Set();
let faqCount = 0;
for (const url of urls) {
  assert.equal(new URL(url).origin, siteConfig.url, "Non-canonical sitemap host");
  const path = new URL(url).pathname;
  const html = read(htmlFile(path));
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  const titleTags = [...markup.matchAll(/<title>(.*?)<\/title>/g)];
  assert.equal(titleTags.length, 1, `${path}: expected one title`);
  const title = text(titleTags[0][1]);
  assert(title.includes("Nymbor"), `${path}: title is missing the brand`);
  assert(!titles.has(title), `${path}: duplicate title`);
  titles.add(title);
  const meta = [...markup.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  const descriptionsOnPage = meta.filter((m) => m.name === "description");
  assert.equal(descriptionsOnPage.length, 1, `${path}: expected one description`);
  const description = descriptionsOnPage[0].content;
  assert(description && !descriptions.has(description), `${path}: missing or duplicate description`);
  descriptions.add(description);
  const robots = meta.filter((m) => ["robots", "googlebot"].includes(m.name));
  assert(robots.length && robots.every((m) => !m.content.includes("noindex")), `${path}: accidental noindex`);
  const canonicals = [...markup.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0])).filter((m) => m.rel === "canonical");
  assert.equal(canonicals.length, 1, `${path}: expected one canonical`);
  assert.equal(normalizeUrl(canonicals[0].href), normalizeUrl(url), `${path}: wrong canonical`);
  assert.equal(meta.find((m) => m.property === "og:title")?.content, title, `${path}: social title mismatch`);
  assert.equal(meta.find((m) => m.property === "og:site_name")?.content, "Nymbor");
  assert.equal(normalizeUrl(meta.find((m) => m.property === "og:url")?.content), normalizeUrl(url));
  assert.equal(meta.find((m) => m.name === "twitter:card")?.content, "summary_large_image");
  const ogImage = new URL(meta.find((m) => m.property === "og:image")?.content);
  assert.equal(ogImage.origin, siteConfig.url);
  assert.equal(ogImage.pathname, "/api/og");
  assert.equal([...markup.matchAll(/<h1\b/g)].length, 1, `${path}: expected one H1`);
  assert.equal([...markup.matchAll(/<main\b/g)].length, 1, `${path}: expected one main landmark`);
  const nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => flatten(JSON.parse(m[1])));
  const organizations = nodes.filter((node) => node["@type"] === "Organization");
  const websites = nodes.filter((node) => node["@type"] === "WebSite");
  assert.equal(organizations.length, 1, `${path}: ambiguous organization`);
  assert.equal(organizations[0].name, "Nymbor");
  assert.equal(websites.length, 1, `${path}: ambiguous website`);
  assert.equal(websites[0].name, "Nymbor");
  const pageNode = nodes.find((node) => node["@id"] === `${url}#webpage`);
  if (!["/privacy", "/terms"].includes(path)) assert(pageNode, `${path}: missing page entity`);
  for (const node of nodes) {
    if (node["@type"] === "Service") assert.equal(node.provider["@id"], `${siteConfig.url}/#organization`);
    if (node["@type"] === "FAQPage") {
      assert.equal(node["@id"], `${url}#faq`, `${path}: FAQ belongs to a different page`);
      for (const question of node.mainEntity) {
        assert(text(markup).includes(text(question.name)), `${path}: FAQ question missing from HTML`);
        assert(text(markup).includes(text(question.acceptedAnswer.text)), `${path}: FAQ answer missing from HTML`);
        faqCount++;
      }
    }
  }
  for (const match of markup.matchAll(/<a\b[^>]*>/g)) {
    const href = attrs(match[0]).href;
    if (href?.startsWith("/") && !href.startsWith("//")) links.add(new URL(href, siteConfig.url).pathname);
  }
  console.log(`PASS ${path} — ${title}`);
}
for (const path of links) {
  assert(existsSync(resolve(output, htmlFile(path))) || existsSync(resolve("public", decodeURIComponent(path.slice(1)))), `Broken internal destination: ${path}`);
}
for (const slug of ["feroce", "voyager-supplements"]) {
  assert(/name="robots"[^>]*content="[^"]*noindex/.test(read(`works/${slug}.html`)), `${slug}: review-only project became indexable`);
  assert(!urls.some((url) => url.endsWith(`/works/${slug}`)));
}
assert(/name="robots"[^>]*content="[^"]*noindex/.test(read("_not-found.html")), "404 must be noindex");

// The same production build command must not make Vercel previews indexable.
const original = { VERCEL_ENV: process.env.VERCEL_ENV, NODE_ENV: process.env.NODE_ENV, SITE_INDEXABLE: process.env.SITE_INDEXABLE };
try {
  delete process.env.SITE_INDEXABLE;
  process.env.NODE_ENV = "production";
  for (const [environment, expected] of [["production", true], ["preview", false], ["development", false]]) {
    process.env.VERCEL_ENV = environment;
    assert.equal(isIndexableEnvironment(), expected);
  }
  delete process.env.VERCEL_ENV;
  assert.equal(isIndexableEnvironment(), true);
  process.env.SITE_INDEXABLE = "false";
  assert.equal(isIndexableEnvironment(), false);
  delete process.env.SITE_INDEXABLE;
  process.env.NODE_ENV = "development";
  assert.equal(isIndexableEnvironment(), false);
} finally {
  for (const [key, value] of Object.entries(original)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
}
console.log(`\nSEO checks passed: ${urls.length} indexable pages, ${links.size} internal destinations, ${faqCount} matching FAQ answers, and environment safeguards.`);
