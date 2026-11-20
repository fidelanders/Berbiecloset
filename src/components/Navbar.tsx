import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { INSTAGRAM_URL, TIKTOK_URL, getWhatsAppUrl } from '../data/products';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: { id?: number }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#050505] text-[#b3a17f] text-[9.5px] md:text-[10px] tracking-[0.14em] uppercase py-2.5 px-4 text-center border-b border-[#261f14]">
        A considered wardrobe · Made to make a statement · Lagos, Nigeria
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0b0b0a]/95 backdrop-blur-md border-b border-[#382e1e] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-22 gap-4">
            
            {/* Brand Wordmark & Monogram Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
              aria-label="BERBIECLOSET Home"
            >
              <img
                src="assets/img/logo.webp"
                alt="BERBIECLOSET crowned monogram logo"
                className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'berbiecloset-logo.png';
                }}
              />
              <span className="hidden font-serif text-lg md:text-xl font-bold tracking-tight text-[#f2e8d4]">
                BERBIECLOSET
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.12em] uppercase text-[#f2e8d4]/90">
              <button
                onClick={() => handleNavClick('shop')}
                className={`transition-colors hover:text-[#c6a15b] py-2 relative ${
                  currentPage === 'shop' ? 'text-[#c6a15b]' : ''
                }`}
              >
                Shop
                {currentPage === 'shop' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c6a15b]" />
                )}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`transition-colors hover:text-[#c6a15b] py-2 relative ${
                  currentPage === 'about' ? 'text-[#c6a15b]' : ''
                }`}
              >
                Our Story
                {currentPage === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c6a15b]" />
                )}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`transition-colors hover:text-[#c6a15b] py-2 relative ${
                  currentPage === 'contact' ? 'text-[#c6a15b]' : ''
                }`}
              >
                Contact
                {currentPage === 'contact' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c6a15b]" />
                )}
              </button>
            </nav>

            {/* Right Zone: Socials & Bag Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Instagram link (desktop) */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1 text-[10px] tracking-[0.08em] uppercase text-[#c6a15b] hover:text-[#dfbd7b] transition-colors px-2 py-1"
              >
                <span>@berbiecloset</span>
                <span className="text-[#8e7a5c]">· IG</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {/* TikTok link (desktop) */}
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1 text-[10px] tracking-[0.08em] uppercase text-[#c6a15b] hover:text-[#dfbd7b] transition-colors px-2 py-1"
              >
                <span>TikTok</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href={getWhatsAppUrl('Hello BERBIECLOSET, I have an enquiry about your collection.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-[10px] tracking-[0.08em] uppercase text-[#c6a15b] hover:text-[#dfbd7b] transition-colors px-2.5 py-1.5 border border-[#382e1e] rounded-full hover:border-[#c6a15b]/50"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {/* Bag Trigger Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 border border-[#c6a15b] rounded-full text-[#f2e8d4] text-[11px] tracking-[0.08em] uppercase hover:bg-[#c6a15b]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]"
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#c6a15b]" />
                <span className="hidden sm:inline">Bag</span>
                <span className="font-semibold text-[#c6a15b] tabular-nums">({itemCount})</span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#f2e8d4] hover:text-[#c6a15b] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub-header Breadcrumb / Back button when not on home */}
        {currentPage !== 'home' && (
          <div className="bg-[#14120e] border-t border-[#2a2216] px-4 sm:px-6 lg:px-8 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
              <button
                onClick={() => handleNavClick(currentPage === 'product' ? 'shop' : 'home')}
                className="inline-flex items-center gap-1.5 text-[#c6a15b] hover:text-[#dfbd7b] text-[11px] tracking-wider uppercase transition-colors"
              >
                <span>←</span>
                <span>{currentPage === 'product' ? 'Back to Collection' : 'Back to Home'}</span>
              </button>
              <span className="text-[#857662] text-[10px] tracking-widest uppercase">
                {currentPage.toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0e0c0a] border-l border-[#382e1e] p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#282115]">
                <img
                  src="assets/img/logo.webp"
                  alt="BERBIECLOSET"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'berbiecloset-logo.png';
                  }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#f2e8d4] hover:text-[#c6a15b] focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`text-left text-lg font-serif tracking-wide py-2 border-b border-[#221a10] flex items-center justify-between ${
                    currentPage === 'home' ? 'text-[#c6a15b]' : 'text-[#f2e8d4]'
                  }`}
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c6a15b]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className={`text-left text-lg font-serif tracking-wide py-2 border-b border-[#221a10] flex items-center justify-between ${
                    currentPage === 'shop' ? 'text-[#c6a15b]' : 'text-[#f2e8d4]'
                  }`}
                >
                  <span>The Collection</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c6a15b]" />
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`text-left text-lg font-serif tracking-wide py-2 border-b border-[#221a10] flex items-center justify-between ${
                    currentPage === 'about' ? 'text-[#c6a15b]' : 'text-[#f2e8d4]'
                  }`}
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c6a15b]" />
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`text-left text-lg font-serif tracking-wide py-2 border-b border-[#221a10] flex items-center justify-between ${
                    currentPage === 'contact' ? 'text-[#c6a15b]' : 'text-[#f2e8d4]'
                  }`}
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c6a15b]" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="text-left text-lg font-serif tracking-wide py-2 border-b border-[#221a10] flex items-center justify-between text-[#c6a15b]"
                >
                  <span>Shopping Bag</span>
                  <span className="text-sm font-sans font-semibold">({itemCount})</span>
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#282115] flex flex-col gap-4">
              <a
                href={getWhatsAppUrl('Hello BERBIECLOSET, I would like to inquire about your collection.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bc-btn py-3 justify-center text-center text-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#100d07]" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-center justify-around pt-2 text-[11px] tracking-wider uppercase text-[#c6a15b]">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram ↗
                </a>
                <span>·</span>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  TikTok ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
