"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-navy shadow-xl border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Zap className="h-10 w-10 text-gold" />
            <div className="hidden md:block">
              <span className="block text-white font-bold leading-none tracking-tight">
                CEON ELECTRIC
              </span>
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                License: C10 #11411112
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-9">
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gold transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <a
                href="tel:+18184309508"
                className="text-white hover:text-gold transition-colors font-bold flex items-center gap-2 text-sm lg:text-base whitespace-nowrap"
              >
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-gold" />
                (818) 430-9508
              </a>
              <Link
                href="/contact"
                className="bg-gold text-navy px-6 lg:px-9 py-3.5 rounded-xl font-bold hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/30 whitespace-nowrap text-sm lg:text-base leading-none"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-light md:hidden">
          <nav className="max-w-7xl mx-auto space-y-1 px-4 py-4">
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
              Get Free Quote
            </Link>
            <a
              href="tel:+18184309508"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-gold" />
              (818) 430-9508
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
