import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { button, container, eyebrow } from "@/components/ui/styles";
import { personal } from "@/data/personal";
import { projectSummaries } from "@/data/projects";

export default function HeroSection() {
  const featured = projectSummaries[0];

  return (
    <section className={`${container} pt-20 md:pt-28`}>
      <div className="mx-auto flex max-w-220 flex-col items-center text-center">
        <p className={eyebrow}>
          {personal.title} · {personal.location}
        </p>
        <h1 className="mt-5 text-heading-lg font-bold text-white md:text-display">
          {personal.name}
        </h1>
        <p className="mt-6 max-w-155 text-subheading text-fog">
          {personal.bio}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/#work" className={button.primary}>
            See the work
          </Link>
          <a
            href={personal.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={button.outline}
          >
            Résumé
          </a>
        </div>
      </div>

      <Link
        href={`/projects/${featured.slug}`}
        className="vignette group mt-16 block overflow-hidden rounded-card bg-panel md:mt-20"
      >
        <Image
          src={featured.image.src}
          alt={featured.image.alt}
          width={1920}
          height={1080}
          sizes="(min-width: 1344px) 1296px, 100vw"
          className="aspect-video w-full object-cover object-top md:aspect-21/9"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="space-y-3">
            <Badge tone="info">In production</Badge>
            <p className="text-heading-sm font-bold text-white md:text-heading">
              {featured.title}
            </p>
          </div>
          <span className={`${button.ghost} group-hover:text-white`}>
            Read the case study <Icon name="arrow-right" />
          </span>
        </div>
      </Link>
    </section>
  );
}
