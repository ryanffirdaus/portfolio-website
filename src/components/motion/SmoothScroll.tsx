"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reducedMotion } from "@/lib/gsap";

let lenis: Lenis | null = null;

/** Smooth scroll to an element or a pixel offset. Falls back to native scroll. */
export function scrollToTarget(target: string | number | HTMLElement) {
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target });
  else {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView();
  }
}

/** Stops page scroll while an overlay (menu, lightbox) is open. */
export function setScrollLocked(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia(reducedMotion).matches) return;

    lenis = new Lenis({ anchors: true, lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // A new page starts at the top (or at its #hash), after its triggers
  // measure the new layout. Pinned sections change the page height, and
  // images above a #hash can still move it, so a hash jump runs twice.
  useEffect(() => {
    const hash = window.location.hash;
    const jump = () => {
      ScrollTrigger.refresh();
      const target = hash ? document.querySelector<HTMLElement>(hash) : null;
      if (target) {
        if (lenis) lenis.scrollTo(target, { immediate: true, force: true });
        else target.scrollIntoView();
      } else lenis?.scrollTo(0, { immediate: true, force: true });
    };
    const frame = requestAnimationFrame(jump);
    const settle = hash ? setTimeout(jump, 450) : undefined;
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [pathname]);

  return null;
}
