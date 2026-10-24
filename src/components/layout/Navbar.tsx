"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { button } from "@/components/ui/styles";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

// The header sits over every section, so it takes the colour of the
// section under its top edge.
function useThemeUnderHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const probe = () => {
      const el = document
        .elementsFromPoint(window.innerWidth / 2, 32)
        .find((n) => n instanceof HTMLElement && n.dataset.theme);
      const next = (el as HTMLElement | undefined)?.dataset.theme;
      setTheme(next === "light" ? "light" : "dark");
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, [pathname]);

  return theme;
}

function Dots({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" data-open={open} className="menu-dots">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const theme = useThemeUnderHeader();
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        if (!open) return;
        gsap.from("[data-menu-item]", {
          yPercent: 110,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.06,
          delay: 0.15,
        });
      });
      return () => mm.revert();
    },
    { scope: menuRef, dependencies: [open] },
  );

  const ink = open || theme === "dark" ? "text-white" : "text-ink";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          aria-label={`${personal.name}, home`}
          className={`pointer-events-auto flex items-center gap-2 text-[18px] font-semibold tracking-[-0.04em] transition-colors duration-300 ${ink}`}
        >
          <span aria-hidden="true" className="chamfer chamfer-sm h-3.5 w-3.5 bg-neon [--cut:4px]" />
          <span>R</span>
          <span
            className={`-ml-2 inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-700 ease-out-expo ${
              compact && !open ? "max-w-0 opacity-0" : "max-w-40 opacity-100"
            }`}
          >
            yan
          </span>
          <span>F</span>
          <span
            className={`-ml-2 inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-700 ease-out-expo ${
              compact && !open ? "max-w-0 opacity-0" : "max-w-40 opacity-100"
            }`}
          >
            irdaus
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
          className={`pointer-events-auto flex items-center gap-3 font-mono text-[12px] tracking-[0.04em] uppercase transition-colors duration-300 ${ink}`}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <Dots open={open} />
        </button>
      </div>

      <div
        id="site-menu"
        ref={menuRef}
        hidden={!open}
        className="pointer-events-auto fixed inset-0 -z-10 overflow-y-auto bg-ink"
        data-lenis-prevent
      >
        <div className="mx-auto flex min-h-full max-w-page flex-col justify-between px-6 pt-28 pb-10 md:px-8">
          <nav aria-label="Main">
            <ul className="space-y-1">
              {navLinks.map(({ href, label }, i) => (
                <li key={href} className="overflow-hidden">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    data-menu-item
                    className="group flex items-baseline gap-4 py-1 text-[13vw] leading-none font-semibold tracking-[-0.055em] text-white transition-colors hover:text-neon md:text-[7vw]"
                  >
                    <span className="font-mono text-body-sm tracking-normal text-ash">
                      0{i + 1}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-16 flex flex-col gap-8 border-t border-steel pt-8 md:flex-row md:items-end md:justify-between">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-body text-fog">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Résumé
                </a>
              </li>
            </ul>
            <a href={personal.social.email} className={button.primary}>
              Get in touch <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
