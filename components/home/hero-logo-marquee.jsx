"use client";

import { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useAnimationConfig } from "@/hooks/use-performance";

const LOGO_HEIGHT = 30;
const CLIENT_LOGOS = [
  { src: "/home-logo/home-logo1.png", w: 204 },
  { src: "/home-logo/home-logo2.png", w: 100 },
  { src: "/home-logo/home-logo3.png", w: 150 },
  { src: "/home-logo/home-logo4.png", w: 116 },
  { src: "/home-logo/home-logo5.png", w: 100 },
  { src: "/home-logo/home-logo6.png", w: 100 },
  { src: "/home-logo/home-logo7.png", w: 100 },
  { src: "/home-logo/home-logo8.png", w: 129 },
];

export default function HeroLogoMarquee() {
  const marqueeRef = useRef(null);
  const marqueeInView = useInView(marqueeRef, { amount: 0.01 });
  const animConfig = useAnimationConfig();

  return (
    <motion.div
      ref={marqueeRef}
      className="absolute inset-x-0 bottom-0"
      initial={{ y: animConfig.enabled ? "100%" : "0%" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 1.1 * animConfig.durationMultiplier,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Marquee
        play={marqueeInView}
        gradient
        gradientColor="#ffffff"
        gradientWidth={64}
        speed={animConfig.enabled ? 55 : 40}
        pauseOnHover={false}
        className="py-4 sm:py-5 md:py-6"
      >
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            src={logo.src}
            width={logo.w}
            height={LOGO_HEIGHT}
            alt="Client logo"
            className="mx-7 object-contain opacity-80 grayscale sm:mx-9 md:mx-12"
          />
        ))}
      </Marquee>
    </motion.div>
  );
}
