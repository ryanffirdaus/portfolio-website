import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { personal } from "@/data/personal";
import { SITE_URL, SITE_KEYWORDS } from "@/data/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

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
    <html lang="en" className={dmSans.variable}>
      <body className="flex min-h-screen flex-col bg-void font-sans text-body text-fog antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
