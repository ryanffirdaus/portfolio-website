"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import type { KeyResult } from "@/types";

interface Props {
  results: KeyResult[];
}

function useCountUp(target: number, isDecimal: boolean, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = ease * target;
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    requestAnimationFrame(step);
  }, [active, target, isDecimal]);

  return value;
}

function MetricCard({ result, active }: { result: KeyResult; active: boolean }) {
  const value = useCountUp(result.target, !!result.isDecimal, active);
  const display = result.isDecimal ? value.toFixed(1) : value + (result.target === Math.floor(result.target) ? "" : "");

  return (
    <div className="hover:-translate-y-1 transition-transform">
      <div className="font-display text-display text-primary mb-2">
        {result.prefix}
        {display}
        {result.suffix}
      </div>
      <div className="font-label-md text-label-md text-secondary uppercase tracking-wider">
        {result.label}
      </div>
    </div>
  );
}

export default function KeyResults({ results }: Props) {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal
      as="section"
      className="mb-section-gap bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/30"
    >
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-on-surface">
        Key Results
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {results.map((result) => (
          <MetricCard key={result.label} result={result} active={active} />
        ))}
      </div>
    </Reveal>
  );
}
