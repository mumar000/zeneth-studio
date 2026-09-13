import Link from "next/link";

const serviceLinks = {
  "brand-identity": {
    label: "Brand Identity",
    href: "/services/brand-identity",
  },
  "interface-design": {
    label: "Interface & Web Design",
    href: "/services/interface-design",
  },
  "web-development": {
    label: "Shopify & Web Development",
    href: "/services/web-development",
  },
};

export default function RelatedServices({ services }) {
  const links = services.map((slug) => serviceLinks[slug]).filter(Boolean);
  if (!links.length) return null;

  return (
    <section className="bg-[#fffcf7] px-5 py-14 text-[#171717] md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px] rounded-[20px] border border-black/10 bg-white p-6 md:p-10">
        <p
          className="text-[11px] font-[700] uppercase tracking-[0.13em] text-primary"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Services behind the work
        </p>
        <h2
          className="mt-4 max-w-3xl text-[34px] font-[650] leading-[1] tracking-[-0.04em] md:text-[56px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Looking for a similar result?
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          {links.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="inline-flex min-h-12 items-center rounded-full border-2 border-black bg-white px-5 py-3 text-[11px] font-[800] uppercase tracking-[0.1em] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Explore {service.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
