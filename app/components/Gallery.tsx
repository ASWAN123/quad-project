import Image from 'next/image';
import React from 'react'

  // Image paths from your public folder
  const images = {
    hero: [
      '/images/1000092073.jpg', 
      '/images/1000091075.jpg', 
      '/images/1000091074.jpg', 
      '/images/1000090188.jpg'  
    ],
    gallery: [
      '/images/1000090187.jpg',
      '/images/1000090185.jpg',
      '/images/1000090181.jpg',
      '/images/1000090176.jpg',
      '/images/1000090175.jpg',
      '/images/1000090174.jpg',
      '/images/1000090173.jpg',
      '/images/1000090171.jpg',
      '/images/1000090170.jpg',
      '/images/1000090169.jpg',
      '/images/1000090167.jpg',
      '/images/1000090166.jpg'
    ]
  };

const Gallery = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-amber-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[url('/images/moroccan-pattern.png')] opacity-5"></div>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
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
              src: images.gallery[0],
              title: "Golden Hour Magic",
              story: "Sarah's first camel ride at sunset",
              emoji: "🌅",
              type: "Camel Trek"
            },
            {
              src: images.gallery[1], 
              title: "Desert Thrills",
              story: "Mark conquering the dunes",
              emoji: "🏍️",
              type: "Quad Biking"
            },
            {
              src: images.gallery[2],
              title: "Family Adventure",
              story: "The Johnson family's perfect day",
              emoji: "👨‍👩‍👧‍👦",
              type: "Combo Tour"
            },
            {
              src: images.gallery[3],
              title: "Berber Tea Time",
              story: "Sharing stories over mint tea",
              emoji: "🫖",
              type: "Cultural"
            },
            {
              src: images.gallery[4],
              title: "Desert Friends",
              story: "New friendships in the dunes",
              emoji: "🤝",
              type: "Group Tour"
            },
            {
              src: images.gallery[5],
              title: "Sunset Silhouette",
              story: "Perfect end to a perfect day",
              emoji: "🌇",
              type: "Photography"
            },
            {
              src: images.gallery[6],
              title: "Morning Adventure",
              story: "Starting the day with excitement",
              emoji: "🌄",
              type: "Quad Biking"
            },
            {
              src: images.gallery[7],
              title: "Desert Peace",
              story: "Finding tranquility in nature",
              emoji: "☁️",
              type: "Camel Trek"
            }
          ].map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-amber-200/30"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                
                {/* Experience Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
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
          <button className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mx-auto">
            <span>View More Photos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
    
  )
}

export default Gallery