import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { site } from "../lib/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://northbridge-commerce.vercel.app"),

  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },

  description: site.description,

  keywords: [
    "e-commerce sourcing UK",
    "UK retail partnerships",
    "e-commerce supplier UK",
    "online retail sourcing",
    "brand partnerships UK",
    "wholesale e-commerce UK",
    "retail supplier partnerships",
    "Northbridge Commerce Group",
  ],

  authors: [
    {
      name: site.name,
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "1AAeNkj4QYQPC1q3zpPZUItkdDJLsyol-HRwS5yZ7RE",
  },

  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://northbridge-commerce.vercel.app",
    siteName: site.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
 <Analytics />
      </body>
    </html>
  );
}
