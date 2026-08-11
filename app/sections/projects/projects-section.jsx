"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectsSection() {
  const projectsSectionRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const activeIndexRef = useRef(0);

  const projects = [
    {
      name: "Mogul Bay",
      image: "/mogulbay/1.webp",
      year: "",
      category: "Brand + Web App",
      description: "A fintech identity that tracks finances with clarity.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "Website + Web App", tone: "yellow" },
      ],
    },
    {
      name: "Let's Grub",
      image: "/let-grub/frame-1948758999.webp",
      year: "",
      category: "Brand Identity",
      description: "A social dining identity built around shared discovery.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "Digital Product", tone: "yellow" },
      ],
    },
    {
      name: "Feroce",
      image: "/feroce/branding-feroce-page-0001-1.webp",
      year: "",
      category: "Brand Identity",
      description: "A fearless visual system built for speed and precision.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "Art Direction", tone: "yellow" },
      ],
    },
    {
      name: "Voyager",
      image: "/voyager/image_5.webp",
      year: "",
      category: "Brand + E-commerce",
      description: "A performance brand built around clean, credible power.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "E-commerce", tone: "yellow" },
      ],
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Render one sequence so the final project ends cleanly before the next section.
  const displayProjects = projects;

  useEffect(() => {
    const section = projectsSectionRef.current;
    const stickyContainer = stickyContainerRef.current;
    const imagesContainer = imagesContainerRef.current;
    const textContainer = textContainerRef.current;
    if (!section || !stickyContainer || !imagesContainer || !textContainer)
      return;

    let cancelled = false;
    let ctx;

    const setupScroller = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const getScrollDistance = (container) => {
          const items = container.children;
          if (items.length < 2) return 0;

          return items[items.length - 1].offsetTop - items[0].offsetTop;
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: stickyContainer,
            pinSpacing: false,
            anticipatePin: 1,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                projects.length - 1,
                Math.round(self.progress * (projects.length - 1)),
              );

              if (nextIndex !== activeIndexRef.current) {
                activeIndexRef.current = nextIndex;
                setActiveIndex(nextIndex);
              }
            },
          },
        });

        tl.to(
          imagesContainer,
          {
            y: () => -getScrollDistance(imagesContainer),
            ease: "none",
          },
          0,
        );

        tl.to(
          textContainer,
          {
            y: () => -getScrollDistance(textContainer),
            ease: "none",
          },
          0,
        );
      }, projectsSectionRef);

      ScrollTrigger.refresh();
    };

    setupScroller();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [projects.length]);

  return (
    <section
      ref={projectsSectionRef}
      className="relative z-50"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full opacity-40 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0  w-[600px] h-[600px] bg-primary/15 rounded-full opacity-30 blur-[150px] pointer-events-none" />

      <div
        ref={stickyContainerRef}
        className="projects-sticky-container flex h-dvh w-full items-center justify-center px-3 sm:px-5 lg:px-8"
      >
        <div className="relative h-[82dvh] w-full max-w-[1800px] overflow-hidden rounded-[20px] border border-white/20 bg-[#060606] shadow-2xl shadow-purple-500/10 sm:rounded-[28px]">
          <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
            {/* --- LEFT SIDE (TEXT) --- */}
            <div className="relative z-20 hidden h-full min-w-0 flex-col justify-center p-6 md:flex lg:p-10 xl:p-12">
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
                className="relative w-full h-[50vh] overflow-hidden flex flex-col"
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

                    paddingTop: "20vh",
                  }}
                >
                  {displayProjects.map((project, index) => {
                    const realIndex = index % projects.length;
                    const isActive =
                      hoveredIndex === realIndex ||
                      (hoveredIndex === null && activeIndex === realIndex);

                    return (
                      <div
                        key={index}
                        className="group flex h-[10vh] shrink-0 cursor-pointer items-center gap-3 xl:gap-4"
                        onMouseEnter={() => setHoveredIndex(realIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <h3
                          className={`min-w-0 origin-left whitespace-nowrap text-[clamp(1.5rem,3.35vw,4.25rem)] font-bold leading-none tracking-tight transition-colors duration-500 ease-out ${
                            isActive
                              ? "text-white"
                              : "text-white/30"
                          }`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.name}
                        </h3>
                        <div
                          className={`hidden min-w-0 flex-wrap items-center gap-2 transition-all duration-500 xl:flex ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-3 pointer-events-none"
                          }`}
                        >
                          {project.tags?.map((tag) => (
                            <span
                              key={tag.label}
                              className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-wider"
                              style={{
                                fontFamily: "var(--font-mono)",
                                backgroundColor:
                                  tag.tone === "yellow"
                                    ? "var(--accent-yellow)"
                                    : "var(--primary)",
                                color: tag.tone === "yellow" ? "#1a1a1a" : "#fff",
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[15vh]  bg-gradient-to-t from-black  via-black/80 to-transparent z-20 pointer-events-none" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-40">
                <Link
                  href="/works"
                  className="inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-7 py-3.5 text-xs sm:text-sm font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  View All Projects
                </Link>
              </div>
            </div>

            {/* --- RIGHT SIDE (IMAGES) --- */}
            <div className="relative flex h-full min-w-0 items-start justify-center overflow-hidden p-3 sm:p-4 md:p-8">
              <div
                ref={imagesContainerRef}
                className="flex w-full flex-col gap-[4dvh]"
                style={{
                  willChange: "transform",
                }}
              >
                {projects.map((project, index) => {
                  const isActive = hoveredIndex === index;

                  return (
                    <div
                      key={project.name}
                      className="group relative h-[calc(82dvh-1.5rem)] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:h-[calc(82dvh-2rem)] sm:rounded-2xl md:h-[calc(82dvh-4rem)]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
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
                          sizes="(min-width: 1024px) 46vw, 100vw"
                          loading="eager"
                          fetchPriority={index === 0 ? "high" : "auto"}
                          quality={70}
                          className={`object-cover transition-all duration-500 ${
                            isActive
                              ? "blur-sm brightness-50"
                              : "blur-0 brightness-100"
                          }`}
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
