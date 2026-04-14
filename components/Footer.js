import Link from "next/link";
import { Zap, Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Recent Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
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

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Zap className="h-10 w-10 text-gold" />
              <span className="font-display text-xl font-bold">
                Ceon Electric
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional licensed electrical services across the greater Los
              Angeles area. Quality work, guaranteed safety.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-sm font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-sm font-bold"
                aria-label="Instagram"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all text-sm font-bold"
                aria-label="LinkedIn"
              >
                Li
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span>Serving Los Angeles &amp; Surrounding Areas</span>
              </li>
              <li>
                <a
                  href="tel:+18184309508"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <span>(818) 430-9508</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@ceonelectric.com"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <span>service@ceonelectric.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0" />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Ceon Electric. All rights
            reserved.
          </p>
          <p>License: C10 #11411112 | Licensed, Bonded &amp; Insured</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
