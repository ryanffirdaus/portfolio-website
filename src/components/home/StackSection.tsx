import Section from "@/components/motion/Section";
import { Reveal } from "@/components/motion/Reveal";
import { container, eyebrow } from "@/components/ui/styles";
import { skills } from "@/data/skills";

const categories = [...new Set(skills.map((s) => s.category))];

// Marks are fetched pre-tinted to Newsprint Gray so the grid stays calm.
const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/516254`;

export default function StackSection() {
  return (
    <Section id="stack" theme="light" curve className="pt-[14vw] pb-28 md:pt-[9vw]">
      <div className={`${container} grid gap-12 md:grid-cols-12 md:gap-6`}>
        <Reveal className="md:col-span-4">
          <p className={`${eyebrow} text-graphite`}>Stack</p>
          <h2 className="mt-4 text-[12vw] leading-[0.95] font-semibold tracking-[-0.05em] text-ink md:text-[4.4vw] xl:text-[62px]">
            What I build{" "}
            <em className="serif-soft font-serif font-light text-neon-deep italic">with</em>
          </h2>
          <p className="mt-5 max-w-xs text-body text-graphite">
            The tools I use in production, sorted by the part of the system they run.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:col-span-8">
          {categories.map((category) => (
            <div key={category} className="chamfer chamfer-frame bg-line [--frame-cut:14px]">
              <div className="chamfer h-full bg-paper p-5">
                <p className="font-mono text-[11px] tracking-[0.04em] text-graphite uppercase">{category}</p>
                <ul className="mt-4 space-y-2.5">
                  {skills
                    .filter((s) => s.category === category)
                    .map(({ name, icon }) => (
                      <li key={name} className="flex items-center gap-2.5 text-body text-ink">
                        {icon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={iconUrl(icon)} alt="" width={16} height={16} />
                        ) : (
                          <span aria-hidden="true" className="chamfer h-4 w-4 bg-line [--cut:4px]" />
                        )}
                        {name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
