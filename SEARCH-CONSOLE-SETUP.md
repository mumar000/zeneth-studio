# Nymbor: launch and Google Search Console handoff

Prepared 12 October 2026. The changes are in the project; they must be deployed before Google can fetch them. This document does not imply access to your Search Console account or a verified change in rankings.

## What the audit established

The public homepage returned HTTP 200. `https://nymbor.com` redirected with HTTP 308 to `https://www.nymbor.com/`. The live robots file allowed crawling, and the live homepage had `index, follow`, a canonical URL, and Nymbor website/organization markup. There was no obvious homepage indexing block in those responses.

The previous positioning mixed an independent studio, a Shopify-focused services hub, and broader branding and website work. A public search result showed the LinkedIn company display name as “Bynymbor.” These are opportunities to improve consistency, not proof of the cause of the reported ranking problem. Only your Search Console data can establish whether the homepage is excluded, treated as a duplicate, or indexed but rarely shown for the exact brand query.

## What changed in the project

- Rewrote the homepage, services hub, service introductions, about/contact copy, portfolio introduction, metadata, and FAQs around Nymbor's three services and worldwide audience.
- Gave the pages distinct editorial headlines and search titles, including **Nymbor — Brands Worth Noticing. Websites Worth Using.**
- Consolidated service providers under one `Organization` named Nymbor. Removed the separate `ProfessionalService` entity that implied a local business without a confirmed physical location. Added connected page entities, portfolio entries, and explicit Nymbor website naming.
- Preserved the canonical host and URL paths, and added real content revision dates to the sitemap. Review-only projects remain excluded.
- Added visible service breadcrumbs, links between related services, and service-to-project links.
- Made FAQ answers available in server-rendered HTML with native controls that work without JavaScript. Added a no-JavaScript fallback for the loader and initially hidden content.
- Corrected Mogul Bay's inconsistent hospitality narrative to match the existing fintech portfolio description and assets. Replaced unsupported performance promises in service copy with concrete delivery checks.
- Added `X-Robots-Tag: noindex` to API responses and retained production/preview indexing controls. Added an explicit staging opt-out.
- Added `npm run check:seo` to check production HTML, canonical URLs, unique titles/descriptions, headings, structured data, FAQ content, internal destinations, the sitemap, and indexing safeguards.

## 1. Deploy and confirm the public version

Local validation completed for this revision:

- Production build passed; all content pages are prerendered.
- `npm run check:seo` passed for 15 indexable URLs, 16 linked internal destinations, 22 visible/schema-matched FAQ answers, review-only project exclusions, and indexing environment safeguards.
- `npm run lint` passed with zero errors and the same four warnings present before this task, in legacy image/animation components.
- Headless Chrome checks passed on nine updated page layouts at 320px, 768px, and 1440px: no horizontal overflow or JavaScript errors.
- The homepage, three service pages, and about-page heading were checked with JavaScript disabled. FAQ answers remained usable and the loader did not block the view.
- Unknown and unpublished project URLs returned 404. The generated social image returned 200 with an image content type and the API's `noindex` header.

These are local checks, not live Search Console or field performance measurements.

Deploy this revision to the production domain through your existing deployment process. Leave the canonical domain as **https://www.nymbor.com**.

For Vercel, the production build must use `VERCEL_ENV=production`. Preview deployments remain non-indexable. `SITE_INDEXABLE=false` is an optional build-time opt-out for staging; do not set it on the public production deployment. Environment changes require a rebuild.

After deployment, inspect the public HTML:

- `/` returns 200 and the new title appears in source.
- The homepage has `index, follow` and canonical `https://www.nymbor.com` (a trailing slash on the homepage is equivalent).
- Each service and case-study page points to its own canonical URL.
- `/robots.txt` allows the public pages and names `https://www.nymbor.com/sitemap.xml`.
- `/sitemap.xml` contains the 15 intended indexable pages. Feroce and Voyager remain review-only and excluded.
- Apex and HTTP domain variants redirect to the canonical HTTPS host. Keep the already-working apex redirect in the hosting settings.
- Googlebot is not challenged or blocked by deployment protection, a firewall, or a bot rule.

Run `npm run build`, `npm run check:seo`, and `npm run lint` locally. The HTML checker expects a production build, not the development server or a deliberately non-indexable preview build.

## 2. Select or verify the correct Search Console property

