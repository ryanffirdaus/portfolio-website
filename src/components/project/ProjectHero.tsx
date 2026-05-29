import Image from "next/image";
import Tag from "@/components/ui/Tag";
import type { ProjectDetail } from "@/types";

interface Props {
  project: ProjectDetail;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="py-16 md:py-24 border-b border-outline-variant/30 mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="order-2 md:order-1 animate-fade-in-up">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="outline" />
          ))}
        </div>
        <h1 className="font-display text-display text-on-surface mb-6">{project.title}</h1>
        <p className="font-body-lg text-body-lg text-secondary">{project.description}</p>
      </div>

      {/* Hero image */}
      <div className="order-1 md:order-2 animate-fade-in-up delay-100">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          width={1200}
          height={800}
          className="w-full h-auto rounded-xl border border-outline-variant/30 object-cover shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          priority
        />
      </div>
    </section>
  );
}
