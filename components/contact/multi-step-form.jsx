"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className="min-h-screen bg-[#fffcf7] mt-30 px-6 md:px-12 lg:px-24 py-32">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-40">
        {/* Step 1: Project Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-7xl flex flex-col tracking-tighter  items-center justify-center  lg:text-8xl font-[500] text-black ">
            Tell us a bit about your{" "}
            <span className="italic font-romie font-semibold text-primary">
              Project.
            </span>
          </h2>
        </motion.section>

        {/* Step 2: Personal Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="lg:text-4xl  text-black font-[300] flex justify-center leading-tight">
            Tell us a bit about yourself.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <label className="block text-gray-800 text-xl md:text-2xl mb-4">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl  focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-xl md:text-2xl">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl pb-4 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-800 text-xl md:text-2xl">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                className="w-full bg-transparent border-b  border-gray-300 text-gray-800 text-xl pb-4 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
        </motion.section>

        {/* Step 3: Company Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="lg:text-4xl font-romie  text-black font-[300] flex justify-center leading-tight">
            Tell us about your company in 2-3 sentences.
          </h2>
          <div className="space-y-12">
            <div>
              <label className="block text-gray-800 text-xl md:text-2xl mb-4">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl pb-4 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <textarea
              value={formData.companyDescription}
              onChange={(e) =>
                updateFormData("companyDescription", e.target.value)
              }
              placeholder="Start typing here...."
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl pb-6 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 resize-none min-h-[120px]"
            />
          </div>
        </motion.section>

        {/* Step 4: Creative Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="lg:text-4xl font-romie text-black font-[300] flex justify-center leading-tight">
              Describe your creative vision in 2–3 sentences.
            </h2>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-light text-black">
                Think Vibe, mood, Style, or any visual references that inspire
                you.
              </p>
              <p className="text-lg text-black">
                (pinterest or figma links welcome!)
              </p>
            </div>
          </div>
          <textarea
            value={formData.creativeVision}
            onChange={(e) => updateFormData("creativeVision", e.target.value)}
            className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl pb-6 focus:outline-none focus:border-black transition-colors resize-none min-h-[120px]"
          />
        </motion.section>

        {/* Step 5: Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="lg:text-4xl font-romie text-center text-black font-[300] flex justify-center leading-tight">
            Are you looking for a visual identity, or would you like strategy
            and/or a website as well?
          </h2>
          <div className="grid grid-cols-1 font-romie font-light max-w-4xl mx-auto md:grid-cols-3 gap-8 md:gap-12">
            {["Visual identity", "Brand Strategy", "Website"].map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`flex items-center font-light gap-4 text-left text-2xl md:text-3xl transition-all ${
                  formData.services.includes(service)
                    ? "text-black"
                    : "text-black"
                }`}
              >
                <div
                  className={`w-7 h-7 border-2 rounded transition-all flex-shrink-0 ${
                    formData.services.includes(service)
                      ? "bg-black border-black"
                      : "border-gray-300"
                  }`}
                />
                {service}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Step 6: Deadline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-2xl text-center lg:text-4xl font-romie font-[300] text-black leading-tight">
            When would you ideally like your new brand to be ready?
          </h2>
          <div>
            <label className="block text-gray-800 text-xl md:text-2xl mb-4">
              Deadline in...
            </label>
            <input
              type="text"
              value={formData.deadline}
              onChange={(e) => updateFormData("deadline", e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 text-gray-800 text-xl pb-4 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </motion.section>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12"
        >
          <motion.button
            type="submit"
            className="inline-flex  items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-xl font-[500] shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
}
