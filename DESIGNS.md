# Design System

Dark-only. One accent. Depth comes from stacked dark surfaces, not shadows or borders.
Tokens live in `src/app/globals.css` (`@theme`); Tailwind's default palette is reset, so only these colors exist.

## Color

| Token | Value | Use |
|---|---|---|
| `void` | `#0e1012` | Page, nav, footer |
| `panel` | `#15171b` | Cards, media frames |
| `raised` | `#1c1f24` | Nested panels, neutral badges |
| `overlay` | `#23262d` | Menus, hover on panels |
| `steel` / `pewter` | `#333943` / `#444d5a` | Strokes, tool-button borders |
| `muted` | `#566171` | Index numbers, decorative labels |
| `ash` | `#8b96aa` | Captions, eyebrows, metric labels |
| `fog` | `#a0aaba` | Body copy |
| `silver` | `#bbc2ce` | Outlined pill border |
| `white` | `#ffffff` | Headings and interactive labels only |
| `signal` | `#007afc` | Primary CTA, active tab, text links. Nothing decorative. |
| `signal-deep` | `#0062ca` | Info badges, primary hover |
| `map-green` | `#228a56` | "Live" badges |

## Type

DM Sans (Cera Pro substitute) at 400 / 500 / 700, with `lnum` on.

| Utility | Size | Notes |
|---|---|---|
| `text-display` | 68px | 700, −1.36px. Hero and project titles (desktop) |
| `text-heading-lg` | 44px | 700, −0.88px. Section titles (desktop), display on mobile |
| `text-heading` | 32px | 700 |
| `text-heading-sm` | 24px | 700 |
| `text-subheading` | 18px | Lead paragraphs |
| `text-body` / `text-body-sm` | 16 / 14px | |
| `text-caption` | 10px | Badges, all caps |

Eyebrows: 12px, 500, uppercase, `tracking-[0.08em]`, `ash` (see `eyebrow` in `components/ui/styles.ts`).

## Shape

| | Radius |
|---|---|
| Buttons, filter tabs | `rounded-full` |
| Cards, media | `rounded-card` (24px) |
| Chips, nested cards | `rounded-chip` (12px) |
| Inputs, thumbnails, tool buttons | `rounded-input` (6px) |
| Badges | `rounded-badge` (4px) |

Nothing between 6px and 12px on buttons.

## Rules

- Sections are separated by `py-24` spacing only. No divider lines.
- Media frames get `.vignette`, an inset `#0e1012` shadow that fades the bottom edge into the page.
- The only other shadow is `shadow-fade` on the nav once you scroll.
- No second accent hue, no gradients, no glow, no hover lift, no scroll-reveal.
- Icons come from `components/ui/Icon.tsx`: 1.75px mono-stroke, `currentColor`.
- Stack logos are fetched pre-tinted to `fog` from simpleicons.
