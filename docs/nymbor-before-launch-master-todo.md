# Nymbor Before-Launch Master TODO

> Implementation roadmap derived from `Nymbor_Before-We-Launch_V2-UPDATED.docx`, then expanded through a repository review so launch-critical work omitted from the source audit is not missed.

## Document control

| Field | Value |
| --- | --- |
| Project | Nymbor website |
| Source audit | `Nymbor_Before-We-Launch_V2-UPDATED.docx` |
| Source audit date | 14 August 2026 |
| Roadmap created | 14 August 2026 |
| Repository snapshot | `main` at `a6d7917`, including the current uncommitted working tree |
| Launch recommendation | **Do not launch until every P0 gate is signed off** |
| Source score | 4.5 / 10 overall |
| Current visual direction | Keep it; this is a finishing, trust, accessibility, and launch-readiness pass—not another redesign |

This file is the single source of truth for the before-launch work. Product code has not been changed as part of creating it.

## Roadmap map

- [Launch gates](#launch-gates)
- [Current repository baseline](#current-repository-baseline)
- [Blocking decisions and owner inputs](#blocking-decisions-and-owner-inputs)
- [Phase 0 — Content integrity and route governance](#phase-0)
- [Phase 1 — Make the lead flow real](#phase-1)
- [Phase 2 — Make proof and content trustworthy](#phase-2)
- [Phase 3 — Page structure, SEO, indexing, and social previews](#phase-3)
- [Phase 4 — Accessibility and inclusive interaction](#phase-4)
- [Phase 5 — Motion, loader, media, and performance](#phase-5)
- [Phase 6 — Page-by-page completion](#phase-6)
- [Phase 7 — Analytics, security, and operational readiness](#phase-7)
- [Phase 8 — QA, launch, and sign-off](#phase-8)
- [Post-launch verification](#post-launch)
- [Definition of done](#definition-of-done)

## How to use this roadmap

- `[ ]` means the task is not yet signed off. Tick it only after its acceptance criteria pass in the production-like environment.
- **P0 — Launch blocker:** must be complete before public launch.
- **P1 — Pre-launch quality:** should be complete in the same finishing pass unless the founder explicitly accepts and records the risk.
- **P2 — Post-launch:** safe to schedule after launch, with an owner and due date.
- **Owner requirement:** explicitly requested in the source document.
- **Repository finding:** confirmed by reviewing the current codebase.
- **Added safeguard:** not stated clearly in the source document, but required for a credible production launch.

No task is considered complete because code exists. Completion requires evidence: an approved asset or copy source, a passing automated/manual check, or a real end-to-end production test.

## Launch gates

| Gate | Priority | Required outcome | Sign-off |
| --- | --- | --- | --- |
| G1. Lead flow | P0 | A real valid enquiry reaches the correct destination; invalid and failed submissions are handled clearly | Founder + Development |
| G2. Truth and trust | P0 | All testimonials, claims, client identities, project stories, prices, social accounts, and legacy assets are approved and accurate | Founder + Content |
| G3. Routes and CTAs | P0 | Every public route is intentional and every visible interactive element reaches the correct destination | Founder + Development |
| G4. Privacy and search | P0 | Privacy, robots, sitemap, canonicals, metadata, social previews, schema, 404 behavior, and Search Console are correct | Operations + SEO + Development |
| G5. Accessibility | P0 | The key journey works by keyboard and assistive technology, with adequate focus, semantics, tap sizes, and reduced motion | Design + Development |
| G6. Performance and resilience | P0 | Production build is clean; content does not depend on animation; media and fonts meet the agreed mobile targets | Development |
| G7. Measurement and operations | P0 | Analytics, form events, deliverability, monitoring, environment variables, rollback, and launch ownership are ready | Operations + Development |
| G8. Final QA | P0 | Required devices, browsers, viewports, failure states, and production URLs pass one shared sign-off | Founder + Design + Development |

## Current repository baseline

This is a code-level snapshot, not a completed QA result.

### Already present and worth preserving

- The home page has one clear visible `h1` and a direct primary CTA.
- The three service-detail templates already render an `h1`.
- The code uses Next.js `Image` in most active components.
- Smooth scrolling is bypassed for reduced-motion, touch, low-end, and slow-connection users.
- Several active video components already pause when out of view and respect reduced-motion preferences.
- The showreel defers loading until after the loader, and the current loader timeout is shorter than the issue recorded in the owner audit.
- The client-video modal supports Escape, body scroll lock, a visible close control, and native video controls.
- A global metadata base, default title/description, favicon set, and web-app manifest exist.
- The works page already has accessible filter buttons with `aria-pressed` and visible focus styling.
- The Spreadshop page has a single screen-reader `h1` and several useful section labels.

### Confirmed launch gaps in the current code

- The contact form only logs data to the browser console; it has no production endpoint, required fields, names/IDs, connected labels, validation, privacy consent, budget field, spam protection, or submission states.
- Footer social links and three service-card lead CTAs still use `#`.
- Many case-study records use `liveUrl: "#"`; the Spreadshop “Visit site” control is disabled pending a destination.
- Privacy, `robots.txt`, `sitemap.xml`, a custom not-found page, analytics integration, and a form API route are absent.
- `/works`, `/services`, and `/contact` do not have a clear page `h1`.
- Generic case-study pages render separate desktop and mobile `h1` elements at the same time, causing duplicate document headings.
- Route-specific canonicals, Open Graph images, large Twitter cards, and structured data are not implemented.
- The global Twitter card is currently `summary`, not `summary_large_image`.
- Pricing is still `$9999` and is rendered inside square brackets.
- “Book a Call” and “Book a 15-min site review” lead to the project brief instead of a booking system.
- The active FAQ rows are clickable `div` elements, not semantic buttons, and do not expose expanded/collapsed state.
- The mobile menu trigger does not expose `aria-expanded`/`aria-controls`; the menu does not lock background scroll or implement complete focus behavior.
- There is no skip-to-content link or common main-content target.
- The featured-project desktop interaction consumes `400vh` and eagerly loads all four project images.
- The public folder contains an active 11 MB showreel, a separate legacy 65 MB “Zenneth Studio” showreel file, large 14 MB/7.5 MB Spreadshop images, duplicate font families, editable `.ai`/`.eps` source files, and `.DS_Store` files.
- `lib/projects-data.js` is explicitly marked “Mock content” but its static params make 16 case-study slugs potentially public. The source audit only evaluated five case studies.
- The works index features five projects, while the home page features four; launch-approved route visibility is not centrally controlled.
- Several unverified, placeholder-style testimonial names and performance/result claims exist in project data beyond the approved four testimonials.
- `npm run lint` currently reports **6 errors and 6 warnings**.
- `npm run build` could not complete in the reviewed environment because `next/font` attempted to fetch JetBrains Mono from Google Fonts. A production/CI build must be proven, and self-hosting should be considered to remove that build dependency.

### Route-scope warning

The source document says 14 routes were checked. The current code can represent approximately **24 content routes** before privacy and error pages:

- 5 top-level routes: home, about, works, services, contact.
- 3 service-detail routes.
- 16 project records/case-study slugs, including the dedicated Spreadshop implementation.

Every route must be assigned one of three states before launch: **public + indexable**, **public + noindex**, or **unpublished/404**. A route absent from navigation is not automatically private.

## Blocking decisions and owner inputs

Do these first. Development should not invent business facts, legal language, client approval, or destinations.

- [ ] **DEC-01 — Choose the primary conversion journey.** Decide between:
  - real booking flow using Calendly/Cal.com; or
  - project enquiry flow using “Start a Project” / “Submit Your Brief.”
- [ ] **DEC-02 — Confirm the form destination.** Record the inbox, CRM, notification recipients, reply-to behavior, sender domain, expected response time, and backup inbox.
- [ ] **DEC-03 — Confirm the form provider/architecture.** Choose the server-side delivery service and ownership of its account, API keys, usage limits, and failure dashboard.
- [ ] **DEC-04 — Approve the exact public route inventory.** Classify all 16 case-study records and every service/top-level route as indexable, noindex, redirected, or unpublished.
- [ ] **DEC-05 — Provide official social-profile URLs.** Confirm which profiles should appear; remove any platform with no approved account.
- [ ] **DEC-06 — Supply privacy inputs.** Confirm the legal/business name, contact details, jurisdictions served, collected data, purpose, processors, retention, deletion/contact process, and whether marketing cookies are used.
- [ ] **DEC-07 — Choose analytics.** Approve GA4, PostHog, or another tool; confirm consent requirements and who owns the account.
- [ ] **DEC-08 — Approve testimonial facts and permissions.** Resolve every item in the testimonial approval table below.
- [ ] **DEC-09 — Approve claim evidence.** Supply sources for every statistic/result or approve softened replacement copy.
- [ ] **DEC-10 — Noman handoff.** Obtain and approve final About and Contact content/design while preserving the mandatory structures below.
- [ ] **DEC-11 — Provide final launch assets.** Nymbor-branded showreel, showreel poster, portrait card crops, service-specific development visual, OG images, founder image, and approved client visuals.
- [ ] **DEC-12 — Confirm domain/access owners.** Production host, DNS, Search Console, analytics, form service, email provider, and deployment access each need a named owner and recovery method.

---

<a id="phase-0"></a>

## Phase 0 — Content integrity and route governance

### P0.1 Create the content and evidence register

**Priority:** P0  
**Owners:** Founder + Content + Development  
**Why:** Unapproved “proof” is a larger trust risk than having less content.

- [ ] Create one structured record for every project containing canonical name, slug, client permission, public URL, services, Nymbor’s role, scope, problem, decisions, deliverables, result, evidence source, client quote, quote approval, visual rights, and publication status.
- [ ] Replace the broad mock `projects` dataset with launch-approved content or add an explicit publication field enforced by navigation, static generation, sitemap generation, and metadata.
- [ ] Unpublish or `noindex` every draft route; do not rely on hiding it from `/works`.
- [ ] Remove fabricated/placeholder testimonials, metrics, people, roles, dates, and case-study copy from any route that remains public.
- [ ] Record a source URL, document, screenshot, analytics export, or client approval for every numerical claim.
- [ ] Record usage permission for every client logo, photo, quote, website capture, and video.
- [ ] Ensure staged or unapproved projects never enter `sitemap.xml` or structured data.
- [ ] Add a content-review field for spelling, brand naming, legal approval, and last verified date.

**Done when:** Every reachable project route has a signed content record and every non-approved project returns the intentionally chosen status.

### P0.2 Lock the naming and copy glossary

**Priority:** P0  
**Owners:** Founder + Content

- [ ] Use **Nymbor** everywhere; remove every visible or embedded **Zeneth/Zenneth Studio** reference.
- [ ] Use **Mogul Bay** consistently in titles, body copy, metadata, alt text, and slugs/redirects as approved. The current dataset uses “Mogulbay.”
- [ ] Use **Let’s Grub** consistently; replace “Lets Grub.”
- [ ] Use **Voyager Supplements** consistently.
- [ ] Confirm **Nuggetspot** versus **The Nugget Spot**, then use the approved styling everywhere.
- [ ] Change “A Focused team” to “A focused team.”
- [ ] Fix “noise they need clarity,” “The Nymbor Way Every...,” and “0 shortcuts.Every.”
- [ ] Complete a global punctuation, capitalization, apostrophe, spacing, and grammar pass.
- [ ] Keep client quotes verbatim after approval; never silently correct a client’s words.

**Done when:** A site-wide text search and manual review find no legacy brand, inconsistent project naming, filler text, or known copy defect.

---

<a id="phase-1"></a>

## Phase 1 — Make the lead flow real

### P1.1 Align every CTA with its destination

**Priority:** P0  
**Owners:** Founder + Content + Development

- [ ] Apply DEC-01 globally; do not mix booking language with a long project brief.
- [ ] If booking is chosen, connect every “Book...” CTA to the approved booking calendar and test timezone, availability, confirmation, rescheduling, cancellation, and mobile behavior.
- [ ] If enquiry is chosen, rename booking CTAs to “Start a Project” or “Submit Your Brief” and point them to `/contact`.
- [ ] Replace “Apply for a Pipeline” with “Start a Project” or “Apply to Work With Us”; make the element a real link, not a button without navigation.
- [ ] Connect all three “Get One For Your Brand” service-card actions to the correct contact flow, ideally with the service preselected.
- [ ] Resolve every case-study “See...”/live-site destination. If no approved URL exists, remove the control instead of using `#` or a disabled promise.
- [ ] Add real footer social URLs or remove the corresponding links.
- [ ] Verify primary, secondary, navbar, footer, service, project, and floating CTAs on desktop and mobile.
- [ ] Add a repeatable link check that fails on `href="#"`, empty destinations, accidental staging hosts, redirect loops, 404/5xx responses, or incorrect external protocols.
- [ ] For external links, use a consistent new-tab policy, disclose it accessibly where useful, and apply safe `rel` values.

**Known current targets:** navbar CTA, mobile-menu CTA, home hero, home service cards, portfolio CTA, `AlignmentCTA`, service heroes/tails, project live links, Spreadshop “Visit site,” floating case-study CTA, footer contact/social links.

**Done when:** Every visible interactive element performs the action its label promises and an automated/manual crawl finds no placeholder or dead destination.

### P1.2 Build the production contact experience

**Priority:** P0  
**Owners:** Noman (content/design) + Development + Operations

#### Required page structure

- [ ] Add one clear `h1`, using a promise such as: “Tell us what you’re building and we’ll reply with the best next step.”
- [ ] Keep the form easy to scan and complete on mobile; show progress only if the experience is genuinely multi-step.
- [ ] Add an expected response time and `contact@nymbor.com` as the backup contact.
- [ ] Explain what happens after submission.

#### Required fields

- [ ] Name — required.
- [ ] Email — required and format-validated.
- [ ] Company — optional unless the founder explicitly makes it required.
- [ ] Website/current link — optional and URL-validated when supplied.
- [ ] Service needed — required; allow an appropriate “Not sure” choice.
- [ ] Budget range — required, with ranges approved by the founder and aligned with the starting prices.
- [ ] Ideal timeline — required.
- [ ] Project details — required with sensible length bounds.
- [ ] Inspiration/reference links — optional and validated safely.
- [ ] Privacy consent — required, with a link to the privacy notice; marketing consent, if ever added, must be separate and optional.

#### Form semantics and validation

- [ ] Give every control a stable `name`, unique `id`, connected `<label>`, suitable `type`, `autocomplete`, and required state.
- [ ] Use semantic checkbox/radio controls for services and consent; expose selected state to assistive technology.
- [ ] Validate on the client for fast feedback and independently on the server for trust and security.
- [ ] Place plain-language inline errors next to fields and provide an error summary that moves focus to the first invalid field.
- [ ] Do not rely on color alone; associate errors with `aria-describedby` and expose dynamic summaries through an appropriate live region.
- [ ] Preserve entered values after a correctable validation or network error.
- [ ] Prevent duplicate submissions while sending without trapping the user in an indefinite loading state.
- [ ] Support keyboard, touch, autofill, password-manager behavior, browser back/forward, and 200% zoom.

#### Backend, security, and delivery

- [ ] Submit to a server-only endpoint; never expose provider secrets in client code.
- [ ] Validate and normalize payloads on the server using an explicit schema.
- [ ] Enforce body/field length limits and safely handle user-supplied text and URLs.
- [ ] Add layered spam protection: honeypot/time check plus rate limiting; add a user-friendly CAPTCHA only if abuse requires it.
- [ ] Apply per-IP/per-session rate limits with a clear retry response and logging that does not expose submitted personal data.
- [ ] Reject unsupported methods and malformed content types.
- [ ] Deliver to the approved inbox/CRM with a useful subject, safe plain-text/HTML encoding, timestamp, source page, service, and reply-to set to the lead email where the provider permits.
- [ ] Do not log full form payloads or personal details to the browser console, application logs, analytics, or error trackers.
- [ ] Add sending, success, validation-failure, rate-limit, provider-failure, timeout, and offline states.
- [ ] Show the approved response-time promise after success; on failure, keep the form values and show `contact@nymbor.com`.
- [ ] Add server-side failure monitoring/alerting and a method to reconcile provider delivery logs.

#### Deliverability and analytics

- [ ] Configure and verify SPF, DKIM, and DMARC for `nymbor.com` with the chosen email provider.
- [ ] Verify the sending domain/from address and test delivery to at least Gmail and Outlook/Office 365.
- [ ] Track form start, validation failure, submit attempt, success, and server failure without sending names, emails, company names, URLs, or project text to analytics.
- [ ] If using a multi-step form, track step completion and abandonment using non-PII step identifiers.

#### Acceptance tests

- [ ] One complete real enquiry reaches the correct inbox/CRM and notification recipients.
- [ ] Replying to the notification reaches the test lead as intended.
- [ ] Empty submit explains every required correction.
- [ ] Invalid email/URL, overlong values, unsafe input, slow network, offline mode, duplicate click, rate limit, provider outage, and server error all produce useful behavior.
- [ ] Screen-reader and keyboard users can complete, review, submit, correct, and understand the form.
- [ ] A successful submission is recorded once in analytics and contains no PII.

**Done when:** Noman’s design meets this minimum structure, the real backend test passes, failure behavior is proven, and delivery/analytics evidence is attached to the launch ticket.

### P1.3 Publish privacy and legal essentials

**Priority:** P0  
**Owners:** Operations + Founder + Development; legal review where appropriate

- [ ] Create `/privacy` using approved business facts and readable, dated content.
- [ ] Cover data collected, source, purpose, lawful basis where applicable, processors, international transfers where applicable, retention, security, user rights, deletion/contact method, children, changes, and contact details.
- [ ] Name form, hosting, analytics, scheduling, video, and spam-prevention providers that receive data, as applicable.
- [ ] Link privacy from every page via a real footer link and beside the form consent.
- [ ] Decide whether Terms, cookie preferences, or a cookie/consent banner are legally/operationally required based on audience and enabled trackers; do not add a decorative banner that does nothing.
- [ ] Ensure non-essential analytics/marketing storage respects the chosen consent policy before loading.
- [ ] Add privacy-policy version/effective date and an owner for future updates.
- [ ] Verify that sensitive source files, personal documents, editable design originals, and `.DS_Store` are not publicly served from `public/`.

**Done when:** The approved policy is reachable globally, accurately matches real data flows, consent behavior matches the policy, and public assets contain no unintended files.

---

<a id="phase-2"></a>

## Phase 2 — Make proof and content trustworthy

### P2.1 Publish the approved starting investments

**Priority:** P0  
**Owners:** Founder + Content + Development

Use these exact public amounts and formatting everywhere they appear:

| Service | Approved display |
| --- | --- |
| Brand Identity | **Starting at $1,000** |
| Web & Interface Design | **Starting at $1,500** |
| Web Development | **Starting at $1,500** |

- [ ] Replace all `$9999`/`$9,999` placeholders on the home and services pages.
- [ ] Remove square brackets around pricing.
- [ ] Keep the dollar sign, comma, service naming, capitalization, and “Starting at” wording consistent.
- [ ] Add the approved starting price to each service-detail page in a location consistent with its CTA.
- [ ] Ensure form budget ranges do not contradict the published minimums.
- [ ] Search rendered output, metadata, schema, and source data for stale price variants.

**Done when:** The exact approved amounts appear consistently on service cards and service pages, and no placeholder price remains.

### P2.2 Replace weak/repeated proof with approved testimonials

**Priority:** P0  
**Owners:** Founder + Content + Development

#### Publication rules

- [ ] Show one strong quote at a time, not four visual variants of one quote.
- [ ] Pair each quote with the correct client name, confirmed role, project, and one approved real visual.
- [ ] Use a real photo/logo only after permission is confirmed.
- [ ] Preserve the client’s approved wording exactly.
- [ ] Provide meaningful static text even if any video fails to load or is not played.
- [ ] Do not ship empty “play” placeholder cards; hide unavailable stories until content exists.

#### Approval table

| Client / project | Proof purpose | Required confirmation before publish |
| --- | --- | --- |
| Evan / Sapphire | End-to-end website ownership | Confirm whether “informal” was intended or should be “informative”; obtain surname and role if available |
| Nick / Voyager Supplements | Listening and creative execution | Obtain surname and role if available; use “Voyager Supplements” consistently |
| Max Kolb / Remora | Brand-system quality | Confirm Max personally supplied this exact quote; confirm CEO/Co-founder title; otherwise attribute the actual author |
| Drew Ayesse / Nuggetspot | Long-term reliability | Confirm “Nuggetspot” versus “The Nugget Spot” and use the preferred styling |

#### Source quotes to approve

> **Evan / Sapphire:** “I chose Muhammad to take on my project of designing a website start to finish. Really the only direction I gave was something simple that's going to get results. He knocked this project out of the park; he came up with the look by himself, added great photos, and figured out how to make it functional. Easy to work with and very informal. I had to change minimal on the site as he essentially made my dream site come to life. I will be using him for all website work.”

> **Nick / Voyager Supplements:** “Wonderful person to work with! Took the time to fully understand the ask and requirements, then infused his own creativity and expertise into creating an awesome website for our brand! Already talked about working with him in the future for new builds and scaling our business!!”

> **Max Kolb / Remora:** “Working with Muhammad on my company's brand kit was an exceptional experience. He took the time to understand our vision and delivered a sleek, professional, and cohesive brand system that perfectly captured the essence of our Web3 platform. The attention to detail, especially in the logo refinements, color palette organization, and Figma layout, was top-notch. He was fast, responsive, and incredibly easy to collaborate with even under a tight turnaround. Highly recommend for anyone looking to take their brand identity to the next level.”

> **Drew Ayesse / Nuggetspot:** “I've been working with Muhammad on various design and website projects for over a year now. Highly recommend for anyone looking for reliable, quick, and high-quality work!”

**Done when:** Each live quote has written approval, correct attribution, permitted media, accessible text, and no repeated/mismatched identities.

### P2.3 Remove unfinished assets and filler

**Priority:** P0  
**Owners:** Design + Content + Development

- [ ] Replace the showreel containing old Zeneth/Zenneth Studio branding with an approved Nymbor export and matching poster.
- [ ] Remove the 65 MB legacy showreel from the public deployment, even if it is not linked.
- [ ] Remove visible Lorem Ipsum from Feroce artwork; re-export the affected asset rather than covering it with CSS.
- [ ] Replace the Web Development candle/unrelated visual with a clear development or live-build visual.
- [ ] Export sharp portrait crops for project and service cards instead of forcing landscape assets into tall frames.
- [ ] Supply retina-ready dimensions without serving unnecessarily huge originals to small cards.
- [ ] Remove empty testimonial cards and unfinished states from the public UI.
- [ ] Move editable `.ai`/`.eps` logo sources out of `public/`; deploy only required web assets.

**Done when:** No old brand, filler copy, empty proof, irrelevant visual, unintended source file, or visibly soft crop remains in the production asset inventory.

### P2.4 Verify or soften unsupported claims

**Priority:** P0 for public claims; P1 for general editorial cleanup  
**Owners:** Founder + Content + SEO

- [ ] Source or soften the Interface Design conversion figures, including the current “92%” and “up to 34%” statement.
- [ ] Prove or rewrite “Lighthouse 100,” “1.2s First Byte,” “240kb (Clean),” “23-point launch check,” “100% Mobile Ready,” and similar technical promises.
- [ ] Audit all case-study outcome statements and quotes, including every record in the mock project dataset.
- [ ] Explain the difference between “300+ happy brands” and “100+ projects,” or replace them with one verified metric.
- [ ] Replace the duplicated Sully AI description with accurate project copy.
- [ ] Remove irrelevant “cleaner site” subcopy from Brand Identity where it does not describe the service.
- [ ] Review claims such as “pixel-accurate CSS that matches Figma 1:1,” “secure contact forms,” “type-safe,” and “A/B tested” so they match actual delivery practice.
- [ ] Do not present projected Spreadshop metrics as achieved results; label projections clearly and explain the basis.

**Rule:** If Nymbor cannot show the source, live example, measured result, or approved client statement, do not present the claim as fact.

**Done when:** Every objective public claim has an evidence record or carefully qualified copy.

---

<a id="phase-3"></a>

## Phase 3 — Page structure, SEO, indexing, and social previews

### P3.1 Fix headings and semantic landmarks

**Priority:** P0  
**Owners:** SEO + Content + Development

| Route/template | Current finding | Required action |
| --- | --- | --- |
| `/` | One `h1` exists | Preserve one clear `h1`; verify final DOM and heading order |
| `/about` | One `h1` exists | Rewrite content per Noman handoff; maintain logical `h2` structure |
| `/works` | No `h1` | Add a clear page `h1` before/with filtering |
| `/services` | Main heading is `h2` | Promote/add one descriptive `h1` |
| `/contact` | Starts with `h2` | Add one clear page `h1` and correct subordinate headings |
| Service details | One `h1` in shared hero | Preserve; ensure each is unique and service-specific |
| Generic case studies | Two `h1` elements, desktop and mobile | Render one semantic `h1`; style responsively without duplicating it |
| Spreadshop | One screen-reader `h1` | Confirm it remains unique and the visible hierarchy is understandable |

- [ ] Wrap each page’s primary content in one `<main>` landmark with a consistent `id` for the skip link.
- [ ] Give header/footer navigation distinct accessible labels.
- [ ] Ensure section headings do not skip levels for visual styling.
- [ ] Keep decorative labels out of the heading outline unless they describe a real section.

**Done when:** Every public page has exactly one meaningful `h1`, logical headings, and unique landmarks in the rendered DOM.

### P3.2 Implement complete route metadata

**Priority:** P0  
**Owners:** SEO + Content + Development

- [ ] Create unique, approved title and meta description for every indexable route.
- [ ] Add a self-referencing canonical for every indexable page using the final HTTPS host.
- [ ] Add route-specific Open Graph title, description, canonical URL, type, and image.
- [ ] Change Twitter/X cards to `summary_large_image` and include the correct image/title/description.
- [ ] Produce intentional 1200×630 social images with safe text margins and useful alt descriptions.
- [ ] Add `robots` metadata for drafts/noindex routes and ensure it cannot conflict with `robots.txt`.
- [ ] Ensure project/service metadata comes only from approved structured content, not placeholder data.
- [ ] Add appropriate Organization/ProfessionalService structured data with truthful name, URL, logo, email, service area, and same-as profiles.
- [ ] Add Service structured data only where the visible page supports it; add BreadcrumbList to deep pages if visible navigation/labels support it.
- [ ] Validate JSON-LD and never insert unsupported reviews, aggregate ratings, prices, locations, or claims.
- [ ] Verify favicon, Apple icon, manifest, theme colors, app name, and social imagery against final Nymbor brand assets.

**Done when:** Every launch route passes a metadata/canonical/social-preview checklist and schema validation without warnings that reflect incorrect content.

### P3.3 Make indexing intentional

**Priority:** P0  
**Owners:** SEO + Development + Operations

- [ ] Implement `app/robots.js` or a valid `public/robots.txt` with the correct production sitemap URL.
- [ ] Implement `app/sitemap.js` or a valid `public/sitemap.xml` generated only from canonical, launch-approved, indexable routes.
- [ ] Exclude drafts, duplicate routes, parameter noise, and noindex pages from the sitemap.
- [ ] Add an intentional `not-found` experience and confirm unknown URLs return a real HTTP 404, not a soft 200.
- [ ] Define redirects for renamed/normalized slugs, especially any Mogul Bay naming change, and prevent redirect chains.
- [ ] Ensure staging/preview environments are noindex and cannot leak into production canonicals or sitemap URLs.
- [ ] Connect and verify Google Search Console for the canonical domain.
- [ ] Submit the production sitemap after launch and inspect key URLs.
- [ ] Check URL inspection, mobile usability, rich-result/schema output, and indexing status after deployment.

**Done when:** Privacy, robots, sitemap, 404, redirects, and canonical behavior work on the production host and Search Console ownership is verified.

---

<a id="phase-4"></a>

## Phase 4 — Accessibility and inclusive interaction

**Target:** WCAG 2.2 AA for the key journey.  
**Priority:** P0 unless explicitly marked P1.  
**Owners:** Design + Development + Content

### P4.1 Global keyboard and focus behavior

- [ ] Add a visible-on-focus “Skip to main content” link as the first keyboard-focusable control.
- [ ] Give every interactive element a strong `:focus-visible` style with sufficient contrast and no clipping.
- [ ] Ensure visual order and DOM/tab order match at every responsive layout.
- [ ] Replace clickable non-interactive elements with links/buttons, including the active FAQ rows and any hover-only project actions.
- [ ] Remove custom cursor behavior on coarse pointers/touch and preserve the native cursor for controls and users who require it.
- [ ] Verify there are no positive `tabindex` values, keyboard traps, focus loss after route changes, or controls reachable while visually hidden.
- [ ] Provide a useful route-change focus strategy for client navigation where needed.

### P4.2 Navigation and mobile menu

- [ ] Increase the mobile-menu trigger to at least 44×44 CSS pixels.
- [ ] Add an action-specific accessible name that changes between “Open menu” and “Close menu.”
- [ ] Add `aria-expanded`, `aria-controls`, a stable menu ID, and appropriate current-page state (`aria-current="page"`).
- [ ] Give desktop and mobile navigation distinct accessible labels.
- [ ] Decide whether the overlay is a disclosure menu or modal dialog, then implement the matching semantic/focus pattern consistently.
- [ ] When open, prevent background scrolling and unintended background interaction.
- [ ] Support Escape to close, sensible first focus, focus containment if modal, and return focus to the trigger on close.
- [ ] Close reliably after route selection and reset nested Services state appropriately.
- [ ] Make the Services submenu operable by keyboard without depending on hover.

### P4.3 FAQ accordion

- [ ] Make the full question row a semantic `<button>` inside an appropriate heading.
- [ ] Add unique button/panel IDs, `aria-expanded`, and `aria-controls`; associate the panel with its trigger.
- [ ] Keep the trigger at least 44px tall with visible focus.
- [ ] Ensure the panel is removed from the accessibility tree when collapsed.
- [ ] Test Enter, Space, Tab, Shift+Tab, zoom, and reduced motion.
- [ ] Replace global Shopify/conversion FAQs on service pages with service-specific FAQ data for Brand Identity, Interface Design, and Web Development.

### P4.4 Media, modal, and controls

- [ ] Make showreel sound/play controls and footer social links at least 44×44 or provide an equivalent 44px target area.
- [ ] Give media controls explicit labels/state such as “Play showreel,” “Pause showreel,” “Mute,” and “Unmute.”
- [ ] Never autoplay audible media; do not unmute automatically after silent autoplay.
- [ ] Provide captions/transcript for spoken testimonial video and any meaningful showreel audio; mark decorative media accordingly.
- [ ] Complete the testimonial dialog focus trap, initial focus, focus restoration, accessible title/description, backdrop behavior, and reduced-motion handling.
- [ ] Ensure native video controls are keyboard and screen-reader usable and do not sit beneath custom overlays.
- [ ] Pause videos when offscreen, when a modal closes, when the page is hidden, and for reduced-motion where movement is not essential.

### P4.5 Images, copy, contrast, and responsive access

- [ ] Replace generic alt text such as “Client logo,” numbered “Brand Logo,” or bare project names with meaningful alt text—or empty alt for truly decorative/repeated images.
- [ ] Avoid duplicating nearby visible captions in image alt text.
- [ ] Confirm client-logo marquee content is understandable without motion and not announced repeatedly.
- [ ] Run contrast checks for text, controls, focus indicators, disabled states, gradients, and text placed over project media.
- [ ] Verify text reflows at 200% browser zoom and 400% text zoom where applicable without loss of content or controls.
- [ ] Verify 320px width, landscape phones, and touch operation without horizontal overflow.
- [ ] Ensure content still appears and remains usable when JavaScript or animation initialization fails.

**Accessibility done when:** The whole primary journey is usable with keyboard only and passes automated checks plus manual VoiceOver/Safari and NVDA/Chrome or an agreed equivalent screen-reader pairing.

---

<a id="phase-5"></a>

## Phase 5 — Motion, loader, media, and performance

### P5.1 Reduce loader and animation risk

**Priority:** P0  
**Owners:** Design + Development

- [ ] Remove the forced transition if it is decorative, or keep the total block below the agreed brief threshold and never tie content availability to it.
- [ ] Render meaningful page content immediately in the server output; animation should enhance it, not unlock it.
- [ ] Add a fail-safe so loader/animation/runtime errors can never hide content.
- [ ] Test About and Home on slow CPU/network, bfcache restore, disabled JavaScript, reduced motion, and failed media requests.
- [ ] Shorten the home featured-work pinning from the current `400vh` to an approved duration that does not make users feel trapped.
- [ ] Reduce competing motion between smooth scroll, sticky/pinned sections, custom cursor, marquee, showreel, and component animations.
- [ ] Provide a calm reduced-motion version: no parallax/pinning dependence, no continuous cursor/marquee motion, minimal transitions, and all content reachable.
- [ ] Ensure GSAP/ScrollTrigger instances, observers, timers, and animation frames clean up correctly after navigation.

### P5.2 Establish a media-loading strategy

**Priority:** P0  
**Owners:** Development + Design

- [ ] Measure the production network waterfall before changing assets; identify LCP media, duplicate requests, unused variants, and early video/font competition.
- [ ] Give only true above-the-fold LCP media high priority; remove eager loading from non-first featured-project images.
- [ ] Lazy-load images/video below the fold using correctly sized responsive sources.
- [ ] Do not download desktop and mobile variants together; verify behavior from the browser network panel, not JSX intent alone.
- [ ] Compress the active showreel and provide an efficient poster plus mobile-appropriate video rendition.
- [ ] Compress oversized Spreadshop assets and generate device-appropriate WebP/AVIF or equivalent derivatives.
- [ ] Pause autoplay media when outside the viewport/page is hidden and avoid decoding video before needed.
- [ ] Give every image/video stable intrinsic dimensions or aspect ratio to prevent layout shift.
- [ ] Review `sizes`, quality, crop focal point, and DPR behavior for every card/gallery image.
- [ ] Keep original/high-resolution source assets outside the public web directory.

### P5.3 Fonts, JavaScript, and production build

**Priority:** P0  
**Owners:** Development

- [ ] Make `npm run lint` pass with zero errors; triage warnings and leave only explicitly accepted exceptions.
- [ ] Fix the current lint failures in `founder-signal.jsx`, `focus-section.jsx`, and Interface Design JSX; address stale ref cleanup/dependency warnings.
- [ ] Make `npm run build` complete in CI and the production deployment environment.
- [ ] Remove the build-time Google Fonts dependency by self-hosting JetBrains Mono if reliable network access cannot be guaranteed; verify font licensing.
- [ ] Audit the duplicate Helvetica/Helvetica Neue/Romie/JetBrains font inventory; ship only used weights and formats.
- [ ] Update or pin the stale `baseline-browser-mapping` data as part of dependency maintenance.
- [ ] Run a bundle analysis and remove/dynamically load code that is not needed on initial routes, especially overlapping animation libraries.
- [ ] Verify tree-shaking and route-level loading for GSAP, Framer Motion, Lenis, Lucide, and marquee code.
- [ ] Check production for hydration issues, console errors/warnings, failed requests, and uncaught promise errors.

### P5.4 Performance targets and evidence

**Priority:** P0  
**Owners:** Development

- [ ] Test the production build—not the development server—using Lighthouse mobile and WebPageTest on a throttled mobile profile.
- [ ] Meet the repository targets: LCP under 2.0s, INP under 200ms, CLS under 0.1.
- [ ] Meet Lighthouse goals: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- [ ] Test cold-cache and repeat views for Home, Works, Contact, each service type, and the heaviest case study.
- [ ] Capture field measurement after launch using privacy-compliant real-user monitoring where available.
- [ ] Test on a real lower-end Android device, not only desktop emulation.
- [ ] Attach reports, environment, date, and build ID to the final sign-off.

**Performance done when:** The production build meets the agreed mobile metrics, no below-fold media dominates initial load, and content is resilient when motion/media fails.

---

<a id="phase-6"></a>

## Phase 6 — Page-by-page completion

### Home — P0

- [ ] Replace the legacy-branded showreel and poster.
- [ ] Publish exact $1,000 / $1,500 / $1,500 prices without brackets.
- [ ] Connect all service and primary CTAs to the chosen journey.
- [ ] Replace repeated/empty testimonial treatment with approved proof.
- [ ] Remove any Feroce Lorem Ipsum visible through home media.
- [ ] Shorten sticky featured-work interaction and stop eager-loading all featured images.
- [ ] Increase media-control hit areas and fix accessible labels/state.
- [ ] Replace the unrelated Web Development candle visual.
- [ ] Explain or replace “300+ Happy Brands” relative to “100+ projects.”
- [ ] Change “A Focused team” to “A focused team.”
- [ ] Verify one `h1`, final hero line breaks, CTA clarity, reduced motion, and no horizontal overflow.

### About — Noman / P0

- [ ] Open with a clear, human explanation of who Muhammad is and what Nymbor helps people build; avoid vague “architecting authority” language.
- [ ] Show Muhammad’s full approved name, real photo, location/team setup, verified experience, and why Nymbor was started.
- [ ] Explain the working style in 3–4 clear steps: understand the business, shape the direction, design/build it, support launch.
- [ ] Add verified proof: selected clients, locations/project counts only if confirmed, one approved testimonial, and direct “Start a Project” CTA.
- [ ] Fix the identified punctuation/spacing defects and keep mobile paragraphs scannable.
- [ ] Ensure the page feels like meeting the founder, not reading an agency manifesto.
- [ ] Verify content appears without animation/JavaScript and the loader cannot block it.
- [ ] Fix current lint/ref lifecycle issues in the founder component.

**About acceptance:** A new visitor can identify who is behind Nymbor, why to trust him, how engagement works, and the next step without decoding abstract copy.

### Works — P0

- [ ] Add a clear `h1` and route-specific metadata/social preview.
- [ ] Replace “Apply for a Pipeline” with the approved CTA and real navigation.
- [ ] Standardize Mogul Bay and Let’s Grub naming.
- [ ] Use sharp portrait crops with correct responsive sizing.
- [ ] Keep the working grid/filter experience but preserve native cursor/touch behavior and accessibility.
- [ ] Publish only approved projects and make filter counts/empty states intentional.
- [ ] Verify every card URL, accessible name, focus state, and filtered keyboard behavior.

### Services index — P0

- [ ] Add/promote one clear `h1`.
- [ ] Publish approved prices and remove brackets/placeholders.
- [ ] Connect all primary and secondary CTAs.
- [ ] Replace the development card visual.
- [ ] Ensure each service summary, scope, price, and destination matches its detail page.
- [ ] Give the route unique metadata, canonical, social image, and appropriate schema.

### Contact — Noman / P0

- [ ] Implement every requirement and acceptance test in P1.2.
- [ ] Add the approved `h1`, response promise, budget field, privacy consent, backend delivery, notifications, spam protection, and analytics.
- [ ] Verify expected reply time and backup email in success/failure copy.

### Brand Identity service — P1 content, P0 trust/CTA

- [ ] Add the approved starting price.
- [ ] Remove irrelevant “cleaner site” subcopy.
- [ ] Replace duplicated Sully AI copy with accurate project content.
- [ ] Standardize Let’s Grub naming.
- [ ] Use brand-specific FAQs instead of Shopify/conversion questions.
- [ ] Ensure proof cards, tags, alt text, and project claims are real and approved.
- [ ] Align “Book a Brand Identity Call” with the chosen conversion flow.

### Interface Design service — P1 content, P0 trust/CTA

- [ ] Add the approved starting price.
- [ ] Source or soften conversion statistics and results claims.
- [ ] Preserve the useful diagnostic structure.
- [ ] Fix duplicated data keys and current lint-invalid JSX/comment syntax.
- [ ] Use interface-specific FAQs.
- [ ] Align CTA labels with the chosen conversion flow.

### Web Development service — P1 content, P0 trust/CTA

- [ ] Add the approved starting price.
- [ ] Prove or rewrite speed, page-weight, Lighthouse, A/B testing, type-safety, and 23-point QA claims.
- [ ] Change the stylized “N.E.X.T.js” label to the approved conventional “Next.js” form unless the founder explicitly retains it.
- [ ] Use development-specific FAQs.
- [ ] Confirm platform descriptions match actual supported delivery capabilities.
- [ ] Align CTA labels with the chosen conversion flow.

### Generic case-study template — P0

- [ ] Render only one `h1` in the DOM.
- [ ] Resolve all `See...`/live URLs or remove unavailable actions.
- [ ] Give each public study the Spreadshop minimum: problem, Nymbor role, scope, decisions, result, evidence, client quote, and services.
- [ ] Remove all mock people, quotes, metrics, dates, assets, and descriptions from public routes.
- [ ] Add project-specific metadata, canonical, social image, and truthful structured data.
- [ ] Verify video/image behavior, alt text, captions, external-link policy, and mobile length.

### Spreadshop case study — P1 except route/link truth is P0

- [ ] Add section links, an in-page table of contents, or an accessible progress cue for the long mobile story.
- [ ] Resolve/remove the disabled “Visit site” action.
- [ ] Clearly distinguish projected metrics from measured outcomes.
- [ ] Compress oversized images and verify that only the correct desktop/mobile sources load.
- [ ] Preserve the single `h1` and strong semantic section labeling.
- [ ] Verify the story covers problem, role, scope, decisions, result/evidence, quote, and services.

### Global footer — P0

- [ ] Make “privacy” a real `/privacy` link, not plain text.
- [ ] Add approved social URLs or remove unavailable profiles.
- [ ] Give footer navigation a unique accessible label.
- [ ] Increase social tap targets to at least 44×44 or an equivalent target area.
- [ ] Keep a clear contact path and generate the copyright year automatically or explicitly review it annually.

### Not-found and system states — P0 added safeguard

- [ ] Create a branded, lightweight not-found page with a real 404 status and routes back to Home, Works, and Contact.
- [ ] Add appropriate error/loading states for server-rendered routes without masking content behind decorative loaders.
- [ ] Ensure application/provider errors do not leak stack traces, secrets, personal data, or internal IDs.

---

<a id="phase-7"></a>

## Phase 7 — Analytics, security, and operational readiness

### P7.1 Measurement plan

**Priority:** P0  
**Owners:** Founder + Operations + Development

- [ ] Define the primary conversion and the business questions analytics must answer before installing tools.
- [ ] Connect the approved GA4/PostHog/other property to the production domain with correct account ownership.
- [ ] Exclude team/staging traffic where practical and prevent duplicate initialization on client navigation.
- [ ] Track, at minimum: primary CTA clicks, navbar/footer CTA clicks, service interest, project views, showreel play/unmute, testimonial open/play, form start, form errors, form success, and booking completion if applicable.
- [ ] Track scroll depth only if it will drive a decision; use coarse thresholds rather than noisy continuous events.
- [ ] Define event names and allowed parameters in a data dictionary.
- [ ] Do not send PII, form text, full URLs containing user data, or client confidential data.
- [ ] Verify events in debug/realtime tools on desktop and mobile, including SPA navigation and failed submissions.
- [ ] Record the conversion event as a key event/goal and test attribution from a tagged campaign URL.
- [ ] Document analytics owner, retention, access, consent behavior, and monthly review cadence.

### P7.2 Security and reliability

**Priority:** P0  
**Owners:** Development + Operations

- [ ] Keep all secrets in server-only environment variables; document required keys without committing values.
- [ ] Validate required production environment variables during deploy/start and fail safely if missing.
- [ ] Add appropriate security headers: Content Security Policy tailored to real providers, HSTS on production HTTPS, `X-Content-Type-Options`, Referrer Policy, frame protection via CSP, and a minimal Permissions Policy.
- [ ] Review CSP compatibility with Next.js, analytics, booking, form, video, and image origins before enforcing it.
- [ ] Run dependency/security audits, triage findings, and update vulnerable packages without blind major-version upgrades.
- [ ] Confirm HTTPS, canonical host redirect (`www` versus apex), certificate renewal, and no mixed content.
- [ ] Add error monitoring for client/server failures with source maps protected appropriately and PII scrubbing enabled.
- [ ] Add uptime monitoring for Home, Contact, privacy, robots, sitemap, and the form endpoint.
- [ ] Define alert recipients and a response path for form-delivery failure or production outage.
- [ ] Back up DNS/deployment/environment configuration and document a tested rollback to the previous deployment.
- [ ] Remove source/design files and OS metadata from public output.

### P7.3 Email/domain operations

**Priority:** P0  
**Owners:** Operations

- [ ] Verify `contact@nymbor.com` can send and receive reliably.
- [ ] Publish and validate SPF, DKIM, and DMARC without conflicting records.
- [ ] Start DMARC at the approved policy, monitor reports, and name the owner responsible for tightening it.
- [ ] Ensure form-provider sending aligns with SPF/DKIM and does not spoof an unauthenticated visitor address.
- [ ] Test reply, forwarding, spam placement, and failure/bounce visibility.
- [ ] Document account recovery and at least one backup administrator.

---

<a id="phase-8"></a>

## Phase 8 — QA, launch, and sign-off

### P8.1 Automated quality gate

**Priority:** P0  
**Owner:** Development

- [ ] `npm run lint` exits successfully with zero errors.
- [ ] `npm run build` exits successfully in a clean production/CI environment.
- [ ] Production server starts from the built output and key routes return expected status codes.
- [ ] Add a link/route crawl covering internal links, anchors, assets, canonicals, redirects, status codes, and placeholder `#` destinations.
- [ ] Add repeatable checks for one `h1`, missing image alt, form labels, page titles/descriptions, canonicals, robots, sitemap, and noindex behavior.
- [ ] Run dependency/security checks and record accepted exceptions with owner/due date.
- [ ] Confirm no browser console error, hydration warning, uncaught exception, failed critical request, or CSP violation in key flows.

### P8.2 Functional matrix

**Priority:** P0  
**Owners:** Development + Founder

- [ ] Test navbar, Services submenu, mobile menu, footer, filters, case-study links, showreel controls, testimonial dialog, FAQs, all CTAs, external links, and the full form journey.
- [ ] Test mouse, keyboard, touch, autofill, browser back/forward, refresh on deep links, and opening shared URLs directly.
- [ ] Test slow response, offline transition, blocked video, blocked analytics, image failure, form-provider error, duplicate submit, 404, and reduced-motion mode.
- [ ] Confirm no horizontal overflow, trapped scroll, invisible content, accidental audible autoplay, focus loss, or mismatch between label and destination.
- [ ] Verify analytics events exactly once and no PII in network requests.

### P8.3 Required browser/device coverage

**Priority:** P0  
**Owners:** Design + Development

- [ ] Current iPhone Safari at 390×844.
- [ ] Current iPhone Safari at 430×932.
- [ ] Current Android Chrome, including a lower-end physical device.
- [ ] Tablet at 768×1024 in portrait and landscape where layout changes.
- [ ] Desktop at 1440px and a larger wide-screen check.
- [ ] 320px minimum-width check.
- [ ] Current Chrome, Safari, Firefox, and Edge desktop.
- [ ] Keyboard-only pass, VoiceOver/Safari pass, and NVDA/Chrome or agreed equivalent pass.

For every required viewport, explicitly inspect hero line breaks, menu, sticky work, form, autoplay/media controls, footer, no horizontal overflow, focus visibility, and reduced motion.

### P8.4 SEO, social, and performance QA

**Priority:** P0  
**Owners:** SEO + Development

- [ ] Inspect rendered metadata for every indexable route.
- [ ] Validate canonical URL, robots directive, sitemap inclusion, Open Graph, Twitter/X card, and schema.
- [ ] Test social previews using actual deployed URLs.
- [ ] Verify the production 404 returns 404 and removed/draft routes follow their approved redirect/noindex/404 state.
- [ ] Run Lighthouse/WebPageTest and attach evidence for the agreed route sample.
- [ ] Confirm Search Console ownership and sitemap readiness before public launch.

### P8.5 Production launch checklist

**Priority:** P0  
**Owners:** Founder + Design + Development + Operations

- [ ] Freeze approved copy/assets and record the release commit/deployment ID.
- [ ] Confirm production environment variables, provider quotas, billing, and account ownership.
- [ ] Confirm staging remains noindex and production indexing is enabled only at launch.
- [ ] Confirm DNS, HTTPS, canonical-host redirect, email authentication, and backup access.
- [ ] Run one real production form submission and confirm delivery, reply behavior, analytics, and success state.
- [ ] Run a production link crawl and spot-check every primary route.
- [ ] Founder signs content/testimonials/pricing; Design signs visual/responsive/accessibility details; Development signs build/forms/performance/security; Operations signs privacy/email/analytics/monitoring.
- [ ] Record known accepted P1/P2 items with owner, risk, and due date. No silent exceptions.
- [ ] Keep the prior deployment available and confirm the rollback procedure.

**Launch decision:** Launch only when all P0 checkboxes are complete and G1–G8 have named sign-off. The calendar date alone is not approval.

---

<a id="post-launch"></a>

## Post-launch verification

### First 24 hours — P0 operational follow-through

- [ ] Monitor uptime, client/server errors, CSP violations, form failures, provider delivery, analytics, and key page performance.
- [ ] Submit/confirm sitemap in Search Console and request indexing for priority pages where appropriate.
- [ ] Send another controlled form test from a non-team network/device and verify inbox placement.
- [ ] Review live 404s, redirect errors, and broken asset requests.
- [ ] Check real social shares/previews and fix cache/versioning issues if needed.

### First 7 days — P1

- [ ] Review Core Web Vitals/field data as it becomes available.
- [ ] Review conversion funnel events and confirm numbers reconcile with actual form/booking records.
- [ ] Review Search Console coverage, sitemap processing, mobile usability, and structured-data reports.
- [ ] Review spam volume, false positives, form abandonment, and deliverability.
- [ ] Fix launch regressions before starting unrelated feature work.

### First 30 days — P2

- [ ] Compare traffic-to-lead conversion by route/service without over-interpreting small samples.
- [ ] Review top exits, CTA usage, performance by device, and case-study engagement.
- [ ] Schedule evidence-backed content improvements and retire unsupported low-value sections.
- [ ] Review dependency updates, monitoring access, privacy accuracy, and account recovery.

---

<a id="definition-of-done"></a>

## Definition of done

Nymbor is ready to launch only when all of the following are true:

- A real enquiry reaches the correct destination; invalid, failed, duplicate, spam, and offline cases are clear and recoverable.
- No visible control points to `#`, a missing page, the wrong destination, an unavailable promise, or an accidental draft route.
- Every public client, quote, role, visual, project, statistic, price, and service claim is approved and supportable.
- Privacy, robots, sitemap, 404 behavior, canonicals, metadata, social previews, schema, and Search Console are correct on production.
- Every launch page has exactly one meaningful `h1` and an intentional indexing state.
- The primary journey works by keyboard and assistive technology with visible focus, 44px targets, semantic controls, sufficient contrast, and reduced motion.
- Production lint and build pass; there are no critical console/network errors; content remains available if animation or media fails.
- Mobile performance meets the agreed Core Web Vitals and Lighthouse targets using the production build.
- Analytics captures approved conversion events exactly once and sends no PII.
- `contact@nymbor.com` and form delivery pass real-world SPF/DKIM/DMARC and inbox tests.
- Required browser/device/viewports pass, including hero wrapping, sticky sections, forms, media, menu, footer, no overflow, and reduced motion.
- Founder, Noman/design, development, SEO, and operations have no unresolved handoff gaps and have recorded sign-off.

### Final principle

The site does not need another redesign. It needs one disciplined finishing pass so the real experience—lead capture, proof, access, search, speed, and reliability—matches the quality of the visual brand.
