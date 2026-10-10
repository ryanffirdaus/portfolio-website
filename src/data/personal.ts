import type { Stat, ExperienceItem, EducationItem } from "@/types";

export const personal = {
  name: "Ryan Faatih Firdaus",
  title: "Software Engineer",
  location: "Jakarta, Indonesia",
  bio: "I build inventory management systems, workflow automation tools, SaaS applications, payment integrations, and real-time monitoring platforms that help businesses streamline operations and scale efficiently.",

  about: {
    heading: "Technical Expertise",
    paragraphs: [
      "With over 5 years of experience in full-stack development, I specialize in building robust, scalable back-end architectures and seamless IoT integrations. My approach is rooted in technical precision and architectural efficiency.",
      "I thrive at the intersection of complex problem solving and user-centric design. Whether it's optimizing legacy databases or architecting real-time communication protocols, my focus is always on delivering measurable performance gains.",
    ],
    stats: [
      { value: "98%", label: "CPU Load Reduction" },
      { value: "500+", label: "IoT Active Users" },
    ] satisfies Stat[],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC154HI5OjA_nYLouBg7yThEgcqdULbb0NP6HQc656CVK67GahOka0j1YldOROHqAQ4ejnr7eGqfZ2rju4bUOieh6Spwv2qD2ogtF6_n0zA79EhkUpvaQ8K1tr97CPmzE5-KSL5DavMJRh2xIXMEhH3orA0b9kIki_GyqlNLrmTGkw1kPgj1ZDDvstLRxSBA-3mtVULqA_5Mp8WfBpuFNP9h7PQ2ZOdDTxqr3hY6bBr3mVJdVtw2aMrLMEb-6VqUcEW-eeGbkgT1gA",
      alt: "Workspace",
    },
  },

  contact: {
    heading: "Have something that needs building?",
    body: "Web applications, internal business systems, API and payment integrations, real-time monitoring. If you have a project in mind, send a short note about it.",
    email: "ryanfaatih.firdaus@gmail.com",
    location: "Jakarta, Indonesia",
  },

  social: {
    linkedin: "https://linkedin.com/in/ryanffirdaus",
    github: "https://github.com/ryanffirdaus",
    instagram: "https://instagram.com/ryanffirdaus",
    email: "mailto:ryanfaatih.firdaus@gmail.com",
    sourceCode: "https://github.com/ryanffirdaus",
  },

  resumeHref: "https://drive.google.com/file/d/18uP_qgaPib3xd4HycIHB91V_AT3Klbno/view?usp=sharing",
  copyright: "© 2026 Ryan Faatih Firdaus. All rights reserved.",
} as const;

export const experience: ExperienceItem[] = [
  {
    company: "PT Quanta Teknik Gemilang",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    location: "Indonesia",
    logo: "/images/companies/smartcool_logo.webp",
    description:
      "Led full-stack modernization of a legacy IoT management platform and architected scalable back-end systems supporting 500+ active users.",
    highlights: [
      "Migrated legacy PHP-based IoT system to React and Laravel, reducing CPU load by ~98%",
      "Optimized database queries and implemented Redis caching, reducing memory usage by ~75%",
      "Architected REST APIs, database schema, service layers, and application structure using Laravel and Node.js",
      "Developed a real-time IoT monitoring system ingesting live sensor data from 600+ connected devices and processing live telemetry across 5+ sensor metrics",
      "Built 7 Node.js microservices for data processing pipelines and background services",
      "Developed and maintained React front-end with real-time dashboard components visualizing 5+ IoT metrics",
      "Managed server infrastructure with Docker and Linux, streamlining deployments via containerization and automated pipelines",
    ],
  },
  {
    company: "PT Origin Wiracipta Lestari",
    role: "Back-End Web Developer Intern",
    period: "Jan 2024 — Mar 2024",
    location: "Indonesia",
    logo: "/images/companies/owl_logo.webp",
    description:
      "Built a full-featured Inventory Management System from scratch using PHP, covering the end-to-end product lifecycle across 50+ SKUs.",
    highlights: [
      "Implemented stock management module tracking real-time inventory with full incoming/outgoing transaction history",
      "Developed a production module managing manufacturing workflow from raw materials to finished goods",
      "Built a maintenance and return module with step-by-step progress tracking and personnel traceability across 50+ records",
      "Designed and optimized the database schema to ensure data integrity and query performance across all modules",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
    degree: "Bachelor of Information Systems",
    field: "Information Systems",
    period: "2021 — 2025",
    location: "Jakarta, Indonesia",
    description: "GPA: 3.57 / 4.00",
  },
];
