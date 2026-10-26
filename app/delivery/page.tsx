import Button from '@/components/Button';
import { businessInfo } from '@/lib/data';

export default function Delivery() {
  const steps = [
    { title: 'Go to www.Nourish.im', description: 'Head over to our website to get started.' },
    { title: 'Click on the 6 Box Home Delivery Bundle', description: 'Find the bundle deal on our ordering page.' },
    { title: 'Select the Boxes You Want', description: 'Pick your favourite meals from our menu.' },
    { title: 'Fill in Your Details Then Pay', description: 'Add your delivery address and complete checkout securely.' },
    { title: 'Secure Your Boxes', description: "Make sure you have a secure cool box outside or similar for the boxes if you're not in.", highlight: true },
    { title: 'Nourish Delivered to Your Home Island Wide', description: "Sit back and relax — we'll take care of the rest." },
  ];

  return (
    <div>
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/outside-the-shop.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/90 font-semibold uppercase tracking-wide mb-4">
            Home Delivery &ndash; Island Wide
          </p>
          <h1 className="font-bold text-white mb-6" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
            Nourish Delivers!
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Fit body fuel designed to keep you full longer and give your body what it needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#D95E25] text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-2" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>
            10% Off for a 6 Meal Box Bundle
          </h2>
          <p className="text-2xl font-bold mb-8">Save £1 per box!!</p>
          <Button href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" target="_blank" className="bg-white !text-[#D95E25] hover:bg-gray-100">
            Order Your Bundle Now
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center">
            All our meals are high in protein and macro balanced; they last for 3 to 4 days &amp; are super fresh, locally made, healthy and tasty &ndash; simply reheat and eat!
          </p>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            Get more free time in your life to do fun stuff rather than shop, prep and cook.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-center mb-12 text-[#202020]">
            Steps to Follow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`p-6 rounded-lg shadow-sm text-center ${
                  step.highlight ? 'bg-red-50 border-2 border-red-600' : 'bg-[#FBF2E0]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full text-white font-bold flex items-center justify-center mx-auto mb-4 ${
                    step.highlight ? 'bg-red-600' : 'bg-[#D95E25]'
                  }`}
                >
                  {index + 1}
                </div>
                <h3 className={`font-bold mb-2 ${step.highlight ? 'text-red-600' : 'text-[#202020]'}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.highlight ? 'text-red-600' : 'text-gray-700'}`}>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" target="_blank">
              Start Your Order
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4 text-[#202020]">
            Questions About Delivery?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Give us a call, drop us an email or message us on WhatsApp and we'll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`tel:${businessInfo.phone}`} variant="primary">
              Call: {businessInfo.phone}
            </Button>
            <Button href={businessInfo.whatsapp} target="_blank" variant="secondary">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
