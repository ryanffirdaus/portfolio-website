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
    <main className={`${container} pt-10 pb-12`}>
      <Link href="/#work" className={`${button.ghost} text-fog hover:text-white`}>
        <Icon name="arrow-left" /> All work
      </Link>

      <header className="mt-12 max-w-240">
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && <Badge tone="live">Live demo</Badge>}
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-6 text-heading-lg font-bold text-white md:text-display">
          {project.title}
        </h1>
        <p className="mt-6 text-subheading text-fog">{project.description}</p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button.primary} mt-8`}
          >
            Open the demo <Icon name="arrow-up-right" />
          </a>
        )}
      </header>

      <div className="mt-16 space-y-24">
        <Gallery images={project.gallery} />
        <KeyResults results={project.keyResults} />

        <section className="grid gap-6 md:grid-cols-12">
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
        </section>

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
            className="group flex items-center justify-between gap-6 rounded-card bg-panel p-6 transition-colors hover:bg-raised md:p-10"
          >
            <span>
              <span className={`${eyebrow} block`}>Next project</span>
              <span className="mt-2 block text-heading-sm font-bold text-white md:text-heading">
                {nextProject.title}
              </span>
            </span>
            <Icon name="arrow-right" size={24} className="text-signal" />
          </Link>
        )}
      </div>
    </main>
  );
}
