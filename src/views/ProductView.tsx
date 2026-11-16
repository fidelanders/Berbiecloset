import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, ShoppingBag, ArrowUpRight, Check } from 'lucide-react';
import { PRODUCTS, formatPrice, createProductEnquiryUrl } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductViewProps {
  productId: number;
  onNavigate: (page: string, params?: { id?: number }) => void;
}

export const ProductView: React.FC<ProductViewProps> = ({ productId, onNavigate }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // Parse available sizes
  const availableSizes = product.sizes
    ? product.sizes.includes('–')
      ? (() => {
          const [start, end] = product.sizes.split('–').map((s) => parseInt(s.trim()));
          const list: string[] = [];
          for (let i = start; i <= end; i += 2) {
            list.push(i.toString());
          }
          return list;
        })()
      : [product.sizes]
    : [];

  const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0] || '');

  const handleAdd = () => {
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => onNavigate('shop')}
          className="inline-flex items-center gap-2 text-xs text-[#c6a15b] hover:text-[#dfbd7b] tracking-wider uppercase transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: Product Image Showcase */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#211b11] border border-[#382e1e] overflow-hidden shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `/instagram-collection/look-0${product.id}.jpg`;
              }}
            />
            <div className="absolute top-4 left-4 bg-[#0b0b0a]/80 backdrop-blur-xs border border-[#382e1e] px-2.5 py-1 text-[10px] tracking-widest text-[#f2e8d4]">
              LOOK 0{product.id}
            </div>
          </div>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          
          <div className="border-b border-[#261f14] pb-6 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
              {product.category} · BERBIECLOSET EDIT
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f2e8d4] font-normal tracking-tight mb-3">
              {product.name}
            </h1>

            <p className="text-sm text-[#b3a17f] leading-relaxed mb-4 font-light">
              {product.note}
            </p>

            <div className="text-2xl font-serif text-[#c6a15b] font-normal tabular-nums">
              {formatPrice(product.price)}
            </div>
          </div>

          {/* Sizing Section */}
          {availableSizes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-[#a8997c] mb-2.5">
                <span className="tracking-wider uppercase text-[10px]">Select Size</span>
                <span className="text-[#8e8067]">UK Sizing</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`min-w-10 h-10 px-3 flex items-center justify-center text-xs font-medium border rounded-md transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'border-[#c6a15b] bg-[#c6a15b] text-[#100d07] font-semibold'
                        : 'border-[#382e1e] bg-[#14120e] text-[#f2e8d4] hover:border-[#c6a15b]/50'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Advisory Notice */}
          <div className="p-3.5 bg-[#14120e] border border-[#261f14] rounded-sm mb-6 text-xs text-[#8e8067] leading-relaxed">
            {product.price
              ? 'Price indicated from our Instagram showcase. Confirm current sizing availability with our Lagos concierge before checkout.'
              : 'Direct bespoke pricing. Contact our concierge via WhatsApp to confirm sizing availability and price.'}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-8">
            <a
              href={createProductEnquiryUrl(product, selectedSize)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bc-btn py-3.5 justify-center text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#100d07]" />
              <span>Enquire on WhatsApp ↗</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className="bc-btn-outline py-3 justify-center text-xs cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#c6a15b]" />
                    <span>Added ✓</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#c6a15b]" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <a
                href={product.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bc-btn-outline py-3 justify-center text-xs"
              >
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Styling Guarantees */}
          <div className="border-t border-[#261f14] pt-5 text-xs text-[#8e8067] space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#c6a15b]">✦</span>
              <span>Handcrafted in Lagos with distinctive artisan finishing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#c6a15b]">✦</span>
              <span>Available for express delivery across Nigeria & Worldwide</span>
            </div>
          </div>

        </div>

      </div>

      {/* Related Pieces */}
      <div className="mt-20 pt-12 border-t border-[#261f14]">
        <h3 className="font-serif text-2xl text-[#f2e8d4] mb-8">
          Complete the Look
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('product', { id: item.id })}
              className="group bg-[#14120e] border border-[#2b2216] hover:border-[#c6a15b]/60 transition-colors p-4 cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#211b11] overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `/instagram-collection/look-0${item.id}.jpg`;
                  }}
                />
              </div>
              <h4 className="font-serif text-base text-[#f2e8d4] group-hover:text-[#c6a15b] transition-colors truncate">
                {item.name}
              </h4>
              <p className="text-xs text-[#c6a15b] font-medium mt-1">
                {formatPrice(item.price)}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
