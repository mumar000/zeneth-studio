# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs at http://localhost:3000

---

## Project Architecture

### Stack

- **Next.js 16** with App Router
- **React 19** (client-side rendered with "use client")
- **Tailwind CSS 4** for styling
- **Animation libraries**: Lenis (smooth scroll), GSAP (ScrollTrigger), Framer Motion
- **Icons**: Lucide React
- **Other**: react-fast-marquee

### Key Architectural Patterns

#### 1. Page-Based Component Organization

Components are organized by page, not in a shared sections folder:

- **Home page components** → `components/home/` (e.g., hero.jsx, gif-section.jsx, brand-identity.jsx, how-we-works.jsx)
- **Other pages** → `components/[page-name]/` (each page gets its own component folder)
- **Common components** → `app/components/common/` (navbar, footer)
- **Note**: `app/sections/` contains older/alternative implementations—prefer `components/[page-name]/` pattern

#### 2. Smooth Scroll Integration

- **SmoothScroll wrapper** (`app/components/SmoothScroll.jsx`) wraps the entire app in `layout.jsx`
- Uses **Lenis** for smooth scrolling with custom easing
- Integrates **GSAP ScrollTrigger** for scroll-based animations
- All scroll animations should use ScrollTrigger via this setup

#### 3. Client-Side Rendering Pattern

- Main page is client-side ("use client" directive)
- Uses React hooks (useState) for loading states
- Loader component shows before content renders

#### 4. Layout Structure

```
RootLayout (layout.jsx)
  └── SmoothScroll
      ├── Navbar
      ├── {children} (page content)
      └── Footer
```

### Directory Structure

```
app/
  components/
    common/          # Shared UI (navbar, footer)
    loader.jsx
    SmoothScroll.jsx
  sections/          # (Legacy/alternative - prefer components/[page]/)
  layout.jsx         # Root layout with metadata
  page.jsx           # Main landing page
  globals.css

components/
  home/              # Home page components (hero, gif-section, brand-identity, etc.)
  [page-name]/       # Each page gets its own component folder
```

---

## Development Guidelines

### Adding New Sections/Components

1. Create component in `components/home/` for home page sections (e.g., `components/home/new-section.jsx`)
2. For other pages, create `components/[page-name]/[component].jsx`
3. Import and add to the appropriate page file (e.g., `app/page.jsx` for home)
4. Use client-side hooks if needed (main page is already "use client")
5. Leverage GSAP ScrollTrigger for scroll animations (already registered globally)

### Animation Guidelines

- **Smooth scroll** is handled globally by Lenis—don't add competing scroll libraries
- Use **GSAP ScrollTrigger** for scroll-based animations (synced with Lenis via `SmoothScroll.jsx`)
- Use **Framer Motion** for component-level animations (hover, click, enter/exit)
- Respect `prefers-reduced-motion` for accessibility

### Styling

- Use Tailwind utility classes
- Custom font weights: `font-[400]`, `font-[600]` are used throughout
- Responsive breakpoints: follow Tailwind's responsive design patterns

### Performance Targets (from playbook)

- **LCP** under 2.0s
- **INP** under 200ms
- **CLS** under 0.1
- Lighthouse scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+

---

## Content Management

Some section content is defined inline (e.g., `brandIdentitySections` array in `page.jsx`). When editing:

- Look for content arrays/objects in the page component
- Keep copy concise and conversion-focused
- Update both title and description consistently

---

## Common Patterns

### Commented-out Sections & Legacy Code

- Some sections in `page.jsx` are commented out (e.g., `HeroSection`, `IntroProjectsSection` from `app/sections/`)
- The `app/sections/` folder contains older/alternative implementations
- Active components are in `components/home/` (hero.jsx, gif-section.jsx, brand-identity.jsx, how-we-works.jsx, etc.)
- Check with stakeholder before removing legacy code permanently

### Image Optimization

- Use Next.js Image component for images
- Prefer `.webp` format (already in use: `/services1.webp`, etc.)
- Images stored in `public/` directory

---

## Premium Landing Page Principles

This is a **conversion-focused landing page** for Zenith Studio. Key principles:

### Performance First

- Static generation where possible
- Dynamic imports for heavy components not above-the-fold
- Compress images aggressively (AVIF/WebP)
- Limit animation libraries (already using 3: be cautious adding more)

### Conversion Focus

- Every section has a clear purpose
- Primary CTA should be prominent
- Forms should be minimal and validated
- Track key events (CTA clicks, form submits, scroll depth)

### SEO Fundamentals

- Metadata defined in `layout.jsx` (title, description)
- Use one H1 per page
- Add OpenGraph and Twitter card metadata as needed
- Ensure proper semantic HTML

### Accessibility

- Keyboard navigation must work
- Visible focus states
- Meaningful alt text for images
- Color contrast compliance
- **Respect `prefers-reduced-motion`** (critical with heavy animation stack)

### Security & Reliability

- Sanitize user input on server
- Rate limit form endpoints
- No secrets in client components
- Use environment variables (`.env.local`)

---

## Testing Before Deploy

### Functional Checklist

- All CTAs work on desktop Chrome, iPhone Safari, Android Chrome
- No console errors
- Form submissions work end-to-end
- Smooth scroll works on all devices

### Performance Checklist

- Run `npm run build` and check bundle size
- Run Lighthouse on production build (mobile throttling)
- Test on real low-end Android device if possible
- Verify no layout shift (CLS under 0.1)

### Responsive Checklist

- Test at 320px width (mobile)
- Test at tablet breakpoints
- Test on large desktop (no broken layouts)

---

## Notes

- No test runner currently configured
- Deployment: Recommended via Vercel
- Main branch: `main`
