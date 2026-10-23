"use client";

import { useRef, useState } from "react";
import ClientGlobe from "./client-globe";
import ClientMap from "./client-map";
import Reveal from "@/components/reveal";

const views = [
  {
    id: "globe",
    label: "Globe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
  },
  {
    id: "map",
    label: "Map",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
        <path d="M9 4v14M15 6v14" />
      </svg>
    ),
  },
];

export default function ClientBase() {
  const [view, setView] = useState("globe");
  const tabRefs = useRef([]);
  const index = views.findIndex((v) => v.id === view);

  function onKeyDown(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowRight" ? 1 : -1) + views.length) % views.length;
    setView(views[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section aria-labelledby="clients-title" className="px-4 pb-20 sm:px-6 md:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
              Our client base
            </span>
            <h2
              id="clients-title"
              className="text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where our clients are.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Choose a view"
            onKeyDown={onKeyDown}
            className="relative grid grid-cols-2 rounded-full border-2 border-black bg-white p-1 shadow-[4px_4px_0_#000]"
          >
            {/* Sliding thumb: one transform, no layout work. */}
            <span
              aria-hidden="true"
              className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(${index * 100}%)` }}
            />
            {views.map((v, i) => (
              <button
                key={v.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${v.id}`}
                aria-controls={`panel-${v.id}`}
                aria-selected={view === v.id}
                tabIndex={view === v.id ? 0 : -1}
                onClick={() => setView(v.id)}
                className="relative inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-[18px] font-mono text-xs font-[700] uppercase leading-none tracking-[0.14em] text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-selected:text-white [&>svg]:size-[15px]"
              >
                {v.icon}
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variant="tilt" delay={100}>
          {/* Both views stay mounted; each one pauses itself while hidden. */}
          {views.map((v) => (
            <div key={v.id} id={`panel-${v.id}`} role="tabpanel" aria-labelledby={`tab-${v.id}`} hidden={view !== v.id}>
              {v.id === "globe" ? <ClientGlobe /> : <ClientMap />}
            </div>
          ))}
        </Reveal>

        <p className="sr-only">
          Our clients are in the United States, the United Kingdom, the United Arab Emirates and Australia.
        </p>
      </div>
    </section>
  );
}
