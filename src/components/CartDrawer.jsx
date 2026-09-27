import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CloseIcon, BagIcon, WhatsAppIcon } from './Icons';

export const CartDrawer = () => {
  const navigate = useNavigate();
  const { isCartOpen, setIsCartOpen, cart, updateCartQuantity, removeFromCart, cartTotal } = useStore();

  if (!isCartOpen) return null;

  // Checkout now continues to the Cart page (table view + minimum 100 items rule)
  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  const handleWhatsAppOrder = () => {
    let orderDetails = `*Order Checkout - Wed Knot Craft Chennai*\n\n`;
    cart.forEach((item, idx) => {
      orderDetails += `${idx + 1}. *${item.title || item.name}*\n   Qty: ${item.quantity} cards | Price: ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });
    orderDetails += `\n*Total Estimated: ₹${cartTotal.toFixed(2)}*\n\nPlease proceed to payment & draft confirmation.`;

    window.open(`https://wa.me/919176882120?text=${encodeURIComponent(orderDetails)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-2xs animate-fadeIn font-poppins">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#FFE5B4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-[10px] sm:px-[24px] border-b border-[#FFE5B4] flex items-center justify-between bg-[#E6E6FA]">
          <div className="flex items-center gap-[10px]">
            <BagIcon size={32} className="text-[#FFAB0D]" />
            <h3 className="font-bold text-[20px] text-stone-900">
              Shopping Bag ({cart.length})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-[8px] rounded-full text-stone-600 hover:text-stone-900 hover:bg-[#FFE5B4] transition-colors"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-[10px] sm:px-[24px] divide-y divide-stone-100">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-[24px] text-stone-500">
              <BagIcon size={48} className="text-stone-300 mb-[10px]" />
              <h3 className="font-bold text-[20px] text-stone-700">Your bag is empty</h3>
              <p className="text-xs text-stone-400 mt-[8px]">Browse our wedding card collections and add your favorite cards!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-[16px] py-[8px] px-[10px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] text-xs font-bold rounded-lg transition-colors shadow-2xs"
              >
                continue shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="py-[10px] flex gap-[10px]">
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-18 h-20 object-cover rounded-lg border border-[#FFE5B4]"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-stone-800 line-clamp-2">
                        {item.title || item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-rose-600 text-xs ml-2 p-1"
                      >
                        <CloseIcon size={16} />
                      </button>
                    </div>
                    {item.finish && (
                      <p className="text-[10px] text-[#7A4D00] mt-0.5">{item.finish}</p>
                    )}
                    {item.compliment && (
                      <p className="text-[10px] text-stone-500 mt-0.5">Added Compliment: {item.compliment}</p>
                    )}
                    <p className="text-xs font-bold text-[#FFAB0D] mt-1">
                      ₹{item.price} <span className="text-[10px] text-stone-400 font-normal">/ card</span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-[8px] pt-[8px] border-t border-stone-50">
                    <div className="flex items-center border border-[#FFE5B4] rounded-md bg-[#F4F4FD]">
                      <button
                        onClick={() => updateCartQuantity(item.id, (item.quantity || 100) - 25)}
                        className="px-[8px] py-[2px] text-xs text-stone-600 hover:bg-[#FFE5B4]"
                      >
                        -
                      </button>
                      <span className="px-[10px] text-xs font-bold text-stone-800">
                        {item.quantity || 100}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, (item.quantity || 100) + 25)}
                        className="px-[8px] py-[2px] text-xs text-stone-600 hover:bg-[#FFE5B4]"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-xs text-stone-900">
                      ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with required buttons: Checkout, continue shopping / Continue to shopping */}
        {cart.length > 0 && (
          <div className="p-[10px] sm:px-[24px] border-t border-[#FFE5B4] bg-[#F4F4FD] space-y-[10px]">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>Standard Digital Proof:</span>
              <span className="text-emerald-700 font-bold">FREE</span>
            </div>
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>Chennai Shipping:</span>
              <span className="text-emerald-700 font-bold">FREE (On Orders ₹1000+)</span>
            </div>
            <div className="flex items-center justify-between pt-[8px] border-t border-[#FFE5B4]">
              <span className="font-semibold text-sm text-stone-900">Total Estimated:</span>
              <span className="font-bold text-[24px] text-[#FFAB0D]">₹{cartTotal.toFixed(2)}</span>
            </div>

            <div className="grid grid-cols-2 gap-[8px]">
              {/* Checkout button */}
              <button
                onClick={handleCheckout}
                className="w-full py-[8px] px-[10px] bg-[#FFAB0D] hover:bg-[#e59500] text-white rounded-lg font-bold text-xs flex items-center justify-center gap-[6px] shadow-md transition-all cursor-pointer"
              >
                <span>Checkout</span>
              </button>

              {/* Continue to shopping button */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-[8px] px-[10px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] rounded-lg font-bold text-xs flex items-center justify-center transition-all cursor-pointer"
              >
                <span>Continue to shopping</span>
              </button>
            </div>

            {/* Optional WhatsApp order confirmation */}
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full inline-flex items-center justify-center gap-[6px] text-[11px] text-[#7A4D00] hover:text-[#FFAB0D] underline"
            >
              <WhatsAppIcon size={16} />
              <span>or send this order on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
