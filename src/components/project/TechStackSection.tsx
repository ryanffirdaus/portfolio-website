import SectionHeading from "@/components/ui/SectionHeading";
import type { TechStackItem } from "@/types";

interface Props {
  items: TechStackItem[];
}

export default function TechStackSection({ items }: Props) {
  return (
    <section>
      <SectionHeading eyebrow="Stack">What each piece does</SectionHeading>

      <ol className="mt-10 space-y-10">
        {items.map(({ number, title, description }) => (
          <li key={title} className="grid gap-2 border-t border-steel pt-6 md:grid-cols-12 md:gap-6">
            <span className="font-mono text-body text-neon md:col-span-1">
              {number}
            </span>
            <h3 className="text-subheading font-medium text-white md:col-span-3">
              {title}
            </h3>
            <p className="text-body text-fog md:col-span-8">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
