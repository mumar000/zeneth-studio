import { notFound } from "next/navigation";
import BrandIdentityPage from "@/components/services/brand-identity/brand-identity-page";
import InterfaceDesignPage from "@/components/services/interface-design/interface-design-page";
import WebDevelopmentPage from "@/components/services/web-development/web-development-page";
import { serviceSlugs, servicesDetailData } from "@/lib/services-detail-data";

const SERVICE_PAGES = {
  "brand-identity": BrandIdentityPage,
  "interface-design": InterfaceDesignPage,
  "web-development": WebDevelopmentPage,
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesDetailData[slug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.label} - Zeneth Studio`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const PageComponent = SERVICE_PAGES[slug];

  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
