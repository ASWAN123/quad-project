/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
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
    title: "Marrakech:Quad Biking and Camel Ride in the Agafay Desert",
    subtitle: "Desert Adventure in Marrakech",
    description: "Experience the magic of the Agafay desert with our authentic quad biking and camel trekking adventure. Feel the thrill of riding through golden dunes, then embrace the peaceful rhythm of a traditional camel ride as the sun paints the sky with incredible colors.",
    fullDescription: `
      **Morning Adventure: Quad Biking (2-3 hours)**
      - Hotel pickup from your Marrakech accommodation
      - Safety briefing and equipment fitting
      - Guided ATV tour through stunning desert landscapes
      - Multiple photo stops at scenic viewpoints
      - Experience the thrill of dune riding
      - Suitable for all skill levels

      **Desert Break**
      - Refresh with bottled water
      - Rest and enjoy the desert scenery

      **Evening Magic: Camel Trekking (1.5-2 hours)**
      - Gentle camel ride through ancient caravan routes
      - Breathtaking sunset views over Agafay Desert
      - Cultural insights from Berber guides
      - Peaceful, meditative desert experience

      **Return Journey**
      - Comfortable transfer back to your accommodation
      - Professional photos of your experience
    `,
    price: 95,
    originalPrice: 110,
    duration: "Full Day Experience",
    groupSize: "Small groups (2-8 people)",
    difficulty: "All levels welcome",
    includes: [
      "Hotel pickup and drop-off in Marrakech",
      "Professional quad biking equipment",
      "Safety gear and instruction",
      "Camel trekking experience", 
      "Bottled water during the tour",
      "Professional guide services",
      "All safety equipment",
      "Desert photography"
    ],
    requirements: [
      "Comfortable clothing and closed-toe shoes",
      "Sun protection (hat, sunglasses)",
      "Camera for personal photos",
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
    reviews: 342,
    featured: true,
    bestSeller: true,
    availability: ["09:00", "14:00", "16:00"],
    meetingPoint: "Your accommodation in Marrakech"
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah & Mark",
      location: "London, UK",
      date: "2024-01-15",
      comment: "Absolutely incredible experience! The quad biking was thrilling and the camel trek at sunset was magical. Our guide made us feel safe throughout the entire adventure.",
    },
    {
      id: 2, 
      name: "Michael T.",
      location: "New York, USA",
      date: "2024-01-12",
      comment: "Perfect combination of adventure and culture. The transition from high-energy quad biking to peaceful camel riding was seamless. Professional equipment and excellent guides.",
    },
    {
      id: 3,
      name: "The Johnson Family", 
      location: "Sydney, Australia",
      date: "2024-01-08",
      comment: "Our teenagers loved the quad biking, and we all enjoyed the camel ride. The guides were fantastic with our kids and the safety standards were impressive.",
    }
  ];

  const calculateSavings = () => activity.originalPrice - activity.price;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{activity.title} | QuadCamelMarrakesh</title>
        <meta name="description" content={activity.description} />
      </Head>

      <Header />

      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 to-white border-b border-amber-100 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
            <span>›</span>
            <a href="/experiences" className="hover:text-amber-600 transition-colors">Experiences</a>
            <span>›</span>
            <span className="text-slate-700">Desert Adventure</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 mb-4">
                <span className="text-amber-700 text-sm font-light tracking-widest">
                  AGAFAY DESERT EXPERIENCE
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 leading-tight">
                {activity.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">{activity.description}</p>
              
              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600">⏱️</span>
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600">👥</span>
                  <span>{activity.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-amber-600">⭐</span>
                  <span>{activity.reviews} adventures</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="flex items-center space-x-3 mb-3 justify-center lg:justify-end">
                <span className="text-3xl font-light text-amber-600">€{activity.price}</span>
                <span className="text-slate-400 line-through text-xl">€{activity.originalPrice}</span>
              </div>
              <div className="text-green-600 text-sm mb-4">
                Save €{calculateSavings()} per person
              </div>
              {activity.bestSeller && (
                <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
                  🏆 Most Popular Experience
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="col-span-2">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-amber-100">
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
                <div key={index} className="relative h-40 rounded-2xl overflow-hidden shadow-md border border-amber-100">
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
            <div className="border-b border-amber-100 mb-8">
              <div className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Experience Details' },
                  { id: 'itinerary', label: 'Your Day' },
                  { id: 'includes', label: 'What\'s Included' },
                  { id: 'reviews', label: 'Adventure Stories' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`pb-4 px-1 font-medium transition-colors border-b-2 ${
                      selectedTab === tab.id
                        ? 'text-amber-600 border-amber-600'
                        : 'text-slate-500 hover:text-slate-700 border-transparent'
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
                <div className="space-y-8">
                  <div className="bg-amber-50/50 rounded-3xl p-8 border border-amber-100">
                    <h3 className="text-2xl font-serif text-slate-800 mb-6">About This Adventure</h3>
                    <p className="text-slate-700 leading-relaxed text-lg mb-6">
                      This is the experience we love sharing with our guests - the perfect blend of adrenaline and tranquility 
                      that captures the true spirit of the Moroccan desert.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <span className="text-amber-700 text-xl">🏍️</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">Quad Biking</h4>
                            <p className="text-slate-600 text-sm">Thrilling desert exploration</p>
                          </div>
                        </div>
                        <ul className="text-slate-600 space-y-2 text-sm ml-16">
                          <li>• 2-3 hours of guided ATV adventure</li>
                          <li>• Premium safety equipment provided</li>
                          <li>• Scenic desert routes with photo stops</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <span className="text-amber-700 text-xl">🐫</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">Camel Trekking</h4>
                            <p className="text-slate-600 text-sm">Peaceful desert journey</p>
                          </div>
                        </div>
                        <ul className="text-slate-600 space-y-2 text-sm ml-16">
                          <li>• 1.5-2 hours of camel riding</li>
                          <li>• Sunset views over Agafay Desert</li>
                          <li>• Cultural immersion with local guides</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'itinerary' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-slate-800 mb-6">Your Desert Day</h3>
                  {activity.fullDescription.split('\n\n').map((section, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-amber-100">
                      <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {section}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'includes' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-6">Everything We Provide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800 text-lg flex items-center">
                          <span className="text-amber-600 mr-3">✅</span>
                          Included in Your Adventure
                        </h4>
                        <ul className="space-y-3">
                          {activity.includes.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800 text-lg flex items-center">
                          <span className="text-amber-600 mr-3">📝</span>
                          What to Bring
                        </h4>
                        <ul className="space-y-3">
                          {activity.requirements.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-serif text-slate-800 mb-6">Adventure Stories</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white rounded-2xl p-6 border border-amber-100">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-semibold text-slate-800 text-lg">{review.name}</div>
                            <div className="text-slate-500">{review.location}</div>
                          </div>
                          <div className="text-slate-400 text-sm">{review.date}</div>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif text-slate-800 mb-2">Book Your Adventure</h3>
                <p className="text-slate-600">Let's create your desert memory</p>
              </div>
              
              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Choose Your Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-4 border border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Preferred Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-4 border border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors"
                  >
                    <option value="">Select a time</option>
                    {activity.availability.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Number of Adventurers</label>
                  <div className="flex items-center justify-between bg-amber-50/50 rounded-xl p-4 border border-amber-200">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border border-amber-300 flex items-center justify-center hover:bg-amber-100 transition-colors text-amber-600"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold text-slate-800">{guests}</span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-10 h-10 rounded-full border border-amber-300 flex items-center justify-center hover:bg-amber-100 transition-colors text-amber-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t border-amber-100 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">€{activity.price} × {guests}</span>
                    <span className="font-semibold text-slate-800">€{activity.price * guests}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span>Your savings</span>
                    <span>€{calculateSavings() * guests}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg pt-3 border-t border-amber-100">
                    <span>Total amount</span>
                    <span className="text-amber-600">€{activity.price * guests}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                  Reserve Your Spot
                </button>

                {/* Simple Assurance */}
                <div className="text-center space-y-2 pt-4 border-t border-amber-100">
                  <div className="text-slate-500 text-sm">
                    ✓ Free hotel pickup<br/>
                    ✓ Best price guaranteed<br/>
                    ✓ Instant confirmation
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Point */}
            <div className="bg-amber-50 rounded-2xl p-6 mt-6 border border-amber-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-amber-700">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Meeting Point</h4>
                  <p className="text-slate-600 text-sm">{activity.meetingPoint}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}