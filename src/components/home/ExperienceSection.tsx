import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/personal";

export default function ExperienceSection() {
  return (
    <section className="py-section-gap scroll-mt-24" id="experience">
      <Reveal className="space-y-3 mb-12">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
          Career
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
          Work Experience
        </h2>
      </Reveal>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-[11px] top-2 bottom-2 w-px bg-outline-variant/40 hidden md:block" />

        <div className="space-y-10">
          {experience.map(
            (
              {
                company,
                role,
                period,
                location,
                description,
                highlights,
                logo,
              },
              idx,
            ) => (
              <Reveal
                key={idx}
                className="md:pl-10 relative"
                delay={idx === 0 ? "delay-100" : "delay-200"}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-[23px] h-[23px] items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-surface" />
                </div>

                <div className="bg-surface-card border border-outline-variant/30 rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-4">
                      {logo && (
                        <div className="w-11 h-11 rounded-md border border-outline-variant/30 bg-surface overflow-hidden shrink-0 flex items-center justify-center">
                          <Image
                            src={logo}
                            alt={`${company} logo`}
                            width={44}
                            height={44}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-charcoal-deep dark:text-on-surface">
                          {role}
                        </h3>
                        <p className="font-label-md text-label-md text-primary mt-0.5">
                          {company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="font-label-md text-[11px] text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full">
                        {period}
                      </span>
                      <span className="font-label-md text-[11px] text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        {location}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-secondary dark:text-on-surface-variant mb-4">
                    {description}
                  </p>

                  <ul className="space-y-2">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="font-body-md text-[14px] text-on-surface-variant">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
