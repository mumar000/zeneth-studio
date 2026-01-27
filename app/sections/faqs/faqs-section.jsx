"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const faqData = [
  {
    question: "What are your areas of focus as a UI/UX and web design agency?",
    answer:
      "We focus on creating user-centric digital experiences, specializing in responsive web design, mobile app interfaces, and comprehensive design systems that align with brand identity.",
  },
  {
    question:
      "Do you work with startups? If so, how can my early-stage company afford you?",
    answer:
      "Yes, we love working with startups! We offer flexible pricing models and phased design approaches specifically tailored for early-stage companies to help you launch an MVP without breaking the bank.",
  },
  {
    question: "How much does hiring you for a design project cost?",
    answer:
      "Project costs vary depending on scope, complexity, and timeline. We typically provide a custom quote after an initial discovery call to understand your specific needs.",
  },
  {
    question:
      "What does the initial process of exploring a partnership look like?",
    answer:
      "It starts with a free consultation call where we discuss your goals. Then, we provide a proposal outlining the scope, timeline, and deliverables before kicking off the design phase.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-500/20 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-colors"
      >
        <span className="text-lg md:text-3xl font-medium text-white group-hover:text-purple-400 transition-colors duration-300 pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="flex-shrink-0 text-white"
        >
          <ArrowDown className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f0a1a] relative min-h-screen w-full px-6 py-8 md:px-12 lg:px-12 flex flex-col justify-center">
      <div className="absolute top-1/4 -left-20   h-[100px] w-[400px] rounded-full bg-[#8a38f5]/50 blur-[120px] pointer-events-none" />

      <div className="px-10 w-full">
        {/* Header */}
        <div className="w-full  mb-16">
          <h2
            className="text-5xl md:text-7xl font-medium text-white tracking-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            FAQ<span className="text-[#8a38f5]">'S</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-purple-500/20 mb-16">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
