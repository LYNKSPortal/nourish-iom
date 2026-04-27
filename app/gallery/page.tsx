'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'meals', label: 'Meals' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'shop', label: 'Shop' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
  ];

  const images = [
    { id: 1, src: '/images/gallery/meal-1.jpg', category: 'meals', alt: 'Healthy meal box' },
    { id: 2, src: '/images/gallery/meal-2.jpg', category: 'meals', alt: 'High protein dish' },
    { id: 3, src: '/images/gallery/meal-3.jpg', category: 'meals', alt: 'Fresh prepared meal' },
    { id: 4, src: '/images/gallery/meal-4.jpg', category: 'meals', alt: 'Nutritious meal prep' },
    { id: 5, src: '/images/gallery/wrap-1.jpg', category: 'wraps', alt: 'Protein wrap' },
    { id: 6, src: '/images/gallery/wrap-2.jpg', category: 'wraps', alt: 'Burrito wrap' },
    { id: 7, src: '/images/gallery/shop-1.jpg', category: 'shop', alt: 'Nourish shop interior' },
    { id: 8, src: '/images/gallery/shop-2.jpg', category: 'shop', alt: 'Shop counter' },
    { id: 9, src: '/images/gallery/behind-1.jpg', category: 'behind-scenes', alt: 'Kitchen preparation' },
    { id: 10, src: '/images/gallery/behind-2.jpg', category: 'behind-scenes', alt: 'Chef cooking' },
    { id: 11, src: '/images/gallery/meal-5.jpg', category: 'meals', alt: 'Gourmet meal box' },
    { id: 12, src: '/images/gallery/meal-6.jpg', category: 'meals', alt: 'Healthy lunch option' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md: font-bold text-[#202020] mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take a look at our fresh, healthy meals and behind-the-scenes at Nourish
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#D95E25] text-white'
                    : 'bg-white text-[#202020] hover:bg-[#FBF2E0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 bg-gradient-to-br from-[#FBF2E0] to-[#D95E25]/30 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group flex items-center justify-center"
              onClick={() => setLightboxImage(image.src)}
            >
              <div className="text-center">
                <div className=" mb-2">
                  {image.category === 'meals' && '🍱'}
                  {image.category === 'wraps' && '🌯'}
                  {image.category === 'shop' && '🏪'}
                  {image.category === 'behind-scenes' && '👨‍🍳'}
                </div>
                <div className="text-sm text-gray-700 font-medium px-4">{image.alt}</div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <span className="text-white  opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍
                </span>
              </div>
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white  hover:text-gray-300"
              onClick={() => setLightboxImage(null)}
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-[#FBF2E0] to-[#D95E25]/30 rounded-lg p-12 max-w-3xl text-center">
              <div className=" mb-4">📸</div>
              <p className="text-white text-xl">Image Preview</p>
              <p className="text-white/70 text-sm mt-2">Add your actual images to see them here</p>
            </div>
          </div>
        )}

        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className=" font-bold text-[#202020] mb-4">
            Ready to Try Our Meals?
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full menu and place your order today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/our-dishes">View Dishes</Button>
            <Button href="/order-online" variant="secondary">Order Online</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
