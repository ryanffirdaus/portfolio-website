import type { Stat, ExperienceItem, EducationItem } from "@/types";

export const personal = {
  name: "Ryan Faatih Firdaus",
  title: "Back-End & IoT Software Engineer",
  location: "Jakarta, Indonesia",
  bio: "I build back-end systems and real-time IoT platforms: APIs, data pipelines, device firmware, and the dashboards on top of them.",

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

  resumeHref: "/files/CV.pdf",
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
      "Builds real-time IoT monitoring platforms, device firmware, and API integrations for large on-premise deployments.",
    highlights: [
      "Built a real-time IoT monitoring platform ingesting live telemetry (5+ sensor metrics) from 2000+ devices over MQTT, serving 500+ active users",
      "Redesigned the telemetry pipeline after hundreds of devices writing every MQTT reading to MySQL every 5 seconds saturated server CPU and memory: moved live data to Redis (latest value per device, refreshed every 15 seconds) and persisted to MySQL every 15 minutes, cutting database writes per device by 180x, CPU usage by ~98%, and memory usage by ~75%",
      "Developed 3 IoT device firmware projects in C++ and improved several existing firmware, owning the full stack from device to back end to dashboard",
      "Migrated a legacy PHP monitoring dashboard to a React front end and Laravel back end, improving maintainability",
      "Building a Data Center Infrastructure Management (DCIM) platform in Go (in progress)",
      "Built the API integration layer for a separate 1,000-device on-premise project, connecting field devices to the platform via REST APIs and webhooks",
      "Designed and maintained public and internal REST APIs enabling interoperability between IoT devices, external platforms, and internal services",
      "Developed 7 Node.js microservices for data processing pipelines, background jobs, and external system integrations, including a notification service that delivers alerts via webhooks and REST callbacks",
      "Containerized and deployed services with Docker on Linux servers, using Nginx as a reverse proxy to route traffic to each service",
      "Set up Grafana dashboards and alerts to monitor server health and notify the team of issues such as storage running full",
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
      "Built an inventory management system in PHP from scratch, with real-time stock tracking, full incoming/outgoing transaction history, and 50+ SKUs",
      "Developed a production module covering the workflow from raw materials to finished goods, with automatic stock deduction at each stage",
      "Designed the relational database schema to ensure data integrity and query performance across all modules",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
    degree: "Bachelor of Information Systems",
    field: "Information Systems",
    period: "Sep 2021 — Dec 2025",
    location: "Jakarta, Indonesia",
    description: "GPA: 3.57 / 4.00",
  },
];
