import Reveal from "@/components/ui/Reveal";
import { skills } from "@/data/skills";

const categoryOrder = [
  "Languages",
  "Frameworks & Runtimes",
  "Databases",
  "DevOps & Infrastructure",
  "Tools",
];

export default function SkillsSection() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section className="py-section-gap scroll-mt-24" id="skills">
      <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
          Skills
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
          Tech Stack
        </h2>
        <p className="font-body-md text-body-md text-secondary dark:text-on-surface-variant">
          Technologies I use to build back-end systems, real-time platforms, and
          full-stack web applications.
        </p>
      </Reveal>

      <div className="max-w-4xl mx-auto space-y-10">
        {grouped.map(({ category, items }) => (
          <Reveal key={category} delay="delay-100">
            <h3 className="font-label-md text-[11px] text-primary uppercase tracking-widest mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-card border border-outline-variant/20 rounded-lg hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo}
                        alt={name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        cable
                      </span>
                    )}
                  </div>
                  <span className="font-label-md text-label-md text-charcoal-deep dark:text-on-surface whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
