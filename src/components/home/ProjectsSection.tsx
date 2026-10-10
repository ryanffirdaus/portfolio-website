import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { button, container } from "@/components/ui/styles";
import { getProjectDetail, projectSummaries } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="work" className={`${container} scroll-mt-24 py-24`}>
      <SectionHeading eyebrow="Selected work">
        Recent projects
      </SectionHeading>

      <div className="mt-16 space-y-24">
        {projectSummaries.map(
          ({ slug, title, tags, description, image }, idx) => {
            const detail = getProjectDetail(slug);
            const metrics = detail?.keyResults.slice(0, 3) ?? [];
            const reversed = idx % 2 === 1;

            return (
              <article
                key={slug}
                className={`grid items-center gap-10 md:gap-16 ${
                  reversed
                    ? "md:grid-cols-[45fr_55fr]"
                    : "md:grid-cols-[55fr_45fr]"
                }`}
              >
                <Link
                  href={`/projects/${slug}`}
                  className={`vignette block overflow-hidden rounded-card bg-panel ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="aspect-4/3 w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  />
                </Link>

                <div className={reversed ? "md:order-1" : ""}>
                  <div className="flex flex-wrap gap-2">
                    {detail?.liveUrl && <Badge tone="live">Live demo</Badge>}
                    {tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="mt-6 text-heading font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-4 text-body text-fog">{description}</p>

                  {metrics.length > 0 && (
                    <dl className="mt-8 grid grid-cols-3 gap-6">
                      {metrics.map(({ prefix, target, suffix, label }) => (
                        <div key={label}>
                          <dt className="sr-only">{label}</dt>
                          <dd className="text-heading-sm font-bold text-white">
                            {prefix}
                            {target}
                            {suffix}
                          </dd>
                          <dd className="mt-1 text-body-sm text-ash">
                            {label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <Link href={`/projects/${slug}`} className={`${button.ghost} mt-8`}>
                    Read the case study <Icon name="arrow-right" />
                  </Link>
                </div>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}
