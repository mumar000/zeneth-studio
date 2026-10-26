"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { LOAD_CALENDAR_EVENT } from "@/lib/scroll-to-book";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

let scriptPromise;

// The widget is ~200 KB of third-party JS, so it is only fetched once a
// booking section is close or someone clicks "Book a call".
export function preloadCalendly() {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  scriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => (window.Calendly ? resolve(window.Calendly) : reject(new Error("Calendly missing")));
    script.onerror = () => {
      scriptPromise = undefined;
      script.remove();
      reject(new Error("Calendly failed to load"));
    };
    document.body.appendChild(script);
  });
  return scriptPromise;
}

// `prefill` fills the event's first booking question, if it has one.
function calendarUrl(prefill, bookingUrl) {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    primary_color: "7221fc",
  });
  if (bookingUrl === siteConfig.calendarUrl) params.set("hide_landing_page_details", "1");
  if (prefill) params.set("a1", prefill);
  return `${bookingUrl}?${params}`;
}

export const calendarButtonClass =
  "inline-flex min-h-[52px] items-center justify-center rounded-[10px] border-2 border-black bg-primary px-7 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-[translate,box-shadow,background-color,color] duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm";

export default function CalendarEmbed({ prefill = "", bookingUrl = siteConfig.calendarUrl, className = "h-[700px]" }) {
  const holderRef = useRef(null);
  const [failed, setFailed] = useState(false);
  // Calendly shows its own loader once the widget starts, so ours steps aside then.
  const [widgetStarted, setWidgetStarted] = useState(false);
  const url = calendarUrl(prefill, bookingUrl);

  useEffect(() => {
    const holder = holderRef.current;
    let started = false;
    let cancelled = false;

    function start() {
      if (started) return;
      started = true;
      observer.disconnect();
      window.removeEventListener(LOAD_CALENDAR_EVENT, start);
      preloadCalendly()
        .then((Calendly) => {
          if (cancelled) return;
          holder.replaceChildren();
          Calendly.initInlineWidget({ url, parentElement: holder });
          setWidgetStarted(true);
        })
        .catch(() => !cancelled && setFailed(true));
    }

    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && start(), {
      rootMargin: "800px 0px",
    });
    observer.observe(holder);
    window.addEventListener(LOAD_CALENDAR_EVENT, start);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener(LOAD_CALENDAR_EVENT, start);
      holder.replaceChildren();
    };
  }, [url]);

  if (failed) {
    return (
      <div className="flex min-h-[320px] flex-col items-start justify-center gap-4 p-10">
        <p className="text-[18px] text-[#4a4752]">Pick a time that works for you.</p>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={calendarButtonClass}>
          Open the calendar
        </a>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder until the widget starts and shows its own loader. */}
      {!widgetStarted && (
        <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
          <span className="size-8 rounded-full border-[3px] border-primary/20 border-t-primary motion-safe:animate-spin" />
        </div>
      )}
      <div ref={holderRef} className="relative h-full [&_iframe]:h-full" />
      <noscript>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-white p-10">
          <p className="text-[18px] text-[#4a4752]">Pick a time that works for you.</p>
          <a href={bookingUrl} className={calendarButtonClass}>
            Open the calendar
          </a>
        </div>
      </noscript>
    </div>
  );
}
