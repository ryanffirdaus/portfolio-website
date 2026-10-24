"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { scrollToTarget } from "@/components/motion/SmoothScroll";
import { container, eyebrow } from "@/components/ui/styles";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#experience", label: "Experience" },
];

const linkClass =
  "font-mono text-body-sm uppercase tracking-[0.04em] underline decoration-steel decoration-1 underline-offset-6 transition-colors hover:text-neon hover:decoration-neon";

export default function Footer() {
  return (
    <footer data-theme="dark" className="relative bg-ink text-white">
      {/* A chamfered tab on the top edge carries the way back up. */}
      <button
        type="button"
        onClick={() => scrollToTarget(0)}
        className="group absolute right-6 bottom-full flex items-center gap-3 bg-ink px-5 pt-3 pb-2 font-mono text-[11px] tracking-[0.06em] text-white uppercase [clip-path:polygon(12px_0,100%_0,100%_100%,0_100%,0_12px)] md:right-8"
      >
        <span className="text-neon transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5">↑</span>
        Top of page
      </button>

      <div className={`${container} pt-24 pb-10`}>
        <a
          href={personal.social.email}
          className="block text-[6vw] leading-none font-semibold tracking-[-0.05em] break-words transition-colors hover:text-neon md:text-[4.6vw] xl:text-[64px]"
        >
          {personal.contact.email}
        </a>

        <div className="mt-16 grid gap-10 border-t border-steel pt-8 sm:grid-cols-3">
          <ul className="space-y-2">
            {siteLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {socialLinks
              .filter(({ label }) => label !== "Email")
              .map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            <li>
              <a href={personal.resumeHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Résumé
              </a>
            </li>
          </ul>
          <p className="text-body font-[200] text-silver sm:text-right">
            {personal.title}
            <br />
            {personal.location}
          </p>
        </div>
      </div>

      {/* One clear call, in solid type. */}
      <div className="border-y border-steel">
        <a
          href={personal.social.email}
          className={`${container} group flex items-center justify-between gap-6 py-10 md:py-14`}
        >
          <span className="text-[13vw] leading-none font-semibold tracking-[-0.05em] text-white transition-colors group-hover:text-neon md:text-[8vw] xl:text-[112px]">
            Get in{" "}
            <em className="serif-soft font-serif font-light text-neon italic">touch</em>
          </span>
          <Icon
            name="arrow-up-right"
            size={56}
            className="shrink-0 text-neon transition-transform duration-500 ease-out-expo group-hover:rotate-45"
          />
        </a>
      </div>

      <div className={`${container} flex flex-col gap-2 py-8 text-body-sm text-muted md:flex-row md:justify-between`}>
        <p>{personal.copyright}</p>
        <p className={`${eyebrow} text-muted`}>Built with Next.js and GSAP</p>
      </div>

      {/* The closing band. */}
      <div className="relative h-16 bg-neon md:h-20">
        <span className="absolute top-1/2 left-6 flex -translate-y-1/2 items-center gap-2 text-[18px] font-semibold tracking-[-0.04em] text-ink md:left-8">
          <span aria-hidden="true" className="chamfer h-3.5 w-3.5 bg-ink [--cut:4px]" />
          RF
        </span>
        <span className="absolute top-1/2 right-6 -translate-y-1/2 font-mono text-[11px] tracking-[0.06em] text-ink uppercase md:right-8">
          {"// end of page"}
        </span>
      </div>
    </footer>
  );
}
