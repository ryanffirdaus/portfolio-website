// Copy and imagery for the home page. English follows ASD-STE100.

import type { IconName } from "@/components/ui/Icon";

export interface Insert {
  src: string;
  alt: string;
}

const shot = (path: string): Insert => ({ src: `/images/projects/${path}`, alt: "" });

export const hero = {
  // Each line is a row of words and photo tiles, like a printed headline.
  // A word in _underscores_ is set in the italic display serif.
  // Photos: CC0 / public domain, via Openverse (server: U.S. Air National
  // Guard; kitchen: StockSnap; factory and payment: Flickr / Wikimedia).
  lines: [
    ["Building", { src: "/images/hero/server.webp", alt: "" }],
    [{ src: "/images/hero/kitchen.webp", alt: "" }, "Software That"],
    ["Runs _Real_", { src: "/images/hero/payment.webp", alt: "" }],
    [{ src: "/images/hero/factory.webp", alt: "" }, "Businesses"],
  ] as (string | Insert)[][],
  intro:
    "I am a back-end and IoT software engineer in Jakarta. I build systems that businesses use each day, from device firmware to the dashboard.",
};

// The pinned project reel: one phase per project, with its screens
// floating past at different depths.
export interface ReelItem {
  slug: string;
  tagline: string;
  blurb: string;
  /** "portrait" = phone screens, "landscape" = web screens */
  shape: "portrait" | "landscape";
  shots: Insert[];
}

export const reel = {
  label: "Selected work",
  items: [
    {
      slug: "b4due",
      tagline: "Bill reminders that work offline.",
      blurb:
        "An Android app that tells you before a bill is due. It has no account and no server, so it is free for all users.",
      shape: "portrait",
      shots: [
        shot("b4due/home.webp"),
        shot("b4due/widget.webp"),
        shot("b4due/bills_dark.webp"),
        shot("b4due/spending.webp"),
      ],
    },
    {
      slug: "smartcool",
      tagline: "Live monitoring for 2000+ devices.",
      blurb:
        "An IoT platform that I rebuilt from a legacy PHP system. After the rebuild, the CPU load went down by 98%.",
      shape: "landscape",
      shots: [
        shot("smartcool-monitoring/homepage_monitoring_1.webp"),
        shot("smartcool-monitoring/device_monitoring_1.webp"),
        shot("smartcool-monitoring/report_energy.webp"),
        shot("smartcool-monitoring/work_order_schedule.webp"),
      ],
    },
    {
      slug: "servio",
      tagline: "A full restaurant in one system.",
      blurb:
        "Point of sale, kitchen display, and online payments. Each role in the restaurant has its own screen.",
      shape: "landscape",
      shots: [
        shot("servio/point_of_sale.webp"),
        shot("servio/kitchen_display.webp"),
        shot("servio/table_floor_plan.webp"),
        shot("servio/dashboard_analytics.webp"),
      ],
    },
  ] satisfies ReelItem[],
};

export const approach = {
  heading: "How I Work",
  body: "Each step builds on the one before it, so the product stands on solid ground.",
  steps: [
    {
      name: "Understand the work",
      short: ["Under-", "stand"],
      text: "I learn how your team works now and what slows it down.",
      output: "You get: a short written scope",
    },
    {
      name: "Plan the system",
      short: ["Plan"],
      text: "Data, screens, and integrations, agreed with you before I write code.",
      output: "You get: a plan and a fixed first goal",
    },
    {
      name: "Build in small steps",
      short: ["Build"],
      text: "A working version every week, so your team can test it early.",
      output: "You get: software you can try each week",
    },
    {
      name: "Ship and support",
      short: ["Ship"],
      text: "Deploy, monitor, and fix. Documents so your team can own the system.",
      output: "You get: a live system and its handbook",
    },
  ],
  core: "You see working software every week, not only at the end.",
};

export const services = {
  heading: "What I can build",
  accent: "for you",
  body: "Five kinds of work I do often. Each one has a real project behind it.",
  items: [
    {
      icon: "code",
      name: "Web applications",
      text: "Apps in the browser for your customers or your team.",
      proof: "Servio, Smartcool",
    },
    {
      icon: "layers",
      name: "Internal business systems",
      text: "Stock, production, and work orders in one place, with the full history.",
      proof: "Inventory system for 50+ SKUs",
    },
    {
      icon: "server",
      name: "APIs and integrations",
      text: "REST APIs and webhooks that connect devices, payment gateways, and other platforms.",
      proof: "API layer for a 1,000-device project",
    },
    {
      icon: "pulse",
      name: "IoT monitoring and firmware",
      text: "Live data from the device to the dashboard: C++ firmware, MQTT, and alerts.",
      proof: "2000+ devices, 3 firmware projects",
    },
    {
      icon: "phone",
      name: "Mobile apps",
      text: "Android apps built with Flutter that also work offline.",
      proof: "B4Due",
    },
  ] satisfies { icon: IconName; name: string; text: string; proof: string }[],
};
