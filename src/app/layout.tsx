import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "./../components/SplashCursor";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihir Kasodariya",
  description: "MERN Stack Developer",
  icons: {
    icon: "/favicon1.ico",
    shortcut: "/favicon1.ico",
    apple: "/favicon1.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* Header with responsive positioning */}
        <Header />
        
        {/* Main content with responsive spacing */}
        <main className="
          pt-24 sm:pt-20 md:pt-24 lg:pt-0 xl:pt-0
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          min-h-screen
          w-full
          max-w-full
          overflow-x-hidden
        ">
          {children}
        </main>
        
        {/* Cursor effect - only on devices that support hover */}
          <SplashCursor />
      </body>
    </html>
  );
}