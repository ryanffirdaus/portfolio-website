import SectionHeading from "@/components/ui/SectionHeading";
import type { ArchitectureCard } from "@/types";

interface Props {
  cards: ArchitectureCard[];
}

export default function ArchitectureGrid({ cards }: Props) {
  return (
    <section>
      <SectionHeading eyebrow="Architecture">How it fits together</SectionHeading>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {cards.map(({ title, description }, idx) => (
          <div key={title} className="rounded-card bg-panel p-6 md:p-8">
            <p className="text-body-sm font-medium text-muted tabular-nums">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-6 text-heading-sm font-bold text-white">
              {title}
            </h3>
            <p className="mt-3 text-body text-fog">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
