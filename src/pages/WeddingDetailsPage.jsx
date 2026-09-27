import React, { useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getHinduProduct, PROMO_BANNERS } from '../data/cardsData';
import { useStore } from '../context/StoreContext';
import { CalendarIcon, ClockIcon, LocationIcon, PencilIcon, BagIcon } from '../components/Icons';
import { buildCalendarFile, formatWeddingDate } from '../utils/orderUtils';

const SIG_SCRIPT = { fontFamily: "'Alex Brush', 'Playfair Display', cursive" };

const emptyForm = {
  groomName: '',
  brideName: '',
  weddingDate: '',
  weddingTime: '',
  location: '',
  reception: 'Reception to Follow',
  dressCode: 'Any Dress Code',
  rsvpBy: ''
};

export const WeddingDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getHinduProduct(productId);
  const {
    getWeddingDetails,
    saveWeddingDetails,
    startBuyNow,
    addToCart,
    setIsCartOpen,
    showToast,
    checkoutQty
  } = useStore();

  const saved = getWeddingDetails(productId) || {};
  const [form, setForm] = useState({ ...emptyForm, ...saved });
  const [qty, setQty] = useState(saved.quantity || checkoutQty || 2);

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const locationRef = useRef(null);

  if (!product) {
    return (
      <div className="bg-[#E6E6FA] min-h-[50vh] flex flex-col items-center justify-center gap-3 font-poppins">
        <p className="text-stone-600">Card not found.</p>
        <Link to="/wedding-cards?cat=hindu" className="btn-primary">Back to Hindu Wedding Cards</Link>
      </div>
    );
  }

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    if (!form.groomName.trim() || !form.brideName.trim()) {
      showToast('Please enter the Groom and Bride names.');
      return false;
    }
    if (!form.weddingDate) {
      showToast('Please pick the wedding date.');
      return false;
    }
    if (!form.location.trim()) {
      showToast('Please enter the wedding venue / location.');
      return false;
    }
    return true;
  };

  const detailsPayload = () => ({ ...form, quantity: qty });

  // Buy Now -> payment page -> order confirmed page
  const handleBuyNow = () => {
    if (!validate()) return;
    saveWeddingDetails(product.id, detailsPayload());
    startBuyNow(product, qty, detailsPayload());
    showToast('Wedding details saved. Proceeding to payment...');
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    saveWeddingDetails(product.id, detailsPayload());
    addToCart(product, qty);
    setIsCartOpen(true);
  };

  const handleViewMap = () => {
    const query = encodeURIComponent(form.location || 'Chennai');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleAddToCalendar = () => {
    const ics = buildCalendarFile({
      groom: form.groomName,
      bride: form.brideName,
      date: form.weddingDate,
      time: form.weddingTime,
      location: form.location,
      dressCode: form.dressCode
    });
    if (!ics) {
      showToast('Please pick the wedding date first.');
      return;
    }
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${(form.groomName || 'wedding').replace(/\s+/g, '-').toLowerCase()}-invite.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Invitation added to your calendar 📅');
  };

  const handleRsvp = () => {
    const message = `Hi Wed Knot Craft! RSVP for ${form.groomName || 'Groom'} & ${form.brideName || 'Bride'} on ${formatWeddingDate(form.weddingDate) || 'the wedding day'}.`;
    showToast('Thank you! Your RSVP has been noted ✅');
    window.open(`https://wa.me/919176882120?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClass =
    'w-full text-xs p-2 rounded-lg border border-[#E6D3B3] bg-white focus:outline-none focus:border-[#FFAB0D] focus:ring-1 focus:ring-[#FFAB0D] text-stone-800';
  const labelClass = 'block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1';

  return (
    <div className="bg-[#E6E6FA] min-h-screen font-poppins pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5">
        <nav className="text-[12px] text-stone-500 flex items-center gap-2">
          <Link to="/" className="hover:text-amber-800">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/wedding-cards?cat=hindu" className="hover:text-amber-800">Hindu Wedding Cards</Link>
          <span>&rsaquo;</span>
          <Link to={`/product/${product.id}`} className="hover:text-amber-800">{product.title}</Link>
          <span>&rsaquo;</span>
          <span className="text-stone-700 font-medium">Wedding Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
          {/* Entry form */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#F0DFC2] shadow-sm p-5">
            <h1 className="text-[20px] font-bold text-stone-900">Wedding Details</h1>
            <p className="text-[11px] text-stone-500 mt-1">
              Fill the invitation wording for <span className="font-semibold">{product.title}</span> (SKU {product.sku})
            </p>

            <div className="space-y-3 mt-4">
              <div>
                <label className={labelClass}>Groom Name</label>
                <input className={inputClass} type="text" placeholder="Groom Name" value={form.groomName} onChange={(e) => update('groomName', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Bride Name</label>
                <input className={inputClass} type="text" placeholder="Bride Name" value={form.brideName} onChange={(e) => update('brideName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Date</label>
                  <input ref={dateRef} className={inputClass} type="date" value={form.weddingDate} onChange={(e) => update('weddingDate', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Time</label>
                  <input ref={timeRef} className={inputClass} type="time" value={form.weddingTime} onChange={(e) => update('weddingTime', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <input ref={locationRef} className={inputClass} type="text" placeholder="Venue, City" value={form.location} onChange={(e) => update('location', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Reception</label>
                  <input className={inputClass} type="text" value={form.reception} onChange={(e) => update('reception', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Dress Code</label>
                  <input className={inputClass} type="text" value={form.dressCode} onChange={(e) => update('dressCode', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Kindly RSVP by</label>
                <input className={inputClass} type="text" placeholder="Wedding Date / RSVP date" value={form.rsvpBy} onChange={(e) => update('rsvpBy', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Quantity</label>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-8 h-8 rounded-full bg-[#FFAB0D] text-white font-bold hover:bg-[#e59500]">−</button>
                  <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                  <button type="button" onClick={() => setQty((q) => q + 1)} className="w-8 h-8 rounded-full bg-[#FFAB0D] text-white font-bold hover:bg-[#e59500]">+</button>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <button type="button" onClick={handleBuyNow} className="w-full py-2.5 rounded-lg bg-[#FFAB0D] hover:bg-[#e59500] text-white text-sm font-bold shadow-sm">
                Buy Now
              </button>
              <button type="button" onClick={handleAddToCart} className="w-full py-2.5 rounded-lg bg-[#FFE5B4] hover:bg-[#fed387] text-[#7A4D00] text-sm font-bold inline-flex items-center justify-center gap-2">
                <BagIcon size={16} />
                <span>Add to cart</span>
              </button>
              <Link to={`/product/${product.id}`} className="block text-center text-[11px] text-stone-500 hover:text-amber-800 underline">
                Back to card details
              </Link>
            </div>
          </div>

          {/* Live invitation preview */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[#F2E0C2] bg-[#FCEBCB] px-6 pt-10 sm:px-14">
              <img src={PROMO_BANNERS.floralBouquet} alt="" className="pointer-events-none absolute -top-8 -left-8 w-28 sm:w-40 opacity-80" />
              <img src={PROMO_BANNERS.floralBouquet} alt="" className="pointer-events-none absolute -top-8 -right-8 w-28 sm:w-40 opacity-80 scale-x-[-1]" />

              <div className="flex justify-center relative z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[3px] border-[#C9A227] bg-[#F7E1B5] flex flex-col items-center justify-center shadow-inner px-4 text-center">
                  <span className="text-[15px] sm:text-[19px] text-stone-800 leading-tight" style={SIG_SCRIPT}>
                    {form.groomName || 'Groom Name'}
                  </span>
                  <span className="text-[14px] text-stone-700" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                    &amp;
                  </span>
                  <span className="text-[15px] sm:text-[19px] text-stone-800 leading-tight" style={SIG_SCRIPT}>
                    {form.brideName || 'Bride Name'}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative border border-t-0 border-[#F2E0C2] rounded-b-2xl bg-[#FCEBCB] px-6 pb-10 text-center overflow-hidden">
              <img src={PROMO_BANNERS.floralBouquet} alt="" className="pointer-events-none absolute -bottom-8 -left-8 w-28 sm:w-40 opacity-80 scale-y-[-1]" />
              <img src={PROMO_BANNERS.floralBouquet} alt="" className="pointer-events-none absolute -bottom-8 -right-8 w-28 sm:w-40 opacity-80 scale-[-1]" />

              <h2 className="text-[18px] sm:text-[22px] font-bold text-stone-900 leading-snug max-w-xl mx-auto">
                Together with their families, joyfully invite you to their wedding
              </h2>

              <div className="mt-6 max-w-xl mx-auto bg-[#FDF3E0] border border-[#E4CFA6] rounded-2xl px-6 py-6 shadow-sm relative z-10">
                <div className="flex items-center gap-3 text-left">
                  <CalendarIcon size={22} className="text-stone-700 flex-shrink-0" />
                  <span className={`flex-1 ${form.weddingDate ? 'text-stone-800' : 'text-stone-400'} text-[15px]`}>
                    {formatWeddingDate(form.weddingDate) || 'Date'}
                  </span>
                  <button type="button" onClick={() => dateRef.current?.focus()} className="text-stone-700 hover:text-amber-700" title="Edit date">
                    <PencilIcon size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-3 text-left mt-4">
                  <ClockIcon size={22} className="text-stone-700 flex-shrink-0" />
                  <span className={`flex-1 ${form.weddingTime ? 'text-stone-800' : 'text-stone-400'} text-[15px]`}>
                    {form.weddingTime || 'Time'}
                  </span>
                  <button type="button" onClick={() => timeRef.current?.focus()} className="text-stone-700 hover:text-amber-700" title="Edit time">
                    <PencilIcon size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-3 text-left mt-4">
                  <LocationIcon size={22} className="text-stone-700 flex-shrink-0" />
                  <span className={`flex-1 ${form.location ? 'text-stone-800' : 'text-stone-400'} text-[15px]`}>
                    {form.location || 'Location'}
                  </span>
                  <button type="button" onClick={() => locationRef.current?.focus()} className="text-stone-700 hover:text-amber-700" title="Edit location">
                    <PencilIcon size={18} />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <button type="button" onClick={handleViewMap} className="px-5 py-2 rounded-full bg-[#FFAB0D] hover:bg-[#e59500] text-white text-[12px] font-semibold shadow-sm">
                    View map
                  </button>
                  <button type="button" onClick={handleAddToCalendar} className="px-5 py-2 rounded-full bg-[#FFAB0D] hover:bg-[#e59500] text-white text-[12px] font-semibold shadow-sm">
                    Add to calander
                  </button>
                </div>
              </div>

              <p className="mt-6 text-[16px] text-stone-800 font-semibold relative z-10">
                {form.reception || 'Reception to Follow'}
              </p>
              <p className="mt-1 text-[16px] text-stone-800 relative z-10">
                Dress Code: <span className="italic">“{form.dressCode || 'Any Dress Code'}”</span>
              </p>
              <p className="mt-1 text-[16px] text-stone-800 relative z-10">
                Kindly <span className="font-bold">RSVP</span> by <span className="italic">“{form.rsvpBy || 'Wedding Date'}”</span>
              </p>
              <button type="button" onClick={handleRsvp} className="mt-4 px-6 py-2 rounded-full bg-[#FFAB0D] hover:bg-[#e59500] text-white text-[12px] font-semibold shadow-sm relative z-10">
                RSVP Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
