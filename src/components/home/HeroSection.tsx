"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Insert } from "@/data/home";
import Section from "@/components/motion/Section";
import { container, eyebrow } from "@/components/ui/styles";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";
import { hero } from "@/data/home";
import { personal } from "@/data/personal";

// A chamfered photo tile, set between the words of the headline.
function PhotoTile({ insert }: { insert: Insert }) {
  return (
    <span
      aria-hidden="true"
      className="chamfer relative inline-block shrink-0 overflow-hidden bg-ink align-middle"
      style={{ width: "1.6em", height: "0.78em", "--cut": "0.14em" } as React.CSSProperties}
    >
      <Image src={insert.src} alt={insert.alt} fill sizes="(min-width: 768px) 18vw, 28vw" className="object-cover" priority />
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        // Entrance: each line rises out of its mask, then the photos open.
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.to("[data-reveal-line]", { y: 0, duration: 1.5, stagger: 0.09 })
          .to(
            "[data-reveal-chip]",
            { clipPath: "inset(0 0% 0 0%)", duration: 1.3, stagger: 0.08 },
            0.45,
          )
          .from("[data-hero-foot]", { opacity: 0, y: 16, duration: 1 }, 0.8);

        // Scroll: the headline drifts up and the lines spread a little,
        // while the next section rises over it.
        gsap.to("[data-hero-line]", {
          yPercent: (i) => -18 * (i + 1),
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Section theme="light" className="overflow-hidden">
      <div
        ref={ref}
        className={`${container} flex min-h-svh flex-col justify-between pt-28 pb-10`}
      >
        <h1
          aria-label="Building software that runs real businesses"
          className="mt-[4vh] text-[10.2vw] leading-[0.92] font-semibold tracking-[-0.05em] text-ink [font-variation-settings:'opsz'_96] md:text-[9.8vw] xl:text-[140px]"
        >
          {hero.lines.map((line, i) => (
            <span key={i} data-hero-line className="block overflow-hidden pb-[0.06em]">
              <span
                data-reveal-line
                className="flex items-center gap-[0.12em] whitespace-nowrap"
              >
                {line.map((part, j) =>
                  typeof part === "string" ? (
                    <span key={j} aria-hidden="true">
                      {part.split(/(_[^_]+_)/).map((bit, k) =>
                        bit.startsWith("_") ? (
                          <em
                            key={k}
                            className="serif-soft font-serif font-light tracking-[-0.03em] text-neon-deep italic"
                          >
                            {bit.slice(1, -1)}
                          </em>
                        ) : (
                          bit
                        ),
                      )}
                    </span>
                  ) : (
                    <span key={j} data-reveal-chip className="inline-flex">
                      <PhotoTile insert={part} />
                    </span>
                  ),
                )}
              </span>
            </span>
          ))}
        </h1>

        <div
          data-hero-foot
          className="mt-16 grid items-end gap-8 border-t border-line pt-6 md:grid-cols-12"
        >
          <p className={`${eyebrow} text-graphite md:col-span-3`}>
            {personal.name}
            <br />
            {personal.title} · {personal.location}
          </p>
          <p className="max-w-md text-body text-graphite md:col-span-6 md:text-subheading">
            {hero.intro}
          </p>
          <p
            className={`${eyebrow} hidden items-center justify-end gap-2 text-graphite md:col-span-3 md:flex`}
          >
            Scroll <span className="text-neon-deep">↓</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
