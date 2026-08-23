import { absoluteUrl, isIndexableEnvironment, siteConfig } from "./site-config";

const DEFAULT_GOOGLEBOT_RULES = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
};

function socialImageUrl(title, eyebrow = "Independent creative studio") {
  const params = new URLSearchParams({ title, eyebrow });
  return absoluteUrl(`/api/og?${params.toString()}`);
}

export function createPageMetadata({
  title,
  description,
  path,
  eyebrow,
  imageAlt,
  noIndex = false,
  absoluteTitle = false,
}) {
  const canonical = absoluteUrl(path);
  const shouldIndex = isIndexableEnvironment() && !noIndex;
  const resolvedTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const image = socialImageUrl(title, eyebrow);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt || `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
    robots: shouldIndex
      ? {
          index: true,
          follow: true,
          googleBot: DEFAULT_GOOGLEBOT_RULES,
        }
      : {
          index: false,
          follow: false,
          noarchive: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
          width: 4500,
          height: 4500,
        },
        email: siteConfig.email,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#studio`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.logo),
        email: siteConfig.email,
        areaServed: "Worldwide",
        description: siteConfig.defaultDescription,
        parentOrganization: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.defaultDescription,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en",
      },
    ],
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    areaServed: "Worldwide",
    provider: {
      "@id": `${siteConfig.url}/#studio`,
    },
  };
}

export function caseStudySchema({ title, description, path, image, services }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#case-study`,
    name: `${title} case study`,
    headline: title,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : undefined,
    genre: services,
    creator: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}
