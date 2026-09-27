import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SPECIAL_OCCASIONS } from '../data/cardsData';
import { useStore } from '../context/StoreContext';
import { HeartIcon, BagIcon, StarIcon, WhatsAppIcon } from '../components/Icons';

export const SpecialOccasionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCat = searchParams.get('cat') || 'all';
  const { toggleWishlist, isWishlisted, addToCart, setActiveModalItem, setIsCartOpen } = useStore();

  const currentOccasions = selectedCat === 'all'
    ? SPECIAL_OCCASIONS
    : SPECIAL_OCCASIONS.filter((o) => o.id === selectedCat);

  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 pb-[32px] font-poppins">
      
      {/* Title - Typography size: 32 */}
      <div className="pt-[24px] pb-[16px] text-center px-[24px]">
        <h1 className="text-[32px] font-bold uppercase tracking-wider text-stone-900 leading-tight">
          SPECIAL OCCASIONS
        </h1>
        <p className="text-xs sm:text-sm text-[#7A4D00] italic mt-[6px] max-w-xl mx-auto">
          Celebrate every blessed milestone with bespoke invitations: Birthday, Puberty, Luxury, Ear Boring, Engagement, House Warming & Anniversaries.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-[8px] mt-[16px] px-[24px] max-w-4xl mx-auto">
          <button
            onClick={() => setSearchParams({ cat: 'all' })}
            className={`py-[8px] px-[10px] rounded-full text-xs font-bold transition-all ${
              selectedCat === 'all'
                ? 'bg-[#FFAB0D] text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-[#FFE5B4] border border-[#FFE5B4]'
            }`}
          >
            All Occasions
          </button>
          {SPECIAL_OCCASIONS.map((occ) => (
            <button
              key={occ.id}
              onClick={() => setSearchParams({ cat: occ.id })}
              className={`py-[8px] px-[10px] rounded-full text-xs font-bold transition-all ${
                selectedCat === occ.id
                  ? 'bg-[#FFAB0D] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-[#FFE5B4] border border-[#FFE5B4]'
              }`}
            >
              {occ.title}
            </button>
          ))}
        </div>
      </div>

      {/* Occasion Sections - 12-Column Grid */}
      <div className="max-w-6xl mx-auto px-[24px] space-y-[24px] mt-[16px]">
        {currentOccasions.map((occasion) => (
          <div
            key={occasion.id}
            className="bg-white rounded-2xl border border-[#FFE5B4] overflow-hidden shadow-sm p-[24px]"
          >
            <div className="grid grid-cols-12 gap-[24px] items-center border-b border-[#FFE5B4] pb-[16px]">
              <div className="col-span-12 md:col-span-8 space-y-[8px]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A4D00] bg-[#FFE5B4] px-[10px] py-[4px] rounded-full">
                  Occasion Suite
                </span>
                {/* Typography size: 24 */}
                <h2 className="text-[24px] font-bold text-stone-900 leading-tight">
                  {occasion.title}
                </h2>
                <p className="text-xs sm:text-sm italic text-[#7A4D00] font-semibold">
                  {occasion.tagline}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                  {occasion.desc}
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-end">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md border border-[#FFE5B4]">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-stone-700 mt-[8px]">
                  Price: <span className="text-[#FFAB0D]">{occasion.priceRange}</span>
                </span>
              </div>
            </div>

            {/* Sub-models: 12-Column Grid */}
            <div className="mt-[16px]">
              <h3 className="text-[20px] font-bold text-stone-800 mb-[16px]">
                Popular {occasion.title} Templates
              </h3>
              <div className="grid grid-cols-12 gap-[24px]">
                {occasion.items.map((item, idx) => {
                  const itemId = `${occasion.id}-${idx}`;
                  const itemWithMeta = {
                    id: itemId,
                    title: item.name,
                    price: item.price,
                    rating: item.rating,
                    category: occasion.title,
                    image: occasion.image,
                    paperType: '280 GSM Metallic Shimmer Card'
                  };
                  const wish = isWishlisted(itemId);

                  return (
                    <div
                      key={idx}
                      className="col-span-12 sm:col-span-6 lg:col-span-3 p-[10px] rounded-xl border border-[#FFE5B4] bg-[#F4F4FD] hover:bg-white hover:border-[#FFAB0D] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-[4px]">
                          <span className="text-[10px] text-stone-400">Model #{idx + 101}</span>
                          <div className="flex items-center text-[#FFAB0D] text-[11px]">
                            <StarIcon size={14} />
                            <span className="ml-[2px] text-stone-700 font-bold">{item.rating}</span>
                          </div>
                        </div>
                        <h4 
                          onClick={() => setActiveModalItem(itemWithMeta)}
                          className="font-bold text-xs text-stone-800 line-clamp-2 hover:text-[#FFAB0D] cursor-pointer"
                        >
                          {item.name}
                        </h4>
                      </div>

                      <div className="mt-[10px] pt-[8px] border-t border-[#FFE5B4]/60">
                        <div className="flex items-center justify-between mb-[8px]">
                          <span className="font-bold text-sm text-[#FFAB0D]">
                            ₹{item.price.toFixed(2)}
                          </span>

                          <button
                            type="button"
                            onClick={() => toggleWishlist(itemWithMeta)}
                            className="p-[4px] rounded-full hover:bg-[#FFE5B4] text-stone-400 hover:text-rose-600 transition-colors"
                          >
                            <HeartIcon size={24} fill={wish ? "#e11d48" : "none"} className={wish ? "text-rose-600" : ""} />
                          </button>
                        </div>

                        {/* Required Buttons: Buy now & Add to cart */}
                        <div className="grid grid-cols-2 gap-[6px]">
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(itemWithMeta, 100);
                              setIsCartOpen(true);
                            }}
                            className="py-[8px] px-[8px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] rounded text-[11px] font-bold transition-colors"
                          >
                            Add to cart
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(itemWithMeta, 100);
                              setIsCartOpen(true);
                            }}
                            className="py-[8px] px-[8px] bg-[#FFAB0D] hover:bg-[#e59500] text-white rounded text-[11px] font-bold transition-colors shadow-2xs"
                          >
                            Buy now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-[16px] pt-[10px] border-t border-[#FFE5B4] flex flex-col sm:flex-row items-center justify-between gap-[10px] text-xs">
              <span className="text-stone-500">
                Custom language wording available (Tamil, Telugu, Hindi, Malayalam, English).
              </span>
              <a
                href={`https://wa.me/919176882120?text=Hi%20Wed%20Knot%20Craft,%20I%20need%20custom%20wording%20for%20${encodeURIComponent(occasion.title)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[6px] text-[#7A4D00] hover:text-[#FFAB0D] font-bold"
              >
                <WhatsAppIcon size={20} />
                <span>Request Custom Draft on WhatsApp &rarr;</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
