import React from 'react';
import { ArrowUpRight, Compass, Sparkles, Heart } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
          A POINT OF VIEW, NOT A DRESS CODE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f2e8d4] font-normal tracking-tight leading-[1.05]">
          Not just what you wear. <br />
          <em className="text-[#c6a15b] italic">How you arrive.</em>
        </h1>
      </div>

      {/* Split Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
        
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] bg-[#211b11] border border-[#382e1e] overflow-hidden shadow-2xl">
            <img
              src="assets/img/about.jpg"
              alt="BERBIECLOSET yellow casual co-ord look"
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <p className="font-serif text-2xl sm:text-3xl text-[#f2e8d4] leading-relaxed font-light">
            BERBIECLOSET is a celebration of personal style — expressive, assured, and entirely your own.
          </p>
          <p className="text-sm sm:text-base text-[#c1b69f] leading-relaxed font-light">
            We believe getting dressed should feel like coming into yourself. Distinctive pieces, confident details, and a wardrobe that lets you arrive as you are.
          </p>
          <p className="text-sm text-[#8e8067] leading-relaxed">
            From the bustling energy of Lagos to women across the globe, our collections bridge contemporary African craftsmanship with timeless metropolitan poise. Every look in our edit is chosen with deliberation: how it moves, how it sits on the body, and how it makes you feel when you step into the room.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('shop')}
              className="bc-btn text-xs cursor-pointer"
            >
              <span>Explore the Collection</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Core Philosophies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#261f14]">
        <div className="bg-[#14120e] border border-[#2b2216] p-8">
          <div className="w-10 h-10 rounded-full border border-[#382e1e] flex items-center justify-center text-[#c6a15b] mb-6">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl text-[#f2e8d4] mb-3">Lagos Heritage</h3>
          <p className="text-xs text-[#a8997c] leading-relaxed">
            Born and rooted in Lagos, Nigeria. We draw inspiration from the city's effortless flair, vibrancy, and unapologetic self-expression.
          </p>
        </div>

        <div className="bg-[#14120e] border border-[#2b2216] p-8">
          <div className="w-10 h-10 rounded-full border border-[#382e1e] flex items-center justify-center text-[#c6a15b] mb-6">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl text-[#f2e8d4] mb-3">Crafted Silhouette</h3>
          <p className="text-xs text-[#a8997c] leading-relaxed">
            From hand-beaded statement two-pieces to architectural denim cuts, each piece is designed to accentuate feminine grace across sizes 10–18.
          </p>
        </div>

        <div className="bg-[#14120e] border border-[#2b2216] p-8">
          <div className="w-10 h-10 rounded-full border border-[#382e1e] flex items-center justify-center text-[#c6a15b] mb-6">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl text-[#f2e8d4] mb-3">Personal Concierge</h3>
          <p className="text-xs text-[#a8997c] leading-relaxed">
            No robotic checkout friction. You speak directly with our Lagos styling specialists on WhatsApp to verify perfect fits, fabrics, and dispatch timelines.
          </p>
        </div>
      </div>

    </div>
  );
};
