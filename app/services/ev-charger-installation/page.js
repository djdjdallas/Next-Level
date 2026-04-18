import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Car,
  Zap,
  FileCheck2,
  DollarSign,
  Gauge,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { SERVICES_BY_SLUG } from "@/lib/seo/services";
import { BUSINESS } from "@/lib/seo/business";
import { serviceSchema } from "@/lib/seo/schema";

const SERVICE = SERVICES_BY_SLUG["ev-charger-installation"];

export const metadata = {
  title: "EV Charger Installation in Los Angeles | Level 2 Home Chargers",
  description:
    "Licensed Level 2 EV charger installation in LA. Tesla Wall Connector, ChargePoint, Wallbox, JuiceBox, Emporia. Permit-pulled, code-compliant, inspected.",
  alternates: { canonical: "/services/ev-charger-installation" },
  openGraph: {
    title: "EV Charger Installation in Los Angeles | Ceon Electric",
    description:
      "Level 2 home EV charger installation — Tesla, ChargePoint, Wallbox, JuiceBox. Permit-pulled, code-compliant.",
    url: "/services/ev-charger-installation",
    images: [{ url: SERVICE.hero }],
  },
};

const chargers = [
  { name: "Tesla Wall Connector", image: "/images/projects/tesla-wall-connector.jpg" },
  { name: "ChargePoint Home Flex", image: "/images/projects/chargepoint-ev-charger.jpg" },
  { name: "Wallbox Pulsar Plus", image: "/images/projects/wallbox-ev-charger.jpg" },
  { name: "Emporia Level 2", image: "/images/projects/emporia-ev-charger.jpg" },
];

const steps = [
  {
    title: "Panel & load assessment",
    desc:
      "We check your panel's main breaker size and available capacity. If a 40- or 50-amp circuit fits, great. If not, we price the panel upgrade honestly.",
  },
  {
    title: "Circuit design & routing",
    desc:
      "We plan the conduit run, mounting location, and receptacle vs. hardwire choice with you — garage, driveway, carport, or exterior wall.",
  },
  {
    title: "Permit & install",
    desc:
      "LADBS permit pulled, circuit run in conduit, dedicated breaker installed, charger mounted and commissioned. Typically 3–6 hours on site.",
  },
  {
    title: "Inspection & walkthrough",
    desc:
      "City electrical inspection, any required sign-off from your charger's app or portal, and a walkthrough of charge-rate settings.",
  },
];

const symptoms = [
  "You just bought or leased an EV and need a home charging solution.",
  "You've been charging on a 120V outlet and only getting 3–5 miles per hour.",
  "You want to take advantage of off-peak SCE/LADWP EV rates.",
  "You're planning a second EV and need dual chargers or load sharing.",
  "You're building or remodeling and want to pre-wire for EV readiness (Title 24).",
  "Your HOA just approved chargers and you need a permit-ready installer.",
];

