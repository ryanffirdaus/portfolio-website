import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { projectSummaries } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-section-gap scroll-mt-24" id="projects">
      <Reveal className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
            Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
            Selected Work
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projectSummaries.map(
          ({ slug, title, tags, description, image }, idx) => (
            <Reveal
              key={slug}
              className="project-card group bg-surface-card border border-outline-variant/30 rounded overflow-hidden hover:border-primary/50 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300"
              delay={
                idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
              }
            >
              <div className="aspect-video overflow-hidden bg-surface-dim">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={338}
                  className="project-image w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-charcoal-deep dark:text-on-surface transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-secondary-container">
                  {description}
                </p>
                <Link
                  href={`/projects/${slug}`}
                  className="inline-flex items-center text-primary font-label-md text-label-md group-hover:underline"
                >
                  Case Study{" "}
                  <span className="material-symbols-outlined ml-1 text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    open_in_new
                  </span>
                </Link>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
