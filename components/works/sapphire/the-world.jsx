"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"Messina Sans", "SF Pro", "Helvetica Neue", sans-serif';

const colors = [
  {
    name: "Sapphire Gold",
    traits: ["Prestige", "Luxury", "Warmth", "Craftsmanship"],
    description:
      "This is your signature accent color that gives the brand a refined and high end feel. It naturally draws attention to important details like logos dividers icons and CTA accents while still feeling elegant and never too loud.",
    values: ["#CBAC56", "203, 172, 86", "0, 15, 58, 20"],
    swatch: "#cbac56",
  },
  {
    name: "Ivory Mist",
    traits: ["Softness", "Calm", "Openness", "Wellness"],
    description:
      "Works as your primary light background to create an airy, spa-like atmosphere. It keeps layouts elegant, improves readability, and gives the brand a welcoming, upscale tone.",
    values: ["#FFFAEF", "255, 250, 239", "0, 2, 6, 0"],
    swatch: "#fffaef",
  },
  {
    name: "Midnight Black",
    traits: ["Authority", "Sophistication", "Modern contrast."],
    description:
      "Your anchor color for typography and structure. It gives the identity confidence and clarity, balancing the softer ivory and warmer gold with strong visual definition.",
    values: ["#0C0C0C", "12, 12, 12", "0, 0, 0, 95"],
    swatch: "#0c0c0c",
  },
];

const applicationRows = [
  [
    {
      src: "/works/sapphire/world/pool-application.webp",
      alt: "Sapphire pool photography application",
      ratio: "aspect-[982/1047]",
      nodeId: "201:234",
    },
    {
      src: "/works/sapphire/world/brand-poster.webp",
      alt: "Sapphire Made for Moments That Matter brand poster",
      ratio: "aspect-[808/1047]",
      nodeId: "201:328",
    },
  ],
  [
    {
      src: "/works/sapphire/world/logo-mark.webp",
      alt: "Large Sapphire gold gemstone monogram",
      ratio: "aspect-[982/1071]",
      nodeId: "201:361",
    },
    {
      src: "/works/sapphire/world/bespoke-poster.webp",
      alt: "Purely Bespoke Sapphire pool campaign poster",
      ratio: "aspect-[808/1071]",
      nodeId: "201:282",
    },
  ],
  [
    {
      src: "/works/sapphire/world/social-story.webp",
      alt: "Sapphire social media story treatment",
      ratio: "aspect-[982/1021]",
      nodeId: "201:300",
    },
    {
      src: "/works/sapphire/world/business-card.webp",
      alt: "Sapphire business card system",
      ratio: "aspect-[810/1021]",
      nodeId: "201:235",
    },
  ],
];

function Reveal({ children, className = "", delay = 0, nodeId }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.85, delay, ease }}
      data-node-id={nodeId}
    >
      {children}
    </motion.div>
  );
}

function BrandImage({ item, sizes }) {
  return (
    <Reveal className={`relative overflow-hidden ${item.ratio}`} nodeId={item.nodeId}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        quality={90}
        sizes={sizes}
        className="object-cover"
      />
    </Reveal>
  );
}

