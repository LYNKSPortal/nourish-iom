import Button from '@/components/Button';
import DishCard from '@/components/DishCard';
import { dishes, businessInfo } from '@/lib/data';

export default function Home() {
  const featuredDishes = dishes.slice(0, 6);

  return (
    <div>
      <section className="relative bg-black py-24 md:py-32 lg:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/bunch-of-dishes.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-white mb-6" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
            Welcome to Nourish
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Healthy, high-protein, chef-prepared meals made fresh daily
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center gap-2">
              <span className="font-semibold text-[#D95E25] text-xl">✓</span>
              <span className="whitespace-nowrap">High-protein</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center gap-2">
              <span className="font-semibold text-[#D95E25] text-xl">✓</span>
              <span className="whitespace-nowrap">Nutrient-dense</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center gap-2">
              <span className="font-semibold text-[#D95E25] text-xl">✓</span>
              <span className="whitespace-nowrap">100% natural ingredients</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/our-dishes">View Our Dishes</Button>
            <Button href="/order-online" variant="secondary">Order Online</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#D95E25] text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
            10% OFF OUR 6 BOX PACKAGE
          </h2>
          <p className="text-xl mb-6">Island-wide home delivery</p>
          <Button href="/packages" className="bg-white !text-[#D95E25] hover:bg-gray-100">
            View Offer
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FBF2E0] p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-bold mb-3 text-[#202020]">High Protein Meals</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Packed with quality protein to fuel your day</p>
            </div>
            <div className="bg-[#FBF2E0] p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="font-bold mb-3 text-[#202020]">Fresh Daily</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Made fresh every day with local ingredients</p>
            </div>
            <div className="bg-[#FBF2E0] p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold mb-3 text-[#202020]">Natural Ingredients</h3>
              <p className="text-gray-700 text-sm leading-relaxed">No artificial additives or preservatives</p>
            </div>
            <div className="bg-[#FBF2E0] p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold mb-3 text-[#202020]">No-Prep Convenience</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Ready to eat, no cooking required</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#202020]">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/our-dishes">View All Dishes</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#202020]">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.google.com/search?q=nourish+douglas+isle+of+man" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">Google</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
            <a 
              href="https://www.tripadvisor.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className=" mb-3">🦉</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">TripAdvisor</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
            <a 
              href="https://www.facebook.com/nourishiom" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className=" mb-3">👍</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">Facebook</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
            <a 
              href="https://www.trustpilot.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">Trustpilot</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#202020]">
            Location & Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FBF2E0] p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-[#202020]">Visit Us</h3>
              <p className="text-gray-700 mb-6">{businessInfo.address}</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Mon–Fri:</strong> {businessInfo.hours.monday}</p>
                <p><strong>Sat:</strong> {businessInfo.hours.saturday}</p>
                <p><strong>Sun:</strong> {businessInfo.hours.sunday}</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.8!2d-4.4795!3d54.1509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA5JzAzLjIiTiA0wrAyOCc0Ni4yIlc!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nourish Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#025336] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-6" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
            Order fresh, healthy meals today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your journey to better nutrition with Nourish
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order-online" className="bg-[#D95E25] !text-white hover:bg-[#c24e1a]">
              Order Online
            </Button>
            <Button href="/packages" className="bg-white !text-[#025336] hover:bg-gray-100">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
