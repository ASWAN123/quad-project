/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const TripAdvisorTestimonials = () => {
  const tripAdvisorReviews = [
    {
      name: "Andrea S",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/b8/default-avatar-2020-22.jpg?w=100&h=-1&s=1",
      date: "Dec 2025",
      tripType: "Couples",
      rating: 5,
      title: "Amazing experience and great guide",
      text: "Great experience driving in the desert at sunset! Our guide, Abderrahim, has been the best showing us around and taking lots of pictures of us into action! Highly recommended!!",
      activity: "Riding in the Agafay Desert",
      image: null
    },
    {
      name: "Avery B",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/13/85/c6/avery-b.jpg?w=100&h=-1&s=1",
      contributions: "11 contributions",
      date: "Oct 2025",
      tripType: "Solo",
      rating: 5,
      title: "Excellent desert experience",
      text: "I had such a fun time exploring the Agafay desert. My host, Abderrahim was excellent and very hospitable. I learned about the desert, culture, and was given excellent recommendations about more to do. I highly recommend this excursion to anyone considering it. Beautiful views, great people, and an amazing time in general. Thank you for a fantastic time.",
      activity: "Agafay Desert Exploration",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ee/6e/bc/caption.jpg?w=2400&h=2400&s=1"
    },
    {
      name: "Saray E",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/7c/01/default-avatar-2020-5.jpg?w=100&h=-1&s=1",
      contributions: "1 contribution",
      date: "Dec 2025",
      tripType: "Friends",
      rating: 5,
      title: "Quad con el guía Abderrahim",
      text: "We spent a wonderful afternoon riding Quad, the guide Abderrahim is always willing to help with everything, he is a kind and funny person, which made the experience much more enjoyable for us. In addition, he is very attentive in case we need help. This experience made us spend a fun afternoon with friends and made us explore Agafay. I would definitely repeat riding Quad with Abderrahim.",
      activity: "Quad Biking Adventure",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ec/31/dc/caption.jpg?w=2400&h=2400&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ec/31/db/caption.jpg?w=2400&h=2400&s=1"
      ]
    }
  ]

  return (
    <section className="py-24 bg-linear-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* TripAdvisor Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 mb-6">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#00AA6C]">
                <path fill="currentColor" d="M12,0C5.372,0,0,5.373,0,12s5.372,12,12,12s12-5.373,12-12S18.628,0,12,0z M10.64,14.669 c-0.202,0.537-0.664,0.537-0.864,0L8.292,11.6H5.889c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0 l1.484,3.069h2.403c0.564,0,0.816,0.406,0.564,0.906L10.64,14.669z M18.675,14.669c-0.202,0.537-0.664,0.537-0.865,0l-1.484-3.069 h-2.403c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0l1.484,3.069h2.403 c0.564,0,0.816,0.406,0.564,0.906L18.675,14.669z"/>
              </svg>
            </div>
            <span className="text-[#00AA6C] text-sm font-semibold tracking-widest">
              TRIPADVISOR EXCELLENCE
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-6 leading-tight">
              Real Travelers,
              <span className="block text-[#00AA6C] mt-2">Real Experiences</span>
            </h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-sm">
              <p className="text-slate-600 text-lg leading-relaxed">
                "Don't just take our word for it. Read what fellow travelers are saying about their experiences with Abderrahim and our team in the Agafay Desert."
              </p>
              <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-linear-to-br from-[#00AA6C] to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div className="text-left">
                  <p className="text-slate-800 font-medium text-sm">Abderrahim</p>
                  <p className="text-slate-500 text-xs">Your Desert Guide in Marrakech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TripAdvisor Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {tripAdvisorReviews.map((review, index) => (
            <div key={index} className="group relative h-fit">
              {/* TripAdvisor Review Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-200 relative z-10 h-full">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">{review.name}</h4>
                      {review.contributions && (
                        <p className="text-slate-500 text-xs">{review.contributions}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex text-[#00AA6C] text-lg mb-1">
                      {'★'.repeat(review.rating)}
                    </div>
                    <span className="text-xs text-slate-500">{review.date}</span>
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="font-bold text-xl text-slate-900 mb-4">{review.title}</h3>

                {/* Activity Badge */}
                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  <span>🏜️</span>
                  <span>{review.activity}</span>
                </div>

                {/* Trip Type */}
                <div className="mb-4">
                  <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {review.tripType} Trip
                  </span>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <p className="text-slate-700 leading-relaxed mb-3 text-base">
                    {review.text}
                  </p>
                  {review.englishTranslation && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-slate-600 text-sm italic">
                        <span className="font-semibold">English:</span> {review.englishTranslation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Review Images */}
                {review.image && (
                  <div className="mb-6">
                    <img 
                      src={review.image} 
                      alt="Desert experience"
                      className="w-full h-48 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                )}

                {review.images && (
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {review.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`Desert experience ${idx + 1}`}
                        className="w-full h-32 object-cover rounded-xl"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                {/* Verified TripAdvisor Badge */}
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-[#00AA6C]" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Verified TripAdvisor Review</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl group-hover:bg-emerald-300/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* TripAdvisor Rating Summary */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <div className="flex text-[#00AA6C] text-2xl">
                  {'★'.repeat(5)}
                </div>
                <span className="text-3xl font-bold text-slate-800">5.0</span>
              </div>
              <p className="text-slate-600">Based on 127+ reviews on TripAdvisor</p>
              <p className="text-sm text-slate-500 mt-2">Quad Camel Marrakech - Agafay Desert Experiences</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00AA6C]">98%</div>
                <div className="text-sm text-slate-600">Excellent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">2%</div>
                <div className="text-sm text-slate-600">Very Good</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00AA6C]/10 to-emerald-100/50 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/30 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              See What Everyone's Talking About
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of satisfied travelers who've experienced the magic of the Agafay Desert with our expert guide Abderrahim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g293734-d34046054-Reviews-Quad_Camel_Marrakesh-Marrakech_Marrakech_Safi.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#00AA6C] to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-3 group w-full sm:w-auto"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,0C5.372,0,0,5.373,0,12s5.372,12,12,12s12-5.373,12-12S18.628,0,12,0z M10.64,14.669 c-0.202,0.537-0.664,0.537-0.864,0L8.292,11.6H5.889c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0 l1.484,3.069h2.403c0.564,0,0.816,0.406,0.564,0.906L10.64,14.669z M18.675,14.669c-0.202,0.537-0.664,0.537-0.865,0l-1.484-3.069 h-2.403c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0l1.484,3.069h2.403 c0.564,0,0.816,0.406,0.564,0.906L18.675,14.669z"/>
                </svg>
                <span>Read All Reviews on TripAdvisor</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <Link
                href="/contact-us"
                className="border-2 border-[#00AA6C] text-[#00AA6C] hover:bg-[#00AA6C] hover:text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 group w-full sm:w-auto"
              >
                <span>Book Your Desert Adventure</span>
                <span className="group-hover:scale-110 transition-transform">🏜️</span>
              </Link>
            </div>
            
            <p className="text-sm text-slate-500 mt-6">
              Clicking "Read All Reviews" will take you to our official TripAdvisor page
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripAdvisorTestimonials