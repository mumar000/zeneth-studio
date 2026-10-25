import Image from "next/image";
import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { display, ease, eyebrow, h2, quotes } from "./content";

export default function Testimonials() {
  return (
    <section aria-labelledby="t-title" className="px-5 py-16 sm:px-6 md:py-28">
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
              Every project is led by{" "}
              <b className="text-[#1a1a1a]">{siteConfig.founder.name}</b>,
              founder of Nymbor.
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
              <blockquote
                className="text-[22px] font-[500] leading-[1.3] tracking-[-0.015em]"
                style={display}
              >
                &ldquo;{t.line}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 flex-none rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-11 flex-none place-items-center rounded-full bg-[#efe6ff] font-mono text-[14px] font-[700] text-[#4b12b0]"
                  >
                    {t.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
                <span>
                  <b className="block text-[15px]">{t.name}</b>
                  <span className="block text-[13px] text-[#4a4752]">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
