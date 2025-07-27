
import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import NavTest from "@/components/NavTest";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: "Nouveau Visuals",
  description: `Nouveau Visuals, your global partner for Architectural Visualization.
« Specialized in high-end3D modeling, rendering,animation forexteriors, interiorsandlandscapes, transforming concepts into breathtaking visuals. »`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head><meta name="apple-mobile-web-app-title" content="Nouveau Visuals" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        <NavTest/>
        {children}

       <FooterWrapper/>
      </body>
    </html>
  );
}
