import CalendarEmbed from "@/components/calendar-embed";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import LazyVideo from "@/components/lazy-video";
import { INTRO_POSTER, INTRO_SRC } from "@/lib/showreel";
import { siteConfig } from "@/lib/site-config";

const title = "Book a Call";
const description = "Book a 30-minute call with Nymbor. Tell us what you're building, your brand, interface or website, and we'll map the next step together.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  eyebrow: "Book a call",
  imageAlt: "Book a call with Nymbor about your brand, interface, or website",
});

const display = { fontFamily: "var(--font-display)" };

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#faf7ff] text-[#1a1a1a]">
      <JsonLd data={[
        webPageSchema({ name: title, description, path: "/contact", type: "ContactPage" }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
      ]} />
      <link rel="preconnect" href="https://assets.calendly.com" />

      {/* The original contact layout: heading and intro video on the left, the calendar in place of the form. */}
      <section aria-labelledby="contact-title" className="px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <span className="block font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary motion-safe:animate-rise">
              Contact
            </span>
            <h1
              id="contact-title"
              className="mt-5 text-balance text-[clamp(42px,5.2vw,76px)] font-[700] leading-[1.02] tracking-[-0.04em] motion-safe:animate-rise"
              style={{ ...display, "--d": "80ms" }}
            >
              Have a project in mind?
              <span className="block text-primary">Let&apos;s talk.</span>
            </h1>
            <p
              className="mt-6 max-w-[520px] text-[clamp(17px,1.6vw,19px)] leading-[1.55] text-[#4a4752] motion-safe:animate-rise"
              style={{ "--d": "180ms" }}
            >
              Pick a time for a 30-minute call. Tell us what you&apos;re building, and we&apos;ll map the next step together.
            </p>
            <p className="mt-4 text-[15px] text-[#4a4752] motion-safe:animate-rise" style={{ "--d": "260ms" }}>
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-[700] text-[#1a1a1a] underline decoration-primary/40 decoration-2 underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {siteConfig.email}
              </a>
            </p>

            <div
              className="mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-black motion-safe:animate-rise"
              style={{ "--d": "340ms" }}
            >
              <LazyVideo src={INTRO_SRC} poster={INTRO_POSTER} label="Nymbor intro: brand and website, built as one" className="size-full object-cover" />
            </div>
          </div>

          {/* Just the calendar, no card around it. */}
          <div id="book" className="scroll-mt-24">
            <CalendarEmbed bookingUrl={siteConfig.brandCallUrl} className="h-[1040px] lg:h-[1000px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
