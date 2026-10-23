import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import LazyVideo from "@/components/lazy-video";
import BookCall from "@/components/book-call";
import BookLink from "@/components/about/book-link";
import { servicesDetailData } from "@/lib/services-detail-data";
import { serviceSeoData } from "@/lib/service-seo-data";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site-config";
import AiAssistant from "./ai-assistant";
import Faq from "./faq";

const price = servicesDetailData["brand-identity"].startingPrice;
const { faqs } = serviceSeoData["brand-identity"];
const byId = Object.fromEntries(testimonials.map((t) => [t.id, t]));

const display = { fontFamily: "var(--font-display)" };
const eyebrow = "font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary";
const h2 = "text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em] text-[#1a1a1a]";
const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";
// Overlapping radial glows read as a blurred mesh, without the cost of a blur filter.
const meshGradient = [
  "radial-gradient(38% 55% at 10% 35%, rgba(167,139,250,0.38), transparent 70%)",
  "radial-gradient(34% 50% at 90% 25%, rgba(244,114,182,0.24), transparent 70%)",
  "radial-gradient(42% 55% at 72% 80%, rgba(125,211,252,0.28), transparent 70%)",
  "radial-gradient(32% 45% at 32% 85%, rgba(253,186,116,0.2), transparent 70%)",
  "radial-gradient(30% 40% at 50% 45%, rgba(114,33,252,0.12), transparent 70%)",
].join(", ");
// The hero's mesh is quieter in colour, with one deeper violet glow for contrast behind the headline.
const heroMesh = [
  "radial-gradient(45% 60% at 18% 20%, rgba(114,33,252,0.16), transparent 70%)",
  "radial-gradient(40% 55% at 85% 15%, rgba(244,114,182,0.14), transparent 70%)",
  "radial-gradient(45% 55% at 78% 75%, rgba(125,211,252,0.16), transparent 70%)",
  "radial-gradient(38% 50% at 22% 80%, rgba(253,186,116,0.12), transparent 70%)",
  "radial-gradient(28% 35% at 50% 42%, rgba(76,18,176,0.1), transparent 70%)",
].join(", ");
const primaryButton = `group inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] border-2 border-black bg-primary px-7 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-[translate,box-shadow,background-color,color] duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm`;

/* ---------- content ---------- */

const headline = [
  { text: "We design your brand.", accent: false },
  { text: "And teach AI to use it.", accent: true },
];

const logos = [
  { name: "Féroce", w: 156, h: 23 },
  { name: "Trion", w: 95, h: 30 },
  { name: "Resight", w: 133, h: 34 },
  { name: "Flight Frame", w: 154, h: 40 },
  { name: "Fractal", w: 109, h: 34 },
  { name: "The Nugget Spot", w: 98, h: 40 },
  { name: "Renu", w: 89, h: 28 },
  { name: "Fresh Picks", w: 129, h: 30 },
].map((logo, i) => ({ ...logo, src: `/home-logo/home-logo${i + 1}.png` }));

// Wide cards (7 of 12 columns) alternate with narrow ones (5 of 12).
const work = [
  { title: "Let's Grub", tags: "Logo · Mascot · Guidelines", href: "/works/lets-grub", image: "/works/lets-grub/hero/hero-4x.png", alt: "Let's Grub brand identity", wide: true },
  { title: "Féroce", tags: "Brand identity · Art direction", href: "/works/feroce", video: "/feroce/feroce-video.mp4", poster: "/feroce/branding-feroce-page-0001-1.webp", alt: "Féroce brand identity in motion" },
  { title: "Sapphire Pools", tags: "Brand identity · Applications", href: "/works/sapphire", image: "/works/sapphire/hero/project-card.webp", alt: "Sapphire Pools brand identity" },
  { title: "Mogul Bay", tags: "Brand identity · Digital", href: "/works/mogulbay", image: "/mogulbay/1.webp", alt: "Mogul Bay brand identity", wide: true },
];

const pkg = [
  "Logo design",
  "Colors & fonts",
  "Design elements",
  "Brand guidelines",
  "Final files for web & print",
];

