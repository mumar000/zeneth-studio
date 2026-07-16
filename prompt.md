# Continuation Prompt

We are working in `/home/mumar000/zs/zeneth-studio`.

## Service Page Structure

Keep the dynamic route:

- `app/services/[slug]/page.jsx`

That dynamic route should delegate to the correct parent page component:

- `components/services/brand-identity/brand-identity-page.jsx`
- `components/services/interface-design/interface-design-page.jsx`
- `components/services/web-development/web-development-page.jsx`

Each service must keep its own sections inside its own folder:

- `components/services/brand-identity/`
- `components/services/interface-design/`
- `components/services/web-development/`

Shared components should only be truly common pieces:

- `components/services/common/service-hero.jsx`
- `components/services/common/section-intro.jsx`
- `components/services/common/service-tail.jsx`

Do not put all service sections into one giant shared component. Do not mix Brand Identity sections into Interface Design or Web Development.

## Figma MCP Usage

Use Figma MCP to inspect and implement the Web Development page exactly from Figma.

Figma URL:

`https://www.figma.com/proto/Sf0mUIW047ICl6dYkI9rXP/Zeneth-studio--Copy-?node-id=2187-702&t=o61Lkm3aCILC3R1k-0&scaling=min-zoom&content-scaling=fixed&page-id=2001%3A639`

Use:

- `fileKey`: `Sf0mUIW047ICl6dYkI9rXP`
- `nodeId`: `2187:702`

Call `get_design_context` first. Also use screenshots from MCP if needed to check spacing, images, and section order.

Important: use the Figma assets/images returned by MCP whenever possible. If images are returned as asset URLs, download or wire them into the project properly, preferably into `public/` with clear filenames. The Web Development page should visually match the Figma design as closely as possible: spacing, typography, colors, cards, image crops, and section order.

## Implementation Target

Continue implementing the Web Development service page under:

- `components/services/web-development/web-development-page.jsx`
- `components/services/web-development/sections.jsx` or separate section files if cleaner

Reuse the common hero/tail only where appropriate. Build service-specific sections inside the Web Development folder.

After edits, run:

```bash
npm run build
```
