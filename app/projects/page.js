import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projects — Ceon Electric",
  description:
    "Browse recent electrical projects completed by Ceon Electric across the Los Angeles area. Panel upgrades, EV chargers, rewiring, and more.",
};

// TODO: Replace placeholder images with real project photos
const projects = [
  {
    title: "200A Panel Upgrade",
    category: "Panel Upgrade",
    desc: "Complete 200-amp panel upgrade for a 1960s ranch home in Woodland Hills. Replaced outdated Federal Pacific panel with modern Siemens loadcenter.",
    image: "https://picsum.photos/seed/panel1/600/400",
  },
  {
    title: "Tesla Wall Connector Install",
    category: "EV Charger",
    desc: "Installed a Tesla Wall Connector with a dedicated 60-amp circuit in a residential garage in Santa Monica. Included sub panel addition.",
    image: "https://picsum.photos/seed/evcharger/600/400",
  },
  {
    title: "Full Home Rewire",
    category: "Rewiring",
    desc: "Replaced all knob-and-tube wiring in a 1940s bungalow in Reseda. Installed new romex wiring, GFCI outlets, and a 200-amp panel.",
    image: "https://picsum.photos/seed/rewire1/600/400",
  },
  {
    title: "Recessed Lighting — Kitchen & Living Room",
    category: "Lighting",
    desc: "Designed and installed 24 LED recessed lights with dimmers across an open-concept kitchen and living room in a San Fernando home.",
    image: "https://picsum.photos/seed/lighting1/600/400",
  },
  {
    title: "Commercial Tenant Build-Out",
    category: "Commercial",
    desc: "Full electrical rough-in and trim for a 2,000 sq ft retail space in Los Angeles. Included lighting, power circuits, and data drops.",
    image: "https://picsum.photos/seed/commercial1/600/400",
  },
  {
    title: "ADU Electrical — Backyard Unit",
    category: "ADU",
    desc: "Complete electrical system for a new 500 sq ft ADU in Bakersfield. Sub panel, circuits, lighting, HVAC hookup, and final inspection.",
    image: "https://picsum.photos/seed/adu1/600/400",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Our Work
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              Recent Projects
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Browse some of our recent electrical projects across the greater
              Los Angeles area. Quality workmanship on every job.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                {/* TODO: Replace placeholder images with real project photos */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-dark">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
