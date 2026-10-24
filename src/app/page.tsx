import HeroSection from "@/components/home/HeroSection";
import StackSection from "@/components/home/StackSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ApproachSection from "@/components/home/ApproachSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactSection from "@/components/home/ContactSection";
import { personal } from "@/data/personal";
import { SITE_URL } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: SITE_URL,
  image: personal.about.image.src,
  description: personal.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: personal.location,
  },
  sameAs: [
    personal.social.github,
    personal.social.linkedin,
    personal.social.instagram,
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <ApproachSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
