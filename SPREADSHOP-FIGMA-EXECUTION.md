# Spreadshop Case Study: Figma Execution Handoff

## Objective

Build a pixel-accurate, responsive Spreadshop case study for Nymbor at:

`/works/spreadshop`

The implementation must reproduce the supplied Figma design section by section, use the original Figma assets, integrate with the current Next.js project, and remain clean and usable on mobile.

## Source of Truth

- Figma file: `Case - Study - Spreadshop`
- Figma URL: `https://www.figma.com/design/T043Pn2NL3TfsLUOqR5sNs/Case---Study---Spreadshop?node-id=1-14&t=P8eVNM5gyA5vStrX-0`
- File key: `T043Pn2NL3TfsLUOqR5sNs`
- Root node: `1:14`
- Root frame size: `1920 × 21287`
- Root frame name: `Case - Study - Spreadshop`

The Figma frame is the visual source of truth. Do not implement it from this document alone. In the new session, load the `figma-design-to-code` skill and call `get_design_context` for node `1:14` before writing code.

## Important Repository Rules

- Brand name is `Nymbor`.
- The primary Nymbor accent is `#7221FC`.
- Spreadshop keeps its project-specific orange accent, approximately `#FF3D00` and `#FF6935` in the Figma.
- Do not use em dash characters anywhere in website content or code comments.
- Use Next.js Image for raster assets.
- Download and commit all Figma assets locally because MCP asset URLs expire.
- Use GSAP ScrollTrigger for scroll-driven motion.
- Use Framer Motion only for component-level entry and interaction effects.
- Respect `prefers-reduced-motion`.
- Do not paste the absolute-positioned Figma reference code into the project.
- Rebuild the layout with semantic sections, responsive grids, and reusable components.

## Fonts

The Figma uses:

- Helvetica Now Display for primary editorial typography
- DM Mono for labels, metadata, and technical content
- Inter for a small number of status badges

The repository already provides:

- `var(--font-display)` for Helvetica Now Display
- `var(--font-mono)` for JetBrains Mono
- `var(--font-sora)` for body copy

Recommended mapping:

- Figma Helvetica Now Display → `var(--font-display)`
- Figma DM Mono → `var(--font-mono)`
- Figma Inter → existing sans stack unless exact visual comparison proves otherwise

## Desktop Grid

- Canvas width: `1920px`
- Primary page gutter: approximately `119px`
- Main media width: approximately `1670px`
- Intro left metadata begins near `119px`
- Intro narrative begins near `778px`
- Major panels use approximately `10px` corner radius
- Smaller interface previews use approximately `12px` to `20px` corner radius
- Primary editorial body copy is approximately `48px` with `1.5` line height on the desktop frame
- Mono labels are approximately `16px` to `20px`, uppercase, with increased tracking

Use fluid containers with a desktop maximum instead of fixed pixel positioning. At 1920px viewport width, the result should align closely with these measurements.

## Complete Section Order

### 1. Hero

- Figma node: `1:25`
- Position: `y=0`
- Size: `1920 × 1258`
- Full-width Spreadshop hero composition
- Must use the exact exported Figma hero asset
- Preserve the image crop and bottom alignment

### 2. Project Introduction

- Begins around `y=1421`
- Left metadata:
  - Case Study
  - Spreadshop Redesign
  - 2024
- Main content node: `1:33`
- Label node: `1:34`
- Main description node: `1:36`
- Copy describes a ground-up creator storefront redesign focused on discoverability, trust, and conversion
- Highlight `Spreadshop's` in project orange

### 3. Projected Metrics

- Container node: `1:49`
- Position: around `y=1881`
- Metrics:
  - `+23%` Conversion Rate
  - `-12%` Bounce Rate
  - `3.1s` LCP, previously 4.2s
- Every metric must retain the label `projected`
- Orange values, mono labels, vertical separators

### 4. Opening Interface Pair

- Container node: `1:64`
- Final image nodes: `1:305` and `1:306`
- Position: around `y=2247`
- Two equal-width screenshots with approximately `28px` gap
- Use exact Figma exports and crops

### 5. Role, Challenge, Goal

- Position: around `y=2982`
- Role: node `1:69`
- Challenge: node `1:74`
- Goal: node `1:79`
- Three-column desktop layout with vertical rules
- Stack cleanly on mobile
- Correct the role sentence punctuation during implementation without adding an em dash

### 6. Design Process

- Background panel node: `1:15`
- Panel position: `y=3301`
- Panel size: `1863 × 826`
- Heading node: `1:45`
- Stages:
  - Discovery
    - Analysis, node `1:84`
    - Research, node `1:89`
  - Strategy
    - User experience, node `1:94`
    - User interface, node `1:99`
  - Solutions
    - Web design, node `1:104`
    - Development, node `1:109`
- Desktop uses a horizontal process map with vertical guide lines
- Mobile must become a vertical timeline or three stacked stage groups

### 7. Competitor Analysis Introduction

