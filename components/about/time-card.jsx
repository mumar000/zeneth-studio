import { Moon, Sun } from "lucide-react";
import { isDaytimeIn, timeIn, zoneLabel } from "./client-data";

export function SkyIcon({ country, minute, className = "size-4" }) {
  const Icon = isDaytimeIn(country.tz, minute) ? Sun : Moon;
  return <Icon className={`flex-none text-[#4a4752] ${className}`} strokeWidth={2} aria-hidden="true" />;
}

export function YouBadge({ className = "" }) {
  return (
    <span className={`rounded-full bg-primary px-[7px] py-1 font-mono text-[11px] font-[700] leading-none tracking-[0.08em] text-white ${className}`}>
      Your time
    </span>
  );
}

export default function TimeCard({ country, minute, isYou, className = "" }) {
  return (
    <div
      className={`flex-col gap-1.5 rounded-[14px] border-2 border-black bg-white px-3.5 pb-3 pt-[11px] ${className}`}
    >
      <span className="flex items-center gap-2 font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.14em] text-primary">
        {country.name}
        {isYou && <YouBadge />}
      </span>
      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <SkyIcon country={country} minute={minute} />
        <span
          className="text-[19px] font-[700] tabular-nums tracking-[-0.02em] md:text-[22px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {timeIn(country.tz, minute)}
        </span>
        <span className="text-[12px] font-[600] leading-none text-[#4a4752] md:text-[13px]">
          {zoneLabel(country, minute)}
        </span>
      </span>
    </div>
  );
}
