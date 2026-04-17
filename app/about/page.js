import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Zap,
  CheckCircle2,
  HardHat,
  BadgeCheck,
  Heart,
  Target,
} from "lucide-react";

export const metadata = {
  title: "About — Ceon Electric",
  description:
    "Learn about Ceon Electric, a licensed and insured electrical contractor serving Los Angeles for over 15 years with premium residential and commercial services.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every job is performed to the highest safety standards. We never cut corners when lives and property are at stake.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "We treat every home and business like our own. Clear communication, fair pricing, and lasting relationships.",
  },
  {
    icon: Target,
    title: "Quality Craftsmanship",
    desc: "Clean work, proper permits, and attention to detail. We take pride in electrical work that stands the test of time.",
  },
  {
    icon: BadgeCheck,
    title: "Code Compliance",
    desc: "Licensed, bonded, insured, and permit-driven. Every job meets or exceeds current electrical code requirements.",
  },
];

const credentials = [
  { label: "C10 License", value: "#11411112" },
  { label: "Years in Business", value: "12+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Insurance Coverage", value: "$2M" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/outlets-switches.png"
            alt="Clean outlet and switch installation by Ceon Electric"
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
              <HardHat className="h-4 w-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Powering LA for{" "}
              <span className="text-gold">Over 15 Years</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Ceon Electric was built on a simple idea: premium electrical work
              doesn&apos;t have to come with premium attitude. Just honest
              pricing, expert craftsmanship, and reliability you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block text-sm font-bold uppercase tracking-widest text-gold mb-3">
                Built in Los Angeles
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-navy">
                A family-owned electrical contractor with a reputation for
                doing it right.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded over 15 years ago, Ceon Electric has grown from a
                one-truck operation into a trusted name in Los Angeles
                electrical work. We&apos;ve wired everything from tiny ADUs in
                Reseda to full commercial build-outs in downtown LA.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                What hasn&apos;t changed is our commitment to the craft. Every
                electrician on our team is licensed, trained, and invested in
                the work. We show up on time, clean up after ourselves, and
                stand behind every job.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl bg-muted p-5 border border-gray-100"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-navy font-display">
                      {c.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/recessed-lighting.png"
                  alt="Ceon Electric installing recessed lighting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-3xl p-6 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-10 w-10 text-navy" />
                  <div>
                    <div className="font-bold text-navy">Licensed</div>
                    <div className="text-xs font-semibold text-navy/70">
                      C10 #11411112
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5">
          <Zap className="h-[500px] w-[500px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-sm font-bold uppercase tracking-widest text-gold mb-3">
              What We Stand For
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Values That Drive Every Job
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              These aren&apos;t just words on a wall — they&apos;re how we
              treat every customer, every project, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-navy-light p-8 rounded-3xl border border-white/10"
              >
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-gray-100">
              <div className="inline-block text-sm font-bold uppercase tracking-widest text-gold mb-3">
                From the Owner
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-navy">
                &ldquo;Every customer deserves a job done right.&rdquo;
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                I started Ceon Electric because I saw too many homeowners and
                businesses getting the runaround — overpriced quotes, no-show
                crews, and work that didn&apos;t last.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We built this company to be the opposite of all of that.
                Transparent pricing, clean work, on-time arrivals, and
                electricians who genuinely care about the craft. If you choose
                us, that&apos;s what you&apos;re getting.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-navy font-display">
                    Founder &amp; Lead Electrician
                  </div>
                  <div className="text-sm text-gray-500">
                    Ceon Electric, Los Angeles
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4">
              <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <CheckCircle2 className="h-7 w-7 text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-navy font-display mb-1">
                    State-Licensed Master Electrician
                  </h4>
                  <p className="text-sm text-gray-500">
                    C10 License #11411112 — fully qualified to pull permits
                    and perform all residential and commercial work.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Award className="h-7 w-7 text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-navy font-display mb-1">
                    15+ Years of Experience
                  </h4>
                  <p className="text-sm text-gray-500">
                    From knob-and-tube rewires to Tesla wall connectors —
                    there&apos;s very little we haven&apos;t seen.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Users className="h-7 w-7 text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-navy font-display mb-1">
                    450+ Satisfied Clients
                  </h4>
                  <p className="text-sm text-gray-500">
                    Homeowners, property managers, and business owners across
                    the greater Los Angeles area trust our work.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Clock className="h-7 w-7 text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-navy font-display mb-1">
                    24/7 Emergency Availability
                  </h4>
                  <p className="text-sm text-gray-500">
                    Electrical emergencies don&apos;t keep business hours.
                    Neither do we.
                  </p>
                </div>
              </div>
            </div>
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
              Let&apos;s build something together.
            </h2>
            <p className="text-navy/80 text-lg mb-10 max-w-xl relative z-10">
              Join the hundreds of homeowners and businesses across LA who
              trust Ceon Electric for premium electrical work.
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
