import type { Metadata } from "next";
import { Inter } from "next/font/google";

const GeistSans = Inter({ subsets: ["latin"] });
const GeistMono = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "DevBlog | Tech Insights & Tutorials",
  description: "Exploring the digital frontier with code, tutorials, and tech insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.className}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Press Start 2P font */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet"
        />
        
        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}