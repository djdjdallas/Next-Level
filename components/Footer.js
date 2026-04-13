import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
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
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-gold" />
              <span className="font-display text-xl font-bold">
                Ceon Electric
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Licensed &amp; insured electrician serving the greater Los Angeles
              area. Commercial and residential electrical services you can trust.
            </p>
            <p className="mt-3 text-xs font-medium text-gold">
              C10 Lic. #11411112
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Service Areas
            </h3>
            <ul className="mt-4 columns-2 space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              {/* TODO: Replace with real phone number */}
              <li>
                <a
                  href="tel:5550000000"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  (555) 000-0000
                </a>
              </li>
              {/* TODO: Replace with real email if different */}
              <li>
                <a
                  href="mailto:Ceonelectric80@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  Ceonelectric80@gmail.com
                </a>
              </li>
              {/* TODO: Replace with real address */}
              <li>
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  Los Angeles, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Ceon Electric. All rights
            reserved. &nbsp;|&nbsp; C10 Lic. #11411112
          </p>
        </div>
      </div>
    </footer>
  );
}
