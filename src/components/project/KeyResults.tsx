import type { KeyResult } from "@/types";

interface Props {
  results: KeyResult[];
}

export default function KeyResults({ results }: Props) {
  return (
    <section aria-label="Key results" className="border-y border-steel py-10 md:py-14">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
        {results.map(({ prefix, target, suffix, label }) => (
          <div key={label} className="flex flex-col-reverse">
            <dt className="mt-3 text-body-sm font-[350] text-silver">{label}</dt>
            <dd className="font-serif text-[64px] leading-[0.9] tracking-[-0.04em] text-ash md:text-[88px]">
              {prefix}
              {target}
              {suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
