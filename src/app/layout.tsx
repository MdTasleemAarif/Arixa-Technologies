import type { Metadata } from "next";
import type { Viewport } from "next";
import { Barlow_Condensed, JetBrains_Mono, Nunito_Sans, Sora } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import { logoAsset } from "@/config/site-assets";
import { defaultOpenGraph, siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const brandFont = Sora({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const codeFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Premium Software & Digital Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": absoluteUrl("/feed.xml"),
    },
  },
  openGraph: defaultOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Premium Software & Digital Solutions`,
    description: siteConfig.description,
    images: [absoluteUrl("/images/og/arixa-technologies-og-image.png")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: logoAsset.src, type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: logoAsset.src, sizes: "512x512", type: "image/png" },
    ],
    shortcut: logoAsset.src,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fff8ea",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${brandFont.variable} ${codeFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
