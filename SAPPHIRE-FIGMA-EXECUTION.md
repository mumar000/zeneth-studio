# Sapphire Pools Case Study: Figma Execution Handoff

## Objective

Replace the completed ARPM case-study plan with a pixel-accurate, responsive implementation plan for Sapphire Pools. The existing Spreadshop, Let's Grub, and ARPM implementations must remain unchanged until Sapphire is implemented and verified.

## Verified Figma Source

The supplied link works and the requested design is accessible.

- Figma file: `Case - Study - Spreadshop`
- Project represented by the selected node: `Sapphire Pools`
- URL: `https://www.figma.com/design/T043Pn2NL3TfsLUOqR5sNs/Case---Study---Spreadshop?node-id=201-38`
- File key: `T043Pn2NL3TfsLUOqR5sNs`
- Root node: `201:38`
- Root frame: `Case Studies Sapphire`
- Desktop reference: `1920 × 23,518`

The Figma file name is historical; node `201:38` is the Sapphire Pools case study. The full root is a very tall, loosely grouped frame, so each implementation stage must be inspected and exported using the exact child nodes listed below rather than treating the page as one flattened image.

## Confirmed Project Story

Sapphire was a new pool company without a portfolio of completed projects. It still needed to feel established, premium, and trustworthy at launch. The solution was a complete brand world and lead-focused WordPress website built around quiet luxury, editorial typography, controlled contrast, and imagery that could later be replaced by Sapphire's own project photography.

- Services: Brand identity, web design, and WordPress development
- Industry: Pool and wellness
- Market: Residential and commercial
- Scope: Brand to website
- Creative direction: Quiet luxury

Do not invent performance metrics, dates, URLs, or business claims that are absent from Figma.

## Repository Replacement Strategy

When implementation begins:

1. Replace ARPM's featured position on `/works` with Sapphire, but do not delete the existing ARPM route or assets prematurely.
2. Add Sapphire to `lib/projects-data.js` with the slug `sapphire`.
3. Create `app/works/sapphire/page.jsx`.
4. Create page components in `components/works/sapphire/`.
5. Store permanent exports in `public/works/sapphire/`, grouped by section.
6. Exclude `sapphire` from generic static route generation if it conflicts with the dedicated route.
7. Restore ARPM to generic routing only if its current dedicated-route arrangement requires it.
8. Preserve Spreadshop and Let's Grub routes, components, and assets.

Suggested project metadata:

- Title: `Sapphire Pools`
- Slug: `sapphire`
- Accent: `#CBAC56`
- Background: `#0C0C0C`
- Tags: `Brand Identity`, `Web Design`, `Full Stack Development`, `WordPress`

## Verified Design System

### Colors

| Token | Value | Use |
| --- | --- | --- |
| Sapphire Gold | `#CBAC56` | Accent, labels, identity, CTA |
| Ivory Mist | `#FFFAEF` | Light surface and warm text |
| Midnight Black | `#0C0C0C` | Dark panels and primary contrast |
| White | `#FFFFFF` | Light text and surfaces |
| Supporting gray | `#7D7D7D` | Secondary information |

Sample section nodes directly for any additional neutral or overlay. Do not approximate the gold or ivory.

### Typography

The Figma design uses:

- `PP Editorial Old Ultralight` for large editorial headings.
- `PP Editorial Old Ultralight Italic` for italic editorial headings.
- `SF Pro Light` for case-study body copy.
- `SF Pro Regular` for labels and supporting facts.
- `Messina Sans Book` inside the Sapphire brand and website artifacts.

Verified reference styles:

- Hero headline: `96px`, `1.2` line-height, `-2.88px` tracking, PP Editorial Old Ultralight, Ivory Mist.
- Editorial section headline: `96px`, `1.2` line-height, `-2.88px` tracking, PP Editorial Old Ultralight Italic.
- Body copy: `24px`, `1.3` line-height, `-0.72px` tracking, SF Pro Light.
- Capsule labels: SF Pro Regular, uppercase, approximately `16px` or `22.7px` depending on the section.

### Font Dependency

