import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects-data";

const relatedProjects = ["arpm", "sapphire", "mogulbay"].map(getProjectBySlug);

export default function RelatedCaseStudies() {
  return (
    <section aria-labelledby="spreadshop-related-title" className="bg-[#fffcf7] px-5 py-20 text-[#1e1e1e] sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#ff3d00]">Keep exploring</p>
            <h2 id="spreadshop-related-title" className="font-display mt-3 text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.04em]">
              More case studies.
            </h2>
          </div>
          <Link href="/works" className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-[700] uppercase tracking-[0.12em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3d00]">
            All work <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/works/${project.slug}`}
              className="group w-[min(82vw,340px)] flex-none snap-start rounded-[18px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3d00] focus-visible:ring-offset-4 sm:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#eee9e2]">
                <Image src={project.image} alt={`${project.title} case study`} fill sizes="(max-width: 639px) 82vw, (max-width: 1023px) 48vw, 32vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[24px] leading-[1.15] tracking-[-0.025em]">{project.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.4] text-[#6c6965]">{project.category}</p>
                </div>
                <span aria-hidden="true" className="grid size-9 flex-none place-items-center rounded-full border border-black/20 transition-colors group-hover:border-[#ff3d00] group-hover:bg-[#ff3d00] group-hover:text-white">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
