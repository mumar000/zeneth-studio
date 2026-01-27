"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjectsSection() {
  const projectsSectionRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  const projects = [
    {
      name: "Nugget Spot",
      image: "/services2.webp",
      year: "",
      category: "Branding",
      description: "Reinventing fast food culture with a modern twist.",
    },
    {
      name: "LidoHoney",
      image: "/frame-2.webp",
      year: "",
      category: "E-Commerce",
      description: "Sweet digital experiences for a luxury honey brand.",
    },
    {
      name: "Feroce",
      image: "/services3.webp",
      year: "",
      category: "Web Design",
      description: "Bold aesthetics for a high-end fashion label.",
    },
    {
      name: "Keenbyte",
      image: "/services1.webp",
      year: "",
      category: "SaaS Product",
      description: "Streamlining data analytics for enterprise.",
    },
    {
      name: "LetsGrub",
      image: "/services3.webp",
      year: "",
      category: "Mobile App",
      description: "Social dining app connecting foodies globally.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // We duplicate the list to create the visual "wall of text"
  // But we align based on the first item of the first set.
  const displayProjects = [...projects, ...projects, ...projects];

  useLayoutEffect(() => {
    const section = projectsSectionRef.current;
    const imagesContainer = imagesContainerRef.current;
    const textContainer = textContainerRef.current;

    let ctx = gsap.context(() => {
      // --- DIMENSIONS ---
      const imageItemHeight = 70; // 70vh
      const imageGap = 5; // 5vh
      const imageUnit = imageItemHeight + imageGap; // 75vh total per scroll unit

      const textItemHeight = 10; // 10vh

      const numOriginal = projects.length;

      // Distance to scroll (Number of items - 1)
      const totalImageScroll = (numOriginal - 1) * imageUnit;
      const totalTextScroll = (numOriginal - 1) * textItemHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: ".projects-sticky-container",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Scroll Images
      tl.to(
        imagesContainer,
        {
          y: `-${totalImageScroll}vh`,
          ease: "none",
        },
        0,
      );

      // 2. Scroll Text
      tl.to(
        textContainer,
        {
          y: `-${totalTextScroll}vh`,
          ease: "none",
        },
        0,
      );
    }, projectsSectionRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section
      ref={projectsSectionRef}
      className="relative  z-60"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full opacity-40 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full opacity-30 blur-[150px] pointer-events-none" />

      <div className="projects-sticky-container top-0 h-screen w-full flex items-center justify-center px-4 md:px-12 lg:px-8 -mt-10">
        <div className="relative w-full max-w-[1800px] h-[90vh] bg-slate-950 backdrop-blur-sm border border-white/20 rounded-[28px] overflow-hidden shadow-2xl shadow-purple-500/10">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* --- LEFT SIDE (TEXT) --- */}
            <div className="flex flex-col h-full relative justify-center p-6 lg:p-12 z-20">
              <div className="absolute top-0 left-0 w-full p-8 lg:p-12 z-40">
                <p
                  className="text-sm text-purple-400/80 tracking-wider uppercase font-medium"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Featured Projects
                </p>
              </div>

              {/* Text Window Container (55vh height) */}
              <div
                className="relative w-full h-[55vh] overflow-hidden flex flex-col"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                }}
              >
                <div
                  ref={textContainerRef}
                  className="flex flex-col pl-4"
                  style={{
                    willChange: "transform",

                    paddingTop: "22.5vh",
                  }}
                >
                  {displayProjects.map((project, index) => {
                    const realIndex = index % projects.length;
                    const isHovered = hoveredIndex === realIndex;

                    return (
                      <div
                        key={index}
                        className="flex items-baseline gap-3 shrink-0 cursor-pointer group"
                        style={{ height: "10vh" }} // Fixed Height
                        onMouseEnter={() => setHoveredIndex(realIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <h3
                          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight transition-all duration-300 ${
                            isHovered
                              ? "text-purple-400 translate-x-4"
                              : "text-white"
                          }`}
                          style={{ fontFamily: "var(--font-sora)" }}
                        >
                          {project.name}
                        </h3>
                        <span
                          className={`text-xs md:text-sm font-mono transition-colors duration-300 mb-auto mt-2 ${
                            isHovered ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {project.year}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-black  via-black/80 to-transparent z-20 pointer-events-none" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-40">
                <motion.button
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  style={{ fontFamily: "var(--font-sora)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                </motion.button>
              </div>
            </div>

            {/* --- RIGHT SIDE (IMAGES) --- */}
            <div className="relative w-full h-full overflow-hidden p-4 md:p-8 flex items-start justify-center">
              <div
                ref={imagesContainerRef}
                className="flex flex-col w-full"
                style={{
                  willChange: "transform",

                  marginTop: "calc(50% - 35vh)",
                  gap: "5vh",
                }}
              >
                {projects.map((project, index) => {
                  const isActive = hoveredIndex === index;

                  return (
                    <div
                      key={index}
                      className="relative w-full shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                      style={{ height: "70vh" }}
                    >
                      <div
                        className={`relative w-full h-full transition-transform duration-700 ease-out ${
                          isActive ? "scale-110" : "scale-100"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className={`object-cover transition-all duration-500 ${
                            isActive
                              ? "blur-sm brightness-50"
                              : "blur-0 brightness-100"
                          }`}
                          priority={index === 0}
                        />
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20"
                          >
                            <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-purple-400 font-mono text-xs uppercase tracking-widest">
                                  {project.category}
                                </span>
                                <span className="text-white/60 font-mono text-xs">
                                  {project.year}
                                </span>
                              </div>
                              <h4
                                className="text-3xl font-bold text-white mb-2"
                                style={{ fontFamily: "var(--font-sora)" }}
                              >
                                {project.name}
                              </h4>
                              <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-md">
                                {project.description}
                              </p>

                              <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-4 transition-all cursor-pointer">
                                <span>View Case Study</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
