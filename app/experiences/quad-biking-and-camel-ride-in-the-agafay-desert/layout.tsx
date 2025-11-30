// app/experiences/quad-biking-camel-ride/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agafay Desert Adventure: Quad Biking & Sunset Camel Trek from Marrakech",
  description: "4-hour desert experience with quad biking, camel trekking, and Moroccan tea. Hotel pickup included. Professional guides, all skill levels welcome. Book your adventure today!",
  keywords: "quad biking Marrakech, camel ride Agafay desert, Agafay desert tour, Marrakech desert adventure, quad bike rental Marrakech, camel trekking Morocco",
  openGraph: {
    title: "Agafay Desert Adventure: Quad Biking & Sunset Camel Trek",
    description: "4-hour desert experience with quad biking, camel trekking, and Moroccan tea. Professional guides, hotel pickup included.",
    images: ['/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg'],
    type: 'website',
    locale: 'en_US',
    siteName: 'Quad Camel Marrakech',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agafay Desert Adventure: Quad Biking & Sunset Camel Trek",
    description: "4-hour desert experience with quad biking, camel trekking, and Moroccan tea.",
    images: ['/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg'],
  },
};

// JSON-LD Structured Data - UPDATED
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  'name': 'Agafay Desert Adventure: Quad Biking & Sunset Camel Trek',
  'description': 'Discover the magic of Morocco\'s Agafay Desert with an unforgettable combination of thrilling quad biking and traditional camel trekking. Experience the perfect blend of adventure and cultural immersion just outside Marrakech.',
  'image': [
    '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg',
    '/images/Sunset-Quad-Biking-Adventure.jpeg',
    '/images/Desert-Camel-Ride.jpeg'
  ],
  'offers': {
    '@type': 'Offer',
    'name': 'Quad Biking & Camel Trekking Combo',
    'price': '95',
    'priceCurrency': 'EUR',
    'priceValidUntil': '2024-12-31',
    'availability': 'https://schema.org/InStock',
    'url': 'https://quadcamelmarrakesh.com/experiences/quad-biking-and-camel-ride-in-the-agafay-desert',
    'description': '4-hour desert adventure including 2-hour quad biking, 20-minute camel ride, and Moroccan tea break'
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
    'telephone': '+212627349254',
    'email': 'quadcamelmarrakesh@gmail.com'
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
    'numberOfItems': 5,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Hotel Pickup & Transfer',
        'description': 'Comfortable pickup from your Marrakech accommodation (45-minute journey)'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Safety Briefing & Equipment',
        'description': '10-minute safety briefing and quad bike orientation with professional instruction'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Quad Biking Adventure (2 hours)',
        'description': 'Guided quad bike tour through Agafay Desert, Berber villages, and scenic viewpoints'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Moroccan Tea Break & Camel Trekking',
        'description': 'Traditional mint tea break followed by 20-minute sunset camel ride'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Return Journey',
        'description': 'Comfortable transfer back to your Marrakech accommodation'
      }
    ]
  },
  'includes': [
    'Round-trip transportation from Marrakech',
    'Professional quad bike and safety equipment',
    'Expert safety briefing and guided instruction',
    'Traditional 20-minute camel ride experience',
    'Complimentary Moroccan mint tea break',
    'Multilingual professional guides (English, French, Spanish, Arabic)',
    'All necessary safety gear and protection',
    'Scenic photo opportunities throughout'
  ],
  'duration': 'PT4H', // 4 hours in ISO 8601 duration format (updated from 8 hours)
  'startDate': '2024-01-01',
  'endDate': '2024-12-31',
  'meetingPoint': 'Your accommodation in Marrakech',
  'groupSize': 'Small Intimate Groups',
  'difficulty': 'Beginner to Advanced - All Welcome',
  'ageRange': '15+ years for camel riding, 15+ years for quad biking',
  'requirements': [
    'Comfortable outdoor clothing suitable for desert conditions',
    'Closed-toe shoes for quad biking safety',
    'Sun protection (hat, sunglasses, sunscreen)',
    'Camera or smartphone for capturing memories'
  ],
  'keywords': [
    'quad biking Marrakech',
    'camel ride Agafay desert',
    'Agafay desert tour',
    'Marrakech desert adventure',
    'quad bike rental Marrakech',
    'camel trekking Morocco',
    'desert experience Marrakech',
    'Agafay quad biking',
    'sunset camel ride Marrakech'
  ],
  'additionalProperty': [
    {
      '@type': 'PropertyValue',
      'name': 'Free Cancellation',
      'value': 'Cancel up to 24 hours in advance for full refund'
    },
    {
      '@type': 'PropertyValue', 
      'name': 'Reserve Now & Pay Later',
      'value': 'Book your spot and pay nothing today'
    },
    {
      '@type': 'PropertyValue',
      'name': 'Languages',
      'value': 'English, French, Spanish, Arabic'
    }
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