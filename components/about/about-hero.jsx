import { Fragment } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import BookLink from "./book-link";

const { founder } = siteConfig;

const display = { fontFamily: "var(--font-display)" };

// "Meet Nymbor." flips in one letter at a time; the rest of the hero follows.
const LETTER_START = 80;
const LETTER_STEP = 55;
let letterIndex = 0;
const titleWords = [
  { text: "Meet", className: "" },
  { text: "Nymbor.", className: "text-primary" },
].map((word) => ({
  ...word,
  letters: [...word.text].map((char) => ({ char, delay: LETTER_START + letterIndex++ * LETTER_STEP })),
}));
const afterTitle = LETTER_START + letterIndex * LETTER_STEP;

const socials = [
  {
    label: "Instagram",
    href: founder.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: founder.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: founder.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.5 10v8" />
        <circle cx="6.5" cy="6.2" r=".6" fill="currentColor" />
        <path d="M11 18v-8M11 13.6c0-2.2 1.4-3.6 3.3-3.6s3.2 1.3 3.2 3.6V18" />
      </svg>
    ),
  },
];

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden px-4 pb-20 pt-36 text-center sm:px-6 md:pb-28 md:pt-48"
    >
      {/* A flat gradient, not blurred blobs: free to paint on any GPU. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(114,33,252,0.10),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1200px]">
        <h1
          id="about-title"
          className="text-[clamp(56px,10vw,128px)] font-[700] leading-[0.92] tracking-[-0.05em] text-[#1a1a1a] [perspective:900px]"
          style={display}
        >
          <span className="sr-only">Meet Nymbor.</span>
          {titleWords.map((word, w) => (
            <Fragment key={word.text}>
              {w > 0 && " "}
              <span aria-hidden="true" className={`inline-block whitespace-nowrap ${word.className}`}>
                {word.letters.map(({ char, delay }, i) => (
                  <span
                    key={i}
                    className="inline-block origin-[50%_80%] motion-safe:animate-letter-in"
                    style={{ "--d": `${delay}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </Fragment>
          ))}
        </h1>

        <p
          className="mx-auto mt-6 max-w-[640px] text-[clamp(18px,1.7vw,21px)] leading-[1.5] text-[#4a4752] motion-safe:animate-rise md:mt-8"
          style={{ "--d": `${afterTitle}ms` }}
        >
          We&apos;re a design and development studio for brands and websites.
          I&apos;m <b className="font-[700] text-[#1a1a1a]">{founder.name}</b>, the founder.
          I lead every project with our team, and you work with me directly.
        </p>

        <div className="motion-safe:animate-rise" style={{ "--d": `${afterTitle + 140}ms` }}>
          <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-3xl border border-black/10 bg-white px-5 py-[18px] shadow-[0_14px_40px_rgba(28,16,48,0.07)] sm:flex-row sm:gap-[22px] sm:rounded-full sm:p-3">
            <div className="flex items-center gap-3.5 text-left sm:pr-1">
              <Image
                src={founder.image}
                alt={`${founder.name}, founder of Nymbor`}
                width={64}
                height={64}
                sizes="64px"
                loading="eager"
                className="size-16 flex-none rounded-full border-2 border-black bg-[#efe6ff] object-cover"
              />
              <span>
                <span className="block text-[18px] font-[700] leading-tight tracking-[-0.01em]" style={display}>
                  {founder.name}
                </span>
                <span className="block text-[14px] text-[#4a4752]">Founder, Nymbor</span>
              </span>
            </div>

            <span aria-hidden="true" className="h-px w-full bg-black/10 sm:my-1.5 sm:h-auto sm:w-px sm:self-stretch" />

            <div className="flex gap-3 sm:pr-1.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} on ${social.label}`}
                  className="grid size-[50px] place-items-center rounded-[13px] border-2 border-black bg-white text-black shadow-[4px_4px_0_#000] transition-[translate,box-shadow,color] duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 hover:text-primary hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [&>svg]:size-[21px]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 motion-safe:animate-rise" style={{ "--d": `${afterTitle + 260}ms` }}>
          <BookLink className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[10px] border-2 border-black bg-primary px-7 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-[translate,box-shadow,background-color,color] duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm">
            Book a call
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">
              ↓
            </span>
          </BookLink>
        </div>
      </div>
    </section>
  );
}
