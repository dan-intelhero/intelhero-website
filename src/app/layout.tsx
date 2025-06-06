import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://intelhero.com'),
  title: "IntelHero Scout - Multi-Site Search Browser Extension",
  description: "Transform your web research with IntelHero Scout. Search across Google, YouTube, Reddit, Wikipedia, and more with a single query. Fast, smart, and free.",
  keywords: ["browser extension", "multi-site search", "web research", "productivity", "Chrome extension", "Edge extension"],
  authors: [{ name: "IntelHero" }],
  creator: "IntelHero",
  publisher: "IntelHero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intelhero.com",
    siteName: "IntelHero Scout",
    title: "IntelHero Scout - Multi-Site Search Browser Extension",
    description: "Transform your web research with IntelHero Scout. Search across multiple sites simultaneously with a single query.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntelHero Scout Browser Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelHero Scout - Multi-Site Search Browser Extension",
    description: "Transform your web research with IntelHero Scout. Search across multiple sites simultaneously.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
