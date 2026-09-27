import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HINDU_WEDDING_PRODUCTS, getHinduProduct } from '../data/cardsData';
import { useStore } from '../context/StoreContext';
import { HeartIcon, BagIcon } from '../components/Icons';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getHinduProduct(productId);
  const { addToCart, toggleWishlist, isWishlisted, setIsCartOpen, startBuyNow, getWeddingDetails } = useStore();
  const [qty, setQty] = useState(2);
  const [activeImage, setActiveImage] = useState(0);

  const related = useMemo(
    () => HINDU_WEDDING_PRODUCTS.filter((p) => p.id !== productId).slice(0, 8),
    [productId]
  );

  if (!product) {
    return (
      <div className="bg-[#E6E6FA] min-h-[50vh] flex flex-col items-center justify-center gap-3 font-poppins">
        <p className="text-stone-600">Card not found.</p>
        <Link to="/wedding-cards?cat=hindu" className="btn-primary">
          Back to Hindu Wedding Cards
        </Link>
      </div>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const wish = isWishlisted(product.id);
  const savedDetails = getWeddingDetails(product.id);

  // Card goes to the shopping bag like the reference screenshot
  const handleAddToCart = () => {
    addToCart(product, qty);
    setIsCartOpen(true);
  };

  // Buy Now jumps straight to the payment page
  const handleBuyNow = () => {
    startBuyNow(product, qty, savedDetails);
    navigate('/checkout');
  };

  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 font-poppins pb-16">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Breadcrumbs */}
        <nav className="text-[12px] text-stone-500 flex items-center gap-2">
          <Link to="/" className="hover:text-amber-800">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/wedding-cards?cat=hindu" className="hover:text-amber-800">Hindu Wedding Cards</Link>
          <span>&rsaquo;</span>
          <span className="text-stone-700 font-medium">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">
          <div className="lg:col-span-6 flex gap-4">
            <div className="hidden sm:flex flex-col gap-3 w-20">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`rounded-md overflow-hidden border bg-white ${
                    activeImage === i ? 'border-[#FFAB0D] ring-1 ring-[#FFAB0D]' : 'border-stone-200'
                  }`}
                >
                  <img src={img} alt="" className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 rounded-xl border border-[#F3E3C8] bg-[#FFFBF4] p-4 flex items-center justify-center min-h-[320px]">
              <img
                src={gallery[activeImage] || product.image}
                alt={product.title}
                className="max-h-[420px] w-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="inline-block bg-[#E3C4A0] text-stone-900 text-[12px] font-semibold px-4 py-1 rounded-sm">
              SKU Code: {product.sku}
            </span>
            <p className="text-[15px] font-semibold text-[#EF6C00] mt-4">
              Rs. {product.price.toFixed(2)}{' '}
              <span className="font-normal text-stone-800">per unit inclusive of all taxes</span>
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-semibold">QTY:</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-[#FFAB0D] text-white font-bold hover:bg-[#e59500]"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-full bg-[#FFAB0D] text-white font-bold hover:bg-[#e59500]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <button
                type="button"
                onClick={handleBuyNow}
                className="px-7 py-2 rounded-md bg-[#FFAB0D] hover:bg-[#e59500] text-white font-bold text-sm shadow-sm"
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="px-7 py-2 rounded-md bg-white hover:bg-[#FFF3E0] border border-stone-300 text-stone-900 font-bold text-sm shadow-sm inline-flex items-center gap-2"
              >
                <BagIcon size={16} />
                <span>Add to Cart</span>
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="ml-auto p-2 rounded-full bg-white/80 shadow text-stone-600 hover:text-rose-600"
                title={wish ? 'Remove from Wishlist' : 'Save to Wishlist'}
              >
                <HeartIcon size={22} fill={wish ? '#e11d48' : 'none'} className={wish ? 'text-rose-600' : ''} />
              </button>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-stone-900 mb-2">
                Variants (Same size &amp; material but different color/Theme)
              </p>
              <div className="flex gap-3">
                {related.slice(0, 4).map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => {
                      setActiveImage(0);
                      navigate(`/product/${variant.id}`);
                    }}
                    title={variant.title}
                    className="w-16 h-20 rounded-md overflow-hidden border border-stone-200 bg-white hover:border-[#FFAB0D]"
                  >
                    <img src={variant.image} alt={variant.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-6">
            <h2 className="text-sm font-bold uppercase tracking-wide border-b border-stone-400 pb-1 mb-3">
              DESCRIPTION:
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">{product.description}</p>
            <h2 className="text-sm font-bold uppercase tracking-wide border-b border-stone-400 pb-1 mb-3 mt-6">
              ADDITIONAL COMMENTS
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">{product.comments}</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-sm font-bold uppercase tracking-wide mb-3">ADDITIONAL INFORMATION</h2>
            <div className="flex flex-wrap gap-4 text-sm text-stone-800 mb-5">
              <span className="inline-flex items-center gap-1">
                <span className="text-[#c0392b]">↕</span> Height: {product.height}
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="text-[#c0392b]">↔</span> Width: {product.width}
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="text-[#c0392b]">⚖</span> Weight: {product.weight}
              </span>
            </div>
            <button
              type="button"
              onClick={() => navigate(`/wedding-details/${product.id}`)}
              className="px-5 py-2 rounded-md bg-[#F2C57C] hover:bg-[#e6b465] text-stone-900 font-bold text-sm shadow-sm"
            >
              The Wedding Details
            </button>
            {savedDetails && (
              <p className="mt-3 text-[12px] text-emerald-700 font-semibold">
                Wedding details saved for {savedDetails.groomName || 'Groom'} &amp; {savedDetails.brideName || 'Bride'} ✓
              </p>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-bold text-stone-900 mb-5">Related Cards</h2>
          <div className="grid grid-cols-12 gap-5">
            {related.map((card) => {
              const relatedWish = isWishlisted(card.id);
              return (
                <div
                  key={card.id}
                  className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#FFF9F0] rounded-2xl overflow-hidden shadow cursor-pointer"
                  onClick={() => {
                    setActiveImage(0);
                    navigate(`/product/${card.id}`);
                  }}
                >
                  <div className="relative p-3">
                    <img src={card.image} alt={card.title} className="w-full aspect-[4/5] object-cover rounded-xl" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(card);
                      }}
                      className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center"
                    >
                      <HeartIcon size={16} fill={relatedWish ? '#e11d48' : 'none'} className={relatedWish ? 'text-rose-600' : ''} />
                    </button>
                  </div>
                  <div className="px-4 pb-4">
                    <p className="text-[13px] font-semibold">{card.title}</p>
                    <p className="text-[13px] font-bold">Rs. {card.price.toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
