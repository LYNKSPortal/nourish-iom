import Button from '@/components/Button';
import { businessInfo } from '@/lib/data';

export default function OrderOnline() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md: font-bold text-[#202020] mb-4">
            Order Online
          </h1>
          <p className="text-xl text-gray-700">
            Choose your meals and we'll deliver them fresh to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className=" mb-4">🍱</div>
            <h2 className=" font-bold text-[#202020] mb-4">
              Individual Meals
            </h2>
            <p className="text-gray-600 mb-6">
              Order single meals from our full menu
            </p>
            <div className=" font-bold text-[#D95E25] mb-6">
              £9.95
            </div>
            <Button href="/our-dishes" className="w-full">
              Browse Menu
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-4 border-[#D95E25] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D95E25] text-white px-4 py-1 rounded-full font-bold text-sm">
              POPULAR
            </div>
            <div className=" mb-4">📦</div>
            <h2 className=" font-bold text-[#202020] mb-4">
              6-Box Package
            </h2>
            <p className="text-gray-600 mb-6">
              Save 10% with our 6-meal package
            </p>
            <div className=" font-bold text-[#D95E25] mb-2">
              £52.50
            </div>
            <div className="text-sm text-gray-600 mb-6">
              £8.75 per meal
            </div>
            <Button href="/packages" className="w-full">
              Get Package
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className=" mb-4">🎁</div>
            <h2 className=" font-bold text-[#202020] mb-4">
              12-Box Package
            </h2>
            <p className="text-gray-600 mb-6">
              Best value - save up to 30%
            </p>
            <div className=" font-bold text-[#D95E25] mb-2">
              £105.00
            </div>
            <div className="text-sm text-gray-600 mb-6">
              £8.75 per meal
            </div>
            <Button href="/packages" className="w-full">
              Get Package
            </Button>
          </div>
        </div>

        <div className="bg-[#FBF2E0] rounded-lg p-8 mb-12">
          <h2 className=" font-bold text-[#202020] mb-6 text-center">
            Delivery & Pickup Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className=" mr-4">🚚</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#202020]">Island-wide Delivery</h3>
                <p className="text-gray-700">
                  We deliver fresh meals across the Isle of Man. Order before 2pm for same-day delivery.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" mr-4">🏪</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#202020]">Shop Pickup</h3>
                <p className="text-gray-700">
                  Prefer to collect? Pick up your order from our Douglas location during opening hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className=" font-bold text-[#202020] mb-6">
            Ready to Order?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Give us a call or visit our shop to place your order. We're here to help you find the perfect meals for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`tel:${businessInfo.phone}`} variant="primary">
              Call to Order: {businessInfo.phone}
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            <strong>Opening Hours:</strong>
          </p>
          <p>Mon–Fri: {businessInfo.hours.monday}</p>
          <p>Sat: {businessInfo.hours.saturday}</p>
          <p>Sun: {businessInfo.hours.sunday}</p>
        </div>
      </div>
    </div>
  );
}
