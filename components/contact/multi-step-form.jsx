"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const SERVICE_OPTIONS = [
  "Brand Identity",
  "Interface Design",
  "Web Development",
  "Not sure yet",
];

const PROJECT_TYPES = [
  "New brand",
  "Rebrand",
  "New website",
  "Website redesign",
  "Ongoing support",
];

const BUDGET_OPTIONS = ["$1K–$2K", "$4K–$8K", "$10K–$20K"];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  services: [],
  projectType: "",
  budget: "",
  projectDetails: "",
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
}) {
  return (
    <div className="group relative pt-5">
      <label
        htmlFor={id}
        className="block text-[11px] font-[600] uppercase tracking-[0.1em] text-black/55 transition-colors group-focus-within:text-primary md:text-[12px]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 min-h-12 w-full border-0 border-b bg-transparent pb-3 text-[21px] font-[400] tracking-[-0.03em] text-[#171717] outline-none transition-colors placeholder:text-black/20 md:text-[25px] ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-black/20 hover:border-black/45 focus:border-primary"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-[12px] font-[500] text-red-600"
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
  legend,
  hint,
  options,
  value,
  onChange,
  multiple = false,
  error,
}) {
  const isSelected = (option) =>
    multiple ? value.includes(option) : value === option;

  return (
    <fieldset id={name} tabIndex={-1} className="outline-none">
      <legend
        className="text-[20px] font-[500] leading-tight tracking-[-0.03em] text-[#171717] md:text-[24px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {legend}
      </legend>
      {hint && <p className="mt-1.5 text-[13px] text-black/50">{hint}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = isSelected(option);
          const optionId = `${name}-${option.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`;

          return (
            <label
              key={option}
              htmlFor={optionId}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-[500] transition-[background-color,color,border-color,transform] duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2 md:px-5 md:text-[13px] ${
                selected
                  ? "border-[#171717] bg-[#171717] text-white"
                  : "border-black/15 bg-white/60 text-black/65 hover:-translate-y-0.5 hover:border-black/35 hover:text-black"
              }`}
              style={{ fontFamily: "var(--font-sora)" }}
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
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                  selected ? "border-white/50 bg-white text-black" : "border-black/25"
                }`}
                aria-hidden="true"
              >
                {selected && <Check size={11} strokeWidth={3} />}
              </span>
              {option}
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-[12px] font-[500] text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function MultiStepContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");
  const [serverError, setServerError] = useState("");
  const [startedAt] = useState(() => Date.now());

  const progress = useMemo(() => (step / 3) * 100, [step]);

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setServerError("");
  };

  const focusFirstError = (nextErrors) => {
    const firstField = Object.keys(nextErrors)[0];
    if (!firstField) return;
    window.requestAnimationFrame(() => {
      document.getElementById(firstField)?.focus();
    });
  };

  const validateIntro = () => {
    const nextErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (formData.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    return nextErrors;
  };

  const validateProject = () => {
    const nextErrors = {};
    if (formData.companyName.trim().length < 2) {
      nextErrors.companyName = "Please enter your company name.";
    }
    if (!formData.services.length) {
      nextErrors.services = "Choose at least one service.";
    }
    if (!formData.projectType) {
      nextErrors.projectType = "Choose the closest project type.";
    }
    if (!formData.budget) {
      nextErrors.budget = "Choose an investment range.";
    }
    if (formData.projectDetails.trim().length < 20) {
      nextErrors.projectDetails = "Tell us a little more (at least 20 characters).";
    }
    return nextErrors;
  };

  const goToProjectDetails = (event) => {
    event.preventDefault();
    const nextErrors = validateIntro();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors);
      return;
    }

    setDirection(1);
    setStep(2);
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  const goBack = () => {
    setDirection(-1);
    setErrors({});
    setServerError("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  const toggleService = (service) => {
    const services = formData.services.includes(service)
      ? formData.services.filter((item) => item !== service)
      : [...formData.services, service];
    updateField("services", services);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validateProject();
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

      setDirection(1);
      setSubmitState("success");
      setStep(3);
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
    } catch (error) {
      setSubmitState("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again.",
      );
    }
  };

  const screenVariants = {
    enter: (travelDirection) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : travelDirection * 36,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
    }),
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: (travelDirection) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : travelDirection * -28,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffcf7] px-3 pb-10 pt-24 text-[#171717] sm:px-5 md:pb-14 md:pt-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-[360px] w-[360px] rounded-full bg-primary/[0.07] blur-[120px] md:h-[520px] md:w-[520px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[360px] w-[360px] rounded-full bg-[var(--accent-yellow)]/15 blur-[130px]"
      />

      <h1 className="sr-only">Start a project with Nymbor</h1>

      <div className="relative mx-auto flex min-h-[calc(100svh-7.5rem)] w-full max-w-[1320px] flex-col rounded-[20px] border border-black/10 bg-white/65 px-5 py-4 shadow-[0_24px_80px_rgba(40,20,75,0.07)] backdrop-blur-sm sm:px-7 sm:py-5 md:rounded-[26px] lg:px-10 lg:py-6">
        <div className="flex items-center justify-between gap-5 border-b border-black/10 pb-4">
          <p
            className="text-[11px] font-[700] uppercase tracking-[0.14em] text-primary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Project intake
          </p>
          <div className="flex items-center gap-3" aria-live="polite">
            <span
              className="text-[11px] font-[600] tabular-nums text-black/45"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              0{step} / 03
            </span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-black/10 sm:w-28">
              <motion.div
                className="h-full origin-left rounded-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center py-8 md:py-10 lg:py-12">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.form
                key="intro"
                custom={direction}
                variants={screenVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onSubmit={goToProjectDetails}
                noValidate
                className="mx-auto w-full max-w-[1080px]"
              >
                <div className="max-w-[850px]">
                  <p
                    className="text-[11px] font-[700] uppercase tracking-[0.14em] text-black/40"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    01 — The essentials
                  </p>
                  <h2
                    className="mt-4 text-[clamp(34px,4.4vw,64px)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171717]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    First, let&apos;s know who we&apos;re building with.
                  </h2>
                  <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-black/50 md:text-[16px]">
                    Three details to start. The project thinking comes next.
                  </p>
                </div>

                <div className="mt-7 grid gap-x-7 md:mt-9 md:grid-cols-3">
                  <TextField
                    id="name"
                    label="Your name *"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <TextField
                    id="email"
                    label="Email address *"
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <TextField
                    id="phone"
                    label="Phone number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    error={errors.phone}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div className="mt-9 flex justify-end md:mt-11">
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 cursor-pointer items-center gap-4 rounded-full border-2 border-black bg-primary py-1.5 pl-5 pr-1.5 text-[11px] font-[800] uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_0_#000] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Next
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="project"
                custom={direction}
                variants={screenVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onSubmit={submitForm}
                noValidate
                className="mx-auto w-full max-w-[1080px]"
              >
                <div className="max-w-[840px]">
                  <p
                    className="text-[11px] font-[700] uppercase tracking-[0.14em] text-black/40"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    02 — Project signal
                  </p>
                  <h2
                    className="mt-4 text-[clamp(34px,4vw,58px)] font-[500] leading-[0.99] tracking-[-0.05em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Give us the shape of the opportunity.
                  </h2>
                </div>

                <div className="mt-7 grid gap-7 lg:mt-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                  <div className="space-y-7">
                    <TextField
                      id="companyName"
                      label="Company name *"
                      value={formData.companyName}
                      onChange={(event) =>
                        updateField("companyName", event.target.value)
                      }
                      error={errors.companyName}
                      autoComplete="organization"
                    />

                    <div className="group relative pt-2">
                      <label
                        htmlFor="projectDetails"
                        className="block text-[11px] font-[600] uppercase tracking-[0.1em] text-black/55 transition-colors group-focus-within:text-primary md:text-[12px]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Tell us what you&apos;re building *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={4}
                        maxLength={2000}
                        value={formData.projectDetails}
                        onChange={(event) =>
                          updateField("projectDetails", event.target.value)
                        }
                        aria-invalid={Boolean(errors.projectDetails)}
                        aria-describedby={
                          errors.projectDetails ? "projectDetails-error" : undefined
                        }
                        placeholder="The challenge, the ambition, and what success should feel like."
                        className={`mt-2 w-full resize-none border-0 border-b bg-transparent pb-3 text-[17px] leading-relaxed text-[#171717] outline-none transition-colors placeholder:text-black/30 md:text-[19px] ${
                          errors.projectDetails
                            ? "border-red-500 focus:border-red-500"
                            : "border-black/20 hover:border-black/45 focus:border-primary"
                        }`}
                      />
                      {errors.projectDetails && (
                        <p
                          id="projectDetails-error"
                          className="mt-2 text-[12px] font-[500] text-red-600"
                          role="alert"
                        >
                          {errors.projectDetails}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-7 rounded-[18px] border border-black/10 bg-[#f8f3ff]/65 p-4 sm:p-5 md:p-6">
                    <ChoiceGroup
                      name="services"
                      legend="What can we help you with?"
                      hint="Choose everything that applies."
                      options={SERVICE_OPTIONS}
                      value={formData.services}
                      onChange={toggleService}
                      multiple
                      error={errors.services}
                    />
                    <ChoiceGroup
                      name="projectType"
                      legend="What kind of project is it?"
                      options={PROJECT_TYPES}
                      value={formData.projectType}
                      onChange={(option) => updateField("projectType", option)}
                      error={errors.projectType}
                    />
                    <ChoiceGroup
                      name="budget"
                      legend="What range are you investing?"
                      options={BUDGET_OPTIONS}
                      value={formData.budget}
                      onChange={(option) => updateField("budget", option)}
                      error={errors.budget}
                    />
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
                    className="mt-7 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    role="alert"
                  >
                    {serverError} You can also email us at{" "}
                    <a
                      className="font-[700] underline underline-offset-2"
                      href="mailto:contact@nymbor.com"
                    >
                      contact@nymbor.com
                    </a>
                    .
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-4 md:mt-10">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full px-2 text-[12px] font-[700] uppercase tracking-[0.1em] text-black/55 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <ArrowLeft size={17} /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitState === "sending"}
                    className="group inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border-2 border-black bg-primary py-1.5 pl-5 pr-1.5 text-[10px] font-[800] uppercase tracking-[0.1em] text-white shadow-[3px_3px_0_0_#000] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 sm:text-[11px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {submitState === "sending" ? "Sending…" : "Send project"}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div
                key="success"
                custom={direction}
                variants={screenVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto flex w-full max-w-[940px] flex-col items-center py-8 text-center"
                role="status"
              >
                <motion.div
                  initial={
                    shouldReduceMotion ? false : { scale: 0.75, rotate: -8 }
                  }
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-[var(--accent-yellow)] shadow-[4px_4px_0_0_#000] md:h-20 md:w-20"
                >
                  <Check size={32} strokeWidth={2.2} />
                </motion.div>
                <p
                  className="mt-9 text-[11px] font-[700] uppercase tracking-[0.14em] text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Received — 03 / 03
                </p>
                <h2
                  className="mt-4 text-[clamp(38px,4.5vw,66px)] font-[500] leading-[0.97] tracking-[-0.05em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your project is now on our radar.
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-black/50 md:text-[19px]">
                  Thanks, {formData.name.split(" ")[0]}. We&apos;ll review the brief
                  and reply with the clearest next step. No automated pitch, just
                  a considered response.
                </p>
                <Link
                  href="/works"
                  className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-[12px] font-[700] uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Explore our work <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
