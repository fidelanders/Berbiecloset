import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { PRODUCTS, formatPrice, createProductEnquiryUrl } from '../data/products';
import { useCart } from '../context/CartContext';

interface HomeViewProps {
  onNavigate: (page: string, params?: { id?: number }) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();

  // Curated featured looks
  const featuredLooks = PRODUCTS.slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[calc(100svh-125px)] flex items-center border-b border-[#382e1e] px-4 sm:px-6 lg:px-12 py-10 md:py-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[9.5px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b3a17f] mb-4">
              <span className="w-6 h-[1px] bg-[#c6a15b]" />
              <span>THE NEW NIGERIAN WARDROBE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[0.92] tracking-[-0.04em] text-[#f2e8d4] mb-6">
              Dress like <br />
              <em className="text-[#c6a15b] italic font-normal">you mean it.</em>
            </h1>

            <p className="text-sm sm:text-base text-[#c1b69f] leading-relaxed max-w-lg mb-8 font-light">
              Distinctive pieces for women who move with intention. A little bold, always considered. Hand-selected fabrics, architectural cuts, and Lagos vibrancy.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => onNavigate('shop')}
                className="bc-btn text-xs sm:text-sm"
              >
                <span>Explore the collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="bc-btn-outline text-xs sm:text-sm"
              >
                <span>Our Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Hero Footing Metadata */}
            <div className="pt-6 border-t border-[#261f14] flex flex-wrap items-center gap-6 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#a8997c]">
              <span className="text-[#c6a15b] font-medium">THE SIGNATURE EDIT</span>
              <span className="text-[#473b26]">·</span>
              <span>LAGOS · NATIONWIDE · EVERYWHERE</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Art Box */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[380px] sm:h-[480px] md:h-[540px] bg-[#211b11] border border-[#382e1e] overflow-hidden group shadow-2xl">
              
              {/* Background Photo with soft zoom/drift animation */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(20,17,8,0.3) 0%, rgba(20,17,8,0.1) 40%, rgba(20,17,8,0.5) 100%), url(assets/img/hero.jpg)`
                }}
                role="img"
                aria-label="BERBIECLOSET signature edit model"
              />

              {/* Vertical Artistic Caption */}
              <div className="absolute left-4 top-4 text-[#f2e8d4]/90 text-[8px] sm:text-[9px] tracking-[0.24em] [writing-mode:vertical-rl] select-none font-medium">
                FORM / FEELING / FREEDOM
              </div>

              {/* Angled Gold Monogram Seal / Stamp */}
              <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 p-3.5 sm:p-5 border border-[#c6a15b]/80 bg-[#0e0c0a]/90 backdrop-blur-sm text-[#f7e8c5] font-serif text-xs sm:text-base leading-tight tracking-tight -rotate-3 sm:-rotate-6 shadow-xl pointer-events-none">
                THE<br />
                ART OF<br />
                <em className="text-[#c6a15b] italic">GETTING</em><br />
                DRESSED
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Brand Value Pillars */}
      <section className="bg-[#0e0c0a] border-b border-[#261f14] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2.5 border border-[#382e1e] rounded-full bg-[#14120e] text-[#c6a15b] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#f2e8d4] mb-1">Distinctive Cuts</h3>
              <p className="text-xs text-[#a8997c] leading-relaxed">
                Pieces designed to command presence while preserving comfort for every occasion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 border border-[#382e1e] rounded-full bg-[#14120e] text-[#c6a15b] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#f2e8d4] mb-1">Tailored Sizes 10–18</h3>
              <p className="text-xs text-[#a8997c] leading-relaxed">
                Considered silhouettes created to celebrate diverse feminine forms with confidence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 border border-[#382e1e] rounded-full bg-[#14120e] text-[#c6a15b] shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#f2e8d4] mb-1">WhatsApp Concierge</h3>
              <p className="text-xs text-[#a8997c] leading-relaxed">
                Direct personalized styling advice and size consultations from our Lagos studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pieces Edit Strip */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#261f14]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
              CURATED SELECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f2e8d4]">
              Signature Looks
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-xs text-[#c6a15b] hover:text-[#dfbd7b] tracking-wider uppercase transition-colors self-start md:self-end"
          >
            <span>View All 9 Styles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredLooks.map((item) => (
            <div
              key={item.id}
              className="group bg-[#14120e] border border-[#2b2216] hover:border-[#c6a15b]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#211b11]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `/instagram-collection/look-0${item.id}.jpg`;
                  }}
                />
                <span className="absolute top-3 left-3 text-[10px] tracking-widest text-white/90 bg-black/60 px-2 py-0.5 rounded-sm">
                  0{item.id}
                </span>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => onNavigate('product', { id: item.id })}
                    className="p-3 bg-[#0b0b0a] text-[#c6a15b] border border-[#c6a15b] rounded-full hover:scale-110 transition-transform cursor-pointer"
                    aria-label={`View ${item.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={createProductEnquiryUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#25D366] text-[#0b0b0a] rounded-full hover:scale-110 transition-transform"
                    aria-label={`Enquire about ${item.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] tracking-wider uppercase text-[#a8997c]">
                      {item.category}
                    </span>
                    {item.sizes && (
                      <span className="text-[10px] text-[#c6a15b] font-medium">
                        Sizes {item.sizes}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-[#f2e8d4] group-hover:text-[#c6a15b] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#a8997c] mb-4">
                    {item.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#261f14] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#c6a15b] tabular-nums">
                    {formatPrice(item.price)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 border border-[#382e1e] rounded-full text-[#f2e8d4] hover:border-[#c6a15b] hover:text-[#c6a15b] transition-colors cursor-pointer"
                    >
                      Add to Bag
                    </button>
                    <button
                      onClick={() => onNavigate('product', { id: item.id })}
                      className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-[#c6a15b] text-[#100d07] rounded-full hover:bg-[#dfbd7b] transition-colors cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Philosophy Teaser Split Section */}
      <section className="bg-[#0e0c0a] border-y border-[#382e1e] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#211b11] border border-[#382e1e] overflow-hidden">
              <img
                src="assets/img/about.jpg"
                alt="BERBIECLOSET editorial"
                className="w-full h-full object-cover filter brightness-90 contrast-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 bg-[#0b0b0a] border border-[#c6a15b]/60 hidden sm:block">
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#c6a15b] block">
                LAGOS CREATIVE EDIT
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-3">
              A POINT OF VIEW, NOT A DRESS CODE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f2e8d4] leading-[1.05] mb-6">
              Not just what you wear. <br />
              <em className="text-[#c6a15b] italic">How you arrive.</em>
            </h2>
            <p className="text-sm sm:text-base text-[#c1b69f] leading-relaxed mb-6 font-light">
              BERBIECLOSET is a celebration of personal style — expressive, assured, and entirely your own. We believe getting dressed should feel like coming into yourself. Distinctive pieces, confident details, and a wardrobe that lets you arrive as you are.
            </p>
            <p className="text-xs sm:text-sm text-[#8e8067] leading-relaxed mb-8">
              Founded in Lagos, Nigeria, our collections explore modern African cosmopolitan living through architectural co-ords, statement denim, tailored jackets, and versatile everyday silhouettes.
            </p>

            <button
              onClick={() => onNavigate('about')}
              className="bc-btn text-xs"
            >
              <span>Read Our Full Story</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Quick Navigation Footer Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#261f14]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('shop')}
            className="w-full sm:w-auto bc-btn text-xs justify-center"
          >
            <span>Shop the Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto bc-btn-outline text-xs justify-center"
          >
            <span>Discover</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto bc-btn-outline text-xs justify-center"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
