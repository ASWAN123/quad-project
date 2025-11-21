/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
// pages/activity.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

export default function ActivityDetails() {


  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');

  const activity = {
    id: 1,
    title: "Desert Adventure Combo",
    subtitle: "Quad Biking + Camel Trekking Experience",
    description: "Experience the ultimate Moroccan desert adventure with our signature combo tour. Begin with an exhilarating quad biking session through golden dunes, then transition to a serene camel trek as the sun sets over the Sahara. This carefully curated experience combines adrenaline-pumping excitement with authentic cultural immersion.",
    fullDescription: `
      Our Desert Adventure Combo is the perfect way to experience the magic of the Moroccan desert. The journey begins with pickup from your Marrakech accommodation in our comfortable, air-conditioned vehicles.

      **Quad Biking Adventure (2-3 hours):**
      - Professional safety briefing and equipment fitting
      - Guided ATV tour through stunning desert landscapes
      - Multiple photo stops at scenic viewpoints
      - Experience the thrill of dune riding
      - Suitable for all skill levels with expert instruction

      **Traditional Berber Break:**
      - Refresh with authentic Moroccan mint tea
      - Sample traditional Berber snacks
      - Opportunity to interact with local guides

      **Sunset Camel Trekking (1.5-2 hours):**
      - Gentle camel ride through ancient caravan routes
      - Breathtaking sunset views over the Sahara
      - Cultural insights from Berber guides
      - Peaceful, meditative desert experience

      **Tour Concludes:**
      - Return transfer to your accommodation
      - Professional photos delivered digitally
      - Memories that last a lifetime
    `,
    price: 95,
    originalPrice: 110,
    duration: "4-5 hours total",
    groupSize: "Small groups (2-8 people)",
    difficulty: "Moderate - Suitable for most fitness levels",
    includes: [
      "Hotel pickup and drop-off in Marrakech",
      "Professional quad biking equipment and safety gear",
      "Experienced English/French speaking guides",
      "Traditional camel trekking experience",
      "Authentic Berber tea ceremony",
      "Bottled water and light refreshments",
      "Professional photography service",
      "All safety equipment and insurance",
      "Sunset viewing experience"
    ],
    requirements: [
      "Valid driver's license for quad biking (if driving)",
      "Comfortable clothing and closed-toe shoes",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Camera or smartphone for photos",
      "Moderate physical fitness level",
      "Minimum age: 12 years (quad biking)",
      "Minimum age: 6 years (camel trekking)"
    ],
    images: [
      "/images/1000092073.jpg",
      "/images/1000091075.jpg",
      "/images/1000091074.jpg",
      "/images/1000090188.jpg",
      "/images/1000090187.jpg",
      "/images/1000090185.jpg"
    ],
    rating: 4.9,
    reviews: 342,
    featured: true,
    bestSeller: true,
    availability: ["09:00", "14:00", "16:00"],
    meetingPoint: "Your accommodation in Marrakech or designated meeting point"
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah & Mark",
      location: "London, UK",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely incredible experience! The quad biking was thrilling and the camel trek at sunset was magical. Our guide Ahmed was knowledgeable and made us feel safe throughout. The tea break with the Berber family was a highlight!",
      verified: true
    },
    {
      id: 2,
      name: "Michael T.",
      location: "New York, USA",
      rating: 5,
      date: "2024-01-12",
      comment: "Perfect combination of adventure and culture. The transition from high-energy quad biking to peaceful camel riding was seamless. Professional equipment and excellent guides. Worth every euro!",
      verified: true
    },
    {
      id: 3,
      name: "The Johnson Family",
      location: "Sydney, Australia",
      rating: 5,
      date: "2024-01-08",
      comment: "Our teenagers loved the quad biking, and we all enjoyed the camel ride. The guides were fantastic with our kids and the safety standards were impressive. Beautiful photos included too!",
      verified: true
    }
  ];

  const calculateSavings = () => activity.originalPrice - activity.price;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50">
      <Head>
        <title>{activity.title} | QuadCamelMarrakesh Adventures</title>
        <meta name="description" content={activity.description} />
      </Head>

    <Header />

      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
            <a href="/" className="hover:text-amber-600">Home</a>
            <span>›</span>
            <a href="/activities" className="hover:text-amber-600">Experiences</a>
            <span>›</span>
            <span className="text-slate-700">{activity.title}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
            <div>
              <span className="text-amber-600 text-sm font-medium tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
                DESERT ADVENTURE
              </span>
              <h1 className="text-3xl md:text-5xl font-light text-slate-800 mt-4 mb-2">
                {activity.title}
              </h1>
              <p className="text-xl text-slate-600 mb-4">{activity.subtitle}</p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {'★'.repeat(5).split('').map((star, index) => (
                    <span key={index} className="text-amber-500 text-xl">{star}</span>
                  ))}
                  <span className="text-slate-700 font-semibold ml-2">{activity.rating}</span>
                </div>
                <span className="text-slate-500">•</span>
                <span className="text-slate-600">{activity.reviews} reviews</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-600">{activity.duration}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-amber-600">€{activity.price}</span>
                <span className="text-slate-500 line-through text-xl">€{activity.originalPrice}</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save €{calculateSavings()}
                </span>
              </div>
              {activity.bestSeller && (
                <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  🏆 BEST SELLER
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2">
                <div className="relative h-80 rounded-3xl overflow-hidden">
                  <Image
                    src={activity.images[0]}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {activity.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${activity.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-slate-200 mb-8">
              <div className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'itinerary', label: 'Itinerary' },
                  { id: 'includes', label: 'What\'s Included' },
                  { id: 'reviews', label: `Reviews (${activity.reviews})` }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`pb-4 px-1 font-medium transition-colors ${
                      selectedTab === tab.id
                        ? 'text-amber-600 border-b-2 border-amber-600'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="prose prose-lg max-w-none">
              {selectedTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-light text-slate-800 mb-4">Experience Overview</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{activity.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-amber-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <span className="text-amber-600 mr-2">🏍️</span>
                        Quad Biking Highlights
                      </h4>
                      <ul className="text-slate-600 space-y-2">
                        <li>• 2-3 hours of guided ATV adventure</li>
                        <li>• Premium safety equipment provided</li>
                        <li>• Scenic desert routes with photo stops</li>
                        <li>• Suitable for beginners and experienced riders</li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <span className="text-amber-600 mr-2">🐫</span>
                        Camel Trekking Highlights
                      </h4>
                      <ul className="text-slate-600 space-y-2">
                        <li>• 1.5-2 hours of peaceful camel riding</li>
                        <li>• Traditional Berber tea ceremony</li>
                        <li>• Sunset views over the Sahara</li>
                        <li>• Cultural immersion with local guides</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'itinerary' && (
                <div>
                  <h3 className="text-2xl font-light text-slate-800 mb-6">Tour Itinerary</h3>
                  <div className="space-y-6">
                    {activity.fullDescription.split('\n\n').map((section, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="text-slate-600 whitespace-pre-line leading-relaxed">
                          {section}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'includes' && (
                <div>
                  <h3 className="text-2xl font-light text-slate-800 mb-6">What's Included</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 text-lg">Included Services</h4>
                      <ul className="space-y-3">
                        {activity.includes.map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 text-lg">Requirements</h4>
                      <ul className="space-y-3">
                        {activity.requirements.map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-light text-slate-800 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-semibold text-slate-800">{review.name}</div>
                            <div className="text-slate-500 text-sm">{review.location}</div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {'★'.repeat(review.rating)}
                            <span className="text-slate-400 text-sm ml-2">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{review.comment}</p>
                        {review.verified && (
                          <div className="flex items-center space-x-2 mt-3 text-green-600 text-sm">
                            <span>✓</span>
                            <span>Verified Booking</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 sticky top-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Book Your Adventure</h3>
              
              <div className="space-y-4">
                {/* Date Selection */}
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Select Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Choose a time</option>
                    {activity.availability.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Number of Guests</label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-amber-500"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{guests}</span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-amber-500"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">€{activity.price} × {guests}</span>
                    <span className="font-semibold">€{activity.price * guests}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600 mb-4">
                    <span>You save</span>
                    <span>€{calculateSavings() * guests}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span>€{activity.price * guests}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg">
                  Book Now - €{activity.price * guests}
                </button>

                {/* Trust Badges */}
                <div className="text-center space-y-2 pt-4 border-t border-slate-200">
                  <div className="flex justify-center space-x-4 text-slate-500 text-sm">
                    <span>🛡️ Free Cancellation</span>
                    <span>✓ Best Price Guarantee</span>
                  </div>
                  <div className="text-slate-400 text-xs">
                    Instant confirmation • No booking fees
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Point */}
            <div className="bg-amber-50 rounded-2xl p-6 mt-6 border border-amber-200">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                <span className="text-amber-600 mr-2">📍</span>
                Meeting Point
              </h4>
              <p className="text-slate-600 text-sm">{activity.meetingPoint}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}