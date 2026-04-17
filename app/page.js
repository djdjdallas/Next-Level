import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Home,
  Zap,
  Lightbulb,
  BatteryCharging,
  Building2,
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  PhoneCall,
  MessageSquare,
  Shield,
} from "lucide-react";

const featuredServices = [
  {
    icon: Home,
    title: "Residential Rewiring",
    desc: "Safe, modern wiring solutions for home upgrades and renovations.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    desc: "Available 24/7 for urgent power failures and electrical hazards.",
    accent: true,
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Custom interior and exterior lighting solutions for any space.",
    accent: false,
  },
  {
    icon: BatteryCharging,
    title: "Solar & EV",
    desc: "Future-proof your property with solar panels and EV charging.",
    accent: true,
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    desc: "Reliable electrical infrastructure for businesses and facilities.",
    accent: false,
  },
];

const testimonials = [
  {
    name: "Michael R.",
    location: "Homeowner, Santa Monica",
    rating: 5,
    text: "Ceon Electric saved us during a major power outage in Santa Monica. Professional, quick, and very reasonable pricing. Highly recommend!",
  },
  {
    name: "Sarah T.",
    location: "Business Owner, Reseda",
    rating: 5,
    text: "We hired them for a full commercial kitchen rewire. The team was extremely knowledgeable about local codes and finished ahead of schedule.",
  },
  {
    name: "David L.",
    location: "Homeowner, Woodland Hills",
    rating: 5,
    text: "Excellent service for our solar panel installation. They walked us through every step and the craftsmanship is top-notch. Truly professionals.",
  },
];

const whyChooseReasons = [
  {
    number: 1,
    title: "Licensed & Insured (C10 #11411112)",
    desc: "We operate with full state credentials and comprehensive insurance for your peace of mind.",
  },
  {
    number: 2,
    title: "Fast Response Times",
    desc: "In the LA area, we pride ourselves on getting to you quickly, especially in emergency situations.",
  },
  {
    number: 3,
    title: "Transparent Pricing",
    desc: "No hidden fees. We provide detailed quotes and honest assessments before any work begins.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-20 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rough-in.png"
            alt="New construction electrical rough-in work by Ceon Electric"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4" />
              Fully Licensed &amp; Insured &bull; C10 #11411112
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Licensed Electrician in{" "}
              <span className="text-gold">Los Angeles</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              From residential rewiring to commercial power solutions, Ceon
              Electric provides premium electrical services with a focus on
              safety, efficiency, and expert craftsmanship.
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
                href="tel:+18184309508"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Call Now: (818) 430-9508
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                24/7 Emergency Support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Commercial &amp; Residential
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Serving All of LA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-display">
              Our Premium Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional electrical solutions tailored to your specific needs,
              delivered by experts you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="service-card bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.accent
                      ? "bg-gold/10 text-gold"
                      : "bg-navy/5 text-navy"
                  }`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
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

      {/* Why Choose Ceon */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <Shield className="h-96 w-96" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight font-display">
                Why Homeowners &amp; Businesses Trust Ceon Electric
              </h2>
              <div className="space-y-8">
                {whyChooseReasons.map((reason) => (
                  <div key={reason.number} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center text-2xl font-bold">
                      {reason.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-gray-400">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-light p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/ceon-logo-emblem.png"
                  alt="Ceon Electric emblem"
                  width={192}
                  height={192}
                  className="h-32 w-32"
                />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">
                  12+ Years
                </div>
                <div className="text-gray-400 uppercase tracking-widest text-sm mb-8">
                  Experience in electrical trade
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-navy rounded-2xl">
                    <Star className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="font-bold">500+</div>
                    <div className="text-xs text-gray-400">Projects Done</div>
                  </div>
                  <div className="p-4 bg-navy rounded-2xl">
                    <Users className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="font-bold">100%</div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-display">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from homeowners and businesses across Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-muted p-8 rounded-3xl relative">
                <div className="text-gold flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            ))}
          </div>

          <div
            className="trustpilot-widget mt-16"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="69e2c157e53f0d98b81dae84"
            data-style-height="52px"
            data-style-width="100%"
            data-token="2609d1f0-d6a0-4984-9600-50790393eed4"
          >
            <a
              href="https://www.trustpilot.com/review/ceonelectric.com"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold rounded-[40px] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -top-10 opacity-20 mix-blend-multiply">
              <Image
                src="/images/ceon-logo-emblem.png"
                alt=""
                width={288}
                height={288}
                className="h-64 w-64"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 relative z-10 font-display">
              Ready to get your project started?
            </h2>
            <p className="text-navy/80 text-lg mb-10 max-w-xl relative z-10">
              Contact Ceon Electric today for a free, no-obligation quote on
              your electrical project. We&apos;re here to help you 24/7.
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

      {/* Mobile Action Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <div className="bg-navy border border-gold/50 rounded-2xl p-2 flex gap-2 shadow-2xl">
          <a
            href="tel:+18184309508"
            className="flex-1 bg-gold text-navy py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 bg-white/10 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
