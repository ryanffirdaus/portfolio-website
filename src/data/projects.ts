import type { ProjectSummary, ProjectDetail } from "@/types";

// ─────────────────────────────────────────────
// Home page project cards
// ─────────────────────────────────────────────
export const projectSummaries: ProjectSummary[] = [
  {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "Full-stack IoT monitoring platform supporting 600+ connected devices and 500+ active users, rebuilt from a legacy PHP system with 98% CPU load reduction.",
    image: {
      src: "/images/projects/smartcool-monitoring/smartcool_thumbnail.webp",
      alt: "Smartcool Monitoring",
    },
  },
  {
    slug: "system-modernization",
    title: "System Modernization",
    tags: ["Laravel", "React"],
    description:
      "Migrated monolithic legacy PHP system to decoupled architecture, achieving 98% CPU efficiency gain.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhldXTvX56e4dVCSH488TP7cniirwC1k8gU-SJFt3DfBgBFzbmjippvkib7pYFjcn3GSaNM0axVjyXt7CslvH6KehlDC61H465AhfwmISXKFKeSNhwb9VFLvZfWtrspFr4I7U8ZgS-vxVsXZQeyTxUmFaqPU48cQEu32rXsczbua6yJCiA4eaB0T3Vr6J8lfIW1jzFcoomDbszz9fIt9cX0i-ufBYpSZUPYMOXwIGb8wB90Ec3k-_TrwhO1GgvKW0kNm4vKznvieQ",
      alt: "Legacy Migration",
    },
  },
  {
    slug: "api-gateway",
    title: "API Gateway Service",
    tags: ["Docker", "Go"],
    description:
      "Centralized auth and routing layer for 15+ microservices with integrated monitoring and rate limiting.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB68h5RP5hrs26Cnntd9_PHzIlXCxKEzZXkzM9aavENo7WEJeQUt6KEqd4ojEZWlqXi94e9gKVvFuXg-U90cmtZIBVzeYAryS8kpX0z_tg9-AdKcxyMZX0mxGnjA_UTjZXTAMIPfZouu3U24MXQu3B9eJJU9AWD0YaFWeYuoldW7SzHGBFZeAA-K9f2TctnLoiqruhYiMskcWUnOxxBPwuK6LAp-L0zw8N9nl8C0GB6LsXE-eZknXJjaoynEZIHQVC8UUw9EnligVo",
      alt: "Microservices Architecture",
    },
  },
];

// ─────────────────────────────────────────────
// Full project detail data (one entry per slug)
// ─────────────────────────────────────────────
const projectDetails: Record<string, ProjectDetail> = {
  smartcool: {
    slug: "smartcool",
    title: "Smartcool Monitoring",
    tags: ["Laravel", "Node.js", "React", "MQTT", "Docker", "Redis"],
    description:
      "A full-stack IoT monitoring platform migrated from a legacy PHP dashboard to a modern React and Laravel architecture. The system supports 600+ connected devices across 5+ sensor metrics in real time, serves 500+ active users, and is powered by 7 Node.js microservices handling data pipelines, background jobs, and third-party integrations.",
    heroImage: {
      src: "/images/projects/smartcool-monitoring/smartcool_thumbnail.webp",
      alt: "Smartcool Monitoring Dashboard",
    },
    gallery: [
      {
        src: "/images/projects/smartcool-monitoring/homepage_monitoring_1.webp",
        alt: "Homepage Monitoring",
      },
      {
        src: "/images/projects/smartcool-monitoring/homepage_monitoring_2.webp",
        alt: "Homepage Monitoring Detail",
      },
      {
        src: "/images/projects/smartcool-monitoring/device_monitoring_1.webp",
        alt: "Device Monitoring",
      },
      {
        src: "/images/projects/smartcool-monitoring/device_monitoring_2.webp",
        alt: "Device Monitoring Detail",
      },
      {
        src: "/images/projects/smartcool-monitoring/summary.webp",
        alt: "Summary",
      },
      {
        src: "/images/projects/smartcool-monitoring/report_energy.webp",
        alt: "Energy Report",
      },
      {
        src: "/images/projects/smartcool-monitoring/work_order_schedule.webp",
        alt: "Work Order Schedule",
      },
      {
        src: "/images/projects/smartcool-monitoring/work_order_tracker.webp",
        alt: "Work Order Tracker",
      },
    ],
    challenge: [
      "The original system was a legacy PHP-based IoT dashboard that had grown unmaintainable over time. It suffered from high CPU utilization, slow database queries, and a tightly coupled architecture that made adding new features risky. The business needed a stable platform capable of scaling to hundreds of connected devices and users simultaneously.",
      "We migrated the front end to React and the back end to Laravel, redesigned the database schema, and introduced Redis caching to address memory and query bottlenecks. Separately, a real-time telemetry layer was built using 7 dedicated Node.js microservices, each responsible for a distinct concern — from data ingestion and processing pipelines to external system integrations and payment handling via Midtrans.",
    ],
    architecture: {
      cards: [
        {
          icon: "devices",
          iconFill: true,
          iconAnimation: "scale",
          title: "IoT Device Layer",
          description:
            "600+ connected devices stream live telemetry across 5+ sensor metrics. Node.js microservices handle ingestion, processing pipelines, and real-time delivery to the front end.",
        },
        {
          icon: "layers",
          iconFill: true,
          iconAnimation: "scale",
          title: "Laravel Back End",
          description:
            "REST APIs, third-party integrations, database schema design, and service layers are built in Laravel. Redis caching reduces memory usage by ~75% and accelerates frequent queries.",
        },
        {
          icon: "deployed_code",
          iconFill: true,
          iconAnimation: "rotate",
          title: "Infrastructure",
          description:
            "Containerized with Docker and deployed on Linux servers via automated pipelines, ensuring consistent environments across development and production.",
        },
      ],
    },
    keyResults: [
      { target: 600, suffix: "+", label: "Connected Devices" },
      { target: 500, suffix: "+", label: "Active Users" },
      { target: 98, suffix: "%", label: "CPU Load Reduction" },
      { target: 75, suffix: "%", label: "Memory Usage Reduction" },
      { target: 7, label: "Node.js Microservices" },
    ],
    techStack: [
      {
        number: "01",
        title: "Laravel",
        description:
          "Powers the core back-end: REST APIs, service layers, database schema design, third-party API integrations, and the Midtrans payment gateway. Chosen for its expressive ORM, robust structure, and rapid development cycle.",
      },
      {
        number: "02",
        title: "Node.js",
        description:
          "Seven dedicated microservices built with Node.js handle real-time telemetry ingestion, data processing pipelines, background jobs, and integrations with external systems.",
      },
      {
        number: "03",
        title: "React",
        description:
          "The front end was fully migrated from legacy PHP views to React, enabling a component-driven UI with live data updates and a significantly improved user experience.",
      },
      {
        number: "04",
        title: "Redis",
        description:
          "Introduced as a caching layer for frequent database reads, reducing memory usage by approximately 75% and improving response times across high-traffic endpoints.",
      },
      {
        number: "05",
        title: "Docker",
        description:
          "All services are containerized and deployed on Linux servers through automated pipelines, ensuring environment parity and enabling reliable horizontal scaling.",
      },
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
