"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectDescription: "",
    name: "",
    email: "",
    companyName: "",
    companyDescription: "",
    creativeVision: "",
    services: [],
    deadline: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // Step configurations
  const steps = [
    {
      id: "project",
      title: "Tell us a bit about your",
      highlight: "Project.",
      content: (
        <div className="space-y-8">
          <textarea
            value={formData.projectDescription}
            onChange={(e) =>
              updateFormData("projectDescription", e.target.value)
            }
            placeholder="Start typing here...."
            className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg md:text-xl pb-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 resize-none min-h-[100px]"
            style={{ fontFamily: "inherit" }}
          />
        </div>
      ),
    },
    {
      id: "personal",
      title: "Tell us a bit about",
      highlight: "yourself.",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <label className="block text-gray-800 text-base md:text-lg mb-3">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-base md:text-lg mb-3">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      ),
    },
    {
      id: "company",
      title: "Tell us about your company in 2-3 sentences.",
      content: (
        <div className="space-y-8">
          <div>
            <label className="block text-gray-800 text-base md:text-lg mb-3">
              Company Name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => updateFormData("companyName", e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <textarea
              value={formData.companyDescription}
              onChange={(e) =>
                updateFormData("companyDescription", e.target.value)
              }
              placeholder="Start typing here...."
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 resize-none min-h-[100px]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "vision",
      title: "Describe your creative vision in 2-3 sentences.",
      subtitle:
        "Think Vibe, mood, Style, or any visual references that inspire you.",
      subtitleSmall: "(pinterest or figma links welcome!)",
      content: (
        <div className="space-y-6">
          <textarea
            value={formData.creativeVision}
            onChange={(e) => updateFormData("creativeVision", e.target.value)}
            placeholder=""
            className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 resize-none min-h-[150px]"
          />
        </div>
      ),
    },
    {
      id: "services",
      title:
        "Are you looking for a visual identity, or would you like strategy and/or a website as well?",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {["Visual identity", "Brand Strategy", "Website"].map((service) => (
            <button
              key={service}
              onClick={() => toggleService(service)}
              className={`flex items-center gap-3 text-left text-lg md:text-xl transition-all ${
                formData.services.includes(service)
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 border-2 rounded transition-all ${
                  formData.services.includes(service)
                    ? "bg-black border-black"
                    : "border-gray-300"
                }`}
              />
              {service}
            </button>
          ))}
        </div>
      ),
    },
    {
      id: "deadline",
      title: "When would you ideally like your new brand to be ready?",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-800 text-base md:text-lg mb-3">
              Deadline in...
            </label>
            <input
              type="text"
              value={formData.deadline}
              onChange={(e) => updateFormData("deadline", e.target.value)}
              placeholder=""
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-lg pb-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <section className="min-h-screen bg-[#fffcf7] flex items-center justify-center px-6 md:px-12 py-20">
      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-[400] text-black leading-tight">
                {currentStepData.title}{" "}
                {currentStepData.highlight && (
                  <span className="italic font-romie text-purple-600">
                    {currentStepData.highlight}
                  </span>
                )}
              </h2>
              {currentStepData.subtitle && (
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-gray-600">
                    {currentStepData.subtitle}
                  </p>
                  {currentStepData.subtitleSmall && (
                    <p className="text-base text-gray-500">
                      {currentStepData.subtitleSmall}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="pt-8">{currentStepData.content}</div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-gray-200">
              {currentStep === steps.length - 1 ? (
                <motion.button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-lg font-[500] shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                  <ArrowRight size={20} />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-lg font-[500] shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next
                  <ArrowRight size={20} />
                </motion.button>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "w-12 bg-purple-600"
                      : index < currentStep
                      ? "w-8 bg-purple-400"
                      : "w-8 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
