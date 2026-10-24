const paths = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-left": "M19 12H5M11 6l-6 6 6 6",
  "arrow-up": "M12 19V5M6 11l6-6 6 6",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  close: "M6 6l12 12M18 6 6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "M5 12.5l4.5 4.5L19 7.5",
  expand: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
  server: "M4 4.5h16v6H4zM4 13.5h16v6H4zM8 7.5h.01M8 16.5h.01M12 7.5h4M12 16.5h4",
  chart: "M4 19.5h16M7 16v-4M12 16V6.5M17 16V10",
  phone: "M7.5 3h9v18h-9zM11 17.5h2",
  card: "M3 6h18v12H3zM3 10h18M7 14.5h4",
  code: "M9 7.5 4.5 12 9 16.5M15 7.5l4.5 4.5-4.5 4.5",
  layers: "M12 3.5 21 8l-9 4.5L3 8zM3 12.5l9 4.5 9-4.5M3 16.5 12 21l9-4.5",
  pulse: "M3 12h4l2.5-6 5 12 2.5-6h4",
} as const;

export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 16, className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d={paths[name]} />
    </svg>
  );
}
