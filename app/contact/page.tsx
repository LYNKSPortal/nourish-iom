'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { businessInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md: font-bold text-[#202020] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className=" font-bold text-[#202020] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#D95E25]  mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#202020]">Address</h3>
                    <p className="text-gray-700">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#D95E25]  mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#202020]">Phone</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-gray-700 hover:text-[#D95E25]">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#D95E25]  mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#202020]">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-gray-700 hover:text-[#D95E25]">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#D95E25]  mr-4">💬</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#202020]">WhatsApp</h3>
                    <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#D95E25]">
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#D95E25]  mr-4">🌐</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#202020]">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href={businessInfo.social.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#D95E25]"
                      >
                        Facebook
                      </a>
                      {businessInfo.social.instagram && (
                        <a 
                          href={businessInfo.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#D95E25]"
                        >
                          Instagram
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF2E0] rounded-lg p-8">
              <h2 className=" font-bold text-[#202020] mb-4">
                Opening Hours
              </h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>{businessInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>{businessInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>{businessInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className=" font-bold text-[#202020] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D95E25] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D95E25] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D95E25] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D95E25] focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#D95E25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c24e1a] transition-colors"
                  >
                    Send Message
                  </button>
                  <Button 
                    href={`tel:${businessInfo.phone}`} 
                    variant="secondary"
                    className="flex-1"
                  >
                    Call Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.8!2d-4.4795!3d54.1509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA5JzAzLjIiTiA0wrAyOCc0Ni4yIlc!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nourish Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
