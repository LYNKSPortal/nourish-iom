'use client';

import { useState } from 'react';
import DishCard from '@/components/DishCard';
import { dishes } from '@/lib/data';

export default function OurDishes() {
  const [filter, setFilter] = useState('all');

  const filteredDishes = dishes.filter((dish) => {
    if (filter === 'all') return true;
    if (filter === 'high-protein') return dish.tags.includes('High Protein');
    if (filter === 'gluten-free') return dish.tags.includes('Gluten Free');
    if (filter === 'vegetarian') return dish.tags.includes('Vegetarian');
    if (filter === 'boxes') return dish.category === 'box';
    if (filter === 'wraps') return dish.category === 'wrap';
    if (filter === 'burritos') return dish.category === 'burrito';
    if (filter === 'pizza') return dish.category === 'pizza';
    return true;
  });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'high-protein', label: 'High Protein' },
    { id: 'gluten-free', label: 'Gluten Free' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'boxes', label: 'Boxes' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'burritos', label: 'Burritos' },
    { id: 'pizza', label: 'Pizza' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md: font-bold text-[#202020] mb-4">
            Our Dishes
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fresh, high-protein meals made daily with natural ingredients. Every dish is carefully crafted to fuel your body and satisfy your taste buds.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === f.id
                    ? 'bg-[#D95E25] text-white'
                    : 'bg-white text-[#202020] hover:bg-[#FBF2E0]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No dishes found with the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
