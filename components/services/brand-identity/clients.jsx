import Image from "next/image";
import Reveal from "@/components/reveal";
import { eyebrow, logos } from "./content";

export default function Clients() {
  return (
    <section aria-label="Clients" className="pb-6">
      <Reveal
        as="span"
        className={`mb-[22px] block text-center ${eyebrow} !text-[#4a4752]`}
      >
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
  );
}
