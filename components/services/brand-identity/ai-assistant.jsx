"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["700", "800"], display: "swap" });
const serif = fraunces.style;
const display = { fontFamily: "var(--font-display)" };

const SWATCHES = ["#F6EBDD", "#5B3A29", "#D9772B"];
const RESPONSE_AT = 1000;
const ASSETS = "/services/brand-identity/ai-assistant";
const POST = `${ASSETS}/sunday-saturday-post.webp`;
const FLYER = `${ASSETS}/sunday-bake-sale-flyer.webp`;
const SECOND_FLYER = `${ASSETS}/sunday-weekend-flyer.webp`;
const EDITORIAL = `${ASSETS}/sunday-autumn-editorial.webp`;

const scenes = [
  { chip: "Post ideas", ask: "Post ideas for our autumn menu" },
  { chip: "Make a post", ask: "Make a post for Saturday's sale" },
  { chip: "Make a flyer", ask: "Make a flyer for our Sunday bake sale" },
];

const beat = (n) => ({ "--d": `${RESPONSE_AT + n * 110}ms` });
const rise = "motion-safe:animate-rise";

function Artwork({ src, alt, width, height, n = 0, className = "", sizes }) {
  return (
    <div
      className={`overflow-hidden rounded-xl shadow-[0_12px_35px_-12px_rgba(91,58,41,0.23)] ${rise} ${className}`}
      style={beat(n)}
    >
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}

function IdeasScene() {
  return (
    <div className="grid flex-1 grid-cols-3 items-center gap-2.5 md:gap-5">
      <Artwork
        src={EDITORIAL}
        alt="Autumn post idea: a baker slicing a pumpkin sourdough loaf."
        width={1440}
        height={960}
        sizes="(min-width: 768px) 365px, 28vw"
        n={1}
      />
      <Artwork
        src={POST}
        alt="Sale post idea: Saturday tastes better, with sourdough photography and an orange 20% off seal."
        width={1254}
        height={1254}
        sizes="(min-width: 768px) 365px, 28vw"
        n={2}
      />
      <Artwork
        src={FLYER}
        alt="Bakery announcement idea: Fresh out of the oven, in cream and crust orange."
        width={1086}
        height={1448}
        sizes="(min-width: 768px) 365px, 28vw"
        n={3}
      />
    </div>
  );
}

function PostScene() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Artwork
        src={POST}
        alt="Sunday Bakehouse post: Saturday tastes better. 20% off every loaf this Saturday, 8am–2pm, Mill Street."
        width={1254}
        height={1254}
        sizes="(min-width: 768px) 420px, 85vw"
        className="w-full max-w-[420px]"
        n={1}
      />
    </div>
  );
}

function FlyerScene() {
  return (
    <div className="mx-auto grid w-full max-w-[740px] flex-1 grid-cols-2 items-center gap-3 md:gap-6">
      <Artwork
        src={FLYER}
        alt="Sunday Bakehouse flyer in cream and orange: Fresh out of the oven. 20% off all loaves this Saturday, 8am–2pm, Mill Street."
        width={1086}
        height={1448}
        sizes="(min-width: 768px) 358px, 42vw"
        n={1}
      />
      <Artwork
        src={SECOND_FLYER}
        alt="Sunday Bakehouse flyer in cocoa and cream: Meet your weekend loaf. 20% off all loaves this Saturday, 8am–2pm, Mill Street."
        width={1086}
        height={1448}
        sizes="(min-width: 768px) 358px, 42vw"
        n={2}
      />
    </div>
  );
}

const SCENE_BODIES = [IdeasScene, PostScene, FlyerScene];

