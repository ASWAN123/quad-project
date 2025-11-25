import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
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
  title: "Quad Camel Marrakech - Ride a Quad Bike in Agafay & Enjoy Camel Experience",
  description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
  keywords: "quad biking Marrakech, camel ride Agafay, desert adventure Morocco, quad bike tour, camel experience, Agafay desert tour, Marrakech activities",
  authors: [{ name: "Quad Camel Marrakech" }],
  creator: "Quad Camel Marrakech",
  publisher: "Quad Camel Marrakech", 
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quadcamelmarrakesh.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Quad Camel Marrakech - Ride a Quad Bike in Agafay & Enjoy Camel Experience",
    description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
    url: 'https://quadcamelmarrakesh.com',
    siteName: 'Quad Camel Marrakech',
    images: [
      {
        url: '/images/1000092073.jpg',
        width: 1200,
        height: 630,
        alt: 'Quad biking and camel experience in Agafay desert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quad Camel Marrakech - Ride a Quad Bike in Agafay & Enjoy Camel Experience",
    description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
    images: ['/images/1000092073.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // You can add Google Search Console verification here later
    // google: 'your-google-verification-code',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}