import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageCircle, ShoppingBag, ArrowUpRight, Filter } from 'lucide-react';
import { PRODUCTS, Product, formatPrice, createProductEnquiryUrl } from '../data/products';
import { useCart } from '../context/CartContext';

interface ShopViewProps {
  onNavigate: (page: string, params?: { id?: number }) => void;
}

const CATEGORIES = ['All', 'Outfits', 'Co-ords', 'Denim', 'Jackets', 'Tops'] as const;

export const ShopView: React.FC<ShopViewProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.note.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSize =
        selectedSizeFilter === 'All' ||
        (item.sizes && item.sizes.includes(selectedSizeFilter));

      return matchesCategory && matchesSearch && matchesSize;
    });
  }, [selectedCategory, searchQuery, selectedSizeFilter]);

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="mb-10 md:mb-14">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
          CURATED FOR THE WAY YOU ARE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#f2e8d4] font-normal tracking-tight mb-4">
          The collection.
        </h1>
        <p className="text-sm sm:text-base text-[#b3a17f] max-w-2xl font-light leading-relaxed">
          Nine distinctive styles selected from our Lagos Instagram collection. Tap any piece to view details or shop by WhatsApp.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 mb-10 pb-8 border-b border-[#261f14]">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.category === cat).length;
            const active = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  active
                    ? 'bg-[#c6a15b] text-[#100d07] shadow-sm font-semibold'
                    : 'bg-[#14120e] text-[#a8997c] hover:text-[#f2e8d4] border border-[#2b2216]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] tabular-nums ${active ? 'text-[#100d07]' : 'text-[#756752]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Secondary Filter Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#756752] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pieces by name, fabric or note..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14120e] border border-[#2b2216] rounded-full pl-10 pr-4 py-2 text-xs text-[#f2e8d4] placeholder-[#756752] focus:outline-none focus:border-[#c6a15b] transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-[11px] text-[#8e8067] tracking-wider uppercase flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#c6a15b]" />
              Size:
            </span>
            <select
              value={selectedSizeFilter}
              onChange={(e) => setSelectedSizeFilter(e.target.value)}
              aria-label="Filter products by size"
              className="bg-[#14120e] border border-[#2b2216] text-xs text-[#f2e8d4] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#c6a15b]"
            >
              <option value="All">All Sizes</option>
              <option value="10">Size 10</option>
              <option value="12">Size 12</option>
              <option value="14">Size 14</option>
              <option value="16">Size 16</option>
              <option value="18">Size 18</option>
            </select>
          </div>
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#14120e] border border-[#261f14] rounded-sm p-8">
          <p className="font-serif text-xl text-[#f2e8d4] mb-2">No matching pieces found</p>
          <p className="text-xs text-[#a8997c] mb-6">
            Try adjusting your search criteria or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSelectedSizeFilter('All');
            }}
            className="bc-btn text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((p) => (
            <article
              key={p.id}
              className="group bg-[#14120e] border border-[#2b2216] hover:border-[#c6a15b]/70 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Box */}
              <div
                onClick={() => onNavigate('product', { id: p.id })}
                className="relative aspect-[3/4] overflow-hidden bg-[#211b11] cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `/instagram-collection/look-0${p.id}.jpg`;
                  }}
                />

                {/* Look Index */}
                <span className="absolute top-3 left-3 text-[10px] tracking-widest text-[#f2e8d4] bg-[#0b0b0a]/80 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-[#382e1e]">
                  0{p.id}
                </span>

                {/* View Overlay Button */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full py-2.5 bg-[#0b0b0a]/90 backdrop-blur-xs border border-[#c6a15b] rounded-full text-center text-[10px] tracking-wider uppercase text-[#c6a15b] font-medium flex items-center justify-center gap-1.5 shadow-lg">
                    <span>View piece</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Product Details Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 text-[10px] tracking-wider uppercase">
                    <span className="text-[#a8997c]">{p.category}</span>
                    {p.sizes && (
                      <span className="text-[#c6a15b] font-medium">
                        Sizes {p.sizes}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => onNavigate('product', { id: p.id })}
                    className="font-serif text-lg text-[#f2e8d4] group-hover:text-[#c6a15b] transition-colors cursor-pointer mb-1.5 leading-snug"
                  >
                    {p.name}
                  </h3>

                  <p className="text-xs text-[#a8997c] line-clamp-2 mb-4 font-light leading-relaxed">
                    {p.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#261f14]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#c6a15b] tabular-nums">
                      {formatPrice(p.price)}
                    </span>
                    <a
                      href={p.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#8e8067] hover:text-[#c6a15b] tracking-wider uppercase transition-colors"
                      title="Watch Reel on Instagram"
                    >
                      IG Reel ↗
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToCart(p)}
                      className="flex items-center justify-center gap-1 py-2 px-3 border border-[#382e1e] hover:border-[#c6a15b] rounded-full text-[10px] tracking-wider uppercase text-[#f2e8d4] hover:text-[#c6a15b] transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#c6a15b]" />
                      <span>Add to Bag</span>
                    </button>

                    <a
                      href={createProductEnquiryUrl(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 py-2 px-3 bg-[#c6a15b] hover:bg-[#dfbd7b] rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#100d07] transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-[#100d07]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      )}

      {/* Note from original site */}
      <div className="mt-16 text-center max-w-xl mx-auto p-4 border-t border-[#261f14]">
        <p className="text-xs text-[#8e8067] leading-relaxed">
          Styles and sizes are listed directly from our official Instagram showcase. Please confirm current piece availability with our concierge team before placing an order.
        </p>
      </div>

    </div>
  );
};
