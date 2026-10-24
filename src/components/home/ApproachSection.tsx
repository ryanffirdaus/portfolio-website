"use client";

import { useRef } from "react";
import Icon from "@/components/ui/Icon";
import Section from "@/components/motion/Section";
import { button, container, eyebrow } from "@/components/ui/styles";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";
import { approach } from "@/data/home";

// One plate per step, bottom to top: each step stands on the one before.
const GAP = "min(10vw, 80px)";

export default function ApproachSection() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // On wide screens the section pins while the stack builds. On phones
      // it is taller than the screen, so the stack builds as it scrolls by.
      mm.add({ wide: "(min-width: 768px)", motion: fullMotion }, (ctx) => {
        const { wide, motion } = ctx.conditions!;
        if (!motion) return;
        const root = ref.current!;
        const q = gsap.utils.selector(root);
        const frames = q("[data-frame]");
        const steps = q("[data-step]");

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
          scrollTrigger: wide
            ? { trigger: root, start: "top top", end: "+=280%", pin: true, scrub: 0.8 }
            : { trigger: root, start: "top 75%", end: "bottom 85%", scrub: 0.8 },
        });

        gsap.set(steps, { opacity: 0.28 });
        gsap.set(q("[data-core]"), { opacity: 0, y: 12 });

        // Each plate drops onto the stack from above; its line lights up.
        frames.forEach((frame, level) => {
          const at = level * 1.1;
          tl.fromTo(frame, { z: 420 + level * 120, opacity: 0 }, { z: 0, opacity: 1 }, at).to(
            steps[level],
            { opacity: 1, duration: 0.4 },
            at + 0.5,
          );
          if (level > 0) tl.to(steps[level - 1], { opacity: 0.45, duration: 0.4 }, at + 0.5);
        });
        const done = frames.length * 1.1 + 0.2;

        // Locked together: every frame turns green, and the claim appears.
        tl.to(frames, { backgroundColor: "#2bee4b", stagger: 0.12, duration: 0.5 }, done)
          .to(steps, { opacity: 1, duration: 0.4 }, done)
          .to(q("[data-core]"), { opacity: 1, y: 0, duration: 0.6 }, done + 0.3)
          .to({}, { duration: 0.6 });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Section id="approach" theme="light">
      <div ref={ref} className="bg-paper">
        <div className={`${container} grid min-h-svh items-center gap-8 py-24 md:grid-cols-12 md:gap-6`}>
          {/* The stack, seen from above at an angle. */}
          <div aria-hidden="true" className="relative mx-auto aspect-square w-[74vw] max-w-130 md:col-span-6 md:w-full">
            <div
              className="absolute inset-[36%_22%_8%]"
              style={{ transform: "rotateX(58deg) rotateZ(-42deg)", transformStyle: "preserve-3d" }}
            >
              {approach.steps.map(({ short }, level) => {
                return (
                  <div
                    key={level}
                    data-plate
                    className="absolute inset-0"
                    style={{ transform: `translateZ(calc(${GAP} * ${level}))`, transformStyle: "preserve-3d" }}
                  >
                    {/* The wrapper holds the level; GSAP's z on the frame adds the drop. */}
                    <div data-frame className="chamfer chamfer-lg chamfer-frame h-full bg-steel [--frame-cut:28px]">
                      <div className="chamfer dot-grid flex h-full flex-col justify-between bg-ink p-[8%]">
                        <span className="font-mono text-[11px] tracking-[0.06em] text-neon uppercase">
                          Step {level + 1}
                        </span>
                        <span className="serif-soft font-serif text-[clamp(18px,3.4vw,34px)] leading-[0.95] font-light text-white">
                          {short.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className={`${eyebrow} text-graphite`}>Approach</p>
            <h2 className="mt-4 text-[12vw] leading-[0.95] font-semibold tracking-[-0.05em] text-ink md:text-[4.8vw] xl:text-[68px]">
              {approach.heading}
            </h2>
            <p className="mt-4 max-w-sm text-body text-graphite">{approach.body}</p>

            <ol className="mt-8 border-t border-line">
              {approach.steps.map(({ name, text, output }, i) => (
                <li key={name} data-step className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-line py-4">
                  <span className="font-mono text-body-sm text-neon-deep">0{i + 1}</span>
                  <div>
                    <p className="text-[20px] leading-tight font-semibold tracking-[-0.02em] text-ink">{name}</p>
                    <p className="mt-1 text-body-sm text-graphite">{text}</p>
                    <p className="mt-2 font-mono text-[11px] tracking-[0.04em] text-graphite uppercase">{output}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p data-core className="mt-6 flex items-center gap-3 text-body font-medium text-ink">
              <span aria-hidden="true" className="chamfer chamfer-sm inline-block h-3 w-3 bg-neon" />
              {approach.core}
            </p>
            <a href="#contact" className={`${button.primary} mt-8`}>
              Get in touch <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
