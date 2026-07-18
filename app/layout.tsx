import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Nderema — Software Developer",
  description:
    "Portfolio of James Nderema — full-stack developer building web, desktop, and mobile products including DukaPro POS, SokoBiz and SchoolMaster.",
  keywords: [
    "James Nderema",
    "Software Developer",
    "Next.js",
    "Django",
    "PyQt6",
    "React Native",
    "DukaPro",
    "SokoBiz",
    "SchoolMaster",
    "Kenya",
  ],
  authors: [{ name: "James Nderema" }],
  openGraph: {
    title: "James Nderema — Software Developer",
    description:
      "Full-stack developer building web, desktop and mobile products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
