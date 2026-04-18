import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  AlertTriangle,
  FileCheck2,
  Clock,
  DollarSign,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { SERVICES_BY_SLUG } from "@/lib/seo/services";
import { BUSINESS } from "@/lib/seo/business";
import { serviceSchema } from "@/lib/seo/schema";

const SERVICE = SERVICES_BY_SLUG["panel-upgrade"];

export const metadata = {
  title: "Panel Upgrades in Los Angeles | 200-Amp & 400-Amp Service",
  description:
    "Licensed C-10 electrician for electrical panel upgrades in Los Angeles. 100→200A and 200→400A service. Zinsco and FPE replacement. Permit-pulled, code-compliant.",
  alternates: { canonical: "/services/panel-upgrade" },
  openGraph: {
    title: "Panel Upgrades in Los Angeles | Ceon Electric",
    description:
      "200-amp and 400-amp panel upgrades in LA. Replace Zinsco and FPE panels. Permit-pulled, utility-coordinated.",
    url: "/services/panel-upgrade",
    images: [{ url: SERVICE.hero }],
  },
};

const symptoms = [
  "Your panel is a Zinsco, Federal Pacific (FPE), or Pushmatic — all known fire risks.",
  "You're planning an EV charger, heat pump, or induction range and ran a load calc.",
  "Breakers trip regularly, especially during summer or holiday cooking.",
  "The panel is 60 or 100 amps and you're out of slots.",
  "You see rust, discoloration, or scorching around breakers.",
  "You're adding an ADU or finishing a garage into living space.",
];

const steps = [
  {
    title: "Load calculation & site walk",
    desc:
      "We size the new service to your actual and future load — EVs, heat pumps, ADU, pool. No upselling, no undersizing.",
  },
  {
    title: "Permit & utility coordination",
    desc:
      "We pull the LADBS permit and coordinate the service upgrade with SCE or LADWP, including any required meter-pan replacement.",
  },
  {
    title: "Panel swap (typically 1 day)",
    desc:
      "Power is off for 4–8 hours. We label every circuit, torque every lug to spec, and photograph the build-out for your records.",
  },
  {
    title: "Inspection & energize",
    desc:
      "City inspection, utility reconnect, and a walkthrough of the new panel so you know what's where.",
  },
];

const faqs = [
  {
    q: "How long does a panel upgrade take in Los Angeles?",
    a: "Most 100→200A residential upgrades take a single day of on-site work. Permit and utility scheduling adds 1–3 weeks to the overall timeline depending on LADBS and SCE/LADWP load.",
  },
  {
    q: "How much does a panel upgrade cost in Los Angeles?",
    a: `${SERVICE.priceRange} covers the most common 100→200A residential upgrade with a standard meter location. Add-ons — service mast replacement, meter-main combo, long service runs, 400-amp service, or a sub-panel — are quoted separately. See our full cost guide for a detailed breakdown.`,
  },
  {
    q: "Do I need a permit to upgrade my panel?",
    a: "Yes. Every panel upgrade in Los Angeles requires an LADBS electrical permit and a city inspection. We pull the permit in our name and meet the inspector. Work done without a permit is a liability at resale.",
  },
  {
    q: "My panel is a Zinsco or FPE — is it actually dangerous?",
    a: "Yes. Zinsco and Federal Pacific Stab-Lok panels are well-documented as fire hazards because their breakers fail to trip under overcurrent conditions. Most insurers will surcharge or refuse to renew homes with them. Replacement is the right call on safety alone.",
  },
  {
    q: "Can I keep the power on during the work?",
    a: "No — the main service has to be de-energized during the swap. We plan the outage window with you (typically 4–8 hours) and sequence the work to minimize impact on refrigerators, medical equipment, and home offices.",
  },
  {
    q: "Do you upgrade to 400-amp service?",
    a: "Yes. 400-amp service is increasingly common on larger LA homes with dual EV chargers, pool equipment, and heat-pump HVAC. We evaluate the utility service drop and meter equipment to confirm 400A is feasible at your property.",
  },
  {
    q: "Will the panel upgrade satisfy my solar/EV/heat-pump installer's requirements?",
    a: "That's usually the reason customers call us. We coordinate with your solar installer, EV installer, or HVAC contractor on the required service size, main breaker rating, and backfeed provisions so the downstream install passes inspection cleanly.",
  },
];

export default function PanelUpgradePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Panel Upgrades", url: "/services/panel-upgrade" },
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
              200-Amp Panel Upgrades in{" "}
              <span className="text-gold">Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Replace an undersized or unsafe electrical panel with a modern
              200-amp or 400-amp service sized for EVs, heat pumps, and whatever
              comes next. Permit-pulled, utility-coordinated, inspected.
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
                LADBS-permitted
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                SCE & LADWP coordinated
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                12+ years experience
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              When you need a panel upgrade
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Most LA homeowners call us because one of these applies. If more
            than one does, the upgrade is almost certainly overdue.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 bg-muted rounded-2xl p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <FileCheck2 className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              How the upgrade works
            </h2>
          </div>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 flex gap-5 shadow-sm"
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

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-navy text-white rounded-3xl p-8">
            <DollarSign className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-display">Typical pricing</h3>
            <div className="text-3xl font-bold text-gold mb-2">
              {SERVICE.priceRange}
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Covers most 100→200A residential upgrades with a standard meter
              location. Service mast, meter-main combo, and 400-amp service
              quoted separately.
            </p>
            <Link
              href="/panel-upgrade-cost-los-angeles"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light"
            >
              See full LA cost breakdown
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-3xl p-8">
            <Clock className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-display text-navy">
              Permits & timeline
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every panel upgrade in LA requires an{" "}
              <strong>LADBS electrical permit</strong> and a city inspection.
              Permit and utility scheduling typically adds 1–3 weeks. On-site
              work is usually a single day.
            </p>
            <p className="text-sm text-gray-600">
              We pull the permit in our name, meet the inspector, and handle
              the SCE/LADWP coordination.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-display">
            Ready to plan your panel upgrade?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Free estimates. We'll size the service correctly, pull the permit,
            and coordinate with your utility — no guesswork.
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
          slug: "/services/panel-upgrade",
          serviceType: "Electrical Panel Upgrade",
        })}
      />
    </>
  );
}
