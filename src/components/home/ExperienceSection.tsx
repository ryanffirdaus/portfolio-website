"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Section from "@/components/motion/Section";
import { Reveal } from "@/components/motion/Reveal";
import { container, eyebrow } from "@/components/ui/styles";
import { ScrollTrigger } from "@/lib/gsap";
import { education, experience } from "@/data/personal";

export default function ExperienceSection() {
  const [open, setOpen] = useState(0);

  // The panel height changes the page below it, so re-measure the scroll
  // animations after the transition ends.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 750);
    return () => clearTimeout(id);
  }, [open]);

  return (
    <Section id="experience" theme="light" curve className="pt-[14vw] pb-32 md:pt-[9vw]">
      <div className={`${container} grid gap-12 md:grid-cols-12 md:gap-6`}>
        <Reveal className="md:col-span-4">
          <p className={`${eyebrow} text-graphite`}>Experience</p>
          <h2 className="mt-5 text-[13vw] leading-[0.95] font-semibold tracking-[-0.04em] text-ink md:text-[5.2vw] xl:text-[72px]">
            Where I have worked
          </h2>
        </Reveal>

        <Reveal stagger as="ul" className="border-b border-line md:col-span-8">
          {experience.map((job, idx) => {
            const isOpen = idx === open;
            return (
              <li key={job.company} className="border-t border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`job-${idx}`}
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-7 text-left md:grid-cols-[9rem_1fr_auto]"
                  >
                    <span className={`${eyebrow} col-start-1 row-start-1 text-graphite`}>{job.period}</span>
                    <span className="col-span-2 row-start-2 text-[8vw] leading-none font-semibold tracking-[-0.035em] text-ink transition-colors group-hover:text-graphite md:col-span-1 md:col-start-2 md:row-start-1 md:text-[40px]">
                      {job.company}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`col-start-2 row-start-1 justify-self-end font-mono text-subheading text-ink transition-transform duration-500 ease-out-expo md:col-start-3 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={`job-${idx}`}
                  className={`grid transition-[grid-template-rows] duration-700 ease-out-expo ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 md:grid-cols-[9rem_1fr]">
                      <div>
                        {job.logo && (
                          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-chip border border-line bg-white">
                            <Image
                              src={job.logo}
                              alt={`${job.company} logo`}
                              width={48}
                              height={48}
                              className="h-full w-full object-contain"
                            />
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-subheading font-semibold text-ink">{job.role}</p>
                        <p className="mt-1 text-body-sm text-graphite">{job.location}</p>
                        <p className="mt-5 max-w-2xl text-body text-graphite">{job.description}</p>
                        <ul className="mt-6 space-y-3">
                          {job.highlights.map((h) => (
                            <li key={h} className="flex gap-4 text-body text-ink">
                              <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 bg-neon-deep" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>

        <Reveal className="md:col-span-8 md:col-start-5">
          <p className={`${eyebrow} mt-12 text-graphite`}>Education</p>
          <ul className="mt-4 border-b border-line">
            {education.map(({ institution, degree, period, location, description }) => (
              <li
                key={institution}
                className="grid gap-2 border-t border-line py-6 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-6"
              >
                <span className={`${eyebrow} text-graphite`}>{period}</span>
                <span>
                  <span className="block text-[24px] leading-tight font-semibold tracking-[-0.02em] text-ink">
                    {degree}
                  </span>
                  <span className="mt-1 block text-body-sm text-graphite">{institution}</span>
                </span>
                <span className="text-body-sm text-graphite md:text-right">
                  {location}
                  {description && (
                    <>
                      <br />
                      {description}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
