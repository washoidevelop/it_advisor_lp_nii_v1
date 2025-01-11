import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "つきいちDX",
  description: "つきいち改善で、見掛け倒しの儲からないDXを脱却",
  openGraph: {
    title: "つきいちDX",
    description: "つきいち改善で、見掛け倒しの儲からないDXを脱却",
    images: [
      {
        url: "/images/OGImage.png",
        width: 1200,
        height: 630,
        alt: "つきいちDX",
      },
    ],
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
        <Toaster />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-4NPJHJBJRW" />
    </html>
  );
}
