import DishCard from '@/components/DishCard';
import { dishes } from '@/lib/data';

export default function OurDishes() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
}
