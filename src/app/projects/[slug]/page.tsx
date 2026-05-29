import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectDetail } from "@/data/projects";
import { projectSummaries } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
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
    title: `${project.title} – Case Study`,
    description: project.description,
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
      <OverviewSection paragraphs={project.challenge} />
      <ArchitectureGrid cards={project.architecture.cards} />
      <KeyResults results={project.keyResults} />
      <TechStackSection items={project.techStack} />
    </main>
  );
}
