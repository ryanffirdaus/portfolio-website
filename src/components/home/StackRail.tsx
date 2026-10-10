import { container, eyebrow } from "@/components/ui/styles";
import { skills } from "@/data/skills";

// Marks are fetched pre-tinted to Fog so the rail stays monochrome.
const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/a0aaba`;

export default function StackRail() {
  return (
    <section id="stack" className={`${container} scroll-mt-24 py-24`}>
      <p className={`${eyebrow} text-center`}>What I build with</p>
      <ul className="mx-auto mt-8 flex max-w-240 flex-wrap justify-center gap-x-10 gap-y-6">
        {skills.map(({ name, icon }) => (
          <li
            key={name}
            className="flex items-center gap-2.5 text-[15px] font-medium text-fog"
          >
            {icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={iconUrl(icon)} alt="" width={20} height={20} />
            )}
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
