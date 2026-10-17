import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getProjectBySlug } from "@/lib/projects-data";
import { servicesDetailData } from "@/lib/services-detail-data";
import { testimonials } from "@/lib/testimonials";

const { founder } = siteConfig;

const recentWork = ["feroce", "lets-grub", "arpm", "spreadshop"].map(getProjectBySlug);

const services = [
  {
    slug: "brand-identity",
    title: "Brand identity",
    description:
      "For brands that look inconsistent, unclear, or too close to everyone else in the market.",
    items: [
      "Visual direction, logo system, color and type",
      "Messaging basics so the brand sounds as clear as it looks",
      "Launch-ready files and simple rules your team can use",
    ],
  },
  {
    slug: "interface-design",
    title: "Web and interface design",
    description:
      "Pages that make the offer clear and the next step obvious, designed before anything gets built.",
    items: [
      "Fixes messy layouts, weak hierarchy and unclear paths",
      "Turns your offer into pages people understand",
      "Best for sites that exist but don't convert",
    ],
  },
  {
    slug: "web-development",
    title: "Web development",
    description:
      "Responsive builds that keep the polish, spacing and intent of the design.",
    items: [
      "Webflow, Shopify, WordPress or custom front-end",
      "CMS setup, interaction details and QA",
      "Launch support and a clean handoff",
    ],
  },
];

const clients = [
  "Mogul Bay",
  "Féroce",
  "Trion",
  "Resight",
  "Flight Frame",
  "Fractal",
  "The Nugget Spot",
  "Renu",
  "Fresh Picks",
  "Dans Les Vestiaires",
  "Hey Bear",
  "Lollobello",
].map((name, index) => ({ name, src: `/about-logos/about-logo${index + 1}.webp` }));

const clientQuote = testimonials.find(({ id }) => id === "bienvinido-onia");

const display = { fontFamily: "var(--font-display)" };
const mono = { fontFamily: "var(--font-mono)" };

const buttonBase =
  "inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-black px-7 py-3.5 text-xs font-[700] uppercase tracking-[0.14em] shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-sm";

