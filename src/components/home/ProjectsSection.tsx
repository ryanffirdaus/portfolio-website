import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ProjectReel from "@/components/home/ProjectReel";
import Section from "@/components/motion/Section";
import { Reveal } from "@/components/motion/Reveal";
import { container, eyebrow } from "@/components/ui/styles";
import { reel } from "@/data/home";
import { projectSummaries } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="work" theme="dark" curve className="dot-grid">
      <ProjectReel />

      {/* After the reel: every case study, one line each. */}
      <div className={`${container} pt-12 pb-32`}>
        <Reveal className="flex items-end justify-between gap-6 border-b border-steel pb-6">
          <h2 className="text-[9vw] leading-none font-semibold tracking-[-0.05em] text-white md:text-[48px]">
            All case studies
          </h2>
          <p className={`${eyebrow} hidden text-silver md:block`}>
            {String(projectSummaries.length).padStart(2, "0")} projects
          </p>
        </Reveal>

        <Reveal as="ol" stagger className="mt-4 space-y-2">
          {projectSummaries.map(({ slug, title, tags, image }, i) => {
            const tagline = reel.items.find((r) => r.slug === slug)?.tagline;
            return (
              <li key={slug}>
                <Link
                  href={`/projects/${slug}`}
                  className="chamfer chamfer-frame group block bg-steel transition-colors duration-500 hover:bg-neon [--frame-cut:14px]"
                >
                  <span className="chamfer grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 bg-ink px-5 py-5 transition-colors duration-500 group-hover:bg-panel md:grid-cols-[4rem_1.1fr_1.4fr_auto] md:px-8 md:py-7">
                    <span className="font-mono text-body-sm text-neon">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[24px] leading-none font-semibold tracking-[-0.03em] text-white md:text-[36px]">
                      {title}
                    </span>
                    <span className="col-span-3 col-start-2 row-start-2 text-body-sm text-fog md:col-span-1 md:col-start-3 md:row-start-1">
                      {tagline}
                      <span className="mt-2 block font-mono text-[11px] tracking-[0.04em] text-muted uppercase">
                        {tags.slice(0, 4).join(" / ")}
                      </span>
                    </span>
                    <span className="col-start-3 row-start-1 flex items-center gap-4 md:col-start-4">
                      {/* The cover opens on hover. */}
                      <span className="chamfer chamfer-sm relative hidden h-16 w-0 overflow-hidden transition-[width] duration-700 ease-out-expo group-hover:w-28 md:block">
                        <Image src={image.src} alt="" fill sizes="112px" className="object-cover object-top" />
                      </span>
                      <Icon
                        name="arrow-up-right"
                        size={22}
                        className="text-silver transition-[color,transform] duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-neon"
                      />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
