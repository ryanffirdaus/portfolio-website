"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { DemoCredential } from "@/types";

interface Props {
  liveUrl: string;
  credentials?: DemoCredential[];
}

const roleIcon: Record<string, string> = {
  admin: "admin_panel_settings",
  waiter: "room_service",
  kitchen: "cooking",
  chef: "cooking",
  cashier: "point_of_sale",
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="group/field flex w-full items-center justify-between gap-3 rounded-lg border border-outline-variant/30 bg-surface px-3 py-2 text-left transition-colors hover:border-primary/50"
    >
      <span className="min-w-0">
        <span className="block font-label-md text-[10px] uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
        <span className="block truncate font-mono text-[13px] text-on-surface">
          {value}
        </span>
      </span>
      <span
        className={`material-symbols-outlined shrink-0 text-[16px] transition-colors ${
          copied
            ? "text-primary"
            : "text-outline group-hover/field:text-primary"
        }`}
      >
        {copied ? "check" : "content_copy"}
      </span>
    </button>
  );
}

export default function LiveDemoSection({ liveUrl, credentials }: Props) {
  return (
    <section className="mb-section-gap">
      <Reveal className="mb-8">
        <SectionHeading accent>Try It Live</SectionHeading>
      </Reveal>

      <Reveal className="rounded-xl border border-outline-variant/30 bg-surface-card p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-2">
            <h3 className="font-body-lg text-body-lg font-bold text-on-surface">
              Explore the live deployment
            </h3>
            <p className="font-body-md text-body-md text-secondary dark:text-on-surface-variant">
              Servio is running in production with pre-seeded demo data. Sign in
              with any of the role accounts below — each one unlocks a different
              set of tools, from the admin dashboard to the kitchen display.
            </p>
          </div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-all hover:scale-[1.02] group"
          >
            Check the Demo
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              open_in_new
            </span>
          </a>
        </div>

        {credentials && credentials.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map(({ role, email, password }) => (
              <div
                key={role}
                className="space-y-3 rounded-xl border border-outline-variant/30 bg-surface-container-low p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      {roleIcon[role.toLowerCase()] ?? "badge"}
                    </span>
                  </span>
                  <span className="font-label-md text-label-md text-on-surface">
                    {role}
                  </span>
                </div>
                <CopyField label="Email" value={email} />
                <CopyField label="Password" value={password} />
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
