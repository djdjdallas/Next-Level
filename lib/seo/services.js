export const SERVICES = [
  {
    slug: "panel-upgrade",
    name: "Electrical Panel Upgrade",
    short: "200-amp and 400-amp panel upgrades",
    description:
      "Replace outdated, undersized, or hazardous electrical panels with modern service equipment sized for today's loads — heat pumps, EV chargers, induction ranges, and backup power.",
    priceRange: "$2,500 – $6,500",
    hero: "/images/projects/main-service-panel-200a.jpg",
    heroAlt: "200-amp main service panel upgrade installed by Ceon Electric",
  },
  {
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    short: "Level 2 home EV charger installation",
    description:
      "Licensed installation of Tesla Wall Connector, ChargePoint, Wallbox, JuiceBox, and Emporia Level 2 chargers. Permit-pulled, code-compliant, and sized to your panel.",
    priceRange: "$900 – $2,400",
    hero: "/images/projects/tesla-wall-connector.jpg",
    heroAlt: "Tesla Wall Connector EV charger installed by Ceon Electric",
  },
  {
    slug: "emergency-repair",
    name: "24/7 Emergency Electrical Repair",
    short: "Same-day emergency electrical service",
    description:
      "Licensed electricians on call 24/7 for power outages, sparking outlets, burning smells, tripping breakers, and any active electrical hazard.",
    priceRange: "From $189 diagnostic",
  },
  {
    slug: "rewiring",
    name: "Whole-Home Rewiring",
    short: "Knob-and-tube and aluminum replacement",
    description:
      "Full or partial rewiring for older LA homes — replacing knob-and-tube, aluminum branch circuits, and ungrounded outlets with modern copper and grounded service.",
    priceRange: "$8,000 – $25,000",
  },
  {
    slug: "sub-panel",
    name: "Sub-Panel Installation",
    short: "ADU, garage, and workshop sub-panels",
    description:
      "Sub-panels for ADUs, garages, workshops, and additions. Permit-pulled, coordinated with the main panel's available capacity.",
    priceRange: "$1,200 – $3,500",
  },
  {
    slug: "recessed-lighting",
    name: "Recessed Lighting",
    short: "Recessed lighting layout and installation",
    description:
      "Recessed LED lighting with designed layouts, dimmer integration, and clean ceiling patches. Code-compliant air-tight and IC-rated housings.",
    priceRange: "$150 – $350 per fixture",
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
