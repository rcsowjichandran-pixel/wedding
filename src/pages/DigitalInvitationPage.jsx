import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DIGITAL_INVITATIONS } from '../data/cardsData';
import { useStore } from '../context/StoreContext';
import { HeartIcon, BagIcon, StarIcon, WhatsAppIcon } from '../components/Icons';

export const DigitalInvitationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCat = searchParams.get('cat') || 'all';
  const { toggleWishlist, isWishlisted, addToCart, setActiveModalItem, setIsCartOpen } = useStore();

  const currentDigital = selectedCat === 'all'
    ? DIGITAL_INVITATIONS
    : DIGITAL_INVITATIONS.filter((d) => d.id === selectedCat);

  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 pb-[32px] font-poppins">
      
      {/* Title - Typography size: 32 */}
      <div className="pt-[24px] pb-[16px] text-center px-[24px]">
        <h1 className="text-[32px] font-bold uppercase tracking-wider text-stone-900 leading-tight">
          DIGITAL INVITATIONS & E-CARDS
        </h1>
        <p className="text-xs sm:text-sm text-[#7A4D00] italic mt-[6px] max-w-xl mx-auto">
          Instant eco-friendly wedding invitations for WhatsApp, Instagram Stories, and Email: WhatsApp Cards & Save the Date Cards.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-[8px] mt-[16px] px-[24px] max-w-md mx-auto">
          <button
            onClick={() => setSearchParams({ cat: 'all' })}
            className={`py-[8px] px-[10px] rounded-full text-xs font-bold transition-all ${
              selectedCat === 'all'
                ? 'bg-[#FFAB0D] text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-[#FFE5B4] border border-[#FFE5B4]'
            }`}
          >
            All Digital Invites
          </button>
          {DIGITAL_INVITATIONS.map((digi) => (
            <button
              key={digi.id}
              onClick={() => setSearchParams({ cat: digi.id })}
              className={`py-[8px] px-[10px] rounded-full text-xs font-bold transition-all ${
                selectedCat === digi.id
                  ? 'bg-[#FFAB0D] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-[#FFE5B4] border border-[#FFE5B4]'
              }`}
            >
              {digi.title}
            </button>
          ))}
        </div>
      </div>

      {/* 12-Column Grid */}
      <div className="max-w-6xl mx-auto px-[24px] space-y-[24px] mt-[16px]">
        {currentDigital.map((digi) => (
          <div
            key={digi.id}
            className="bg-white rounded-2xl border border-[#FFE5B4] overflow-hidden shadow-sm p-[24px]"
          >
            <div className="grid grid-cols-12 gap-[24px] items-center border-b border-[#FFE5B4] pb-[16px]">
              <div className="col-span-12 md:col-span-8 space-y-[8px]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A4D00] bg-[#FFE5B4] px-[10px] py-[4px] rounded-full">
                  Instant Delivery • 24 Hours
                </span>
                {/* Typography size: 24 */}
                <h2 className="text-[24px] font-bold text-stone-900 leading-tight">
                  {digi.title}
                </h2>
                <p className="text-xs sm:text-sm italic text-[#7A4D00] font-semibold">
                  {digi.tagline}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                  {digi.desc}
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-end">
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md border border-[#FFE5B4]">
                  <img
                    src={digi.image}
                    alt={digi.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-stone-700 mt-[8px]">
                  Pricing: <span className="text-[#FFAB0D]">{digi.priceRange}</span>
                </span>
              </div>
            </div>

            {/* Template List: 12-Column Grid */}
            <div className="mt-[16px]">
              <h3 className="text-[20px] font-bold text-stone-800 mb-[16px]">
                Popular {digi.title} Formats
              </h3>
              <div className="grid grid-cols-12 gap-[24px]">
                {digi.items.map((item, idx) => {
                  const itemId = `${digi.id}-${idx}`;
                  const itemWithMeta = {
                    id: itemId,
                    title: item.name,
                    price: item.price,
                    rating: item.rating,
                    category: digi.title,
                    image: digi.image,
                    paperType: 'Digital High-Res (PDF + JPG + Reel)'
                  };
                  const wish = isWishlisted(itemId);

                  return (
                    <div
                      key={idx}
                      className="col-span-12 sm:col-span-6 lg:col-span-3 p-[10px] rounded-xl border border-[#FFE5B4] bg-[#F4F4FD] hover:bg-white hover:border-[#FFAB0D] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-[4px]">
                          <span className="text-[10px] bg-[#FFE5B4] text-[#7A4D00] font-bold px-[8px] py-[2px] rounded">
                            {item.time}
                          </span>
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
                            ₹{item.price}
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
                              addToCart(itemWithMeta, 1);
                              setIsCartOpen(true);
                            }}
                            className="py-[8px] px-[8px] bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] rounded text-[11px] font-bold transition-colors"
                          >
                            Add to cart
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(itemWithMeta, 1);
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

            <div className="mt-[16px] pt-[10px] border-t border-[#FFE5B4] flex items-center justify-between text-xs">
              <span className="text-stone-500">
                Need audio background music or clickable venue Google Maps location?
              </span>
              <a
                href={`https://wa.me/919176882120?text=Hi%20Wed%20Knot%20Craft,%20I%20want%20to%20order%20a%20${encodeURIComponent(digi.title)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[6px] text-[#7A4D00] hover:text-[#FFAB0D] font-bold"
              >
                <WhatsAppIcon size={20} />
                <span>Instant WhatsApp Customization &rarr;</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
