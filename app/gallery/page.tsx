/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from 'react';
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

  // Updated with your new professional images
  const galleryImages: GalleryImages = {
    all: [
      { id: 1, src: '/images/Quad-Biking-in-the-Agafay-Desert-at-Sunset.jpeg', category: 'quad', title: 'Sunset Quad Adventure', description: 'Thrilling quad biking as the sun sets over Agafay Desert' },
      { id: 2, src: '/images/Sunset-Quad-Biking-Adventure.jpeg', category: 'quad', title: 'Golden Hour Ride', description: 'Quad biking through golden desert landscapes' },
      { id: 3, src: '/images/sunset-camel-ride.jpeg', category: 'camel', title: 'Sunset Camel Trek', description: 'Peaceful camel ride during magical sunset hours' },
      { id: 4, src: '/images/Desert-Camel-Ride.jpeg', category: 'camel', title: 'Desert Caravan', description: 'Traditional camel trekking experience' },
      { id: 5, src: '/images/Quad-Biking-in-the-Desert-and-Palm-Grove.jpg', category: 'quad', title: 'Palm Grove Exploration', description: 'Quad biking through desert oasis and palm groves' },
      { id: 6, src: '/images/Quad-biking-in-a-desert-landscape.jpeg', category: 'quad', title: 'Desert Landscape Adventure', description: 'Exploring vast desert terrain on quad bikes' },
      { id: 7, src: '/images/quad-biking-desert-adventure.jpeg', category: 'quad', title: 'Desert Thrills', description: 'High-energy quad biking through sandy dunes' },
      { id: 8, src: '/images/Quad-Biking-Adventure-in-the-Desert.jpeg', category: 'quad', title: 'Desert Expedition', description: 'Guided quad tour through stunning desert scenery' },
      { id: 9, src: '/images/Quad-Biking-Adventure-in-Marrakech.jpeg', category: 'quad', title: 'Marrakech Adventure', description: 'Quad biking adventure starting from Marrakech' },
      { id: 10, src: '/images/person-riding-a-red-quad-bike-.jpeg', category: 'quad', title: 'Red Quad Action', description: 'Action-packed quad biking on red desert terrain' },
      { id: 11, src: '/images/Palm-Grove-Quad-Tour.jpg', category: 'quad', title: 'Oasis Tour', description: 'Quad biking through lush palm groves and desert' },
      { id: 12, src: '/images/Off-Road-Exploration.jpeg', category: 'quad', title: 'Off-Road Exploration', description: 'Exploring off-road desert trails on quad bikes' },
      { id: 13, src: '/images/Moroccan-Memories.jpeg', category: 'people', title: 'Moroccan Memories', description: 'Travelers enjoying authentic desert experiences' },
      { id: 14, src: '/images/Moroccan-Desert-Adventure.jpeg', category: 'landscape', title: 'Desert Adventure', description: 'Breathtaking views of Moroccan desert landscapes' },
      { id: 15, src: '/images/Marrakech-Quad-Bike-Experience-Desert-and-Palmeraie.jpeg', category: 'quad', title: 'Desert & Palmeraie', description: 'Quad biking through desert and palm plantations' },
      { id: 16, src: '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg', category: 'quad', title: 'Palmeraie Adventure', description: 'Adventure through Marrakech palm groves' },
      { id: 17, src: '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpeg', category: 'quad', title: 'Desert Journey', description: 'Scenic quad biking journey through desert' },
      { id: 18, src: '/images/Marrakech-Palm-Oasis-and-Desert-Quad-Bike-Adventure.jpeg', category: 'quad', title: 'Oasis Adventure', description: 'Quad biking from oasis to desert landscapes' },
      { id: 19, src: '/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg', category: 'quad', title: 'Palm Grove Tour', description: 'Guided quad tour through beautiful palm groves' },
      { id: 20, src: '/images/Marrakech-Desert-Quad-Adventure.jpg', category: 'quad', title: 'Desert Quad Adventure', description: 'Professional quad biking in Marrakech desert' },
      { id: 21, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Tour.jpg', category: 'quad', title: 'Desert & Grove Tour', description: 'Combined desert and palm grove quad experience' },
      // { id: 22, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Tour.jpeg', category: 'quad', title: 'Scenic Route', description: 'Picturesque quad biking route through varied terrain' },
      { id: 23, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Adventure.jpg', category: 'quad', title: 'Dual Landscape', description: 'Quad adventure through desert and green landscapes' },
      { id: 24, src: '/images/Man-riding-quad-bike-over-sandy-terrain.jpg', category: 'quad', title: 'Sandy Terrain', description: 'Mastering sandy desert terrain on quad bike' },
      { id: 25, src: '/images/Exploring-the-Desert-on-Camelback.jpg', category: 'camel', title: 'Camelback Exploration', description: 'Traditional desert exploration on camelback' },
      { id: 26, src: '/images/Dromedaries-on-the-Sand.jpeg', category: 'camel', title: 'Desert Dromedaries', description: 'Camels resting on golden desert sands' },
      { id: 27, src: '/images/Desert-Sunset-Quad-Ride.jpeg', category: 'quad', title: 'Sunset Quad Ride', description: 'Evening quad biking with spectacular sunset views' },
      { id: 28, src: '/images/Desert-Quad-Biking-Adventure.jpeg', category: 'quad', title: 'Desert Expedition', description: 'Full desert quad biking adventure experience' },
      { id: 29, src: '/images/Desert-Caravan-Silhouette.jpeg', category: 'camel', title: 'Caravan Silhouette', description: 'Beautiful camel caravan silhouette at dusk' },
      { id: 30, src: '/images/Desert-Camel-Ride-Adventure.jpeg', category: 'camel', title: 'Camel Adventure', description: 'Exciting camel riding adventure in the desert' },
      { id: 31, src: '/images/Camel-Trekking-Experience.jpeg', category: 'camel', title: 'Trekking Experience', description: 'Authentic camel trekking through desert trails' },
      { id: 32, src: '/images/ATV-Tour-in-Marrakech.jpg', category: 'quad', title: 'ATV Tour', description: 'Professional ATV tour in Marrakech desert' },
      { id: 33, src: '/images/Agafay-Desert-Camel-Trek.jpeg', category: 'camel', title: 'Agafay Trek', description: 'Camel trekking through beautiful Agafay Desert' },
      { id: 34, src: '/images/Traditional-Moroccan-Seating-Area.jpg', category: 'culture', title: 'Moroccan Hospitality', description: 'Traditional seating area for tea and relaxation' }
    ],
    quad: [
      { id: 1, src: '/images/Quad-Biking-in-the-Agafay-Desert-at-Sunset.jpeg', category: 'quad', title: 'Sunset Quad Adventure', description: 'Thrilling quad biking as the sun sets over Agafay Desert' },
      { id: 2, src: '/images/Sunset-Quad-Biking-Adventure.jpeg', category: 'quad', title: 'Golden Hour Ride', description: 'Quad biking through golden desert landscapes' },
      { id: 5, src: '/images/Quad-Biking-in-the-Desert-and-Palm-Grove.jpg', category: 'quad', title: 'Palm Grove Exploration', description: 'Quad biking through desert oasis and palm groves' },
      { id: 6, src: '/images/Quad-biking-in-a-desert-landscape.jpeg', category: 'quad', title: 'Desert Landscape Adventure', description: 'Exploring vast desert terrain on quad bikes' },
      { id: 7, src: '/images/quad-biking-desert-adventure.jpeg', category: 'quad', title: 'Desert Thrills', description: 'High-energy quad biking through sandy dunes' },
      { id: 8, src: '/images/Quad-Biking-Adventure-in-the-Desert.jpeg', category: 'quad', title: 'Desert Expedition', description: 'Guided quad tour through stunning desert scenery' },
      { id: 9, src: '/images/Quad-Biking-Adventure-in-Marrakech.jpeg', category: 'quad', title: 'Marrakech Adventure', description: 'Quad biking adventure starting from Marrakech' },
      { id: 10, src: '/images/person-riding-a-red-quad-bike-.jpeg', category: 'quad', title: 'Red Quad Action', description: 'Action-packed quad biking on red desert terrain' },
      { id: 11, src: '/images/Palm-Grove-Quad-Tour.jpg', category: 'quad', title: 'Oasis Tour', description: 'Quad biking through lush palm groves and desert' },
      { id: 12, src: '/images/Off-Road-Exploration.jpeg', category: 'quad', title: 'Off-Road Exploration', description: 'Exploring off-road desert trails on quad bikes' },
      { id: 15, src: '/images/Marrakech-Quad-Bike-Experience-Desert-and-Palmeraie.jpeg', category: 'quad', title: 'Desert & Palmeraie', description: 'Quad biking through desert and palm plantations' },
      { id: 16, src: '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpg', category: 'quad', title: 'Palmeraie Adventure', description: 'Adventure through Marrakech palm groves' },
      { id: 17, src: '/images/Marrakech-Palmeraie-Quad-Bike-Desert-Adventure.jpeg', category: 'quad', title: 'Desert Journey', description: 'Scenic quad biking journey through desert' },
      { id: 18, src: '/images/Marrakech-Palm-Oasis-and-Desert-Quad-Bike-Adventure.jpeg', category: 'quad', title: 'Oasis Adventure', description: 'Quad biking from oasis to desert landscapes' },
      { id: 19, src: '/images/Marrakech-Palm-Grove-Quad-Bike-Tour.jpeg', category: 'quad', title: 'Palm Grove Tour', description: 'Guided quad tour through beautiful palm groves' },
      { id: 20, src: '/images/Marrakech-Desert-Quad-Adventure.jpg', category: 'quad', title: 'Desert Quad Adventure', description: 'Professional quad biking in Marrakech desert' },
      { id: 21, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Tour.jpg', category: 'quad', title: 'Desert & Grove Tour', description: 'Combined desert and palm grove quad experience' },
      // { id: 22, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Tour.jpeg', category: 'quad', title: 'Scenic Route', description: 'Picturesque quad biking route through varied terrain' },
      { id: 23, src: '/images/Marrakech-Desert-and-Palm-Grove-Quad-Bike-Adventure.jpg', category: 'quad', title: 'Dual Landscape', description: 'Quad adventure through desert and green landscapes' },
      { id: 24, src: '/images/Man-riding-quad-bike-over-sandy-terrain.jpg', category: 'quad', title: 'Sandy Terrain', description: 'Mastering sandy desert terrain on quad bike' },
      { id: 27, src: '/images/Desert-Sunset-Quad-Ride.jpeg', category: 'quad', title: 'Sunset Quad Ride', description: 'Evening quad biking with spectacular sunset views' },
      { id: 28, src: '/images/Desert-Quad-Biking-Adventure.jpeg', category: 'quad', title: 'Desert Expedition', description: 'Full desert quad biking adventure experience' },
      { id: 32, src: '/images/ATV-Tour-in-Marrakech.jpg', category: 'quad', title: 'ATV Tour', description: 'Professional ATV tour in Marrakech desert' }
    ],
    camel: [
      { id: 3, src: '/images/sunset-camel-ride.jpeg', category: 'camel', title: 'Sunset Camel Trek', description: 'Peaceful camel ride during magical sunset hours' },
      { id: 4, src: '/images/Desert-Camel-Ride.jpeg', category: 'camel', title: 'Desert Caravan', description: 'Traditional camel trekking experience' },
      { id: 25, src: '/images/Exploring-the-Desert-on-Camelback.jpg', category: 'camel', title: 'Camelback Exploration', description: 'Traditional desert exploration on camelback' },
      { id: 26, src: '/images/Dromedaries-on-the-Sand.jpeg', category: 'camel', title: 'Desert Dromedaries', description: 'Camels resting on golden desert sands' },
      { id: 29, src: '/images/Desert-Caravan-Silhouette.jpeg', category: 'camel', title: 'Caravan Silhouette', description: 'Beautiful camel caravan silhouette at dusk' },
      { id: 30, src: '/images/Desert-Camel-Ride-Adventure.jpeg', category: 'camel', title: 'Camel Adventure', description: 'Exciting camel riding adventure in the desert' },
      { id: 31, src: '/images/Camel-Trekking-Experience.jpeg', category: 'camel', title: 'Trekking Experience', description: 'Authentic camel trekking through desert trails' },
      { id: 33, src: '/images/Agafay-Desert-Camel-Trek.jpeg', category: 'camel', title: 'Agafay Trek', description: 'Camel trekking through beautiful Agafay Desert' }
    ],
    landscape: [
      { id: 14, src: '/images/Moroccan-Desert-Adventure.jpeg', category: 'landscape', title: 'Desert Adventure', description: 'Breathtaking views of Moroccan desert landscapes' }
    ],
    culture: [
      { id: 13, src: '/images/Moroccan-Memories.jpeg', category: 'culture', title: 'Moroccan Memories', description: 'Travelers enjoying authentic desert experiences' },
      { id: 34, src: '/images/Traditional-Moroccan-Seating-Area.jpg', category: 'culture', title: 'Moroccan Hospitality', description: 'Traditional seating area for tea and relaxation' }
    ]
  };

  const categories: Category[] = [
    { id: 'all', name: 'All Photos', count: galleryImages.all.length, emoji: '🖼️' },
    { id: 'quad', name: 'Quad Biking', count: galleryImages.quad.length, emoji: '🏍️' },
    { id: 'camel', name: 'Camel Trekking', count: galleryImages.camel.length, emoji: '🐫' },
    { id: 'landscape', name: 'Desert Landscapes', count: galleryImages.landscape.length, emoji: '🏜️' },
    { id: 'culture', name: 'Moroccan Culture', count: galleryImages.culture.length, emoji: '🫖' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages.all 
    : galleryImages[selectedCategory];

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
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
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-white py-24">

      {/* Header */}
      <div className="bg-linear-to-b from-white to-amber-50/30 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 mb-6">
              <span className="text-amber-700 text-sm font-light tracking-widest">
                DESERT MOMENTS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6 leading-tight">
              Stories Through
              <span className="block text-amber-700 mt-2">Our Lens</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real moments of joy, adventure, and connection captured in the heart of the Agafay desert. 
              Every photo tells a story of the incredible experiences we share with our guests.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-3xl overflow-hidden border border-amber-100 hover:border-amber-300 transition-all duration-500 hover:scale-105 cursor-pointer bg-slate-200"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
                <div className="absolute inset-0 bg-linear-to-br from-amber-100 to-amber-200 animate-pulse flex items-center justify-center">
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
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