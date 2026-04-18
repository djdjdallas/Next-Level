import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, ShieldCheck, Star, Users, Award } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Recent Electrical Projects in Los Angeles | Ceon Electric",
  description:
    "Real jobsite photos from recent Ceon Electric projects across LA: 200A panel upgrades, Tesla Wall Connector installs, custom lighting, ADU work, and more.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Recent Projects | Ceon Electric",
    description:
      "Panel upgrades, EV chargers, custom lighting, rewiring, and ADU electrical work across LA.",
    url: "/projects",
  },
};

const categories = [
  "All Projects",
  "Panel Upgrades",
  "EV Chargers",
  "Rewiring",
  "Lighting",
  "Commercial",
  "ADU",
  "Custom Builds",
];

const projects = [
  {
    title: "Entertainment Wall with Linear Fireplace",
    category: "Custom Builds",
    desc: "Full custom entertainment wall featuring a mounted TV with LED backlight, stacked-stone niches, and a wall-mounted linear fireplace. Wiring, low-voltage runs, and dedicated circuits handled end-to-end.",
    image: "/images/projects/entertainment-wall-finished.jpg",
  },
  {
    title: "LED-Backlit Bathroom Vanity",
    category: "Lighting",
    desc: "Installed a backlit LED mirror with touch controls over a double vessel-sink vanity. Included dedicated circuit, dimmer, and coordinated vanity fixture above the mirror.",
    image: "/images/projects/bathroom-vanity-lighting.jpg",
  },
  {
    title: "Tesla Wall Connector Install",
    category: "EV Chargers",
    desc: "Tesla Wall Connector installed in a residential garage with a dedicated circuit from the main panel. Clean mount, strain-relieved whip, and ready for daily charging.",
    image: "/images/projects/tesla-wall-connector.jpg",
  },
  {
    title: "200A Siemens Service Panel",
    category: "Panel Upgrades",
    desc: "Exterior 200A Siemens service upgrade with rigid conduit, new meter main, and code-compliant labeling. Replaces a dated panel and gives the home headroom for EV and HVAC additions.",
    image: "/images/projects/main-service-panel-200a.jpg",
  },
  {
    title: "Entertainment Wall Rough-In",
    category: "Custom Builds",
    desc: "Framed drywall niches and TV mount rough-in for a full feature wall. All recessed lighting, outlets, and low-voltage stubbed before drywall closed up.",
    image: "/images/projects/entertainment-wall-rough-in.jpg",
  },
  {
    title: "Wallbox EV Charger Install",
    category: "EV Chargers",
    desc: "Wallbox Pulsar Plus installed on a dedicated 240V circuit in a residential garage. Surface conduit and weather-rated disconnect for easy future service.",
    image: "/images/projects/wallbox-ev-charger.jpg",
  },
  {
    title: "Emporia EV Charger — Exterior",
    category: "EV Chargers",
    desc: "Emporia Level 2 charger installed on an exterior stucco wall with a rigid conduit run down to a NEMA-rated junction. Clean vertical drop, no exposed Romex.",
    image: "/images/projects/emporia-ev-charger.jpg",
  },
  {
    title: "ChargePoint Home Flex Install",
    category: "EV Chargers",
    desc: "ChargePoint Home Flex mounted with a rain-tight disconnect and conduit run to the panel. Cable loop organized on the wall for a tidy daily-driver setup.",
    image: "/images/projects/chargepoint-ev-charger.jpg",
  },
  {
    title: "200A Panel Upgrade",
    category: "Panel Upgrade",
    desc: "Complete 200-amp panel upgrade for a 1960s ranch home in Woodland Hills. Replaced an outdated Federal Pacific panel with a modern Siemens loadcenter.",
    image: "/images/panel-upgrade.png",
  },
  {
    title: "Full Home Rewire",
    category: "Rewiring",
    desc: "Replaced all knob-and-tube wiring in a 1940s bungalow in Reseda. New romex wiring, GFCI outlets, and a 200-amp panel.",
    image: "/images/rough-in.png",
  },
  {
    title: "Recessed Lighting — Kitchen & Living Room",
    category: "Lighting",
    desc: "Designed and installed 24 LED recessed lights with dimmers across an open-concept kitchen and living room in a San Fernando home.",
    image: "/images/recessed-lighting.png",
  },
  {
    title: "Commercial Sub-Panel Install",
    category: "Commercial",
    desc: "Organized sub-panel installation for a 2,000 sq ft retail space in Los Angeles. Labeled directory, conduit runs, and inspected to code.",
    image: "/images/sub-panel.png",
  },
  {
    title: "ADU Outlets & Switch Trim",
    category: "ADU",
    desc: "Complete electrical trim for a 500 sq ft ADU in Bakersfield. USB outlets, dimmer switches, GFCI protection, and final inspection.",
    image: "/images/outlets-switches.png",
  },
  {
    title: "Bathroom Exhaust Fan Install",
    category: "Ventilation",
    desc: "Quiet-motor exhaust fan installed with proper exterior venting in a Santa Monica primary bath. Code-compliant and moisture-safe.",
    image: "/images/bathroom-fan.png",
  },
  {
    title: "Living Room Ceiling Fan",
    category: "Lighting",
    desc: "Residential ceiling fan with remote-compatible light kit installed in an open-concept living room in Woodland Hills.",
    image: "/images/ceiling-fan.png",
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "450+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "12+", label: "Years Experience" },
];

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/entertainment-wall-finished.jpg"
            alt="Ceon Electric project portfolio"
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
              <Star className="h-4 w-4" />
              Our Work
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Recent <span className="text-gold">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Browse some of our recent electrical projects across the greater
              Los Angeles area. Quality workmanship on every job — residential
              and commercial.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100"
              >
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-navy font-display">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  idx === 0
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-gray-200 hover:border-gold hover:text-gold cursor-pointer"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-bold text-gold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy font-display">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {project.desc}
                  </p>
                </div>
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
              Ready to start your project?
            </h2>
            <p className="text-navy/80 text-lg mb-10 max-w-xl relative z-10">
              Tell us about your project and we&apos;ll put together a free,
              no-obligation quote. 24/7 emergency service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-navy-light transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
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
