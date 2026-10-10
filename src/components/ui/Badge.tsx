interface BadgeProps {
  children: React.ReactNode;
  /** "live" = map-green status, "info" = deep signal, "neutral" = raised surface */
  tone?: "live" | "info" | "neutral";
}

const tones = {
  live: "bg-map-green text-white",
  info: "bg-signal-deep text-white",
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
