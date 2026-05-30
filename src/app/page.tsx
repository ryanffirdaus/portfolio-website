import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import ContactSection from "@/components/home/ContactSection";

const inner = "max-w-container-max mx-auto px-margin-mobile md:px-gutter";

export default function HomePage() {
  return (
    <main>
      {/* Hero — primary bg with ambient gradient */}
      <div className="relative bg-background overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-ambient" />
        <div className={inner}>
          <HeroSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Projects — elevated surface */}
      <div className="bg-surface-container-low">
        <div className={inner}>
          <ProjectsSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Skills — base bg */}
      <div className="bg-background">
        <div className={inner}>
          <SkillsSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Experience — elevated surface */}
      <div className="bg-surface-container-low">
        <div className={inner}>
          <ExperienceSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Education — base bg */}
      <div className="bg-background">
        <div className={inner}>
          <EducationSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Contact — elevated surface */}
      <div className="bg-surface-container-low">
        <div className={inner}>
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
