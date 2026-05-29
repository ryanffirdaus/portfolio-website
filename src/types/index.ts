export interface ProjectSummary {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  image: { src: string; alt: string };
}

export interface ArchitectureCard {
  icon: string;
  iconFill?: boolean;
  title: string;
  description: string;
  iconAnimation?: "scale" | "rotate" | "none";
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

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tags: string[];
  description: string;
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
}

export interface Stat {
  value: string;
  label: string;
}
