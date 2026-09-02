"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Brand Identity",
  "Interface Design",
  "Web Development",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "$1K–$2K",
  "$4K–$8K",
  "$10K–$20K",
  "Not sure yet",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  services: [],
  budget: "",
  projectDetails: "",
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({
  id,
  label,
  optional = false,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
}) {
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`peer min-h-14 w-full rounded-[12px] border bg-[#f8f5ff] px-3.5 pb-2 pt-6 text-[16px] font-[500] tracking-[-0.015em] text-[#24202a] outline-none transition-[border-color,box-shadow,background-color] focus:bg-[#fbf9ff] focus:ring-4 sm:min-h-[64px] sm:px-4 sm:pb-2.5 sm:pt-7 sm:text-[17px] ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-[#ded7e8] hover:border-[#bcaed0] focus:border-primary focus:ring-primary/10"
          }`}
          style={{ fontFamily: "var(--font-sora)" }}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-3 top-2 translate-y-0 text-[10px] font-[700] uppercase tracking-[0.09em] text-[#746d7d] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-[500] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-[-0.015em] peer-placeholder-shown:text-[#77717f] peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-[700] peer-focus:uppercase peer-focus:tracking-[0.09em] peer-focus:text-primary sm:left-4 sm:top-2.5 sm:text-[11px] sm:peer-placeholder-shown:text-[17px] sm:peer-focus:top-2.5 sm:peer-focus:text-[11px]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {label}
          {optional && <span className="text-[#938b9d]"> (Optional)</span>}
        </label>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-[13px] font-[500] text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceGroup({
  name,
  label,
  options,
  value,
  onChange,
  multiple = false,
  optional = false,
  error,
}) {
  const isSelected = (option) =>
    multiple ? value.includes(option) : value === option;

  return (
    <fieldset id={name} tabIndex={-1} className="outline-none">
      <div className="flex items-center justify-between gap-3">
        <legend
          className="text-[15px] font-[600] tracking-[-0.015em] text-[#28232d] sm:text-[16px]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {label}
        </legend>
        {optional && (
          <span
            className="text-[10px] font-[700] uppercase tracking-[0.1em] text-[#888190]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Optional
          </span>
        )}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-2.5 sm:flex sm:flex-wrap">
        {options.map((option) => {
          const selected = isSelected(option);
          const optionId = `${name}-${option
            .toLowerCase()
            .replaceAll(/[^a-z0-9]+/g, "-")}`;

          return (
            <label
              key={option}
              htmlFor={optionId}
              className={`inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-[12px] border px-2.5 py-2 text-center text-[12px] font-[600] leading-tight tracking-[-0.01em] transition-[color,background-color,border-color,transform] duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2 sm:w-auto sm:justify-start sm:rounded-full sm:px-5 sm:py-2.5 sm:text-left sm:text-[14px] sm:font-[500] ${
                selected
                  ? "border-[#171717] bg-[#171717] text-white"
                  : "border-[#ded7e8] bg-[#f8f5ff] text-[#625d6d] hover:-translate-y-0.5 hover:border-[#bcaed0] hover:text-[#28232d]"
              }`}
            >
              <input
                id={optionId}
                name={name}
                type={multiple ? "checkbox" : "radio"}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {selected && <Check className="mr-1.5 h-3.5 w-3.5" strokeWidth={3} />}
              {option}
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-1.5 text-[13px] font-[500] text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function ContactForm({ isHighlighted = false }) {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");
  const [serverError, setServerError] = useState("");
  const [startedAt] = useState(() => Date.now());

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setServerError("");
  };

  const toggleService = (service) => {
    const services = formData.services.includes(service)
      ? formData.services.filter((item) => item !== service)
      : [...formData.services, service];
    updateField("services", services);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (
      formData.phone.trim() &&
      formData.phone.replace(/\D/g, "").length < 7
    ) {
      nextErrors.phone = "Enter a valid number or leave this blank.";
    }
    if (!formData.services.length) {
      nextErrors.services = "Choose at least one option.";
    }
    if (formData.projectDetails.trim().length < 10) {
      nextErrors.projectDetails =
        "A short brief helps us point you the right way.";
    }

    return nextErrors;
  };

  const focusFirstError = (nextErrors) => {
    const firstField = Object.keys(nextErrors)[0];
    if (!firstField) return;
    window.requestAnimationFrame(() => {
      document.getElementById(firstField)?.focus();
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors);
      return;
    }

    setSubmitState("sending");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, startedAt }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "We could not send your enquiry.");
      }

      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again.",
      );
    }
  };

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 22 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-start justify-center bg-white px-3 py-5 text-[#171717] sm:px-6 sm:py-8 lg:items-center lg:px-8"
      style={{ fontFamily: "var(--font-sora)" }}
    >
      <AnimatePresence mode="wait">
        {submitState !== "success" ? (
          <motion.form
            key="contact-form"
            id="contact-form"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            onSubmit={submitForm}
            noValidate
            className={`mx-auto flex w-full max-w-[780px] scroll-mt-[88px] flex-col rounded-[22px] border bg-[#fefeff] px-4 py-6 transition-[border-color,box-shadow] duration-500 sm:rounded-[24px] sm:border-black/10 sm:bg-white sm:px-8 sm:py-10 sm:shadow-[0_8px_22px_rgba(23,19,29,0.045)] lg:px-[clamp(34px,4vw,56px)] lg:py-[clamp(40px,4.5vw,60px)] ${
              isHighlighted
                ? "border-primary/50 shadow-[0_0_0_4px_rgba(114,33,252,0.12),0_16px_40px_rgba(72,46,102,0.12)]"
                : "border-black/[0.08] shadow-[0_12px_36px_rgba(72,46,102,0.07)]"
            }`}
          >
            <div className="mb-5 sm:hidden">
              <p
                className="text-[10px] font-[700] uppercase tracking-[0.14em] text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Project enquiry
              </p>
              <h2
                className="mt-1.5 text-[24px] font-[700] leading-[1.1] tracking-[-0.035em] text-[#1d1922]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tell us what you&apos;re building.
              </h2>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#77717f]">
                Share the essentials and we&apos;ll take it from there.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
              <Field
                id="name"
                label="Your name *"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email address *"
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                error={errors.email}
                autoComplete="email"
                inputMode="email"
              />
              <Field
                id="companyName"
                label="Company"
                optional
                value={formData.companyName}
                onChange={(event) =>
                  updateField("companyName", event.target.value)
                }
                autoComplete="organization"
              />
              <Field
                id="phone"
                label="Phone number"
                optional
                type="tel"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div className="mt-5 space-y-5 sm:mt-7 sm:space-y-7">
              <ChoiceGroup
                name="services"
                label="What do you need? *"
                options={SERVICE_OPTIONS}
                value={formData.services}
                onChange={toggleService}
                multiple
                error={errors.services}
              />

              <ChoiceGroup
                name="budget"
                label="Rough investment"
                options={BUDGET_OPTIONS}
                value={formData.budget}
                onChange={(option) => updateField("budget", option)}
                optional
              />

              <div>
                <div className="relative">
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    maxLength={2000}
                    value={formData.projectDetails}
                    onChange={(event) =>
                      updateField("projectDetails", event.target.value)
                    }
                    placeholder=" "
                    aria-invalid={Boolean(errors.projectDetails)}
                    aria-describedby={
                      errors.projectDetails ? "projectDetails-error" : undefined
                    }
                    className={`peer min-h-[120px] w-full resize-y rounded-[12px] border bg-[#f8f5ff] px-3.5 pb-3 pt-7 text-[16px] font-[500] leading-relaxed tracking-[-0.015em] text-[#24202a] outline-none transition-[border-color,box-shadow,background-color] focus:bg-[#fbf9ff] focus:ring-4 sm:min-h-[140px] sm:px-4 sm:pt-8 sm:text-[17px] ${
                      errors.projectDetails
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                        : "border-[#ded7e8] hover:border-[#bcaed0] focus:border-primary focus:ring-primary/10"
                    }`}
                    style={{ fontFamily: "var(--font-sora)" }}
                  />
                  <label
                    htmlFor="projectDetails"
                    className="pointer-events-none absolute left-3 top-2 translate-y-0 text-[10px] font-[700] uppercase tracking-[0.09em] text-[#746d7d] transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-[500] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-[-0.015em] peer-placeholder-shown:text-[#77717f] peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-[700] peer-focus:uppercase peer-focus:tracking-[0.09em] peer-focus:text-primary sm:left-4 sm:top-2.5 sm:text-[11px] sm:peer-placeholder-shown:top-6 sm:peer-placeholder-shown:text-[17px] sm:peer-focus:top-2.5 sm:peer-focus:text-[11px]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    A little about the project *
                  </label>
                </div>
                {errors.projectDetails && (
                  <p
                    id="projectDetails-error"
                    className="mt-1.5 text-[13px] font-[500] text-red-600"
                    role="alert"
                  >
                    {errors.projectDetails}
                  </p>
                )}
              </div>
            </div>

            <div
              className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(event) => updateField("website", event.target.value)}
              />
            </div>

            {serverError && (
              <div
                className="mt-5 rounded-[12px] border border-red-200 bg-red-50 px-3.5 py-3 text-[13px] leading-relaxed text-red-700 sm:px-4 sm:text-[14px]"
                role="alert"
              >
                {serverError} You can also email us at{" "}
                <a
                  href="mailto:contact@nymbor.com"
                  className="font-[700] underline underline-offset-2"
                >
                  contact@nymbor.com
                </a>
                .
              </div>
            )}

            <div className="mt-5 flex flex-col-reverse gap-3 border-t border-black/10 pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-5">
              <p className="max-w-none flex-1 text-center text-[12px] leading-[1.5] text-[#736d7b] sm:max-w-[300px] sm:text-left sm:text-[14px] sm:leading-[1.6] md:text-[15px]">
                Just a conversation. No mailing lists or sales pitches.
              </p>
              <button
                type="submit"
                disabled={submitState === "sending"}
                className="group inline-flex min-h-[52px] w-full shrink-0 cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-full border-2 border-black bg-primary py-1.5 pl-5 pr-1.5 text-[11px] font-[800] uppercase tracking-[0.11em] text-white shadow-[3px_3px_0_0_#171717] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[1px_1px_0_0_#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:pl-6 md:text-[12px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {submitState === "sending" ? "Sending…" : "Send your brief"}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
                  {submitState === "sending" ? (
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/20 border-t-black motion-reduce:animate-none" />
                  ) : (
                    <Send size={14} />
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        ) : (
         <motion.div
  key="contact-success"
  initial={
    shouldReduceMotion
      ? false
      : { opacity: 0, y: 12, filter: "blur(4px)" }
  }
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1], // Custom Apple-like cubic-bezier for buttery smoothness
  }}
  className="relative mx-auto flex min-h-[380px] w-full max-w-[760px] flex-col items-center justify-center overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#FCFCFB] px-5 py-10 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)] sm:min-h-[580px] sm:rounded-[32px] sm:px-12 sm:py-16"
  role="status"
>
  {/* Subtle decorative background gradient aura to break up flatness */}
  <div className="absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[var(--accent-yellow)]/15 blur-3xl pointer-events-none" />

  {/* Success Icon */}

  {/* Eyebrow badge */}

  {/* Headline */}
  <motion.h2
    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mt-5 max-w-[540px] text-[32px] font-[450] leading-[1.02] tracking-[-0.04em] text-black sm:text-[clamp(36px,4.5vw,60px)]"
    style={{ fontFamily: "var(--font-display)" }}
  >
    It&apos;s on our radar, <span className="italic font-[400] text-black/80">{formData.name.split(" ")[0]}</span>.
  </motion.h2>

  {/* Subtext */}
  <motion.p
    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25, duration: 0.5 }}
    className="mt-4 max-w-[460px] text-[14px] leading-relaxed text-black/55 font-[400] sm:mt-5 sm:text-[15px]"
  >
    We&apos;re reviewing your scope. Expect a thoughtful response and a clear next step in your inbox within 24 hours.
  </motion.p>

  {/* Action Button */}
  <motion.div
    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
  >
    <Link
      href="/works"
      className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-black px-6 py-3 text-[10px] font-[700] uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-black/85 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      Explore our work
      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  </motion.div>
</motion.div>

        )}
      </AnimatePresence>
    </motion.div>
  );
}
