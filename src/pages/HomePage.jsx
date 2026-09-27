import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  HeartIcon, 
  BagIcon, 
  StarIcon 
} from '../components/Icons';
import { 
  LASER_CUT_SHOWCASE, 
  UNIQUE_EXCLUSIVE_CARDS, 
  THEME_BASED_HOME, 
  SIMPLE_AFFORDABLE_CARDS, 
  COMMUNITY_COLLECTIONS, 
  TESTIMONIALS,
  PROMO_BANNERS 
} from '../data/cardsData';
import { useStore } from '../context/StoreContext';

export const HomePage = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted, addToCart, setActiveModalItem } = useStore();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? LASER_CUT_SHOWCASE.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === LASER_CUT_SHOWCASE.length - 1 ? 0 : prev + 1));
  };

  const currentLaser = LASER_CUT_SHOWCASE[carouselIndex];

  return (
    <div className="bg-[#E6E6FA]/40 min-h-screen text-stone-800 font-sans">
      
      {/* 1. HERO SECTION (Exact Match Image 2 Top) */}
      <section className="relative overflow-hidden py-12 sm:py-16 bg-[#F7F2E7]">
        {/* Olive / Eucalyptus leaves framing top and sides matching stationery flatlay */}
        <div className="absolute top-0 left-4 sm:left-12 w-48 sm:w-64 h-48 opacity-65 pointer-events-none transform -rotate-12">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M20,180 Q80,90 180,20" stroke="#2d5a37" strokeWidth="2.5" />
            <path d="M50,140 Q70,120 60,110 Q40,130 50,140" fill="#528a5e" />
            <path d="M80,110 Q105,90 95,80 Q75,100 80,110" fill="#2d5a37" />
            <path d="M120,70 Q145,50 135,40 Q115,60 120,70" fill="#528a5e" />
            <path d="M150,45 Q175,25 165,15 Q145,35 150,45" fill="#2d5a37" />
            <circle cx="95" cy="85" r="3" fill="#bc4749" opacity="0.7" />
          </svg>
        </div>

        <div className="absolute top-0 right-4 sm:right-16 w-48 sm:w-64 h-48 opacity-65 pointer-events-none transform rotate-45 ">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M180,20 Q100,90 20,180" stroke="#2d5a37" strokeWidth="2.5" />
            <path d="M140,50 Q120,70 110,60 Q130,40 140,50" fill="#528a5e" />
            <path d="M110,80 Q90,105 80,95 Q100,75 110,80" fill="#2d5a37" />
            <path d="M70,120 Q50,145 40,135 Q60,115 70,120" fill="#528a5e" />
            <circle cx="85" cy="95" r="3" fill="#bc4749" opacity="0.7" />
          </svg>
        </div>

        {/* Central Stationery Envelope & Card */}
        <div className=" max-w-2xl mx-auto px-4 relative z-10 flex justify-center">
          {/* Stacked wrapper: empty under-cards peek from behind (z-index method) */}
          <div className="relative w-full max-w-lg">
            {/* Back empty card — slightly larger, light tint */}
            <div
              className="absolute -inset-4 sm:-inset-5 rounded-md bg-[#F5EFE3] border border-stone-200/70 shadow-sm pointer-events-none"
              aria-hidden="true"
            />
            {/* Middle empty card — slightly larger than front card */}
            <div
              className="absolute -inset-2 sm:-inset-2.5 rounded-md bg-[#FBF6EC] border border-stone-200/60 pointer-events-none"
              aria-hidden="true"
            />
            {/* Front content card (same as before) */}
            <div className="relative w-full max-w-lg z-10 bg-[#F7F2E7] rounded-md shadow-lg border border-stone-200/90 p-8 sm:p-10 text-center">
            
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 tracking-tight leading-snug">
              Craft your dream wedding card with us
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Create stunning wedding invitations that capture the essence of your special day. Elegant designs, heartfelt words, and everything you need to make your first impression unforgettable.
            </p>

            <div className="mt-6">
              <Link
                to="/wedding-cards"
                className="inline-block px-8 py-2 rounded-md bg-[#FFAB0D] hover:bg-[#e59500] text-stone-950 font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                Customize Now
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LASER CUT CAROUSEL (Exact Match Image 2) */}
      <section className="bg-[#433b37] text-stone-100 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative flex items-center justify-between">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-md z-10 flex-shrink-0"
          >
            <ChevronLeftIcon size={20} />
          </button>

          {/* Carousel Center Display */}
          <div className="flex-1 mx-4 sm:mx-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Laser Cut Die-Cut Mockup */}
            <div className="md:col-span-8 flex justify-center">
              <div className="relative group overflow-hidden rounded-md shadow-2xl border border-stone-600/50 bg-stone-900/60 max-w-lg w-full">
                <img
                  src={currentLaser.image}
                  alt={currentLaser.title}
                  loading="eager"
                  decoding="async"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
            </div>

            {/* Laser Cut Caption and Pill Shop Now Button */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 leading-tight">
                {currentLaser.title}
              </h2>
              <p className="text-xs text-stone-300 max-w-xs">
                {currentLaser.subtitle}
              </p>
              <div className="pt-2">
                <Link
                  to="/wedding-cards?cat=exclusive"
                  className="inline-block px-5 py-1 rounded-full border border-stone-300 text-stone-200 hover:text-stone-900 hover:bg-white text-xs font-semibold tracking-wider transition-all"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-md z-10 flex-shrink-0"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </section>

      {/* 3. UNIQUE & EXCLUSIVE INVITATION CARDS (Exact Match Image 2) */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
            Unique & Exclusive Invitation Cards
          </h2>
          <p className="text-xs text-stone-500 font-serif italic mt-1">
            because each Wedding is truly unique and Memorable
          </p>
        </div>

        {/* 3 Square Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {UNIQUE_EXCLUSIVE_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(card.link)}
              className="bg-white rounded-md p-4 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col items-center text-center border border-stone-100"
            >
              <div className="w-full aspect-square overflow-hidden bg-stone-50 flex items-center justify-center mb-3 rounded-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm font-semibold text-stone-800 group-hover:text-amber-900">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THEME BASED INVITATION (Exact Match Image 2) */}
      <section className="py-8 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
            Theme Based Invitation
          </h2>
          <p className="text-xs text-stone-500 font-serif italic mt-1">
            theme based invitation
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {THEME_BASED_HOME.map((theme) => (
            <div
              key={theme.id}
              onClick={() => navigate(theme.link)}
              className="bg-white rounded-md p-4 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col items-center text-center border border-stone-100"
            >
              <div className="w-full aspect-square overflow-hidden bg-stone-50 flex items-center justify-center mb-3 rounded-sm">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm font-semibold text-stone-800 group-hover:text-amber-900">
                {theme.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DUAL PROMOTIONAL BANNERS (Exact Match Image 2 with local assets) */}
      <section className="py-8 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left Promo Card: Mint Green Border + Gold Filigree Frame + Dark Badge */}
          <div className="relative overflow-hidden rounded-md border border-emerald-300 bg-[#cbf3e0] p-6 shadow-sm flex items-center justify-between min-h-[140px]">
            {/* Background gold filigree ornament from local asset */}
            <img 
              src={PROMO_BANNERS.leftBannerImage} 
              alt="Decorative border" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-fill opacity-75 pointer-events-none" 
            />

            <div className="relative z-10 space-y-1.5 pr-2 max-w-[62%]">
              <p className="font-serif italic text-xs text-stone-900 leading-relaxed font-medium">
                Join our love-letters list and enjoy 20% off your first set of wedding invitations, simple, beautiful and easy on your budget.
              </p>
            </div>
            
            {/* Oval Brown Stamp Seal */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#3d271d] text-amber-100 border-2 border-amber-400 shadow-md flex flex-col items-center justify-center text-center p-2 flex-shrink-0">
              <span className="text-[8px] uppercase tracking-wider text-amber-300 font-bold">Get 20% Off</span>
              <span className="font-serif font-bold text-xs sm:text-sm text-amber-100 leading-tight">Your First Order!</span>
            </div>
          </div>

          {/* Right Promo Card: Dark Frame with Baroque Stamp on Left */}
          <div className="relative overflow-hidden rounded-md border border-stone-800 bg-[#3a2820] p-5 shadow-sm flex items-center justify-between text-stone-100 min-h-[140px]">
            {/* Carved Baroque Badge on Left from local asset */}
            <div className="relative z-10 flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mr-3">
              <img 
                src={PROMO_BANNERS.rightBannerImage} 
                alt="Early Bird Bonus" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain filter drop-shadow-md" 
              />
              <div className="absolute inset-0 flex items-center justify-center text-center p-2">
                <span className="font-serif font-bold text-[11px] sm:text-xs text-amber-200 leading-tight">
                  Early Bird Bonus
                </span>
              </div>
            </div>

            <div className="relative z-10 space-y-1.5 text-right pl-2 max-w-[65%]">
              <p className="font-serif italic text-xs text-stone-200 leading-relaxed">
                Planning ahead pays off! Book your order 60+ days in advance and get complimentary RSVP cards & personalized wax seals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SIMPLE AND AFFORDABLE WEDDING CARDS (Exact Match Image 2: 2 rows of 3) */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
            Simple and Affordable Wedding Cards
          </h2>
        </div>

        {/* 6 Cards Grid (Exact matching screenshots) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SIMPLE_AFFORDABLE_CARDS.map((card) => {
            const wish = isWishlisted(card.id);
            return (
              <div
                key={card.id}
                className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-stone-100"
              >
                {/* Product Card Image */}
                <div 
                  className="w-full aspect-4/5 overflow-hidden bg-stone-50 cursor-pointer flex items-center justify-center mb-3 rounded-sm"
                  onClick={() => setActiveModalItem(card)}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 
                    onClick={() => setActiveModalItem(card)}
                    className="font-serif text-xs font-semibold text-stone-800 line-clamp-2 hover:text-amber-800 cursor-pointer text-left"
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Row: Price on left, Heart + Bag on right (Exact layout from Image 2) */}
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-serif text-xs sm:text-sm font-semibold text-stone-900">
                    Rs {card.price.toFixed(2)}
                  </span>

                  <div className="flex items-center space-x-2 text-stone-600">
                    {/* Wishlist toggle */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(card)}
                      className="p-1 hover:text-rose-600 transition-colors"
                      title={wish ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <HeartIcon 
                        size={18} 
                        fill={wish ? "#e11d48" : "none"} 
                        className={wish ? "text-rose-600" : ""} 
                      />
                    </button>

                    {/* Add to Bag */}
                    <button
                      type="button"
                      onClick={() => addToCart(card, 100)}
                      className="p-1 hover:text-amber-800 transition-colors"
                      title="Add to Bag"
                    >
                      <BagIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. SUMMER VOLUME SALE BANNER (Exact Match Image 2) */}
      <section className="py-8 max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-md bg-[#faf8ef] border border-stone-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Yellow "Summer" branding */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-serif font-black text-4xl sm:text-5xl text-[#FFAB0D] tracking-tight uppercase drop-shadow-xs">
                Summer
              </span>
            </div>

            {/* Right: Discount Tiers & Button */}
            <div className="md:col-span-7 flex flex-col items-center md:items-end text-center md:text-right space-y-2">
              <div className="space-y-1 text-xs sm:text-sm font-semibold text-stone-800 tracking-wide font-sans">
                <p>50 cards = 10% Off</p>
                <p>100 cards = 15% Off</p>
                <p>200 cards = 20% Off</p>
                <p>300 cards = 25% Off</p>
                <p>500 cards = 30% Off</p>
              </div>

              {/* Order Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate('/wedding-cards')}
                  className="px-6 py-2 rounded-md bg-[#FFAB0D] hover:bg-[#e59500] text-stone-950 font-bold text-xs shadow-sm transition-all"
                >
                  Order Now & Save Up To 30% Off
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-[10px] text-stone-500 italic max-w-sm mt-1">
                This offer is not applicable on customized card, E-cards and Luxury boxes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. 4 COMMUNITY & RELIGIOUS TRADITIONS (Exact Match Image 2) */}
      <section className="py-8 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {COMMUNITY_COLLECTIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col text-center border border-stone-100"
            >
              <div className="aspect-4/5 overflow-hidden bg-stone-50 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <h3 className="font-serif text-xs font-semibold text-stone-900 mb-2 truncate">
                  {item.title}
                </h3>
                <button
                  onClick={() => navigate(item.link)}
                  className="w-full py-1.5 px-3 rounded-md bg-[#FFAB0D] hover:bg-[#e59500] text-stone-950 text-xs font-bold shadow-xs transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS: "WHAT CLIENT SAY ABOUT US" (Exact Match Image 2) */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-base sm:text-lg uppercase tracking-wider text-stone-900">
            WHAT CLIENT SAY ABOUT US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-md p-6 text-center shadow-sm flex flex-col justify-between border border-stone-100"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full overflow-hidden mb-3 border-2 border-[#FFE5B4]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif font-bold text-sm text-stone-900">
                  {review.name}
                </h3>

                <p className="text-xs text-stone-600 mt-2 leading-relaxed font-serif">
                  "{review.text}"
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 mt-4 text-[#FFAB0D]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={15} fill="#FFAB0D" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. "How It Works" (Exact Match Image 2) */}
      <section className="py-12 bg-[#E6E6FA]/50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-base sm:text-lg uppercase tracking-wider text-stone-900">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {/* Step 1: Order Sample (blue flat icon) */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-cyan-600 mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h4 className="text-xs font-semibold text-stone-800">Order Sample</h4>
            </div>

            {/* Step 2: Get Sample Deliv in 5-days (purple box/delivery icon) */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-indigo-600 mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h4 className="text-xs font-semibold text-stone-800">Get Sample Deliv in 5-days</h4>
            </div>

            {/* Step 3: Approve Digital Draft (green check icon) */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-emerald-600 mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-xs font-semibold text-stone-800">Approve Digital Draft</h4>
            </div>

            {/* Step 4: Place Your Bulk Order (yellow tray/boxes icon) */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#FFAB0D] mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  <path d="M4 19h16v2H4z"/>
                </svg>
              </div>
              <h4 className="text-xs font-semibold text-stone-800">Place Your Bulk Order</h4>
            </div>

            {/* Step 5: Print & Delivery (sky delivery cart icon) */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-sky-600 mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
                </svg>
              </div>
              <h4 className="text-xs font-semibold text-stone-800">Print & Delivery</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
