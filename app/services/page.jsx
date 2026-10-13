import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServicesDetail from "@/components/home/services-detail";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  createPageMetadata,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const services = [
  {
    name: "Brand Identity",
    path: "/services/brand-identity",
    description:
      "Build a distinctive identity with a clear visual system, logo suite, typography, color, guidelines, and launch-ready assets.",
  },
  {
    name: "Interface & Web Design",
    path: "/services/interface-design",
    description:
      "Turn a complex offer into a clear, responsive experience with stronger hierarchy, user flows, prototypes, and build-ready design systems.",
  },
  {
    name: "Shopify & Web Development",
    path: "/services/web-development",
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
    <main id="main-content" className="relative min-h-screen text-[#21182d]">
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path: "/services", type: "CollectionPage" }),
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

      <section className="px-4 pb-0 pt-32 sm:px-6 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1800px]">
          <nav aria-label="Breadcrumb" className="text-[12px] text-[#746b7d]">
            <ol className="flex items-center gap-3">
              <li>
                <Link href="/" className="rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Services</li>
            </ol>
          </nav>
          <div className="mx-auto max-w-[1100px] py-12 text-center md:py-16">
            <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>What we do</p>
            <h1 className="mt-5 text-[clamp(40px,5.6vw,88px)] font-[600] leading-[1.02] tracking-[-0.045em]" style={{ fontFamily: "var(--font-display)" }}>
              Brand identity.<br />
              Web design & development.
            </h1>
            <p className="mx-auto mt-6 max-w-[500px] text-[15px] leading-[1.7] text-[#746b7d] md:text-[18px]">
              Build a new brand, rethink your website, or bring an approved design to life.
            </p>
          </div>
        </div>
      </section>

      <ServicesDetail showHeading={false} showAllLink={false} cardHeadingTag="h2" />

      <section className="px-4 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-between gap-6 border-t border-[#21182d]/15 pt-8 sm:flex-row sm:items-center md:pt-10">
          <div>
            <h2 className="text-[28px] font-[500] leading-[1.1] tracking-[-0.035em] md:text-[40px]" style={{ fontFamily: "var(--font-display)" }}>Where should we start?</h2>
            <p className="mt-3 text-[14px] leading-6 text-[#746b7d] md:text-[16px]">Tell us what you’re working on.</p>
          </div>
          <Link href="/contact" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 py-3 text-[14px] font-[600] text-white transition-colors hover:bg-[#5a17ca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Start a project
            <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </div>
      </section>
    </main>
  );
}
