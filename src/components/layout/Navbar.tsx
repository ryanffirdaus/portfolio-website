"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { button, container } from "@/components/ui/styles";
import { personal } from "@/data/personal";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 bg-void transition-shadow duration-300 ${
        scrolled ? "shadow-fade" : ""
      }`}
    >
      <div className={`${container} relative flex h-15.5 items-center justify-between`}>
        <Link
          href="/"
          className="text-[17px] font-bold tracking-[-0.02em] text-white"
        >
          ryanffirdaus
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[15px] text-white/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href={personal.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[15px] text-white/80 transition-colors hover:text-white sm:inline"
          >
            Résumé
          </a>
          <a
            href={personal.social.email}
            className={`${button.primary} hidden py-2! px-5! sm:inline-flex`}
          >
            Get in touch
          </a>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`${button.tool} md:hidden`}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-overlay md:hidden">
          <ul className={`${container} space-y-1 py-4`}>
            {[
              ...navLinks,
              { href: personal.resumeHref, label: "Résumé" },
              { href: personal.social.email, label: "Get in touch" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-subheading text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
