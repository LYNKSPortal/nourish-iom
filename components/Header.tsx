'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu button clicked, current state:', mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:py-8">
            <Link 
              href="https://wa.me/447624462222" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#025336] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#034028] transition-colors self-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Whatsapp Andy
            </Link>

            <Link href="/" className="flex-shrink-0 flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#D95E25]" style={{ lineHeight: '1', marginTop: '0.15em' }}>Nourish</h1>
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden flex items-center justify-center gap-2 text-lg font-medium bg-[#025336] text-white px-4 py-2 border-2 border-[#025336] rounded-lg touch-manipulation hover:bg-[#034028]"
            >
              <span className="text-xl leading-none">{mobileMenuOpen ? '✕' : '☰'}</span>
              <span className="leading-none">MENU</span>
            </button>

            <Link 
              href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#D95E25] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c24e1a] transition-colors self-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Order Online
            </Link>
          </div>

          <nav className="md:border-t-0">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:justify-center md:space-x-8 py-4 border-t border-gray-200">
              <li><Link href="/" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Home</Link></li>
              <li><Link href="/our-dishes" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Our Dishes</Link></li>
              <li><Link href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" target="_blank" rel="noopener noreferrer" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Order Online</Link></li>
              <li><Link href="/contact" className="block py-2 md:py-0 text-[#202020] hover:text-[#D95E25] font-medium transition-colors">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#D95E25] z-[100] flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="absolute top-6 right-6 text-3xl font-medium text-white touch-manipulation"
          >
            ✕
          </button>
          <ul className="flex flex-col items-center space-y-8 text-center">
            <li><Link href="/" onClick={toggleMenu} className="text-4xl font-bold text-white hover:text-[#FBF2E0] transition-colors font-bolota" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>Home</Link></li>
            <li><Link href="/our-dishes" onClick={toggleMenu} className="text-4xl font-bold text-white hover:text-[#FBF2E0] transition-colors font-bolota" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>Our Dishes</Link></li>
            <li><Link href="https://nourishiom.touchtakeaway.net/menu/MEAL-BOXES" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-4xl font-bold text-white hover:text-[#FBF2E0] transition-colors font-bolota" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>Order Online</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className="text-4xl font-bold text-white hover:text-[#FBF2E0] transition-colors font-bolota" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)' }}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
