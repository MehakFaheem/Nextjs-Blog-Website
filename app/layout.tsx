import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

// Configure Inter font
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

// Configure Press Start 2P font
const pressStart2P = Press_Start_2P({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-press-start-2p'
});

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
    <html 
      lang="en" 
      className={`${inter.variable} ${pressStart2P.variable}`}
    >
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}