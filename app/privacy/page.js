import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Ceon Electric",
  description:
    "Privacy policy for Ceon Electric. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-16 md:pt-40 md:pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight font-display">
              Privacy <span className="text-gold">Policy</span>
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
                Introduction
              </h2>
              <p>
                Ceon Electric (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website or request our
                electrical services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact information</strong>: name, phone number,
                  email address, and service address when you request a quote.
                </li>
                <li>
                  <strong>Project details</strong>: information you provide
                  about your electrical project or issue.
                </li>
                <li>
                  <strong>Website usage data</strong>: basic analytics such as
                  pages visited and browser type.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to quote requests and inquiries.</li>
                <li>Schedule and perform electrical services.</li>
                <li>
                  Send appointment confirmations, invoices, and job-related
                  communications.
                </li>
                <li>Improve our website and service offerings.</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Information Sharing
              </h2>
              <p>
                We may share limited information with trusted service providers
                (such as permit authorities or suppliers) only as necessary to
                complete your project. We may also disclose information if
                required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect your personal
                information against unauthorized access, alteration, or
                disclosure. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or
                deletion of your personal information. To exercise these
                rights, contact us at{" "}
                <a
                  href="mailto:service@ceonelectric.com"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  service@ceonelectric.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Cookies
              </h2>
              <p>
                Our website may use cookies to enhance your browsing
                experience. You can disable cookies in your browser settings,
                though some features of the site may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with an updated effective
                date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy font-display mb-4">
                Contact Us
              </h2>
              <p>
                Questions about this Privacy Policy? Contact us at:
              </p>
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
