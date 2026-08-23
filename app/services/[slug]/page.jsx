import { notFound } from "next/navigation";
import BrandIdentityPage from "@/components/services/brand-identity/brand-identity-page";
import InterfaceDesignPage from "@/components/services/interface-design/interface-design-page";
import WebDevelopmentPage from "@/components/services/web-development/web-development-page";
import JsonLd from "@/components/seo/json-ld";
import { serviceSlugs, servicesDetailData } from "@/lib/services-detail-data";
import {
  breadcrumbSchema,
  createPageMetadata,
  serviceSchema,
} from "@/lib/seo";

const SERVICE_PAGES = {
  "brand-identity": BrandIdentityPage,
  "interface-design": InterfaceDesignPage,
  "web-development": WebDevelopmentPage,
};

const SERVICE_SEO = {
  "brand-identity": {
    title: "Brand Identity Design",
    description:
      "Build a distinctive, usable brand identity with strategy, logo systems, typography, color, guidelines, and launch-ready creative assets.",
  },
  "interface-design": {
    title: "Interface & Web Design",
    description:
      "Turn complex products and offers into clear, responsive interfaces with stronger hierarchy, user flows, prototypes, and build-ready design systems.",
  },
  "web-development": {
    title: "Web Development",
    description:
      "Launch a responsive, editable website that preserves the design across Webflow, Shopify, WordPress, or a carefully chosen custom stack.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesDetailData[slug];

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The requested Nymbor service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  const seo = SERVICE_SEO[slug];
  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${slug}`,
    eyebrow: "Nymbor services",
    imageAlt: `${seo.title} services by Nymbor`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const PageComponent = SERVICE_PAGES[slug];

  if (!PageComponent) {
    notFound();
  }

  const service = servicesDetailData[slug];
  const seo = SERVICE_SEO[slug];
  const path = `/services/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.label,
            description: seo.description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: service.label, path },
          ]),
        ]}
      />
      <PageComponent />
    </>
  );
}
