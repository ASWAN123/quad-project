


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
              OUR SIGNATURE EXPERIENCE
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              The Desert Journey
              <span className="block text-amber-700 mt-2">We Love to Share</span>
            </h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30">
              <p className="text-slate-600 text-lg leading-relaxed">
                "This isn't just a tour - it's the same magical experience we share with our own friends and family when they visit Morocco. 
                We've combined the most thrilling and peaceful moments of desert life into one unforgettable day."
              </p>
              <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-serif text-sm">
                  Q
                </div>
                <div className="text-left">
                  <p className="text-slate-800 font-medium text-sm">Your Local Team</p>
                  <p className="text-slate-500 text-xs">Born and raised in Marrakech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Experience Card - More Personal */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-amber-200/50 transition-all duration-500">
            
            {/* Image Section with Story */}
            <div className="relative h-80 md:h-96 rounded-t-3xl overflow-hidden">
              {/* Main Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={images[0]}
                  alt="Quad biking adventure at sunset in Agafay Desert"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Personal Touch Overlays */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
                  <p className="text-slate-800 text-sm font-medium mb-1">📍 Our Backyard</p>
                  <p className="text-slate-600 text-xs">Agafay Desert, Marrakech</p>
                </div>
              </div>
              
              {/* Experience Mini Cards */}
              <div className="absolute top-6 left-6 bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium">
                ✨ Local's Favorite
              </div>
              
              {/* Small Images in Bottom Right - Now Clickable */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={() => openImage(images[3])}
                  className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <Image
                    src={images[3]}
                    alt="Quad biking at sunset"
                    fill
                    className="object-cover"
                  />
                </button>
                <button 
                  onClick={() => openImage(images[4])}
                  className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/80 shadow-lg transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <Image
                    src={images[4]}
                    alt="Sunset quad biking adventure"
                    fill
                    className="object-cover"
                  />
                </button>
              </div>
              
            </div>
            
            {/* Content Section - More Conversational */}
            <div className="p-8 md:p-10">
              {/* Header with Personal Touch */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-slate-800 mb-2">
                    Desert Magic Combo
                  </h3>
                  <p className="text-slate-600 text-lg">
                    The perfect day we'd plan for our closest friends
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end space-x-2">
                    <span className="text-amber-600 text-3xl font-light">€95</span>
                    <span className="text-slate-400 text-sm line-through">€110</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">Per person • All included</p>
                </div>
              </div>
              
              {/* Personal Description */}
              <div className="mb-8">
                <p className="text-slate-700 leading-relaxed text-lg">
                  We start with the excitement of quad biking through golden dunes - feeling the desert wind as you master the trails. 
                  Then, as the sun begins to set, we transition to the peaceful rhythm of camel trekking, sharing stories and mint tea 
                  just like our Berber ancestors have done for generations.
                </p>
              </div>
              
              {/* Experience Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Morning Adventure */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🌅</span>
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-semibold text-lg">Morning Thrills</h4>
                      <p className="text-slate-600 text-sm">Quad Biking Adventure</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-15">
                    {['2 hours of guided desert exploration', 'Learn from local experts', 'All safety equipment provided', 'Capture amazing photos'].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></div>
                        <span className="text-slate-700/90 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Evening Peace */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🌇</span>
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-semibold text-lg">Evening Magic</h4>
                      <p className="text-slate-600 text-sm">Camel Trek & Tea</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-15">
                    {['Gentle sunset camel ride', 'Traditional mint tea ceremony', 'Stories from Berber culture', 'Unforgettable golden hour'].map((item, index) => (
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
                    <h4 className="text-amber-800 font-semibold mb-3 text-lg">Everything You Get</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      {[
                        'Hotel Transfer', 
                        'Safety Equipment', 
                        'Bottled Water', 
                        'Professional Guide', 
                        'Desert Photos', 
                        'Local Snacks'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></div>
                          <span className="text-amber-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-amber-600/80 text-xs mt-3 italic">
                      * Mint tea available for purchase during camel trek
                    </p>
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
                    <h4 className="text-blue-800 font-semibold mb-2 text-lg">Want Something Different?</h4>
                    <p className="text-blue-700/90 text-sm leading-relaxed mb-3">
                      Prefer only quad biking? Just camel trekking? Smaller group? We customize every experience to match your dreams.
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
                <Link href={"/experience/Desert-Adventure"} className="flex-1 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 font-medium tracking-wide rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>Book This Combo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                
                <Link
                  href="/contact-us"
                  className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white py-4 font-medium tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Customize My Tour</span>
                  <span className="group-hover:scale-110 transition-transform">✨</span>
                </Link>

                <Link
                  href="/experiences/quad-biking-and-camel-ride-in-the-agafay-desert"
                  className="flex-1 border border-slate-300 text-slate-600 hover:bg-slate-100 py-4 font-medium tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>See All Options</span>
                  <span className="group-hover:scale-110 transition-transform">📖</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '5,000+', label: 'Happy Travelers', emoji: '😊' },
            { number: '12', label: 'Years of Stories', emoji: '📅' },
            { number: '98%', label: 'Come Back Smiling', emoji: '⭐' },
            { number: '4.9/5', label: 'Local Expertise', emoji: '🎯' }
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