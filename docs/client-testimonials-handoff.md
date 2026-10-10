# Client testimonials and launch cleanup

Source: `NYMBOR — Client Testimonials.docx`. Implemented October 11, 2026.

## Content and layout

- All six supplied testimonials and display names are stored in `lib/testimonials.js`. Quotes were programmatically compared with the document and match exactly, including original grammar and punctuation.
- The homepage keeps Lauren's full featured testimonial and presents the other five in a slow react-fast-marquee row. Content-sized cards stretch to equal height with aligned author signatures. Pause, hover-pause, touch-pause and a static “View all” layout support reading; reduced-motion users receive the static layout automatically. Screen readers receive each quote once, without the marquee's visual duplicates. No quote is shortened. Evan's initials occupy the same space as the approved portraits.
- Sapphire's case study uses Evan's complete supplied testimonial from the same source.
- Both contact forms and server validation share the six requested budget options.
- Brand Identity retains its visual project section and omits the additional related-work section.
- Privacy and Terms routes, metadata, sitemap entries, footer navigation and contact-form privacy link were added. The privacy text describes the current email-based form workflow; these pages do not claim jurisdiction-specific legal compliance.
- The loader now respects reduced-motion preferences.

## Approved photo provenance

| Client | Document source | Result |
| --- | --- | --- |
| Lauren Kuhn | https://thecoastaleditbylauren.com/ | Portrait from the personal introduction; stored locally as optimized WebP. |
| Max Kolb | User-approved `public/max-pic.png` | Optimized WebP added to his testimonial. |
| Drew Ayasse | https://www.instagram.com/drewayasse/ | Profile portrait from the exact supplied Instagram account; stored locally as WebP. |
| Darcey Self | https://www.galfridaycreative.com/ | Portrait from “Who is GalFriday?”; stored locally as optimized WebP. |
| Bienvinido Onia | User-approved `public/bein-pic.jpeg` | Optimized WebP added to his testimonial. |
| Evan Jones | Sapphire Pools social accounts, if Evan appears | Document provides no direct portrait URL and explicitly says selection is unconfirmed; no substitute photo used. |

Lauren image: https://thecoastaleditbylauren.com/wp-content/uploads/2026/04/150536987de85f88f9a5571cb1eb791781866ca4.png

Darcey image: https://images.squarespace-cdn.com/content/v1/67857a3acf7450251340cbff/31a54a3d-fe4e-4780-a31c-c87d7ad58d32/Darcey-Bio-2025.jpg

The document's embedded hyperlinks were extracted from `word/_rels/document.xml.rels`, not inferred from client names. No Calendly URL appears in the document or active site configuration. Existing project CTAs continue to use `/contact`.

## Verification and remaining dependencies

- Production build passes.
- ESLint reports no errors and four existing warnings in unrelated legacy components.
- All six quotes match the source document exactly; all six budgets pass server validation; an invalid email is rejected.
- Browser audit: all 17 public pages at 320px, 768px and 1440px returned HTTP 200, had one H1, and showed no document-level horizontal overflow, old-brand/placeholder text or browser exceptions. Crawled internal links had no errors. Mobile menu open/Escape-close and empty-form validation passed.
- One clearly labelled test enquiry was submitted through the real mobile form. `/api/contact` returned HTTP 200 with a Resend email ID, and the success confirmation rendered correctly. No other test emails were submitted.
- Resend's delivery lookup confirmed the test email status as `delivered`.
- Changed source files pass targeted ESLint with no warnings or errors; `git diff --check` passes.
- Active source contains no old studio branding or visible Markdown heading markers. Unused legacy components and unpublished sample project records were preserved; publication controls already exclude sample projects from public routes.
- Sampled the active showreel, including its closing sequence; a full frame-by-frame and spoken-audio review of every media asset is not established by that check.
- Remaining photo dependency: an identified Evan portrait. Max and Bien now use the user-provided approved photos.
- Booking dependency: a real booking URL is needed if Calendly should be offered.
- Changes are local; no deployment has been performed.

## Document checklist for review

| Document item | Status | What to check / what remains |
| --- | --- | --- |
| 01 — Remove Zeneth everywhere | Partially verified | Active page text, navigation, metadata and logo references use Nymbor. Active showreel frames were sampled. Full visual/audio review of all videos, baked-in image text and social previews remains. Unused source assets have not been deleted. |
| 02 — Remove unfinished content | Done for audited public page text/routes | No visible Lorem ipsum, Coming Soon, dummy-project routes or Markdown heading markers were found on the 17 audited pages. Legacy source/sample records remain excluded from publication. Temporary imagery across every media asset still needs a visual content review. |
| 03 — Fix contact form | Done | Both forms and server accept the six exact budget ranges. A real mobile-form submission returned success, displayed confirmation and was confirmed delivered by Resend. |
| 04 — Navigation and conversions | Partially verified | Crawled internal links return successfully; mobile menu and contact conversion were checked. No Calendly URL exists in the document/configuration. Booking requires the real URL; external destination and all video-control checks are not complete. |
| 05 — Brand Identity duplicate work | Done | `/services/brand-identity` keeps its visual project section and no longer repeats work through the related-work section. |
| 06 — Cards and headings | Done for identified issues | Testimonials now use aligned grid rows and consistent signature spacing. No visible `##` was found on audited public pages. |
| 07 — Mobile and tablet | Browser checks done; device checks remain | Prior full-page checks passed at 320/768/1440px. Refined testimonials additionally checked at 1024px. Real iPhone Safari/Android testing and a full interaction-by-interaction review remain. |
| 08 — Six original testimonials/photos | Text done; five photos added | All six exact quotes and display names are included. Lauren, Max, Drew, Darcey and Bien have approved portraits. Only Evan's portrait remains; his initials are used. |
| 09 — Final public pages | Implemented; final review remains | Privacy/Terms pages, footer links, metadata and sitemap are in place. Business review of policy wording and visual verification of favicon/social previews remain. |

All changes are local. Deployment and post-deployment verification remain outstanding.
