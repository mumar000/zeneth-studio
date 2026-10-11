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
      "Logo families, typography, color, imagery, and brand guidelines for use across websites, packaging, presentations, and campaigns.",
  },
  {
    name: "Interface & Web Design",
    path: "/services/interface-design",
    description:
      "Website and product interface design, from page structure and user journeys to responsive screens, prototypes, and reusable Figma components.",
  },
  {
    name: "Web Development",
    path: "/services/web-development",
    description:
      "Responsive websites on Webflow, WordPress, Shopify, and Next.js, with CMS setup, integrations, testing, and an agreed launch handoff.",
  },
];

const title = "Creative Services, From First Impression to Final Click";
const description =
  "One agency for the identity, the interface and the build. Explore Nymbor’s branding, web design and development services for new launches and fresh starts.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/services",
  eyebrow: "Nymbor services",
  imageAlt: "Creative services at Nymbor: brand identity, website design and development",
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
              Your next chapter.<br />
              Built from the brand up.
            </h1>
            <p className="mx-auto mt-6 max-w-[500px] text-[15px] leading-[1.7] text-[#746b7d] md:text-[18px]">
              A new identity, a website rethink, or the whole journey to launch.
              Nymbor brings brand design, UI/UX, and development into the same conversation.
            </p>
          </div>
        </div>
      </section>

      <ServicesDetail showHeading={false} showAllLink={false} cardHeadingTag="h2" />

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-3xl text-[clamp(32px,4vw,60px)] font-[600] leading-[1.05] tracking-[-0.04em]" style={{ fontFamily: "var(--font-display)" }}>
            Start with the problem you actually have.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { title: "A business ready to be seen.", body: "You have the offer. Now it needs an identity and a home online. We define the visual direction, carry it into the website, and prepare the files and pages for launch.", href: "/works/sapphire", link: "Sapphire Pools: identity to website" },
              { title: "A website people get lost in.", body: "The business makes sense when you explain it, but the pages leave visitors guessing. We review the content and user journey, then redesign the moments that need a clearer answer.", href: "/works/spreadshop", link: "Spreadshop: rethink the user journey" },
              { title: "A design waiting to go live.", body: "You have the direction or approved screens. We review what is missing, settle the platform and CMS requirements, and turn the files into a working website.", href: "/works/arpm", link: "ARPM: from design to a live platform" },
            ].map((item) => (
              <article key={item.href} className="border-t border-[#21182d]/20 pt-6">
                <h3 className="text-2xl font-[600] tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#746b7d]">{item.body}</p>
                <Link href={item.href} className="mt-5 inline-block text-sm font-[600] text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{item.link}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-between gap-6 border-t border-[#21182d]/15 pt-8 sm:flex-row sm:items-center md:pt-10">
          <div>
            <h2 className="text-[28px] font-[500] leading-[1.1] tracking-[-0.035em] md:text-[40px]" style={{ fontFamily: "var(--font-display)" }}>Where should we start?</h2>
            <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#746b7d] md:text-[16px]">Share the brief, the deadline, and what you already have. We’ll recommend the right starting point and scope the work with you.</p>
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
