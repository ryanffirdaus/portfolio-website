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
      <h2 className="text-[10vw] leading-[0.95] font-semibold tracking-[-0.05em] text-white md:text-[56px]">
        {children}
      </h2>
    </div>
  );
}
