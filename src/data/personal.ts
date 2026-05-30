import type { Stat } from "@/types";

export const personal = {
  name: "Ryan Faatih Firdaus",
  title: "Software Engineer",
  location: "Jakarta, Indonesia",
  bio: "Software Engineer delivering high-impact back-end and IoT solutions. Migrated legacy systems to React/Laravel, cutting CPU load by 98%.",

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
    heading: "Ready to build the future?",
    headingAccent: "the future?",
    body: "Currently accepting select freelance projects and full-time technical leadership roles. Let's discuss your next breakthrough.",
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

  resumeHref: "https://drive.google.com/file/d/1JG4pEsGHu3LWBQMoGxtPzLXKyrYC_fGf/view?usp=sharing",
  copyright: "© 2026 Ryan Faatih Firdaus. All rights reserved.",
} as const;
