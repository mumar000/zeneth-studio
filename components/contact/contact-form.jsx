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
          className={`peer min-h-[64px] w-full rounded-[12px] border bg-[#f8f5ff] px-4 pb-2.5 pt-7 text-[17px] font-[500] tracking-[-0.015em] text-[#24202a] outline-none transition-[border-color,box-shadow,background-color] focus:bg-[#fbf9ff] focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-[#ded7e8] hover:border-[#bcaed0] focus:border-primary focus:ring-primary/10"
          }`}
          style={{ fontFamily: "var(--font-sora)" }}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-2.5 translate-y-0 text-[11px] font-[700] uppercase tracking-[0.09em] text-[#746d7d] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[17px] peer-placeholder-shown:font-[500] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-[-0.015em] peer-placeholder-shown:text-[#77717f] peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-[700] peer-focus:uppercase peer-focus:tracking-[0.09em] peer-focus:text-primary"
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
          className="text-[16px] font-[600] tracking-[-0.015em] text-[#28232d]"
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
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = isSelected(option);
          const optionId = `${name}-${option
            .toLowerCase()
            .replaceAll(/[^a-z0-9]+/g, "-")}`;

          return (
            <label
              key={option}
              htmlFor={optionId}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 py-2.5 text-[14px] font-[500] tracking-[-0.01em] transition-[color,background-color,border-color,transform] duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2 sm:px-5 ${
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

export default function ContactForm() {
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
      className="flex items-start justify-center bg-white px-4 py-4 text-[#171717] sm:px-6 sm:py-8 lg:items-center lg:px-8"
      style={{ fontFamily: "var(--font-sora)" }}
    >
      <AnimatePresence mode="wait">
        {submitState !== "success" ? (
          <motion.form
            key="contact-form"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            onSubmit={submitForm}
            noValidate
            className="mx-auto flex w-full max-w-[780px] flex-col rounded-[24px] border border-black/10 bg-white px-5 py-8 shadow-[0_8px_22px_rgba(23,19,29,0.045)] sm:px-8 sm:py-10 lg:px-[clamp(34px,4vw,56px)] lg:py-[clamp(40px,4.5vw,60px)]"
          >

            <div className="grid gap-5 sm:grid-cols-2">
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

            <div className="mt-7 space-y-7">
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
                    className={`peer min-h-[140px] w-full resize-y rounded-[12px] border bg-[#f8f5ff] px-4 pb-3 pt-8 text-[17px] font-[500] leading-relaxed tracking-[-0.015em] text-[#24202a] outline-none transition-[border-color,box-shadow,background-color] focus:bg-[#fbf9ff] focus:ring-4 ${
                      errors.projectDetails
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                        : "border-[#ded7e8] hover:border-[#bcaed0] focus:border-primary focus:ring-primary/10"
                    }`}
                    style={{ fontFamily: "var(--font-sora)" }}
                  />
                  <label
                    htmlFor="projectDetails"
                    className="pointer-events-none absolute left-4 top-2.5 translate-y-0 text-[11px] font-[700] uppercase tracking-[0.09em] text-[#746d7d] transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[17px] peer-placeholder-shown:font-[500] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-[-0.015em] peer-placeholder-shown:text-[#77717f] peer-focus:top-2.5 peer-focus:text-[11px] peer-focus:font-[700] peer-focus:uppercase peer-focus:tracking-[0.09em] peer-focus:text-primary"
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
                className="mt-5 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] leading-relaxed text-red-700"
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

            <div className="mt-6 flex flex-col-reverse gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="max-w-[300px] flex-1 text-[14px] leading-[1.6] text-[#736d7b] md:text-[15px]">
                Just a conversation. No mailing lists or sales pitches.
              </p>
              <button
                type="submit"
                disabled={submitState === "sending"}
                className="group inline-flex min-h-[52px] w-full shrink-0 cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-full border-2 border-black bg-primary py-1.5 pl-6 pr-1.5 text-[11px] font-[800] uppercase tracking-[0.11em] text-white shadow-[3px_3px_0_0_#171717] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[1px_1px_0_0_#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:w-auto md:text-[12px]"
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
                : { opacity: 0, y: 18, filter: "blur(6px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto flex min-h-[600px] w-full max-w-[780px] flex-col items-center justify-center rounded-[24px] border border-black/10 bg-white px-6 py-14 text-center shadow-[0_8px_22px_rgba(23,19,29,0.045)] sm:px-10"
            role="status"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0.7, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-[var(--accent-yellow)] text-black shadow-[5px_5px_0_0_#171717]"
            >
              <Check size={34} strokeWidth={2.4} />
            </motion.div>
            <p
              className="mt-9 text-[10px] font-[800] uppercase tracking-[0.15em] text-primary"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Brief received
            </p>
            <h2
              className="mt-4 max-w-[560px] text-[clamp(38px,5vw,68px)] font-[500] leading-[0.94] tracking-[-0.055em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              It&apos;s on our radar, {formData.name.split(" ")[0]}.
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-black/50">
              We&apos;ll review the details and reply with the clearest next
              step, usually within one or two business days.
            </p>
            <Link
              href="/works"
              className="group mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border border-black/15 bg-white px-5 py-3 text-[10px] font-[800] uppercase tracking-[0.12em] transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Explore our work
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
