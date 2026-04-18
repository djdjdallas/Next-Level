import Link from "next/link";
import {
  PhoneCall,
  AlertTriangle,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Zap,
  MapPin,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { BUSINESS } from "@/lib/seo/business";
import { serviceSchema } from "@/lib/seo/schema";

export const metadata = {
  title: "Emergency Electrician Los Angeles | 24/7 Electrical Service",
  description:
    "24/7 emergency electrician in Los Angeles. Power outages, sparking outlets, burning smells, dead panels. Licensed C-10 — call (818) 430-9508.",
  alternates: { canonical: "/emergency-electrician-los-angeles" },
  openGraph: {
    title: "24/7 Emergency Electrician in Los Angeles | Ceon Electric",
    description:
      "Licensed C-10 emergency electrician answering 24/7. Power outages, sparking outlets, burning smells. Call (818) 430-9508.",
    url: "/emergency-electrician-los-angeles",
  },
};

const handles = [
  "Total or partial power outage in your home or business",
  "Sparking outlets, switches, or breakers",
  "Burning smell from an outlet, panel, or junction box",
  "Breakers that won't reset or trip immediately",
  "Exposed or damaged wiring after a storm, flood, or impact",
  "Dead main panel or utility service damage",
  "Outlets or circuits hot to the touch",
  "Flickering lights with no storm or utility cause",
];

const faqs = [
  {
    q: "Do you really answer 24/7?",
    a: `Yes. Call ${BUSINESS.phone.cell.display} any time — that line goes to a licensed electrician, not a call center. If it's safer to text, you can, but for active hazards please call.`,
  },
  {
    q: "What should I do before you arrive?",
    a: "If you smell burning plastic or see smoke, get everyone out and call 911 first. Otherwise, turn off the affected breaker at the panel if you can do so safely. Do not touch any visibly damaged outlets, panels, or wires. Do not use water near electrical equipment.",
  },
  {
    q: "How fast can you get to me?",
    a: "Typical response time across the LA metro is 60–120 minutes depending on time of day and traffic. We'll give you an honest ETA when you call — not a scripted promise.",
  },
  {
    q: "How much does an emergency electrician cost in LA?",
    a: "We charge a flat diagnostic fee starting at $189 that's applied toward the repair if you proceed. Emergency rates apply outside normal business hours. We quote the repair in writing before we start — no surprise bills.",
  },
  {
    q: "What areas do you cover?",
    a: "The greater LA metro — Los Angeles, Santa Monica, Beverly Hills, Culver City, West Hollywood, Sherman Oaks, Studio City, Woodland Hills, Pasadena, Mar Vista, Venice, Reseda, and surrounding cities. Call us to confirm if you're not sure.",
  },
  {
    q: "Can you work with my insurance if it's storm or fire damage?",
    a: "Yes. We provide itemized invoices and photo documentation that insurance adjusters accept, and we can coordinate directly with your carrier if that's easier for you.",
  },
];

export default function EmergencyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Emergency Electrician Los Angeles", url: "/emergency-electrician-los-angeles" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative -mt-6 py-16 md:py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-bold uppercase tracking-wider mb-6">
            <AlertTriangle className="h-4 w-4" />
            24/7 Emergency Line
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight font-display">
            Emergency Electrician in{" "}
            <span className="text-gold">Los Angeles</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Licensed C-10 electricians answering 24 hours a day. Power outages,
            sparking outlets, burning smells — call us first, we'll tell you
            what's safe to do while we're on the way.
          </p>
          <a
            href={`tel:${BUSINESS.phone.cell.tel}`}
            className="inline-flex items-center justify-center gap-3 bg-gold text-navy px-10 py-6 rounded-2xl font-bold text-2xl md:text-3xl hover:bg-gold-light transition-all shadow-2xl shadow-gold/30"
          >
            <PhoneCall className="h-7 w-7" />
            Call {BUSINESS.phone.cell.display}
          </a>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              Direct-to-electrician line
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              60–120 min typical response
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              Licensed &amp; insured (C-10 #{BUSINESS.license.number})
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
              If any of this is happening, call now
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            These are active hazards — not maintenance items. Don't wait until
            business hours. Call us and we'll tell you what's safe to do while
            we dispatch.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {handles.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4"
              >
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 bg-gold/10 border border-gold/30 rounded-3xl p-6 md:p-8">
            <p className="text-navy leading-relaxed">
              <strong>If you smell burning plastic or see smoke, call 911
              first.</strong>{" "}
              After that, call us. We'll coordinate with LAFD and your
              utility for the restoration side.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <Clock className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">24/7 pickup</h3>
              <p className="text-gray-600 text-sm">
                The emergency line goes to a licensed electrician — not a call
                center routing you to voicemail.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <MapPin className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">LA-wide dispatch</h3>
              <p className="text-gray-600 text-sm">
                Santa Monica, Beverly Hills, Pasadena, Culver City, Hollywood,
                the Valley — one truck, one call.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <ShieldCheck className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-display">Fully insured</h3>
              <p className="text-gray-600 text-sm">
                C-10 license #{BUSINESS.license.number}, $2M liability
                coverage, workers' comp — documentation provided on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-display">
            Active electrical hazard? Call now.
          </h2>
          <a
            href={`tel:${BUSINESS.phone.cell.tel}`}
            className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-gold-light transition-all shadow-lg"
          >
            <PhoneCall className="h-6 w-6" />
            {BUSINESS.phone.cell.display}
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Office line (daytime): {BUSINESS.phone.office.display}
          </p>
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: "24/7 Emergency Electrical Repair",
          description:
            "24/7 emergency electrical repair in Los Angeles. Licensed C-10 electricians responding to power outages, sparking outlets, burning smells, and other active electrical hazards.",
          slug: "/emergency-electrician-los-angeles",
          serviceType: "Emergency Electrical Repair",
        })}
      />
    </>
  );
}
