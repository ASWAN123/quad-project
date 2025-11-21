import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

     const images = {
    hero: [
      '/images/1000092073.jpg', 
      '/images/1000091075.jpg', 
      '/images/1000091074.jpg', 
      '/images/1000090188.jpg'  
    ]}


  return (
   <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-50 via-amber-50 to-stone-100 pt-20 lg:pt-0">
     <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
         
         {/* Left Side - Image Gallery - Now on Top for Mobile */}
         <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] order-1">
           {/* Main Image */}
           <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
             <Image
               src={images.hero[0]}
               alt="Moroccan desert landscape"
               fill
               className="object-cover"
               priority
             />
           </div>
           
           {/* Quad Biking Image */}
           <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform translate-y-4 lg:translate-y-8">
             <Image
               src={images.hero[1]}
               alt="Quad biking adventure"
               fill
               className="object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3 lg:p-4">
               <span className="text-white text-xs lg:text-sm font-medium">QUAD BIKING</span>
             </div>
           </div>
           
           {/* Camel Trekking Image */}
           <div className="absolute top-1/2 -right-2 lg:-right-8 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -translate-y-1/2">
             <Image
               src={images.hero[2]}
               alt="Camel trekking experience"
               fill
               className="object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 lg:p-3">
               <span className="text-white text-xs lg:text-sm font-medium">CAMEL TREKKING</span>
             </div>
           </div>
         </div>
   
         {/* Right Side - Content - Now Below Images on Mobile */}
         <div className="text-left lg:pl-8 order-2 lg:order-2">
           {/* Badge */}
           <div className="mb-4 lg:mb-6">
             <span className="inline-flex text-amber-700 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] bg-amber-100/90 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-amber-200/60">
               LUXURY DESERT EXPERIENCES
             </span>
           </div>
           
           {/* Main Heading */}
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 lg:mb-6 leading-tight text-slate-800">
             WHERE
             <span className="block bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-1 lg:mt-2">
               DREAMS RIDE
             </span>
           </h1>
   
           {/* Description */}
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 lg:mb-8 font-light leading-relaxed max-w-lg">
             Experience the ultimate desert adventure with our combined quad biking and camel trekking tours in the heart of Morocco.
           </p>
   
           {/* CTA Buttons */}
           <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
             <button className="group relative bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 sm:px-8 lg:px-12 py-3 lg:py-4 text-base sm:text-lg font-medium tracking-widest rounded-full transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
               <span className="relative z-10">BEGIN JOURNEY</span>
               <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
             </button>
             
<Link
  href="/stories"
  className="flex items-center justify-center border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-700 px-6 sm:px-8 lg:px-12 py-3 lg:py-4 text-base sm:text-lg font-light tracking-widest rounded-full transition-all duration-300 hover:scale-105 bg-white/80"
>
  WATCH STORY
</Link>

           </div>
   
          {/* Quick Stats - Fixed Layout */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 text-slate-600">
        {/* Rating Stat */}
        <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-amber-500 text-sm lg:text-base">
            {'★'.repeat(5)}
            </div>
            <div>
            <div className="font-semibold text-slate-800 text-sm lg:text-base">4.9/5</div>
            <div className="text-xs lg:text-sm">500+ Reviews</div>
            </div>
        </div>
        
        {/* Adventurers Stat */}
        <div className="flex items-center space-x-3">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <span className="text-green-600 text-sm lg:text-lg">👥</span>
            </div>
            <div>
            <div className="font-semibold text-slate-800 text-sm lg:text-base">5,000+</div>
            <div className="text-xs lg:text-sm">Happy Adventurers</div>
            </div>
        </div>
        
        {/* Experience Stat */}
        <div className="flex items-center space-x-3">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
            <span className="text-blue-600 text-sm lg:text-lg">🏆</span>
            </div>
            <div>
            <div className="font-semibold text-slate-800 text-sm lg:text-base">12 Years</div>
            <div className="text-xs lg:text-sm">Excellence</div>
            </div>
        </div>
        </div>
   
           {/* Trust Indicators */}
           {/* <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-slate-200">
             <p className="text-slate-500 text-xs lg:text-sm mb-3 lg:mb-4">Trusted by adventurers worldwide</p>
             <div className="flex items-center space-x-4 lg:space-x-6 opacity-60">
               <div className="h-4 lg:h-6 bg-slate-300 rounded w-16 lg:w-20"></div>
               <div className="h-3 lg:h-4 bg-slate-300 rounded w-12 lg:w-16"></div>
               <div className="h-6 lg:h-8 bg-slate-300 rounded w-20 lg:w-24"></div>
             </div>
           </div> */}
         </div>
       </div>
     </div>
   
     {/* Scroll Indicator - Mobile Friendly */}
     <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
       <div className="flex flex-col items-center space-y-1 lg:space-y-2">
         <span className="text-slate-500 text-xs tracking-widest hidden sm:block">SCROLL TO EXPLORE</span>
         <div className="w-px h-12 lg:h-16 bg-linear-to-b from-amber-500 to-transparent"></div>
       </div>
     </div>
   </section>
  )
}

export default Hero