function ColorCard({ color }) {
  return (
    <article className="flex min-h-[520px] flex-col bg-white px-[clamp(22px,2vw,38px)] py-[clamp(24px,1.8vw,32px)] text-[#0c0c0c] lg:min-h-[678px]">
      <h3
        className="text-[clamp(34px,2.37vw,45.5px)] font-[200] leading-[1.2] tracking-[-0.03em]"
        style={{ fontFamily: serif }}
      >
        {color.name}
      </h3>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[-0.03em] text-[#7d7d7d] lg:mt-7 lg:text-[12.5px]">
        {color.traits.map((trait, index) => (
          <span key={trait} className="flex items-center gap-3">
            {index > 0 && <span className="h-3 w-px bg-[#b7b7b7]" />}
            {trait}
          </span>
        ))}
      </div>

      <p className="mt-8 max-w-[370px] text-[12px] leading-[1.2] tracking-[-0.05em] lg:text-[13.25px]">
        {color.description}
      </p>

      <dl className="mt-8 grid grid-cols-[48px_1fr] gap-y-1 text-[13px] leading-[1.2] tracking-[-0.05em] lg:text-[15px]">
        {[
          ["Hex", color.values[0]],
          ["RGB", color.values[1]],
          ["CMYK", color.values[2]],
        ].map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="uppercase text-[#7d7d7d]">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div
        className="mt-10 min-h-[170px] flex-1 lg:mt-auto lg:min-h-[254px]"
        style={{ backgroundColor: color.swatch }}
        aria-label={`${color.name} color swatch`}
      />
    </article>
  );
}

export default function TheWorld() {
  return (
    <section
      aria-labelledby="sapphire-world-title"
      className="bg-white pb-[clamp(48px,3.8vw,73px)] text-[#0c0c0c]"
    >
      <div className="mx-auto flex min-h-[487px] max-w-[960px] flex-col items-center px-6 pb-20 pt-[71px] md:pb-[136px]">
        <Reveal nodeId="201:230">
          <p
            className="rounded-full bg-[#fffaef] px-6 py-4 text-center text-[14px] font-[400] uppercase leading-[1.2] tracking-[-0.03em] md:text-[16px]"
            style={{ fontFamily: sans }}
          >
            02 The world
          </p>
        </Reveal>

        <Reveal className="mt-[49px]" delay={0.05} nodeId="201:229">
          <h2
            id="sapphire-world-title"
            className="text-center text-[clamp(36px,2.5vw,48px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
            style={{ fontFamily: serif }}
          >
            Create trust before the proof existed.
          </h2>
        </Reveal>

        <Reveal className="mt-7" delay={0.1} nodeId="201:228">
          <p
            className="max-w-[829px] text-center text-[clamp(17px,1.25vw,24px)] font-[300] leading-[1.3] tracking-[-0.03em]"
            style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
          >
            The answer was not to fake a giant past. It was to make every
            choice feel intentional: editorial type, controlled contrast,
            quiet confidence, and enough room for the work to become the hero
            later.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1920px] px-[clamp(16px,2.604vw,50px)]">
        <div className="grid gap-[clamp(14px,1.35vw,26px)] md:grid-cols-[1.012fr_1fr]">
          <Reveal
            className="flex aspect-[902/509] items-center justify-center bg-[#fffaef]"
            nodeId="201:232"
          >
            <Image
              src="/works/sapphire/world/logo-dark.svg"
              alt="Sapphire Pools and Spas primary logo"
              width={306}
              height={196}
              unoptimized
              className="h-auto w-[34%]"
            />
          </Reveal>
          <Reveal
            className="flex aspect-[891/509] items-center justify-center bg-[#0c0c0c]"
            delay={0.06}
            nodeId="201:393"
          >
            <Image
              src="/works/sapphire/world/logo-light.svg"
              alt="Sapphire Pools and Spas reversed logo"
              width={303}
              height={194}
              unoptimized
              className="h-auto w-[34%]"
            />
          </Reveal>
        </div>

        <Reveal className="relative mt-[clamp(14px,1.35vw,26px)] aspect-[1819/1121] overflow-hidden" nodeId="201:233">
          <Image
            src="/works/sapphire/world/editorial-lookbook.webp"
            alt="Sapphire editorial lookbook displayed beneath a classic car windshield wiper"
            fill
            quality={88}
            sizes="(min-width: 1024px) 95vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div
          className="relative mt-[clamp(14px,1.35vw,26px)] overflow-hidden p-4 sm:p-8 lg:px-[9.57%] lg:py-[10.17%]"
          data-node-id="201:236"
        >
          <Image
            src="/works/sapphire/world/color-system-bg.webp"
            alt=""
            fill
            quality={86}
            sizes="(min-width: 1024px) 95vw, 100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          <Reveal className="relative grid gap-4 md:grid-cols-3 lg:gap-[38px]" nodeId="201:237">
            {colors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </Reveal>
        </div>

        <div className="flex min-h-[994px] flex-col items-center px-4 pb-48 pt-32 text-center md:pb-[259px] md:pt-[186px]">
          <Reveal nodeId="201:42">
            <p
              className="rounded-full bg-white px-4 py-2.5 text-[18px] leading-[1.2] tracking-[-0.03em] md:text-[24px]"
              style={{ fontFamily: sans }}
            >
              Primary font
            </p>
          </Reveal>
          <Reveal className="mt-[18px]" nodeId="201:421">
            <p
              className="text-[clamp(54px,5vw,96px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
              style={{ fontFamily: serif }}
            >
              pp editorial old
            </p>
          </Reveal>
          <p className="mt-5 text-[clamp(18px,1.25vw,24px)] leading-[1.2] tracking-[-0.03em]">
            Luxury without the cliche.
          </p>

          <div className="mt-[69px] h-px w-full max-w-[724px] bg-black/25" data-node-id="201:423" />

          <Reveal className="mt-[45px]" nodeId="201:44">
            <p
              className="rounded-full bg-white px-4 py-2.5 text-[18px] leading-[1.2] tracking-[-0.03em] md:text-[24px]"
              style={{ fontFamily: sans }}
            >
              Secondary font
            </p>
          </Reveal>
          <Reveal className="mt-4" nodeId="201:422">
            <p
              className="text-[clamp(44px,3.333vw,64px)] leading-[1.2] tracking-[-0.03em]"
              style={{ fontFamily: sans }}
            >
              Messina Sans
            </p>
          </Reveal>
          <p className="mt-4 text-[clamp(18px,1.25vw,24px)] leading-[1.2] tracking-[-0.03em]">
            Messina Sans keeps the business clear.
          </p>
        </div>

        <div className="space-y-[clamp(14px,1.35vw,26px)]">
          {applicationRows.map((row, index) => (
            <div
              key={index}
              className="grid items-stretch gap-[clamp(14px,1.5vw,29px)] md:grid-cols-[1.215fr_1fr]"
            >
              <BrandImage item={row[0]} sizes="(min-width: 768px) 52vw, 100vw" />
              <BrandImage item={row[1]} sizes="(min-width: 768px) 43vw, 100vw" />
            </div>
          ))}
        </div>

        <Reveal className="relative mt-[clamp(14px,1.35vw,26px)] aspect-[1816/1022] overflow-hidden" nodeId="201:327">
          <Image
            src="/works/sapphire/world/billboard.webp"
            alt="Sapphire Made for Moments That Matter outdoor billboard"
            fill
            quality={88}
            sizes="(min-width: 1024px) 95vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
