"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  // Placeholder logos - user will replace these with actual images
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo1.png",
    "/logos/logo2.png",
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full h-[80vh]  bg-[#0f0a1a] py-16 lg:py-20 overflow-hidden z-60">
      {/* Mesh Gradient - Top Right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full opacity-40 blur-[150px] pointer-events-none" />

      {/* Mesh Gradient - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full opacity-30 blur-[150px] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 py-20 ">
        {/* Text Content */}
        <div className="flex flex-col px-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold  leading-tight "
            style={{
              fontFamily: "var(--font-sora)",
            }}
          >
            <div>
              We cook{" "}
              <span className="text-primary">logos, branding, & websites</span>
            </div>
            <div>that hit diff. Pretty and functional. Like</div>
            <div>your fav influencer’s feed.</div>
          </h2>
        </div>

        {/* Infinite Logo Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0  bottom-0 w-32 bg-gradient-to-r from-[#0f0a1a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0a1a] to-transparent z-10" />

          {/* Slider Container */}
          <motion.div
            className="flex items-center gap-16 py-8"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 w-32 h-16 md:w-50  md:h-50 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-100 hover:opacity-100"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
