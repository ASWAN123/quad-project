/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const Testimonials = () => {
  return (
  
    <section className="py-24 bg-linear-to-b from-amber-50 to-white relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-full h-32 bg-[url('/images/moroccan-pattern.png')] opacity-5"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
  
  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Personal Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 mb-6">
        <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
        <span className="text-amber-700 text-sm font-light tracking-widest">
          REAL STORIES, REAL PEOPLE
        </span>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
          Memories That
          <span className="block text-amber-700 mt-2">Last a Lifetime</span>
        </h2>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-sm">
          <p className="text-slate-600 text-lg leading-relaxed">
            "These aren't just reviews - they're the stories we're most proud of. The moments when strangers became friends, 
            and the desert worked its magic on another beautiful soul."
          </p>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-serif text-sm">
              Q
            </div>
            <div className="text-left">
              <p className="text-slate-800 font-medium text-sm">The Team</p>
              <p className="text-slate-500 text-xs">Your Desert Family in Marrakech</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Personal Testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah & Mark",
          location: "London, UK • Honeymoon",
          text: "We came for the adventure but left with so much more. abderrahim didn't just guide us - he shared his home, his stories, and made us feel like family. The moment we stopped for mint tea as the sun set over the dunes... that's when we fell in love with Morocco.",
          rating: 5,
          highlight: "Honeymoon Special",
          emoji: "💑",
          tour: "Sunset Combo Tour",
          months: "3 months ago"
        },
        {
          name: "Michael T.",
          location: "New York, USA • Solo Traveler", 
          text: "As a solo traveler, I was nervous. But from the first 'Ahlan' welcome, I felt at home. The quad biking got my heart racing, but the camel trek healed my soul. I came seeking adventure and found peace in the desert silence.",
          rating: 5,
          highlight: "Solo Adventure",
          emoji: "🧳",
          tour: "Desert Solo Experience",
          months: "1 month ago"
        },
        {
          name: "The Johnson Family", 
          location: "Sydney, Australia • Family Trip",
          text: "Our teenagers haven't stopped talking about the quad bikes! But what touched us most was how the team engaged our kids - teaching them Berber words, sharing local legends. It wasn't a tour, it was an education in joy.",
          rating: 5,
          highlight: "Family Magic",
          emoji: "👨‍👩‍👧‍👦",
          tour: "Family Adventure Day",
          months: "2 weeks ago"
        }
      ].map((testimonial, index) => (
        <div key={index} className="group relative">
          {/* Background Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-amber-200/30 relative z-10">
            {/* Highlight Badge */}
            <div className="absolute -top-3 left-6 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
              {testimonial.highlight}
            </div>
            
            {/* Tour Type */}
            <div className="flex items-center space-x-2 mb-4 pt-2">
              <span className="text-amber-600 text-lg">{testimonial.emoji}</span>
              <span className="text-slate-600 text-sm font-medium">{testimonial.tour}</span>
            </div>
            
            {/* Rating */}
            <div className="flex text-amber-400 mb-4 text-lg">
              {'★'.repeat(testimonial.rating)}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-slate-700 leading-relaxed mb-6 text-lg italic">
              "{testimonial.text}"
            </p>
            
            {/* Author Info */}
            <div className="border-t border-amber-100 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-800 text-lg">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-xs">{testimonial.months}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-amber-200/20 rounded-full blur-xl group-hover:bg-amber-300/30 transition-all duration-500"></div>
        </div>
      ))}
    </div>

    {/* Personal Call-to-Action */}
    <div className="text-center mt-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/30 shadow-sm max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-serif text-slate-800 mb-4">
          Ready to Write Your Own Story?
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Every adventure begins with a conversation. Tell us your dreams, and we'll make them come alive in the desert.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group">
            <span>Start Your Adventure</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <Link
            href="/stories"
            className="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Read More Stories</span>
            <span className="group-hover:scale-110 transition-transform">📖</span>
          </Link>
        </div>
      </div>
    </div>

  </div>
</section>

  )
}

export default Testimonials