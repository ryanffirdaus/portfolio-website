interface BadgeProps {
  children: React.ReactNode;
  /** "live" = neon status, "info" = neon hairline, "neutral" = raised surface */
  tone?: "live" | "info" | "neutral";
}

const tones = {
  live: "bg-neon text-ink",
  info: "border border-neon/50 text-neon",
  neutral: "bg-raised text-fog",
};

export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-badge px-2 py-1 text-caption font-bold uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