The repository currently does not contain licensed files for PP Editorial Old, Messina Sans, or SF Pro. It contains Romie and Helvetica families, but silently substituting those would not be pixel-perfect. Obtain and add the exact licensed webfont files before final visual sign-off. Temporary fallbacks may be used only during structural development and must be clearly isolated in the font configuration.

### Shapes and Surfaces

- Rounded capsule labels use high-radius pill shapes.
- Primary media cards and the testimonial panel use soft, restrained radii.
- Dark sections use Midnight Black rather than generic black.
- Photography and interface imagery should remain dominant; avoid extra shadows or decorative effects not present in Figma.

## Complete Section Inventory

### 1. Hero

- Range: `y=0–1086`
- Background image: `201:46`
- Service line: `201:47`
- Headline: `201:57`
- Supporting copy: `201:48`
- Project facts: `201:49–201:56`
- Headline: `New company. No project photos. Still had to look premium.`
- Supporting copy: `Sapphire needed to earn trust before the portfolio existed. We built the world first, then gave the business somewhere to grow.`

Use the exact full-bleed photograph with its black `60%` overlay. Keep the desktop type scale and intentional negative space. On small screens, reflow facts below the introduction without placing text over critical parts of the image.

### 2. The Reality

- Range: `y=1086–1995`
- Label container: `201:62`
- Label: `01 THE REALITY`
- Intro: `201:58`
- Client quote: `201:61`
- Attribution: `201:59`
- Metrics: `201:64`
- Quote: `“We are starting up a pool company so I dont have any pictures of projects I can use yet.”`
- Attribution: `Evan Jones (Sapphire Pools)`
- Metrics: `00 Usable project photos`, `5–7 Launch pages`, `02 Primary lead paths`

Build all metrics as live text. Preserve the deliberate typo in the client quote unless the stakeholder approves copy editing.

### 3. The World — Brand Identity

- Range: `y=1995–10508`
- Section background: `201:39`
- Label container: `201:230`
- Label: `02 THE WORLD`
- Headline: `201:229`
- Supporting copy: `201:228`
- Headline: `Create trust before the proof existed.`
- Supporting copy: `The answer was not to fake a giant past. It was to make every choice feel intentional: editorial type, controlled contrast, quiet confidence, and enough room for the work to become the hero later.`

Identity presentation nodes:

- Light logo composition: `201:232`, logo group `201:367`
- Dark logo composition: `201:393`, logo group `201:394`
- Editorial lookbook mockup: `201:233`
- Color-system background: `201:236`
- Color cards: `201:237`
- PP Editorial specimen: `201:42`, `201:421`
- Messina Sans specimen: `201:44`, `201:422`
- Type divider: `201:423`
- Application grid: `201:234`, `201:282`, `201:300`, `201:328`, `201:361`, `201:235`
- Billboard/banner: `201:327`

Color meanings:

- Sapphire Gold: prestige, luxury, warmth, and craftsmanship.
- Ivory Mist: softness, calm, openness, and wellness.
- Midnight Black: authority, sophistication, and modern contrast.

Export logos as original transparent SVG/PNG assets. Build color cards and type descriptions as live HTML where possible. Do not use screenshots that introduce gray or opaque backgrounds behind transparent marks.

### 4. The First Impression — Homepage

- Range: `y=10508–18532`, including the conversion principles
- Intro: `201:73`
- Label: `201:74`, `03 THE FIRST IMPRESSION`
- Headline: `We did not design a website. We designed belief.`
- Homepage composition: `201:80`, `1816 × 6796`

Key homepage nodes:

- Hero media and headline: `201:87`, `201:90`
- About area: `201:88`, `201:89`, `201:91`, `201:110`, `201:124`
- Services: `201:95`, `201:127–201:135`
- Process: `201:86`, `201:134`, `201:137–201:160`
- Differentiation: `201:85`, `201:93`, `201:94`, `201:161–201:167`
- Form and footer: `201:81–201:84`, `201:168–201:227`
- Conversion principles: `201:424`
- Dividers: `201:434–201:438`
- Principles: `01 Aspiration first`, `02 Clear project action`, `03 Calls + quotes`

Do not export the complete `1816 × 6796` homepage as one giant raster. Export logical screens independently or reconstruct the layout so desktop text remains sharp and mobile can reflow cleanly.

