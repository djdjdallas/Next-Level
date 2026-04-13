"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-7 w-7 text-gold" />
            <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
              Ceon Electric
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-light md:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-lg bg-gold px-4 py-3 text-center text-base font-semibold text-navy transition-colors hover:bg-gold-light"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
            {/* TODO: Replace with real phone number */}
            <a
              href="tel:5550000000"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              (555) 000-0000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
