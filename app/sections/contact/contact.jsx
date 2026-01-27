"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#0f0a1a] w-full flex items-center justify-center p-4 md:p-8 lg:p-12">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-8xl bg-black rounded-[2rem] md:rounded-[1rem] overflow-hidden p-8 md:p-16 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Title & Sticker Image */}
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <div className="flex items-center gap-4">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white">
                <span className="text-[#8b5cf6]">Let’s</span> Connect
              </h1>
              <ArrowRight className="text-[#8b5cf6] w-10 h-10 md:w-14 md:h-14 mt-2" />
            </div>

            {/* Sticker Image Card */}
            <div className="relative w-full  bg-white rounded-2xl p-3 md:p-4 shadow-2xl  hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="relative w-full h-full bg-[#e5e5e5] overflow-hidden">
                <img
                  src="/contact.gif"
                  alt="Project Preview"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Text inside image (optional based on screenshot) */}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl text-white font-medium mb-12">
              Tell us about your project
            </h3>

            <form className="space-y-10 w-full">
              {/* Name Input */}
              <div className="group">
                <label className="block text-white text-lg mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-700 text-gray-300 pb-4 text-lg focus:outline-none focus:border-[#8b5cf6] transition-colors placeholder:text-gray-600"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-white text-lg mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="John Doe@mail.com"
                  className="w-full bg-transparent border-b border-gray-700 text-gray-300 pb-4 text-lg focus:outline-none focus:border-[#8b5cf6] transition-colors placeholder:text-gray-600"
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-white text-lg mb-2">
                  Your Message
                </label>
                <textarea
                  rows="1"
                  placeholder="Type Something...."
                  className="w-full bg-transparent border-b border-gray-700 text-gray-300 pb-4 text-lg focus:outline-none focus:border-[#8b5cf6] transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-lg font-medium py-4 px-10 rounded-full w-auto transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.6)] hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
