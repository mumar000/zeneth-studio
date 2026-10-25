import CalendarEmbed from "@/components/calendar-embed";
import { siteConfig } from "@/lib/site-config";

export default function BookingCta({
  eyebrow = "Start your brand",
  heading = "Let's talk",
  accent = "brand.",
  description = "Book a 30-minute call. Tell us about your business, and we'll map the next step together.",
  bookingUrl = siteConfig.brandCallUrl,
}) {
  return (
    <section id="book" aria-labelledby="book-title" className="scroll-mt-24 px-3 pb-14 pt-6 sm:px-6 md:pb-20 md:pt-8">
      <div className="mx-auto max-w-[1344px] overflow-hidden rounded-[24px] border border-white/10 bg-[#1e142c] px-4 pb-4 pt-9 text-white sm:px-6 sm:pb-6 md:rounded-[28px] md:px-8 md:pb-8 md:pt-12">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xs font-[700] uppercase tracking-[0.18em] text-white/75">
            {eyebrow}
          </p>
          <h2 id="book-title" className="mt-3 text-balance text-[clamp(36px,6vw,56px)] font-[700] leading-[1.08] tracking-[-0.045em] md:mt-4" style={{ fontFamily: "var(--font-display)" }}>
            {heading} <span className="font-romie font-[400] italic tracking-[-0.035em]">{accent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-white/85 md:mt-5 md:text-[18px]">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[1180px] overflow-hidden rounded-[14px] border border-white/15 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:mt-10">
          <CalendarEmbed bookingUrl={bookingUrl} className="h-[760px] md:h-[780px]" />
        </div>
      </div>
    </section>
  );
}
