"use client";

import React from "react";

export default function JourneySection() {
  const journeySteps = [
    {
      title: "DISCOVER",
      description:
        "We begin with honesty. What's working. What's not. What's keeping your brand from reaching its peak.",
    },
    {
      title: "Concept",
      description:
        "We connect insight to emotion ideas that look good and move people.",
    },
    {
      title: "Design",
      description:
        "Where thought turns tangible. Every detail, intentional. Every pixel, built to convert.",
    },
    {
      title: "Deliver",
      description:
        "The launch isn't the end it's the <strong>start</strong>. We refine, adapt, and make sure your brand stays loud long after it's live.",
    },
  ];

  const floatingIcons = [
    {
      type: "graffiti-star",
      top: "10%",
      left: "10%",
      size: 50,
    },
    {
      type: "graffiti-arrow",
      top: "20%",
      right: "15%",
      size: 55,
    },
    {
      type: "graffiti-scribble",
      top: "40%",
      left: "5%",
      size: 60,
    },
    {
      type: "graffiti-splash",
      top: "60%",
      right: "8%",
      size: 65,
    },
    {
      type: "graffiti-crown",
      top: "75%",
      left: "12%",
      size: 58,
    },
    {
      type: "graffiti-lightning",
      top: "85%",
      right: "20%",
      size: 52,
    },
    {
      type: "graffiti-star",
      top: "30%",
      left: "85%",
      size: 100,
    },
    {
      type: "graffiti-arrow",
      top: "50%",
      right: "5%",
      size: 60,
    },
    {
      type: "graffiti-scribble",
      top: "15%",
      left: "50%",
      size: 56,
    },
    {
      type: "graffiti-splash",
      top: "70%",
      left: "45%",
      size: 50,
    },
    {
      type: "graffiti-crown",
      top: "25%",
      left: "30%",
      size: 53,
    },
    {
      type: "graffiti-lightning",
      top: "55%",
      left: "75%",
      size: 57,
    },
  ];

  const renderIcon = (type, size) => {
    switch (type) {
      case "graffiti-star":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 10 L58 38 L88 42 L66 62 L72 92 L50 76 L28 92 L34 62 L12 42 L42 38 Z" />
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        );
      case "graffiti-arrow":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 50 Q30 35, 50 50 T85 50" />
            <path d="M70 35 L85 50 L70 65" />
            <path d="M25 45 Q35 40, 45 45" opacity="0.5" />
          </svg>
        );
      case "graffiti-scribble":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 50 Q30 30, 40 50 T60 50 Q70 70, 80 50" />
            <path d="M25 55 Q35 40, 45 55 T65 55" opacity="0.6" />
            <circle cx="50" cy="50" r="15" opacity="0.2" />
          </svg>
        );
      case "graffiti-splash":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 20 L55 40 M50 20 L40 35" />
            <path d="M20 50 L40 52 M20 50 L30 40" />
            <path d="M80 50 L60 48 M80 50 L70 60" />
            <path d="M50 80 L48 60 M50 80 L60 70" />
            <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.2" />
            <circle cx="50" cy="50" r="18" opacity="0.4" />
          </svg>
        );
      case "graffiti-crown":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 70 L25 40 L40 55 L50 30 L60 55 L75 40 L80 70 Z" />
            <line x1="20" y1="70" x2="80" y2="70" strokeWidth="4" />
            <circle cx="25" cy="40" r="4" fill="currentColor" />
            <circle cx="50" cy="30" r="4" fill="currentColor" />
            <circle cx="75" cy="40" r="4" fill="currentColor" />
          </svg>
        );
      case "graffiti-lightning":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M60 10 L30 50 L45 50 L25 90 L65 45 L50 45 Z" />
            <path d="M55 15 L35 48" opacity="0.4" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative bg-[#0f0a1a] min-h-screen overflow-hidden py-20 ">
      {/* Center glow */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[900px] h-[200px]  md:h-[400px] bg-purple-900 rounded-full opacity-30 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 w-full  mx-auto px-4 sm:px-6 lg:px-18">
        {/* Header */}
        <div className="text-left mb-16 sm:mb-20">
          <div className="inline-block border bg-primary/50 border-purple-500/50 rounded-full px-6 py-2 mb-4">
            <h1
              className="text-lg sm:text-xl md:text-xl font-light"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              The Journey
            </h1>
          </div>
        </div>

        {/* Steps - All with hover effect */}
        <div className="space-y-16 sm:space-y-20">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Border - white by default, purple on hover */}
              {index > 0 && (
                <div className="absolute -top-8 sm:-top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-white to-transparent opacity-30 group-hover:from-primary group-hover:via-purple-500 group-hover:opacity-50 transition-all duration-300" />
              )}

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center cursor-pointer">
                <h3
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-white group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base sm:text-lg md:text-2xl text-gray-300 text-start leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: step.description
                      .replace(
                        "<strong>",
                        '<span class="font-bold text-white">'
                      )
                      .replace("</strong>", "</span>"),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
