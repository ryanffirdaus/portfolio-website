import { eyebrow as eyebrowClass } from "@/components/ui/styles";

interface SectionHeadingProps {
  eyebrow: string;
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="text-heading font-bold text-white md:text-heading-lg">
        {children}
      </h2>
    </div>
  );
}
