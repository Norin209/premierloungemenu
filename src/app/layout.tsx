import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "../_component/Navbar";
import Footer from "../_component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premier Lounge | Wellness & Beauty",
  description: "Luxury Spa, Salon, and Wellness Center in Phnom Penh. Est 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* FIX ADDED BELOW: suppressHydrationWarning={true} 
        This tells React to ignore extra attributes added by browser extensions (like Grammarly)
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-spa-cream`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}