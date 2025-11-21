/* eslint-disable react/no-unescaped-entities */
"use client";
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Hero from './components/Hero';
import Link from 'next/link';

export default function PremiumAdventures() {

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

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50">
      <Head>
        <title>quadCamelMarrakesh | Luxury Desert Experiences</title>
        <meta name="description" content="Premium quad biking and camel trekking in Marrakech" />
      </Head>




    <Hero/>



      {/* Combined Experience Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-amber-600 text-sm font-light tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              DESERT ADVENTURE TOUR
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-800 mt-6 mb-8">
              Quad & Camel
              <span className="block bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Combo Experience</span>
            </h2>
          </div>

          {/* Combined Experience Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-white to-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-3xl">
              
              {/* Image Collage Header */}
              <div className="relative h-96 rounded-t-3xl overflow-hidden">
                {/* Main Image */}
                <div className="absolute inset-0">
                  <Image
                    src={images.hero[0]}
                    alt="Desert adventure landscape"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Overlay Images */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src={images.hero[1]}
                    alt="Quad biking"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute bottom-6 right-6 w-32 h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src={images.hero[2]}
                    alt="Camel trekking"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute top-6 right-6 bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium z-20 shadow-lg">
                  MOST POPULAR TOUR
                </div>
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-light text-slate-800">DESERT ADVENTURE COMBO</h3>
                  <div className="text-right">
                    <span className="text-amber-600 text-2xl font-light block">€95</span>
                    <span className="text-slate-500 text-sm line-through">€110</span>
                  </div>
                </div>
                
                <p className="text-slate-600/80 text-lg leading-relaxed mb-8">
                  Experience the best of both worlds with our signature desert tour. Start with an exhilarating quad biking adventure through golden dunes, 
                  then transition to a peaceful camel trek as the sun sets over the Sahara. Complete with traditional Berber tea ceremony and professional photography.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Quad Biking Features */}
                  <div className="space-y-4">
                    <h4 className="text-slate-800 font-semibold text-lg flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      Quad Biking Adventure
                    </h4>
                    <div className="space-y-3">
                      {['2-Hour Guided ATV Tour', 'Premium Safety Equipment', 'Desert Dunes Exploration', 'Professional Instruction'].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span className="text-slate-700/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Camel Trekking Features */}
                  <div className="space-y-4">
                    <h4 className="text-slate-800 font-semibold text-lg flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      Camel Trekking Experience
                    </h4>
                    <div className="space-y-3">
                      {['Sunset Camel Ride', 'Traditional Berber Guides', 'Mint Tea Ceremony', 'Cultural Immersion'].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span className="text-slate-700/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-200">
                  <h4 className="text-amber-800 font-semibold mb-3 flex items-center">
                    <span className="text-amber-600 mr-2">⭐</span>
                    What's Included
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-amber-700">
                    {['Hotel Transfer', 'Safety Equipment', 'Berber Tea', 'Photos', 'Guide', 'Water', 'Snacks', 'Insurance'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <button className="flex-1 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 font-medium tracking-widest rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    BOOK COMBO TOUR
                  </button>

                  <Link
                    href="/experiences"
                    className="flex flex-1 items-center justify-center border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white py-4 font-medium tracking-widest rounded-xl transition-all duration-300"
                  >
                    VIEW DETAILS
                  </Link>

                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20">
            {[
              { number: '5K+', label: 'Adventures Completed' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '12', label: 'Years Excellence' },
              { number: '4.9', label: 'Star Rating' }
            ].map((stat, index) => (
              <div key={index} className="group bg-linear-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200">
                <div className="text-4xl md:text-5xl font-light bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-slate-600/70 text-sm tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-linear-to-b from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-amber-600 text-sm font-light tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              DESERT GALLERY
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-800 mt-6">
              Moments
              <span className="block bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Captured</span>
            </h2>
          </div>

          {/* Image Collage Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.gallery.slice(0, 8).map((src, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Desert adventure ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-light">View Photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Images Button */}
          <div className="text-center mt-12">
            <button className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 font-medium tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              VIEW MORE PHOTOS
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-amber-600 text-sm font-light tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              TESTIMONIALS
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-slate-800 mt-6 mb-8">
              Stories From
              <span className="block bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Our Adventurers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mark",
                location: "London, UK",
                text: "The quad biking experience was absolutely incredible! Our guide made sure we had an unforgettable time. The sunset views were breathtaking.",
                rating: 5
              },
              {
                name: "Michael T.",
                location: "New York, USA", 
                text: "The camel trek was the highlight of our Morocco trip. So peaceful and authentic. The traditional tea break was magical.",
                rating: 5
              },
              {
                name: "The Johnson Family", 
                location: "Sydney, Australia",
                text: "Perfect family adventure! Our teenagers loved the quad biking, and we all enjoyed the camel ride. Professional and safe throughout.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-linear-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200">
                <div className="flex text-amber-400 mb-4 text-lg">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-slate-600/80 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-linear-to-br from-amber-500 to-amber-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <span className="text-amber-100 text-sm font-light tracking-[0.3em] bg-amber-600/30 px-4 py-2 rounded-full border border-amber-400/30">
            READY TO BEGIN?
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white mt-6 mb-8">
            Your Desert
            <span className="block text-amber-100">Awaits</span>
          </h2>
          
          <p className="text-xl text-amber-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of adventurers who have discovered the magic of Morocco with us. Your unforgettable journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white hover:bg-amber-50 text-amber-600 px-16 py-5 text-lg font-medium tracking-widest rounded-full transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-amber-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </button>
            
            <button className="border border-amber-300 hover:border-white text-amber-100 hover:text-white px-12 py-5 text-lg font-light tracking-widest rounded-full transition-all duration-300 bg-white/10 backdrop-blur-sm">
              CONTACT US
            </button>
          </div>
        </div>
      </section>




    </div>
  );
}