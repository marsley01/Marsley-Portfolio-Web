import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import MilkyGalaxyBackground from "@/components/three/MilkyGalaxyBackground";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marsley-mash-site.vercel.app"),
  title: "Marsley Mash — Founder & Builder",
  description:
    "Founder and builder running multiple products across edtech, fintech, e-commerce, and SaaS. I ship things people actually use.",
  keywords: [
    "Marsley Mash",
    "Marsley Mash Nairobi",
    "Cyzora",
    "Edyfra",
    "Mash Payments",
    "KenyaLibrarySystems",
    "Trivo Kenya",
    "web developer Nairobi",
    "software developer Kenya",
    "tech entrepreneur Nairobi",
    "SaaS founder Kenya",
    "Nairobi startup builder",
  ],
  authors: [{ name: "Marsley Mash", url: "https://marsley-mash-site.vercel.app" }],
  creator: "Marsley Mash",
  publisher: "Marsley Mash",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "a4JpMV_bvCcW9WtWa3JtuhpDTSgzac17BFOMWgoL098",
  },
  openGraph: {
    title: "Marsley Mash — Founder & Builder",
    description:
      "Founder and builder running multiple products across edtech, fintech, e-commerce, and SaaS. I ship things people actually use.",
    type: "website",
    url: "https://marsley-mash-site.vercel.app",
    siteName: "Marsley Mash Portfolio",
    locale: "en_US",
  },
  twitter: {
    title: "Marsley Mash — Founder & Builder",
    description: "Founder and builder running multiple products across edtech, fintech, e-commerce, and SaaS. I ship things people actually use.",
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark antialiased bg-background`}
      suppressHydrationWarning
    >
      <body className="bg-transparent font-sans text-foreground transition-colors duration-300">
        <MilkyGalaxyBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Marsley Mash",
              "url": "https://marsley-mash-site.vercel.app",
              "jobTitle": "Founder & Builder",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "sameAs": [
                "https://github.com/marsley01",
                "https://www.linkedin.com/in/marsleymash"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Web Development",
                "SaaS Development",
                "EdTech",
                "FinTech",
                "E-commerce",
                "Entrepreneurship"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Cyzora"
              }
            })
          }}
        />
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navigation />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <ChatBot />
            <BackToTop />
            <CustomCursor />
          </SmoothScrollProvider>
        </ThemeProvider>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </body>
    </html>
  );
}
