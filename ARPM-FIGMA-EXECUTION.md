# ARPM Case Study: Figma Execution Handoff

## Objective

Create a dedicated, pixel-accurate, responsive case study for Associated Realty Property Management (ARPM) using the supplied Figma frame.

The completed Spreadshop and Let’s Grub case studies are not part of this implementation and must remain unchanged. This document replaces the completed Let’s Grub execution handoff as the active case-study plan.

## Figma Access Status

The supplied link works and the requested node is accessible.

- Figma file name: `Case - Study - Spreadshop`
- Important: the file name still says Spreadshop, but node `48:357` is the complete ARPM case study
- Project: Associated Realty Property Management
- Figma URL: `https://www.figma.com/design/T043Pn2NL3TfsLUOqR5sNs/Case---Study---Spreadshop?node-id=48-357`
- File key: `T043Pn2NL3TfsLUOqR5sNs`
- Root node: `48:357`
- Root frame name: `ARPM CASE STUDIES`
- Root frame size: `1920 × 18,928`

The root design context, metadata, hero, and project-overview frames have been verified. Because the root is very large, Figma returns sparse metadata for the full frame. Before implementing each section, call `get_design_context` for its exact top-level node and inspect its screenshot.

## Confirmed Project Story

ARPM had already spent two years attempting a redesign with two development teams. The challenge was not simply visual: the new website had to preserve more than 360 legacy properties, multiple generations of floorplan data, applications, PayPal payments, CSV exports, galleries, amenities, availability, and operational workflows.

The case study presents the successful third attempt: a redesigned WordPress/Houzez experience, a custom legacy-data bridge, renter-focused search, shortcode parsing, a safer launch strategy, and the final business outcomes.

## Repository Plan

No ARPM project entry or dedicated ARPM asset directory currently exists in the repository.

When implementation begins:

1. Add an ARPM project entry to `lib/projects-data.js` so it appears on `/works`.
2. Use the slug `arpm` unless the stakeholder requests a longer slug.
3. Exclude `arpm` from the generic route’s static parameters if a dedicated route conflicts with `app/works/[slug]/page.jsx`.
4. Create `app/works/arpm/page.jsx`.
5. Create dedicated components in `components/works/arpm/`.
6. Store all permanent Figma exports in `public/works/arpm/`, grouped by section.
7. Keep `/works/lets-grub`, `/works/spreadshop`, their components, and their assets unchanged.

## Implementation Rules

- Use semantic React components and Tailwind CSS utilities rather than copying Figma’s absolute-positioned reference code.
- Match the 1920px desktop canvas precisely, then reflow intentionally for tablet and mobile.
- Use Next.js `Image` for raster imagery and locally stored original SVGs for vector artwork.
- Download all Figma assets locally before their temporary URLs expire.
- Prefer original image data or 4× exports for prominent mockups and screenshots; use at least 2× at maximum rendered size elsewhere.
- Never enlarge old website thumbnails as final artwork.
- Use GSAP ScrollTrigger for scroll-driven sequences already synchronized with Lenis.
- Use Framer Motion for focused entrances, hover motion, or floating details.
- Respect `prefers-reduced-motion` throughout.
- Preserve the site-wide Nymbor navbar and footer unless a comparison shows a section-specific spacing adjustment is required.
- Do not invent metrics, quotes, dates, or business claims beyond the Figma content.

## Verified Visual System

### Primary colors

| Purpose | Value |
| --- | --- |
| ARPM maroon | `#870B2D` |
| Hero gradient start | `#F6F4EF` |
| Hero gradient end | `#FFB3C8` |
| Primary dark text | `#1E1E1E` |
| Light text and surfaces | `#FFFFFF` |

Some later panels use light neutral, pink, maroon, and white combinations. Sample each section node directly instead of assuming one global background.

### Typography

The verified opening frames use:

- **Helvetica Now Display Medium** for the hero statement and oversized display typography.
- **Helvetica Now Display Regular** for project labels, editorial copy, facts, section numbering, and most headings.
- **Helvetica Neue Regular** for the compact hero capsule label.

Verified hero typography:

- Capsule: `16px`, uppercase, `-0.32px` tracking.
- Main statement: `48px`, `1.2` line-height, centered, uppercase.
- Oversized background wordmark: approximately `367.377px`, white, uppercase, tightly tracked.

