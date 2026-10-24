"use client";

import { useRef } from "react";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";

export type SectionTheme = "light" | "dark";

interface Props {
  id?: string;
  theme: SectionTheme;
  /** Slanted top edge that levels out as the section scrolls up over the one before. */
  curve?: boolean;
  className?: string;
  children: React.ReactNode;
}

const grounds: Record<SectionTheme, string> = {
  light: "bg-paper text-ink",
  dark: "bg-ink text-white",
};

export default function Section({
  id,
  theme,
  curve = false,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!curve) return;
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        gsap.fromTo(
          ref.current,
          { "--slant": "9vw" },
          {
            "--slant": "0vw",
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "top 20%",
              scrub: true,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [curve] },
  );

  return (
    <section
      ref={ref}
      id={id}
      data-theme={theme}
      className={`relative ${grounds[theme]} ${
        curve
          ? "-mt-[5vw] [clip-path:polygon(0_var(--slant,0vw),100%_0,100%_100%,0_100%)]"
          : ""
      } scroll-mt-0 ${className}`}
    >
      {children}
    </section>
  );
}
