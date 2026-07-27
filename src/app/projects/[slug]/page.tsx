import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectDetail } from "@/data/projects";
import { projectSummaries } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import LiveDemoSection from "@/components/project/LiveDemoSection";
import Gallery from "@/components/project/Gallery";
import OverviewSection from "@/components/project/OverviewSection";
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

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-16 pb-section-gap overflow-hidden">
      <ProjectHero project={project} />
      <Gallery images={project.gallery} />
      {project.liveUrl && (
        <LiveDemoSection
          liveUrl={project.liveUrl}
          credentials={project.demoCredentials}
        />
      )}
      <OverviewSection paragraphs={project.challenge} />
      <ArchitectureGrid cards={project.architecture.cards} />
      <KeyResults results={project.keyResults} />
      <TechStackSection items={project.techStack} />
    </main>
  );
}
