import React from 'react';
import { useStore } from '../context/StoreContext';
import { CloseIcon, HeartIcon, BagIcon } from './Icons';

export const WishlistDrawer = () => {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart, setActiveModalItem } = useStore();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-2xs animate-fadeIn font-poppins">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#FFE5B4]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-[10px] sm:px-[24px] border-b border-[#FFE5B4] flex items-center justify-between bg-[#E6E6FA]">
          <div className="flex items-center gap-[10px]">
            <HeartIcon size={32} fill="#e11d48" className="text-rose-600" />
            <h3 className="font-bold text-[20px] text-stone-900">
              Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-[8px] rounded-full text-stone-600 hover:text-stone-900 hover:bg-[#FFE5B4] transition-colors"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-[10px] sm:px-[24px] divide-y divide-stone-100">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-[24px] text-stone-500">
              <HeartIcon size={48} className="text-stone-300 mb-[10px]" />
              <h3 className="font-bold text-[20px] text-stone-700">Wishlist is empty</h3>
              <p className="text-xs text-stone-400 mt-[8px]">Tap the heart icon on any card to save it for later!</p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="mt-[16px] py-[8px] px-[10px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] text-xs font-bold rounded-lg transition-colors shadow-2xs"
              >
                continue shopping
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="py-[10px] flex gap-[10px] items-center">
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-16 h-18 object-cover rounded-lg border border-[#FFE5B4] cursor-pointer"
                  onClick={() => {
                    setActiveModalItem(item);
                    setIsWishlistOpen(false);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      setActiveModalItem(item);
                      setIsWishlistOpen(false);
                    }}
                    className="text-xs font-bold text-stone-800 truncate hover:text-[#FFAB0D] cursor-pointer"
                  >
                    {item.title || item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#FFAB0D] mt-0.5">
                    ₹{item.price || 12.00}
                  </p>
                  <div className="flex items-center gap-[8px] mt-[8px]">
                    <button
                      onClick={() => {
                        addToCart(item, 100);
                        toggleWishlist(item);
                      }}
                      className="px-[10px] py-[8px] bg-[#FFAB0D] hover:bg-[#e59500] text-white rounded text-[11px] font-bold flex items-center gap-[4px] shadow-2xs"
                    >
                      <BagIcon size={16} />
                      <span>Add to cart</span>
                    </button>
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="text-[11px] text-stone-400 hover:text-rose-600 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-[10px] sm:px-[24px] border-t border-[#FFE5B4] bg-[#F4F4FD] text-center space-y-[8px]">
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="w-full py-[8px] px-[10px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] text-xs font-bold rounded-lg transition-colors"
          >
            continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};
