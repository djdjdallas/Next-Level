import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Car,
  Lightbulb,
  Plug,
  Wrench,
  Cable,
  HardHat,
  Fan,
  Search,
  Home,
  Building2,
  ArrowRight,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Electrical Services in Los Angeles | Licensed C-10 Electrician",
  description:
    "Full-service LA electrician: panel upgrades, EV chargers, rewiring, recessed lighting, 24/7 emergency repair, commercial, and ADU electrical work.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Electrical Services in Los Angeles | Ceon Electric",
    description:
      "Panel upgrades, EV chargers, rewiring, recessed lighting, 24/7 emergency, commercial, and ADU work.",
    url: "/services",
  },
};

const services = [
  {
    icon: Zap,
    title: "Emergency Repair 24/7",
    desc: "Electrical emergencies don't wait — and neither do we. Our team is available around the clock to handle power outages, sparking outlets, tripped breakers, and other urgent issues.",
    href: "/emergency-electrician-los-angeles",
  },
  {
    icon: Wrench,
    title: "Electrical Panel Upgrades",
    desc: "Upgrade electrical panels to handle modern power demands safely. Whether you're adding a new appliance, upgrading your home, or meeting code requirements — we've got you covered.",
    href: "/services/panel-upgrade",
  },
  {
    icon: Layers,
    title: "Sub Panels",
    desc: "Need additional circuit capacity in your garage, workshop, or ADU? We install sub panels to distribute power safely and efficiently without overloading your main panel.",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    desc: "Level 2 EV chargers from Tesla, ChargePoint, JuiceBox and more. We handle permits, panel upgrades, and final installation so you can charge at home with confidence.",
    href: "/services/ev-charger-installation",
  },
  {
    icon: Plug,
    title: "Outlets & Switches",
    desc: "From new outlets and USB receptacles to switches and GFCI protection in wet areas — every outlet properly grounded and up to current code.",
  },
  {
    icon: Lightbulb,
    title: "Recessed Lighting",
    desc: "Transform any room with professionally installed recessed lighting. Layout design, fixture selection, and dimmer integration for the perfect ambiance.",
  },
  {
    icon: Cable,
    title: "Rewiring",
    desc: "Older homes with knob-and-tube or aluminum wiring are a safety hazard. Full and partial rewiring services to bring your home up to modern safety standards.",
  },
  {
    icon: HardHat,
    title: "New Construction Wiring",
    desc: "Complete electrical systems for new construction. From rough-in to final trim, we work with general contractors and homeowners on every phase.",
  },
  {
    icon: Fan,
    title: "Bathroom & Ceiling Fans",
    desc: "Proper ventilation prevents mold and moisture damage. We install exhaust fans, ceiling fans, and handle venting to the exterior.",
  },
  {
    icon: Sparkles,
    title: "Lighting Design",
    desc: "Chandeliers, pendants, track lighting, and custom exterior lighting — we handle installation with care and help you pick the perfect fixtures.",
  },
  {
    icon: Cable,
    title: "Low Voltage",
    desc: "Clean, organized runs for security cameras, Cat6 networking, home theaters, doorbells, and smart home systems.",
  },
  {
    icon: Search,
    title: "Safety Inspections",
    desc: "Comprehensive inspections identify hazards before they become problems. Ideal for home purchases, insurance requirements, or peace of mind.",
  },
  {
    icon: Home,
    title: "ADU Additions",
    desc: "Complete electrical services for ADU projects — panel upgrades, new circuits, lighting, outlets, and appliance connections, all permitted and inspected.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    desc: "Retail build-outs, office tenant improvements, multi-unit apartments — we have the experience and licensing for projects of all sizes.",
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/panel-upgrade.png"
            alt="Electrical panel upgrade by Ceon Electric"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4" />
              What We Do
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Our Electrical <span className="text-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              From small repairs to major installations, Ceon Electric delivers
              quality workmanship on every job. All work is licensed, permitted,
              and inspected.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="service-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    idx % 2 === 0
                      ? "bg-navy/5 text-navy"
                      : "bg-gold/10 text-gold"
                  }`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
                <Link
                  href={service.href || "/contact"}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-gold transition-colors hover:text-gold-dark"
                >
                  {service.href ? "Learn More" : "Request a Quote"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold rounded-[40px] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -top-10 opacity-10">
              <Zap className="h-48 w-48 text-navy" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 relative z-10 font-display">
              Need electrical work done right?
            </h2>
            <p className="text-navy/80 text-lg mb-10 max-w-xl relative z-10">
              Get a free, no-obligation estimate for your project today. We
              respond within 1 business hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-light transition-all shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+18184309508"
                className="bg-white text-navy px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-lg"
              >
                (818) 430-9508
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
