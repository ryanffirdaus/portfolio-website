import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { personal } from "@/data/personal";

export default function AboutSection() {
  const { about } = personal;

  return (
    <section className="py-section-gap scroll-mt-24 relative" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <Reveal
          className="relative aspect-square overflow-hidden rounded-lg bg-surface-variant"
          delay="delay-200"
        >
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 border-[12px] border-white/10 m-6" />
        </Reveal>

        {/* Text */}
        <Reveal className="space-y-6" delay="delay-300">
          <div className="space-y-1 mb-2">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
              About Me
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body-md text-body-md text-secondary leading-relaxed"
            >
              {p}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {about.stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-4 bg-surface-card border border-outline-variant/30 rounded hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="text-primary font-display text-headline-lg">
                  {value}
                </span>
                <p className="font-label-md text-label-md text-secondary">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
