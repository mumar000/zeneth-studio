# Nymbor SEO & GEO Implementation Checklist

Last audited: 2026-09-13  
Canonical website: https://www.nymbor.com  
Repository: `nymbor-web`  

## Purpose

This is the working implementation and verification checklist for improving Nymbor's visibility in:

- Traditional search engines such as Google and Bing (SEO)
- Local and business listings where Nymbor is eligible
- AI answer and recommendation systems such as ChatGPT, Gemini, Copilot, and Perplexity (GEO)

Do not mark an item complete merely because code exists. Mark it complete only after it has been implemented, deployed, and verified using the acceptance check stated in this document.

## Status legend

- [x] Complete and verified
- [ ] Not started or not verified
- [~] Partially complete
- [!] Blocked by credentials, business information, or stakeholder approval
- [N/A] Not applicable after review

## Current position

| Workstream | Estimated completion | Current assessment |
|---|---:|---|
| Technical SEO | 75-80% | Strong foundation; deployment and validation work remains |
| On-page SEO and content | 50-60% | Main pages exist; keyword targeting and content depth need work |
| Analytics and measurement | 10-20% | Contact delivery exists; search and conversion measurement is missing |
| Listings and authority | 5-10% | No verified listing inventory was available during the audit |
| GEO and AI visibility | 30-40% | Crawlable site and schema exist; entity and external authority signals are weak |
| Overall SEO and GEO program | 45-50% | Technical base is ahead of the growth and authority program |

## Audit evidence already verified

- [x] Production build completes successfully.
- [x] ESLint completes with zero errors. Four non-blocking warnings remain.
- [x] `https://www.nymbor.com/` returns HTTP 200.
- [x] `http://nymbor.com` redirects to HTTPS.
- [x] `https://nymbor.com` redirects to the canonical `www` host.
- [x] `https://www.nymbor.com/robots.txt` returns HTTP 200.
- [x] `https://www.nymbor.com/sitemap.xml` returns HTTP 200.
- [x] All twelve URLs currently included in the sitemap return HTTP 200.
- [x] Unknown routes return a real HTTP 404 response.
- [x] Unpublished portfolio pages tested during the audit return `noindex`.
- [x] The live homepage contains a canonical tag, description, robots tag, Open Graph metadata, Twitter metadata, and JSON-LD.
- [~] Public searches performed during the audit did not surface Nymbor pages for the tested `site:` and brand/service queries. This must be confirmed with Google Search Console and Bing Webmaster Tools before drawing a final indexation conclusion.

---

## Phase 0 — Required business decisions and access

These inputs must be approved before listings, local SEO, analytics, and complete entity schema can be implemented.

### Authoritative business information

- [!] Confirm the public business name.
- [!] Confirm whether the legal name differs from the public name.
- [!] Confirm the primary country.
- [!] Confirm the primary city or region.
- [!] Confirm whether Nymbor serves customers in person.
- [!] Confirm whether customers can visit a staffed business location.
- [!] Confirm the legitimate service area, if Nymbor visits customers.
- [!] Confirm the public address, if it may legally and accurately be displayed.
- [!] Confirm the public phone number, including country code.
- [x] Confirm the public email: `contact@nymbor.com`.
- [!] Confirm business hours and timezone.
- [!] Confirm founding year.
- [!] Confirm founder and public team information.
- [!] Confirm the primary business category.
- [!] Confirm secondary business categories.
- [!] Confirm the approved short business description (approximately 250 characters).
- [!] Confirm the approved long business description (approximately 750 characters).
- [!] Confirm official LinkedIn, Instagram, Behance, Dribbble, X, YouTube, and other profile URLs.
- [!] Confirm whether genuine awards, memberships, certifications, partnerships, and press mentions can be published.

### Account access

- [!] Google account with owner access
- [!] Google Search Console owner access
- [!] Google Analytics 4 or Google Tag Manager owner access
- [!] Bing Webmaster Tools owner access
- [!] Microsoft account for Bing Places, if eligible
- [!] Apple account for Apple Business Connect
- [!] Domain DNS management access
- [!] Vercel project and production environment-variable access
- [!] Owner access for official social and directory profiles

