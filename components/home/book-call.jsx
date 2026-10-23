"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import CalendarEmbed, { preloadCalendly } from "@/components/calendar-embed";
import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { LOAD_CALENDAR_EVENT } from "@/lib/scroll-to-book";
import { BrowsersIcon, CodeIcon, PenNibIcon, SparkleIcon } from "./topic-icons";

const { founder } = siteConfig;
const display = { fontFamily: "var(--font-display)" };
const mono = "font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.14em]";

const topics = [
  { id: "brand", label: "Brand identity", hint: "Logo, colors and type", icon: PenNibIcon },
  { id: "design", label: "Website design", hint: "Sites and landing pages", icon: BrowsersIcon },
  { id: "build", label: "Development", hint: "Webflow, Shopify, WordPress", icon: CodeIcon },
  { id: "unsure", label: "Not sure yet", hint: "Let's work it out together", icon: SparkleIcon },
];

const agenda = [
  "Your goals, and where things feel stuck",
  "What we'd do, scoped honestly",
  "Clear next steps, even if we're not the right fit",
];

// The card body turns over like a page: out to the edge, swap, back in.
const FLIP_OUT = 260;
const FLIP_IN = 460;
const flipStyles = {
  idle: undefined,
  out: { transform: "rotateY(-90deg)", transition: `transform ${FLIP_OUT}ms cubic-bezier(0.55,0,0.75,0.3)` },
  enter: { transform: "rotateY(90deg)", transition: "none" },
  in: { transform: "rotateY(0deg)", transition: `transform ${FLIP_IN}ms cubic-bezier(0.2,0.9,0.3,1.12)` },
};

const steps = [
  { id: "pick", label: "Topics" },
  { id: "book", label: "Time" },
];

