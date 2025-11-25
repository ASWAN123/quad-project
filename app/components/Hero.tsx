/* eslint-disable react/no-unescaped-entities */


"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Hero = () => {
  const images = {
    hero: [
      '/images/1000092073.jpg', 
      '/images/1000091075.jpg', 
      '/images/1000091074.jpg', 
      '/images/1000090188.jpg'  
    ]
  }

  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false)
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 pt-16">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/moroccan-pattern.png')] opacity-5 mix-blend-soft-light"></div>
      
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Section - MOVED TO TOP ON MOBILE */}
          <div className="relative order-1 lg:order-2 space-y-6">
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/90 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src={images.hero[0]}
                alt="Beautiful Moroccan desert landscape at sunset"
                width={600}
                height={400}
                className="w-full h-[300px] lg:h-[350px] object-cover"
                priority
              />
              {/* Overlay Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <p className="text-amber-800 font-medium text-sm">Agafay Desert • Marrakech</p>
              </div>
            </div>

            {/* Second Image - Side by side with experience cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Second Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-6 border-white/90 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={images.hero[1]}
                  alt="Quad biking adventure in the desert"
                  width={300}
                  height={200}
                  className="w-full h-[180px] object-cover"
                />
              </div>

              {/* Experience Cards Stack */}
              <div className="space-y-4">
                {/* Quad Biking Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-amber-200/50 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🏍️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Quad Biking</p>
                      <p className="text-slate-600 text-sm">Thrilling desert rides</p>
                    </div>
                  </div>
                </div>

                {/* Camel Trekking Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-amber-200/50 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-amber-700 text-xl">🐫</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Camel Trekking</p>
                      <p className="text-slate-600 text-sm">Traditional experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute top-4 right-4 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-sm font-medium">✨ Trusted Since 2024</p>
            </div>
          </div>

          {/* Text Content Section - MOVED TO BOTTOM ON MOBILE */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Welcome Note */}
            <div className="space-y-2">
              <p className="text-amber-800 text-lg font-light tracking-widest">
                WELCOME TO THE DESERT
              </p>
              <div className="w-20 h-0.5 bg-amber-600 mx-auto lg:mx-0"></div>
            </div>

            {/* Main Heading with Personal Touch */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-slate-800 leading-tight">
                Your Desert
                <span className="block text-amber-700 mt-2">Adventure Awaits</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                For over a decade, we've been sharing the magic of Moroccan deserts with travelers from around the world. Let us guide you through an unforgettable journey.
              </p>
            </div>

            {/* Personal Invitation */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-sm max-w-md mx-auto lg:mx-0">
              <p className="text-slate-700 text-sm lg:text-base leading-relaxed italic">
                "From the thrill of quad biking across golden dunes to the peaceful rhythm of camel trekking at sunset - every moment is crafted with care and local wisdom."
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-3 mt-4">
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-serif text-sm">
                  Q
                </div>
                <div>
                  <p className="text-slate-800 font-medium text-sm">Your Local Guides</p>
                  <p className="text-slate-500 text-xs">Quad Camel Marrakech Team</p>
                </div>
              </div>
            </div>

            {/* Action Buttons with Mouse Events */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                className="group bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2 relative overflow-hidden"
                onMouseEnter={() => setIsHoveredPrimary(true)}
                onMouseLeave={() => setIsHoveredPrimary(false)}
                onClick={() => window.location.href = '/contact-us'}
              >
                <span className={`relative z-10 transition-transform duration-300 ${isHoveredPrimary ? 'translate-x-1' : ''}`}>
                  Start Your Adventure
                </span>
                <span className={`relative z-10 transition-all duration-300 ${isHoveredPrimary ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-70'}`}>
                  →
                </span>
                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-linear-to-r from-white/20 to-white/10 transition-transform duration-500 ${isHoveredPrimary ? 'translate-x-0' : '-translate-x-full'}`}></div>
              </button>
              
              <Link
                href="/stories"
                className="group border border-amber-300 hover:border-amber-500 text-amber-700 hover:text-amber-800 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 bg-white/80 flex items-center justify-center space-x-2 relative overflow-hidden"
                onMouseEnter={() => setIsHoveredSecondary(true)}
                onMouseLeave={() => setIsHoveredSecondary(false)}
              >
                <span className={`relative z-10 transition-all duration-300 ${isHoveredSecondary ? 'scale-105' : ''}`}>
                  Hear Stories
                </span>
                <span className={`relative z-10 transition-all duration-300 ${isHoveredSecondary ? 'scale-110 rotate-12' : ''}`}>
                  📖
                </span>
                {/* Background color transition */}
                <div className={`absolute inset-0 bg-amber-50 transition-all duration-300 ${isHoveredSecondary ? 'opacity-100' : 'opacity-0'}`}></div>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 pt-6 text-sm text-slate-600">
              <a 
                href="https://wa.me/212627349254"
                className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-300"
              >
                <span className="text-green-600">💬</span>
                <span>Chat on WhatsApp</span>
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-amber-600">📞</span>
                <span>+212 612-345678</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Invitation - FIXED Z-INDEX */}
      <div className="absolute md:bottom-8 left-1/2 transform -translate-x-1/2  md:animate-bounce z-10">
        <div className="text-center space-y-2">
          <p className="text-slate-500 text-sm tracking-widest">DISCOVER MORE</p>
          <div className="w-px h-8 bg-linear-to-b from-amber-600 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero