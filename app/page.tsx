import Button from '@/components/Button';
import DishCard from '@/components/DishCard';
import { dishes, businessInfo } from '@/lib/data';

export default function Home() {
  const featuredDishes = dishes.slice(-3).reverse();

  return (
    <div>
      <section className="relative bg-black py-32 md:py-40 lg:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/outside-the-shop.jpeg)' }}
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
            <Button href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" variant="secondary" target="_blank">Order Online</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-4xl mx-auto mb-12 text-center text-lg leading-relaxed text-gray-700">
            Welcome to Nourish, where healthy meets fast! Based in Douglas, Isle of Man, we&apos;re a proudly Manx business dedicated to providing high-quality, high-protein, nutrient-dense meals. Our chef-prepared meal boxes are made fresh daily with 100% natural ingredients, designed to fuel your body and keep you going. Whether you need a quick, nutritious bite or convenient meal prep solutions, we&apos;ve got you covered. Order now and power your day the Nourish way!
          </p>
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

      <section className="py-16 bg-[#D95E25] text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold mb-6" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
              Treat Yo Self Card
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Save 10% off every box bought in the shop with the card, simply top it up with credit whenever it runs out.
            </p>
            
            <div className="bg-white text-[#202020] rounded-lg p-8 mb-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-6xl mb-4">💳</div>
                  <h3 className="font-bold text-2xl mb-3">How It Works</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-[#025336] mr-2 mt-1">✓</span>
                      <span>One-time card fee: <strong>£10</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#025336] mr-2 mt-1">✓</span>
                      <span>Every box: <strong>£8.95</strong> instead of £9.95</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#025336] mr-2 mt-1">✓</span>
                      <span>Top up with credit anytime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#025336] mr-2 mt-1">✓</span>
                      <span>Save 10% on every purchase</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#FBF2E0] p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">It's a No-Brainer!</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span>Card Fee:</span>
                      <span className="font-bold">£10.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-300">
                      <span>Price per box:</span>
                      <span className="font-bold text-[#025336]">£8.95</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>You save:</span>
                      <span className="font-bold text-[#D95E25]">£1.00 per box</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-4 italic">
                      Card pays for itself after just 10 boxes!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button href="/contact" className="bg-white !text-[#D95E25] hover:bg-gray-100">
              Get Your Card Today
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#202020]">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              href="https://www.tripadvisor.com/Restaurant_Review-g190928-d32988986-Reviews-Nourish-Douglas_Isle_of_Man.html" 
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
    </div>
  );
}
