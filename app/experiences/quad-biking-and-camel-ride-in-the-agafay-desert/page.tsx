/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from 'react';
import Image from 'next/image';
import CTASection from '@/app/components/CTASection';
import Link from 'next/link';

export default function ActivityDetails() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const activity = {
    id: 1,
    title: "Agafay Desert Adventure: Quad Biking & Sunset Camel Trek",
    subtitle: "Ultimate Desert Experience from Marrakech",
    description: "Discover the magic of Morocco's Agafay Desert with an unforgettable combination of thrilling quad biking and traditional camel trekking. Experience the perfect blend of adventure and cultural immersion just outside Marrakech.",
    fullDescription: `
      **Morning Quad Biking Expedition (2 hours)**
      - Convenient pickup from your Marrakech hotel or riad
      - Comprehensive safety briefing and equipment orientation
      - Guided quad bike tour through stunning desert landscapes
      - Scenic stops at panoramic viewpoints for photography
      - Explore hidden Berber villages and desert valleys
      - Professional instruction for all experience levels

      **Traditional Desert Break**
      - Refresh with complimentary Moroccan mint tea
      - Rest and soak in the breathtaking desert scenery
      - Opportunity to learn about local Berber culture

      **Sunset Camel Trekking (20 minutes)**
      - Authentic camel ride through golden desert dunes
      - Witness spectacular sunset views over the Agafay Desert
      - Peaceful, traditional desert travel experience
      - Cultural insights from experienced local guides

      **Return Journey**
      - Comfortable transportation back to your accommodation
      - Memorable photos of your desert adventure
      - Return filled with unforgettable memories
    `,
    price: 55,
    originalPrice: 110,
    duration: "4-Hour Desert Experience",
    groupSize: "Small Intimate Groups",
    difficulty: "Beginner to Advanced - All Welcome",
    includes: [
      "Round-trip transportation from Marrakech",
      "Professional quad bike and safety equipment",
      "Expert safety briefing and guided instruction",
      "Traditional 20-minute camel ride experience",
      "Complimentary Moroccan mint tea break",
      "Multilingual professional guides (English, French, Spanish, Arabic)",
      "All necessary safety gear and protection",
      "Scenic photo opportunities throughout"
    ],
    requirements: [
      "Comfortable outdoor clothing suitable for desert conditions",
      "Closed-toe shoes for quad biking safety",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Camera or smartphone for capturing memories",
      "Minimum age 15 years for camel riding",
      "Minimum age 15 years for quad biking participation",
      "Sense of adventure and readiness for fun"
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
    meetingPoint: "Complimentary pickup from your Marrakech accommodation"
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah & Mark",
      location: "London, UK",
      date: "2024-01-15",
      comment: "An absolutely incredible day! The quad biking was exhilarating and the camel ride at sunset was pure magic. Our guide made sure we felt safe while having the time of our lives. The perfect desert adventure!",
    },
    {
      id: 2, 
      name: "Michael T.",
      location: "New York, USA",
      date: "2024-01-12",
      comment: "This experience perfectly balanced adrenaline and culture. The transition from high-energy quad biking to the peaceful camel trek was seamless. Professional equipment and knowledgeable guides made all the difference.",
    },
    {
      id: 3,
      name: "The Johnson Family", 
      location: "Sydney, Australia",
      date: "2024-01-08",
      comment: "Our teenagers loved the quad biking adventure, and we all enjoyed the traditional camel ride. The guides were fantastic with our family and the safety standards were impressive throughout the entire experience.",
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
                  AGAFAY DESERT ADVENTURE
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
                  <span>{activity.reviews} Reviews</span>
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
                  alt="Quad biking adventure through the Agafay Desert near Marrakech"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
          

                    priority // For above-the-fold images
                   
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
                  <p className="text-amber-800 font-medium">Featured Desert Adventure</p>
                </div>
              </div>
            </div>
            
            {/* Side Images Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {activity.images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative h-44 lg:h-48 rounded-2xl overflow-hidden border border-amber-100 group">
                  <Image
                    src={image}
                    alt={`Agafay Desert experience ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"

                      priority // For above-the-fold Images
                 
  quality={85} // Balance between quality and file size
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add blur placeholder
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
                    <p className="text-amber-700 font-medium text-sm">View More Photos</p>
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
                <p className="text-amber-100 text-lg">Join {activity.reviews}+ satisfied adventurers</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact-us"
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Reserve Now - €{activity.price}
              </Link>
                <a 
                  href="https://wa.me/212627349254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Ask About This Adventure</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-amber-100">
            <div className="flex space-x-8">
              {[
                { id: 'overview', label: 'Experience Overview' },
                { id: 'itinerary', label: 'Detailed Itinerary' },
                { id: 'includes', label: 'What\'s Included' },
                { id: 'reviews', label: 'Guest Experiences' }
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
                  <h3 className="text-2xl font-serif text-slate-800 mb-6">Your Desert Adventure Awaits</h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-6">
                    Experience the perfect combination of adrenaline-pumping excitement and authentic cultural immersion 
                    in the breathtaking Agafay Desert. This carefully crafted adventure showcases the very best of Morocco's 
                    desert landscapes and traditions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                          <span className="text-amber-700 text-xl">🏍️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Quad Biking Adventure</h4>
                          <p className="text-slate-600 text-sm">Thrilling desert exploration</p>
                        </div>
                      </div>
                      <ul className="text-slate-600 space-y-2 text-sm ml-16">
                        <li>• 2 hours of guided quad biking through stunning landscapes</li>
                        <li>• Premium safety equipment and professional instruction</li>
                        <li>• Scenic routes with panoramic photo opportunities</li>
                        <li>• Suitable for all experience levels</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                          <span className="text-amber-700 text-xl">🐫</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Camel Trekking Experience</h4>
                          <p className="text-slate-600 text-sm">Traditional desert journey</p>
                        </div>
                      </div>
                      <ul className="text-slate-600 space-y-2 text-sm ml-16">
                        <li>• 20-minute authentic camel ride through golden dunes</li>
                        <li>• Breathtaking sunset views over the Agafay Desert</li>
                        <li>• Cultural immersion with local Berber guides</li>
                        <li>• Peaceful, memorable desert travel experience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'itinerary' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-slate-800 mb-6">Your Desert Adventure Timeline</h3>
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
                  <h3 className="text-2xl font-serif text-slate-800 mb-6">Everything We Provide for Your Adventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800 text-lg flex items-center">
                        <span className="text-amber-600 mr-3">✅</span>
                        Included in Your Experience
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
                        What to Bring With You
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
                <h3 className="text-2xl font-serif text-slate-800 mb-6">What Our Adventurers Say</h3>
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
                  <h3 className="text-3xl font-serif text-slate-800">Reserve Your Desert Adventure</h3>
                  <button 
                    onClick={() => setShowBookingForm(false)}
                    className="text-slate-400 hover:text-slate-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">Select Your Adventure Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors text-black text-lg"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">Preferred Start Time</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 bg-amber-50/50 transition-colors text-black text-lg"
                    >
                      <option value="">Choose your preferred time</option>
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
                      <span className="text-slate-600">€{activity.price} × {guests} adventurers</span>
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
                    Complete Your Reservation
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