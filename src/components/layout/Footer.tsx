import { container } from "@/components/ui/styles";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="bg-void pt-24 pb-10">
      <div
        className={`${container} flex flex-col gap-6 text-body-sm text-fog md:flex-row md:items-center md:justify-between`}
      >
        <p>{personal.copyright}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
