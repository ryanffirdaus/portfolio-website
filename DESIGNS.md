# Design System — Ryan Faatih Firdaus Portfolio

## Overview

This portfolio uses an **Emerald Forest** (light) / **Obsidian Forest** (dark) design system — a clean, minimal aesthetic inspired by natural depth and technical precision. Dark mode is the default.

---

## Color Palette

### Light Mode — Emerald Forest

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#167a3e` | CTAs, links, active states, accents |
| `--color-background` | `#f2f9f4` | Page background |
| `--color-surface` | `#f2f9f4` | Base surface |
| `--color-surface-card` | `#ffffff` | Cards and elevated surfaces |
| `--color-surface-container-low` | `#edf6ef` | Alternating section backgrounds |
| `--color-on-surface` | `#0d1a10` | Primary text |
| `--color-on-surface-variant` | `#3d5240` | Secondary/body text |
| `--color-outline` | `#6a8a6e` | Borders, dividers |
| `--color-outline-variant` | `#b8d4bc` | Subtle borders |
| `--color-charcoal-deep` | `#0d1a10` | Headings |

### Dark Mode — Obsidian Forest

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#2ecc71` | CTAs, links, active states, accents |
| `--color-background` | `#0a0c0a` | Page background |
| `--color-surface` | `#0f1410` | Base surface |
| `--color-surface-card` | `#161d17` | Cards and elevated surfaces |
| `--color-surface-container-low` | `#131913` | Alternating section backgrounds |
| `--color-on-surface` | `#f8faf9` | Primary text |
| `--color-on-surface-variant` | `#a8bfaa` | Secondary/body text |
| `--color-outline` | `#4a6b4e` | Borders, dividers |
| `--color-outline-variant` | `#333b34` | Subtle borders |

---

## Typography

| Scale | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `display` | Inter | 48px | 700 | 1.1 | −0.02em |
| `headline-lg` | Inter | 32px | 600 | 1.2 | — |
| `headline-lg-mobile` | Inter | 24px | 600 | 1.2 | — |
| `body-lg` | Inter | 18px | 400 | 1.6 | — |
| `body-md` | Inter | 16px | 400 | 1.5 | — |
| `label-md` | JetBrains Mono | 14px | 500 | 1.4 | 0.05em |

Two fonts are loaded via `next/font`:
- **Inter** — all prose, headings, and UI text
- **JetBrains Mono** — labels, category tags, metadata (reinforces Software Engineer identity)

---

## Spacing

| Token | Value | Usage |
|---|---|---|
| `--spacing-base` | `8px` | Base unit |
| `--spacing-section-gap` | `80px` | Vertical section padding |
| `--spacing-gutter` | `24px` | Desktop horizontal padding |
| `--spacing-margin-mobile` | `16px` | Mobile horizontal padding |
| `--spacing-container-max` | `1120px` | Max content width |

---

## Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | `0.125rem` |
| `--radius` | `0.25rem` — buttons, inputs |
| `--radius-md` | `0.375rem` |
| `--radius-lg` | `0.5rem` — project cards |
| `--radius-xl` | `0.75rem` |
| `--radius-full` | `9999px` — pills, badges |

---

## Elevation & Depth

- **Cards:** `1px` border in `outline-variant/20`, soft diffused shadow on hover only
- **Navbar:** backdrop blur with transparency (glassmorphism)
- **Section separation:** alternating `background` ↔ `surface-container-low` bands; no heavy dividers
- **Hero:** dual radial-gradient ambient glow using `primary` color at 5–8% opacity

---

## Animations

| Class | Behavior |
|---|---|
| `.reveal` | Fade + slide up on scroll into viewport (`IntersectionObserver`, threshold 0) |
| `.delay-100/200/300/400` | Staggered animation delays |
| `.animate-fade-in-up` | Hero content entrance animation |
| `.animate-shimmer` | Loading shimmer |
| `.project-image` | Grayscale by default, color on card hover + scale 1.05 |
| `.hero-ambient` | Radial glow background overlay |

---

## Dark Mode

- Default: `dark` class on `<html>` (set at build time)
- Anti-flash: inline `<script>` in `<head>` removes `dark` class if `localStorage.theme === 'light'`
- Toggle: `ThemeProvider` context (`src/app/providers/ThemeProvider.tsx`) syncs DOM + `localStorage`
- Tailwind variant: `@custom-variant dark (&:where(.dark, .dark *))`

---

## Component Patterns

### Buttons
- **Primary:** filled `bg-primary text-on-primary`, hover scale 1.02
- **Secondary:** `border border-primary text-primary` ghost style
- **Icon buttons:** `w-9 h-9 rounded-lg border border-outline-variant/50 hover:border-primary hover:text-primary`