Verified project-overview typography:

- Small label: `20px`, uppercase, `1px` tracking.
- About-project body: `36px`, `1.5` line-height.
- Fact labels: `14px`, uppercase, muted white.
- Fact values: `24px`, `1.2` line-height, uppercase.

Use the existing local Helvetica Now Display and Helvetica Neue files. Match each Figma weight explicitly and avoid synthetic bolding.

## Desktop Layout System

- Reference width: `1920px`.
- Full case-study height: `18,928px`.
- Hero: `1920 × 1080`.
- Most narrative sections span the full canvas width with content in centered editorial columns.
- Frequent content anchors appear around `x=159px`, `x=778px`, `x=1050px`, and `x=1102px`.
- Large website and device mockups must retain their exact crops and intentional overlaps.
- Mobile layouts should stack editorial columns, preserve reading order, and keep screenshots large enough for interface text to remain readable.

## Complete Section Order

### 1. Hero — The Third Team In

- Top-level frame: `166:31`
- Position: `y=0`
- Visual section height: `1080px`
- Main image node: `63:31`
- Background node: `63:34`
- Capsule node: `52:702`
- Statement node: `52:369`
- Oversized background type node: `67:41`
- Copy: `The third team in. The first to get it live.`
- Warm neutral-to-pink vertical gradient.
- Centered ARPM capsule and statement above a large iPad/hand mockup.
- Huge white ARPM lettering is cropped behind the device at the bottom.
- Export the iPad/hand composite at 4× where possible and preserve the exact crop.

### 2. Project Overview

- Top-level frame: `166:32`
- Position: `y=1080`
- Size: `1920 × 736`
- Maroon background: `#870B2D`.
- Includes subtle architectural house-line artwork at very low opacity.
- Left column: case-study label and project name.
- Right column: project summary and facts.
- Facts: Design & development, WordPress / Houzez, $7.5K engagement, June 2026.
- The architectural line image must be exported from Figma rather than approximated.

### 3. Executive-Approved Direction

- Top-level frame: `166:63`
- Position: `y=1817`
- Size: `1920 × 675`
- Main inner presentation: `166:33`
- Heading: `Executive approved direction`.
- Displays a long horizontal presentation of approved ARPM website screens.
- Export the composed screen direction at high resolution; interface details must remain legible.

### 4. The Brief Beneath the Brief

- Top-level frame: `166:64`
- Position: `y=2493`
- Size: `1920 × 1573`
- Main narrative: `Not a redesign. A rescue mission.`
- Includes the client quote explaining that two previous development teams failed.
- Preserve the editorial balance between section number `01`, large headline, quote, attribution, and supporting media.

### 5. The Operational Reality

- Top-level frame: `166:65`
- Position: `y=4066`
- Size: `1920 × 1395`
- Explains the living operational system behind the dated interface.
- Key figures:
  - `360+` legacy properties
  - `2` failed teams before us
  - `80%` mobile traffic
- Supporting copy covers PayPal fees, CSV exports, galleries, amenities, floorplans, and availability.
- Build metrics as live type, never flatten them into a screenshot.

### 6. Design Direction — Modern Without Abandoning 1978

- Top-level frame: `166:66`
- Position: `y=5461`
- Size: `1920 × 1027`
- Headline: `A modern leasing experience, without abandoning 1978.`
- Three principles:
  1. Intent after inventory
  2. Availability at a glance
  3. Real content for real approval
- Maroon remains the anchor while the interface becomes quieter, faster to scan, and mobile-friendly.
- Keep numbered principles and their explanations as responsive live content.

### 7. Client Reaction

- Top-level frame: `166:67`
- Position: `y=6488`
- Size: `1923 × 1789`
- Label: `CLIENT REACTION`.
- Quote: `“That’s beautiful and clean. Truly what we hoped you might come up with. Amazing.”`
- Large approved-design imagery dominates the section.
- Use the exact Figma exports at high resolution and retain the deliberate device/screen spacing.

### 8. Three Data Worlds, One Honest Interface

- Top-level frame: `166:68`
- Position: `y=8269`
- Size: `1920 × 1070`
- Headline: `Three data worlds. One honest interface.`
- Inputs:
  - Legacy shortcodes
  - ACF property data
  - Houzez fields
