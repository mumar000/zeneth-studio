import CalendarEmbed from "@/components/calendar-embed";
import { siteConfig } from "@/lib/site-config";

export default function BookingCta() {
  return (
    <section id="book" aria-labelledby="book-title" className="scroll-mt-24 px-3 pb-20 pt-8 sm:px-6 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1440px] rounded-[28px] border border-white/10 bg-[#111110] px-4 pb-5 pt-16 text-white sm:px-8 sm:pb-8 md:rounded-[36px] md:px-12 md:pb-12 md:pt-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xs font-[700] uppercase tracking-[0.18em] text-white/50">
            Start your brand
          </p>
          <h2 id="book-title" className="mt-5 text-balance text-[clamp(40px,8vw,72px)] font-[700] leading-[1.08] tracking-[-0.045em] md:mt-7" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s talk <span className="font-romie font-[400] italic tracking-[-0.035em]">brand.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6] text-white/65 md:mt-7 md:text-[19px]">
            Book a 30-minute call. Tell us about your business, and we&apos;ll map the next step together.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[1180px] overflow-hidden rounded-[14px] border border-white/15 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:mt-20">
          <CalendarEmbed bookingUrl={siteConfig.brandCallUrl} className="h-[760px] md:h-[780px]" />
        </div>
      </div>
    </section>
  );
}
