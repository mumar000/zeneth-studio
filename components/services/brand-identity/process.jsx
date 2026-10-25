import Reveal from "@/components/reveal";
import { display, eyebrow, h2, steps } from "./content";

export default function Process() {
  return (
    <section aria-labelledby="p-title" className="px-5 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-9 flex flex-col gap-3.5">
          <span className={eyebrow}>How it runs</span>
          <h2 id="p-title" className={h2} style={display}>
            Three steps. 5–7 working days.
          </h2>
          <p className="text-[16px] text-[#4a4752]">
            Counted from kickoff, with your feedback back within a day.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 110}
              className="flex flex-col gap-3 rounded-3xl border border-black/10 bg-white p-[30px]"
            >
              <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary">
                {step.when}
              </span>
              <b className="text-[24px] tracking-[-0.02em]" style={display}>
                {step.title}
              </b>
              <span className="text-[16px] leading-[1.5] text-[#4a4752]">
                {step.text}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
