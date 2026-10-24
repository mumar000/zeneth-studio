import Image from "next/image";
import { Check, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import CalendarEmbed from "@/components/calendar-embed";
import Reveal from "@/components/reveal";

const { founder } = siteConfig;
const display = { fontFamily: "var(--font-display)" };

const promises = [
  "You talk to the founder, not a sales rep.",
  "Straight advice on what we'd do, and what we wouldn't.",
  "No prep needed. Bring a link, a brief or just an idea.",
];

const defaultTitle = (
  <>
    Tell me what you&apos;re <span className="text-primary">building.</span>
  </>
);
const defaultText =
  "Pick a time that suits you. Bring your idea, your site or your brand, and we'll tell you straight what we'd do.";

// Shared "Let's talk" booking section. Pages swap the copy; the layout stays the same.
export default function BookCall({ eyebrow = "Let's talk", title = defaultTitle, text = defaultText, badge }) {
  return (
    <section id="book" aria-labelledby="book-title" className="scroll-mt-24 px-4 pb-24 pt-4 sm:px-6 md:pb-32 md:pt-8">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <Reveal className="flex flex-col gap-5">
            <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
              {eyebrow}
            </span>
            <h2
              id="book-title"
              className="text-balance text-[clamp(40px,5vw,64px)] font-[700] leading-[0.98] tracking-[-0.04em]"
              style={display}
            >
              {title}
            </h2>
            <p className="max-w-[440px] text-[18px] leading-[1.55] text-[#4a4752]">{text}</p>
            {badge && (
              <span className="self-start rounded-lg bg-[#efe6ff] px-3 py-[9px] font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-[#4b12b0]">
                {badge}
              </span>
            )}
          </Reveal>

          <ul className="mt-9 flex flex-col gap-4">
            {promises.map((text, i) => (
              <Reveal
                as="li"
                key={text}
                delay={120 + i * 90}
                className="flex items-start gap-3 text-[16px] leading-[1.5] text-[#1a1a1a]"
              >
                <span className="mt-px grid size-6 flex-none place-items-center rounded-full border-2 border-black bg-primary text-white">
                  <Check size={13} strokeWidth={3.5} aria-hidden="true" />
                </span>
                {text}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={420} className="mt-10 max-w-[440px] border-t border-black/10 pt-6 text-[15px] text-[#4a4752]">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-[700] text-[#1a1a1a] underline decoration-primary/40 decoration-2 underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary"
            >
              {siteConfig.email}
            </a>
            <span className="mt-1 block">I reply within 24 hours.</span>
          </Reveal>
        </div>

        <Reveal
          variant="tilt"
          delay={120}
          className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_#000] md:shadow-[10px_10px_0_#000]"
        >
          <div className="flex items-center justify-between gap-4 border-b-2 border-black px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <Image
                src={founder.image}
                alt=""
                width={44}
                height={44}
                sizes="44px"
                className="size-11 flex-none rounded-full border-2 border-black bg-[#efe6ff] object-cover"
              />
              <span className="text-left">
                <span className="block text-[16px] font-[700] leading-tight tracking-[-0.01em]" style={display}>
                  Call with {founder.name}
                </span>
                <span className="block text-[13px] text-[#4a4752]">Founder, Nymbor</span>
              </span>
            </div>
            <span className="hidden items-center gap-1.5 font-mono text-[11px] font-[700] uppercase tracking-[0.12em] text-[#4a4752] sm:inline-flex">
              <Globe size={14} aria-hidden="true" />
              Your time zone
            </span>
          </div>
          <CalendarEmbed />
        </Reveal>
      </div>
    </section>
  );
}
