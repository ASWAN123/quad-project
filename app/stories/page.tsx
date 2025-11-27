/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


interface BlogStory {
  id: number;
  type: 'blog';
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  highlights: string[];
}

export default function Stories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const storyCategories = [
    { id: 'all', name: 'All Stories', count: 8, emoji: '📚' },
    { id: 'adventure', name: 'Adventure Tales', count: 4, emoji: '🏜️' },
    { id: 'couples', name: 'Romantic Getaways', count: 2, emoji: '💑' },
    { id: 'families', name: 'Family Adventures', count: 2, emoji: '👨‍👩‍👧‍👦' }
  ];



  const stories: BlogStory[] = [
    {
      id: 3,
      type: 'blog',
      title: "Family Fun in the Sahara: Teens Actually Loved It!",
      excerpt: "How we got our teenagers off their phones and into the desert for an unforgettable family adventure",
      author: "The Johnson Family",
      location: "Sydney, Australia",
      readTime: "6 min read",
      category: 'families',
      image: "/images/1000091074.jpg",
      date: "2024-01-08",
      highlights: ["Kid-friendly", "Safety first", "Educational", "Memorable photos"]
    },
    {
      id: 4,
      type: 'blog',
      title: "Why Quad Biking in Agafay Beats Every Other Desert",
      excerpt: "A comprehensive comparison of desert experiences and why Agafay stands out for adventure seekers",
      author: "Alex Rodriguez",
      location: "Madrid, Spain",
      readTime: "7 min read",
      category: 'adventure',
      image: "/images/1000090187.jpg",
      date: "2024-01-20",
      highlights: ["Best terrain", "Expert guides", "Stunning views", "Value for money"]
    },
    {
      id: 5,
      type: 'blog',
      title: "Camel Trekking: The Peaceful Side of Desert Adventure",
      excerpt: "Discovering the meditative rhythm of camel riding and traditional Berber hospitality",
      author: "Emma Wilson",
      location: "Toronto, Canada",
      readTime: "4 min read",
      category: 'adventure',
      image: "/images/1000090185.jpg",
      date: "2024-01-18",
      highlights: ["Cultural immersion", "Peaceful experience", "Traditional methods", "Sunset magic"]
    },
    {
      id: 6,
      type: 'blog',
      title: "Anniversary Surprise: 20 Years Later in Morocco",
      excerpt: "How we celebrated two decades of marriage with the most unexpected and thrilling desert adventure",
      author: "Robert & Lisa",
      location: "Chicago, USA",
      readTime: "5 min read",
      category: 'couples',
      image: "/images/1000090174.jpg",
      date: "2024-01-22",
      highlights: ["Romantic getaway", "Adventure at any age", "Quality time", "Professional service"]
    },
    {
      id: 7,
      type: 'blog',
      title: "Desert Photography: Capturing the Perfect Shot",
      excerpt: "Tips and tricks for photographing your desert adventure, from golden hour to action shots",
      author: "David Kim",
      location: "Seoul, South Korea",
      readTime: "8 min read",
      category: 'adventure',
      image: "/images/1000090171.jpg",
      date: "2024-01-25",
      highlights: ["Photography tips", "Golden hour", "Action shots", "Landscape photography"]
    },
    {
      id: 8,
      type: 'blog',
      title: "Multi-Generational Desert Trip: Ages 8 to 68",
      excerpt: "How our family from grandparents to grandchildren all found something to love in the desert",
      author: "The Gupta Family",
      location: "Mumbai, India",
      readTime: "6 min read",
      category: 'families',
      image: "/images/1000090181.jpg",
      date: "2024-01-28",
      highlights: ["All ages welcome", "Safety for seniors", "Fun for kids", "Family bonding"]
    }
  ];

  const allStories = [ ...stories];
  const filteredStories = selectedCategory === 'all' 
    ? allStories 
    : allStories.filter(story => story.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-white py-24">
      {/* Header */}
      <div className="bg-linear-to-b from-white to-amber-50/30 border-b border-amber-100 py-8">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 mb-6">
              <span className="text-amber-700 text-sm font-light tracking-widest">
                TRAVELER STORIES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-slate-800 mb-6 leading-tight">
              Real Stories from
              <span className="block text-amber-700 mt-2">The Desert</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover authentic experiences and heartfelt stories from travelers who've journeyed with us through the magical Agafay desert.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        

        {/* Story Categories */}
        <div className="mb-12">
          <h2 className="text-2xl  text-slate-800 mb-6">Browse Stories</h2>
          <div className="flex flex-wrap gap-3">
            {storyCategories.map((category) => (
              <button
              aria-label={`Filter by ${category.name}`}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-700 border border-amber-200'
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-amber-700 text-amber-100'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 group relative overflow-hidden">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg">🔒</span>
                  </div>
                  <p className="font-semibold text-slate-800">Coming Soon</p>
                  <p className="text-slate-600 text-sm mt-1">Stories section launching soon!</p>
                </div>
              </div>
              
              {/* Content Blur Effect on Hover */}
              <div className="group-hover:blur-sm transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    story.category === 'adventure' ? 'bg-blue-100 text-blue-700' :
                    story.category === 'couples' ? 'bg-pink-100 text-pink-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {story.category}
                  </span>
                  <span className="text-slate-400 text-sm">{story.readTime}</span>
                </div>
                
                <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>By {story.author}</span>
                  <span>{story.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl  mb-4">
            Share Your Desert Story
          </h2>
          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Had an amazing adventure with us? We'd love to hear about your experience and share it with future travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:experience@quadCamelMarrakesh.com?subject=My Desert Adventure Story&body=Hi Quad Camel Team, I'd like to share my desert adventure story..."
              className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 inline-block"
            >
              Share Your Experience
            </a>
            <Link 
              href="/contact-us"
              className="border border-amber-300 text-amber-100 hover:bg-amber-500 px-6 py-3 rounded-xl font-medium transition-colors duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}