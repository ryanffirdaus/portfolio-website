interface SectionHeadingProps {
  children: React.ReactNode;
  /** Show the blue underline accent bar */
  accent?: boolean;
  className?: string;
}

export default function SectionHeading({ children, accent = false, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface relative inline-block ${className}`}
    >
      {children}
      {accent && (
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full" />
      )}
    </h2>
  );
}
