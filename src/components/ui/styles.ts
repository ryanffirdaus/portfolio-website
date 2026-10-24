// Shared class strings for the few primitives that repeat across the site.

export const container = "mx-auto w-full max-w-page px-6 md:px-8";

// Mono label, chamfered body; the arrow slides on hover.
const base =
  "chamfer chamfer-sm group/btn inline-flex items-center gap-3 px-6 py-4 font-mono text-[11px] leading-none font-medium uppercase tracking-[0.04em] transition-colors duration-300 [&>svg]:transition-transform [&>svg]:duration-500 [&>svg]:ease-out-expo hover:[&>svg]:translate-x-1";

export const button = {
  /** Neon block, ink text. Works on both grounds. */
  primary: `${base} bg-neon text-black hover:bg-white`,
  /** Tinted block on ink. */
  outline: `${base} bg-white/8 text-white hover:bg-white/16`,
  /** Tinted block on bone. */
  outlineInk: `${base} bg-ink/6 text-ink hover:bg-ink/12`,
  ghost:
    "inline-flex items-center gap-1.5 text-[15px] font-medium text-neon transition-colors hover:text-white",
  tool: "inline-flex items-center justify-center rounded-input border border-pewter p-2.5 text-white transition-colors hover:border-silver",
};

/** Micro-label: mono, 11px, uppercase, with a leading slash. */
export const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-ash before:mr-1.5 before:text-neon-deep before:content-['//']";