const faqs = [
  {
    q: "How much does EV charger installation cost in Los Angeles?",
    a: `${SERVICE.priceRange} covers the typical install — charger mounted near the panel, short conduit run, 40- or 50-amp circuit, permit, and inspection. Long conduit runs, exterior trenching, or a panel upgrade are priced separately.`,
  },
  {
    q: "Which EV chargers do you install?",
    a: "All major Level 2 brands: Tesla Wall Connector, ChargePoint Home Flex, Wallbox Pulsar Plus, JuiceBox, Emporia, Grizzl-E, and others. We have no brand lock-in and no kickbacks — we install what works best for your car, panel, and use case.",
  },
  {
    q: "Do I need a permit for a home EV charger in LA?",
    a: "Yes. Installing a dedicated 40- or 50-amp Level 2 circuit requires an LADBS permit and an electrical inspection. Permit-less installs are a liability at resale and can void both manufacturer and homeowner's insurance coverage if a fire is traced to the circuit.",
  },
  {
    q: "Can my panel handle a new EV charger?",
    a: "Most 200-amp panels can support a single 40-amp EV charger. Older 100-amp panels often cannot without a load calculation that accounts for existing HVAC, water heating, and cooking loads. We run the calc before quoting the circuit.",
  },
  {
    q: "How fast will my EV charge on a Level 2?",
    a: "A 40-amp Level 2 (9.6 kW) adds roughly 25–35 miles of range per hour, depending on the car. A 48-amp Tesla Wall Connector hardwired on a 60-amp breaker adds 40+ miles per hour to a Tesla. Compared to a 120V outlet (3–5 mph), Level 2 is transformative for daily use.",
  },
  {
    q: "Can you install two EV chargers?",
    a: "Yes. For two cars we either run two dedicated circuits (if panel capacity allows) or use load-sharing between two compatible chargers on a single circuit. The right approach depends on your panel, commute, and whether both cars need to charge simultaneously.",
  },
  {
    q: "Do you handle Title 24 / CALGreen EV-ready rough-ins for new construction?",
    a: "Yes. We work with GCs on new-construction and major-remodel projects to meet Title 24 and CALGreen EV-ready conduit and panel-capacity requirements, including EVCS pre-wires for multifamily and ADU projects.",
  },
];

export default function EVChargerPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "EV Charger Installation", url: "/services/ev-charger-installation" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative -mt-6 py-20 md:py-28 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4" />
              Licensed C-10 #{BUSINESS.license.number}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight font-display mb-6">
              Level 2 EV Charger Installation in{" "}
              <span className="text-gold">Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Tesla, ChargePoint, Wallbox, JuiceBox, Emporia — whatever charger
              your car needs, installed right. Permit-pulled, load-calculated,
              inspected by the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone.cell.tel}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Call {BUSINESS.phone.cell.display}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                All major brands
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                LADBS-permitted
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Title 24-ready
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={SERVICE.hero}
              alt={SERVICE.heroAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
              Every major Level 2 charger, installed right
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No brand lock-in. We install what works best for your car, panel,
              and daily use — and we'll tell you honestly when a panel upgrade
              is part of the story.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {chargers.map((c) => (
              <div
                key={c.name}
                className="bg-muted rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="relative aspect-square">
                  <Image
                    src={c.image}
                    alt={`${c.name} installed by Ceon Electric`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center font-semibold text-navy text-sm">
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-8">
            When you need a Level 2 installed
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <li key={s} className="flex items-start gap-3 bg-white rounded-2xl p-5">
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <FileCheck2 className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              How the install works
            </h2>
          </div>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="bg-muted rounded-3xl p-6 md:p-8 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-navy text-white rounded-3xl p-8">
            <DollarSign className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-display">Typical pricing</h3>
            <div className="text-3xl font-bold text-gold mb-2">
              {SERVICE.priceRange}
            </div>
            <p className="text-gray-300 text-sm">
              Covers the typical 40/50-amp circuit install near the panel. Long
              conduit runs, exterior trenching, or a required panel upgrade are
              quoted separately.
            </p>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-3xl p-8">
            <Gauge className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-display text-navy">
              Charge rate you'll actually see
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A 40-amp Level 2 (9.6 kW) adds <strong>25–35 miles of range
              per hour</strong>. A 48-amp Tesla Wall Connector on a dedicated
              60-amp breaker adds 40+ mph to a Tesla. Plug into a 120V outlet
              instead? 3–5 mph.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Car className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-display">
            Get your EV charger installed this week
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Free quote, honest panel assessment, permit pulled. No charger
            brand bias — we install the one that fits your car and panel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-navy px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gold-light transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone.cell.tel}`}
              className="bg-white/10 border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
            >
              Call {BUSINESS.phone.cell.display}
            </a>
          </div>
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: SERVICE.name,
          description: SERVICE.description,
          slug: "/services/ev-charger-installation",
          serviceType: "EV Charger Installation",
        })}
      />
    </>
  );
}
