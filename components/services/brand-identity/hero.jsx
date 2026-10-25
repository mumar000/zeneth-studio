import { Fragment } from "react";
import BookLink from "@/components/about/book-link";
import { display, eyebrow, headline, price, primaryButton } from "./content";

export default function Hero() {
  let wordIndex = 0;

  return (
    <section
      aria-labelledby="bi-title"
      className="px-5 pb-14 pt-32 text-center sm:px-6 md:pb-[76px] md:pt-[clamp(150px,13vw,200px)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <span
          className={`mb-5 block ${eyebrow} motion-safe:animate-rise md:mb-6`}
        >
          Brand identity
        </span>
        <h1
          id="bi-title"
          className="mx-auto max-w-[1040px] text-balance text-[clamp(36px,10vw,42px)] font-[700] leading-[1.08] tracking-[-0.04em] md:text-[clamp(42px,7vw,88px)] md:leading-[0.98]"
          style={display}
        >
          <span className="sr-only">
            We design your brand. And teach AI to use it.
          </span>
          {headline.map((line) => (
            <span
              key={line.text}
              aria-hidden="true"
              className={`block ${line.accent ? "text-primary" : ""}`}
            >
              {line.text.split(" ").map((word, i) => {
                const delay = 80 + wordIndex++ * 60;
                return (
                  <Fragment key={word + i}>
                    {i > 0 && " "}
                    {/* The mask is a little taller than the line so descenders aren't clipped. */}
                    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
                      <span
                        className="inline-block motion-safe:animate-mask-up"
                        style={{ "--d": `${delay}ms` }}
                      >
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
          className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.55] text-[#4a4752] motion-safe:animate-rise md:mt-7 md:text-[clamp(17px,1.6vw,20px)] md:leading-[1.5]"
          style={{ "--d": "620ms" }}
        >
          Logo, colors, fonts and guidelines, plus your brand set up inside
          Claude or ChatGPT, so everyday posts, emails and decks come out
          on-brand. Ready in 5–7 working days.
        </p>
        <div
          className="mt-9 motion-safe:animate-rise"
          style={{ "--d": "740ms" }}
        >
          <BookLink className={primaryButton}>
            Book a 30-min call
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </BookLink>
        </div>
        <span
          className="mt-[18px] block text-[15px] text-[#4a4752] motion-safe:animate-rise"
          style={{ "--d": "840ms" }}
        >
          Starting at <b className="text-[#1a1a1a]">{price}</b>
        </span>
      </div>
    </section>
  );
}
