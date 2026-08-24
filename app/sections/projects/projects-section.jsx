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
      name: "Spreadshop",
      href: "/works/spreadshop",
      image: "/works/spreadshop/hero.png",
      year: "",
      category: "E-commerce UX",
      description:
        "A creator storefront redesigned around discoverability, trust, and conversion.",
      tags: [
        { label: "Product Design", tone: "purple" },
        { label: "E-commerce", tone: "yellow" },
      ],
    },
    {
      name: "Sapphire Pools",
      href: "/works/sapphire",
      image: "/works/sapphire/hero/project-card.webp",
      year: "",
      category: "Brand + Website",
      description:
        "A quiet-luxury pool brand built to earn trust before its portfolio existed.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "Web Development", tone: "yellow" },
      ],
    },
    {
      name: "ARPM",
      href: "/works/arpm",
      image: "/works/arpm/hero/hero-card-2x.png",
      year: "",
      category: "Interface + Development",
      description:
        "A stalled property platform redesigned, rebuilt, and brought live.",
      tags: [
        { label: "Interface Design", tone: "purple" },
        { label: "Web Development", tone: "yellow" },
      ],
    },
    {
      name: "Mogul Bay",
      href: "/works/mogulbay",
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
      href: "/works/lets-grub",
      image: "/works/lets-grub/hero/hero-4x.png",
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
      href: "/works/feroce",
      image: "/feroce/branding-feroce-page-0001-1.webp",
      year: "",
      category: "Brand Identity",
      description: "A fearless visual system built for speed and precision.",
      tags: [
        { label: "Brand Identity", tone: "purple" },
        { label: "Art Direction", tone: "yellow" },
      ],
    },
    // {
    //   name: "Voyager",
    //   href: "/works/voyager-supplements",
    //   image: "/voyager/image_5.webp",
    //   year: "",
    //   category: "Brand + E-commerce",
    //   description: "A performance brand built around clean, credible power.",
    //   tags: [
    //     { label: "Brand Identity", tone: "purple" },
    //     { label: "E-commerce", tone: "yellow" },
    //   ],
    // },
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
      if (!window.matchMedia("(min-width: 768px)").matches) return;

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
    <>
      <section className="relative z-10 bg-[#fffcf7] px-4 py-12 md:hidden">
        <div className="mx-auto max-w-xl">
          <p
            className="text-[10px] font-[700] uppercase tracking-[0.16em] text-primary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Featured Projects
          </p>
          <div className="mt-6 space-y-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <Link
                  href={project.href}
                  className="group block overflow-hidden rounded-[16px] border border-black/15 bg-white shadow-[0_10px_28px_rgba(20,12,35,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ece9e3]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="100vw"
                      quality={70}
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="p-4 pb-4.5 sm:p-5">
                    <p
                      className="text-[9px] font-[700] uppercase tracking-[0.14em] text-primary"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.category}
                    </p>
                    <div className="mt-2.5 flex items-start justify-between gap-3">
                      <h3
                        className="min-w-0 text-[clamp(26px,8vw,34px)] font-[500] leading-[0.98] tracking-[-0.04em] text-[#171717]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.name}
                      </h3>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 bg-[#f5f1e9] text-[15px] text-black/65 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p
                      className="mt-3 max-w-[38ch] text-[12.5px] leading-[1.5] text-black/55"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-black/10 pt-3.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`rounded-full border px-2.5 py-1.5 text-[8px] font-[700] uppercase tracking-[0.08em] ${
                            tag.tone === "yellow"
                              ? "border-black/10 bg-[var(--accent-yellow)]/70 text-black/75"
                              : "border-primary/15 bg-primary/10 text-primary"
                          }`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <Link
            href="/works"
            className="mt-8 inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-5 py-3 text-[10px] font-[800] uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_0_#000]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section
        ref={projectsSectionRef}
        className="relative z-50 hidden md:block"
        style={{ height: `${projects.length * 100}vh` }}
      >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full opacity-40 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0  w-[600px] h-[600px] bg-primary/15 rounded-full opacity-30 blur-[150px] pointer-events-none" />

      <div
        ref={stickyContainerRef}
        className="projects-sticky-container flex h-dvh w-full items-center justify-center px-3 sm:px-5 lg:px-8"
      >
        <div className="relative h-[82dvh] w-full max-w-[1800px] overflow-hidden rounded-[20px] border border-white/20 bg-[#060606] shadow-2xl shadow-primary/10 sm:rounded-[28px]">
          <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
            {/* --- LEFT SIDE (TEXT) --- */}
            <div className="relative z-20 hidden h-full min-w-0 flex-col justify-center p-6 md:flex lg:p-10 xl:p-12">
              <div className="absolute top-0 left-0 w-full p-8 lg:p-12 z-40">
                <p
                  className="text-xs lg:text-sm md:text-xs font-medium uppercase tracking-wider text-primary/80"
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
                        className="group flex h-[10vh] min-w-0 shrink-0 cursor-pointer items-center gap-3 xl:gap-4"
                        onMouseEnter={() => setHoveredIndex(realIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <h3
                          className={`min-w-0 origin-left whitespace-nowrap xl:max-w-[52%] xl:truncate 2xl:max-w-none 2xl:text-[88.59px] lg:text-6xl md:text-5xl font-[500] leading-none tracking-tight transition-colors duration-500 ease-out ${
                            isActive
                              ? "text-white"
                              : "text-white/30"
                          }`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.name}
                        </h3>
                        <div
                          className={`hidden min-w-0 flex-1 flex-wrap items-center gap-1.5 transition-all duration-500 xl:flex xl:max-w-[46%] 2xl:max-w-none 2xl:gap-2 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-3 pointer-events-none"
                          }`}
                        >
                          {project.tags?.map((tag) => (
                            <span
                              key={tag.label}
                              className="max-w-full whitespace-normal break-words rounded-md px-2 py-1.5 text-[9px] font-medium uppercase leading-[1.1] tracking-wider 2xl:whitespace-nowrap 2xl:px-2.5 2xl:text-xs"
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
                                <span className="font-mono text-xs uppercase tracking-widest text-primary">
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

                              <div className="mb-5 flex flex-wrap gap-2">
                                {project.tags?.map((tag) => (
                                  <span
                                    key={tag.label}
                                    className={`rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase leading-none tracking-wider ${
                                      tag.tone === "yellow"
                                        ? "bg-[var(--accent-yellow)] text-black"
                                        : "bg-primary text-white"
                                    }`}
                                    style={{ fontFamily: "var(--font-mono)" }}
                                  >
                                    {tag.label}
                                  </span>
                                ))}
                              </div>

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
    </>
  );
}
