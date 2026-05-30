import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { TechStackItem } from "@/types";

interface Props {
  items: TechStackItem[];
}

export default function TechStackSection({ items }: Props) {
  const delays = [undefined, "delay-100", "delay-200", "delay-300"] as const;

  return (
    <section className="mb-16">
      <Reveal className="mb-8">
        <SectionHeading accent>Tech Stack Deep Dive</SectionHeading>
      </Reveal>

      <div className="space-y-4">
        {items.map(({ number, title, description }, idx) => (
          <Reveal
            key={title}
            delay={delays[Math.min(idx, delays.length - 1)]}
            className="flex items-start gap-4 p-4 border border-transparent border-b-outline-variant/30 hover:bg-surface-container-low hover:border-primary/20 rounded-xl transition-all duration-300 group"
          >
            <div className="bg-primary/10 text-primary p-2 rounded group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="font-label-md text-label-md">{number}</span>
            </div>
            <div>
              <h4 className="font-body-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                {title}
              </h4>
              <p className="font-body-md text-body-md text-secondary dark:text-on-surface-variant">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