### Success goals

- [ ] Define the primary lead goal.
- [ ] Define the monthly qualified-lead target.
- [ ] Define the target countries and markets.
- [ ] Define the target industries and customer profiles.
- [ ] Define priority services by commercial value.
- [ ] Define the reporting owner and monthly reporting date.

---

## Phase 1 — Indexing, search accounts, and measurement

Priority: Critical

### Google Search Console

- [x] Add the Google HTML verification file at `/googlefa4d5353b3dd7d6f.html`.
- [ ] Deploy and confirm the verification file returns HTTP 200 on the production domain.
- [ ] Create or confirm the `nymbor.com` Domain property.
- [ ] Verify ownership through DNS.
- [ ] Record the property owner in the project access register.
- [ ] Submit `https://www.nymbor.com/sitemap.xml`.
- [ ] Confirm Google can retrieve the sitemap without warnings.
- [ ] Inspect the homepage with URL Inspection.
- [ ] Inspect `/about`.
- [ ] Inspect `/contact`.
- [ ] Inspect `/services/brand-identity`.
- [ ] Inspect `/services/interface-design`.
- [ ] Inspect `/services/web-development`.
- [ ] Inspect `/works`.
- [ ] Inspect every indexable case study.
- [ ] Request indexing for priority URLs where appropriate.
- [ ] Review Page Indexing exclusions.
- [ ] Review duplicate and alternate canonical reports.
- [ ] Review HTTPS status.
- [ ] Review Core Web Vitals.
- [ ] Record the initial number of indexed pages.
- [ ] Record the initial branded impressions, clicks, CTR, and average position.

Acceptance check: Search Console recognizes the sitemap, priority pages are crawlable, and indexation status is recorded for every canonical URL.

### Bing Webmaster Tools

- [ ] Add or import the canonical site.
- [ ] Verify ownership.
- [ ] Submit the sitemap.
- [ ] Inspect priority URLs.
- [ ] Review crawl and indexation errors.
- [ ] Enable IndexNow if it is appropriate for the publishing workflow.
- [ ] Record the initial number of indexed pages and search impressions.

Acceptance check: Bing Webmaster Tools recognizes the canonical host and sitemap without critical errors.

### Analytics and conversions

- [!] GA4 implementation is blocked pending a Measurement ID and analytics property access.
- [ ] Create or confirm the GA4 property.
- [ ] Decide whether to install GA4 directly or through Google Tag Manager.
- [ ] Add the production measurement ID through an environment variable.
- [ ] Exclude internal and development traffic where practical.
- [ ] Configure consent behavior for applicable markets.
- [ ] Track `generate_lead` after successful contact-form delivery.
- [ ] Track `start_project_click`.
- [ ] Track `email_click`.
- [ ] Track `phone_click` if a public phone number is added.
- [ ] Track `whatsapp_click` if WhatsApp is added.
- [ ] Track service-page CTA clicks.
- [ ] Track portfolio/case-study clicks.
- [ ] Track relevant outbound project links.
- [ ] Track ChatGPT referrals using `utm_source=chatgpt.com` reporting.
- [ ] Verify events in GA4 DebugView.
- [ ] Connect Search Console and GA4.
- [ ] Create a monthly SEO/GEO reporting dashboard.

Acceptance check: A real form submission and every enabled CTA produce the correct event once, without personal data in analytics.

### Rank tracking

- [ ] Select a rank-tracking platform.
- [ ] Add branded keywords.
- [ ] Add service keywords.
- [ ] Add industry keywords.
- [ ] Add location keywords only for genuine target markets.
- [ ] Add named competitors.
- [ ] Track desktop and mobile separately where useful.
- [ ] Record the baseline before major content changes.

---

## Phase 2 — Technical SEO implementation

Priority: High

### Metadata