- Bridge: `Custom Bridge`.
- Output: `One searchable property model`.
- Render the system relationship as structured HTML/CSS and use exact Figma vectors for connectors or decorative graphics.
- On mobile, convert the horizontal system into a clear vertical sequence.

### 9. Search as Product

- Top-level frame: `166:39`
- Position: `y=9339`
- Size: `1920 × 1662`
- Section label: `04 / SEARCH AS PRODUCT`.
- Headline: `Find the right home. Not the right database field.`
- Includes two large rental-search interface examples.
- Supporting ideas:
  - Intent and filters work together.
  - Bedroom ranges replace misleading first values.
- Business-results quote: `“We truly believe that we have the best web search in state College compared to our competitors.”`
- Export search screenshots at 4× when possible because their UI text is essential.

### 10. The Miracle — Legacy Floorplan Parser

- Top-level frame: `166:69`
- Position: `y=11001`
- Size: `1920 × 1388`
- Section label: `05 / THE MIRACLE`.
- Headline: `Hundreds of floorplans. Zero full rewrite.`
- Large property-detail interface mockup with three annotations:
  - Attached galleries recovered automatically
  - Legacy tabs parsed into clean floorplan controls
  - Existing application and payment flow preserved
- Preserve callout positions on desktop and convert them into an ordered annotation list on mobile.

### 11. Getting It Live

- Top-level frame: `166:70`
- Position: `y=12389`
- Size: `1920 × 1143`
- Section label: `06 / GETTING IT LIVE`.
- Headline: `The glamorous part: knowing what not to do.`
- Five-stage sequence:
  1. Design approved — Real Content in Figma
  2. Legacy bridge — Old and new data aligned
  3. Plugin migration — Size wall and failed unpack
  4. Host-native push — Dev mirrored to production
  5. ARPM.COM — Polished Through July
- Use exact Figma/WordPress marks from exported assets.
- Desktop shows a five-card row; mobile becomes a readable vertical timeline or stacked card grid.

### 12. The Outcome — Confidence Restored

- Top-level frame: `166:71`
- Position: `y=13518`
- Size: `1920 × 3392`
- Section label: `07 / THE OUTCOME`.
- Headline: `Confidence, restored.`
- Verified outcomes:
  - 360+ properties preserved
  - Multi-floorplan search working
  - Applications and PayPal uninterrupted
  - Mobile leasing experience modernized
  - Two failed attempts finally closed
- Contains six tall mobile interface mockups arranged as an extended editorial gallery.
- Export every phone/mockup independently at 4× or at least 2× its rendered size.
- Maintain the staggered desktop composition; use a clean single-column or controlled two-column layout on smaller screens.

### 13. Outcome Testimonial

- Top-level frame: `166:43`
- Position: `y=16910`
- Size: `1920 × 1369`
- Quote: `“Our company president is also thrilled with how the site turned out.”`
- Attribution: `Christopher and Kaitlyn, ARPM project team`.
- Large desktop and mobile mockups overlap in the lower-right area.
- Export the mockups separately to preserve sharpness and responsive control.

### 14. Closing Credits and Live-Site CTA

- Top-level frame: `166:72`
- Position: `y=18279`
- Size: `1920 × 649`
- Credit: `Designed and developed by Asad Rizvi`.
- Project capsule: `Associated Realty Property Management`.
- Closing statement: `The website was the visible change. The finish was the real transformation.`
- CTA: `VISIT LIVE WEBSITE` with arrow.
- Keep the closing section editorial and restrained, with a working external link once the live URL is confirmed from project data or Figma annotations.

## High-Resolution Asset Standard

For every visual asset:

1. Call `get_design_context` on the exact section node.
2. Use `download_assets` for original images, SVGs, and high-resolution renders.
3. Prefer SVG for logos, arrows, diagrams, connectors, and architectural outlines.
4. Export hero, website screens, property-search screens, and device mockups at 4× where source quality permits.
5. Use 2× only when the resulting dimensions still exceed the maximum rendered size.
6. Store permanent files under `public/works/arpm/[section]/`.
7. Inspect every export for accidental Figma canvas backgrounds, clipping, or low-resolution source fills.
8. Preserve precise object-position and cropping per the section screenshot.

