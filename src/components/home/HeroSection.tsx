import Link from "next/link";
import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section className="min-h-[819px] flex flex-col justify-center py-section-gap">
      <div className="max-w-3xl space-y-6">
        {/* Availability badge */}
        <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue-muted text-primary border border-primary/20 opacity-0 animate-fade-in-up delay-100">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-md text-label-md relative z-10">
            {personal.availability}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-display text-charcoal-deep dark:text-on-surface leading-tight opacity-0 animate-fade-in-up delay-200">
          {personal.name}. <br />
          <span className="text-primary">{personal.title}</span>
        </h1>

        {/* Bio */}
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl opacity-0 animate-fade-in-up delay-300">
          {personal.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up delay-400">
          <Link
            href="/#projects"
            className="bg-primary text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:scale-[1.02] transition-all flex items-center gap-2 group"
          >
            View Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/#contact"
            className="border border-outline-variant text-charcoal-deep dark:text-on-surface px-8 py-4 rounded font-label-md text-label-md hover:bg-surface-variant transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