### Cards
- `bg-surface-card border border-outline-variant/20 rounded-lg`
- Hover: `border-primary/40`, lift (`-translate-y-1`), soft shadow

### Tags / Chips
- JetBrains Mono `label-md`, `bg-surface-container`, `rounded-full`
- No border; secondary to main card content

### Section Headings
- Eyebrow: `text-primary uppercase tracking-widest text-[11px]` JetBrains Mono
- Title: `headline-lg` Inter
- Optional subtitle: `body-md text-on-surface-variant`

### Navbar
- Sticky top, backdrop blur
- 6 links: Home, Projects, Skills, Experience, Education, Contact
- Dark mode toggle button (right side)
- Mobile: hamburger menu

### Icons
- **Material Symbols Outlined** loaded via Google Fonts `<link>` in layout head
- **Brand logos:** Simple Icons CDN (`https://cdn.simpleicons.org/{name}`) for skill chips

colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434656'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#474e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f6674'
  on-tertiary-container: '#dee4f5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dce2f3'
  tertiary-fixed-dim: '#c0c7d6'
  on-tertiary-fixed: '#151c27'
  on-tertiary-fixed-variant: '#404754'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-card: '#FFFFFF'
  charcoal-deep: '#111827'
  electric-blue-muted: '#EBF2FF'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
---

## Brand & Style

The design system is engineered to reflect technical precision, efficiency, and high-performance. It adopts a **Minimalist** and **Corporate Modern** aesthetic, prioritizing clarity of information over decorative elements. The visual language is intentional, using generous whitespace to reduce cognitive load and focus the viewer's attention on the engineer's work and technical expertise.

The target audience includes hiring managers, technical recruiters, and potential collaborators who value structured thinking and attention to detail. The UI should feel fast, responsive, and "lightweight," mimicking the feel of a well-optimized codebase.

## Colors

The palette is predominantly monochromatic to emphasize a professional, "IDE-inspired" sobriety. 

- **Primary (Electric Blue):** Used exclusively for call-to-action (CTA) elements, links, and active states. It provides a singular, high-contrast focal point against the neutral background.
- **Secondary (Deep Charcoal):** Used for primary headings and main text to ensure maximum legibility and a sense of authority.
- **Neutral/Background:** A range of whites and light grays creates a layered effect without the harshness of pure black-on-white. 

The color mode is set to **light** by default, using subtle gray borders and surfaces to define boundaries rather than heavy shadows.

## Typography

This design system utilizes **Inter** for all primary text due to its exceptional legibility on screens and systematic, neutral character. To reinforce the "Software Engineer" identity, **JetBrains Mono** is introduced for labels, tags, and small metadata, providing a subtle nod to coding environments.

Hierarchy is established through weight and scale rather than color. Headlines use a tighter letter-spacing to appear more cohesive, while body text uses a generous line height (1.5 - 1.6) to ensure effortless readability of technical descriptions.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a controlled, professional reading experience. 

- **Desktop:** A 12-column grid with a 1120px max-width container. Margins are centered.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column fluid grid with 16px side margins.

The spacing rhythm follows an 8px base unit. Section gaps are intentionally large (80px+) to allow the content to "breathe," signaling confidence and clarity. Use horizontal rules sparingly; instead, let negative space define the transition between content blocks.

## Elevation & Depth

To maintain a minimalist profile, the design system avoids heavy shadows. Instead, it uses **Low-contrast outlines** and **Tonal layers**.

1.  **Cards:** Use a 1px border in a light gray (`#E5E7EB`) and a very soft, diffused ambient shadow (0px 4px 20px, 4% opacity) that only appears on hover to indicate interactivity.
2.  **Navigation:** Uses a backdrop blur (Glassmorphism) with high transparency to stay present without obstructing the flow of the page.
3.  **Surfaces:** The main background is light gray (`#F9FAFB`), while interactive cards and containers are pure white (`#FFFFFF`) to create a "lifted" effect.

## Shapes

The shape language is **Soft**. Corners are rounded just enough to feel modern and approachable without losing the professional, "square" rigor of a technical product. 

- Standard components (Inputs, Buttons) use a 4px (0.25rem) radius.
- Larger elements like project cards use an 8px (0.5rem) radius.
- Avatars and status indicators may use a pill-shape for distinctiveness.

## Components

### Buttons
Primary buttons use the Electric Blue background with white text. They feature a slight scale-up transition (1.02x) on hover. Secondary buttons use a subtle gray outline or are ghost-styled with the label font.

### Project Cards
Cards are the primary display unit. They feature a 1px border and a subtle shadow on hover. Images within cards should have a consistent aspect ratio (e.g., 16:9) and a slight grayscale filter that saturates on hover.