- [x] Central metadata helper exists.
- [x] Self-referencing canonical URLs exist on indexable pages.
- [x] Open Graph metadata exists.
- [x] Twitter card metadata exists.
- [x] Dynamic social images exist.
- [~] Unique titles exist, but title length and keyword alignment require review.
- [~] Homepage title updated in code to `Shopify Stores & Websites Built to Convert | Nymbor`; deploy and verify the rendered production title.
- [ ] Audit every page title for uniqueness, intent, and readable length.
- [~] Homepage meta description updated and verified in the production build; remaining page descriptions still require a full editorial audit.
- [ ] Confirm the live Google verification method.
- [ ] Add Bing verification metadata only if DNS or import verification is not used.
- [ ] Test social previews on LinkedIn, Facebook, X, Slack, and messaging apps.

Acceptance check: Every indexable URL has one accurate title, description, canonical, robots policy, and working social image.

### URL architecture

- [x] Service detail URLs are short and descriptive.
- [x] Case-study URLs are short and descriptive.
- [x] Canonical host redirects are working.
- [x] Create a crawlable `/services` hub page.
- [x] Add `/services` to navigation, footer, internal links, and sitemap.
- [ ] Decide whether `/works` or `/case-studies` is the permanent naming convention.
- [ ] Create a redirect register for retired or renamed URLs.
- [ ] Confirm trailing-slash behavior is consistent.
- [ ] Confirm URL parameters do not create indexable duplicates.

Acceptance check: Every important page has one permanent URL and is reachable through ordinary HTML links.

### Robots and sitemap

- [x] One authoritative Next.js robots implementation exists.
- [x] Production crawling is allowed.
- [x] Non-production environments are configured not to be indexed.
- [x] Contact API crawling is disallowed.
- [x] The canonical sitemap is declared.
- [x] Sitemap contains only intended indexable project pages.
- [x] Add the `/services` hub to the sitemap.
- [ ] Add future editorial pages automatically.
- [ ] Add meaningful `lastModified` values when content dates can be maintained reliably.
- [ ] Confirm CDN/firewall access for Googlebot, Bingbot, and OAI-SearchBot.
- [ ] Revalidate robots and sitemap after every routing change.

Acceptance check: Production robots and sitemap return 200, contain canonical URLs only, and match Search Console/Bing reports.

### Indexation hygiene

- [x] Custom 404 page exists.
- [x] Unknown test URL returns HTTP 404.
- [x] Selected unpublished portfolio pages are `noindex`.
- [ ] Create an inventory of all public, unpublished, redirected, and retired URLs.
- [ ] Confirm unpublished pages should return 200 + `noindex` rather than 404.
- [ ] Confirm no `noindex` page is included in the sitemap.
- [ ] Test canonical behavior for every page template.
- [ ] Test HTTP, HTTPS, apex, and `www` behavior periodically.
- [ ] Crawl for redirect chains and redirect loops.
- [ ] Crawl for broken internal links and missing assets.
- [ ] Review soft-404 risks on thin project pages.

### Structured data

- [x] Organization schema exists.
- [x] ProfessionalService schema exists.
- [x] WebSite schema exists.
- [x] Service schema exists on service pages.
- [x] CreativeWork schema exists on case studies.
- [x] BreadcrumbList schema exists on service and case-study pages.
- [~] Entity schema lacks complete verified business information.
- [ ] Add approved founder/team facts.
- [ ] Add founding year when verified.
- [ ] Add verified phone and location/service-area information where appropriate.
- [ ] Add `sameAs` URLs for every official profile.
- [ ] Add accurate specialties/knowledge areas.
- [ ] Ensure schema does not declare unsupported awards, ratings, prices, or locations.
- [ ] Make breadcrumb navigation visible where breadcrumb schema is used, or document why the markup remains appropriate.
- [x] Add FAQ schema after keeping the FAQ answers present in crawlable HTML.
- [ ] Validate every schema type with Schema.org Validator.
- [ ] Validate Google-supported types with Rich Results Test.

Acceptance check: Schema validates without errors and every marked-up claim is visible, accurate, and approved.

### Performance and Core Web Vitals

