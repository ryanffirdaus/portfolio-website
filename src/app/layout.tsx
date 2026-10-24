import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { personal } from "@/data/personal";
import { SITE_URL, SITE_KEYWORDS } from "@/data/site";

// A characterful grotesque for UI and headlines, a soft display serif for
// numbers and accents, and a mono face for labels and the "code" letters.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// Marks the page as scripted before first paint, so entrance animations can
// hide their start state without hiding content from no-JS readers.
const jsFlag = `document.documentElement.classList.add("js")`;

const title = `${personal.name} | ${personal.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  keywords: SITE_KEYWORDS,
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: title,
    title,
    description: personal.bio,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personal.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className="flex min-h-screen flex-col bg-ink font-sans text-body text-fog antialiased">
        <SmoothScroll />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
