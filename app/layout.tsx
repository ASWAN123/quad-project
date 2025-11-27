import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quad Camel Marrakech - Quad Bike & Camel Ride in Agafay Desert",
    template: "%s | Quad Camel Marrakech" // Dynamic titles for other pages
  },
  description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
  keywords: "quad biking Marrakech, camel ride Agafay, desert adventure Morocco, quad bike tour, camel experience, Agafay desert tour, Marrakech activities",
  authors: [{ name: "Quad Camel Marrakech" }],
  metadataBase: new URL('https://quadcamelmarrakesh.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Quad Camel Marrakech - Quad Bike & Camel Ride in Agafay Desert",
    description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
    url: 'https://quadcamelmarrakesh.com',
    siteName: 'Quad Camel Marrakech',
    images: [
      {
        url: '/images/quad-biking-desert-adventure.jpeg', // Make sure this path is correct
        width: 1200,
        height: 630,
        alt: 'Quad biking adventure at sunset in Agafay Desert near Marrakech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quad Camel Marrakech - Quad Bike & Camel Ride in Agafay Desert",
    description: "Ride a quad bike across the Agafay desert and enjoy a peaceful camel experience with stunning views, golden landscapes, and unforgettable moments.",
    creator: '@quadcamelmarrakech',
    images: ['/images/quad-biking-desert-adventure.jpeg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main> {/* Wrap in main for semantic HTML */}
        <Footer />
      </body>
    </html>
  );
}