"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Replace mailto with Resend, Formspree, or another form handling service
    const subject = encodeURIComponent(
      `Quote Request: ${formData.service || "General Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Ceonelectric80@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Get In Touch
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Ready for a free estimate? Fill out the form below or give us a
              call. We typically respond within 1 business hour.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-muted-foreground">
                Tell us about your project and we&apos;ll get back to you with a
                free estimate.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
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
                    className="block text-sm font-medium text-navy"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    placeholder="Describe your project or issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <Send className="h-4 w-4" />
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="rounded-xl bg-navy p-6 text-white">
                <h3 className="font-display text-lg font-semibold">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4">
                  {/* TODO: Replace with real phone number */}
                  <li>
                    <a
                      href="tel:5550000000"
                      className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-gold" />
                      (555) 000-0000
                    </a>
                  </li>
                  {/* TODO: Replace with real email if different */}
                  <li>
                    <a
                      href="mailto:Ceonelectric80@gmail.com"
                      className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-gold" />
                      Ceonelectric80@gmail.com
                    </a>
                  </li>
                  {/* TODO: Replace with real address */}
                  <li>
                    <span className="flex items-center gap-3 text-sm text-white/80">
                      <MapPin className="h-5 w-5 shrink-0 text-gold" />
                      Los Angeles, CA
                    </span>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                  <Clock className="h-5 w-5 text-gold" />
                  Hours of Operation
                </h3>
                {/* TODO: Update with real business hours */}
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-navy">
                      7:00 AM – 6:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-navy">
                      8:00 AM – 4:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-navy">
                      Emergency Only
                    </span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gold-dark">
                  24/7 Emergency Service Available
                </p>
              </div>

              {/* Service Areas */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-navy">
                  Service Areas
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-xl border border-gray-100">
                {/* TODO: Paste your Google Maps embed iframe here */}
                {/* Example: <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                <div className="flex h-[250px] items-center justify-center bg-gray-100 text-sm text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-gray-300" />
                    <p className="mt-2">Google Maps Embed</p>
                    <p className="text-xs">Replace with embed code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
