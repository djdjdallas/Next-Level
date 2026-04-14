"use client";

import { useActionState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { sendQuoteRequest } from "./actions";

const serviceOptions = [
  "Emergency Repair",
  "Electrical Panel Upgrade",
  "Sub Panel Installation",
  "EV Charger Installation",
  "Outlets & Switches",
  "Recessed Lighting",
  "Rewiring",
  "New Construction Wiring",
  "Bathroom / Ceiling Fans",
  "Low Voltage",
  "Safety Inspection",
  "ADU Electrical",
  "Commercial Electrical",
  "Other",
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

const initialState = { status: "idle" };

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(
    sendQuoteRequest,
    initialState
  );
  const formRef = useRef(null);

  // Clear the form after a successful submit
  useEffect(() => {
    if (state.status === "success" && formRef.current) {
      formRef.current.reset();
    }
  }, [state.status]);

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ceiling-fan.png"
            alt="Ceiling fan installation by Ceon Electric"
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
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Ready for a free estimate? Fill out the form below or give us a
              call — we typically respond within 1 business hour.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-navy font-display">
                  Request a Free Quote
                </h2>
                <p className="mt-2 text-gray-500">
                  Tell us about your project and we&apos;ll get back to you
                  with a free estimate.
                </p>

                {state.status === "success" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-6 flex items-start gap-3 p-5 rounded-2xl bg-gold/10 border border-gold/30"
                  >
                    <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-navy">
                        Quote request sent!
                      </div>
                      <div className="text-sm text-gray-700 mt-1">
                        {state.message ||
                          "Thanks! We'll be in touch within one business hour."}
                      </div>
                    </div>
                  </div>
                )}

                {state.status === "error" && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="mt-6 flex items-start gap-3 p-5 rounded-2xl bg-red-50 border border-red-200"
                  >
                    <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-red-900">
                        We couldn&apos;t send your request
                      </div>
                      <div className="text-sm text-red-700 mt-1">
                        {state.error}
                      </div>
                    </div>
                  </div>
                )}

                <form
                  ref={formRef}
                  action={formAction}
                  className="mt-8 space-y-6"
                >
                  {/* Honeypot: hidden from users, catches bots */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="website">
                      Website (leave blank)
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-navy"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-navy"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-navy"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                      placeholder="Describe your project or issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 font-bold text-navy text-lg transition-all hover:bg-gold-light shadow-lg shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                    {pending ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
                <h3 className="text-xl font-bold font-display">
                  Contact Information
                </h3>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href="tel:+18184309508"
                      className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                      <div>
                        <div className="font-bold text-white">
                          (818) 430-9508
                        </div>
                        <div className="text-xs text-white/60">
                          Available 24/7
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:service@ceonelectric.com"
                      className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                      <div>
                        <div className="font-bold text-white">
                          service@ceonelectric.com
                        </div>
                        <div className="text-xs text-white/60">
                          We reply within 1 hour
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/80">
                    <MapPin className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Los Angeles</div>
                      <div className="text-xs text-white/60">
                        &amp; Surrounding Areas
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gold">
                    <ShieldCheck className="h-4 w-4" />
                    Licensed &amp; Insured • C10 #11411112
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="flex items-center gap-2 text-xl font-bold text-navy font-display">
                  <Clock className="h-5 w-5 text-gold" />
                  Hours of Operation
                </h3>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Monday – Friday</span>
                    <span className="font-bold text-navy">
                      7:00 AM – 6:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-bold text-navy">
                      8:00 AM – 4:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-bold text-navy">Emergency Only</span>
                  </li>
                </ul>
                <div className="mt-5 p-3 rounded-xl bg-gold/10 border border-gold/30 text-center">
                  <p className="text-sm font-bold text-gold-dark">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-navy font-display">
                  Service Areas
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold text-navy"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
