import type { KeyResult } from "@/types";

interface Props {
  results: KeyResult[];
}

export default function KeyResults({ results }: Props) {
  return (
    <section aria-label="Key results" className="rounded-card bg-panel p-6 md:p-10">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
        {results.map(({ prefix, target, suffix, label }) => (
          <div key={label}>
            <dt className="sr-only">{label}</dt>
            <dd className="text-heading font-bold text-white md:text-heading-lg">
              {prefix}
              {target}
              {suffix}
            </dd>
            <dd className="mt-2 text-body-sm text-ash">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
