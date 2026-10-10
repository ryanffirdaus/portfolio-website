import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "PHP", category: "Languages", icon: "php" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  // Frameworks & Runtimes
  { name: "Laravel", category: "Frameworks & Runtimes", icon: "laravel" },
  { name: "Node.js", category: "Frameworks & Runtimes", icon: "nodedotjs" },
  { name: "React", category: "Frameworks & Runtimes", icon: "react" },
  // Databases
  { name: "MySQL", category: "Databases", icon: "mysql" },
  { name: "PostgreSQL", category: "Databases", icon: "postgresql" },
  { name: "Supabase", category: "Databases", icon: "supabase" },
  // DevOps & Infrastructure
  { name: "Docker", category: "DevOps & Infrastructure", icon: "docker" },
  { name: "Linux", category: "DevOps & Infrastructure", icon: "linux" },
  { name: "Redis", category: "DevOps & Infrastructure", icon: "redis" },
  { name: "MQTT", category: "DevOps & Infrastructure" },
  // Tools
  { name: "Git", category: "Tools", icon: "git" },
  { name: "Figma", category: "Tools", icon: "figma" },
];
