import type { ProjectSummary, ProjectDetail } from "@/types";

// ─────────────────────────────────────────────
// Home page project cards
// ─────────────────────────────────────────────
export const projectSummaries: ProjectSummary[] = [
  {
    slug: "smartcool",
    title: "Real-time IoT Platform",
    tags: ["Node.js", "MQTT"],
    description:
      "Scalable infrastructure serving 500+ concurrent users with sub-50ms latency for device communication.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhWgPl4N6CYkbIgMWBdRPD8zTuI9Iu9rG_mHDGgnrFR-TC2p4fRuo6XTTHlBMUbfP8d_zZQ0-nxX6wErJ3wkxDhR69PGCW5O0ouozkApprd0sxZUZl-Xd9CHmZQag2RHxlYRcczr9TJIfx10ebaiB7c4ehsD-tW7mc0ZRILC7onDy_lkfnSPTRRD61hunVUucPyLGw_Lq-3n1FPuFnjxdxqFjvktFJXRs1UjS8VMtrJAAz_R-dFofAXdMLISNOLW0qxm5vIepf8Kk",
      alt: "IoT Platform",
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
    title: "Real-time IoT Platform",
    tags: ["Node.js", "MQTT", "Docker"],
    description:
      "A scalable infrastructure designed to handle high-frequency telemetry data, reliably serving over 500+ concurrent edge devices while maintaining extreme efficiency.",
    heroImage: {
      src: "https://lh3.googleusercontent.com/aida/ADBb0uj2Qn6NNutS7EVhRU2hxeOEk1DK0ZmGGLEImJnb3pMMuK1dMNqvWYCpV-K8nW4d3-y5Hd4mNqBQ_JqBBDbRN_Vtd_8uQjK4Ea0Zm-z1PGI8MJv5Z1gUDJR-QJwRi047m1GeaS2vLUnL_GSfbCTnfdcknUBKN6IQB-qObstnCBOsRBq3Tem-9K92QMj_ZYk1O7iJLlbuTD5uuxJd3s0UwTu6iLqECY7D-W9St6BDzr1hJuHIl-YNpSRMdz8",
      alt: "Cloud Infrastructure Architecture",
    },
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida/ADBb0uj1lKeWTtjyfG7cRp7gnWbnsot1ho2JEu49-ZTIgsEFL3t6G-ckbBhdPNtezFx20-PnztXIe_5d2Up7eQNSJK8VTvoLPifLvMLLU918K1lT3xF4JpxsSwF6yVENBUW6nHSA8O_LZCcxh1vUOPAv-_ZNatfv5Y_mshJWauwzpJfT60P6-MqQ5EWIj0LgCmT_9GY2pBW568Z0NgAEakPBbo3bvVbq-pk4GHo1w5HRlFR7H2uVoR7-cuRCX6s",
        alt: "Edge Computing Hardware",
      },
      {
        src: "https://lh3.googleusercontent.com/aida/ADBb0uja6pdvABc3XuXlpFsAKi_ykyYdscwZDZozk355mcbEvORK11SZl8yIB9C9QZMnn7GQnrspTSLcQIa5R-L_JU8BwQwwJn2_15exiK-_bQZeqxKjOIA6WsUBzd2tfxuej3xluBB-dT4nCcxIn135vw3fVdPpUt5QgVmwbTClsDvM2R2zEQzmVcLLe4IyxPQ40qAflisxjfrv8kdUIzNH_o7VDPqC8MDcLEvNuIX0A9WJJzlmQq_T4PBtCl0",
        alt: "Real-time Metrics Dashboard",
      },
    ],
    challenge: [
      "The core requirement was to build a system capable of achieving sub-50ms latency for device-to-cloud communication. Traditional HTTP polling was too heavy and slow for the volume of telemetry data required. The business impact relied heavily on real-time responsiveness for critical monitoring alerts.",
      "We needed a lightweight, persistent connection protocol and a backend architecture that could process streams of data without bottlenecking during sudden spikes in device activity.",
    ],
    architecture: {
      cards: [
        {
          icon: "router",
          iconFill: true,
          iconAnimation: "scale",
          title: "Edge Layer",
          description:
            "Devices connect via MQTT over TLS. We implemented a custom keep-alive mechanism to ensure connection stability even in low-bandwidth environments.",
        },
        {
          icon: "sync_alt",
          iconFill: true,
          iconAnimation: "rotate",
          title: "Message Broker",
          description:
            "A highly available Mosquitto cluster handles topic routing and message queuing, decoupling device ingress from the backend processing services.",
        },
        {
          icon: "database",
          iconFill: true,
          iconAnimation: "scale",
          title: "Data Persistence",
          description:
            "Time-series data is offloaded to a specialized database optimized for high-write throughput, allowing for efficient historical querying and visualization.",
        },
      ],
    },
    keyResults: [
      { target: 500, suffix: "+", label: "Concurrent Devices" },
      { prefix: "<", target: 50, suffix: "ms", label: "Avg Latency" },
      { target: 99.9, isDecimal: true, suffix: "%", label: "Uptime" },
      { target: 98, suffix: "%", label: "CPU Efficiency" },
    ],
    techStack: [
      {
        number: "01",
        title: "Node.js",
        description:
          "Used for the core backend microservices. Its event-driven, non-blocking I/O model proved ideal for handling thousands of simultaneous connections without thread overhead.",
      },
      {
        number: "02",
        title: "MQTT",
        description:
          "Chosen for its lightweight header and pub/sub architecture, drastically reducing bandwidth consumption compared to REST APIs over HTTP.",
      },
      {
        number: "03",
        title: "Docker",
        description:
          "Containerization ensured environment consistency across development, staging, and production, facilitating rapid deployments and horizontal scaling.",
      },
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
