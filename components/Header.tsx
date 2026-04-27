'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="tel:+441624123456" 
            className="hidden md:flex items-center gap-2 bg-[#025336] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#034028] transition-colors self-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Give Andy a Call
          </Link>

          <Link href="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D95E25]" style={{ lineHeight: '1', marginTop: '0.15em' }}>Nourish</h1>
          </Link>

          <Link 
            href="/order-online" 
            className="flex items-center gap-2 bg-[#D95E25] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c24e1a] transition-colors self-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Order Online
          </Link>
        </div>

        <nav className="border-t border-gray-200">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-full py-3 text-left font-medium text-[#202020]"
          >
            Menu {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:justify-center md:space-x-8 py-4`}>
            <li><Link href="/" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Home</Link></li>
            <li><Link href="/our-dishes" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Our Dishes</Link></li>
            <li><Link href="/packages" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Packages</Link></li>
            <li><Link href="/order-online" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Order Online</Link></li>
            <li><Link href="/gallery" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
