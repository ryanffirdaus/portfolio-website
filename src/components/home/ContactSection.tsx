import { button, container, eyebrow } from "@/components/ui/styles";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

export default function ContactSection() {
  const { contact } = personal;
  const profiles = socialLinks.filter(({ label }) => label !== "Email");

  return (
    <section id="contact" className={`${container} scroll-mt-24 py-24`}>
      <div className="rounded-card bg-panel px-6 py-16 text-center md:px-16 md:py-24">
        <p className={eyebrow}>Contact</p>
        <h2 className="mx-auto mt-4 max-w-200 text-heading font-bold text-white md:text-heading-lg">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-140 text-subheading text-fog">
          {contact.body}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={personal.social.email} className={button.primary}>
            {contact.email}
          </a>
          {profiles.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={button.outline}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
