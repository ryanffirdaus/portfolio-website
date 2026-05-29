import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
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

      {/* About — elevated surface */}
      <div className="bg-surface-container-low">
        <div className={inner}>
          <AboutSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Projects — base bg */}
      <div className="bg-background">
        <div className={inner}>
          <ProjectsSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Skills — elevated surface */}
      <div className="bg-surface-container-low">
        <div className={inner}>
          <SkillsSection />
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Contact — base bg */}
      <div className="bg-background">
        <div className={inner}>
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
