import Link from "next/link";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-[80px] gap-4 py-6">
        {/* Copyright */}
        <p className="font-label-md text-label-md text-on-surface-variant text-center">
          {personal.copyright}
        </p>

        {/* Social icon links */}
        <ul className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <Link
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
