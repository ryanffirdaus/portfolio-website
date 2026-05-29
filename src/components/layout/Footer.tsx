import Link from "next/link";
import { personal } from "@/data/personal";

const socialLinks = [
  { href: personal.social.linkedin,   label: "LinkedIn"     },
  { href: personal.social.github,     label: "GitHub"       },
  { href: personal.social.sourceCode, label: "Source Code"  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/30 mt-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-center py-base px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-[80px] gap-4 py-6">
        {/* Brand */}
        <div className="font-headline-lg text-headline-lg font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
          RYAN
        </div>

        {/* Copyright */}
        <p className="font-label-md text-label-md text-on-secondary-container text-center md:text-left">
          {personal.copyright}
        </p>

        {/* Social links */}
        <ul className="flex items-center space-x-6">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-label-md text-label-md text-on-secondary-container hover:text-primary transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
