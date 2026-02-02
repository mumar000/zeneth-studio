"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, onHover, onLeave }) {
  return (
    <motion.div
      // Reduced max-width to 320px for a smaller card
      className="group relative overflow-hidden rounded-[2rem]  border-slate-200 border bg-white cursor-none w-full max-w-[320px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Container - Reduced margin/padding to match the slim border in the image */}
      <div className="relative aspect-[4/5] overflow-hidden  rounded-[1.8rem]">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Content Area - Scaled down font and padding */}
      <div className="px-6 py-4 flex items-center justify-between">
        <h3 className="text-2xl font-medium tracking-tight text-[#1a1a1a]">
          {project.title}
        </h3>

        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight strokeWidth={1.5} className="w-8 h-8 text-black" />
        </motion.div>
      </div>
    </motion.div>
  );
}
