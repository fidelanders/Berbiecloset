import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductView } from './views/ProductView';
import { BagView } from './views/BagView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from './data/products';

type Page = 'home' | 'shop' | 'product' | 'bag' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number>(1);

  // Sync with window.location hash for direct links and browser back/forward
  const parseHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) {
      setCurrentPage('home');
      return;
    }

    if (hash.startsWith('product')) {
      const match = hash.match(/(?:id=|\/)(\d+)/);
      if (match) {
        setSelectedProductId(parseInt(match[1], 10));
      }
      setCurrentPage('product');
    } else if (['shop', 'bag', 'about', 'contact'].includes(hash)) {
      setCurrentPage(hash as Page);
    } else {
      setCurrentPage('home');
    }
  };

  useEffect(() => {
    parseHash();
    const handlePopState = () => parseHash();
    window.addEventListener('hashchange', handlePopState);
    return () => window.removeEventListener('hashchange', handlePopState);
  }, []);

  const navigateTo = (page: string, params?: { id?: number }) => {
    if (page === 'product' && params?.id) {
      setSelectedProductId(params.id);
      window.location.hash = `product?id=${params.id}`;
      setCurrentPage('product');
    } else {
      window.location.hash = page === 'home' ? '' : page;
      setCurrentPage(page as Page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#0b0b0a] text-[#f2e8d4] selection:bg-[#c6a15b] selection:text-[#0b0b0a] font-sans antialiased overflow-x-hidden w-full max-w-[100vw]">
        
        {/* Navigation Bar */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full">
          {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
          {currentPage === 'shop' && <ShopView onNavigate={navigateTo} />}
          {currentPage === 'product' && (
            <ProductView productId={selectedProductId} onNavigate={navigateTo} />
          )}
          {currentPage === 'bag' && <BagView onNavigate={navigateTo} />}
          {currentPage === 'about' && <AboutView onNavigate={navigateTo} />}
          {currentPage === 'contact' && <ContactView />}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Slide-out Cart Drawer */}
        <CartDrawer onNavigate={navigateTo} />

        {/* Floating Mobile WhatsApp Concierge Button */}
        <a
          href={getWhatsAppUrl('Hello BERBIECLOSET, I have an enquiry about your collection.')}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-30 md:hidden flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] text-[#0b0b0a] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform font-semibold text-xs tracking-wide"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageCircle className="w-4 h-4 fill-[#0b0b0a]" />
          <span>WhatsApp</span>
        </a>

      </div>
    </CartProvider>
  );
}
