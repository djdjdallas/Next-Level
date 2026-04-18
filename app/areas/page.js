import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AREAS } from "@/lib/seo/areas";
import { BUSINESS } from "@/lib/seo/business";

export const metadata = {
  title: "Service Areas | Licensed Electrician Across Los Angeles",
  description:
    "Ceon Electric serves Santa Monica, Beverly Hills, Pasadena, Culver City, Sherman Oaks, Studio City, Woodland Hills, Mar Vista, West Hollywood, Venice, and more.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Service Areas | Ceon Electric",
    description:
      "Licensed C-10 electrician across the greater Los Angeles metro. Free estimates, 24/7 emergency service.",
    url: "/areas",
  },
};

export default function AreasHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/areas" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
            <ShieldCheck className="h-4 w-4" />
            C-10 #{BUSINESS.license.number} · Fully Insured
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-display">
            Electrician Service Areas Across{" "}
            <span className="text-gold">Los Angeles</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ceon Electric dispatches from the LA metro daily. Licensed C-10
            work in every neighborhood below — panel upgrades, EV chargers,
            rewiring, and 24/7 emergency service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="bg-muted rounded-3xl p-8 border border-gray-100 hover:border-gold hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="h-8 w-8 text-gold" />
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
                <h2 className="text-2xl font-bold mb-3 font-display text-navy">
                  {a.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {a.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Don't see your neighborhood?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We cover the greater LA metro including Reseda, San Fernando, and
            surrounding areas. Call us — if we can't help, we'll refer you to
            someone who can.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-gold-light transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone.cell.tel}`}
              className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              Call {BUSINESS.phone.cell.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