const quotes = [
  { ...byId["max-kolb"], line: "He took the time to understand our vision and delivered a sleek, professional, and cohesive brand system." },
  { ...byId["evan-jones"], line: byId["evan-jones"].pullQuote },
  { ...byId["bienvinido-onia"], line: byId["bienvinido-onia"].pullQuote },
];

const steps = [
  { when: "01 · Day 1", title: "Direction call", text: "We learn your business, your customers and the feeling you want the brand to own." },
  { when: "02 · Days 2–5", title: "Design", text: "Logo routes, colors and fonts. You pick a direction, we refine it into the full system." },
  { when: "03 · Days 6–7", title: "Handoff", text: "Your files, guidelines and AI setup, a Loom walkthrough, and 5 days of setup help." },
];

/* ---------- pieces ---------- */

function Tick({ strong = false }) {
  return (
    <span
      className={`grid size-[26px] flex-none place-items-center rounded-full ${strong ? "bg-primary text-white" : "bg-[#efe6ff] text-primary"}`}
    >
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-3.5">
        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
      </svg>
    </span>
  );
}

function SectionHead({ label, title, id, children, className = "" }) {
  return (
    <Reveal className={`mb-9 flex flex-wrap items-end justify-between gap-5 ${className}`}>
      <div className="flex flex-col gap-3.5">
        <span className={eyebrow}>{label}</span>
        <h2 id={id} className={h2} style={display}>
          {title}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}

/* ---------- page ---------- */

export default function BrandIdentityPage() {
  let wordIndex = 0;

  return (
    <main id="main-content" className="overflow-x-clip bg-[#faf7ff] text-[#1a1a1a]">
      {/* HERO: pure CSS motion, so it plays on first paint without waiting for JS. */}
      <section aria-labelledby="bi-title" className="relative isolate px-4 pb-14 pt-32 text-center sm:px-6 md:pb-[76px] md:pt-[clamp(150px,13vw,200px)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]"
          style={{ backgroundImage: heroMesh }}
        />
        <div className="mx-auto max-w-[1320px]">
          <span className={`mb-6 block ${eyebrow} motion-safe:animate-rise`}>Brand identity</span>
          <h1
            id="bi-title"
            className="mx-auto max-w-[1040px] text-[clamp(42px,7vw,88px)] font-[700] leading-[0.98] tracking-[-0.04em]"
            style={display}
          >
            <span className="sr-only">We design your brand. And teach AI to use it.</span>
            {headline.map((line) => (
              <span key={line.text} aria-hidden="true" className={`block ${line.accent ? "text-primary" : ""}`}>
                {line.text.split(" ").map((word, i) => {
                  const delay = 80 + wordIndex++ * 60;
                  return (
                    <Fragment key={word + i}>
                      {i > 0 && " "}
                      {/* The mask is a little taller than the line so descenders aren't clipped. */}
                      <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
                        <span className="inline-block motion-safe:animate-mask-up" style={{ "--d": `${delay}ms` }}>
                          {word}
                        </span>
                      </span>
                    </Fragment>
                  );
                })}
              </span>
            ))}
          </h1>
          <p
            className="mx-auto mt-7 max-w-[600px] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-[#4a4752] motion-safe:animate-rise"
            style={{ "--d": "620ms" }}
          >
            Logo, colors, fonts and guidelines, plus your brand set up inside Claude or ChatGPT, so everyday posts, emails
            and decks come out on-brand. Ready in 5–7 working days.
          </p>
          <div className="mt-9 motion-safe:animate-rise" style={{ "--d": "740ms" }}>
            <BookLink className={primaryButton}>
              Book a 30-min call
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </BookLink>
          </div>
          <span className="mt-[18px] block text-[15px] text-[#4a4752] motion-safe:animate-rise" style={{ "--d": "840ms" }}>
            Starting at <b className="text-[#1a1a1a]">{price}</b>
          </span>
        </div>
      </section>

      {/* LOGOS: CSS marquee, pauses on hover, a static grid for reduced motion. */}
      <section aria-label="Clients" className="pb-6">
        <Reveal as="span" className={`mb-[22px] block text-center ${eyebrow} !text-[#4a4752]`}>
          Trusted by
        </Reveal>
        <div className="group/marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] motion-reduce:[mask-image:none]">
          <div className="flex w-max motion-safe:animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:w-auto">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className={`flex items-center gap-12 pr-12 md:gap-[72px] md:pr-[72px] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-12 motion-reduce:gap-y-8 motion-reduce:px-6 ${
                  copy === 1 ? "motion-reduce:hidden" : ""
                }`}
              >
                {logos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={copy === 1 ? "" : logo.name}
                    width={logo.w}
                    height={logo.h}
                    className="h-7 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0 md:h-[34px]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND WORK */}
      <section aria-labelledby="work-title" className="px-[clamp(16px,3vw,48px)] py-20 md:py-28">
        <div className="mx-auto max-w-[1680px]">
          <SectionHead label="Brand work" title="Brands we've built." id="work-title">
            <Link
              href="/works"
              className="group inline-flex min-h-11 items-center gap-2 font-mono text-[13px] font-[700] uppercase leading-none tracking-[0.12em] transition-colors hover:text-primary"
            >
              View all work
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </SectionHead>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-[clamp(18px,2.2vw,34px)] lg:grid-cols-12">
            {work.map((item, i) => (
              <Reveal key={item.href} delay={(i % 2) * 110} className={item.wide ? "lg:col-span-7" : "lg:col-span-5"}>
                <Link href={item.href} className="group flex flex-col gap-3.5 rounded-[clamp(20px,2.2vw,34px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                  <div
                    className={`relative aspect-[16/11] overflow-hidden rounded-[clamp(20px,2.2vw,34px)] border border-black/10 bg-[#e9e3f3] shadow-[0_22px_58px_rgba(34,15,68,0.08)] transition-shadow duration-500 group-hover:shadow-[0_30px_70px_rgba(34,15,68,0.16)] ${
                      item.wide ? "lg:aspect-[16/10]" : ""
                    }`}
                  >
                    <div className={`absolute inset-0 transition-transform duration-700 ${ease} group-hover:scale-[1.03]`}>
                      {item.video ? (
                        <LazyVideo src={item.video} poster={item.poster} label={item.alt} className="size-full object-cover" />
                      ) : (
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes={item.wide ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 58vw" : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw"}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                    <h3 className="text-[24px] font-[700] tracking-[-0.02em]" style={display}>
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-[700] uppercase leading-[1.4] tracking-[0.12em] text-[#4a4752]">
                      {item.tags}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR BRAND, INSIDE YOUR AI */}
      <Reveal>
        <AiAssistant />
      </Reveal>

      {/* PACKAGE */}
      <section aria-labelledby="pkg-title" className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHead label="The package" title="What you get." id="pkg-title" className="justify-center text-center [&>div]:items-center" />

          <Reveal
            variant="tilt"
            className="mx-auto grid max-w-[980px] gap-7 rounded-3xl border-2 border-black bg-white p-7 shadow-[5px_5px_0_#000] md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-16 md:gap-y-6 md:rounded-[28px] md:p-12 md:shadow-[8px_8px_0_#000] md:[grid-template-areas:'head_list'_'btn_list']"
          >
            <div className="flex flex-col gap-3.5 md:[grid-area:head]">
              <h3 className="max-w-[260px] text-[20px] font-[700] leading-[1.25]" style={display}>
                Brand identity + AI setup
              </h3>
              <div className="text-[56px] font-[700] leading-none tracking-[-0.04em] md:text-[64px]" style={display}>
                <small className="mb-1.5 block text-[14px] font-[400] tracking-normal text-[#4a4752]" style={{ fontFamily: "inherit" }}>
                  Starting at
                </small>
                {price}
              </div>
              <span className="self-start rounded-lg bg-[#efe6ff] px-3 py-[9px] font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-[#4b12b0]">
                5–7 working days
              </span>
            </div>

            <ul className="flex flex-col md:[grid-area:list]">
              {pkg.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={120 + i * 70}
                  className="flex items-center gap-3.5 border-b border-black/10 py-3.5 text-[17px] font-[600] first:pt-0 md:py-4 md:text-[18px]"
                >
                  <Tick />
                  {item}
                </Reveal>
              ))}
              <Reveal
                as="li"
                delay={120 + pkg.length * 70}
                className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-3.5 text-[17px] font-[600] md:flex-nowrap md:pt-4 md:text-[18px]"
              >
                <Tick strong />
                <span className="flex-[1_1_200px]">Brand setup in Claude or ChatGPT</span>
                <span className="ml-10 whitespace-nowrap rounded-md bg-primary px-2 py-1.5 font-mono text-[10px] font-[700] leading-none tracking-[0.14em] text-white md:ml-auto">
                  THE TWIST
                </span>
              </Reveal>
            </ul>

            <div className="md:self-end md:[grid-area:btn]">
              <BookLink className={`${primaryButton} w-full`}>Book a 30-min call</BookLink>
              <p className="mt-3.5 text-center text-[14px] font-[600] text-[#4b12b0]">+ 5 days of setup help after handoff</p>
            </div>
          </Reveal>

          <Reveal as="p" className="mx-auto mt-[22px] max-w-[940px] text-center text-[15px] text-[#4a4752]">
            You own all files. Exact quote after a call. New designs, websites and packaging are quoted separately.
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="t-title" className="relative isolate px-4 py-20 sm:px-6 md:py-28">
        {/* Soft mesh gradient, faded out at the top and bottom so the page flows straight through. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
          style={{ backgroundImage: meshGradient }}
        />
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-9 flex flex-col gap-3.5">
            <span className={eyebrow}>Client words</span>
            <h2 id="t-title" className={h2} style={display}>
              What clients say
            </h2>
            <p className="flex items-center gap-3 text-[15px] text-[#4a4752]">
              <span
                aria-hidden="true"
                className="grid size-10 flex-none place-items-center rounded-full border-2 border-black bg-primary font-mono text-[13px] font-[700] text-white"
              >
                MU
              </span>
              <span>
                Every project is led by <b className="text-[#1a1a1a]">{siteConfig.founder.name}</b>, founder of Nymbor.
              </span>
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {quotes.map((t, i) => (
              <Reveal
                as="figure"
                key={t.id}
                delay={i * 100}
                className={`flex flex-col justify-between gap-7 rounded-3xl border border-black/10 bg-white p-7 transition-[translate,box-shadow] duration-300 ${ease} hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(28,16,48,0.28)] lg:min-h-[300px]`}
              >
                <blockquote className="text-[22px] font-[500] leading-[1.3] tracking-[-0.015em]" style={display}>
                  &ldquo;{t.line}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  {t.avatar ? (
                    <Image src={t.avatar} alt="" width={44} height={44} className="size-11 flex-none rounded-full object-cover" />
                  ) : (
                    <span aria-hidden="true" className="grid size-11 flex-none place-items-center rounded-full bg-[#efe6ff] font-mono text-[14px] font-[700] text-[#4b12b0]">
                      {t.name.split(" ").map((part) => part[0]).join("")}
                    </span>
                  )}
                  <span>
                    <b className="block text-[15px]">{t.name}</b>
                    <span className="block text-[13px] text-[#4a4752]">{t.role}</span>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="p-title" className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-9 flex flex-col gap-3.5">
            <span className={eyebrow}>How it runs</span>
            <h2 id="p-title" className={h2} style={display}>
              Three steps. 5–7 working days.
            </h2>
            <p className="text-[16px] text-[#4a4752]">Counted from kickoff, with your feedback back within a day.</p>
          </Reveal>

          <ol className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} className="flex flex-col gap-3 rounded-3xl border border-black/10 bg-white p-[30px]">
                <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary">{step.when}</span>
                <b className="text-[24px] tracking-[-0.02em]" style={display}>
                  {step.title}
                </b>
                <span className="text-[16px] leading-[1.5] text-[#4a4752]">{step.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="px-4 pb-20 sm:px-6 md:pb-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHead label="Questions" title="Straight answers." id="faq-title" />
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <BookCall
        eyebrow="Start your brand"
        title={
          <>
            Book a <span className="text-primary">30-min call.</span>
          </>
        }
        text="Tell us about your business. If it's a fit, your brand and AI setup are delivered in 5–7 working days."
        badge="Delivered in 5–7 working days"
      />
    </main>
  );
}
