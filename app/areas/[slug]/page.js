import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle2,
  PhoneCall,
  Home,
  Zap,
  Car,
  Wrench,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { AREAS, AREAS_BY_SLUG } from "@/lib/seo/areas";
import { BUSINESS } from "@/lib/seo/business";
import { serviceSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = AREAS_BY_SLUG[slug];
  if (!area) return {};
  return {
    title: `${area.title} | Licensed C-10 Electrician`,
    description: area.meta,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `${area.title} | Ceon Electric`,
      description: area.meta,
      url: `/areas/${area.slug}`,
    },
  };
}

const servicesOffered = [
  { icon: Zap, name: "Panel Upgrades", href: "/services/panel-upgrade" },
  { icon: Car, name: "EV Charger Installation", href: "/services/ev-charger-installation" },
  { icon: Wrench, name: "Whole-Home Rewiring", href: "/services" },
  { icon: Home, name: "Recessed Lighting", href: "/services" },
  { icon: Zap, name: "Emergency Service (24/7)", href: "/emergency-electrician-los-angeles" },
];

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = AREAS_BY_SLUG[slug];
  if (!area) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
    { name: area.name, url: `/areas/${area.slug}` },
  ];

  const localFaqs = [
    {
      q: `How fast can you get to ${area.name}?`,
      a: `Most days we can reach ${area.name} within 60–120 minutes for emergency dispatch. For scheduled work (panel upgrades, EV installs), we typically book same-week appointments.`,
    },
    {
      q: `Do you pull permits for jobs in ${area.name}?`,
      a: `Yes — every job in ${area.name} that requires one. Electrical work inside the City of LA goes through LADBS; neighborhoods in separate municipalities (Beverly Hills, Santa Monica, Pasadena, Culver City, West Hollywood) use their own building departments. We handle all of them.`,
    },
    {
      q: `What's the most common call you get in ${area.name}?`,
      a: `${area.housingNote} That's why panel upgrades and service-size increases are the most common scheduled job we run in this neighborhood.`,
    },
    {
      q: `Do you work on commercial buildings in ${area.name}?`,
      a: `Yes. Small-to-mid commercial, tenant improvements, and restaurant/retail electrical are all in scope. We've worked across ${area.name} for both property managers and individual business owners.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
            <MapPin className="h-4 w-4" />
            Serving {area.name}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight font-display">
            {area.title},{" "}
            <span className="text-gold">Los Angeles</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
            {area.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone.cell.tel}`}
              className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-5 w-5" />
              {BUSINESS.phone.cell.display}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Licensed C-10 #{BUSINESS.license.number}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              24/7 emergency response
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              Permit-pulled, inspected
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-display">
            Homes and buildings we see in {area.name}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            {area.housingNote}
          </p>
          <div className="bg-muted rounded-3xl p-6 md:p-8 border border-gray-100">
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
              We work across
            </div>
            <div className="flex flex-wrap gap-3">
              {area.landmarks.map((l) => (
                <span
                  key={l}
                  className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-navy font-medium"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight font-display">
            Services we offer in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesOffered.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold hover:shadow-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-navy">{s.name}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy text-white rounded-3xl p-8 md:p-12">
            <div className="flex gap-1 text-gold mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
              &ldquo;{area.testimonial.quote}&rdquo;
            </p>
            <div className="font-bold">{area.testimonial.name}</div>
            <div className="text-gray-400 text-sm">{area.testimonial.role}</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight font-display">
            {area.name} FAQs
          </h2>
          <div className="space-y-4">
            {localFaqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-2xl p-6 border border-gray-100"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-navy list-none">
                  <span>{f.q}</span>
                  <span className="ml-4 flex-shrink-0 text-gold text-2xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-display">
            Licensed electricians in {area.name}
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Free estimates. Permit-pulled. Work guaranteed in writing.
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
              {BUSINESS.phone.cell.display}
            </a>
          </div>
        </div>
      </section>

      <JsonLd
        data={serviceSchema({
          name: `Electrician in ${area.name}, Los Angeles`,
          description: area.intro,
          slug: `/areas/${area.slug}`,
          areaServed: [area.name],
          serviceType: "Electrical Contracting",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: localFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
