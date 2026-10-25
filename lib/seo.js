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
  socialDescription = description,
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
    title: { absolute: resolvedTitle },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: socialDescription,
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt || `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: socialDescription,
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
          follow: true,
          googleBot: {
            index: false,
            follow: true,
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
        alternateName: siteConfig.alternateNames,
        url: siteConfig.url,
        description: siteConfig.defaultDescription,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: absoluteUrl(siteConfig.logo),
          width: 4500,
          height: 4500,
        },
        email: siteConfig.email,
        founder: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#founder`,
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.jobTitle,
          image: absoluteUrl(siteConfig.founder.image),
          sameAs: [siteConfig.founder.linkedin],
        },
        sameAs: Object.values(siteConfig.socialLinks),
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "project enquiries",
          email: siteConfig.email,
          url: absoluteUrl("/contact"),
          availableLanguage: "English",
        },
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames, "nymbor.com"],
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function webPageSchema({ name, description, path, type = "WebPage", mainEntity }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
    ...(mainEntity ? { mainEntity } : {}),
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

export function faqPageSchema(items, path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    isPartOf: { "@id": `${absoluteUrl(path)}#webpage` },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    areaServed: "Worldwide",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
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
    mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
    image: image ? absoluteUrl(image) : undefined,
    genre: services,
    creator: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}