export default function AboutExperience() {
  return (
    <main id="main-content" className="overflow-x-clip bg-white text-[#1a1a1a]">
      <section className="relative isolate overflow-hidden bg-white px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-44 lg:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[110px] md:h-[640px] md:w-[640px] md:blur-[140px]" />
          <div className="absolute -left-40 top-1/3 h-[360px] w-[360px] rounded-full bg-[#b892ff]/30 blur-[110px] md:h-[520px] md:w-[520px] md:blur-[140px]" />
          <div className="absolute left-[38%] top-[18%] hidden h-[300px] w-[300px] rounded-full bg-[var(--accent-yellow)]/45 blur-[120px] md:block" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
          {/* Matches the body::before texture, which this stacking context would otherwise cover. */}
          <div className="absolute inset-0 hidden bg-[url('/bg-image.webp')] bg-repeat opacity-[0.05] md:block" />
        </div>

        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-10 lg:gap-y-9">
          <h1
            className="text-balance text-[clamp(40px,4.6vw,72px)] font-[500] leading-[1.04] tracking-[-0.04em] lg:col-span-8 lg:row-start-1 lg:self-end"
            style={display}
          >
            Nymbor is a <span className="whitespace-nowrap">founder-led</span> studio
            <br className="hidden lg:block" /> for brands and websites.
          </h1>

          <figure className="w-full max-w-[280px] sm:max-w-[340px] lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:max-w-[380px] lg:self-end lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-black/5 shadow-[0_24px_60px_-20px_rgba(64,20,140,0.35)] ring-1 ring-black/5">
              <Image
                src={founder.image}
                alt={`Portrait of ${founder.name}, founder of Nymbor`}
                fill
                priority
                sizes="(max-width: 639px) 280px, (max-width: 1023px) 340px, 380px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-[15px] leading-snug">
              <span className="block font-[600]">{founder.name}</span>
              <span className="block text-[#5f5868]">Founder, Nymbor</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:row-start-2 lg:self-end">
            <p className="max-w-[540px] text-[18px] leading-[1.6] text-[#4d4656] md:text-[20px]">
              I&apos;m {founder.name}. I lead every Nymbor project myself: the
              brand, the interface and the build. You deal with me directly,
              from the first call to launch.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-5">
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} bg-primary text-white focus-visible:ring-black`}
                style={mono}
              >
                Book a 15-min call
              </a>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn`}
                title="LinkedIn"
                className="inline-flex size-12 items-center justify-center rounded-[10px] border-2 border-black bg-white text-black shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:shadow-[2px_2px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 motion-reduce:transition-none sm:size-[52px]"
              >
                <Linkedin size={20} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="work-heading"
              className="text-[clamp(32px,3.4vw,56px)] font-[500] leading-none tracking-[-0.04em]"
              style={display}
            >
              Recent work
            </h2>
            <Link
              href="/works"
              className="text-[15px] font-[600] underline decoration-black/30 underline-offset-[6px] transition-colors hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              See all work
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 lg:grid-cols-4 lg:gap-x-6">
            {recentWork.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/works/${project.slug}`}
                  className="group block rounded-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-black/5">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 1023px) 50vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[16px] font-[600] tracking-[-0.02em] decoration-2 underline-offset-4 group-hover:underline md:text-[18px]">
                    {project.title}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#5f5868] md:text-[14px]">
                    {project.category}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="services-heading"
              className="text-[clamp(32px,3.4vw,56px)] font-[500] leading-none tracking-[-0.04em]"
              style={display}
            >
              Services
            </h2>
            <p className="text-[15px] text-[#5f5868]">
              Projects start at {servicesDetailData["brand-identity"].startingPrice}.
            </p>
          </div>

          <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-12">
            {services.map((service) => (
              <article key={service.slug} className="border-t-2 border-black pt-5">
                <h3
                  className="text-[24px] font-[500] leading-tight tracking-[-0.03em] md:text-[28px]"
                  style={display}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="decoration-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#4d4656]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.5]">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="clients-heading"
        className="bg-[#f4effc] px-4 py-20 sm:px-6 md:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2
              id="clients-heading"
              className="text-[clamp(32px,3.4vw,56px)] font-[500] leading-none tracking-[-0.04em]"
              style={display}
            >
              Clients
            </h2>
            <figure className="mt-10 max-w-[480px]">
              <blockquote
                className="text-[20px] leading-[1.45] tracking-[-0.02em] md:text-[23px]"
                style={display}
              >
                <p>&ldquo;{clientQuote.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={clientQuote.avatar}
                  width={44}
                  height={44}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span>
                  <span className="block text-[15px] font-[600]">{clientQuote.name}</span>
                  <span className="block text-[13px] text-[#5f5868]">{clientQuote.role}</span>
                </span>
              </figcaption>
            </figure>
          </div>

          <ul className="grid grid-cols-3 gap-x-6 gap-y-10 self-center sm:grid-cols-4 lg:col-span-7 lg:col-start-6 lg:gap-x-10 lg:gap-y-14">
            {clients.map((client) => (
              <li key={client.name} className="relative h-10 md:h-12">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="(max-width: 639px) 30vw, 180px"
                  className="object-contain opacity-75"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1320px] items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2
              className="text-balance text-[clamp(40px,5vw,80px)] font-[500] leading-[1.02] tracking-[-0.04em]"
              style={display}
            >
              Tell me what you&apos;re building.
            </h2>
            <p className="mt-5 text-[17px] text-[#4d4656] md:text-[19px]">
              I reply within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 lg:col-span-5 lg:justify-end">
            <Link
              href="/contact"
              className={`${buttonBase} bg-primary text-white focus-visible:ring-black`}
              style={mono}
            >
              Start a project
            </Link>
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-white text-black focus-visible:ring-black`}
              style={mono}
            >
              Book a 15-min call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
