# Basic SEO Checklist Template

Reusable SEO roadmap for a business website. Replace every placeholder in square brackets before using this document.

## Website details

- Business name: `[BUSINESS_NAME]`
- Canonical domain: `https://[DOMAIN]`
- Primary country: `[COUNTRY]`
- Primary city/region: `[CITY_OR_REGION]`
- Main services/products: `[SERVICE_1]`, `[SERVICE_2]`, `[SERVICE_3]`
- Primary phone: `[PHONE_WITH_COUNTRY_CODE]`
- Primary email: `[EMAIL]`
- Physical address or service area: `[ADDRESS_OR_SERVICE_AREA]`
- Google Business Profile URL: `[GBP_URL]`

## Status labels

- **Done** — implemented and verified.
- **Partial** — some implementation exists, but coverage or verification is incomplete.
- **Missing** — not implemented.
- **External** — requires an account, platform, content, or outreach outside the codebase.

## Master status table

| SEO area | Status | Evidence / action required |
|---|---|---|
| SEO goals and keyword map | Missing | Define lead goals, services/products, cities, search intent, and priority keywords. |
| Google Analytics 4 / event tracking | Missing | Add GA4 or GTM and track form submits, calls, quote clicks, purchases, and WhatsApp clicks. |
| Google Search Console | Missing | Verify the property, submit the sitemap, inspect priority URLs, and monitor indexing. |
| Bing Webmaster Tools | Missing | Verify the site and submit the sitemap. |
| Rank tracking | Missing | Add priority keywords, locations, competitors, and a reporting schedule. |
| Clean URL architecture | Partial | Use short, readable URLs such as `/services/[service-slug]` and `/locations/[city]`. |
| Server rendering / static generation | Partial | Ensure important pages return complete HTML and use SSG/SSR where appropriate. |
| Unique title tags | Missing | Write one useful title per indexable page, usually about 50–60 characters. |
| Unique meta descriptions | Missing | Write one persuasive description per page, usually about 140–160 characters. |
| Canonical tags | Missing | Add one self-referencing canonical URL to every indexable page. |
| Open Graph and Twitter metadata | Missing | Add title, description, URL, image, site name, and card type. |
| Sitemap | Missing | Generate `/sitemap.xml` with every important indexable URL. |
| Robots rules | Missing | Allow valid pages and reference the canonical sitemap. Do not block CSS, JS, or important images. |
| Indexation hygiene | Missing | Test 200, 404/410, 301, noindex, HTTPS, host, and trailing-slash behavior. |
| Image optimization | Missing | Use framework image optimization, meaningful alt text, dimensions, compression, and WebP/AVIF where practical. |
| Core Web Vitals | Missing | Measure LCP, CLS, and INP on mobile and desktop; fix real bottlenecks. |
| Semantic HTML | Missing | Use one clear H1, logical H2/H3 hierarchy, main/nav/footer, labels, and accessible controls. |
| Internal linking | Missing | Link navigation, footer, breadcrumbs, related services/products, projects, and articles with descriptive anchors. |
| Service/product page content | Missing | Include value, audience, location, process, benefits, proof, FAQs, and a clear CTA. |
| Location pages | Conditional | Create only for real service areas with unique, useful local content. |
| Blog/case studies | Missing | Publish original guides, project evidence, checklists, and measurable outcomes. |
| Structured data | Missing | Add only schema supported by visible, accurate page content. |
| Custom 404 and redirects | Missing | Create a helpful 404 page and redirect changed or retired URLs. |
| Lead form | Missing | Add server-side handling, validation, spam protection, consent, success state, and notifications. |
| Phone and WhatsApp CTAs | Missing | Use verified click-to-call and `wa.me` links, especially on mobile. |
| Local listings/citations | External | Claim core profiles and keep name, address, phone, hours, and website consistent. |
| Reviews | External | Request genuine customer reviews and respond professionally. Never buy or fabricate reviews. |
| Backlinks and digital PR | External | Earn relevant links through useful content, associations, suppliers, partners, and editorial coverage. |
| AI visibility | Partial | Publish clear factual content, structured data, original evidence, and consistent external brand references. |