- Position: around `y=4355`
- Section label node: `1:27`
- Content node: `1:37`
- Highlight the pre-redesign Spreadshop phrase in project orange

### 8. Competitor Comparison

- Main table node: `1:114`
- Position: around `y=4847`
- Size: approximately `1670 × 560`
- Competitors:
  - Spreadshop before redesign
  - Fourthwall
  - Spring
  - Bonfire
- Dimensions:
  - Onboarding flow
  - Product discoverability
  - Mobile experience
  - Trust signals
  - Checkout speed
- Desktop should reproduce the table
- Recommended mobile treatment: competitor cards rather than shrinking the table
- Preserve status distinctions: Weak, Partial, Strong

### 9. User Research Introduction

- Position: around `y=5702`
- Section label node: `1:28`
- Content node: `1:41`
- Evidence:
  - 240 session recordings
  - Tree testing with 80 participants
- Copy explains that the redesigned funnel follows the user's mental model

### 10. Journey Before and After

- Before panel node: `1:219`
- After panel node: `1:220`
- Position: around `y=6194`
- Before panel uses light gray
- After panel uses Spreadshop orange
- Journey pairs:
  - Land on site → Land on site
  - Four CTAs compete → Single CTA in view
  - Navigate product grid → Browse editorial grid
  - Search for reviews → Trust signals in hero
  - Reach checkout → Express checkout
  - Abandon → Convert
- Mobile should stack each before and after journey while preserving comparison clarity

### 11. Laptop Presentation

- Main frame: `1:285`
- Position: around `y=7111`
- Size: approximately `1670 × 1239`
- Contains laptop/device composition and dashboard image
- Use exact original exported assets, not a hand-built mockup

### 12. Mobile Interface Gallery

- Position: approximately `y=8423` through `y=10646`
- Six device frames:
  - `1:249`
  - `7:33`
  - `7:40`
  - `7:47`
  - `7:54`
  - `7:73`
- Three columns and two rows on desktop
- Use exact mobile screenshots and crop positions
- Recommended responsive behavior:
  - Two columns on tablet
  - One or two columns on mobile depending on final visual test
  - Avoid tiny unreadable phone mockups

### 13. Before vs After Introduction

- Section label node: `10:225`
- Content node: `10:226`
- Position: around `y=10838`
- Includes orange Visit Site button
- Statement: the redesign changes how the page works, not just how it looks
- Confirm the actual destination before enabling the external Visit Site link

### 14. Focused Before and After Comparison

- Before frame: `10:230`
- After frame: `10:231`
- Position: around `y=11181`
- Before findings node: `10:233`
- After findings node: `10:232`
- Before:
  - Competing messages
  - Inconsistent visual styles
  - Benefits explained late
  - Longer path to clarity
  - CTA lost between sections
- After:
  - One clear promise
  - Consistent hierarchy and actions
  - Risk and value explained early
  - Proof placed near decisions
  - CTA visible throughout the journey

### 15. Full Home Page Design

- Background panel node: `7:111`
- Heading node: `7:118`
- Main presentation node: `10:148`
- Position: approximately `y=12734` through `y=18428`
- Shows a long mobile page beside a long desktop page
- Preserve the original screenshots at high quality
- Avoid forcing both columns side by side on phones
- Mobile should present them sequentially with clear labels

### 16. Decorative Transition

- Frame node: `10:137`
- Position: approximately `y=16952`
- Contains large elliptical line artwork
- Use the exported SVG if it materially matches the design
- Decorative only, so it must be hidden from assistive technology

### 17. Final Verdict

- Section label node: `10:152`
- Content node: `10:153`
- Position: around `y=18609`
- Quote needs corrected punctuation
- Do not use an em dash when editing it

Suggested corrected copy:

`The most effective redesigns do not add more. They subtract everything that stands between the user and their intent.`

### 18. Supporting Page Gallery

- Position: around `y=19075`
- Four staggered full-page captures:
  - Create Merch: node `7:116`
  - Help Center: node `7:117`
  - Free Merch Shop: node `7:115`
  - Products: node `7:114`
- Desktop uses four narrow staggered columns
- Mobile should use one column or a controlled two-column masonry layout
- Preserve natural aspect ratios

## Asset Inventory Seen Through MCP

The root design context exposed approximately:

- 20 raster assets
- Hero artwork
- Two opening interface screenshots
- Six mobile interface screenshots
- Laptop and screen mockup assets
- Full desktop and mobile homepage captures
- Focused before and after captures
- Four supporting page captures
- Decorative SVG line and ellipse assets
- Arrow and status icons

Do not save the temporary MCP URLs in this document. They expire. Re-fetch assets at the start of implementation.

## Asset Download Workflow

In the new session:

1. Load the `figma-design-to-code` skill.
2. Call `get_design_context` for file `T043Pn2NL3TfsLUOqR5sNs`, node `1:14`.
3. Call `figma_download_assets` for node `1:14`.
4. Save assets under a dedicated directory such as:
   - `public/works/spreadshop/`
