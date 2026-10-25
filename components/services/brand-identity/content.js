import { servicesDetailData } from "@/lib/services-detail-data";
import { serviceSeoData } from "@/lib/service-seo-data";
import { testimonials } from "@/lib/testimonials";

export const price = servicesDetailData["brand-identity"].startingPrice;
export const { faqs } = serviceSeoData["brand-identity"];
export const byId = Object.fromEntries(testimonials.map((t) => [t.id, t]));

export const display = { fontFamily: "var(--font-display)" };
export const eyebrow =
  "font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary";
export const h2 =
  "text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:text-[clamp(34px,4.6vw,56px)] md:leading-none";
export const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";
export const primaryButton = `group inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] border-2 border-black bg-primary px-7 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-[translate,box-shadow,background-color,color] duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm`;

/* ---------- content ---------- */

export const headline = [
  { text: "We design your brand.", accent: false },
  { text: "And teach AI to use it.", accent: true },
];

export const logos = [
  { name: "Féroce", w: 156, h: 23 },
  { name: "Trion", w: 95, h: 30 },
  { name: "Resight", w: 133, h: 34 },
  { name: "Flight Frame", w: 154, h: 40 },
  { name: "Fractal", w: 109, h: 34 },
  { name: "The Nugget Spot", w: 98, h: 40 },
  { name: "Renu", w: 89, h: 28 },
  { name: "Fresh Picks", w: 129, h: 30 },
].map((logo, i) => ({ ...logo, src: `/home-logo/home-logo${i + 1}.png` }));

export const work = [
  {
    title: "Let's Grub",
    tags: "Logo · Mascot · Guidelines",
    href: "/works/lets-grub",
    image: "/works/lets-grub/hero/hero-4x.png",
    alt: "Let's Grub brand identity",
    wide: true,
  },
  {
    title: "Féroce",
    tags: "Brand identity · Art direction",
    href: "/works/feroce",
    video: "/feroce/feroce-video.mp4",
    poster: "/feroce/branding-feroce-page-0001-1.webp",
    alt: "Féroce brand identity in motion",
  },
  {
    title: "Sapphire Pools",
    tags: "Brand identity · Applications",
    href: "/works/sapphire",
    image: "/works/sapphire/hero/project-card.webp",
    alt: "Sapphire Pools brand identity",
  },
  {
    title: "Mogul Bay",
    tags: "Brand identity · Digital",
    href: "/works/mogulbay",
    image: "/mogulbay/1.webp",
    alt: "Mogul Bay brand identity",
    wide: true,
  },
];

export const pkg = [
  "Logo design",
  "Colors & fonts",
  "Design elements",
  "Brand guidelines",
  "Final files for web & print",
];

export const quotes = [
  {
    ...byId["max-kolb"],
    line: "He took the time to understand our vision and delivered a sleek, professional, and cohesive brand system.",
  },
  { ...byId["evan-jones"], line: byId["evan-jones"].pullQuote },
  { ...byId["bienvinido-onia"], line: byId["bienvinido-onia"].pullQuote },
];

export const steps = [
  {
    when: "01 · Day 1",
    title: "Direction call",
    text: "We learn your business, your customers and the feeling you want the brand to own.",
  },
  {
    when: "02 · Days 2–5",
    title: "Design",
    text: "Logo routes, colors and fonts. You pick a direction, we refine it into the full system.",
  },
  {
    when: "03 · Days 6–7",
    title: "Handoff",
    text: "Your files, guidelines and AI setup, a Loom walkthrough, and 5 days of setup help.",
  },
];