Open [Google Search Console](https://search.google.com/search-console). Keep your existing verified property and its historical data.

If you do not have a Domain property, use the property selector → **Add property** → **Domain** → enter **nymbor.com** without `https://` or `www`. Copy Google's TXT verification record to your domain's DNS provider, return to Search Console, and verify. Keep the DNS record after verification. A Domain property covers HTTP/HTTPS and subdomain variants. [Google's property setup instructions](https://support.google.com/webmasters/answer/34592).

If you use a URL-prefix property instead, it should be **https://www.nymbor.com/**. DNS verification is still an option. For HTML-tag verification, the project already supports `GOOGLE_SITE_VERIFICATION`: set the variable to the tag's **content value only**, rebuild/deploy, and verify. An HTML verification tag cannot verify a Domain property.

Do not delete the old property, use the Removals tool, or submit a Change of Address for this content update. The domain and URLs are staying the same.

## 3. Inspect the homepage before requesting a recrawl

Paste **https://www.nymbor.com/** into the URL Inspection bar.

Read the indexed-page report first. Record:

- Whether the URL is on Google and its last crawl date.
- Whether crawling and indexing are allowed.
- Whether the page fetch succeeded.
- The user-declared canonical and Google-selected canonical.

Then choose **Test live URL**. Open the tested page's HTML and screenshot. Verify the new Nymbor title, visible headline, service explanation, internal links, and structured data. A successful live test confirms accessibility; it does not prove that Google has indexed the new version or chosen its canonical. [Google's URL Inspection guide](https://support.google.com/webmasters/answer/9012289).

If the indexed homepage is excluded, use the reported reason:

| Reported issue | What to check |
|---|---|
| Excluded by `noindex` | Production environment values, the public HTML, and any hosting `X-Robots-Tag` header. Rebuild/redeploy if needed. |
| Blocked by robots.txt | The live robots file and any hosting or CDN overrides. |
| Server error, access denied, or failed fetch | Vercel logs, deployment protection, firewall rules, and availability. |
| Duplicate / Google chose a different canonical | Inspect the chosen URL. Check redirects, canonical tags, sitemap URLs, and external profile links for consistency. |
| Crawled or discovered, currently not indexed | Confirm the new page content and internal links are accessible. Review the page's usefulness and evidence; repeated submissions alone do not resolve this. |
| URL is on Google | Investigate query performance and brand recognition rather than treating this as a crawling failure. |

## 4. Submit the sitemap and priority pages

Go to **Indexing → Sitemaps** and submit **https://www.nymbor.com/sitemap.xml**. If it already exists, retain it and inspect the status, last-read date, and discovered URLs. A sitemap helps discovery; it does not force all listed pages into the index.

After a successful live test, request indexing for the homepage, then these priority pages within your available quota:

1. `https://www.nymbor.com/about`
2. `https://www.nymbor.com/services`
3. `https://www.nymbor.com/services/brand-identity`
4. `https://www.nymbor.com/services/interface-design`
5. `https://www.nymbor.com/services/web-development`
6. `https://www.nymbor.com/works`

The sitemap covers the rest. Repeated requests for the same URL do not speed up crawling. Google says recrawling can take days to weeks and does not guarantee inclusion. [Google's recrawl instructions](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## 5. Make the public brand name consistent

Use **Nymbor** as the website and company display name. Keep the existing Instagram handle if needed; the handle and display name can differ. Review LinkedIn's current “Bynymbor” display name and change it to Nymbor if that is your official public name. Existing Nymbor Creative mentions can remain as historical/alternate naming.

Link official profiles to **https://www.nymbor.com/**. Use accurate descriptions of the same three services and the same logo. A suitable profile description is:

> Nymbor is an independent creative and digital agency for brands worth noticing and websites worth using. We connect brand identity, web and UI/UX design, and development for founders and teams worldwide.

Ask existing clients or collaborators for accurate project credits when appropriate, and link those credits to the relevant work or homepage. Publish verifiable project details as they become available. No profiles or outreach messages were changed or sent by this implementation.

The code now states **Nymbor** as the preferred `WebSite.name`, `Organization.name`, and Open Graph site name. Google also evaluates visible homepage text and external references when choosing a site name. Site naming is separate from ranking for a query; there is no Search Console field that forces either a brand name or a top position. [Google's site-name guidance](https://developers.google.com/search/docs/appearance/site-names).

## 6. Measure “Nymbor” separately from longer searches

In **Performance → Search results**, choose **Web**, enable clicks, impressions, CTR, and average position, then add **Query → Exact query → nymbor**. Add a Page filter for the homepage if you want to isolate its performance. Check countries and devices before interpreting changes.

Record the last 28 days as a baseline. Track **nymbor creative** separately so stronger performance for the longer name does not conceal the exact-brand result. Save the deployment date and compare equivalent periods after recrawling. Some low-volume queries are omitted for privacy, so a missing query row is not conclusive proof that the site never appeared.

Monitor **Indexing → Pages**, **Sitemaps**, **Core Web Vitals**, **Manual actions**, and **Security issues**. Investigate actual reported problems rather than relying only on a personal Google search, whose results can vary by location and context.

## Structured data and ranking expectations

Use the [Schema Markup Validator](https://validator.schema.org/) to inspect the full graph and Google's [Rich Results Test](https://search.google.com/test/rich-results) for supported search features. A valid schema object is not a ranking guarantee. FAQ markup is retained as a semantic description of visible questions; Google discontinued FAQ rich results in May 2026, so no FAQ search expansion is promised. [Google's documentation update](https://developers.google.com/search/updates#may-2026).

Google may generate a different title or snippet after processing the page and its references. The supplied title is a preference, not an override. [Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

The code changes strengthen the site's content and consistency. Search Console diagnosis, deployment, recrawling, credible mentions, and actual user experience remain necessary parts of improving search visibility. Rankings, live Core Web Vitals, and real-device behavior have not been certified by the local build checks.
