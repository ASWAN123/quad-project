/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from 'react';
import Image from 'next/image';
import CTASection from '@/app/components/CTASection';

export default function ActivityDetails() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const activity = {
    id: 1,
    title: "Marrakech: Quad Biking and Camel Ride in the Agafay Desert",
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
      "/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg",
      "/images/Sunset-Quad-Biking-Adventure.jpeg",
      "/images/Desert-Camel-Ride.jpeg",
      "/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg",
      "/images/Desert-Quad-Biking-Adventure.jpeg",
      "/images/Agafay-Desert-Camel-Trek.jpeg"
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

      {/* Header */}
      <div className="bg-linear-to-br from-amber-50 to-white border-b border-amber-100 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-6">
            <a href="/experiences/quad-biking-and-camel-ride-in-the-agafay-desert" className="hover:text-amber-600 transition-colors">Home</a>
            <span>›</span>
            <a href="" className="hover:text-amber-600 transition-colors">Experiences</a>
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-4 leading-tight">
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
        {/* Main Content - No Sidebar */}
        <div className="space-y-16">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Large Image */}
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden border border-amber-100 group">
                <Image
                  src={activity.images[0]}
                  alt="Quad biking adventure at sunset in Agafay Desert"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
                  <p className="text-amber-800 font-medium">Featured Adventure</p>
                </div>
              </div>
            </div>
            
            {/* Side Images Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {activity.images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative h-44 lg:h-48 rounded-2xl overflow-hidden border border-amber-100 group">
                  <Image
                    src={image}
                    alt={`Desert adventure ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
              {/* Show More Overlay */}
              <div className="relative h-44 lg:h-48 rounded-2xl overflow-hidden border border-amber-100 bg-amber-50 group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">+{activity.images.length - 3}</span>
                    </div>
                    <p className="text-amber-700 font-medium text-sm">More Photos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Bar */}
          <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-serif mb-2">Ready for Your Desert Adventure?</h3>
                <p className="text-amber-100 text-lg">Join {activity.reviews}+ happy adventurers</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  Book Now - €{activity.price}
                </button>
                <a 
                  href="https://wa.me/212627349254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Ask Questions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-amber-100">
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

          {/* Booking Form Modal */}
          {showBookingForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-serif text-slate-800">Book Your Adventure</h3>
                  <button 
                    onClick={() => setShowBookingForm(false)}
                    className="text-slate-400 hover:text-slate-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">Choose Your Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors text-black text-lg"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">Preferred Time</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors text-black text-lg"
                    >
                      <option value="">Select a time</option>
                      {activity.availability.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">Number of Adventurers</label>
                    <div className="flex items-center justify-between bg-amber-50/50 rounded-xl p-4 border-2 border-amber-200">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-12 h-12 rounded-full border-2 border-amber-300 flex items-center justify-center hover:bg-amber-100 transition-colors text-amber-600 text-xl font-bold"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-slate-800 px-6">{guests}</span>
                      <button
                        onClick={() => setGuests(guests + 1)}
                        className="w-12 h-12 rounded-full border-2 border-amber-300 flex items-center justify-center hover:bg-amber-100 transition-colors text-amber-600 text-xl font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-amber-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-slate-600">€{activity.price} × {guests}</span>
                      <span className="font-semibold text-slate-800">€{activity.price * guests}</span>
                    </div>
                    <div className="flex justify-between items-center text-green-600 text-lg">
                      <span>Your savings</span>
                      <span>€{calculateSavings() * guests}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-xl pt-4 border-t border-amber-100">
                      <span>Total amount</span>
                      <span className="text-amber-600">€{activity.price * guests}</span>
                    </div>
                  </div>

                  <button className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 mt-4">
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
        <CTASection/>
    </div>
  );
}