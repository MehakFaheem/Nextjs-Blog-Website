import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

// Optimize font loading with subsets and display swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const pressStart2P = Press_Start_2P({ 
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-press-start-2p',
  adjustFontFallback: false,
});

// Optional: Add a mono font for code blocks
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: {
    default: "DevBlog | Tech Insights & Tutorials",
    template: "%s | DevBlog",
  },
  description: "Exploring the digital frontier with code, tutorials, and tech insights",
  metadataBase: new URL(process.env.SITE_URL || 'https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'DevBlog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevBlog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${pressStart2P.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts for better performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased bg-black text-white font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}