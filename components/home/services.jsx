"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { primaryButtonClass } from "./button-styles";
import { servicesDetailData } from "@/lib/services-detail-data";

const services = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    text: "Logo, colors, type, and simple rules your team can actually use.",
    tags: ["Logo", "Colors & type", "AI setup"],
    media: {
      type: "video",
      src: "/feroce/feroce-video.mp4",
      poster: "/feroce/feroce-video-backdrop.jpg",
      label: "Féroce brand identity in motion",
    },
  },
  {
    slug: "interface-design",
    title: "Web & Interface Design",
    text: "Clean pages that make your offer easy to understand.",
    tags: ["Websites", "Landing pages", "App screens"],
    media: {
      type: "video",
      src: "/web-animations-video.mp4",
      poster: "/web-animations-video-backdrop.jpg",
      label: "Website and interface design in motion",
    },
  },
  {
    slug: "web-development",
    title: "Web Development",
    text: "Built exactly like the design, then launched.",
    tags: ["Webflow", "Shopify", "WordPress"],
    media: { type: "image", src: "/works/spreadshop/hero.png", alt: "Spreadshop storefront build" },
  },
];

const display = { fontFamily: "var(--font-display)" };
const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const mediaSizes = "(max-width: 1023px) 100vw, 1100px";

export default function Services() {
  const listRef = useRef(null);

  // One observer plays each video only while its card is on screen, and one
  // scroll handler drifts the media for a light parallax. Both stop off-screen.
  useEffect(() => {
    const list = listRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = Array.from(list.querySelectorAll("[data-parallax]"));
    const videos = Array.from(list.querySelectorAll("video"));
    let frame = 0;
    let listVisible = false;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && !reduce) target.play().catch(() => {});
          else target.pause();
        });
      },
      { threshold: 0.35 },
    );
    videos.forEach((video) => videoObserver.observe(video));

    function update() {
      frame = 0;
      const vh = window.innerHeight;
      for (const layer of layers) {
        const rect = layer.parentElement.getBoundingClientRect();
        // -1 when the media enters at the bottom, +1 when it leaves at the top.
        const t = Math.max(-1, Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2)));
        layer.style.transform = `translate3d(0,${(t * 5).toFixed(2)}%,0)`;
      }
    }
    const onScroll = () => {
      if (listVisible && !frame) frame = requestAnimationFrame(update);
    };

    const listObserver = new IntersectionObserver(([entry]) => {
      listVisible = entry.isIntersecting;
      if (listVisible) onScroll();
    });
    if (!reduce) {
      listObserver.observe(list);
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      videoObserver.disconnect();
      listObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="services" aria-labelledby="services-title" className="relative z-10 scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1680px] px-[clamp(16px,3vw,48px)]">
        <Reveal className="mb-9 flex flex-col gap-3.5 md:mb-12">
          <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
            Services
          </span>
          <h2
            id="services-title"
            className="text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em] text-[#1a1a1a]"
            style={display}
          >
            What we do
          </h2>
        </Reveal>

        <div ref={listRef} className="flex flex-col gap-5 md:gap-6">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            const price = servicesDetailData[service.slug]?.startingPrice;
            return (
              <Reveal
                as="article"
                key={service.slug}
                variant="tilt"
                className={`group relative grid overflow-hidden rounded-[clamp(22px,2.4vw,36px)] border border-black/10 bg-white shadow-[0_22px_60px_rgba(38,17,75,0.08)] transition-[box-shadow,border-color] duration-500 hover:border-black/20 hover:shadow-[0_30px_70px_rgba(38,17,75,0.14)] lg:min-h-[560px] ${
                  flip
                    ? "lg:grid-cols-[minmax(360px,0.75fr)_minmax(0,1.55fr)]"
                    : "lg:grid-cols-[minmax(0,1.55fr)_minmax(360px,0.75fr)]"
                }`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-[#e9e3f3] lg:aspect-auto ${flip ? "lg:order-2" : ""}`}>
                  {/* Taller than its frame so the parallax drift never shows an edge. */}
                  <div data-parallax className="absolute inset-x-0 -inset-y-[6%]">
                    <div className={`absolute inset-0 transition-transform duration-700 ${ease} group-hover:scale-[1.03]`}>
                      {service.media.type === "video" ? (
                        <video
                          src={service.media.src}
                          poster={service.media.poster}
                          muted
                          loop
                          playsInline
                          preload="none"
                          aria-label={service.media.label}
                          className="absolute inset-0 size-full object-cover"
                        />
                      ) : (
                        <Image src={service.media.src} alt={service.media.alt} fill sizes={mediaSizes} className="object-cover" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3.5 p-6 sm:p-10 lg:p-[clamp(30px,4vw,64px)]">
                  <span className="font-mono text-[13px] font-[700] leading-none tracking-[0.12em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-[clamp(26px,2.6vw,34px)] font-[700] leading-[1.05] tracking-[-0.03em] text-[#1a1a1a]"
                    style={display}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[17px] leading-[1.5] text-[#4a4752]">{service.text}</p>
                  <ul className="mt-0.5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-[#efe6ff] px-[13px] py-[7px] text-[13px] font-[500] leading-none text-[#4b12b0]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-col items-start gap-4 border-t border-black/10 pt-5">
                    {price && (
                      <span className="text-[16px] font-[700] text-[#1a1a1a]">
                        <span className="font-[400] text-[#4a4752]">Starting at</span> {price}
                      </span>
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      aria-label={`Explore ${service.title}`}
                      className={primaryButtonClass}
                    >
                      Explore
                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
