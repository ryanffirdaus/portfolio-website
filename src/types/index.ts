export interface ProjectSummary {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  image: { src: string; alt: string };
}

export interface ArchitectureCard {
  title: string;
  description: string;
}

export interface KeyResult {
  prefix?: string;
  suffix?: string;
  target: number;
  isDecimal?: boolean;
  label: string;
}

export interface TechStackItem {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  logo?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface DemoCredential {
  role: string;
  email: string;
  password: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  /** Optional link to a live/production deployment of the project */
  liveUrl?: string;
  /** Optional demo login credentials shown on the project page */
  demoCredentials?: DemoCredential[];
  heroImage: { src: string; alt: string };
  gallery: GalleryImage[];
  challenge: string[];
  architecture: {
    cards: ArchitectureCard[];
  };
  keyResults: KeyResult[];
  techStack: TechStackItem[];
}

export interface Skill {
  name: string;
  category: string;
  /** simpleicons.org slug; rendered as a monochrome mark */
  icon?: string;
}

export interface Stat {
  value: string;
  label: string;
}
