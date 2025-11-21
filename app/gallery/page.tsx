/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// pages/gallery.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

interface GalleryImages {
  [key: string]: GalleryImage[];
}

interface Category {
  id: string;
  name: string;
  count: number;
  emoji: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImages = {
    all: [
      { id: 1, src: '/images/1000092073.jpg', category: 'landscape', title: 'Golden Dunes Sunset', description: 'Breathtaking sunset over the Sahara desert' },
      { id: 2, src: '/images/1000091075.jpg', category: 'quad', title: 'Quad Biking Adventure', description: 'Thrilling ATV ride through desert terrain' },
      { id: 3, src: '/images/1000091074.jpg', category: 'camel', title: 'Camel Caravan', description: 'Traditional camel trekking experience' },
      { id: 4, src: '/images/1000090188.jpg', category: 'landscape', title: 'Desert Horizon', description: 'Vast desert landscapes under Moroccan sky' },
      { id: 5, src: '/images/1000090187.jpg', category: 'quad', title: 'Dune Exploration', description: 'Exploring hidden desert paths on quad bikes' },
      { id: 6, src: '/images/1000090185.jpg', category: 'camel', title: 'Berber Journey', description: 'Authentic camel riding with local guides' },
      { id: 7, src: '/images/1000090181.jpg', category: 'people', title: 'Happy Adventurers', description: 'Group photo with our desert explorers' },
      { id: 8, src: '/images/1000090176.jpg', category: 'landscape', title: 'Desert Serenity', description: 'Peaceful moments in the heart of Sahara' },
      { id: 9, src: '/images/1000090175.jpg', category: 'quad', title: 'Sunset Ride', description: 'Quad biking as the sun sets over dunes' },
      { id: 10, src: '/images/1000090174.jpg', category: 'camel', title: 'Traditional Trek', description: 'Experience ancient caravan routes' },
      { id: 11, src: '/images/1000090173.jpg', category: 'people', title: 'Desert Memories', description: 'Unforgettable moments with friends' },
      { id: 12, src: '/images/1000090171.jpg', category: 'landscape', title: 'Golden Hours', description: 'Magic hour lighting in the desert' }
    ],
    quad: [
      { id: 2, src: '/images/1000091075.jpg', category: 'quad', title: 'Quad Biking Adventure', description: 'Thrilling ATV ride through desert terrain' },
      { id: 5, src: '/images/1000090187.jpg', category: 'quad', title: 'Dune Exploration', description: 'Exploring hidden desert paths on quad bikes' },
      { id: 9, src: '/images/1000090175.jpg', category: 'quad', title: 'Sunset Ride', description: 'Quad biking as the sun sets over dunes' }
    ],
    camel: [
      { id: 3, src: '/images/1000091074.jpg', category: 'camel', title: 'Camel Caravan', description: 'Traditional camel trekking experience' },
      { id: 6, src: '/images/1000090185.jpg', category: 'camel', title: 'Berber Journey', description: 'Authentic camel riding with local guides' },
      { id: 10, src: '/images/1000090174.jpg', category: 'camel', title: 'Traditional Trek', description: 'Experience ancient caravan routes' }
    ],
    landscape: [
      { id: 1, src: '/images/1000092073.jpg', category: 'landscape', title: 'Golden Dunes Sunset', description: 'Breathtaking sunset over the Sahara desert' },
      { id: 4, src: '/images/1000090188.jpg', category: 'landscape', title: 'Desert Horizon', description: 'Vast desert landscapes under Moroccan sky' },
      { id: 8, src: '/images/1000090176.jpg', category: 'landscape', title: 'Desert Serenity', description: 'Peaceful moments in the heart of Sahara' },
      { id: 12, src: '/images/1000090171.jpg', category: 'landscape', title: 'Golden Hours', description: 'Magic hour lighting in the desert' }
    ],
    people: [
      { id: 7, src: '/images/1000090181.jpg', category: 'people', title: 'Happy Adventurers', description: 'Group photo with our desert explorers' },
      { id: 11, src: '/images/1000090173.jpg', category: 'people', title: 'Desert Memories', description: 'Unforgettable moments with friends' }
    ]
  };

  const categories: Category[] = [
    { id: 'all', name: 'All Photos', count: galleryImages.all.length, emoji: '🖼️' },
    { id: 'quad', name: 'Quad Biking', count: galleryImages.quad.length, emoji: '🏍️' },
    { id: 'camel', name: 'Camel Trekking', count: galleryImages.camel.length, emoji: '🐫' },
    { id: 'landscape', name: 'Desert Landscapes', count: galleryImages.landscape.length, emoji: '🏜️' },
    { id: 'people', name: 'Our Adventurers', count: galleryImages.people.length, emoji: '👥' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages.all 
    : galleryImages[selectedCategory];

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentImages = filteredImages;
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % currentImages.length;
    } else {
      newIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    }
    
    setSelectedImage(currentImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50 py-24">
      <Head>
        <title>Gallery | QuadCamelMarrakesh Adventures - Desert Experiences</title>
        <meta name="description" content="Explore stunning photos from our quad biking and camel trekking adventures in the Moroccan desert" />
      </Head>

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <span className="text-amber-600 text-sm font-medium tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              VISUAL JOURNEY
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-800 mt-6 mb-4">
              Moments
              <span className="block bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Captured
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Step into the world of QuadCamelMarrakesh Adventures through the lens of our desert explorations and happy adventurers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-700 border border-slate-200'
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-slate-200"
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onLoad={() => handleImageLoad(image.id)}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <p className="text-amber-100 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {image.description}
                </p>
                <div className="flex items-center space-x-2 mt-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  <span className="text-amber-300 text-sm">View →</span>
                </div>
              </div>

              {/* Loading Skeleton */}
              {!loadedImages[image.id] && (
                <div className="absolute inset-0 bg-linear-to-br from-slate-300 to-slate-200 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl text-slate-600 mb-2">No photos found</h3>
            <p className="text-slate-500">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of adventurers who've experienced the magic of the Moroccan desert with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold transition-colors">
                Book Your Adventure
              </button>
              <a
                href="https://wa.me/212612345678"
                className="border border-amber-300 text-amber-100 hover:bg-amber-500 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>💬</span>
                <span>Chat for More Photos</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ›
            </button>

            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-amber-100">{selectedImage.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-slate-300">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </span>
                <span className="text-sm text-amber-300 capitalize">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}