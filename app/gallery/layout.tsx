
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery - Quad Biking & Camel Ride Adventures",
  description: "Explore stunning photos from our quad biking and camel trekking adventures in Agafay Desert. Real moments captured in the heart of Moroccan desert.",
  openGraph: {
    title: "Desert Adventure Photo Gallery",
    description: "Stunning photos from quad biking and camel riding adventures in Agafay Desert near Marrakech",
    images: ['/images/Moroccan-Memories.jpeg'],
  },
};

// Structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Desert Adventure Photo Gallery',
  'description': 'Professional photos from quad biking and camel riding experiences in Agafay Desert',
  'mainEntity': {
    '@type': 'ImageGallery',
    'name': 'Quad Camel Marrakech Adventure Photos'
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}