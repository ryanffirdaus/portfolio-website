"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { personal } from "@/data/personal";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`bg-surface/80 backdrop-blur-md top-0 sticky z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm bg-surface/95" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          {personal.logo.src ? (
            <Image
              src={personal.logo.src}
              alt={personal.logo.alt}
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
            />
          ) : (
            <span className="font-headline-lg text-headline-lg font-bold text-charcoal-deep tracking-tighter">
              RYAN
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-secondary hover:text-primary transition-colors font-body-md text-body-md relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href={personal.resumeHref}
            className="hidden md:inline-flex bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Resume
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-on-surface p-2 hover:bg-surface-variant rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-margin-mobile py-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-secondary hover:text-primary transition-colors font-body-md text-body-md py-2"
            >
              {label}
            </Link>
          ))}
          <Link
            href={personal.resumeHref}
            className="block bg-primary text-on-primary text-center font-label-md text-label-md px-6 py-2 rounded mt-2"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
