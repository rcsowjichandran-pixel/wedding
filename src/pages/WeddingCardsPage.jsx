import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  WEDDING_CARD_CATEGORIES, 
  HINDU_WEDDING_PRODUCTS 
} from '../data/cardsData';
import { useStore } from '../context/StoreContext';
import { HeartIcon } from '../components/Icons';

const HINDU_CATEGORY_ID = 'hindu';

const CATEGORY_COLORS = {
  hindu: '#D97706',
  christian: '#2563EB',
  muslim: '#059669',
  sikh: '#B45309',
  interfaith: '#7C3AED',
  exclusive: '#BE185D',
  traditional: '#DC2626',
  all: '#C2410C',
  'new-style': '#0F766E',
  envelope: '#4338CA',
  'elegant-pastel': '#DB2777',
  royal: '#92400E'
};

export const WeddingCardsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCat = searchParams.get('cat');
  const showHinduSubdivisions = selectedCat === HINDU_CATEGORY_ID;
  const { toggleWishlist, isWishlisted, addToCart } = useStore();

  const handleCategoryClick = (catId) => {
    if (catId !== HINDU_CATEGORY_ID) return;
    setSearchParams({ cat: HINDU_CATEGORY_ID });
  };

  // Selecting a card opens its option page; the first (featured) card also lands in the bag
  const openProduct = (card, isFirst) => {
    if (isFirst) {
      addToCart(card, 2, { ifAbsent: true });
    }
    navigate(`/product/${card.id}`);
  };

  if (showHinduSubdivisions) {
    return (
      <div className="bg-[#E6E6FA] min-h-screen text-stone-800 pb-[32px] font-poppins">
        <div className="pt-[24px] pb-[16px] text-center px-[24px]">
          <h1 className="text-[28px] sm:text-[32px] font-bold uppercase tracking-wider text-stone-900 leading-tight">
            HINDU WEDDING CARDS
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-[24px]">
          <div className="grid grid-cols-12 gap-[24px]">
            {HINDU_WEDDING_PRODUCTS.map((card, index) => {
              const wish = isWishlisted(card.id);
              return (
                <div
                  key={card.id}
                  className="hindu-product-card col-span-12 sm:col-span-6 lg:col-span-3 bg-[#FFF9F0] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(80,70,120,0.08)] flex flex-col cursor-pointer"
                  onClick={() => openProduct(card, index === 0)}
                >
                  <div className="relative p-4 pb-2">
                    <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-[#FFF9F0]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="hindu-product-image w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(card);
                      }}
                      className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-stone-500 hover:text-rose-600"
                      title={wish ? 'Remove from Wishlist' : 'Save to Wishlist'}
                    >
                      <HeartIcon
                        size={18}
                        fill={wish ? '#e11d48' : 'none'}
                        className={wish ? 'text-rose-600' : ''}
                      />
                    </button>
                  </div>
                  <div className="px-4 pb-5 pt-1">
                    <h3 className="text-[14px] font-semibold text-stone-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[13px] font-bold text-stone-800 mt-1">
                      Rs. {card.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 pb-[32px] font-poppins">
      <div className="pt-[24px] pb-[16px] text-center px-[24px]">
        <h1 className="text-[32px] font-bold uppercase tracking-wider text-stone-900 leading-tight">
          WEDDING CARDS
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-[24px]">
        <div className="grid grid-cols-12 gap-[24px]">
          {WEDDING_CARD_CATEGORIES.map((cat) => {
            const isHindu = cat.id === HINDU_CATEGORY_ID;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`category-card col-span-12 sm:col-span-6 lg:col-span-3 bg-[#FFF9F0] rounded-2xl overflow-hidden border border-white/80 shadow-[0_8px_24px_rgba(80,70,120,0.08)] flex flex-col ${
                  isHindu ? 'cursor-pointer hover:shadow-[0_12px_28px_rgba(80,70,120,0.14)]' : 'cursor-default'
                }`}
                style={{ '--category-color': CATEGORY_COLORS[cat.id] || '#FFAB0D' }}
              >
                <div className="p-4 pb-2">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-[#FFF9F0]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="px-4 pb-5 pt-1 text-center">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-stone-900 leading-snug">
                    {cat.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
