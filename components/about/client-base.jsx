import ClientMap from "./client-map";
import Reveal from "@/components/reveal";

export default function ClientBase() {
  return (
    <section aria-labelledby="clients-title" className="px-4 pb-20 sm:px-6 md:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-9 flex flex-col gap-3.5">
          <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
            Our client base
          </span>
          <h2
            id="clients-title"
            className="text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where our clients are.
          </h2>
        </Reveal>

        {/* The map runs its own 3D entrance when it scrolls into view. */}
        <ClientMap />

        <p className="sr-only">
          Our clients are in the United States, the United Kingdom, the United Arab Emirates and Australia.
        </p>
      </div>
    </section>
  );
}