### Chips/Tags
Used for technical stacks (e.g., "React", "TypeScript"). Use the `label-md` JetBrains Mono font. They should have a light gray background and no border to keep them secondary to the main card content.

### Form Elements
Inputs are minimalist: a 1px bottom border that transforms into a 2px Electric Blue border on focus. Labels should be small and positioned above the field using the `label-md` style.

### Navigation
A sticky top bar with a blur effect. Links are `body-md` with a discreet dot indicator appearing below the active page link.

---
name: Engineered Precision
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c3c5d9'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#004ced'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#c7c6c6'
  on-tertiary: '#303031'
  tertiary-container: '#666666'
  on-tertiary-container: '#e6e4e4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system is anchored in the concept of "Engineered Precision," catering to a high-performance technical audience. It evokes the feeling of a sophisticated IDE or a high-end aerospace dashboard—intentional, efficient, and robust.

The aesthetic blends **Minimalism** with **Glassmorphism**. It utilizes heavy whitespace to allow complex data to breathe, while employing translucent layers and subtle background blurs to establish a sense of modern depth. Every element is designed to feel like a modular component of a larger machine, prioritizing functional clarity and structural integrity over decorative flair. The emotional response should be one of absolute reliability and professional mastery.

## Colors
The palette is built on a foundation of **Deep Charcoal (#111317)** to provide a low-strain, high-contrast environment for long-form technical reading.

- **Primary (Technical Blue):** Used for core actions, primary buttons, and brand reinforcement.
- **Secondary (Vibrant Cyan):** Reserved for metrics, progress indicators, and "active" status states. It provides a high-energy contrast against the charcoal base.
- **Surface Tiers:** Use incremental shifts in charcoal luminosity to define hierarchy. Background is #111317; elevated containers should utilize #1c1f26.
- **Accents:** Use low-opacity tints of the Primary blue for hover states and subtle highlights.

## Typography
The typography strategy prioritizes readability and technical flavor. 

**Geist** is used for headlines to provide a sharp, geometric, and modern feel. **Inter** handles the bulk of body text due to its exceptional legibility at small sizes. **JetBrains Mono** (or Geist Mono) is introduced for labels and technical data to reinforce the "engineered" aesthetic.

Hierarchy is established through weight and tracking rather than just size. Captions and metadata should always use the monospaced label style to differentiate data from narrative content.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing is strictly based on an **8px base unit** to ensure mathematical consistency across all components.

Layouts should favor high-density information architecture. Use 24px gutters to maintain clear separation between technical modules. Desktop margins are generous (64px) to center the content and provide a premium "gallery" feel for portfolio pieces. Alignment should be rigid; avoid staggered or masonry layouts in favor of structured rows and columns that reflect a systematic approach.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Inner Strokes** rather than traditional drop shadows. 

1. **Base:** The main background (#111317).
2. **Surface:** Cards and sections use a slightly lighter charcoal (#1c1f26) with a subtle 1px border (#2d3139).
3. **Overlay:** Modals and tooltips use a semi-transparent blur (Backdrop Filter: 12px) to maintain context.

To emphasize "High Performance," use a very soft **Ambient Glow** (0 0 20px) using the Primary Blue at 10% opacity for active elements or featured metrics. This creates a subtle "lit from within" effect reminiscent of high-end hardware.

## Shapes
The shape language is **Soft (0.25rem / 4px)**. 

Sharp corners feel too aggressive, while fully rounded "pill" shapes feel too consumer-focused. A subtle 4px radius on buttons and cards provides a professional, refined finish that maintains the structural, grid-based feel of the UI. Larger containers like image carousels or cards can scale up to 8px (rounded-lg) to soften the overall layout slightly, but primary UI controls should remain crisp and compact.

## Components

- **Buttons:** Primary buttons are solid Technical Blue with white text. Secondary buttons are "Ghost" style with a 1px border and Technical Blue text. Metrics buttons use the Vibrant Cyan for background with black text for maximum punch.
- **Input Fields:** Use a dark-filled background (#1c1f26) with a subtle bottom-border focus state in Vibrant Cyan. Labels must use the Monospaced/JetBrains Mono style.
- **Cards:** Cards should have no box-shadow. Use a 1px solid border (#2d3139). On hover, the border color should transition to the Primary Technical Blue.
- **Status Indicators:** Use small, high-chroma dots (Vibrant Cyan for active, Emerald for success, Crimson for error).
- **Data Visuals:** Charts and graphs should utilize thin line weights (1px to 2px) and the secondary Cyan color for the primary data stream.
- **Chips/Tags:** Use low-contrast grey backgrounds with monospaced text to denote technical stack or categories without distracting from primary content.