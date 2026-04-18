export const SITE_URL = "https://ceonelectric.com";

export const BUSINESS = {
  name: "Ceon Electric",
  legalName: "Ceon Electric",
  url: SITE_URL,
  logo: `${SITE_URL}/images/ceon-logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  email: "service@ceonelectric.com",
  phone: {
    cell: { display: "(818) 430-9508", tel: "+18184309508", label: "Cell · 24/7" },
    office: { display: "(323) 963-2089", tel: "+13239632089", label: "Office" },
  },
  license: {
    type: "CSLB C-10",
    number: "1141112",
    display: "C-10 #1141112",
  },
  priceRange: "$$",
  yearsInBusiness: 12,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "16:00" },
  ],
  emergencyHours: "24/7 emergency response",
  areasServed: [
    "Los Angeles",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Culver City",
    "Sherman Oaks",
    "Studio City",
    "Woodland Hills",
    "Mar Vista",
    "West Hollywood",
    "Venice",
    "Reseda",
    "San Fernando",
  ],
  sameAs: [
    "https://www.trustpilot.com/review/ceonelectric.com",
  ],
};
