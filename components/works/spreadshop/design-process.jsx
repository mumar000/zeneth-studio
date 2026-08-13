"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  {
    title: "Discovery",
    titleNode: "1:46",
    titleClass: "min-[1340px]:left-[134px]",
    items: [
      {
        label: "Analysis",
        nodeId: "1:84",
        className: "min-[1340px]:left-[158px] min-[1340px]:top-[369px]",
      },
      {
        label: "Research",
        nodeId: "1:89",
        className: "min-[1340px]:left-[362px] min-[1340px]:top-[489px]",
      },
    ],
  },
  {
    title: "Strategy",
    titleNode: "1:47",
    titleClass: "min-[1340px]:left-[734px]",
    items: [
      {
        label: "User Experience",
        nodeId: "1:94",
        className: "min-[1340px]:left-[765px] min-[1340px]:top-[369px]",
      },
      {
        label: "User Interface",
        nodeId: "1:99",
        className: "min-[1340px]:left-[962px] min-[1340px]:top-[493px]",
      },
    ],
  },
  {
    title: "Solutions",
    titleNode: "1:48",
    titleClass: "min-[1340px]:left-[1334px]",
    items: [
      {
        label: "Web Design",
        nodeId: "1:104",
        className: "min-[1340px]:left-[1359px] min-[1340px]:top-[429px]",
      },
      {
        label: "Development",
        nodeId: "1:109",
        className: "min-[1340px]:left-[1443px] min-[1340px]:top-[553px]",
      },
    ],
  },
];

const guideNodes = [
  "1:16",
  "1:17",
  "1:18",
  "1:19",
  "1:21",
  "1:20",
  "1:22",
  "1:23",
  "1:24",
];

function ProcessPill({ item }) {
  return (
    <div
      className={`process-pill relative flex h-[68px] w-full max-w-[343px] items-center justify-center rounded-full bg-white px-12 min-[1340px]:absolute min-[1340px]:h-[84px] min-[1340px]:w-[343px] min-[1340px]:max-w-none ${item.className}`}
      data-node-id={item.nodeId}
    >
      <Image
        src="/works/spreadshop/process-dot.svg"
        alt=""
        width={8}
        height={8}
        aria-hidden="true"
        className="absolute left-[27px] size-2"
      />
      <span className="font-display text-center text-[17px] leading-[1.5] font-[400] text-[#1e1e1e] uppercase sm:text-[19px] min-[1340px]:text-[24px]">
        {item.label}
      </span>
      <Image
        src="/works/spreadshop/process-dot.svg"
        alt=""
        width={8}
        height={8}
        aria-hidden="true"
        className="absolute right-[23px] size-2"
      />
    </div>
  );
}

export default function DesignProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".process-guide",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1,
          stagger: 0.055,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".process-pill",
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            once: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-process-title"
      className="bg-white px-3 pb-24 sm:px-4 sm:pb-28 lg:pb-[228px] min-[1340px]:px-0"
    >
      <div
        className="relative mx-auto max-w-[1863px] overflow-hidden rounded-[10px] bg-[#f6f6f6] px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 min-[1340px]:h-[826px] min-[1340px]:p-0"
        data-node-id="1:15"
      >
        <h2
          id="design-process-title"
          className="font-display text-[36px] leading-[1.25] font-[400] text-[#1e1e1e] sm:text-[42px] min-[1340px]:absolute min-[1340px]:left-[109px] min-[1340px]:top-[62px] min-[1340px]:text-[48px] min-[1340px]:leading-[1.5]"
          data-node-id="1:45"
        >
          Design Process
        </h2>

        <div aria-hidden="true" className="hidden min-[1340px]:block">
          {guideNodes.map((nodeId, index) => (
            <div
              key={nodeId}
              className="process-guide absolute top-[310px] h-[402px] w-px"
              style={{ left: `${134 + index * 200}px` }}
              data-node-id={nodeId}
            >
              <Image
                src="/works/spreadshop/process-guide.svg"
                alt=""
                width={402}
                height={1}
                className="absolute left-1/2 top-1/2 h-px w-[402px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-6 min-[1340px]:mt-0 min-[1340px]:block">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="relative border-l border-dashed border-black/30 pl-5 min-[1340px]:static min-[1340px]:border-0 min-[1340px]:pl-0"
            >
              <h3
                className={`font-display mb-6 text-[21px] leading-[1.5] font-[400] text-[#1e1e1e] min-[1340px]:absolute min-[1340px]:top-[226px] min-[1340px]:mb-0 min-[1340px]:text-[24px] ${stage.titleClass}`}
                data-node-id={stage.titleNode}
              >
                {stage.title}
              </h3>
              <div className="flex flex-col gap-4 min-[1340px]:contents">
                {stage.items.map((item) => (
                  <ProcessPill key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
