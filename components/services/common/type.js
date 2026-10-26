// Shared type scale for the service pages. Matches the Brand Identity page
// (components/services/brand-identity/content.js) so every service reads the same.
export { primaryButtonClass } from "@/components/home/button-styles";

export const display = { fontFamily: "var(--font-display)" };

export const eyebrow = "font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary";
export const h1 = "text-[clamp(42px,7vw,88px)] font-[700] leading-[0.98] tracking-[-0.04em] text-[#1a1a1a]";
export const h2 =
  "text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:text-[clamp(34px,4.6vw,56px)] md:leading-none";
export const lead = "text-[16px] leading-[1.55] text-[#4a4752] md:text-[18px]";

export const cardLabel = "font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary";
export const cardTitle = "text-[22px] font-[700] leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[24px]";
export const cardBody = "text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]";
export const card = "rounded-3xl border border-black/10 bg-white";

// Same shape and shadow as the primary button, in white.
export const secondaryButtonClass =
  "group inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] border-2 border-black bg-white px-7 font-mono text-xs font-[700] uppercase leading-none tracking-[0.14em] text-black shadow-[5px_5px_0_#000] motion-safe:transition-[translate,box-shadow,background-color] motion-safe:duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:shadow-[3px_3px_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 sm:text-sm";
