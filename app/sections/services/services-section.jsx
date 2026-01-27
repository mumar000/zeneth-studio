"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    url: "/services4.gif",
    title: "Branding",
    description: "Building",
    category: "Ui/Ux",
    id: 1,
  },
  {
    url: "/services1.webp",
    title: "Mobile",
    description: "Applications",
    category: "iOS/Android",
    id: 2,
  },
  {
    url: "/services2.webp",
    title: "Development",
    description: "Full Stack",
    category: "Tech",
    id: 3,
  },
  {
    url: "/services3.webp",
    title: "Strategy",
    description: "Growth",
    category: "Business",
    id: 4,
  },
];

const ServicesSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Calculate the total scrollable width
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0a1a] flex flex-col justify-center">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Floating Badge */}
      <div className="text-left px-18 pb-10">
        <div className="inline-block border bg-primary/50 border-purple-500/50 rounded-full px-6 py-2 mb-4">
          <h1
            className="text-lg sm:text-xl md:text-xl font-light"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Our Expertise
          </h1>
        </div>
      </div>

      {/* Slider Container */}
      <div className="pl-6 md:pl-18 w-full h-[75vh] md:h-[80vh]">
        <motion.div
          ref={carousel}
          className="cursor-grab active:cursor-grabbing overflow-hidden h-full"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            // Increased gap slightly for aesthetic, but much smaller than before
            className="flex gap-4 md:gap-6 h-full w-max"
          >
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      // Decreased width so multiple cards are visible (slider effect)
      className="relative w-[85vw] md:w-[45vw] lg:w-[35vw] h-full flex-shrink-0 rounded-3xl overflow-hidden group"
    >
      {/* Image Container with Hover Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={card.url}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

      {/* Card number */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 text-white/20 text-5xl md:text-8xl font-bold leading-none font-outline select-none">
        {String(card.id).padStart(2, "0")}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 select-none">
        <div className="flex flex-col gap-2">
          <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">
            {card.category}
          </span>
          <h3
            style={{ fontFamily: "var(--font-sora)" }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {card.title}
          </h3>
          <p className="text-gray-400 text-lg md:text-xl mt-2">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
