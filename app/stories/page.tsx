/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface BaseStory {
  id: number;
  type: string;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  image: string;
  date: string;
  rating: number;
  highlights: string[];
}

interface VideoStory extends BaseStory {
  type: 'video';
  duration: string;
}

interface BlogStory extends BaseStory {
  type: 'blog';
  readTime: string;
}

interface PhotoStory extends BaseStory {
  type: 'photo';
  imageCount: number;
}

type Story = VideoStory | BlogStory | PhotoStory;

export default function Stories() {


  const [selectedCategory, setSelectedCategory] = useState('all');

  const storyCategories = [
    { id: 'all', name: 'All Stories', count: 12, emoji: '📚' },
    { id: 'adventure', name: 'Adventure Tales', count: 6, emoji: '🏜️' },
    { id: 'couples', name: 'Romantic Getaways', count: 3, emoji: '💑' },
    { id: 'families', name: 'Family Adventures', count: 2, emoji: '👨‍👩‍👧‍👦' },
    { id: 'solo', name: 'Solo Travelers', count: 1, emoji: '🧳' }
  ];

  const featuredStories = [
    {
      id: 1,
      type: 'video',
      title: "Sunset Magic: Our First Desert Adventure",
      excerpt: "Watch Sarah and Mark experience quad biking and camel trekking for the first time",
      author: "Sarah & Mark",
      location: "London, UK",
      duration: "2:45",
      category: 'couples',
      image: "/images/1000092073.jpg",
      date: "2024-01-15",
      rating: 5,
      highlights: ["Breathtaking sunset", "Professional guides", "Unforgettable experience"]
    },
    {
      id: 2,
      type: 'blog',
      title: "From Office to Desert: A Solo Journey",
      excerpt: "How one week in the Moroccan desert changed my perspective on life and adventure",
      author: "Michael Chen",
      location: "New York, USA",
      readTime: "5 min read",
      category: 'solo',
      image: "/images/1000091075.jpg",
      date: "2024-01-12",
      rating: 5,
      highlights: ["Personal growth", "Cultural immersion", "Overcoming fears"]
    }
  ];

  const stories = [
    {
      id: 3,
      type: 'photo',
      title: "Family Fun in the Sahara",
      excerpt: "Our teenagers discovered the joy of desert adventures with quadCamelMarrakesh",
      author: "The Johnson Family",
      location: "Sydney, Australia",
      imageCount: 12,
      category: 'families',
      image: "/images/1000091074.jpg",
      date: "2024-01-08",
      rating: 5,
      highlights: ["Kid-friendly", "Safety first", "Memorable photos"]
    },
  ];

  const allStories = [...featuredStories, ...stories];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50 py-24">
      <Head>
        <title>Stories & Experiences | QuadCamelMarrakesh Adventures</title>
        <meta name="description" content="Read real stories from our adventurers and watch their desert experiences come to life" />
      </Head>

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <span className="text-amber-600 text-sm font-medium tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              TRAVELER TALES
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-800 mt-6 mb-4">
              Real Stories from
              <span className="block bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                The Desert
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover authentic experiences, watch adventure videos, and read heartfelt stories from travelers who've journeyed with us.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-slate-800 mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      story.type === 'video' ? 'bg-red-500' : 
                      story.type === 'blog' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                      {story.type === 'video' ? '🎥 VIDEO' : 
                       story.type === 'blog' ? '📝 BLOG' : '📸 PHOTOS'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{story.title}</h3>
                  <p className="text-slate-600 mb-4">{story.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>By {story.author}</span>
                      <span>•</span>
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-500">
                      {'★'.repeat(story.rating)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center space-x-2">
                      <span>Read Full Story</span>
                      <span>→</span>
                    </button>
                    <span className="text-slate-400 text-sm">
                      {story.type === 'video' ? (story as VideoStory).duration : 
                       story.type === 'blog' ? (story as BlogStory).readTime : 
                       story.type === 'photo' && 'imageCount' in story ? `${story.imageCount} photos` : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-slate-800 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {storyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-amber-50 border border-slate-200'
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-amber-100'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-slate-800 mb-8">Watch Their Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video testimonial cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="aspect-video bg-slate-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🎥</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">"Unforgettable Desert Experience"</h3>
              <p className="text-slate-600 text-sm mb-3">Watch Maria's journey from nervous beginner to confident adventurer</p>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Maria K. • Germany</span>
                <span>3:22</span>
              </div>
            </div>
            {/* Add more video cards */}
          </div>
        </div>

        {/* Story Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  story.category === 'adventure' ? 'bg-blue-100 text-blue-700' :
                  story.category === 'couples' ? 'bg-pink-100 text-pink-700' :
                  story.category === 'families' ? 'bg-green-100 text-green-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {story.category}
                </span>
                <div className="flex items-center space-x-1 text-amber-500 text-sm">
                  {'★'.repeat(story.rating)}
                </div>
              </div>
              
              <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">{story.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{story.author}</span>
                <span>{story.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Share Your Desert Story
          </h2>
          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
            Had an amazing adventure with us? Share your photos, videos, and experiences to inspire other travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition-colors">
              Submit Your Story
            </button>
            <button className="border border-amber-300 text-amber-100 hover:bg-amber-500 px-6 py-3 rounded-xl font-medium transition-colors">
              Share on Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}