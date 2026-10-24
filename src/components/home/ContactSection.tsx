import Icon from "@/components/ui/Icon";
import Section from "@/components/motion/Section";
import { Reveal } from "@/components/motion/Reveal";
import { button, container, eyebrow } from "@/components/ui/styles";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

export default function ContactSection() {
  const { contact } = personal;
  const profiles = socialLinks.filter(({ label }) => label !== "Email");

  return (
    <Section id="contact" theme="light" className="pt-24 pb-40">
      <div className={`${container} grid gap-10 md:grid-cols-12 md:gap-6`}>
        <Reveal className="md:col-span-8">
          <p className={`${eyebrow} text-graphite`}>Contact</p>
          <h2 className="mt-4 text-[12vw] leading-[0.95] font-semibold tracking-[-0.05em] text-ink md:text-[6vw] xl:text-[88px]">
            Have something that needs{" "}
            <em className="serif-soft font-serif font-light text-neon-deep italic">building?</em>
          </h2>
        </Reveal>

        <Reveal className="md:col-span-4 md:self-end">
          <p className="text-body text-graphite md:text-subheading">{contact.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={personal.social.email} className={button.primary}>
              Send an email <Icon name="arrow-right" size={14} />
            </a>
            {profiles.map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={button.outlineInk}>
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
