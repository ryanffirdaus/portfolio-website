import Reveal from "@/components/ui/Reveal";
import { education } from "@/data/personal";

export default function EducationSection() {
  return (
    <section className="py-section-gap scroll-mt-24" id="education">
      <Reveal className="space-y-3 mb-12">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
          Background
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
          Education
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map(
          (
            { institution, degree, field, period, location, description },
            idx,
          ) => (
            <Reveal
              key={idx}
              className="bg-surface-card border border-outline-variant/30 rounded-lg p-6 hover:border-primary/40 transition-colors"
              delay={idx === 0 ? "delay-100" : "delay-200"}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  school
                </span>
              </div>

              <div className="space-y-1 mb-3">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-charcoal-deep dark:text-on-surface leading-tight">
                  {degree}
                </h3>
                <p className="font-label-md text-label-md text-primary">
                  {field}
                </p>
              </div>

              <p className="font-label-md text-label-md text-on-surface-variant mb-1">
                {institution}
              </p>

              <div className="flex items-center gap-3 mb-4">
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

              {description && (
                <p className="font-body-md text-[14px] text-secondary dark:text-on-surface-variant leading-relaxed">
                  {description}
                </p>
              )}
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