- [ ] Establish mobile and desktop PageSpeed baselines for every main template.
- [ ] Record field data from Search Console when available.
- [ ] Keep mobile LCP below 2.5 seconds, with an internal target below 2.0 seconds.
- [ ] Keep CLS below 0.1.
- [ ] Keep INP below 200 milliseconds.
- [ ] Audit homepage hero media and loader impact on LCP.
- [ ] Audit animation work on the main thread.
- [ ] Confirm reduced-motion behavior across all animated sections.
- [ ] Replace the remaining relevant raw `<img>` usage with Next.js Image.
- [ ] Audit oversized images and videos.
- [ ] Confirm below-fold images and videos are lazy-loaded appropriately.
- [ ] Audit font files, preload behavior, subsets, and unused weights.
- [ ] Review JavaScript bundle weight by route.
- [ ] Test at 320px, tablet, desktop, and large desktop widths.
- [ ] Test on a low-end Android device when possible.

Acceptance check: No priority page fails Core Web Vitals due to a known, preventable implementation issue.

### Accessibility and semantic HTML

- [x] Skip-to-content link exists.
- [x] Main route templates use semantic `<main>` elements.
- [x] Main pages have an H1, including visually hidden H1s where necessary.
- [~] Image alternative text coverage is substantial but inconsistent.
- [ ] Audit every image and separate informative images from decorative images.
- [ ] Replace generic alt text such as `Brand logo`, `Client logo`, or `Service 1`.
- [ ] Keep decorative images on empty alt text and `aria-hidden` where appropriate.
- [ ] Audit the H1-H3 hierarchy for every template.
- [ ] Test keyboard navigation and focus visibility.
- [ ] Test navigation menus, filters, forms, and accordions with a screen reader.
- [ ] Resolve the remaining React hook and image lint warnings where relevant.

---

## Phase 3 — On-page SEO and content

Priority: High

### Keyword and intent map

- [x] Create the initial URL-level keyword and intent map in `SEO-KEYWORD-MAP.md`.
- [ ] Complete competitor keyword research.
- [ ] Complete Search Console query research after data is available.
- [x] Assign one primary intent to every currently indexable page.
- [x] Assign one primary keyword group to every currently indexable page.
- [x] Add initial secondary questions and related terms without keyword stuffing.
- [x] Separate service-page commercial intent from case-study proof intent.
- [ ] Record target market and language for each page.

Suggested initial topic groups to validate through research:

- Brand identity design studio
- Brand identity for startups and growing businesses
- Website and interface design studio
- SaaS interface and product design
- E-commerce UX design
- Web development studio
- Webflow development
- Shopify design and development
- WordPress design and development
- Next.js website development

### Homepage

- [x] One main H1 exists.
- [x] Core services are introduced.
- [x] Work examples and testimonials are present.
- [x] A visible project CTA exists.
- [x] FAQ questions and answers remain present in the generated HTML when the accordion is closed.
- [~] Page title updated in code; deploy and verify it in the rendered production HTML.
- [ ] Confirm the H1 matches the approved primary positioning.
- [ ] Add a concise, crawlable factual summary of Nymbor.
- [x] Keep every FAQ answer in server-rendered/crawlable HTML while retaining accordion behavior.
- [x] Add FAQ structured data from the same shared question-and-answer source.
- [x] Add descriptive links to the Services hub and each service page.
- [ ] Improve trust/entity links to About, team information, and official profiles.

### Services hub

- [x] Create `/services`.
- [x] Add one focused H1.
- [x] Explain the relationship between identity, interface design, and development.
- [x] Add a concise section for each service with a descriptive link.
- [ ] Add process, fit, deliverables, proof, and CTA content.
- [ ] Add relevant case-study links.
- [x] Add unique metadata and canonical URL.
- [x] Add visible breadcrumb navigation and matching schema.
- [x] Add the page to navigation, footer, sitemap, and internal links.

### Service pages

