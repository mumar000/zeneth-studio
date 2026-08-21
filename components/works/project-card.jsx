"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function getContrastColor(hexColor) {
  const hex = hexColor.replace("#", "");
  const normalized =
    hex.length === 3
      ? hex
          .split("")
          .map((character) => character + character)
          .join("")
      : hex;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (red * 299 + green * 587 + blue * 114) / 1000;

  return luminance > 150 ? "#171717" : "#ffffff";
}

export default function ProjectCard({
  project,
  onHover,
  onLeave,
  priority = false,
}) {
  return (
    <motion.div
      layout
      className="group relative w-full max-w-[320px] cursor-none"
      style={{
        "--project-hover": project.accent,
        "--project-hover-text": getContrastColor(project.accent),
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, y: 12, scale: 0.96 }}
    >
      <Link
        href={`/works/${project.slug}`}
        className="block overflow-hidden rounded-[2rem] border-2 border-transparent bg-white transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:border-black hover:bg-[var(--project-hover)] hover:shadow-[5px_5px_0_0_#000] focus-visible:translate-x-[3px] focus-visible:translate-y-[3px] focus-visible:border-black focus-visible:bg-[var(--project-hover)] focus-visible:shadow-[5px_5px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        {/* Image Container - Reduced margin/padding to match the slim border in the image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority={priority}
            />
          </motion.div>
        </div>

        {/* Content Area - Scaled down font and padding */}
        <div className="flex items-center justify-between px-6 py-4 transition-colors duration-200">
          <h3 className="text-2xl font-medium tracking-tight text-[#1a1a1a] transition-colors duration-200 group-hover:text-[var(--project-hover-text)] group-focus-within:text-[var(--project-hover-text)]">
            {project.title}
          </h3>

          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight
              strokeWidth={1.5}
              className="h-8 w-8 text-black transition-colors duration-200 group-hover:text-[var(--project-hover-text)] group-focus-within:text-[var(--project-hover-text)]"
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
