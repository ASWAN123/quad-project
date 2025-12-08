/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CTASection from '@/app/components/CTASection';
import Link from 'next/link';

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function ActivityDetails() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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
    originalPrice: 75,
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
      "Minimum age 10 years for camel riding",
      "Minimum age 12 years for quad biking participation",
      "Sense of adventure and readiness for fun"
    ],
    images: [
      {
        src: "/images/Desert-Quad-Biking-Adventure.jpeg",
        alt: "Desert quad biking adventure with panoramic views",
        width: 600,
        height: 400
      },
      {
        src: "/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg",
        alt: "Quad biking adventure through the Agafay Desert near Marrakech",
        width: 800,
        height: 600
      },
      {
        src: "/images/Sunset-Quad-Biking-Adventure.jpeg",
        alt: "Sunset quad biking adventure in the desert with golden light",
        width: 600,
        height: 400
      },
      {
        src: "/images/Desert-Camel-Ride.jpeg",
        alt: "Traditional camel trekking experience at sunset",
        width: 600,
        height: 400
      },
      {
        src: "/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg",
        alt: "Quad bike tour through Marrakech palm grove",
        width: 600,
        height: 400
      },
      {
        src: "/images/Agafay-Desert-Camel-Trek.jpeg",
        alt: "Camel trekking in Agafay Desert with mountain backdrop",
        width: 600,
        height: 400
      }
    ],
    reviews: 342,
    featured: true,
    bestSeller: true,
    availability: ["09:00", "11:00", "13:00", "15:00", "17:00"],
    meetingPoint: "Complimentary pickup from your Marrakech accommodation"
  };

  const tripAdvisorReviews = [
    {
      name: "Andrea S",
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/b8/default-avatar-2020-22.jpg?w=100&h=-1&s=1",
      date: "Dec 2025",
      contributions: "4 contribution",
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
  ];



  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, selectedImageIndex]);

  const calculateSavings = () => activity.originalPrice - activity.price;

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'next') {
      setSelectedImageIndex((selectedImageIndex + 1) % activity.images.length);
    } else {
      setSelectedImageIndex(selectedImageIndex === 0 ? activity.images.length - 1 : selectedImageIndex - 1);
    }
  };

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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                {activity.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">{activity.description}</p>
              
              {/* Updated Activity Info Section */}
              <div className="flex flex-wrap items-center gap-4 text-slate-600">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100/50 px-4 py-2.5 rounded-full border border-amber-200/50">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <span className="text-lg">⏱️</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Duration</p>
                    <p className="font-semibold text-slate-800">{activity.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 px-4 py-2.5 rounded-full border border-emerald-200/50">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <span className="text-lg">👥</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Group Size</p>
                    <p className="font-semibold text-slate-800">{activity.groupSize}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100/50 px-4 py-2.5 rounded-full border border-blue-200/50">
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Reviews</p>
                    <p className="font-semibold text-slate-800">{activity.reviews}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="flex items-center space-x-3 mb-3 justify-center lg:justify-end">
                <span className="text-3xl font-light text-amber-600">€{activity.price}</span>
                <span className="text-slate-400 line-through text-xl">€{activity.originalPrice}</span>
              </div>
              <div className="text-green-600 text-sm mb-4 font-medium">
                Save €{calculateSavings()} per person
              </div>
              {activity.bestSeller && (
                <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium inline-block shadow-sm">
                  🏆 Most Popular Experience
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="space-y-16">
          {/* Clean Image Gallery Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Image */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Large Image */}
              <div 
                className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-amber-100 group cursor-zoom-in shadow-lg"
                onClick={() => openGallery(0)}
              >
                <Image
                  src={activity.images[0].src}
                  alt={activity.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <p className="text-amber-800 font-medium">Featured Desert Adventure</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                  </svg>
                </div>
              </div>

              {/* Thumbnail Grid Below Main Image */}
              <div className="grid grid-cols-4 gap-4">
                {activity.images.slice(1, 5).map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-amber-100 group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow duration-300"
                    onClick={() => openGallery(index + 1)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      quality={85}
                      sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 200px"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - CTA Section */}
            <div className="lg:col-span-1">
              <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-6 text-white h-full shadow-xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Ready for Your Desert Adventure?</h3>
                    <p className="text-amber-100 text-sm">Join {activity.reviews}+ satisfied adventurers</p>
                  </div>
                  
                  <div className="space-y-4">
                    <Link 
                      href="/contact-us"
                      className="block w-full bg-white text-amber-600 hover:bg-amber-50 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 text-center shadow-lg hover:shadow-xl"
                    >
                      Reserve Now - €{activity.price}
                    </Link>
                    
                    <a 
                      href="https://wa.me/212627349254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 text-center"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>💬</span>
                        <span>Ask Questions</span>
                      </div>
                    </a>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 pt-4 border-t border-amber-400/30">
                    <div className="flex text-sm flex-col">
                      <span className="text-amber-100">Duration:</span>
                      <span className="font-semibold">{activity.duration}</span>
                    </div>
                    <div className="flex text-sm flex-col">
                      <span className="text-amber-100">Group Size:</span>
                      <span className="font-semibold">{activity.groupSize}</span>
                    </div>
                    <div className="flex text-sm flex-col">
                      <span className="text-amber-100">Difficulty:</span>
                      <span className="font-semibold">{activity.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Modal */}
          {isGalleryOpen && selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-10 text-white hover:text-amber-300 transition-colors duration-200 bg-black/50 rounded-full p-3"
                  aria-label="Close gallery"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 z-10 text-white hover:text-amber-300 transition-colors duration-200 bg-black/50 rounded-full p-4"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 z-10 text-white hover:text-amber-300 transition-colors duration-200 bg-black/50 rounded-full p-4"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Main Image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <Image
                    src={activity.images[selectedImageIndex].src}
                    alt={activity.images[selectedImageIndex].alt}
                    width={activity.images[selectedImageIndex].width}
                    height={activity.images[selectedImageIndex].height}
                    className="max-w-full max-h-full object-contain"
                    quality={100}
                    priority
                  />
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImageIndex + 1} / {activity.images.length}
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4 py-2">
                  {activity.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImageIndex === index ? 'border-amber-400 scale-110' : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        quality={50}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="border-b border-amber-100">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', label: 'Experience Overview' },
                { id: 'itinerary', label: 'Detailed Itinerary' },
                { id: 'includes', label: 'What\'s Included' },
                { id: 'tripadvisor', label: 'TripAdvisor Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`pb-4 px-1 font-medium transition-colors border-b-2 whitespace-nowrap ${
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
                <div className="bg-amber-50/50 rounded-3xl p-8 border border-amber-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Desert Adventure Awaits</h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-6">
                    Experience the perfect combination of adrenaline-pumping excitement and authentic cultural immersion 
                    in the breathtaking Agafay Desert. This carefully crafted adventure showcases the very best of Morocco's 
                    desert landscapes and traditions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shadow-sm">
                          <span className="text-amber-700 text-xl">🏍️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Quad Biking Adventure</h4>
                          <p className="text-slate-600 text-sm">Thrilling desert exploration</p>
                        </div>
                      </div>
                      <ul className="text-slate-600 space-y-2 text-sm ml-16">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>2 hours of guided quad biking through stunning landscapes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Premium safety equipment and professional instruction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Scenic routes with panoramic photo opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Suitable for all experience levels</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shadow-sm">
                          <span className="text-amber-700 text-xl">🐫</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">Camel Trekking Experience</h4>
                          <p className="text-slate-600 text-sm">Traditional desert journey</p>
                        </div>
                      </div>
                      <ul className="text-slate-600 space-y-2 text-sm ml-16">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>20-minute authentic camel ride through golden dunes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Breathtaking sunset views over the Agafay Desert</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Cultural immersion with local Berber guides</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>Peaceful, memorable desert travel experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'itinerary' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Desert Adventure Timeline</h3>
                {activity.fullDescription.split('\n\n').map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
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
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Everything We Provide for Your Adventure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <span className="text-green-600 text-xl">✅</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 text-lg">Included in Your Experience</h4>
                      </div>
                      <ul className="space-y-3">
                        {activity.includes.map((item, index) => (
                          <li key={index} className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <span className="text-blue-600 text-xl">📝</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 text-lg">What to Bring With You</h4>
                      </div>
                      <ul className="space-y-3">
                        {activity.requirements.map((item, index) => (
                          <li key={index} className="flex items-center space-x-3 p-3 bg-blue-50/50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}



            {selectedTab === 'tripadvisor' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">TripAdvisor Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-[#00AA6C] text-lg">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-xl font-bold text-slate-800">5.0</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {tripAdvisorReviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-gray-200">
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

                      {/* Activity Badge */}
                      <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                        <span>🏜️</span>
                        <span>{review.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TripAdvisor CTA */}
                <div className="text-center mt-12">
                  <div className="bg-gradient-to-r from-[#00AA6C]/10 to-emerald-100/50 rounded-3xl p-8 border border-emerald-200/30 shadow-sm">
                    <h4 className="text-xl font-bold text-slate-800 mb-4">
                      See All Reviews on TripAdvisor
                    </h4>
                    <a
                      href="https://www.tripadvisor.com/Attraction_Review-g293734-d34046054-Reviews-Quad_Camel_Marrakesh-Marrakech_Marrakech_Safi.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-[#00AA6C] hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,0C5.372,0,0,5.373,0,12s5.372,12,12,12s12-5.373,12-12S18.628,0,12,0z M10.64,14.669 c-0.202,0.537-0.664,0.537-0.864,0L8.292,11.6H5.889c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0 l1.484,3.069h2.403c0.564,0,0.816,0.406,0.564,0.906L10.64,14.669z M18.675,14.669c-0.202,0.537-0.664,0.537-0.865,0l-1.484-3.069 h-2.403c-0.564,0-0.816-0.405-0.564-0.905l2.872-4.196c0.2-0.537,0.664-0.537,0.864,0l1.484,3.069h2.403 c0.564,0,0.816,0.406,0.564,0.906L18.675,14.669z"/>
                      </svg>
                      <span>Read All {activity.reviews}+ Reviews</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Form Modal */}
          {showBookingForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-slate-800">Reserve Your Desert Adventure</h3>
                  <button 
                    onClick={() => setShowBookingForm(false)}
                    className="text-slate-400 hover:text-slate-600 text-2xl"
                    aria-label="Close booking form"
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
                        aria-label="Decrease number of guests"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-slate-800 px-6">{guests}</span>
                      <button
                        onClick={() => setGuests(guests + 1)}
                        className="w-12 h-12 rounded-full border-2 border-amber-300 flex items-center justify-center hover:bg-amber-100 transition-colors text-amber-600 text-xl font-bold"
                        aria-label="Increase number of guests"
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

                  <button 
                    className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 mt-4 shadow-lg"
                    aria-label="Complete your reservation"
                  >
                    Complete Your Reservation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <CTASection />
    </div>
  );
}