function Stepper({ step }) {
  const current = steps.findIndex((s) => s.id === step);
  return (
    <ol className="flex items-center gap-2.5" aria-label="Booking steps">
      {steps.map((s, i) => (
        <li key={s.id} className="flex items-center gap-2.5" aria-current={i === current ? "step" : undefined}>
          {i > 0 && (
            <span aria-hidden="true" className="h-0.5 w-6 overflow-hidden rounded-full bg-black/15">
              <span
                className={`block h-full origin-left bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  current >= i ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          )}
          <span
            className={`grid size-6 place-items-center rounded-full border-2 font-mono text-[11px] font-[700] leading-none transition-colors duration-300 ${
              i <= current ? "border-black bg-primary text-white" : "border-black/20 bg-white text-[#4a4752]"
            }`}
          >
            {i + 1}
          </span>
          <span className={`${mono} ${i === current ? "text-[#1a1a1a]" : "text-[#4a4752]"}`}>{s.label}</span>
        </li>
      ))}
    </ol>
  );
}

export default function BookCall() {
  const sectionRef = useRef(null);
  const questionRef = useRef(null);
  const backRef = useRef(null);
  const timers = useRef([]);
  const [step, setStep] = useState("pick");
  const [flip, setFlip] = useState("idle");
  const [picked, setPicked] = useState([]);
  const [prefill, setPrefill] = useState("");
  const [calendarOpened, setCalendarOpened] = useState(false);

  const pickedLabels = topics.filter((t) => picked.includes(t.id)).map((t) => t.label);

  // Fetch the calendar script while the visitor is still choosing, so
  // step two opens without a wait.
  useEffect(() => {
    const preload = () => preloadCalendly().catch(() => {});
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && preload(), {
      rootMargin: "800px 0px",
    });
    const section = sectionRef.current;
    observer.observe(section);
    // The background drift only runs while the section is on screen.
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) section.dataset.visible = "";
      else delete section.dataset.visible;
    });
    visibility.observe(section);
    window.addEventListener(LOAD_CALENDAR_EVENT, preload);
    const pending = timers.current;
    return () => {
      observer.disconnect();
      visibility.disconnect();
      window.removeEventListener(LOAD_CALENDAR_EVENT, preload);
      pending.forEach(clearTimeout);
    };
  }, []);

  function toggle(id) {
    setPicked((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      // "Not sure yet" and the specific topics rule each other out.
      if (id === "unsure") return ["unsure"];
      return [...current.filter((x) => x !== "unsure"), id];
    });
  }

  function goTo(next) {
    const swap = () => {
      if (next === "book") {
        setPrefill(pickedLabels.join(", "));
        setCalendarOpened(true);
      }
      setStep(next);
    };
    const focusNext = () => (next === "book" ? backRef : questionRef).current?.focus({ preventScroll: true });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swap();
      requestAnimationFrame(focusNext);
      return;
    }

    timers.current.forEach(clearTimeout);
    setFlip("out");
    timers.current = [
      setTimeout(() => {
        swap();
        setFlip("enter");
        requestAnimationFrame(() => requestAnimationFrame(() => setFlip("in")));
      }, FLIP_OUT),
      setTimeout(() => {
        setFlip("idle");
        focusNext();
      }, FLIP_OUT + FLIP_IN + 40),
    ];
  }

  return (
    <section
      ref={sectionRef}
      id="book"
      aria-labelledby="book-title"
      className="group/book relative isolate scroll-mt-20 overflow-hidden border-y-2 border-black bg-[#5a14d6] px-4 py-16 text-white sm:px-6 md:py-20"
    >
      {/* Soft blobs are radial gradients, not blur filters: they cost nothing to
          paint, and the slow drift only moves layers on the compositor. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[15%] -top-[35%] h-[90%] w-[70%] rounded-full bg-[radial-gradient(closest-side,#9d5cff,rgba(157,92,255,0))] motion-safe:animate-drift group-not-data-[visible]/book:[animation-play-state:paused]" />
        <div className="absolute -bottom-[40%] -right-[10%] h-[100%] w-[65%] rounded-full bg-[radial-gradient(closest-side,#3d0d99,rgba(61,13,153,0))] motion-safe:animate-drift motion-safe:[animation-direction:alternate-reverse] group-not-data-[visible]/book:[animation-play-state:paused]" />
        <div className="absolute left-[30%] top-[20%] h-[70%] w-[45%] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.45),rgba(232,121,249,0))] motion-safe:animate-drift motion-safe:[animation-delay:-9s] group-not-data-[visible]/book:[animation-play-state:paused]" />
        <div className="absolute -bottom-[25%] left-[5%] h-[55%] w-[35%] rounded-full bg-[radial-gradient(closest-side,rgba(248,229,116,0.28),rgba(248,229,116,0))] motion-safe:animate-drift motion-safe:[animation-direction:alternate-reverse] motion-safe:[animation-delay:-14s] group-not-data-[visible]/book:[animation-play-state:paused]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <Reveal className="flex flex-col gap-5">
            <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-[#e6d7ff]">
              Work with us
            </span>
            <h2
              id="book-title"
              className="text-balance text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em]"
              style={display}
            >
              Book a <span className="text-[var(--accent-yellow)]">30-min</span> call.
            </h2>
            <p className="max-w-[440px] text-[18px] leading-[1.55] text-[#e7dbf8]">
              Tell us what you&apos;re building. We&apos;ll scope it honestly, or tell you if we&apos;re not the right
              fit.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex max-w-[440px] items-center gap-4 rounded-2xl border-2 border-black bg-white p-4 text-[#1a1a1a] shadow-[5px_5px_0_#000]">
              <Image
                src={founder.image}
                alt=""
                width={56}
                height={56}
                sizes="56px"
                className="size-14 flex-none rounded-full border-2 border-black bg-[#efe6ff] object-cover"
              />
              <span className="min-w-0">
                <span className="block text-[16px] font-[700] leading-tight" style={display}>
                  {founder.name}
                </span>
                <span className="mt-0.5 block text-[13px] text-[#4a4752]">Founder, Nymbor</span>
                <span className="mt-2 block text-[15px] leading-snug">You&apos;ll talk to me directly, not a sales team.</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={220} as="p" className="text-[16px] text-[#e7dbf8]">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-[700] text-white underline decoration-white/40 decoration-2 underline-offset-[3px] transition-colors hover:decoration-[var(--accent-yellow)]"
            >
              {siteConfig.email}
            </a>
          </Reveal>
        </div>

        <Reveal
          variant="tilt"
          delay={140}
          className="overflow-hidden rounded-3xl border-2 border-black bg-white text-[#1a1a1a] shadow-[6px_6px_0_#000] md:shadow-[10px_10px_0_#000]"
        >
          <div className="flex items-center justify-between gap-4 border-b-2 border-black px-5 py-3.5 md:px-6">
            <Stepper step={step} />
            <span className={`${mono} hidden text-[#4a4752] sm:inline`}>30 min</span>
          </div>

          <div className="[perspective:1800px]">
            <div className="origin-center [backface-visibility:hidden]" style={flipStyles[flip]}>
              {/* Step 1: what the call is about */}
              <div hidden={step !== "pick"} className="flex flex-col gap-5 p-5 sm:p-6">
                <div className="flex flex-col gap-1.5">
                  <h3
                    id="book-question"
                    ref={questionRef}
                    tabIndex={-1}
                    className="text-[clamp(26px,2.6vw,34px)] font-[700] leading-[1.05] tracking-[-0.03em] focus:outline-none"
                    style={display}
                  >
                    What should we talk about?
                  </h3>
                  <p className="text-[15px] text-[#4a4752]">Pick any that fit. It helps me come prepared.</p>
                </div>

                <div role="group" aria-labelledby="book-question" className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {topics.map(({ id, label, hint, icon: Icon }) => {
                    const on = picked.includes(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(id)}
                        className={`relative flex min-h-[112px] flex-col items-start justify-between gap-3 rounded-2xl border-2 p-3.5 text-left sm:p-4 transition-[translate,box-shadow,background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-x-0 active:translate-y-0 active:shadow-none ${
                          on
                            ? "-translate-x-0.5 -translate-y-0.5 border-black bg-primary text-white shadow-[4px_4px_0_#000]"
                            : "border-black/15 bg-white hover:-translate-y-0.5 hover:border-black"
                        }`}
                      >
                        <span
                          className={`grid size-11 place-items-center rounded-xl border transition-colors duration-200 [--icon-tint:var(--accent-yellow)] ${
                            on ? "border-white/30 bg-white/15 text-white" : "border-black/10 bg-[#f4effc] text-primary"
                          }`}
                        >
                          <Icon className="size-6" />
                        </span>
                        <span>
                          <span className="block text-[16px] font-[700] leading-tight">{label}</span>
                          <span className={`mt-1 block text-[13px] leading-snug ${on ? "text-white/80" : "text-[#4a4752]"}`}>
                            {hint}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`absolute right-3 top-3 grid size-6 place-items-center rounded-full border-2 transition-[background-color,border-color] duration-200 ${
                            on ? "border-black bg-white text-primary" : "border-black/20 bg-white text-transparent"
                          }`}
                        >
                          <Check
                            size={13}
                            strokeWidth={3.5}
                            className={`transition-[scale] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${on ? "scale-100" : "scale-0"}`}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div>
                  <span className={`${mono} text-[#4a4752]`}>On the call</span>
                  <ol className="mt-3 flex flex-col">
                    {agenda.map((item, i) => (
                      <li key={item} className="flex items-baseline gap-4 border-t border-black/10 py-2.5 text-[15px] leading-snug">
                        <span className="font-mono text-[13px] font-[700] tracking-[0.12em] text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-black pt-5">
                  <span className="text-[13px] text-[#4a4752]" aria-live="polite">
                    {picked.length ? `${picked.length} selected` : "Optional. You can skip it."}
                  </span>
                  <button
                    type="button"
                    onClick={() => goTo("book")}
                    className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[10px] border-2 border-black bg-primary px-6 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-[translate,box-shadow,background-color,color] duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  >
                    See available times
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Step 2: the calendar. Stays mounted once opened, so going back keeps its state. */}
              {calendarOpened && (
                <div hidden={step !== "book"}>
                  <div className="flex min-h-[60px] flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black/10 px-5 py-2 md:px-6">
                    <button
                      ref={backRef}
                      type="button"
                      onClick={() => goTo("pick")}
                      className={`${mono} inline-flex min-h-11 items-center gap-2 text-[#1a1a1a] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                    >
                      <ArrowLeft className="size-3.5" aria-hidden="true" />
                      {pickedLabels.length ? "Change topics" : "Add topics"}
                    </button>
                    {pickedLabels.length > 0 && (
                      <span className="flex flex-wrap gap-1.5">
                        {pickedLabels.map((label) => (
                          <span key={label} className="rounded-full bg-[#efe6ff] px-2.5 py-1 text-[12px] font-[500] text-[#4b12b0]">
                            {label}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                  <CalendarEmbed prefill={prefill} />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
