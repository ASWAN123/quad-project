


import Image from 'next/image';
import Link from 'next/link';

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
// Gallery images only - no hero images
const galleryImages = [
  '/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg',
  '/images/Desert-Quad-Biking-Adventure.jpeg',
  '/images/Agafay-Desert-Camel-Trek.jpeg',
  '/images/Quad-biking-in-a-desert-landscape.jpeg',
  '/images/Moroccan-Desert-Adventure.jpeg',
  '/images/Dromedaries-on-the-Sand.jpeg',
  '/images/Desert-Sunset-Quad-Ride.jpeg',
  '/images/Traditional-Moroccan-Seating-Area.jpg'
];

const Gallery = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-amber-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32  opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 mb-6">
            <span className="text-amber-700 text-sm font-light tracking-widest">
              DESERT MOMENTS
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-slate-800 mb-6 leading-tight">
              Stories Through
              <span className="block text-amber-700 mt-2">Our Lens</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Real moments of joy, adventure, and connection captured in the heart of the Moroccan desert.
            </p>
          </div>
        </div>
    
        {/* Story-Driven Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[

            {
              src: galleryImages[0],
              title: "Palm Grove Tour",
              story: "Adventure through lush oasis",
              emoji: "🌴",
              type: "Quad Biking"
            },
            {
              src: galleryImages[1],
              title: "Off-Road Thrills",
              story: "Mastering desert terrain",
              emoji: "💨",
              type: "Quad Biking"
            },
            {
              src: galleryImages[2],
              title: "Desert Trek",
              story: "Peaceful camel ride at dusk",
              emoji: "🌇",
              type: "Camel Trek"
            },
            {
              src: galleryImages[3],
              title: "Golden Landscape",
              story: "Breathtaking desert views",
              emoji: "🌟",
              type: "Quad Biking"
            },
            {
              src: galleryImages[4],
              title: "Adventure Awaits",
              story: "Ready for desert exploration",
              emoji: "🎯",
              type: "Combo Tour"
            },
            {
              src: galleryImages[5],
              title: "Desert Friends",
              story: "Camels resting in the dunes",
              emoji: "🐪",
              type: "Camel Trek"
            },
            {
              src: galleryImages[6],
              title: "Sunset Ride",
              story: "Perfect end to an adventure",
              emoji: "🌄",
              type: "Quad Biking"
            },
            {
              src: galleryImages[7],
              title: "Moroccan Hospitality",
              story: "Traditional seating and tea",
              emoji: "🫖",
              type: "Cultural"
            }
          ].map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-3xl hover:scale-105 transition-all duration-500 border border-amber-200/30"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"

                
                
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                
                {/* Experience Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-amber-700 text-xs font-medium">{image.type}</span>
                </div>
                
                {/* Story Content */}
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">{image.emoji}</span>
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed">{image.story}</p>
                </div>
              </div>
              
              {/* Quick Info (Always Visible) */}
              <div className="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-xs">{image.emoji} {image.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    
        {/* Simple View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto group"
          >
            <span>View More Photos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery