
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const audioWide = Audiowide({
  variable: "--font-audio-wide",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giang Nguyen Portfolio",
  description:
    "Portfolio site for a Frontend and UI/UX designer, showcasing modern interfaces, smooth interactions, and crafted digital experiences.",
  openGraph: {
    title: "Giang Nguyen | Frontend & UI/UX Portfolio",
    description:
      "Explore DNILB's work as a Frontend and UI/UX designer — from sleek landing pages to immersive web experiences.",
    images: ["/images/port-mock.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${audioWide.variable} min-h-screen w-full antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll />
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
