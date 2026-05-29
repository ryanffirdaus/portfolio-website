import Reveal from "@/components/ui/Reveal";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="py-section-gap scroll-mt-24" id="skills">
      <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="font-headline-lg text-headline-lg text-charcoal-deep">Technical Arsenal</h2>
        <p className="font-body-md text-body-md text-secondary">
          A curated stack of technologies I use to build performant and resilient digital products.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map(({ name, category }, idx) => {
          const delays = ["delay-100", "delay-200", "delay-300", "delay-400"] as const;
          const delay = delays[idx % 4];
          return (
            <Reveal
              key={name}
              delay={delay}
              className="flex flex-col items-center p-6 bg-white border border-outline-variant/20 rounded hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <span className="font-label-md text-label-md text-charcoal-deep">{name}</span>
              <span className="text-[10px] text-primary uppercase tracking-tighter mt-1">{category}</span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
