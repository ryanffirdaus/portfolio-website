import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectDetail } from "@/data/projects";
import { projectSummaries } from "@/data/projects";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { button, container, eyebrow } from "@/components/ui/styles";
import LiveDemoSection from "@/components/project/LiveDemoSection";
import Gallery from "@/components/project/Gallery";
import ArchitectureGrid from "@/components/project/ArchitectureGrid";
import KeyResults from "@/components/project/KeyResults";
import TechStackSection from "@/components/project/TechStackSection";
import { Reveal } from "@/components/motion/Reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSummaries.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    keywords: project.tags,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.heroImage.src, alt: project.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.heroImage.src],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) notFound();

  const index = projectSummaries.findIndex((p) => p.slug === slug);
  const nextProject = projectSummaries[(index + 1) % projectSummaries.length];

  return (
    <main data-theme="dark" className={`${container} pt-32 pb-40`}>
      <Link href="/#work" className={`${button.ghost} text-fog hover:text-white`}>
        <Icon name="arrow-left" /> All work
      </Link>

      <Reveal as="header" stagger className="mt-12 max-w-260">
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && <Badge tone="live">Live demo</Badge>}
          {project.sourceUrl && <Badge tone="info">Open source</Badge>}
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-6 text-[16vw] leading-[0.92] font-semibold tracking-[-0.045em] text-white md:text-[112px]">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-body text-fog md:text-subheading">{project.description}</p>
        {(project.liveUrl || project.downloadUrl || project.sourceUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={button.primary}
              >
                Open the demo <Icon name="arrow-up-right" />
              </a>
            )}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={project.liveUrl ? button.outline : button.primary}
              >
                Download the APK <Icon name="arrow-up-right" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.liveUrl || project.downloadUrl
                    ? button.outline
                    : button.primary
                }
              >
                View source on GitHub <Icon name="arrow-up-right" />
              </a>
            )}
          </div>
        )}
      </Reveal>

      <div className="mt-16 space-y-24">
        <Gallery
          images={project.gallery}
          mobile={project.platform === "mobile"}
        />
        <KeyResults results={project.keyResults} />

        <Reveal as="section" className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className={eyebrow}>The problem</p>
          </div>
          <div className="space-y-6 md:col-span-8">
            {project.challenge.map((p, i) => (
              <p key={i} className="text-subheading text-fog">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <ArchitectureGrid cards={project.architecture.cards} />
        <TechStackSection items={project.techStack} />
        {project.liveUrl && (
          <LiveDemoSection
            liveUrl={project.liveUrl}
            credentials={project.demoCredentials}
          />
        )}

        {nextProject.slug !== slug && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-steel pt-8 transition-colors"
          >
            <span>
              <span className={`${eyebrow} block`}>Next project</span>
              <span className="mt-2 block text-[10vw] leading-none font-semibold tracking-[-0.04em] text-white md:text-[64px]">
                {nextProject.title}
              </span>
            </span>
            <Icon name="arrow-right" size={32} className="text-neon transition-transform duration-500 ease-out-expo group-hover:translate-x-2" />
          </Link>
        )}
      </div>
    </main>
  );
}
