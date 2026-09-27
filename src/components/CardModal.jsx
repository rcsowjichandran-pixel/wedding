import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { CloseIcon, HeartIcon, BagIcon, StarIcon, WhatsAppIcon } from './Icons';

export const CardModal = () => {
  const { activeModalItem, setActiveModalItem, addToCart, isWishlisted, toggleWishlist, setIsCartOpen } = useStore();
  const [selectedQty, setSelectedQty] = useState(150);
  const [selectedFinish, setSelectedFinish] = useState('Metallic Shimmer Gold');

  if (!activeModalItem) return null;

  const unitPrice = activeModalItem.price || 12.00;
  let discountRate = 0;
  if (selectedQty >= 500) discountRate = 0.30;
  else if (selectedQty >= 400) discountRate = 0.25;
  else if (selectedQty >= 300) discountRate = 0.20;
  else if (selectedQty >= 200) discountRate = 0.15;
  else if (selectedQty >= 100) discountRate = 0.10;

  const discountedUnit = unitPrice * (1 - discountRate);
  const totalPrice = (discountedUnit * selectedQty).toFixed(2);

  const handleAddToCart = () => {
    addToCart(
      {
        ...activeModalItem,
        price: discountedUnit,
        finish: selectedFinish
      },
      selectedQty
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setActiveModalItem(null);
    setIsCartOpen(true);
  };

  const handleCheckoutDirect = () => {
    handleAddToCart();
    setActiveModalItem(null);
    const text = encodeURIComponent(
      `Hello Wed Knot Craft Chennai! I am placing an order for:\nCard: "${activeModalItem.title || activeModalItem.name}"\nQuantity: ${selectedQty}\nFinish: ${selectedFinish}\nEstimated Total: ₹${totalPrice}\nPlease send payment and digital proof details.`
    );
    window.open(`https://wa.me/919176882120?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[24px] bg-black/60 backdrop-blur-xs animate-fadeIn font-poppins">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#FFE5B4] relative text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveModalItem(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#E6E6FA] hover:bg-[#FFE5B4] text-stone-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className="grid grid-cols-12 gap-[24px] p-[24px]">
          {/* Card Image: 5 cols */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-center">
            <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-[#E6E6FA] border border-[#FFE5B4] relative shadow-inner">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title || activeModalItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(activeModalItem)}
                className="absolute top-3 right-3 p-[8px] rounded-full bg-white/90 shadow-md text-stone-700 hover:text-rose-600 transition-colors"
              >
                <HeartIcon 
                  size={24} 
                  fill={isWishlisted(activeModalItem.id) ? "#e11d48" : "none"} 
                  className={isWishlisted(activeModalItem.id) ? "text-rose-600" : ""} 
                />
              </button>
            </div>
            <div className="mt-[10px] text-center">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Chennai Express Delivery
              </span>
              <span className="text-xs font-bold text-[#7A4D00]">
                Doorstep Delivery in 5 Days
              </span>
            </div>
          </div>

          {/* Details & Action Buttons: 7 cols */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between space-y-[10px]">
            <div>
              <div className="flex items-center gap-[8px]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A4D00] bg-[#FFE5B4] px-[10px] py-[4px] rounded-full">
                  {activeModalItem.category || 'Invitation'}
                </span>
                <div className="flex items-center text-[#FFAB0D] text-xs">
                  <StarIcon size={16} />
                  <span className="ml-1 font-bold text-stone-700">{activeModalItem.rating || '4.9'}</span>
                </div>
              </div>

              {/* Title using typography rule size: 24 */}
              <h2 className="font-bold text-[24px] text-stone-900 mt-[8px] leading-tight font-poppins">
                {activeModalItem.title || activeModalItem.name}
              </h2>

              {/* Price using typography rule size: 24 / 20 */}
              <div className="mt-[8px] flex items-baseline gap-[8px]">
                <span className="font-bold text-[24px] text-[#FFAB0D]">
                  ₹{discountedUnit.toFixed(2)}
                </span>
                {discountRate > 0 && (
                  <span className="text-xs text-stone-400 line-through">
                    ₹{unitPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-stone-500">/ card</span>
                {discountRate > 0 && (
                  <span className="text-xs font-bold text-[#7A4D00] bg-[#FFE5B4] px-[8px] py-[2px] rounded-md">
                    {(discountRate * 100).toFixed(0)}% Off
                  </span>
                )}
              </div>

              <p className="text-xs text-stone-600 mt-[8px] leading-relaxed">
                {activeModalItem.desc || 'Premium handcrafted wedding card with fine foil stamping, embossed religious icons, coordinated envelopes and custom calligraphy text printing.'}
              </p>

              {/* Paper & Specs */}
              <div className="mt-[10px] pt-[8px] border-t border-[#FFE5B4]/60 text-xs space-y-[6px] text-stone-600">
                <p>
                  <strong className="text-stone-800">Paper Board:</strong> {activeModalItem.paperType || '300 GSM Shimmer Metallic Board'}
                </p>
                <p>
                  <strong className="text-stone-800">Dimensions:</strong> {activeModalItem.dimensions || '18.5 cm x 13.5 cm (Standard)'}
                </p>
              </div>

              {/* Finish Selector */}
              <div className="mt-[10px]">
                <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-[6px]">
                  Foil & Finish:
                </label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full text-xs p-[8px] rounded-lg border border-[#FFE5B4] bg-[#F4F4FD] focus:border-[#FFAB0D] focus:outline-none"
                >
                  <option value="Metallic Shimmer Gold">Metallic Shimmer Gold</option>
                  <option value="Rose Gold Hot Foil">Rose Gold Hot Foil</option>
                  <option value="Silver Mirror Emboss">Silver Mirror Emboss</option>
                  <option value="Matte Velvet Texture">Matte Velvet Texture</option>
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="mt-[10px]">
                <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-[6px]">
                  Quantity (Volume Slab Discount):
                </label>
                <div className="grid grid-cols-5 gap-[6px] text-center">
                  {[50, 100, 200, 300, 500].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setSelectedQty(qty)}
                      className={`py-[8px] px-[6px] rounded-md text-xs font-semibold border transition-all ${
                        selectedQty === qty
                          ? 'border-[#FFAB0D] bg-[#FFAB0D] text-white shadow-xs'
                          : 'border-[#FFE5B4] hover:border-[#FFAB0D] bg-white text-stone-700'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total & Required Action Buttons: Add to cart, Buy now, Checkout, continue shopping */}
            <div className="pt-[10px] border-t border-[#FFE5B4]">
              <div className="flex items-center justify-between mb-[10px]">
                <span className="text-xs text-stone-500">Total ({selectedQty} cards):</span>
                <span className="font-bold text-[20px] text-stone-900">₹{totalPrice}</span>
              </div>

              <div className="grid grid-cols-2 gap-[8px]">
                {/* Add to cart button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="py-[8px] px-[10px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] text-xs font-bold rounded-lg flex items-center justify-center gap-[6px] transition-colors shadow-xs"
                >
                  <BagIcon size={18} />
                  <span>Add to cart</span>
                </button>

                {/* Buy now button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="py-[8px] px-[10px] bg-[#FFAB0D] hover:bg-[#e59500] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-[6px] transition-colors shadow-xs"
                >
                  <span>Buy now</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-[8px] mt-[8px]">
                {/* Checkout button */}
                <button
                  type="button"
                  onClick={handleCheckoutDirect}
                  className="py-[8px] px-[10px] bg-[#7A4D00] hover:bg-stone-900 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-[6px] transition-colors shadow-xs"
                >
                  <span>Checkout</span>
                </button>

                {/* continue shopping button */}
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="py-[8px] px-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center justify-center transition-colors"
                >
                  <span>continue shopping</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
