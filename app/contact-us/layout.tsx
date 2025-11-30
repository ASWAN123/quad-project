// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Plan Your Desert Adventure",
  description: "Get in touch with our local team to plan your perfect quad biking and camel riding adventure in Agafay Desert. WhatsApp, phone, email - we're here to help!",
  openGraph: {
    title: "Contact Quad Camel Marrakech - Desert Adventure Experts",
    description: "Plan your perfect desert experience with local guides. Quad biking, camel riding, and unforgettable memories in Agafay Desert.",
    images: ['/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg'],
  },
};

// JSON-LD Structured Data for Contact Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact Quad Camel Marrakech',
  'description': 'Get in touch to plan your desert adventure in Marrakech',
  'url': 'https://quadcamelmarrakesh.com/contact',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'Quad Camel Marrakech',
    'description': 'Professional desert adventure tours in Agafay Desert, Marrakech',
    'url': 'https://quadcamelmarrakesh.com',
    'telephone': '+212627349254',
    'email': 'quadcamelmarrakesh@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Marrakech',
      'addressCountry': 'MA'
    },
    'areaServed': 'Marrakech and surrounding areas',
    'sameAs': [
      'https://wa.me/212627349254'
    ]
  }
};



const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is the best way to contact you for booking?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You can reach us via WhatsApp for instant responses, phone call for direct conversation, or email for detailed planning. We typically respond within minutes on WhatsApp and within hours for emails.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do I need to book in advance for desert adventures?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, we recommend booking at least 24-48 hours in advance to ensure availability, especially during peak season. Last-minute bookings are sometimes possible depending on availability.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What information should I provide when contacting you?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Please include your preferred dates, number of people, any special requirements, and whether you prefer quad biking, camel riding, or our popular combo experience.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are your response times?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We respond to WhatsApp messages within minutes, phone calls immediately, and emails within 2-4 hours during business hours (7 AM - 10 PM Morocco time).'
      }
    }
  ]
};


export default function ContactLayout({
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
    
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}