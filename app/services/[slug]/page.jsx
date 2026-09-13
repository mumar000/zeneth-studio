import { notFound } from "next/navigation";
import BrandIdentityPage from "@/components/services/brand-identity/brand-identity-page";
import InterfaceDesignPage from "@/components/services/interface-design/interface-design-page";
import WebDevelopmentPage from "@/components/services/web-development/web-development-page";
import JsonLd from "@/components/seo/json-ld";
import { serviceSlugs, servicesDetailData } from "@/lib/services-detail-data";
import { serviceSeoData } from "@/lib/service-seo-data";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo";

const SERVICE_PAGES = {
  "brand-identity": BrandIdentityPage,
  "interface-design": InterfaceDesignPage,
  "web-development": WebDevelopmentPage,
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

  const seo = serviceSeoData[slug];
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
  const seo = serviceSeoData[slug];
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
            { name: "Services", path: "/services" },
            { name: service.label, path },
          ]),
          faqPageSchema(seo.faqs),
        ]}
      />
      <PageComponent />
    </>
  );
}