- [x] Brand Identity page exists.
- [x] Interface Design page exists.
- [x] Web Development page exists.
- [x] Each service page has optimized unique metadata and a canonical URL.
- [x] Each service page includes substantial visible content and a CTA.
- [x] Assign an initial primary keyword group to each page; refine it with Search Console and competitor data.
- [ ] Add concise audience and use-case sections.
- [ ] Add industries served where they are genuine.
- [ ] Add common deliverables and clear scope boundaries.
- [ ] Add realistic timeline information.
- [ ] Review displayed starting prices and keep them consistent with approved commercial policy.
- [x] Add crawlable page-specific FAQs based on common sales questions.
- [x] Add matching FAQPage schema from the same source as each visible FAQ section.
- [ ] Add stronger proof and measurable outcomes.
- [ ] Add links between related services.
- [x] Add descriptive links to relevant case studies.
- [x] Add descriptive links from indexable case studies back to relevant service pages.

### About and entity page

- [x] About page exists with unique metadata.
- [ ] Add approved founding story and year.
- [ ] Add founder/team names, roles, experience, and expertise.
- [ ] Add the operating location or explain the remote/worldwide model clearly.
- [ ] Add service markets and working hours/timezone where useful.
- [ ] Link to official profiles and credible external references.
- [ ] Add organization facts in a concise, quotable format.
- [ ] Ensure visible facts match Organization schema and listings.

### Contact and trust pages

- [x] Contact page exists.
- [x] Server-side form validation exists.
- [x] Honeypot and submission-time bot checks exist.
- [x] Basic IP rate limiting exists.
- [x] Email delivery integration exists.
- [ ] Verify a real production enquiry reaches the intended inbox.
- [ ] Confirm the success state accurately states the response time.
- [ ] Add a public phone number only if it will be monitored.
- [ ] Add WhatsApp only if it will be monitored and approved.
- [ ] Create a Privacy Policy page.
- [ ] Link the footer privacy label to the actual policy.
- [ ] Add a Terms or Terms of Service page if required.
- [ ] Review consent requirements for contact enquiries and analytics.
- [ ] Consider durable/distributed rate limiting if spam volume requires it.

### Portfolio and case studies

- [x] Works hub exists.
- [x] Multiple substantial case studies exist.
- [x] Case-study metadata and schema exist.
- [ ] Confirm which projects may be indexed publicly.
- [ ] Remove placeholder or mock claims from indexable content.
- [ ] Add project dates where approved.
- [ ] Add the client challenge, Nymbor's role, process, deliverables, and outcome in crawlable prose.
- [ ] Add verified quantitative outcomes where available.
- [ ] Clearly label projected results versus measured results.
- [ ] Add client attribution and testimonial context where approved.
- [ ] Add descriptive links to the relevant service pages.
- [ ] Add related case studies and next-step navigation.
- [ ] Review visually hidden H1s and ensure the visible introduction communicates the same topic.

### Editorial content

- [ ] Decide whether to create `/insights`, `/journal`, or `/resources`.
- [ ] Define editorial categories based on customer questions, not publishing volume.
- [ ] Publish original guides, checklists, comparisons, and project lessons.
- [ ] Include authorship and reviewer information.
- [ ] Add publication and update dates.
- [ ] Add Article schema where appropriate.
- [ ] Link articles to relevant services and case studies.
- [ ] Create an editorial review/update schedule.

Potential initial topics to validate:

- What a complete brand identity package should include
- Brand identity versus logo design
- Webflow versus WordPress versus a custom Next.js build
- What to prepare before hiring a web design studio
- Website redesign checklist for growing businesses
- How to hand off Figma designs for development
- Common reasons a polished website still fails to convert
- How Nymbor connects brand strategy, interface design, and development

---

## Phase 4 — Local SEO and proper listings

Priority: High after business eligibility and NAP details are confirmed

### Eligibility decision

- [!] Determine whether Nymbor makes in-person contact with customers during stated business hours.
- [!] Determine whether Nymbor has a legitimate staffed storefront.
- [!] Determine whether Nymbor is a legitimate service-area business that visits customers.
- [ ] If online-only, mark Google Business Profile as not eligible and do not create a fake location.
- [ ] If eligible, document whether the address will be displayed or hidden as a service-area business.

