# Ryan Faatih Firdaus — Portfolio

Personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + Tailwind CSS v4 (CSS-first config)
- **Language:** TypeScript
- **Fonts:** Inter + JetBrains Mono via `next/font`
- **Icons:** Material Symbols Outlined + Simple Icons CDN

## Project Structure

```
src/
  app/
    globals.css        # Tailwind v4 design tokens + global styles
    layout.tsx         # Root layout — fonts, dark mode, ThemeProvider
    page.tsx           # Home page
    projects/[slug]/   # Dynamic project detail pages (SSG)
    providers/
      ThemeProvider.tsx  # React context for dark/light theme
  components/
    home/              # Page sections (Hero, Projects, Skills, Experience, Education, Contact)
    layout/            # Navbar, Footer
    project/           # Project detail components
    ui/                # Reusable UI (Reveal, ScrollToTop, SectionHeading, Tag)
  data/
    personal.ts        # Personal info, experience, education
    projects.ts        # Project data
    skills.ts          # Tech stack
    social.tsx         # Social links with SVG icons
  types/
    index.ts           # Shared TypeScript interfaces
public/
  files/               # Static downloads (CV.pdf)
  images/
    companies/         # Company logos used in Experience section
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Key Features

- **Dark mode default** — anti-flash inline script + `localStorage` persistence + React context toggle
- **Scroll reveal animations** — `IntersectionObserver`-based `Reveal` component
- **SSG project pages** — `generateStaticParams` for `/projects/[slug]`
- **DRY data layer** — all content in `src/data/`, zero duplication across components
- **Responsive** — mobile-first, fluid grid with 1120px max-width


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
