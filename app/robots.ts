// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/experiences/quad-biking-and-camel-ride-in-the-agafay-desert/',
        '/gallery/',
        '/stories/',
        '/contact-us',
        '/about/',
        '/guides/',
        '/safety/',
        '/sustainability/',
        '/faq/',
        '/booking-policy/',
        '/privacy/',
      ],
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
      ],
    },
    sitemap: 'https://quadcamelmarrakesh.com/sitemap.xml',
  }
}