5. Give files semantic names rather than keeping Figma-generated IDs.
6. Preserve original formats when practical.
7. Convert large PNG screenshots to lossless or visually equivalent WebP only after comparing quality.
8. Record the mapping between Figma node IDs and local filenames in this document or a colocated asset manifest.
9. Never depend on temporary `figma.com/api/mcp/asset/...` URLs in committed code.

## Recommended Code Structure

Follow the repository's active project-detail architecture after inspecting it in the new session. A likely structure is:

```text
components/works/spreadshop/
  spreadshop-case-study.jsx
  spreadshop-hero.jsx
  project-intro.jsx
  process-map.jsx
  competitor-analysis.jsx
  journey-comparison.jsx
  mobile-gallery.jsx
  before-after.jsx
  homepage-showcase.jsx
  final-gallery.jsx
```

Reuse existing work-detail components only when they match the Figma closely. Do not force this case study into a generic component if doing so reduces visual accuracy.

## Suggested Implementation Sequence

Implement and visually verify one phase at a time.

### Phase 1: Data and Assets

- Add Spreadshop to project data
- Create `/works/spreadshop`
- Download every required Figma asset
- Verify asset dimensions and quality
- Add a temporary plain page that renders each asset for inspection

### Phase 2: Hero and Introduction

- Hero
- Project metadata
- About text
- Projected metrics
- Opening image pair
- Role, challenge, goal
- Compare at 1920px before continuing

### Phase 3: Research Narrative

- Design process map
- Competitor introduction
- Competitor table
- User research introduction
- Journey comparison
- Verify desktop and mobile independently

### Phase 4: Interface Presentation

- Laptop presentation
- Six-screen mobile gallery
- Before and after introduction
- Focused before and after comparison

### Phase 5: Long-form Screens and Ending

- Full homepage design section
- Decorative transition
- Final verdict
- Supporting page gallery

### Phase 6: Motion and Polish

- Add restrained reveal animations
- Add subtle parallax only where it does not distort screenshots
- Add reduced-motion fallbacks
- Optimize image loading and sizes
- Verify keyboard and screen-reader behavior

## Responsive Strategy

No dedicated mobile frame was provided. Mobile behavior must be designed without changing the content order.

- Use a single-column narrative layout below `768px`
- Reduce large 48px desktop paragraphs to approximately 28px to 34px on mobile
- Keep mono labels around 11px to 13px on mobile
- Convert the process map to a vertical timeline
- Convert the competitor table to readable cards
- Stack journey panels vertically
- Do not shrink phone mockups until their interfaces become unreadable
- Present the long mobile and desktop homepages sequentially
- Preserve image aspect ratios
- Avoid horizontal page overflow
- Keep mobile section spacing compact but editorial

## Motion Direction

- Hero: subtle scale settle or masked reveal
- Editorial copy: short upward fade
- Metrics: staggered entry
- Process map: progressive line reveal
- Tables and comparison cards: light stagger
- Device mockups: subtle vertical stagger
- Long screenshots: no aggressive parallax
- Final gallery: mild stagger based on column position
- Respect reduced motion throughout

## Content Integrity

- Preserve `projected` on all forecast metrics
- Do not claim the redesign is live unless confirmed
- Do not invent measured results
- Keep research sample sizes exactly as shown unless the user provides corrections
- Correct grammatical issues without changing meaning
- Use no em dash characters
- Use Nymbor branding for the surrounding website chrome
- Keep Spreadshop orange within the case study

## Pixel Accuracy Checklist

At each phase, compare the implementation against a fresh Figma screenshot at:

- 1920px desktop
- 1440px desktop
- 1024px tablet
- 768px tablet
- 390px mobile
- 320px mobile

Check:

- Section start positions and vertical rhythm
- Container widths and gutters
- Font family, size, weight, line height, and tracking
- Orange and gray color values
- Image crop and focal point
- Border radius
- Divider thickness and opacity
- Grid gaps
- Label sizing
- No layout shift
- No horizontal overflow
- No blurry screenshots

## Technical Verification

Before completion:

```bash
npm run lint
npm run build
```

Also verify:

- All assets are local and committed
- No temporary Figma URLs remain in code
- No old Nymbor predecessor name appears
- No em dash characters appear
- Images have meaningful alt text or empty alt text when decorative
- The page works with reduced motion
- The project card links to `/works/spreadshop`
- Metadata uses `Spreadshop | Nymbor`

## New Session Starting Prompt

Use this message in the new session:

`Read SPREADSHOP-FIGMA-EXECUTION.md completely. Then load the figma-design-to-code skill and inspect Figma file T043Pn2NL3TfsLUOqR5sNs, node 1:14. Begin only with Phase 1 and Phase 2. Download the original Figma assets locally and implement the Spreadshop hero and introduction pixel accurately. Do not continue to later sections until the first phase is visually verified.`

## Current Status

- Complete root Figma context inspected
- Complete root metadata inspected
- Overall desktop layout and section order documented
- No Spreadshop implementation has been started
- No Figma assets have been committed yet
- The next session should begin with fresh MCP asset retrieval