### 5. The System

- Range: `y=18532–20207`
- Label: `201:439`, `04 THE SYSTEM`
- Headline: `201:78`, `Every page had a job.`
- Page collage: `201:443`, `1708 × 1184`

Export the collage columns independently at 4× and preserve the staggered desktop composition. Convert it to a readable vertical sequence on mobile rather than shrinking the entire collage.

### 6. Beyond the Mockup

- Range: `y=20207–21881`
- Label: `201:441`, `05 BEYOND THE MOCKUP`
- Headline: `201:79`, `Built for the messy real world.`
- Device composition: `201:987`, `1670 × 1239`
- Desktop layers: `201:988–201:996`
- Phone layers: `201:997–201:999`

Export desktop and phone presentations separately at 4×. Recompose them responsively so neither device becomes an unreadable miniature.

### 7. Launch and Handoff

- Range: `y=21881–22329`
- Pillar frames: `201:1002`, `201:1007`, `201:1012`
- Pillar 1: `Launch without the usual assets`
- Pillar 2: `Build the business underneath`
- Pillar 3: `Hand over control`

Descriptions:

1. High-quality imagery became a bridge, designed to be replaced as Sapphire's own project library grew.
2. Responsive WordPress development, lead forms, lender links, FAQ content, license details, and reliable routing.
3. Editing walkthroughs gave Evan a clear way to change wording, replace photos, and keep the site alive after launch.

The Figma does not show a separate numbered capsule for this stage. Do not invent one; treat the three pillars as the continuation of the Beyond the Mockup story.

### 8. Client Proof

- Range: `y=22329–22988`
- Panel: `201:1017`, `1670 × 504`, `20px` radius
- Content group: `201:1018`
- Quote: `201:1020`
- Attribution pill: `201:1021`
- Quote: `“I love the layouts. Especially how you set up the portfolio”`
- Attribution: `Evan Jones / Sapphire Pools`

Use Midnight Black for the panel and Sapphire Gold for the attribution. Preserve the generous empty space and do not over-animate the testimonial.

### 9. The Outcome

- Range: `y=22988–23518`
- Label: `201:1024`, `08 THE OUTCOME`
- Headline: `201:1023`
- Supporting copy: `201:1029`
- CTA frame: `201:1026`
- CTA arrow: `201:1028`
- Headline: `A brand that felt ready before everything else was.`
- Supporting copy: `Sapphire launched with a premium identity, a lead-focused website, an editable WordPress system, and a client confident enough to keep coming back.`
- CTA: `VISIT THE LIVE SITE`

The independently verified live website URL is `https://sapphirepools.com/`.

## High-Resolution Asset Standard

- Download every permanent asset from Figma into `public/works/sapphire/`; never ship temporary Figma URLs.
- Preserve vector logos and marks as SVG whenever available.
- Export hero, device, website, and large mockup imagery at 4× when Figma permits.
- Export smaller supporting media at no less than 2× its maximum rendered dimensions.
- Split tall website composites into logical images to protect sharpness and loading performance.
- Keep transparency for logos and isolated devices. Verify exports visually against light and dark checkerboard backgrounds.
- Use Next.js `Image` with correct intrinsic dimensions, `sizes`, responsive loading, and `quality={100}` only where visual comparison justifies it.
- Use `priority` only for hero-critical media; lazy-load below-the-fold imagery.
- Do not enlarge thumbnails or re-encode already compressed screenshots.

## Responsive Strategy

Validate at `320`, `390`, `768`, `1024`, `1440`, and `1920` pixels.

- Desktop (`1440–1920`): preserve Figma proportions, staggered media, overlaps, and editorial whitespace.
- Laptop (`1024–1439`): scale display type and gutters fluidly while keeping mockup details readable.
- Tablet (`768–1023`): reduce multi-column density, stack facts where needed, and separate overlapping devices.
- Mobile (`320–767`): use a single reading column, full-width media, horizontally safe pills, and ordered narrative content.
- Use `clamp()` through Tailwind arbitrary values for major type and spacing where smooth scaling is more accurate than abrupt breakpoints.
- Never solve responsiveness by uniformly shrinking the 1920px canvas.

## Animation Strategy

