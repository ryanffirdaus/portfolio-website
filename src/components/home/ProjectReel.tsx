"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { button, container, eyebrow } from "@/components/ui/styles";
import { gsap, useGSAP, fullMotion } from "@/lib/gsap";
import { reel, type ReelItem } from "@/data/home";
import { getProjectDetail, projectSummaries } from "@/data/projects";

// Where each screen floats, in % of the stage width. `depth` sets how far
// it travels in one phase: far screens drift, near screens rush past.
const SLOTS: Record<ReelItem["shape"], { x: number; w: number; lag: number; depth: number }[]> = {
  landscape: [
    { x: 0, w: 56, lag: 0, depth: 1 },
    { x: 46, w: 46, lag: 0.45, depth: 1.35 },
    { x: 10, w: 40, lag: 0.95, depth: 0.8 },
    { x: 56, w: 38, lag: 1.35, depth: 1.15 },
  ],
  portrait: [
    { x: 2, w: 27, lag: 0, depth: 1 },
    { x: 35, w: 25, lag: 0.35, depth: 1.35 },
    { x: 68, w: 27, lag: 0.7, depth: 0.85 },
    { x: 20, w: 23, lag: 1.1, depth: 1.2 },
  ],
};

// Share of each phase spent typing the tagline.
const TYPE_SHARE = 0.45;

export default function ProjectReel() {
  const ref = useRef<HTMLDivElement>(null);
  const items = reel.items.map((item) => ({
    ...item,
    summary: projectSummaries.find((p) => p.slug === item.slug)!,
    metrics: getProjectDetail(item.slug)?.keyResults.slice(0, 3) ?? [],
  }));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(fullMotion, () => {
        const root = ref.current!;
        const q = gsap.utils.selector(root);
        const n = items.length;
        const blocks = q("[data-block]");
        const chars = blocks.map((b) => gsap.utils.toArray<HTMLElement>("[data-char]", b));

        gsap.set(q("[data-blocks]"), { display: "grid" });
        gsap.set(blocks, { gridArea: "1 / 1" });
        gsap.set(q("[data-shot]"), { opacity: 1 });

        let shown = -1;
        const draw = (p: number) => {
          const phase = Math.min(n - 1, Math.floor(p * n));
          const local = p * n - phase;
          if (phase !== shown) {
            blocks.forEach((b, i) => (b.dataset.active = String(i === phase)));
            shown = phase;
          }
          chars.forEach((list, i) => {
            const count = i === phase ? Math.round(list.length * Math.min(1, local / TYPE_SHARE)) : 0;
            list.forEach((c, k) => {
              c.style.opacity = k < count ? "1" : "0";
              c.classList.toggle("caret", k === count - 1 && local < TYPE_SHARE + 0.25);
            });
          });
        };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: `+=${n * 110}%`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => draw(self.progress),
          },
        });

        // Each project's screens rise through the stage. Windows overlap, so
        // one project's screens leave while the next ones arrive. The last
        // project's screens come to rest instead of leaving.
        items.forEach((item, i) => {
          const last = i === n - 1;
          const start = Math.max(0, i - 0.35);
          const end = last ? n : i + 1.3;
          q(`[data-shot][data-project="${i}"]`).forEach((el, j) => {
            const slot = SLOTS[item.shape][j];
            const h = () => window.innerHeight;
            tl.fromTo(
              el,
              {
                y: () =>
                  i === 0 ? h() * (0.12 + slot.lag * 0.42) : h() * (1.05 + slot.lag * 0.5),
              },
              {
                y: () =>
                  last ? h() * (0.1 + slot.lag * 0.26) : -el.offsetHeight - h() * 0.45 * slot.depth,
                duration: end - start,
              },
              start,
            );
          });
        });
        tl.to({}, { duration: Math.max(0, n - tl.duration()) });
        draw(0);
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative min-h-svh overflow-hidden">
      {/* The stage: screens float here. On phones it is the top part of the
          screen; the text takes the bottom. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-[60%] z-0 overflow-hidden md:bottom-0 md:left-[36%]"
      >
        {items.map((item, i) =>
          item.shots.map((shot, j) => {
            const slot = SLOTS[item.shape][j];
            return (
              <div
                key={shot.src}
                data-shot
                data-project={i}
                className={`chamfer chamfer-lg absolute top-0 overflow-hidden bg-slate ${
                  i === 0 && j === 0 ? "" : "opacity-0"
                }`}
                style={{
                  left: `${slot.x}%`,
                  width: `${slot.w}%`,
                  aspectRatio: item.shape === "portrait" ? "9 / 20" : "16 / 10",
                  zIndex: Math.round(slot.depth * 10),
                  transform: i === 0 && j === 0 ? "translateY(18vh)" : undefined,
                }}
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            );
          }),
        )}
      </div>

      {/* Text sits over a fade, so it stays readable over the screens. */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-ink from-58% via-ink/60 via-62% to-transparent to-72% md:bg-linear-to-r md:from-ink md:from-0% md:via-ink/90 md:via-35% md:to-transparent md:to-55%" />

      <div className={`${container} relative z-20 flex min-h-svh flex-col justify-end pt-28 pb-12 md:justify-center`}>
        <p className={`${eyebrow} text-silver`}>{reel.label}</p>
        <div data-blocks className="mt-6 space-y-16 md:max-w-[34%]">
          {/* All blocks render visible; the script shows one per phase. */}
          {items.map(({ slug, tagline, blurb, summary, metrics }, i) => (
            <article
              key={slug}
              data-block
              data-active="true"
              className="transition-[opacity,translate] duration-700 ease-out-expo data-[active=false]:pointer-events-none data-[active=false]:translate-y-6 data-[active=false]:opacity-0"
            >
              <p className="font-mono text-body text-neon">
                {String(i + 1).padStart(2, "0")}
                <span className="text-muted"> / {String(items.length).padStart(2, "0")}</span>
              </p>
              <h3 className="mt-3 text-[13vw] leading-[0.92] font-semibold tracking-[-0.045em] text-white md:text-[5.4vw] xl:text-[76px]">
                {summary.title}
              </h3>
              <p className="mt-4 min-h-[2.1em] text-[6vw] leading-[1.05] font-semibold tracking-[-0.03em] text-silver md:text-[2vw] xl:text-[28px]">
                <span className="sr-only">{tagline}</span>
                <span aria-hidden="true">
                  {tagline.split(" ").map((word, w) => (
                    <span key={w} className="inline-block whitespace-nowrap">
                      {[...word].map((ch, k) => (
                        <span key={k} data-char>
                          {ch}
                        </span>
                      ))}
                      <span data-char>&nbsp;</span>
                    </span>
                  ))}
                </span>
              </p>
              <p className="mt-4 max-w-sm text-body text-fog">{blurb}</p>
              {metrics.length > 0 && (
                <dl className="mt-6 flex gap-8 border-t border-steel pt-5">
                  {metrics.map(({ prefix, target, suffix, label }) => (
                    <div key={label} className="flex flex-col-reverse">
                      <dt className="mt-1 max-w-24 text-[12px] leading-tight font-[350] text-ash">{label}</dt>
                      <dd className="font-serif text-[40px] leading-none tracking-[-0.03em] text-white">
                        {prefix}
                        {target}
                        {suffix}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              <Link href={`/projects/${slug}`} className={`${button.primary} pointer-events-auto mt-7`}>
                Read the case study <Icon name="arrow-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
