import Link from "next/link";
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
  Phone,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Services — Ceon Electric",
  description:
    "Explore our full range of commercial and residential electrical services in the Los Angeles area. From emergency repairs to EV charger installation.",
};

const services = [
  {
    icon: Zap,
    title: "Emergency Repair 24/7",
    desc: "Electrical emergencies don't wait — and neither do we. Our team is available around the clock to handle power outages, sparking outlets, tripped breakers, and other urgent issues. We arrive fast with fully stocked trucks to get your power restored safely.",
  },
  {
    icon: Wrench,
    title: "Electrical Panel Upgrades",
    desc: "Is your panel outdated or running at capacity? We upgrade electrical panels to handle modern power demands safely. Whether you're adding a new appliance, upgrading your home, or meeting code requirements, we'll make sure your panel is up to the task.",
  },
  {
    icon: Layers,
    title: "Sub Panels",
    desc: "Need additional circuit capacity in your garage, workshop, or ADU? We install sub panels to distribute power safely and efficiently to new areas of your property without overloading your main panel.",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    desc: "Drive electric? We install Level 2 EV chargers from all major brands including Tesla, ChargePoint, and JuiceBox. Our team handles the full process from permit to panel upgrade to final installation, so you can charge at home with confidence.",
  },
  {
    icon: Plug,
    title: "Outlets & Switches",
    desc: "From adding new outlets and USB receptacles to replacing old switches and upgrading to GFCI protection in wet areas, we handle it all. We ensure every outlet is properly grounded and meets current electrical code.",
  },
  {
    icon: Lightbulb,
    title: "Recessed Lighting",
    desc: "Transform any room with professionally installed recessed lighting. We help with layout design, fixture selection, and dimmer integration to create the perfect ambiance for your home or commercial space.",
  },
  {
    icon: Cable,
    title: "Rewiring",
    desc: "Older homes with knob-and-tube or aluminum wiring can be a safety hazard. We provide full and partial rewiring services to bring your home up to modern safety standards, improving both safety and insurance eligibility.",
  },
  {
    icon: HardHat,
    title: "New Construction Wiring",
    desc: "Building new? We work with general contractors and homeowners to design and install complete electrical systems for new construction. From rough-in to final trim, we handle every phase of the build.",
  },
  {
    icon: Fan,
    title: "Bathroom Fans",
    desc: "Proper ventilation is essential for preventing mold and moisture damage. We install and replace bathroom exhaust fans, ensuring adequate airflow and code compliance. We also handle venting to the exterior.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Ceiling Fans",
    desc: "Whether you need a new ceiling fan in the bedroom or updated lighting fixtures throughout your home, our electricians handle installation with care. We work with all fixture types including chandeliers, pendants, and track lighting.",
  },
  {
    icon: Cable,
    title: "Low Voltage",
    desc: "We install low voltage wiring for security cameras, Cat6 networking, home theaters, doorbells, and smart home systems. Clean, organized runs with proper labeling so your systems work flawlessly.",
  },
  {
    icon: Search,
    title: "Safety Inspections",
    desc: "Our comprehensive electrical inspections identify potential hazards before they become problems. Ideal for home purchases, insurance requirements, or peace of mind. We provide detailed reports with recommended repairs.",
  },
  {
    icon: Home,
    title: "ADU Additions",
    desc: "Building an accessory dwelling unit? We provide complete electrical services for ADU projects including panel upgrades, new circuits, lighting, outlets, and appliance connections — all permitted and inspected.",
  },
  {
    icon: Building2,
    title: "Commercial & Residential",
    desc: "From retail build-outs and office tenant improvements to single-family homes and multi-unit apartments, Ceon Electric has the experience and licensing to handle projects of all sizes across commercial and residential sectors.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              What We Do
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              Our Electrical Services
            </h1>
            <p className="mt-4 text-lg text-white/80">
              From small repairs to major installations, Ceon Electric delivers
              quality workmanship on every job. All work is licensed, permitted,
              and inspected.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex gap-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Need electrical work done right?
              </h2>
              <p className="mt-2 text-navy/80">
                Get a free, no-obligation estimate for your project today.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-navy px-8 py-3 font-semibold text-white transition-colors hover:bg-navy-light"
              >
                Get a Free Quote
              </Link>
              {/* TODO: Replace with real phone number */}
              <a
                href="tel:5550000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-8 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <Phone className="h-4 w-4" />
                (555) 000-0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
