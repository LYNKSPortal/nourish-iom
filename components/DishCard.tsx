import { Dish } from '@/lib/types';
import Image from 'next/image';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-square bg-gradient-to-br from-[#FBF2E0] to-[#D95E25]/20">
        <div className="absolute top-3 right-3 bg-[#025336] text-white px-3 py-1 rounded-full shadow-md z-10">
          <span className="font-medium text-xs">£{dish.price.toFixed(2)}</span>
        </div>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#202020] mb-3 leading-tight">{dish.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{dish.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {dish.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-[#FBF2E0] text-[#025336] text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-3 text-center text-xs border-t border-gray-200 pt-4">
          <div>
            <div className="font-bold text-[#D95E25] text-sm">{dish.protein}g</div>
            <div className="text-gray-500 text-xs mt-1">Protein</div>
          </div>
          <div>
            <div className="font-bold text-[#D95E25] text-sm">{dish.carbs}g</div>
            <div className="text-gray-500 text-xs mt-1">Carbs</div>
          </div>
          <div>
            <div className="font-bold text-[#D95E25] text-sm">{dish.fat}g</div>
            <div className="text-gray-500 text-xs mt-1">Fat</div>
          </div>
          <div>
            <div className="font-bold text-[#D95E25] text-sm">{dish.calories}</div>
            <div className="text-gray-500 text-xs mt-1">Cals</div>
          </div>
        </div>
      </div>
    </div>
  );
}
