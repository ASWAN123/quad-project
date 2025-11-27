"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const images = [
    '/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg',
    '/images/Desert-Quad-Biking-Adventure.jpeg', 
    '/images/Desert-Camel-Ride.jpeg',
    '/images/Quad-Biking-in-the-Agafay-Desert-at-Sunset.jpeg',
    '/images/Sunset-Quad-Biking-Adventure.jpeg'
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-24 bg-linear-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors duration-200 z-10"
              aria-label="Close image preview"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="text-2xl font-light">×</span>
              </div>
            </button>
            
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto"

                  priority // For above-the-fold images
                  
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
              />
            </div>
            
            {/* Optional: Close on background click */}
            <div 
              className="absolute inset-0 -z-10 cursor-pointer"
              onClick={closeImage}
            />
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Personal Introduction Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 mb-6">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-amber-700 text-sm font-light tracking-widest">
              AGAFAY DESERT ADVENTURE
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              Quad Biking & Sunset Camel Trek
              <span className="block text-amber-700 mt-2">Ultimate Desert Experience</span>
            </h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30">
              <p className="text-slate-600 text-lg leading-relaxed">
                "This is the experience we love sharing with our guests - the perfect blend of adrenaline and tranquility 
                that captures the true spirit of the Moroccan desert. We've crafted this adventure to showcase the very best 
                of our beautiful Agafay Desert."
              </p>
              <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-serif text-sm">
                  Q
                </div>
                <div className="text-left">
                  <p className="text-slate-800 font-medium text-sm">Your Local Guides</p>
                  <p className="text-slate-500 text-xs">Born and raised in Marrakech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Experience Card - Updated Details */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-amber-200/50 transition-all duration-500">
            
            {/* Image Section with Story */}
            <div className="relative h-80 md:h-96 rounded-t-3xl overflow-hidden">
              {/* Main Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={images[0]}
                  alt="Quad biking adventure through Agafay Desert near Marrakech"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"

                    priority // For above-the-fold images
                 
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Personal Touch Overlays */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
                  <p className="text-slate-800 text-sm font-medium mb-1">📍 Agafay Desert</p>
                  <p className="text-slate-600 text-xs">Just 45 minutes from Marrakech</p>
                </div>
              </div>
              
              {/* Experience Mini Cards */}
              <div className="absolute top-6 left-6 bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium">
                🏆 Most Popular Experience
              </div>
              
              {/* Small Images in Bottom Right - Now Clickable */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={() => openImage(images[3])}
                  className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                aria-label="View quad biking sunset photo in full size"
                >
                  <Image
                    src={images[3]}
                    alt="Quad biking at sunset in Agafay Desert"
                    fill
                    className="object-cover"

                      priority // For above-the-fold images
                     
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
                  />


                </button>
                <button 
                  onClick={() => openImage(images[4])}
                  className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                aria-label="View sunset camel trekking photo in full size" // ADD THIS
                >
                  <Image
                    src={images[4]}
                    alt="Sunset camel trekking experience"
                    fill
                    className="object-cover"

                      priority // For above-the-fold images
                   
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
                  />
                </button>
              </div>
              
            </div>
            
            {/* Content Section - Updated with New Details */}
            <div className="p-8 md:p-10">
              {/* Header with Updated Information */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800 mb-2">
                    Agafay Desert Adventure
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Quad Biking & Sunset Camel Trek - 4-Hour Experience
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end space-x-2">
                    <span className="text-amber-600 text-3xl font-light">€55</span>
                    <span className="text-slate-400 text-sm line-through">€75</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">Save €20 per person • All included</p>
                </div>
              </div>
              
              {/* Updated Description */}
              <div className="mb-8">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Discover the magic of Morocco's Agafay Desert with an unforgettable combination of thrilling quad biking 
                  and traditional camel trekking. Experience the perfect blend of adventure and cultural immersion just 
                  outside Marrakech, complete with scenic viewpoints and authentic Berber hospitality.
                </p>
              </div>
              
              {/* Experience Breakdown - Updated */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Quad Biking Adventure */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🏍️</span>
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-semibold text-lg">Quad Biking Expedition</h4>
                      <p className="text-slate-600 text-sm">2-Hour Guided Adventure</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-15">
                    {[
                      '2 hours of guided quad biking through stunning landscapes',
                      'Premium safety equipment and professional instruction', 
                      'Scenic routes with panoramic photo opportunities',
                      'Explore hidden Berber villages and desert valleys'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                        <span className="text-slate-700/90 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Camel Trekking Experience */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🐫</span>
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-semibold text-lg">Camel Trekking</h4>
                      <p className="text-slate-600 text-sm">20-Minute Traditional Journey</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-15">
                    {[
                      '20-minute authentic camel ride through golden dunes',
                      'Breathtaking sunset views over Agafay Desert',
                      'Cultural immersion with local Berber guides',
                      'Traditional mint tea break included'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                        <span className="text-slate-700/90 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* What's Included - Updated */}
              <div className="bg-amber-50/80 rounded-2xl p-6 mb-8 border border-amber-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-amber-700 text-xl">✅</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-amber-800 font-semibold mb-3 text-lg">Everything Included</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      {[
                        'Hotel Pickup & Drop-off', 
                        'Professional Quad Bike Equipment', 
                        'Safety Gear & Instruction', 
                        '20-Minute Camel Ride', 
                        'Moroccan Mint Tea Break',
                        'Multilingual Guides'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></div>
                          <span className="text-amber-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-amber-600/80 text-xs mt-3 italic">
                      * Available in English, French, Spanish, and Arabic
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements Section - New Addition */}
              <div className="bg-slate-50/80 rounded-2xl p-6 mb-8 border border-slate-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-slate-700 text-xl">📝</span>
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-2 text-lg">What to Bring</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {[
                        'Comfortable outdoor clothing',
                        'Closed-toe shoes',
                        'Sun protection',
                        'Camera for memories',
                        'Minimum age: 15 (quad)',
                        'Minimum age: 15 (camel)'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Customization Note */}
              <div className="bg-blue-50/80 rounded-2xl p-6 mb-8 border border-blue-200/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-blue-700 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-blue-800 font-semibold mb-2 text-lg">Flexible Booking Options</h4>
                    <p className="text-blue-700/90 text-sm leading-relaxed mb-3">
                      Free cancellation up to 24 hours in advance • Reserve now & pay later • 
                      Multiple starting times available (9:00, 14:00, 16:00)
                    </p>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group"
                    >
                      <span>Contact us for custom adventures</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={"/contact-us"} 
                  className="flex-1 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 font-medium tracking-wide rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Reserve Now - €95</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                <Link
                  href="/contact-us"
                  className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white py-4 font-medium tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Ask Questions</span>
                  <span className="group-hover:scale-110 transition-transform">💬</span>
                </Link>

                <Link
                  href="/experiences/quad-biking-and-camel-ride-in-the-agafay-desert"
                  className="flex-1 border border-slate-300 text-slate-600 hover:bg-slate-100 py-4 font-medium tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Full Details</span>
                  <span className="group-hover:scale-110 transition-transform">📖</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Personal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '342+', label: 'Adventure Reviews', emoji: '⭐' },
            { number: '4.9/5', label: 'Guest Rating', emoji: '🎯' },
            { number: '45min', label: 'From Marrakech', emoji: '📍' },
            { number: 'All Levels', label: 'Welcome', emoji: '👥' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-amber-200/30 text-center group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.emoji}
              </div>
              <div className="text-2xl md:text-3xl font-light text-amber-700 mb-1 transition-all duration-300 group-hover:scale-105">
                {stat.number}
              </div>
              <div className="text-slate-600/80 text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience