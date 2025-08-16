// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import SplashCursor from "./../components/SplashCursor";
// import Header from "@/components/ui/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Mihir Kasodariya | MERN Stack Developer",
//   description: "Portfolio of Mihir Kasodariya - MERN Stack Developer specializing in Node.js, React.js, Next.js, and scalable web applications.",
//   keywords: [
//     "Mihir Kasodariya",
//     "kasodariya mihir",
//     "MERN Stack Developer",
//     "Node.js Developer",
//     "React.js Developer",
//     "Next.js Portfolio",
//     "Full Stack Developer",
//     "Freelance MERN Developer",
//   ],
//   authors: [{ name: "Mihir Kasodariya", url: "" }],
//   openGraph: {
//     title: "Mihir Kasodariya | MERN Stack Developer",
//     description: "Passionate about building scalable, fast, and secure web applications.",
//     type: "website",
//   },
//   icons: {
//     icon: "/favicon1.ico",
//     shortcut: "/favicon1.ico",
//     apple: "/favicon1.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
//       >
//         {/* Header with responsive positioning */}
//         <Header />

//         {/* Main content with responsive spacing */}
//         <main className="
//           pt-24 sm:pt-20 md:pt-24 lg:pt-0 xl:pt-0
//           px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
//           min-h-screen
//           w-full
//           max-w-full
//           overflow-x-hidden
//         ">
//           {children}
//         </main>

//         {/* Cursor effect - only on devices that support hover */}
//         <SplashCursor />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "./../components/SplashCursor";
import Header from "@/components/ui/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihir Kasodariya | MERN Stack Developer",
  description:
    "Portfolio of Mihir Kasodariya - MERN Stack Developer specializing in Node.js, React.js, Next.js, and scalable web applications.",
  keywords: [
    "Mihir Kasodariya",
    "Kasodariya Mihir",
    "MERN Stack Developer",
    "Node.js Developer",
    "React.js Developer",
    "Next.js Portfolio",
    "Full Stack Developer",
    "Freelance MERN Developer",
  ],
  authors: [{ name: "Mihir Kasodariya", url: "https://mihirkasodariya.com" }],
  openGraph: {
    title: "Mihir Kasodariya | MERN Stack Developer",
    description:
      "Passionate about building scalable, fast, and secure web applications.",
    url: "https://mihirkasodariya.com",
    siteName: "Mihir Kasodariya Portfolio",
    images: [
      {
        url: "https://mihirkasodariya.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mihir Kasodariya Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Kasodariya | MERN Stack Developer",
    description:
      "Full Stack Developer specializing in MERN, Next.js, and scalable apps.",
    images: ["https://mihirkasodariya.com/og-image.jpg"],
  },
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
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://mihirkasodariya.com" />

        {/* Structured Data (JSON-LD for Person Schema) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mihir Kasodariya",
              url: "https://yourdomain.com",
              jobTitle: "MERN Stack Developer",
              sameAs: [
                "https://github.com/mihirkasodariya",
                "https://www.upwork.com/freelancers/~01e115c6a20bfa3866?mp_source=share",
                "https://linkedin.com/in/mihirkasodariya",
                "https://www.instagram.com/mihir_kasodariya",
                "https://x.com/mihirkasodariya",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* Header */}
        <Header />

        {/* Main content */}
        <main
          className="
          pt-24 sm:pt-20 md:pt-24 lg:pt-0 xl:pt-0
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          min-h-screen
          w-full
          max-w-full
          overflow-x-hidden
        "
        >
          {children}
        </main>

        {/* Cursor effect */}
        <SplashCursor />
      </body>
    </html>
  );
}
