"use client";

import { useRef } from "react";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Animate direct children one after another instead of the block as one. */
  stagger?: boolean;
  as?: "div" | "section" | "ul" | "ol" | "dl" | "header";
}

/** Rises and fades in when it enters the screen. */
export function Reveal({ children, className = "", stagger = false, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        const el = ref.current!;
        gsap.from(stagger ? el.children : el, {
          y: 48,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  // Every allowed tag is a block element with the same ref type.
  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}

/** Opens from the bottom edge, then drifts slowly while it crosses the screen. */
export function RevealImage({ children, className = "" }: Omit<Props, "stagger" | "as">) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        const el = ref.current!;
        const inner = el.firstElementChild;
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
        if (inner) {
          gsap.fromTo(
            inner,
            { yPercent: -6, scale: 1.12 },
            {
              yPercent: 6,
              scale: 1.12,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
