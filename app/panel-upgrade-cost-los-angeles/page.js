import Link from "next/link";
import {
  DollarSign,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Wrench,
  Building2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { BUSINESS } from "@/lib/seo/business";

export const metadata = {
  title: "Panel Upgrade Cost in Los Angeles (2026 Pricing Guide)",
  description:
    "What a panel upgrade actually costs in Los Angeles: 100→200A, 200→400A, sub-panels, permit fees, and hidden cost drivers. Honest 2026 pricing from a licensed C-10.",
  alternates: { canonical: "/panel-upgrade-cost-los-angeles" },
  openGraph: {
    title: "Panel Upgrade Cost in Los Angeles — 2026 Guide",
    description:
      "Honest 2026 panel upgrade pricing in LA. 100→200A, 200→400A, sub-panels, permit breakdown, and cost drivers.",
    url: "/panel-upgrade-cost-los-angeles",
  },
};

const costs = [
  {
    job: "100-amp → 200-amp (standard)",
    range: "$2,500 – $4,500",
    note: "Most common upgrade. Same meter location, no service-mast rework.",
  },
  {
    job: "100-amp → 200-amp (with mast/meter-main rework)",
    range: "$4,000 – $6,500",
    note: "Adds service-mast replacement, meter-main combo, or short underground service fix.",
  },
  {
    job: "200-amp → 400-amp service",
    range: "$6,500 – $12,000",
    note: "Larger homes with dual EVs, pool equipment, or heat-pump HVAC.",
  },
  {
    job: "Sub-panel installation",
    range: "$1,200 – $3,500",
    note: "ADU, garage, workshop, or pool-equipment sub-panel.",
  },
  {
    job: "Zinsco / FPE / Pushmatic replacement",
    range: "$2,500 – $5,000",
    note: "Direct swap with matching amperage, or combine with an amperage upgrade.",
  },
];

const drivers = [
  {
    title: "Service amperage",
    desc: "200A vs 400A is the biggest single cost driver. 400A requires heavier meter equipment, a larger utility service drop, and more labor.",
  },
  {
    title: "Meter location and service mast",
    desc: "If the service mast is old, rusted, or undersized, it has to be replaced. If the meter has to move (for clearance code or access), that adds labor and sometimes trenching.",
  },
  {
    title: "Utility coordination",
    desc: "SCE and LADWP have different response times. LADWP jobs can add scheduling overhead but no direct cost. SCE may require a temporary disconnect fee.",
  },
  {
    title: "LADBS permit fees",
    desc: "Typically $100–$500 for residential, depending on service size. Included in our quoted price — not a surprise add-on.",
  },
  {
    title: "Access and finish work",
    desc: "Stucco patching, interior drywall repair, and paint touch-up behind the new panel are sometimes included, sometimes separate. Ask us before signing.",
  },
  {
    title: "Grounding and bonding updates",
    desc: "Older homes often don't have a code-compliant ground-electrode system. A full panel upgrade usually requires bringing that up to code at the same time.",
  },
];

const faqs = [
  {
    q: "Why is a panel upgrade more expensive in LA than other cities?",
    a: "Three reasons: (1) LADBS permit fees and seismic bracing requirements, (2) higher labor rates tied to California's C-10 licensing and union/prevailing-wage norms, and (3) utility coordination with SCE or LADWP, which often requires temp disconnects. The quality and safety of the result reflects those costs.",
  },
  {
    q: "Is a permit really required?",
    a: "Yes. Every panel upgrade in the City of Los Angeles requires an LADBS electrical permit and an inspection. Permit-less work is a red flag at resale — many buyers walk or reduce their offer. If a contractor offers to skip the permit to save you money, that's a liability, not a discount.",
  },
  {
    q: "What's included in your quoted price?",
    a: "New panel, new main breaker, all breaker replacements, service-entrance conductors (if being replaced), grounding electrode upgrades to current code, the LADBS permit, and the city inspection. Not included: utility disconnect fees (if charged by SCE/LADWP), drywall patch/paint unless quoted, and any pre-existing code violations discovered during the work.",
  },
  {
    q: "Can I save money by buying the panel myself?",
    a: "No. We only install panels we source through our supplier because we need to stand behind the equipment's warranty. A panel bought on Amazon isn't covered by the manufacturer's contractor warranty, and it's usually not cheaper once you factor in our distributor discount.",
  },
  {
    q: "Are there rebates or tax credits that reduce the cost?",
    a: "Sometimes. If the panel upgrade is required to support a heat pump, heat pump water heater, or solar/EV install, portions of the cost may qualify under the federal 25C tax credit or IRA-funded state rebate programs. We'll flag those when we scope the job.",
  },
  {
    q: "Will my homeowner's insurance cover any of this?",
    a: "If the panel was damaged by a covered event (storm, fire, impact), yes — we'll provide itemized documentation for your adjuster. Routine upgrades for capacity or age aren't covered by insurance.",
  },
  {
    q: "How do I know which size I need?",
    a: "We run a load calculation using NEC 220 based on your square footage, HVAC, water heater, cooking loads, and planned future loads (EV, heat pump, pool). Most single-family homes in LA end up at 200A. 400A is reserved for larger homes with dual EVs or heat-pump HVAC.",
  },
];

export default function CostGuidePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Panel Upgrade Cost in LA", url: "/panel-upgrade-cost-los-angeles" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative -mt-6 py-20 md:py-28 bg-navy text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
            <DollarSign className="h-4 w-4" />
            2026 Pricing Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight font-display mb-6">
            How Much Does a Panel Upgrade Cost in{" "}
            <span className="text-gold">Los Angeles?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Short answer: <strong className="text-white">$2,500 to $6,500</strong>{" "}
            for a standard 100→200A residential upgrade. Here's exactly what
            goes into that number, what pushes it higher, and what to watch out
            for in LA specifically.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-10">
            Panel upgrade price ranges in LA
          </h2>
          <div className="space-y-4">
            {costs.map((c) => (
              <div
                key={c.job}
                className="bg-muted rounded-2xl p-6 md:p-8 grid md:grid-cols-[1.5fr_1fr_2fr] gap-4 md:gap-8 items-start border border-gray-100"
              >
                <div className="font-bold text-navy text-lg">{c.job}</div>
                <div className="text-2xl font-bold text-gold">{c.range}</div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {c.note}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Prices are LA-specific and reflect permit fees, union-adjacent
            labor costs, and utility coordination overhead. Your actual quote
            will be in writing, fixed, and based on a site walk.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              The LADBS permit side
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Every panel upgrade in the City of LA requires an{" "}
            <strong>LADBS electrical permit</strong> and a city inspection.
            Typical residential permit fees are{" "}
            <strong>$100–$500</strong> depending on service size and whether a
            plan check is required. That fee is included in our quote — not
            added later.
          </p>
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-navy mb-2">
                  Watch out for permit-less bids
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A contractor who offers to skip the permit to "save you
                  money" is saving themselves time — not saving you anything
                  real. Unpermitted panel work is a disclosure issue at resale,
                  a red flag for home inspectors, and a liability if a future
                  electrical incident is traced back to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Wrench className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              What actually drives the price up or down
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {drivers.map((d) => (
              <div
                key={d.title}
                className="bg-muted rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-navy text-lg mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-6">
            Comparing quotes: what to check
          </h2>
          <ul className="space-y-4">
            {[
              "Is the LADBS permit fee included — or added separately after the job is booked?",
              "Does the quote include grounding electrode upgrades to current code?",
              "Is the contractor pulling the permit in their name, or expecting you to pull it?",
              "What panel brand and amperage is specified — in writing?",
              "Are drywall patching and paint touch-up included, separate, or excluded?",
              "Is there a written warranty on labor, and how long?",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 bg-white rounded-2xl p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-display">
            Get a real, written quote
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Free estimates based on an actual site walk — not a phone guess.
            All permit fees and grounding work included in the quoted price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/panel-upgrade"
              className="bg-white/10 border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Panel Upgrade Service Details
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-gold text-navy px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gold-light transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Or call {BUSINESS.phone.cell.display} (24/7) ·{" "}
            {BUSINESS.phone.office.display} (office)
          </p>
        </div>
      </section>
    </>
  );
}
