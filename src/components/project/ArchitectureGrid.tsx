import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ArchitectureCard } from "@/types";

interface Props {
  cards: ArchitectureCard[];
}

const iconAnimationClass: Record<NonNullable<ArchitectureCard["iconAnimation"]>, string> = {
  scale:  "group-hover:scale-110 transition-transform",
  rotate: "group-hover:rotate-180 transition-transform duration-500",
  none:   "",
};

export default function ArchitectureGrid({ cards }: Props) {
  return (
    <section className="mb-section-gap">
      <Reveal className="mb-8">
        <SectionHeading accent>System Architecture</SectionHeading>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ icon, iconFill, iconAnimation = "none", title, description }, idx) => {
          const delays = [undefined, "delay-100", "delay-200"] as const;
          return (
            <Reveal
              key={title}
              delay={delays[idx]}
              className="bg-surface-card border border-outline-variant/30 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/50 group"
            >
              <span
                className={`material-symbols-outlined text-primary mb-4 text-3xl ${iconAnimationClass[iconAnimation]}`}
                style={
                  iconFill
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                {icon}
              </span>
              <h3 className="font-body-lg text-body-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="font-body-md text-body-md text-secondary">{description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
