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
    <div className="border-b border-primary/20 last:border-none">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between py-5 text-left transition-colors md:py-8"
      >
        <span className="pr-5 text-base font-medium leading-snug text-white transition-colors duration-300 group-hover:text-primary md:pr-8 md:text-3xl">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="flex-shrink-0 text-white"
        >
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
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
            <div className="max-w-4xl pb-5 text-sm leading-relaxed text-gray-400 md:pb-8 md:text-xl">
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
    <section className="relative flex w-full flex-col justify-center bg-[#0f0a1a] px-4 py-14 md:min-h-screen md:px-12 md:py-8 lg:px-12">
      <div className="absolute top-1/4 -left-20 h-[100px] w-[400px] rounded-full bg-primary/50 blur-[120px] pointer-events-none" />

      <div className="w-full md:px-10">
        {/* Header */}
        <div className="mb-8 w-full md:mb-16">
          <h2
            className="text-3xl font-medium tracking-tight text-white md:text-7xl"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            FAQ<span className="text-primary">&apos;S</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="mb-8 border-t border-primary/20 md:mb-16">
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
          <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(114,33,252,0.3)] transition-all duration-300 hover:scale-105 hover:bg-primary-700 md:px-8 md:py-3 md:text-lg">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
