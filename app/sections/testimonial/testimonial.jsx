import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ut mi eget ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ex vel sollicitudin tincidunt.",
    name: "Drew",
    role: "Founder The Nugget Spot",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "The team delivered beyond our expectations. The UI is buttery smooth and the backend is rock solid. Absolutely recommended for any high-scale project.",
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "We saw a 200% increase in user retention after the redesign. The attention to detail in the animations was the game changer for our app.",
    name: "Michael Ross",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d6229b?q=80&w=1000&auto=format&fit=crop",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0f0a1a] py-24 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-20  h-[300px] w-[600px] rounded-full bg-[#8a38f5]/50 blur-[120px] pointer-events-none" />

      {/* Header - Removed max-w-7xl, allows full width alignment */}
      <div className="w-full px-12 mb-16">
        <h2
          className="text-5xl md:text-7xl font-medium text-white tracking-tight"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          What <span className="text-[#8a38f5]">our clients</span> say
        </h2>
      </div>

      {/* Slider Area */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {testimonials.map((testimonial, index) => {
            // Logic to determine position: Center (0), Left (-1), Right (1)
            let offset = index - currentIndex;
            if (offset > 1) offset -= testimonials.length;
            if (offset < -1) offset += testimonials.length;

            const isCenter = offset === 0;

            // Hide cards that are not center, left, or right
            if (Math.abs(offset) > 1) return null;

            return (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, x: offset * 100, scale: 0.8 }}
                animate={{
                  opacity: isCenter ? 1 : 0.5, // Dim side cards
                  x: offset * 1050, // Spacing between cards (adjusted for 1000px width)
                  scale: isCenter ? 1 : 0.85, // Shrink side cards
                  zIndex: isCenter ? 10 : 0,
                  filter: isCenter ? "blur(0px)" : "blur(1px)", // Slight blur on sides
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                style={{ fontFamily: "var(--font-sora)" }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex w-[1100px] h-[500px] overflow-hidden rounded-[40px] shadow-2xl
                  ${
                    isCenter ? "bg-white" : "bg-[#202020] border border-white/5"
                  }
                `}
              >
                {/* LEFT SIDE: Content */}
                <div
                  className={`flex flex-col justify-between p-12 w-[50%] ${
                    isCenter ? "text-black" : "text-white"
                  }`}
                >
                  {/* Testimonial Text */}
                  <div className="mt-4">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Avatar & Name */}
                  <div className="flex items-center gap-5 mt-auto">
                    {/* Placeholder Avatar Box */}
                    <div
                      className={`h-16 w-16 rounded-2xl ${
                        isCenter ? "bg-gray-200" : "bg-white/10"
                      }`}
                    ></div>

                    <div>
                      <h4
                        className={`text-xl font-bold ${
                          isCenter ? "text-black" : "text-white/50"
                        }`}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`text-sm font-medium ${
                          isCenter ? "text-gray-600" : "text-white/30"
                        }`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="relative w-[50%] h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="absolute inset-0 rounded-[40px] h-full w-full object-cover"
                  />
                  {/* Dark overlay for side cards only */}
                  {!isCenter && <div className="absolute inset-0 bg-white" />}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute bottom-[-60px] flex gap-4 z-20">
          <button
            onClick={handlePrev}
            className="h-14 w-14 rounded-full border border-white/20 bg-white/5 text-white hover:bg-[#8a38f5] hover:border-[#8a38f5] flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="h-14 w-14 rounded-full border border-white/20 bg-white/5 text-white hover:bg-[#8a38f5] hover:border-[#8a38f5] flex items-center justify-center transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
