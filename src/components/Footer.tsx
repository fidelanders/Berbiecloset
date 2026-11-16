import React from 'react';
import { ArrowUpRight, ArrowUp, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, TIKTOK_URL, DISPLAY_PHONE, getWhatsAppUrl } from '../data/products';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#382e1e] pt-14 pb-12 text-[#f2e8d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#282014]">
          
          {/* Col 1: Brand & Ethos */}
          <div className="flex flex-col items-start gap-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="focus:outline-none"
            >
              <img
                src="/assets/img/logo.webp"
                alt="BERBIECLOSET"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/berbiecloset-logo.png';
                }}
              />
            </button>
            <p className="font-serif italic text-base text-[#c6a15b]">
              Style is personal. Make it yours.
            </p>
            <p className="text-xs text-[#a8997c] leading-relaxed max-w-xs">
              Distinctive Nigerian womenswear curated for women who move with intention. Lagos, Nigeria.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.16em] uppercase text-[#b3a17f] font-semibold mb-1">
              Explore
            </h4>
            <button
              onClick={() => {
                onNavigate('shop');
                scrollToTop();
              }}
              className="text-left text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              The Signature Edit ↗
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                scrollToTop();
              }}
              className="text-left text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              Our Story & Ethos ↗
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                scrollToTop();
              }}
              className="text-left text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              Concierge & Contact ↗
            </button>
          </div>

          {/* Col 3: Direct Concierge & Ordering */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.16em] uppercase text-[#b3a17f] font-semibold mb-1">
              Concierge
            </h4>
            <a
              href={getWhatsAppUrl('Hello BERBIECLOSET, I would like to make an enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#c6a15b] hover:text-[#dfbd7b] transition-colors py-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Order on WhatsApp ↗</span>
            </a>
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              {DISPLAY_PHONE}
            </a>
            <p className="text-[11px] text-[#8e8067]">
              Lagos Studio · Nationwide & Worldwide Delivery
            </p>
          </div>

          {/* Col 4: Social Community */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.16em] uppercase text-[#b3a17f] font-semibold mb-1">
              Connect
            </h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              <span>@BERBIECLOSET · Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#f2e8d4]/80 hover:text-[#c6a15b] transition-colors py-1"
            >
              <span>@BERBIECLOSET · TikTok</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.08em] uppercase text-[#8e8067]">
          <div>
            © {currentYear} BERBIECLOSET. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#c6a15b] hover:text-[#dfbd7b] transition-colors py-1 focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