### NAP and profile consistency

- [ ] Approve one exact business name.
- [ ] Approve one exact address or service-area representation.
- [ ] Approve one exact public phone number.
- [ ] Approve business hours.
- [ ] Approve primary and secondary categories.
- [ ] Approve short and long descriptions.
- [ ] Prepare the logo, cover image, portfolio images, and team/workplace photos.
- [ ] Create a listing register with platform, URL, owner, login owner, status, NAP used, and audit date.

### Priority profiles

- [!] Google Business Profile — create only if eligible.
- [!] Bing Places — create only with accurate eligibility and location information.
- [ ] Apple Business Connect.
- [ ] LinkedIn Company Page.
- [ ] Instagram business/creator profile.
- [ ] Behance profile.
- [ ] Dribbble profile.
- [ ] Clutch company profile.
- [ ] DesignRush agency profile.
- [ ] Relevant national business directory profiles.
- [ ] Relevant regional or city directory profiles.
- [ ] Relevant design, development, commerce, Webflow, Shopify, WordPress, or technology partner directories.
- [ ] Chamber, association, or professional membership profiles where genuinely applicable.

### Listing quality rules

- [ ] Use the exact approved business name; do not add keywords to the name.
- [ ] Use a real location or service area only.
- [ ] Use the canonical `https://www.nymbor.com` website URL.
- [ ] Keep phone, hours, category, and descriptions consistent.
- [ ] Give the business owner primary ownership of every profile.
- [ ] Avoid bulk-submission networks.
- [ ] Avoid duplicate profiles.
- [ ] Avoid fake addresses and virtual offices that violate platform rules.
- [ ] Avoid fabricated reviews, ratings, awards, and project results.
- [ ] Publish approximately 2-4 legitimate profiles per week rather than a sudden low-quality bulk campaign.
- [ ] Audit profiles monthly for unauthorized changes and duplicates.

### Reviews

- [ ] Select the primary eligible review platforms.
- [ ] Create a compliant review-request process for completed projects.
- [ ] Request reviews without incentives or scripted positive language.
- [ ] Respond professionally to genuine reviews.
- [ ] Obtain permission before republishing reviews on the website.
- [ ] Never add self-authored or fabricated review schema.

Acceptance check: Every published profile is owner-controlled, accurate, consistent, and recorded in the listing register.

---

## Phase 5 — GEO and AI-search visibility

Priority: High

GEO means making Nymbor easy for AI systems to discover, understand, verify, quote, and cite. It is not a separate replacement for SEO; it depends on crawlability, clear content, entity consistency, and external authority.

### AI crawler access

- [x] The current wildcard robots rule does not intentionally block OAI-SearchBot.
- [ ] Confirm Vercel, CDN, WAF, and security rules allow OAI-SearchBot.
- [ ] Confirm Bingbot access because several AI search experiences depend on web search indexes.
- [ ] Decide and document the separate policy for GPTBot/training access.
- [ ] Monitor server logs for major search and AI crawler activity where available.
- [ ] Track AI referral sources in analytics.

### Crawlable answer content

- [ ] Keep important facts and answers in server-rendered HTML.
- [x] Fix the homepage FAQ so answers exist in HTML without requiring a click.
- [ ] Add clear definitions of Nymbor, its services, audience, and process.
- [ ] Add concise answers to real commercial questions.
- [ ] Add platform and technology expertise with supporting examples.
- [ ] Add industry experience only where supported by real work.
- [ ] Add transparent limitations, fit, and non-fit criteria.
- [ ] Use descriptive headings and short answer-first paragraphs.
- [ ] Keep evidence close to claims.
- [ ] Distinguish measured outcomes from projections or goals.

### Entity consistency

- [ ] Use the same business name and description on the website and profiles.
- [ ] Add verified official profiles to the footer.
- [ ] Add verified official profiles through `sameAs` schema.
- [ ] Publish founder and team expertise.
- [ ] Publish an accurate location or remote operating model.
- [ ] Connect services, case studies, authors, and organization entities through internal links and schema.
- [ ] Maintain consistent logos and profile imagery.

