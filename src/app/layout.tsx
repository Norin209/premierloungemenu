import type { Metadata } from "next";
// 1. Import the luxury font (Playfair) alongside the default fonts
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// 2. Import your new components (Make sure these files exist first!)
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

// 3. Configure the Premier font
const playfair = Playfair_Display({
  variable: "--font-playfair", // This matches the var we used in globals.css
  subsets: ["latin"],
  display: "swap",
});

// 4. Update Metadata for SEO
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-spa-cream`}
      >
        {/* Sticky Header */}
        <Navbar />

        {/* Main Content (HomePage) */}
        {children}

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}