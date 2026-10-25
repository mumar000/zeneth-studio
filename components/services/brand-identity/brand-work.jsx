import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import LazyVideo from "@/components/lazy-video";
import { display, ease, work } from "./content";
import { SectionHead } from "./section-heading";

export default function BrandWork() {
  return (
    <section
      aria-labelledby="work-title"
      className="px-5 py-16 sm:px-[clamp(16px,3vw,48px)] md:py-28"
    >
      <div className="mx-auto max-w-[1680px]">
        <SectionHead
          label="Brand work"
          title="Brands we've built."
          id="work-title"
        >
          <Link
            href="/works"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-[13px] font-[700] uppercase leading-none tracking-[0.12em] transition-colors hover:text-primary"
          >
            View all work
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </SectionHead>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-y-14">
          {work.map((item, i) => (
            <Reveal
              key={item.href}
              delay={(i % 2) * 110}
              className={
                item.wide ? "min-w-0 lg:col-span-7" : "min-w-0 lg:col-span-5"
              }
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col gap-3.5 rounded-[clamp(20px,2.2vw,34px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[clamp(20px,2.2vw,34px)] border border-black/10 bg-[#e9e3f3] shadow-[0_22px_58px_rgba(34,15,68,0.08)] transition-shadow duration-500 group-hover:shadow-[0_30px_70px_rgba(34,15,68,0.16)] md:aspect-[16/10] lg:aspect-auto lg:h-[clamp(340px,32vw,500px)]">
                  <div
                    className={`absolute inset-0 transition-transform duration-700 ${ease} group-hover:scale-[1.03]`}
                  >
                    {item.video ? (
                      <LazyVideo
                        src={item.video}
                        poster={item.poster}
                        label={item.alt}
                        className="size-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes={
                          item.wide
                            ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 58vw"
                            : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw"
                        }
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-[24px] font-[700] leading-[1.15] tracking-[-0.02em]"
                    style={display}
                  >
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
  );
}