### Original evidence and authority

- [ ] Publish detailed, factual case studies.
- [ ] Add real project outcomes and dates when approved.
- [ ] Publish original frameworks, checklists, and research.
- [ ] Earn mentions from clients, partners, technology communities, and reputable industry publications.
- [ ] Seek inclusion in legitimate expert roundups, interviews, podcasts, events, and association pages.
- [ ] Create link-worthy resources rather than generic AI-generated articles.
- [ ] Monitor branded mentions and correct inaccurate information where possible.

### GEO testing

- [ ] Establish a repeatable set of AI discovery prompts.
- [ ] Test branded identification prompts.
- [ ] Test service recommendation prompts.
- [ ] Test platform-specific prompts such as Webflow, Shopify, WordPress, and Next.js.
- [ ] Test relevant location prompts only if local targeting is legitimate.
- [ ] Record whether Nymbor is mentioned, accurately described, cited, and linked.
- [ ] Repeat tests monthly using the same prompts and record changes.
- [ ] Do not report isolated AI answers as stable rankings.

Suggested tracking prompts:

- What does Nymbor do?
- Who is Nymbor best suited for?
- Recommend a studio for brand identity and website development.
- Which studios combine brand identity, interface design, and development?
- Recommend a Webflow/Shopify/WordPress design and development studio.
- Show examples of agencies with detailed brand and website case studies.

Acceptance check: Major AI/search crawlers can access the site, entity facts are consistent, important questions have crawlable answers, and monthly tests are recorded.

---

## Phase 6 — Internal linking and authority building

### Internal linking

- [x] Main navigation links to Home, Work, About, and service detail pages.
- [x] Footer links to Home, About, Work, Contact, and email.
- [x] Service and indexable case-study relationships are linked in both directions.
- [x] Add the Services hub to navigation and footer.
- [ ] Add service-to-service links.
- [x] Add service-to-case-study links.
- [x] Add case-study-to-service links.
- [ ] Add article-to-service and article-to-case-study links.
- [ ] Use descriptive anchor text rather than generic `learn more` text.
- [ ] Add visible breadcrumbs where useful.
- [ ] Ensure every indexable page has at least one crawlable internal link pointing to it.
- [ ] Identify and fix orphan pages.

### External authority and backlinks

- [ ] Create an approved client/partner link outreach list.
- [ ] Request factual portfolio or partner credits where appropriate.
- [ ] Publish useful assets that deserve citations.
- [ ] Pursue relevant editorial coverage and interviews.
- [ ] Pursue legitimate association and technology ecosystem profiles.
- [ ] Monitor new and lost referring domains.
- [ ] Reject paid bulk-link packages, private blog networks, and irrelevant directories.
- [ ] Record acquired links, destination pages, relevance, and date.

---

## Phase 7 — Verification before marking the project complete

### Deployment verification

- [ ] Production build passes.
- [ ] Lint has no unresolved errors.
- [ ] No new console errors appear on priority pages.
- [ ] All canonical URLs return HTTP 200.
- [ ] Retired URLs return an appropriate 301, 404, or 410.
- [ ] HTTP and apex hosts redirect directly to the canonical HTTPS host.
- [ ] Sitemap returns HTTP 200 and contains every intended indexable URL.
- [ ] Robots returns HTTP 200 and references the canonical sitemap.
- [ ] No indexable page has an accidental `noindex`.
- [ ] No non-indexable page appears in the sitemap.
- [ ] Metadata is correct in rendered production HTML.
- [ ] Structured data passes validation.
- [ ] Social preview images load correctly.
- [ ] Contact form delivers successfully.
- [ ] Analytics events fire correctly.
- [ ] Keyboard and screen-reader checks pass.
- [ ] Mobile Core Web Vitals meet agreed targets.

### Search verification

