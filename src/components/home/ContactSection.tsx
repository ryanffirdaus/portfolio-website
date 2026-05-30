import Reveal from "@/components/ui/Reveal";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import Link from "next/link";

const contactOptions = socialLinks.map(({ href, label, icon }) => {
  const meta: Record<string, { handle: string; description: string }> = {
    GitHub: {
      handle: "ryanffirdaus",
      description: "Check out my projects and open source work",
    },
    LinkedIn: {
      handle: "ryanffirdaus",
      description: "Connect with me professionally",
    },
    Instagram: {
      handle: "ryanffirdaus",
      description: "Follow my journey and updates",
    },
    Email: {
      handle: "ryanfaatih.firdaus@gmail.com",
      description: "Send me a message directly",
    },
  };
  return { href, label, icon, ...meta[label] };
});

export default function ContactSection() {
  const { contact } = personal;

  return (
    <section className="py-section-gap scroll-mt-24" id="contact">
      <Reveal className="space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase text-[11px]">
            Contact
          </span>
          <h2 className="font-headline-lg text-headline-lg text-charcoal-deep dark:text-on-surface">
            {contact.heading.replace(contact.headingAccent, "")}{" "}
            <span className="text-primary">{contact.headingAccent}</span>
          </h2>
          <p className="font-body-md text-body-md text-secondary dark:text-on-surface-variant max-w-xl">
            {contact.body}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map(({ href, label, icon, handle, description }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              className="group flex flex-col gap-4 p-6 bg-surface-card border border-outline-variant/30 rounded-lg hover:border-primary/60 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  {icon}
                </span>
                <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                  open_in_new
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-label-md text-label-md text-on-surface">
                  {label}
                </p>
                <p className="font-label-md text-[11px] text-primary truncate">
                  {handle}
                </p>
                <p className="font-body-md text-[13px] text-secondary dark:text-on-surface-variant leading-snug">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
