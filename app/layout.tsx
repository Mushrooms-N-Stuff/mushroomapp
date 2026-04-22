import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema, SITE_URL } from "@/lib/seo";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default:
      "Mushrooms & Stuff — Functional mushrooms, explained by the research",
    template: "%s — Mushrooms & Stuff",
  },
  description:
    "Evidence-based guidance on functional mushrooms — Lion's Mane, Reishi, Cordyceps, Chaga, and Turkey Tail — for focus, stress, energy, immunity, and longevity.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Mushrooms & Stuff",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mushrooms & Stuff — Evidence-based functional mushrooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
