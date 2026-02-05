"use client";

import { motion } from "framer-motion";

export default function StaggeredText({
  text,
  className = "",
  as = "p",
  staggerDelay = 0.03,
  initialDelay = 0,
}) {
  const Component = motion[as];

  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
      },
    },
  };

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Component>
  );
}
