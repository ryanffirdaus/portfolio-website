"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import { button } from "@/components/ui/styles";
import type { DemoCredential } from "@/types";

interface Props {
  liveUrl: string;
  credentials?: DemoCredential[];
}

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
      className="flex w-full items-center justify-between gap-3 rounded-input border border-steel bg-void px-3 py-2 text-left transition-colors hover:border-pewter"
    >
      <span className="min-w-0">
        <span className="block text-caption font-medium uppercase text-muted">
          {label}
        </span>
        <span className="block truncate font-mono text-body-sm text-white">
          {value}
        </span>
      </span>
      <Icon
        name={copied ? "check" : "copy"}
        className={copied ? "text-map-green" : "text-ash"}
      />
    </button>
  );
}

export default function LiveDemoSection({ liveUrl, credentials }: Props) {
  return (
    <section className="rounded-card bg-panel p-6 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Badge tone="live">Live demo</Badge>
          <h2 className="mt-4 text-heading-sm font-bold text-white">
            Try it yourself
          </h2>
          <p className="mt-3 text-body text-fog">
            The deployment runs on seeded demo data. Each account below signs
            in as a different role, from the admin dashboard to the kitchen
            display.
          </p>
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${button.primary} shrink-0 self-start md:self-auto`}
        >
          Open the demo <Icon name="arrow-up-right" />
        </a>
      </div>

      {credentials && credentials.length > 0 && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map(({ role, email, password }) => (
            <div key={role} className="space-y-2 rounded-chip bg-raised p-4">
              <p className="pb-1 text-body-sm font-medium text-white">{role}</p>
              <CopyField label="Email" value={email} />
              <CopyField label="Password" value={password} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
