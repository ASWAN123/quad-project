/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
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

  // All your images organized by category
  const galleryImages: GalleryImages = {
    all: [
      { id: 1, src: '/images/1000092073.jpg', category: 'landscape', title: 'Golden Dunes Sunset', description: 'Breathtaking sunset over the Agafay desert' },
      { id: 2, src: '/images/1000091075.jpg', category: 'quad', title: 'Quad Biking Adventure', description: 'Thrilling ATV ride through desert terrain' },
      { id: 3, src: '/images/1000091074.jpg', category: 'camel', title: 'Camel Caravan', description: 'Traditional camel trekking experience' },
      { id: 4, src: '/images/1000090188.jpg', category: 'landscape', title: 'Desert Horizon', description: 'Vast desert landscapes under Moroccan sky' },
      { id: 5, src: '/images/1000090187.jpg', category: 'quad', title: 'Dune Exploration', description: 'Exploring hidden desert paths on quad bikes' },
      { id: 6, src: '/images/1000090185.jpg', category: 'camel', title: 'Berber Journey', description: 'Authentic camel riding with local guides' },
      { id: 7, src: '/images/1000090181.jpg', category: 'people', title: 'Happy Adventurers', description: 'Group photo with our desert explorers' },
      { id: 8, src: '/images/1000090176.jpg', category: 'landscape', title: 'Desert Serenity', description: 'Peaceful moments in the heart of Agafay' },
      { id: 9, src: '/images/1000090175.jpg', category: 'quad', title: 'Sunset Ride', description: 'Quad biking as the sun sets over dunes' },
      { id: 10, src: '/images/1000090174.jpg', category: 'camel', title: 'Traditional Trek', description: 'Experience ancient caravan routes' },
      { id: 11, src: '/images/1000090173.jpg', category: 'people', title: 'Desert Memories', description: 'Unforgettable moments with friends' },
      { id: 12, src: '/images/1000090171.jpg', category: 'landscape', title: 'Golden Hours', description: 'Magic hour lighting in the desert' },
      { id: 13, src: '/images/1000090170.jpg', category: 'quad', title: 'Desert Thrills', description: 'Adventure through golden sand dunes' },
      { id: 14, src: '/images/1000090169.jpg', category: 'camel', title: 'Sunset Caravan', description: 'Camel ride during golden hour' },
      { id: 15, src: '/images/1000090167.jpg', category: 'people', title: 'Group Adventure', description: 'Friends enjoying desert exploration' },
      { id: 16, src: '/images/1000090166.jpg', category: 'landscape', title: 'Desert Beauty', description: 'Stunning natural desert formations' },
      { id: 17, src: '/images/1000090165.jpg', category: 'quad', title: 'Off-Road Excitement', description: 'Quad biking through challenging terrain' },
      { id: 18, src: '/images/1000090164.jpg', category: 'camel', title: 'Desert Giants', description: 'Gentle camels in their natural habitat' },
      { id: 19, src: '/images/1000090163.jpg', category: 'people', title: 'Smiling Faces', description: 'Happy travelers creating memories' },
      { id: 20, src: '/images/1000090160.jpg', category: 'landscape', title: 'Endless Dunes', description: 'Expansive desert views' },
      { id: 21, src: '/images/1000090159.jpg', category: 'quad', title: 'Dust Trails', description: 'Quad bikes creating desert clouds' },
      { id: 22, src: '/images/1000090155.jpg', category: 'camel', title: 'Desert Walk', description: 'Peaceful camel trekking experience' },
      { id: 23, src: '/images/3fba3688-dd12-4084-b2c5-ef9985c10236.jpeg', category: 'people', title: 'Adventure Team', description: 'Our guides and happy customers' },
      { id: 24, src: '/images/3ffdda04-5867-4a6e-8d0d-2cc5f0327729.jpeg', category: 'landscape', title: 'Desert Colors', description: 'Vibrant desert sunset colors' },
      { id: 25, src: '/images/6fcf9589-0157-4346-bbbf-506206faa400.jpeg', category: 'quad', title: 'Powerful Machines', description: 'Ready for desert exploration' },
      { id: 26, src: '/images/7b96d1c7-58cd-42d4-b640-48ca7f81ed5f.jpeg', category: 'camel', title: 'Desert Companions', description: 'Friendly camels awaiting adventure' },
      { id: 27, src: '/images/8aab37be-9980-426f-8c4f-cdd0ab10272f.jpeg', category: 'people', title: 'Joyful Moments', description: 'Laughter and fun in the desert' },
      { id: 28, src: '/images/8e35bdd3-1774-41c3-a229-f50ab8774909.jpeg', category: 'landscape', title: 'Golden Sands', description: 'Beautiful desert textures' },
      { id: 29, src: '/images/8fc60428-5d04-4a6b-8812-87b20ef594a3.jpeg', category: 'quad', title: 'Desert Racing', description: 'High-speed desert adventure' },
      { id: 30, src: '/images/8fd5d81f-3b69-4868-a2dc-f4a156166a17.jpeg', category: 'camel', title: 'Traditional Experience', description: 'Authentic Berber camel trek' },
      { id: 31, src: '/images/9c7ba39c-70b7-4044-8c3f-92a76f58dabb.jpeg', category: 'people', title: 'Desert Friends', description: 'Making memories together' },
      { id: 32, src: '/images/357b70ca-160f-4643-9b02-869fa795c87b.jpeg', category: 'landscape', title: 'Vast Horizons', description: 'Endless desert beauty' },
      { id: 33, src: '/images/451c3993-1b3a-47e6-bca6-850aba523293.jpeg', category: 'quad', title: 'Dune Challenge', description: 'Conquering sandy slopes' },
      { id: 34, src: '/images/708a902e-1119-4283-938d-c5f2c9463195.jpeg', category: 'camel', title: 'Sunset Journey', description: 'Camel ride at magical hour' },
      { id: 35, src: '/images/811cdeff-4c64-4ed9-b08a-698623ac21cf.jpeg', category: 'people', title: 'Happy Travelers', description: 'Smiles all around' },
      { id: 36, src: '/images/983f6d01-2e8d-4988-988b-e43aa115a7cd.jpeg', category: 'landscape', title: 'Desert Dreams', description: 'Picture perfect desert scene' },
      { id: 37, src: '/images/9671f312-f3ef-4c01-97fc-569752103450.jpeg', category: 'quad', title: 'Adventure Ready', description: 'Gearing up for fun' },
      { id: 38, src: '/images/067999f4-1f6d-4f8e-b807-e088fe7d386c.jpeg', category: 'camel', title: 'Gentle Giants', description: 'Camels in the golden light' },
      { id: 39, src: '/images/547054ff-1396-49c7-b46f-7e373cf45b14.jpeg', category: 'people', title: 'Group Fun', description: 'Shared desert experience' },
      { id: 40, src: '/images/2712278f-3686-43ef-82d2-64463b9a6e78.jpeg', category: 'landscape', title: 'Natural Beauty', description: 'Desert landscape artistry' },
      { id: 41, src: '/images/a0491123-bf10-42e0-9287-542d57cacd1f.jpeg', category: 'quad', title: 'Power Ride', description: 'Quad biking excitement' },
      { id: 42, src: '/images/ae480951-1454-491a-9288-63c35074f8f0.jpeg', category: 'camel', title: 'Desert Tradition', description: 'Ancient travel methods' },
      { id: 43, src: '/images/d2d348b8-1015-4415-9612-6a64ecca3ca9.jpeg', category: 'people', title: 'Memory Makers', description: 'Creating stories together' },
      { id: 44, src: '/images/dad2797f-d311-4bd2-8895-2b62b93ce6e3.jpeg', category: 'landscape', title: 'Sandy Waves', description: 'Desert dune patterns' },
      { id: 45, src: '/images/eccb202d-4078-4c8a-91ca-1cd735c61e9b.jpeg', category: 'quad', title: 'Thrill Seekers', description: 'Adrenaline in the desert' },
      { id: 46, src: '/images/ee091071-7fcd-47b6-8786-ed5cd7eff97b.jpeg', category: 'camel', title: 'Peaceful Trek', description: 'Slow and steady desert journey' }
    ],
    quad: [
      { id: 2, src: '/images/1000091075.jpg', category: 'quad', title: 'Quad Biking Adventure', description: 'Thrilling ATV ride through desert terrain' },
      { id: 5, src: '/images/1000090187.jpg', category: 'quad', title: 'Dune Exploration', description: 'Exploring hidden desert paths on quad bikes' },
      { id: 9, src: '/images/1000090175.jpg', category: 'quad', title: 'Sunset Ride', description: 'Quad biking as the sun sets over dunes' },
      { id: 13, src: '/images/1000090170.jpg', category: 'quad', title: 'Desert Thrills', description: 'Adventure through golden sand dunes' },
      { id: 17, src: '/images/1000090165.jpg', category: 'quad', title: 'Off-Road Excitement', description: 'Quad biking through challenging terrain' },
      { id: 21, src: '/images/1000090159.jpg', category: 'quad', title: 'Dust Trails', description: 'Quad bikes creating desert clouds' },
      { id: 25, src: '/images/6fcf9589-0157-4346-bbbf-506206faa400.jpeg', category: 'quad', title: 'Powerful Machines', description: 'Ready for desert exploration' },
      { id: 29, src: '/images/8fc60428-5d04-4a6b-8812-87b20ef594a3.jpeg', category: 'quad', title: 'Desert Racing', description: 'High-speed desert adventure' },
      { id: 33, src: '/images/451c3993-1b3a-47e6-bca6-850aba523293.jpeg', category: 'quad', title: 'Dune Challenge', description: 'Conquering sandy slopes' },
      { id: 37, src: '/images/9671f312-f3ef-4c01-97fc-569752103450.jpeg', category: 'quad', title: 'Adventure Ready', description: 'Gearing up for fun' },
      { id: 41, src: '/images/a0491123-bf10-42e0-9287-542d57cacd1f.jpeg', category: 'quad', title: 'Power Ride', description: 'Quad biking excitement' },
      { id: 45, src: '/images/eccb202d-4078-4c8a-91ca-1cd735c61e9b.jpeg', category: 'quad', title: 'Thrill Seekers', description: 'Adrenaline in the desert' }
    ],
    camel: [
      { id: 3, src: '/images/1000091074.jpg', category: 'camel', title: 'Camel Caravan', description: 'Traditional camel trekking experience' },
      { id: 6, src: '/images/1000090185.jpg', category: 'camel', title: 'Berber Journey', description: 'Authentic camel riding with local guides' },
      { id: 10, src: '/images/1000090174.jpg', category: 'camel', title: 'Traditional Trek', description: 'Experience ancient caravan routes' },
      { id: 14, src: '/images/1000090169.jpg', category: 'camel', title: 'Sunset Caravan', description: 'Camel ride during golden hour' },
      { id: 18, src: '/images/1000090164.jpg', category: 'camel', title: 'Desert Giants', description: 'Gentle camels in their natural habitat' },
      { id: 22, src: '/images/1000090155.jpg', category: 'camel', title: 'Desert Walk', description: 'Peaceful camel trekking experience' },
      { id: 26, src: '/images/7b96d1c7-58cd-42d4-b640-48ca7f81ed5f.jpeg', category: 'camel', title: 'Desert Companions', description: 'Friendly camels awaiting adventure' },
      { id: 30, src: '/images/8fd5d81f-3b69-4868-a2dc-f4a156166a17.jpeg', category: 'camel', title: 'Traditional Experience', description: 'Authentic Berber camel trek' },
      { id: 34, src: '/images/708a902e-1119-4283-938d-c5f2c9463195.jpeg', category: 'camel', title: 'Sunset Journey', description: 'Camel ride at magical hour' },
      { id: 38, src: '/images/067999f4-1f6d-4f8e-b807-e088fe7d386c.jpeg', category: 'camel', title: 'Gentle Giants', description: 'Camels in the golden light' },
      { id: 42, src: '/images/ae480951-1454-491a-9288-63c35074f8f0.jpeg', category: 'camel', title: 'Desert Tradition', description: 'Ancient travel methods' },
      { id: 46, src: '/images/ee091071-7fcd-47b6-8786-ed5cd7eff97b.jpeg', category: 'camel', title: 'Peaceful Trek', description: 'Slow and steady desert journey' }
    ],
    landscape: [
      { id: 1, src: '/images/1000092073.jpg', category: 'landscape', title: 'Golden Dunes Sunset', description: 'Breathtaking sunset over the Agafay desert' },
      { id: 4, src: '/images/1000090188.jpg', category: 'landscape', title: 'Desert Horizon', description: 'Vast desert landscapes under Moroccan sky' },
      { id: 8, src: '/images/1000090176.jpg', category: 'landscape', title: 'Desert Serenity', description: 'Peaceful moments in the heart of Agafay' },
      { id: 12, src: '/images/1000090171.jpg', category: 'landscape', title: 'Golden Hours', description: 'Magic hour lighting in the desert' },
      { id: 16, src: '/images/1000090166.jpg', category: 'landscape', title: 'Desert Beauty', description: 'Stunning natural desert formations' },
      { id: 20, src: '/images/1000090160.jpg', category: 'landscape', title: 'Endless Dunes', description: 'Expansive desert views' },
      { id: 24, src: '/images/3ffdda04-5867-4a6e-8d0d-2cc5f0327729.jpeg', category: 'landscape', title: 'Desert Colors', description: 'Vibrant desert sunset colors' },
      { id: 28, src: '/images/8e35bdd3-1774-41c3-a229-f50ab8774909.jpeg', category: 'landscape', title: 'Golden Sands', description: 'Beautiful desert textures' },
      { id: 32, src: '/images/357b70ca-160f-4643-9b02-869fa795c87b.jpeg', category: 'landscape', title: 'Vast Horizons', description: 'Endless desert beauty' },
      { id: 36, src: '/images/983f6d01-2e8d-4988-988b-e43aa115a7cd.jpeg', category: 'landscape', title: 'Desert Dreams', description: 'Picture perfect desert scene' },
      { id: 40, src: '/images/2712278f-3686-43ef-82d2-64463b9a6e78.jpeg', category: 'landscape', title: 'Natural Beauty', description: 'Desert landscape artistry' },
      { id: 44, src: '/images/dad2797f-d311-4bd2-8895-2b62b93ce6e3.jpeg', category: 'landscape', title: 'Sandy Waves', description: 'Desert dune patterns' }
    ],
    people: [
      { id: 7, src: '/images/1000090181.jpg', category: 'people', title: 'Happy Adventurers', description: 'Group photo with our desert explorers' },
      { id: 11, src: '/images/1000090173.jpg', category: 'people', title: 'Desert Memories', description: 'Unforgettable moments with friends' },
      { id: 15, src: '/images/1000090167.jpg', category: 'people', title: 'Group Adventure', description: 'Friends enjoying desert exploration' },
      { id: 19, src: '/images/1000090163.jpg', category: 'people', title: 'Smiling Faces', description: 'Happy travelers creating memories' },
      { id: 23, src: '/images/3fba3688-dd12-4084-b2c5-ef9985c10236.jpeg', category: 'people', title: 'Adventure Team', description: 'Our guides and happy customers' },
      { id: 27, src: '/images/8aab37be-9980-426f-8c4f-cdd0ab10272f.jpeg', category: 'people', title: 'Joyful Moments', description: 'Laughter and fun in the desert' },
      { id: 31, src: '/images/9c7ba39c-70b7-4044-8c3f-92a76f58dabb.jpeg', category: 'people', title: 'Desert Friends', description: 'Making memories together' },
      { id: 35, src: '/images/811cdeff-4c64-4ed9-b08a-698623ac21cf.jpeg', category: 'people', title: 'Happy Travelers', description: 'Smiles all around' },
      { id: 39, src: '/images/547054ff-1396-49c7-b46f-7e373cf45b14.jpeg', category: 'people', title: 'Group Fun', description: 'Shared desert experience' },
      { id: 43, src: '/images/d2d348b8-1015-4415-9612-6a64ecca3ca9.jpeg', category: 'people', title: 'Memory Makers', description: 'Creating stories together' }
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-24">
      <Head>
        <title>Gallery | QuadCamelMarrakesh - Desert Adventure Photos</title>
        <meta name="description" content="Explore stunning photos from our quad biking and camel trekking adventures in the Agafay desert near Marrakech" />
      </Head>

      {/* Header */}
      <div className="bg-gradient-to-b from-white to-amber-50/30 border-b border-amber-100">
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
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 animate-pulse flex items-center justify-center">
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