## 1. Foundation: goals, audience, and keywords

Define the conversion actions that matter:

- Lead form submission
- Phone call
- WhatsApp conversation
- Quote/request submission
- Booking or purchase
- Brochure/download request

Create a keyword map with these groups:

- Core service/product terms: `[SERVICE KEYWORDS]`
- Local terms: `[SERVICE] in [CITY]`, `[SERVICE] near me`
- Commercial terms: `[SERVICE] quote`, `[PRODUCT] supplier [CITY]`
- Informational terms: how-to guides, comparisons, checklists, standards, and FAQs
- Brand terms: `[BUSINESS_NAME]`, variations, and legacy names

Assign one primary intent and one primary keyword group to each page. Avoid creating multiple pages that target the same query without a clear purpose.

## 2. Technical SEO

### Required routes

At minimum, review:

- `/`
- `/about`
- `/services`
- `/services/[service-slug]`
- `/products/[product-slug]` if applicable
- `/projects/[project-slug]` or `/case-studies/[slug]`
- `/locations/[city]` if applicable
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

### Metadata pattern for Next.js App Router

Use `metadata` or `generateMetadata` for every page template. Keep titles and descriptions unique, accurate, and aligned with visible content.

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Primary topic] | [BUSINESS_NAME]",
  description: "[Clear benefit, service, location, and next step.]",
  alternates: {
    canonical: "https://[DOMAIN]/[PATH]",
  },
  openGraph: {
    type: "website",
    url: "https://[DOMAIN]/[PATH]",
    title: "[Social title]",
    description: "[Social description]",
    images: ["https://[DOMAIN]/images/[share-image].jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "[Social title]",
    description: "[Social description]",
    images: ["https://[DOMAIN]/images/[share-image].jpg"],
  },
};
```

### Sitemap and robots

The sitemap should include only canonical, indexable, successful URLs. Include dynamic services, products, projects, locations, and articles. Keep one authoritative robots implementation and include:

```text
User-agent: *
Allow: /

Sitemap: https://[DOMAIN]/sitemap.xml
```

## 3. On-page content

For every important service, product, location, or case-study page, check:

- One clear H1 with the page topic.
- Introductory copy explaining value, audience, and location.
- H2/H3 sections for scope, benefits, process, industries/use cases, proof, and FAQs.
- Descriptive internal links to related pages.
- A visible CTA such as `[REQUEST A QUOTE]`, `[CALL NOW]`, or `[CONTACT US]`.
- Real proof: client names, project details, certifications, measurements, dates, or outcomes where permitted.
- No unsupported “best”, “number one”, guaranteed ranking, or fabricated claims.

## 4. Structured data

Use JSON-LD only when the marked-up information is visible and accurate. Select the most specific applicable type:

- `Organization` or a suitable `LocalBusiness` subtype
- `Service`
- `Product` only for genuine defined products
- `FAQPage` for visible question/answer content
- `BreadcrumbList` for pages with a visible breadcrumb path
- `Article` for editorial content
- `WebSite` only when any declared search action actually exists

Validate with:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

Never add fake reviews, ratings, prices, availability, locations, or awards to schema.

## 5. Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add the canonical domain property: `https://[DOMAIN]`.
3. Prefer DNS verification. If using HTML meta verification, configure the token through an environment variable rather than hard-coding a made-up value.
4. Confirm HTTPS, host redirects, canonical URLs, and the production robots file.
5. Submit `https://[DOMAIN]/sitemap.xml`.
6. Inspect and request indexing for the homepage, services/products, highest-value locations, contact page, and priority articles.
7. Review the Pages report for duplicate canonical URLs, excluded pages, blocked resources, redirects, and server errors.
8. Review Core Web Vitals, HTTPS, Mobile Usability, and enhancement reports.
9. Keep property ownership and verification details in the account/deployment vault.

Example Next.js hook:

```ts
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
},
```

