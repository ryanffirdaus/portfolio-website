import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  paragraphs: string[];
}

export default function OverviewSection({ paragraphs }: Props) {
  return (
    <Reveal
      as="section"
      className="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter"
    >
      <div className="md:col-span-4">
        <SectionHeading accent>The Challenge</SectionHeading>
      </div>
      <div className="md:col-span-8 space-y-6">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-body-md text-body-md text-on-surface-variant leading-relaxed hover:text-on-surface transition-colors duration-300"
          >
            {p}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
