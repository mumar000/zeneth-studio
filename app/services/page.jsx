import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  createPageMetadata,
  serviceSchema,
} from "@/lib/seo";

const services = [
  {
    name: "Brand Identity",
    path: "/services/brand-identity",
    eyebrow: "Strategy · Identity · Systems",
    description:
      "Build a distinctive identity with a clear visual system, logo suite, typography, color, guidelines, and launch-ready assets.",
  },
  {
    name: "Interface & Web Design",
    path: "/services/interface-design",
    eyebrow: "UX · UI · Conversion",
    description:
      "Turn a complex offer into a clear, responsive experience with stronger hierarchy, user flows, prototypes, and build-ready design systems.",
  },
  {
    name: "Shopify & Web Development",
    path: "/services/web-development",
    eyebrow: "Shopify · Webflow · WordPress · Next.js",
    description:
      "Launch a fast, responsive, editable website or Shopify store that preserves the design and gives customers a clearer path to action.",
  },
];

const title = "Shopify, Web Design & Development Services";
const description =
  "Explore Nymbor's brand identity, interface design, Shopify, and web development services—connected from strategy and design through launch.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/services",
  eyebrow: "Nymbor services",
  imageAlt: "Nymbor brand identity, Shopify, web design, and development services",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f8f3ff] text-[#171717]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...services.map((service) =>
            serviceSchema({
              name: service.name,
              description: service.description,
              path: service.path,
            }),
          ),
        ]}
      />

      <section className="px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <nav aria-label="Breadcrumb" className="text-sm text-black/55">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Services</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[1120px] md:mt-16">
            <p
              className="text-xs font-[700] uppercase tracking-[0.16em] text-primary"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Brand to build
            </p>
            <h1
              className="mt-5 text-[clamp(48px,7vw,112px)] font-[650] leading-[0.92] tracking-[-0.055em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One studio for the brand, the website, and everything between.
            </h1>
            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-black/65 md:text-[21px]">
              Nymbor connects brand identity, interface design, Shopify, and web
              development so the idea stays consistent from the first decision
              to the live customer experience.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.path}
                className="flex min-h-[390px] flex-col rounded-[20px] border border-black/10 bg-white p-6 shadow-[0_16px_50px_rgba(42,22,70,0.07)] sm:p-8"
              >
                <p
                  className="text-[11px] font-[700] uppercase tracking-[0.13em] text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{index + 1} · {service.eyebrow}
                </p>
                <h2
                  className="mt-8 text-[clamp(34px,3.2vw,52px)] font-[600] leading-[0.98] tracking-[-0.045em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.name}
                </h2>
                <p className="mt-6 text-[16px] leading-[1.7] text-black/60">
                  {service.description}
                </p>
                <Link
                  href={service.path}
                  className="group mt-auto inline-flex min-h-12 w-fit items-center gap-3 rounded-full border-2 border-black bg-primary px-5 py-3 text-[11px] font-[800] uppercase tracking-[0.1em] text-white shadow-[3px_3px_0_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[1px_1px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Explore {service.name}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-20 rounded-[24px] bg-[#171717] px-6 py-12 text-white sm:px-10 md:mt-28 md:px-14 md:py-16">
            <p
              className="text-xs font-[700] uppercase tracking-[0.15em] text-[var(--accent-yellow)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Not sure where to start?
            </p>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2
                className="max-w-4xl text-[clamp(38px,5vw,76px)] font-[600] leading-[0.96] tracking-[-0.045em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bring us the business problem. We&apos;ll shape the right path.
              </h2>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-[800] uppercase tracking-[0.11em] text-black transition-colors hover:bg-[var(--accent-yellow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Start a project
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
