import Reveal from "@/components/reveal";
import BookLink from "@/components/about/book-link";
import { display, pkg, price, primaryButton } from "./content";
import { SectionHead, Tick } from "./section-heading";

export default function Package() {
  return (
    <section
      aria-labelledby="pkg-title"
      className="px-5 py-16 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHead
          label="The package"
          title="What you get."
          id="pkg-title"
          className="md:justify-center md:text-center md:[&>div]:items-center"
        />

        <Reveal
          variant="tilt"
          className="mx-auto grid max-w-[980px] gap-7 rounded-3xl border-2 border-black bg-white p-7 shadow-[5px_5px_0_#000] md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-16 md:gap-y-6 md:rounded-[28px] md:p-12 md:shadow-[8px_8px_0_#000] md:[grid-template-areas:'head_list'_'btn_list']"
        >
          <div className="flex flex-col gap-3.5 md:[grid-area:head]">
            <h3
              className="max-w-[260px] text-[20px] font-[700] leading-[1.25]"
              style={display}
            >
              Brand identity + AI setup
            </h3>
            <div
              className="text-[56px] font-[700] leading-none tracking-[-0.04em] md:text-[64px]"
              style={display}
            >
              <small
                className="mb-1.5 block text-[14px] font-[400] tracking-normal text-[#4a4752]"
                style={{ fontFamily: "inherit" }}
              >
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
              <span className="flex-[1_1_200px]">
                Brand setup in Claude or ChatGPT
              </span>
              <span className="ml-10 whitespace-nowrap rounded-md bg-primary px-2 py-1.5 font-mono text-[11px] font-[700] leading-none tracking-[0.14em] text-white md:ml-auto">
                THE TWIST
              </span>
            </Reveal>
          </ul>

          <div className="md:self-end md:[grid-area:btn]">
            <BookLink className={`${primaryButton} w-full`}>
              Book a 30-min call
            </BookLink>
            <p className="mt-3.5 text-center text-[14px] font-[600] text-[#4b12b0]">
              + 5 days of setup help after handoff
            </p>
          </div>
        </Reveal>

        <Reveal
          as="p"
          className="mx-auto mt-[22px] max-w-[940px] text-center text-[15px] text-[#4a4752]"
        >
          You own all files. Exact quote after a call. New designs, websites and
          packaging are quoted separately.
        </Reveal>
      </div>
    </section>
  );
}
