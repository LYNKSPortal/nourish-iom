import Button from '@/components/Button';
import { packages } from '@/lib/data';

export default function Packages() {
  return (
    <div className="py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md: font-bold text-[#202020] mb-4">
            The Nourish Package
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Healthy eating — zero stress required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.numberOfMeals}
              className="bg-white rounded-lg shadow-xl p-8 border-4 border-[#D95E25] relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D95E25] text-white px-6 py-2 rounded-full font-bold text-sm">
                {pkg.savings}
              </div>
              
              <div className="text-center mb-6">
                <div className=" font-bold text-[#202020] mb-2">
                  {pkg.numberOfMeals}
                </div>
                <div className="text-gray-600 text-lg">Meal Credits</div>
              </div>

              <div className="text-center mb-6">
                <div className=" font-bold text-[#D95E25] mb-2">
                  £{pkg.totalPrice.toFixed(2)}
                </div>
                <div className="text-gray-600">
                  £{pkg.pricePerMeal.toFixed(2)} per meal
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-[#025336] mr-2">✓</span>
                  <span className="text-gray-700">Fresh, chef-prepared meals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#025336] mr-2">✓</span>
                  <span className="text-gray-700">High protein, low fat</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#025336] mr-2">✓</span>
                  <span className="text-gray-700">Real ingredients</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#025336] mr-2">✓</span>
                  <span className="text-gray-700">Flexible pickup</span>
                </div>
              </div>

              <Button href="/order-online" className="w-full">
                Get Your Nourish Card
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className=" font-bold text-[#202020] mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#D95E25] text-white w-16 h-16 rounded-full flex items-center justify-center  font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#202020]">Get a Nourish Card</h3>
              <p className="text-gray-600">
                Purchase a card with 6 or 12 meal credits
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D95E25] text-white w-16 h-16 rounded-full flex items-center justify-center  font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#202020]">Visit the Shop</h3>
              <p className="text-gray-600">
                Come in anytime during opening hours
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D95E25] text-white w-16 h-16 rounded-full flex items-center justify-center  font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#202020]">Use Your Credits</h3>
              <p className="text-gray-600">
                Redeem meals whenever you want
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FBF2E0] rounded-lg p-8 mb-16">
          <h2 className=" font-bold text-[#202020] mb-6 text-center">
            Why Choose a Package?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className=" mr-4">🚫</div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#202020]">No Cooking</h3>
                <p className="text-gray-700">Ready to eat, just heat and enjoy</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" mr-4">🛒</div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#202020]">No Shopping</h3>
                <p className="text-gray-700">We handle all the ingredients</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" mr-4">😌</div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#202020]">No Stress</h3>
                <p className="text-gray-700">Meal planning made simple</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" mr-4">⏰</div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#202020]">Saves Time</h3>
                <p className="text-gray-700">More time for what matters</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className=" font-bold text-[#202020] mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.google.com/search?q=nourish+douglas+isle+of+man" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FBF2E0] p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <div className=" mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">Google</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
            <a 
              href="https://www.tripadvisor.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FBF2E0] p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
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
              className="bg-[#FBF2E0] p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
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
              className="bg-[#FBF2E0] p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <div className=" mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-[#202020]">Trustpilot</h3>
              <p className="text-sm text-gray-600 mb-3">See our reviews</p>
              <span className="text-[#D95E25] font-medium text-sm">View or Leave Review →</span>
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button href="/order-online">Order Online</Button>
        </div>
      </div>
    </div>
  );
}
