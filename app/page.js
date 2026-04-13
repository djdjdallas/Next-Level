import Link from "next/link";
import {
  Zap,
  Shield,
  Clock,
  Star,
  Phone,
  BadgeCheck,
  Car,
  Lightbulb,
  Plug,
  Home,
  Wrench,
  Building2,
  Fan,
  Cable,
  Search,
  HardHat,
  ArrowRight,
} from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured", sub: "C10 Lic. #11411112" },
  { icon: Clock, label: "10+ Years Experience", sub: "Trusted professionals" },
  { icon: Star, label: "5-Star Rated", sub: "Top-rated on Google" },
  { icon: BadgeCheck, label: "Free Estimates", sub: "No obligation quotes" },
];

const services = [
  {
    icon: Zap,
    title: "Emergency Repair 24/7",
    desc: "Round-the-clock emergency electrical service when you need it most.",
  },
  {
    icon: Wrench,
    title: "Electrical Panel Upgrades",
    desc: "Upgrade your electrical panel for safety, capacity, and code compliance.",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    desc: "Professional Level 2 EV charger installation for your home or business.",
  },
  {
    icon: Plug,
    title: "Outlets & Switches",
    desc: "Install, replace, or upgrade outlets, switches, and GFCI receptacles.",
  },
  {
    icon: Lightbulb,
    title: "Recessed Lighting",
    desc: "Modern recessed and LED lighting to transform any space.",
  },
  {
    icon: Cable,
    title: "Rewiring",
    desc: "Complete home rewiring for older homes to meet modern safety standards.",
  },
  {
    icon: HardHat,
    title: "New Construction Wiring",
    desc: "Full electrical systems for new construction and remodel projects.",
  },
  {
    icon: Fan,
    title: "Bathroom & Ceiling Fans",
    desc: "Expert installation of exhaust fans, ceiling fans, and ventilation.",
  },
  {
    icon: Cable,
    title: "Low Voltage",
    desc: "Low voltage wiring for data, security systems, and smart home setups.",
  },
  {
    icon: Search,
    title: "Safety Inspections",
    desc: "Comprehensive electrical safety inspections and code compliance checks.",
  },
  {
    icon: Home,
    title: "ADU Additions",
    desc: "Complete electrical wiring for accessory dwelling units and additions.",
  },
  {
    icon: Building2,
    title: "Commercial & Residential",
    desc: "Serving both commercial properties and residential homes across LA.",
  },
];

// TODO: Replace with real customer reviews
const testimonials = [
  {
    name: "Maria S.",
    location: "Woodland Hills, CA",
    rating: 5,
    text: "Ceon Electric upgraded our entire panel and installed recessed lighting throughout the house. Professional, on time, and very fair pricing. Highly recommend!",
  },
  {
    name: "James T.",
    location: "Reseda, CA",
    rating: 5,
    text: "Called them for an emergency repair on a Saturday night and they were at my door within an hour. Fixed the issue quickly and explained everything. True lifesaver!",
  },
  {
    name: "Linda R.",
    location: "Santa Monica, CA",
    rating: 5,
    text: "Had an EV charger installed in our garage. The work was clean, fast, and up to code. They even helped us understand the permit process. Will definitely use again.",
  },
];

const serviceAreas = [
  "Los Angeles",
  "San Fernando",
  "Reseda",
  "Woodland Hills",
  "Santa Monica",
  "San Bernardino",
  "Delano",
  "Bakersfield",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Licensed &amp; Insured — C10 Lic. #11411112
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Licensed Electrician{" "}
              <span className="text-gold">You Can Trust</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Ceon Electric provides expert commercial and residential electrical
              services throughout the greater Los Angeles area. From panel
              upgrades to EV chargers — we&apos;ve got you covered.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-gold-light"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {/* TODO: Replace with real phone number */}
              <a
                href="tel:5550000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-5 w-5" />
                (555) 000-0000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <badge.icon className="h-8 w-8 text-gold" />
                <p className="font-display text-sm font-bold text-navy sm:text-base">
                  {badge.label}
                </p>
                <p className="text-xs text-muted-foreground">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Our Electrical Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From emergency repairs to full-scale commercial projects, Ceon
              Electric delivers quality electrical work you can depend on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Don&apos;t just take our word for it — hear from homeowners and
              businesses across LA who trust Ceon Electric.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/50">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Proudly Serving
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ceon Electric provides electrical services across the greater Los
              Angeles area and beyond.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy/10 bg-navy/5 px-5 py-2 text-sm font-medium text-navy"
              >
                {area}
              </span>
            ))}
            <span className="rounded-full border border-gold/20 bg-gold/5 px-5 py-2 text-sm font-medium text-gold-dark">
              &amp; Surrounding Areas
            </span>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-navy/80">
                Call us today or request a free quote — no obligation, no
                hassle.
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