Required deployment variable:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=[REAL_GOOGLE_TOKEN]
```

## 6. Local SEO and listings

Local listings are valuable for businesses with a physical location or genuine service areas. Google recommends accurate real-world representation, a precise address/service area, relevant categories, and one profile per location.

Priority order:

1. Google Business Profile
2. Bing Places
3. Apple Business Connect
4. Official social company profiles
5. Relevant national, regional, industry, chamber, supplier, and trade directories

Before submitting listings, confirm one authoritative set of:

- Business name: `[BUSINESS_NAME]`
- Address/service area: `[ADDRESS_OR_SERVICE_AREA]`
- Phone: `[PHONE_WITH_COUNTRY_CODE]`
- Website: `https://[DOMAIN]`
- Hours: `[BUSINESS_HOURS]`
- Primary category: `[PRIMARY_CATEGORY]`

Recommended cadence:

- Do not create 15–20 new listings per day.
- Create approximately 2–4 legitimate listings per week.
- A practical target is 15–20 total quality listings over 4–8 weeks.
- Record URL, owner, NAP used, verification status, duplicate status, and last audit date.
- Review listings monthly for unauthorized edits, duplicate records, outdated phone numbers, and old addresses.

Avoid bulk submission networks, fake locations, keyword-stuffed business names, duplicate profiles, and fabricated reviews.

## 7. Analytics and lead tracking

Track at least:

- `generate_lead` or `form_submit`
- `phone_click`
- `whatsapp_click`
- `quote_click`
- `email_click`
- `brochure_download`
- `purchase` or `booking` if applicable

Verify events in GA4 DebugView and connect Search Console to Analytics where appropriate. Do not place secrets or private customer data in client-side events.

## 8. Performance and accessibility

Check on a real production build:

- LCP target: under 2.5 seconds
- CLS target: under 0.1
- INP target: under 200 ms
- Responsive layout at 320px, tablet, and large desktop widths
- Keyboard navigation and visible focus states
- Meaningful image alt text
- Reduced-motion support
- No console, 404, mixed-content, or blocked-resource errors
- Compressed hero media and lazy-loaded below-fold assets

Use [PageSpeed Insights](https://pagespeed.web.dev/) and Lighthouse after deployment. Code inspection alone cannot prove Core Web Vitals.

## 9. 90-day rollout

### Weeks 1–2: audit and setup

- Confirm domain, NAP, goals, keyword map, analytics owner, and account access.
- Crawl the site and fix critical indexation, canonical, redirect, and broken-link issues.
- Set up GA4, Search Console, Bing Webmaster Tools, rank tracking, and Google Business Profile.

### Weeks 3–6: core implementation

- Complete metadata, sitemap, robots, schema, internal links, image alt text, and lead forms.
- Improve homepage, services/products, projects/case studies, locations, about, and contact pages.
- Publish initial high-intent guides and case studies.

### Weeks 7–10: content and authority

- Publish useful local and industry content consistently.
- Build legitimate directory, association, supplier, partner, and editorial links.
- Collect and respond to genuine reviews.

### Weeks 11–13: iterate and scale

- Review Search Console queries and indexing reports.
- Expand pages for emerging high-value queries.
- Improve Core Web Vitals and conversion rates.
- Invest more in the content and link channels that produce qualified leads.

## Final verification checklist

- [ ] One canonical production domain confirmed
- [ ] HTTPS and host redirects verified
- [ ] All important pages return 200
- [ ] Removed pages return 404/410 or a relevant 301
- [ ] Sitemap includes all important canonical pages
- [ ] Robots allows important resources and references sitemap
- [ ] Unique title, description, canonical, OG, and Twitter metadata
- [ ] One clear H1 and logical heading hierarchy per page
- [ ] Internal links and breadcrumbs work
- [ ] Structured data passes validation
- [ ] Images have useful alt text and optimized formats
- [ ] Contact form successfully delivers and confirms submissions
- [ ] Phone, email, and WhatsApp CTAs work on mobile
- [ ] GA4 events appear in DebugView
- [ ] Search Console is verified and sitemap submitted
- [ ] Bing Webmaster Tools is verified
- [ ] GBP and citations use identical NAP
- [ ] Lighthouse/PageSpeed checked on production
- [ ] No unresolved broken links or console errors
