import React from 'react';
import { ShoppingBag, Plus, Minus, Trash2, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, getWhatsAppUrl } from '../data/products';

interface BagViewProps {
  onNavigate: (page: string, params?: { id?: number }) => void;
}

export const BagView: React.FC<BagViewProps> = ({ onNavigate }) => {
  const { cart, updateQuantity, removeFromCart, subtotal, hasPricedItems, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (!cart.length) return;
    const itemList = cart
      .map(
        (item) =>
          `${item.quantity}x ${item.product.name}${
            item.selectedSize ? ` (Size ${item.selectedSize})` : ''
          }${item.product.price ? ` - ₦${(item.product.price * item.quantity).toLocaleString('en-NG')}` : ''}`
      )
      .join('\n• ');

    const totalText = hasPricedItems
      ? `\n\nTotal (priced items): ₦${subtotal.toLocaleString('en-NG')}`
      : '';

    const message = `Hello BERBIECLOSET,\n\nI would like to order the following pieces from your collection:\n• ${itemList}${totalText}\n\nPlease confirm availability, sizing, and delivery to my address. Thank you!`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-[#261f14]">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c6a15b] block mb-2">
          YOUR SELECTION
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#f2e8d4] font-normal tracking-tight">
          Your bag.
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-[#14120e] border border-[#261f14] rounded-sm p-8">
          <ShoppingBag className="w-12 h-12 text-[#403522] mx-auto mb-4 stroke-1" />
          <p className="font-serif text-2xl text-[#f2e8d4] mb-2">Your bag is empty for now.</p>
          <p className="text-sm text-[#a8997c] max-w-md mx-auto mb-8 font-light">
            Take a look through our signature edit to find your next statement look.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bc-btn text-xs cursor-pointer"
          >
            Explore the Collection ↗
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Items List */}
          <div className="divide-y divide-[#261f14] border-y border-[#261f14]">
            {cart.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${index}`}
                className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                {/* Left: Product Thumbnail & Name */}
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 sm:w-24 sm:h-32 object-cover bg-[#211b11] shrink-0 cursor-pointer"
                    onClick={() => onNavigate('product', { id: item.product.id })}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `/instagram-collection/look-0${item.product.id}.jpg`;
                    }}
                  />
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#a8997c]">
                      {item.product.category}
                    </span>
                    <h3
                      onClick={() => onNavigate('product', { id: item.product.id })}
                      className="font-serif text-lg sm:text-xl text-[#f2e8d4] hover:text-[#c6a15b] transition-colors cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    {item.selectedSize && (
                      <p className="text-xs text-[#b3a17f] mt-0.5">
                        Selected Size: <span className="text-[#f2e8d4] font-medium">{item.selectedSize}</span>
                      </p>
                    )}
                    <p className="text-xs text-[#c6a15b] mt-1 tabular-nums">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                </div>

                {/* Right: Quantity & Line Subtotal */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0">
                  <div className="inline-flex items-center border border-[#382e1e] rounded-full bg-[#14120e]">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#c6a15b] hover:bg-[#c6a15b]/10 rounded-l-full focus:outline-none cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-semibold tabular-nums text-[#f2e8d4]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#c6a15b] hover:bg-[#c6a15b]/10 rounded-r-full focus:outline-none cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right min-w-[90px]">
                    {item.product.price ? (
                      <span className="font-serif text-base text-[#f2e8d4] tabular-nums font-semibold">
                        ₦{(item.product.price * item.quantity).toLocaleString('en-NG')}
                      </span>
                    ) : (
                      <span className="text-xs text-[#8e8067]">
                        Price on request
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-1.5 text-[#756752] hover:text-[#f87171] transition-colors cursor-pointer"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing & Order Section */}
          <div className="bg-[#14120e] border border-[#261f14] p-6 sm:p-8 space-y-6">
            {hasPricedItems && (
              <div className="flex items-center justify-between pb-6 border-b border-[#261f14]">
                <span className="font-serif text-lg text-[#b3a17f]">
                  Total (priced items)
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#c6a15b] tabular-nums">
                  ₦{subtotal.toLocaleString('en-NG')}
                </span>
              </div>
            )}

            <p className="text-xs text-[#8e8067] leading-relaxed">
              Prices and availability are verified and confirmed on WhatsApp before any order is finalized or dispatched.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full sm:flex-1 bc-btn py-4 justify-center text-xs sm:text-sm font-semibold cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#100d07]" />
                <span>Order on WhatsApp ↗</span>
              </button>

              <button
                onClick={() => onNavigate('shop')}
                className="w-full sm:w-auto bc-btn-outline py-4 justify-center text-xs sm:text-sm cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={clearCart}
              className="text-xs text-[#756752] hover:text-[#f87171] transition-colors uppercase tracking-wider cursor-pointer"
            >
              Clear Entire Bag
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
