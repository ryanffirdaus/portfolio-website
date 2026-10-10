"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, eyebrow } from "@/components/ui/styles";
import { education, experience } from "@/data/personal";

export default function ExperienceSection() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className={`${container} scroll-mt-24 py-24`}>
      <SectionHeading eyebrow="Experience">Where I&apos;ve worked</SectionHeading>

      <div
        role="tablist"
        aria-label="Employers"
        className="hide-scrollbar mt-10 flex gap-2 overflow-x-auto"
      >
        {experience.map(({ company }, idx) => (
          <button
            key={company}
            role="tab"
            id={`job-tab-${idx}`}
            aria-selected={idx === active}
            aria-controls="job-panel"
            onClick={() => setActive(idx)}
            className={`shrink-0 rounded-full border px-5 py-2 text-[15px] font-medium transition-colors ${
              idx === active
                ? "border-signal bg-signal text-white"
                : "border-steel text-fog hover:border-pewter hover:text-white"
            }`}
          >
            {company}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="job-panel"
        aria-labelledby={`job-tab-${active}`}
        className="mt-6 grid gap-10 rounded-card bg-panel p-6 md:grid-cols-[45fr_55fr] md:gap-16 md:p-10"
      >
        <div>
          {job.logo && (
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-chip bg-white">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <h3 className="mt-6 text-heading-sm font-bold text-white">
            {job.role}
          </h3>
          <p className="mt-1 text-body text-fog">{job.company}</p>
          <p className="mt-4 text-body-sm text-ash">
            {job.period} · {job.location}
          </p>
          <p className="mt-6 text-body text-fog">{job.description}</p>
        </div>

        <ul className="space-y-4">
          {job.highlights.map((h) => (
            <li key={h} className="flex gap-4 text-body text-fog">
              <span
                aria-hidden="true"
                className="mt-2.75 h-px w-3 shrink-0 bg-pewter"
              />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <p className={eyebrow}>Education</p>
        <ul className="mt-6 space-y-3">
          {education.map(
            ({ institution, degree, period, location, description }) => (
              <li
                key={institution}
                className="flex flex-col gap-2 rounded-card bg-panel p-6 md:flex-row md:items-center md:justify-between md:px-10"
              >
                <div>
                  <p className="text-subheading font-medium text-white">
                    {degree}
                  </p>
                  <p className="mt-1 text-body text-fog">{institution}</p>
                </div>
                <p className="text-body-sm text-ash md:text-right">
                  {period} · {location}
                  {description && (
                    <>
                      <br className="hidden md:block" />
                      <span className="md:hidden"> · </span>
                      {description}
                    </>
                  )}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