Match the polished motion language already used on the home page without distracting from case-study reading.

- Use GSAP ScrollTrigger, already synchronized with Lenis, for section reveals and controlled image parallax.
- Use Framer Motion for local hover, capsule, arrow, and device entrance interactions.
- Reveal headlines by line or masked group; keep body-copy motion subtle.
- Stagger identity applications and page-collage columns as they enter the viewport.
- Use restrained opposing motion for desktop/phone compositions.
- Avoid continuous animation on large screenshots and avoid competing scroll systems.
- Fully respect `prefers-reduced-motion`, showing content immediately with no transform-dependent reading order.

## Accessibility and Performance

- Keep one semantic `h1`; use logical heading levels afterward.
- Provide meaningful alt text for story-bearing images and empty alt text for purely decorative mockups.
- Ensure keyboard focus is visible on the final CTA and all interactive elements.
- Verify Ivory Mist, gold, gray, and white contrast against their actual backgrounds.
- Reserve image aspect ratios to prevent layout shift.
- Avoid one enormous page image, unnecessary client-side state, and eagerly loaded below-the-fold assets.
- Test smooth scroll and motion on low-power mobile devices.

## Recommended Execution Order

1. Acquire and register the exact licensed fonts.
2. Export, name, and verify all hero and Reality assets.
3. Build the route shell, metadata, hero, and Reality section.
4. Export and build The World in smaller identity subsections.
5. Build The First Impression from sliced homepage screens.
6. Build The System and Beyond the Mockup with responsive recomposition.
7. Add launch pillars, Client Proof, Outcome, and the verified live CTA.
8. Add responsive GSAP/Framer motion and reduced-motion fallbacks.
9. Run visual comparison at all target widths.
10. Run lint/build and verify `/works`, Sapphire, ARPM, Spreadshop, and Let's Grub routes.

## Completion Checklist

- [ ] Exact PP Editorial Old, SF Pro, and Messina Sans files are licensed and loaded.
- [x] Sapphire replaces ARPM's featured works position without deleting ARPM.
- [x] Dedicated Sapphire route and components exist.
- [x] All Figma assets are local, high-resolution, and correctly transparent.
- [x] All nine logical sections match the verified node content.
- [x] Tall homepage imagery is sliced or reconstructed, not flattened into one oversized bitmap.
- [ ] Desktop and mobile layouts have been visually compared with Figma.
- [x] Motion matches the site and respects reduced-motion preferences.
- [x] CTA URL has been independently verified.
- [x] Lint and production build pass.
- [x] Existing case-study routes compile successfully.

## Current Status

- The new Figma link is verified.
- The selected project is Sapphire Pools.
- Root node `201:38` and its `1920 × 23,518` layout have been inspected.
- The complete story is mapped into nine logical implementation sections, corresponding to the Figma's numbered stages and supporting panels.
- Exact core colors, key typography values, major imagery nodes, and responsive export requirements are documented.
- Required PP Editorial Old, SF Pro, and Messina Sans font files are not currently in the repository.
- The dedicated Sapphire route and responsive Hero section are implemented.
- The original 3024px Figma photograph has been cropped precisely and optimized into separate hero and works-card WebP assets.
- Sapphire now occupies ARPM's previous featured position on `/works`; the existing ARPM case-study route remains intact.
- The Hero includes responsive layout, optimized Next.js image delivery, entrance motion, and a reduced-motion fallback.
- The Reality and The World sections are implemented with live narrative, metrics, color, and typography content.
- The World uses exact transparent Figma logo vectors and separately optimized 2× brand-application exports.
- The First Impression uses six optimized 2× homepage slices and live conversion principles.
- The System preserves the five-page Figma collage as separately loaded, responsive page exports.
- Beyond the Mockup recomposes independent desktop and phone exports at each breakpoint.
- Launch and Handoff preserves the three restrained content pillars on desktop and stacks them cleanly on mobile.
- Client Proof matches the Midnight Black testimonial panel, Sapphire Gold attribution, and original editorial spacing.
- The Outcome completes the case study with the verified live-site CTA and exact Figma arrow asset.
- Next action: obtain the exact licensed fonts and complete final cross-device visual QA.