## Responsive Strategy

- Desktop at `1920px` is the pixel-accuracy reference.
- Tablet should preserve two-column editorial layouts where content remains readable.
- Mobile must stack narrative content before supporting media.
- Interface screenshots must not be compressed until UI text becomes unreadable.
- Horizontal diagrams and timelines should become vertical sequences.
- Overlapping device compositions should become controlled stacks without clipping.
- Test at `320px`, `390px`, `768px`, `1024px`, `1440px`, and `1920px`.

## Animation Strategy

- Hero device: subtle entrance with a small scale settle.
- Oversized hero lettering: gentle reveal behind the device.
- Editorial headings and body copy: staggered ScrollTrigger reveals.
- Metrics: restrained count/reveal sequence.
- Website and phone mockups: masked upward reveal with minor parallax only on capable devices.
- Data bridge: sequential connection animation showing inputs, bridge, and output.
- Launch stages: progressive card reveal from step 01 through 05.
- Outcome phones: staggered reveals that preserve the Figma composition.
- CTA: use the same interaction language as existing Nymbor buttons.
- Disable continuous or large motion under `prefers-reduced-motion`.

## Execution Order

1. Add the ARPM Works listing entry and dedicated route shell.
2. Implement the hero and project overview.
3. Implement executive-approved direction and rescue-mission narrative.
4. Implement operational reality and design principles.
5. Implement client reaction and legacy-data bridge.
6. Implement search and floorplan-parser sections.
7. Implement the launch sequence.
8. Implement outcomes and device gallery.
9. Implement testimonial and closing CTA.
10. Complete responsive, animation, accessibility, and production verification.

## Completion Checklist

- All 14 top-level sections match their exact Figma nodes.
- Typography family, face, size, line-height, tracking, and casing match at 1920px.
- All prominent images are original-resolution or high-resolution Figma exports.
- No temporary Figma asset URL remains in committed code.
- The ARPM card is visible on `/works` and links to the dedicated case study.
- Existing Spreadshop and Let’s Grub pages remain unchanged.
- Layout works without horizontal overflow at 320px.
- All animation respects reduced-motion preferences.
- Semantic heading order and meaningful alt text are present.
- `npm run lint` and `npm run build` pass.

## Current Status

- Figma link verified.
- Project identified as Associated Realty Property Management (ARPM).
- Root frame and all 14 top-level sections mapped.
- Hero and project-overview design contexts inspected.
- Existing repository checked; no ARPM entry or route currently exists.
- Let’s Grub execution handoff replaced by this ARPM handoff.
- No ARPM implementation code has been created yet.
- Phase 1 complete: the Works listing entry, dedicated `/works/arpm` route, and responsive Figma-matched hero are implemented with the exact 4× device mockup.
- Phase 2 complete: Project Overview (`166:32`) and Executive-Approved Direction (`166:63`) are implemented with exact Figma copy, responsive editorial layouts, reduced-motion-safe reveals, the architectural background export, and 4× presentation assets.
- Phase 3 complete: The Brief Beneath the Brief (`166:64`), The Operational Reality (`166:65`), and Design Direction (`166:66`) are implemented with live editorial typography, responsive metric and principle layouts, restrained animation, and dedicated 4× Figma exports.
- Phase 4 complete: Client Reaction (`166:67`), Three Data Worlds (`166:68`), and Search as Product (`166:39`) are implemented with a high-resolution mobile mockup, live responsive bridge content using exact Figma connector vectors, and two 4× search-interface exports.
- Phase 5 complete: The Miracle (`166:69`) and Getting It Live (`166:70`) are implemented with high-resolution Figma exports, responsive editorial layouts, launch-stage cards, and reduced-motion-safe reveals.
- Phase 6 complete: The Outcome (`166:71`) and Outcome Testimonial (`166:43`) are implemented with independently exported 4× device mockups, staggered editorial positioning, responsive stacks, and reduced-motion-safe reveals.
- Phase 7 complete: Closing Credits and Live-Site CTA (`166:72`) are implemented with the exact editorial hierarchy, responsive layout, motion-safe reveal, exported arrow asset, and working ARPM website link.
- Final action: run cross-device visual QA and deployment verification.