- [ ] Google Search Console reports no critical crawl or sitemap issue.
- [ ] Bing Webmaster Tools reports no critical crawl or sitemap issue.
- [ ] Priority pages are indexed or have a documented reason for exclusion.
- [ ] Brand searches return the canonical site and accurate information.
- [ ] Search snippets use accurate titles and descriptions.
- [ ] Search Console and analytics data are included in monthly reporting.

### Listing verification

- [ ] Every listing URL is recorded.
- [ ] Every listing has an identified owner.
- [ ] NAP/category/hours are consistent.
- [ ] Duplicate profiles have been resolved.
- [ ] Website and social links work.
- [ ] Review notifications are monitored.

### GEO verification

- [ ] OAI-SearchBot is not blocked by robots, CDN, or firewall.
- [ ] Important answers exist in crawlable HTML.
- [ ] Organization facts are consistent across the website and profiles.
- [ ] AI referral traffic is measurable.
- [ ] Monthly AI prompt testing is recorded.
- [ ] Incorrect or unsupported AI-facing claims have been corrected at their source.

---

## Recommended implementation order

### Sprint 1 — Search foundation

- [ ] Obtain business facts and account access.
- [ ] Verify Search Console and Bing Webmaster Tools.
- [ ] Submit and inspect the sitemap.
- [ ] Install analytics and conversion events.
- [ ] Shorten the homepage title.
- [x] Make homepage FAQ answers crawlable.
- [x] Add FAQ schema and verify it in generated HTML.
- [x] Create the Services hub and update sitemap/internal links.

### Sprint 2 — On-page and entity improvements

- [~] Complete initial keyword and intent mapping; competitor and Search Console refinement remains.
- [~] Update homepage and service-page metadata plus FAQ copy; broader page copy refinement remains.
- [ ] Add founder/team/entity facts.
- [ ] Link official profiles and add `sameAs` schema.
- [x] Improve service and case-study internal linking in both directions.
- [ ] Add privacy and required trust pages.
- [ ] Complete image-alt and heading audit.

### Sprint 3 — Listings and authority

- [ ] Decide Google Business Profile eligibility.
- [ ] Create or correct priority profiles.
- [ ] Launch the review-request process.
- [ ] Build partner, client, association, and editorial links.
- [ ] Create and maintain the listing register.

### Sprint 4 — Content, GEO, and optimization

- [ ] Launch the editorial content structure.
- [ ] Publish initial high-intent resources.
- [ ] Improve case studies with verified evidence.
- [ ] Establish GEO prompt tracking.
- [ ] Review PageSpeed and Core Web Vitals.
- [ ] Review early Search Console and analytics data.
- [ ] Prioritize the content and channels producing qualified leads.

---

## Information needed from the stakeholder before implementation

1. Exact business name and legal name, if different
2. Country, city, real address/service area, and whether clients are served in person
3. Public phone and WhatsApp preference
4. Business hours and timezone
5. Founder/team details and founding year
6. Official social and portfolio profile URLs
7. Priority countries, industries, services, and customer types
8. Search Console, Bing, analytics, DNS, and Vercel access
9. Approved client results, testimonials, dates, awards, and partner claims
10. Google Business Profile eligibility confirmation

## Change log

| Date | Change | Verification | Owner |
|---|---|---|---|
| 2026-09-13 | Initial code, deployment, SEO, listing, and GEO audit documented | Build, lint, live status/redirect/metadata/robots/sitemap checks | Codex |
| 2026-09-13 | Homepage SEO title changed to `Shopify Stores & Websites Built to Convert | Nymbor` | Awaiting deployment and live HTML verification | Codex |
| 2026-09-13 | Updated homepage description, made FAQs crawlable, added FAQ schema, created `/services`, and connected navigation/footer/sitemap/internal links | Lint: 0 errors; production build passed; generated HTML and sitemap inspected | Codex |
| 2026-09-13 | Added the initial keyword map, optimized service metadata, added service-specific crawlable FAQs/schema, and linked services with relevant case studies | Lint: 0 errors; production build passed; generated service/case-study HTML inspected | Codex |
