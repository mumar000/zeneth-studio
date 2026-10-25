import Reveal from "@/components/reveal";
import { display, eyebrow, h2 } from "./content";

export function Tick({ strong = false }) {
  return (
    <span
      className={`grid size-[26px] flex-none place-items-center rounded-full ${strong ? "bg-primary text-white" : "bg-[#efe6ff] text-primary"}`}
    >
      <svg
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-3.5"
      >
        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
      </svg>
    </span>
  );
}

export function SectionHead({ label, title, id, children, className = "" }) {
  return (
    <Reveal
      className={`mb-9 flex flex-wrap items-end justify-between gap-5 ${className}`}
    >
      <div className="flex flex-col gap-3.5">
        <span className={eyebrow}>{label}</span>
        <h2 id={id} className={h2} style={display}>
          {title}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}