function Scene({ index, active }) {
  const Body = SCENE_BODIES[index];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[clamp(20px,2vw,32px)] bg-[#fcfaf7] text-[#1a1a1a] shadow-[0_40px_90px_rgba(0,0,0,0.5)] md:min-h-[650px]">
      <div className="flex items-center justify-between gap-3 border-b border-[#efe8de] bg-white px-3.5 py-3 md:px-5 md:py-3.5">
        <span className="flex min-w-0 items-center gap-2.5 text-[12px] font-[700] md:text-[14px]">
          <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[#f6ebdd] text-[#5b3a29]">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span>Your AI · Sunday Bakehouse</span>
        </span>
        <span className="flex items-center gap-1.5" role="img" aria-label="Brand colors and font">
          {SWATCHES.map((color) => (
            <i key={color} className="size-3.5 rounded-full border border-black/10" style={{ background: color }} />
          ))}
          <b className="ml-1 text-[16px] font-[700] text-[#5b3a29]" style={serif}>
            Aa
          </b>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-4 md:gap-4 md:p-6">
        <div className="max-w-[85%] self-end rounded-[18px_18px_4px_18px] bg-primary px-4 py-[11px] text-[14px] leading-[1.4] text-white motion-safe:animate-rise md:text-[15px]">
          {scenes[index].ask}
        </div>
        <div className="relative flex flex-1 flex-col gap-3.5 md:gap-4">
          {/* Typing dots hold the space until the reply lands. */}
          {active && (
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex gap-1 rounded-[18px_18px_18px_4px] bg-[#f1ebe2] px-3.5 py-3 opacity-0 motion-safe:animate-typing"
              style={{ "--d": "180ms" }}
            >
              {[0, 1, 2].map((dot) => (
                <i
                  key={dot}
                  className="size-1.5 rounded-full bg-[#5b3a29] opacity-50 motion-safe:animate-typing-dot"
                  style={{ "--d": `${300 + dot * 110}ms` }}
                />
              ))}
            </span>
          )}
          <Body />
        </div>
      </div>
    </div>
  );
}

export default function AiAssistant() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  // A scene's key bumps each time it is shown, so its reply replays.
  const [runs, setRuns] = useState([0, 0, 0]);
  const [auto, setAuto] = useState(true);
  const [reduce, setReduce] = useState(false);

  function show(index) {
    setActive(index);
    setRuns((current) => current.map((run, i) => (i === index ? run + 1 : run)));
  }

  useEffect(() => {
    const section = sectionRef.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setReduce(media.matches);
    media.addEventListener("change", onMotionChange);
    let seen = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.dataset.visible = "";
          // Replay the first reply when the visitor actually reaches it.
          if (!seen) {
            seen = true;
            setReduce(media.matches);
            setRuns((current) => current.map((run, i) => (i === 0 ? run + 1 : run)));
          }
        } else {
          delete section.dataset.visible;
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ai-title"
      className={`group/ai mx-2 overflow-hidden rounded-[clamp(28px,4vw,64px)] bg-[#111] px-4 py-[88px] text-white sm:mx-[clamp(16px,3vw,48px)] sm:px-[clamp(16px,3vw,48px)] md:py-[clamp(96px,10vw,160px)]`}
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="mb-[22px] block font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-[#b794ff]">
            Your brand, inside your AI
          </span>
          <h2 id="ai-title" className="text-[clamp(36px,5vw,60px)] font-[700] leading-none tracking-[-0.035em]" style={display}>
            Your brand rules, on autopilot.
          </h2>
          <p className="mt-[18px] text-[18px] leading-[1.55] text-[#c9c4d1]">
            We set your brand up inside Claude or ChatGPT. Then it knows your logo, colors, fonts and voice.
          </p>
        </div>

        <div className="group/stage">
          <div
            role="group"
            aria-label="Examples"
            className="-mx-4 mb-5 mt-8 flex justify-center-safe gap-1.5 overflow-x-auto px-4 py-0.5 [scrollbar-width:none] md:mx-auto md:mb-6 md:mt-10 md:gap-2 [&::-webkit-scrollbar]:hidden"
          >
            {scenes.map((scene, i) => (
              <button
                key={scene.chip}
                type="button"
                aria-pressed={i === active}
                aria-controls={`ai-scene-${i}`}
                onClick={() => {
                  setAuto(false);
                  show(i);
                }}
                className="relative min-h-11 flex-none overflow-hidden rounded-full border-2 border-[#2e2e33] bg-[#1b1b1e] px-3 text-[13.5px] font-[500] text-[#c9c4d1] transition-[border-color,background-color,color] duration-200 hover:border-[#4a4458] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b794ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] aria-pressed:border-[#b794ff] aria-pressed:bg-[#2a1f3d] aria-pressed:text-white md:px-[18px] md:text-[15px]"
              >
                {scene.chip}
                {/* The progress bar is the rotation timer: when it fills, the next scene shows. */}
                {auto && !reduce && i === active && (
                  <span
                    key={runs[active]}
                    aria-hidden="true"
                    onAnimationEnd={() => show((active + 1) % scenes.length)}
                    className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-[#b794ff] motion-safe:animate-chip-progress group-hover/stage:[animation-play-state:paused] group-focus-within/stage:[animation-play-state:paused] group-not-data-[visible]/ai:[animation-play-state:paused]"
                    style={{ animationDuration: "8s" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mx-auto grid max-w-[1180px]">
            {scenes.map((scene, i) => (
              <div
                key={i}
                id={`ai-scene-${i}`}
                aria-hidden={i !== active}
                inert={i !== active}
                className={`[grid-area:1/1] transition-[opacity,translate,visibility] duration-[450ms] ease-out ${
                  i === active ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
                }`}
              >
                <Scene key={runs[i]} index={i} active={i === active} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
