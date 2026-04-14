import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Ceon Electric",
  description:
    "Terms of service for Ceon Electric. Review the terms and conditions that apply to our electrical services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-16 md:pt-40 md:pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight font-display">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Last updated: April 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Agreement to Terms
              </h2>
              <p>
                By using the Ceon Electric website or hiring us for electrical
                services, you agree to the terms and conditions set forth
                below. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Services
              </h2>
              <p>
                Ceon Electric (C10 License #11411112) provides licensed
                residential and commercial electrical services in the greater
                Los Angeles area. All work is performed by licensed
                electricians in accordance with state and local codes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Quotes &amp; Estimates
              </h2>
              <p>
                Free quotes are provided based on the information supplied by
                the customer and an on-site evaluation when necessary. Quotes
                are valid for 30 days unless otherwise noted. Final pricing may
                vary if the scope of work changes or unforeseen conditions are
                discovered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Payment
              </h2>
              <p className="mb-3">
                Payment terms will be outlined in your service agreement.
                Typically:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Small jobs: payment due upon completion.</li>
                <li>
                  Larger projects: deposit required, with progress payments as
                  milestones are reached.
                </li>
                <li>
                  Late payments may incur interest charges at the maximum rate
                  permitted by law.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Permits &amp; Inspections
              </h2>
              <p>
                Ceon Electric will pull all required permits and arrange for
                inspections for work that requires them. Permit and inspection
                fees are included in your quote unless otherwise specified.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Warranty
              </h2>
              <p>
                We stand behind our workmanship with a 1-year warranty on
                labor. Manufacturer warranties apply to materials and
                equipment. Warranties do not cover damage caused by misuse,
                accident, acts of nature, or tampering by others.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Cancellation &amp; Rescheduling
              </h2>
              <p>
                We ask for at least 24 hours notice to cancel or reschedule a
                scheduled appointment. Cancellations without sufficient notice
                may be subject to a trip charge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Ceon Electric&apos;s
                liability is limited to the cost of the services provided. We
                are not liable for indirect, incidental, or consequential
                damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Customer Responsibilities
              </h2>
              <p className="mb-3">The customer agrees to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information about the job site.</li>
                <li>
                  Grant safe, reasonable access to the work area during
                  scheduled appointments.
                </li>
                <li>
                  Disclose known electrical hazards or prior electrical work
                  that may affect the project.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of
                California. Any disputes will be resolved in the state or
                federal courts located in Los Angeles County.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms of Service at any
                time. Updated terms will be posted on this page with a new
                effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Contact Us
              </h2>
              <p>Questions about these Terms? Contact us at:</p>
              <div className="mt-4 p-6 rounded-2xl bg-muted border border-gray-100">
                <div className="font-bold text-navy">Ceon Electric</div>
                <div className="text-sm text-gray-600 mt-1">
                  Los Angeles, CA
                </div>
                <div className="text-sm text-gray-600">
                  Phone:{" "}
                  <a
                    href="tel:+18184309508"
                    className="text-gold hover:text-gold-dark font-semibold"
                  >
                    (818) 430-9508
                  </a>
                </div>
                <div className="text-sm text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:service@ceonelectric.com"
                    className="text-gold hover:text-gold-dark font-semibold"
                  >
                    service@ceonelectric.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
