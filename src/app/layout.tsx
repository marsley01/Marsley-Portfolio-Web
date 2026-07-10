import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import FloatingSvgs from "@/components/FloatingSvgs";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import HeroSceneBackground from "@/components/three/HeroSceneBackground";

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
    "Cyzora",
    "Edyfra",
    "web developer",
    "software developer",
    "Kenya",
    "entrepreneur",
  ],
  verification: {
    google: "a4JpMV_bvCcW9WtWa3JtuhpDTSgzac17BFOMWgoL098",
  },
  openGraph: {
    title: "Marsley Mash",
    description:
      "Founder and builder running multiple products across edtech, fintech, e-commerce, and SaaS. I ship things people actually use.",
    type: "website",
    url: "https://marsley-mash-site.vercel.app",
    siteName: "Marsley Mash Portfolio",
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
      className={`${inter.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground transition-colors duration-300">
        <div className="grain-overlay" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <HeroSceneBackground />
        </div>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navigation />
            <FloatingSvgs />
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
