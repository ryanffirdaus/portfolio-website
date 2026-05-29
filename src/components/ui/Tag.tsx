interface TagProps {
  label: string;
  /** "subtle" = surface-container bg (default), "outline" = outlined pill */
  variant?: "subtle" | "outline";
  className?: string;
}

export default function Tag({ label, variant = "subtle", className = "" }: TagProps) {
  if (variant === "outline") {
    return (
      <span
        className={`bg-surface-container-low text-on-surface px-3 py-1 rounded font-label-md text-label-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default ${className}`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`px-2 py-1 bg-surface-container text-secondary font-label-md text-[12px] rounded ${className}`}
    >
      {label}
    </span>
  );
}
