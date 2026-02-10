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
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihir Kasodariya | MERN Stack Developer & Software Engineer",
  description:
    "Official portfolio of Mihir Kasodariya. A highly skilled MERN Stack Developer specializing in Node.js, React.js, Next.js, and building scalable, high-performance web applications.",
  keywords: [
    "Mihir Kasodariya",
    "Mihir Kasodariya Developer",
    "Kasodariya Mihir",
    "MERN Stack Developer India",
    "Full Stack Developer Portfolio",
    "Next.js Expert",
    "React.js Developer Surat",
    "Node.js Backend Developer",
    "Mihir Kasodariya Software Engineer",
    "Freelance Web Developer India",
  ],
  authors: [{ name: "Mihir Kasodariya", url: "https://mihirkasodariya.vercel.app" }],
  creator: "Mihir Kasodariya",
  publisher: "Mihir Kasodariya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://mihirkasodariya.vercel.app",
  },
  openGraph: {
    title: "Mihir Kasodariya | Professional Portfolio",
    description:
      "Explore the work of Mihir Kasodariya, a dedicated Developer building the future of the web with MERN & Next.js.",
    url: "https://mihirkasodariya.vercel.app",
    siteName: "Mihir Kasodariya Portfolio",
    images: [
      {
        url: "https://mihirkasodariya.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mihir Kasodariya - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Kasodariya | MERN Stack Developer",
    description:
      "Building fast, secure, and scalable web applications with modern tech stacks.",
    images: ["https://mihirkasodariya.vercel.app/og-image.jpg"],
    creator: "@mihirkasodariya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {/* Structured Data (JSON-LD) */}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mihir Kasodariya",
              alternateName: "Kasodariya Mihir",
              url: "https://mihirkasodariya.vercel.app",
              image: "https://mihirkasodariya.vercel.app/assets/hero.svg",
              sameAs: [
                "https://github.com/mihirkasodariya",
                "https://linkedin.com/in/mihirkasodariya",
                "https://www.instagram.com/mihir_kasodariya",
                "https://x.com/mihirkasodariya",
                "https://www.upwork.com/freelancers/~01e115c6a20bfa3866",
              ],
              jobTitle: "MERN Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description: "Full Stack Web Developer specializing in MERN Stack, Next.js, and AWS.",
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Web Development",
                "Software Engineering",
              ],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mihir Kasodariya Portfolio",
              url: "https://mihirkasodariya.vercel.app",
              author: "Mihir Kasodariya",
              description: "Portfolio of MERN Stack Developer Mihir Kasodariya"
            })
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
        <Analytics />
      </body>
    </html>
  );
}
