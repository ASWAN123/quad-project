// app/experiences/quad-biking-camel-ride/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marrakech: Quad Biking & Camel Ride in Agafay Desert",
  description: "Experience quad biking and camel riding in Agafay Desert. Hotel pickup, professional guides, and unforgettable sunset views. Book your desert adventure today!",
  openGraph: {
    title: "Marrakech: Quad Biking & Camel Ride in Agafay Desert",
    description: "Experience quad biking and camel riding in Agafay Desert with professional guides and hotel pickup.",
    images: ['/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  'name': 'Marrakech: Quad Biking and Camel Ride in the Agafay Desert',
  'description': 'Experience the magic of the Agafay desert with our authentic quad biking and camel trekking adventure. Feel the thrill of riding through golden dunes, then embrace the peaceful rhythm of a traditional camel ride.',
  'image': [
    '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg',
    '/images/Sunset-Quad-Biking-Adventure.jpeg',
    '/images/Desert-Camel-Ride.jpeg'
  ],
  'offers': {
    '@type': 'Offer',
    'name': 'Quad Biking & Camel Ride Experience',
    'price': '55',
    'priceCurrency': 'EUR',
    'priceValidUntil': '2024-12-31',
    'availability': 'https://schema.org/InStock',
    'url': 'https://quadcamelmarrakesh.com/experiences/quad-biking-and-camel-ride-in-the-agafay-desert',
    'description': 'Full day desert adventure including quad biking, camel trekking, and hotel transfer'
  },
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Marrakech',
    'addressCountry': 'MA',
    'addressRegion': 'Marrakech-Safi'
  },
  'areaServed': 'Marrakech and surrounding areas',
  'touristType': ['Adventure tourists', 'Family', 'Couples', 'Solo travelers'],
  'suitableFor': {
    '@type': 'Audience',
    'audienceType': ['Families', 'Couples', 'Adventure seekers', 'Solo travelers']
  },
  'isAccessibleForFree': false,
  'publicAccess': true,
  'provider': {
    '@type': 'Organization',
    'name': 'Quad Camel Marrakech',
    'url': 'https://quadcamelmarrakesh.com',
    'telephone': '+212627349254'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '342',
    'bestRating': '5',
    'worstRating': '1'
  },
  'review': [
    {
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': 'Sarah & Mark'
      },
      'reviewBody': 'Absolutely incredible experience! The quad biking was thrilling and the camel trek at sunset was magical. Our guide made us feel safe throughout the entire adventure.',
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '5',
        'bestRating': '5'
      },
      'datePublished': '2024-01-15',
      'locationCreated': {
        '@type': 'Place',
        'name': 'London, UK'
      }
    },
    {
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': 'Michael T.'
      },
      'reviewBody': 'Perfect combination of adventure and culture. The transition from high-energy quad biking to peaceful camel riding was seamless. Professional equipment and excellent guides.',
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '5',
        'bestRating': '5'
      },
      'datePublished': '2024-01-12',
      'locationCreated': {
        '@type': 'Place',
        'name': 'New York, USA'
      }
    }
  ],
  'itinerary': {
    '@type': 'ItemList',
    'numberOfItems': 4,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Morning Adventure: Quad Biking (2-3 hours)',
        'description': 'Hotel pickup, safety briefing, guided ATV tour through desert landscapes with photo stops'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Desert Break',
        'description': 'Refresh with bottled water and rest while enjoying desert scenery'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Evening Magic: Camel Trekking (1.5-2 hours)',
        'description': 'Gentle camel ride through ancient caravan routes with breathtaking sunset views'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Return Journey',
        'description': 'Comfortable transfer back to accommodation with professional photos'
      }
    ]
  },
  'includes': [
    'Hotel pickup and drop-off in Marrakech',
    'Professional quad biking equipment',
    'Safety gear and instruction',
    'Camel trekking experience',
    'Bottled water during the tour',
    'Professional guide services',
    'All safety equipment',
    'Desert photography'
  ],
  'duration': 'PT8H', // 8 hours in ISO 8601 duration format
  'startDate': '2024-01-01',
  'endDate': '2024-12-31',
  'meetingPoint': 'Your accommodation in Marrakech',
  'groupSize': 'Small groups (2-8 people)',
  'difficulty': 'All levels welcome',
  'ageRange': '6+ years',
  'keywords': [
    'quad biking Marrakech',
    'camel ride Agafay',
    'desert adventure Morocco',
    'Agafay desert tour',
    'Marrakech activities'
  ]
};

export default function ExperienceLayout({
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