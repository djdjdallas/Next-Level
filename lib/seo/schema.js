import { BUSINESS, SITE_URL } from "./business";
import { SERVICES } from "./services";

const BUSINESS_ID = `${SITE_URL}/#business`;

export function electricianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    email: BUSINESS.email,
    telephone: BUSINESS.phone.cell.tel,
    priceRange: BUSINESS.priceRange,
    description:
      "Licensed C-10 electrician serving the greater Los Angeles area. Panel upgrades, EV charger installation, whole-home rewiring, and 24/7 emergency service.",
    areaServed: BUSINESS.areasServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone.cell.tel,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
        hoursAvailable: "Mo-Su 00:00-23:59",
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone.office.tel,
        contactType: "office",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: s.slug === "panel-upgrade" || s.slug === "ev-charger-installation"
            ? `${SITE_URL}/services/${s.slug}`
            : `${SITE_URL}/services`,
        },
      })),
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CSLB License",
      value: BUSINESS.license.display,
    },
    sameAs: BUSINESS.sameAs,
  };
}

export function serviceSchema({ name, description, slug, areaServed, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: `${SITE_URL}${slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: (areaServed || BUSINESS.areasServed).map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url ? `${SITE_URL}${c.url}` : undefined,
    })),
  };
}
