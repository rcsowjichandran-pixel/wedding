import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CameraIcon, ChevronDownIcon, InfoIcon, CheckIcon, BagIcon } from '../components/Icons';
import { formatOrderDate, formatOrderTime } from '../utils/orderUtils';

/* ---------- Payment brand badges ---------- */

const MastercardBadge = () => (
  <div className="flex flex-col items-center">
    <svg width="46" height="28" viewBox="0 0 46 28">
      <circle cx="18" cy="14" r="12" fill="#EB001B"></circle>
      <circle cx="30" cy="14" r="12" fill="#F79E1B" fillOpacity="0.85"></circle>
    </svg>
    <span className="text-[7px] font-semibold text-stone-700 -mt-1">mastercard</span>
  </div>
);

const VisaBadge = () => (
  <svg width="56" height="28" viewBox="0 0 56 28">
    <text x="0" y="21" fontSize="20" fontStyle="italic" fontWeight="bold" fill="#1A1F71" fontFamily="Poppins, sans-serif">
      VISA
    </text>
  </svg>
);

const PaypalBadge = () => (
  <svg width="62" height="28" viewBox="0 0 62 28">
    <text x="0" y="21" fontSize="16" fontWeight="bold" fill="#253B80" fontFamily="Poppins, sans-serif">
      Pay
    </text>
    <text x="27" y="21" fontSize="16" fontWeight="bold" fill="#179BD7" fontFamily="Poppins, sans-serif">
      Pal
    </text>
  </svg>
);

const UpiBadge = ({ small = false }) => (
  <div
    className={`${small ? 'w-10 h-6' : 'w-14 h-9'} bg-[#7B1E1E] rounded-md flex items-center justify-center shadow-sm`}
  >
    <span className={`text-white font-bold italic ${small ? 'text-[10px]' : 'text-[15px]'}`}>UPI</span>
  </div>
);

const PaytmBadge = () => (
  <div className="px-1.5 py-0.5 bg-white border border-stone-200 rounded shadow-sm">
    <span className="text-[11px] font-bold text-[#00BAF2]">Pay</span>
    <span className="text-[11px] font-bold text-[#002970]">tm</span>
  </div>
);

const GpayBadge = () => (
  <div className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center shadow-sm">
    <span className="text-[15px] font-bold" style={{ color: '#4285F4' }}>G</span>
  </div>
);

const PhonepeBadge = () => (
  <div className="w-8 h-8 rounded-full bg-[#5F259F] flex items-center justify-center shadow-sm">
    <span className="text-white text-[13px] font-bold">₹</span>
  </div>
);

const CredBadge = () => (
  <div className="w-12 h-8 bg-stone-900 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-[9px] font-bold tracking-widest">CRED</span>
  </div>
);

const PAYMENT_METHODS = [
  { id: 'paytm', label: 'Paytm', badge: <PaytmBadge /> },
  { id: 'gpay', label: 'Gpay', badge: <GpayBadge /> },
  { id: 'phonepe', label: 'Phonepe', badge: <PhonepeBadge /> },
  { id: 'cred', label: 'Cred', badge: <CredBadge /> }
];

const Radio = ({ selected }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
      selected ? 'border-stone-900' : 'border-stone-400'
    }`}
  >
    {selected ? <span className="w-[8px] h-[8px] rounded-full bg-stone-900" /> : null}
  </span>
);

export const PaymentPage = () => {
  const navigate = useNavigate();
  const { checkoutItems, checkoutTotals, placeOrder, buyNow, checkoutSource, getWeddingDetails, showToast } = useStore();
  const [method, setMethod] = useState('paytm');
  const [codOpen, setCodOpen] = useState(false);
  const [saveDetails, setSaveDetails] = useState(false);

  const couple = buyNow ? getWeddingDetails(buyNow.item.id) : null;

  const selectedMethodLabel = () => {
    if (method === 'cod') return 'Cash on Delivery';
    const found = PAYMENT_METHODS.find((m) => m.id === method);
    return `UPI - ${found ? found.label : 'Paytm'}`;
  };

  const handlePay = () => {
    if (checkoutItems.length === 0) {
      showToast('Your bag is empty. Please add a wedding card first.');
      return;
    }
    placeOrder({ paymentMethod: selectedMethodLabel() });
    if (saveDetails) showToast('Payment details saved for future purchase.');
    navigate('/order-confirmed');
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="bg-[#E6E6FA] min-h-[60vh] flex flex-col items-center justify-center gap-3 font-poppins px-4 text-center">
        <BagIcon size={48} className="text-stone-400" />
        <h1 className="text-[22px] font-bold text-stone-800">Nothing to pay for yet</h1>
        <p className="text-xs text-stone-500 max-w-sm">
          Pick a card from the Hindu Wedding Cards collection, choose your options and continue to payment.
        </p>
        <Link to="/wedding-cards?cat=hindu" className="btn-primary mt-2">
          Browse Hindu Wedding Cards
        </Link>
      </div>
    );
  }

  const { subtotal, shipping, discount, coupon, taxRate, total } = checkoutTotals;
  const now = new Date();

  return (
    <div className="bg-[#E6E6FA] min-h-screen font-poppins pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="text-[12px] text-stone-500 flex items-center gap-2 mb-5">
          <Link to="/" className="hover:text-amber-800">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/wedding-cards?cat=hindu" className="hover:text-amber-800">Hindu Wedding Cards</Link>
          <span>&rsaquo;</span>
          <span className="text-stone-700 font-medium">
            {checkoutSource === 'buy-now' ? 'Buy Now Payment' : 'Bag Checkout'}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Payment methods card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <div className="flex items-center gap-8">
              <MastercardBadge />
              <VisaBadge />
              <PaypalBadge />
              <UpiBadge />
            </div>

            <div className="mt-6 border border-stone-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200">
                <span className="text-[15px] text-stone-800">Pay by UPI</span>
                <UpiBadge small />
              </div>

              {PAYMENT_METHODS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setMethod(option.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 border-b border-stone-200 hover:bg-[#FFFBEF] transition-colors last:border-b-0"
                >
                  <Radio selected={method === option.id} />
                  <span className="flex-1 text-left text-[15px] text-stone-800">{option.label}</span>
                  {option.badge}
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMethod('cod');
                  setCodOpen((open) => !open);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 bg-[#8C8C8C] text-white transition-colors ${
                  method === 'cod' ? 'ring-2 ring-inset ring-stone-900' : ''
                }`}
              >
                <CameraIcon size={20} />
                <span className="flex-1 text-left text-[15px] font-medium">Cash on Delivery</span>
                <ChevronDownIcon size={18} className={codOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>

              {codOpen && (
                <div className="px-4 py-3 bg-[#F5F5F5] text-[12px] text-stone-700 border-t border-stone-200">
                  Pay in cash when your wedding cards are delivered. Kindly keep exact change ready. Cash on Delivery is
                  available across Chennai and Tamil Nadu for orders up to ₹50,000.
                </div>
              )}
            </div>

            <p className="mt-5 flex items-center gap-2 text-[12px] text-stone-700">
              <InfoIcon size={16} className="text-stone-600 flex-shrink-0" />
              <span>Credit card payments may take up to 24 hours to be processed!</span>
            </p>

            <button
              type="button"
              onClick={() => setSaveDetails((prev) => !prev)}
              className="mt-3 flex items-center gap-2 text-[12px] text-stone-700"
            >
              <span
                className={`w-[16px] h-[16px] rounded-sm border flex items-center justify-center ${
                  saveDetails ? 'bg-white border-[#1877F2] text-[#1877F2]' : 'bg-white border-stone-400 text-transparent'
                }`}
              >
                <CheckIcon size={12} />
              </span>
              <span>Save my payments details for future purchase</span>
            </button>
          </div>

          {/* Order summary card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <h2 className="text-center text-[22px] font-bold text-stone-900 underline underline-offset-4 decoration-2">
              Order Summary
            </h2>

            <div className="mt-6 space-y-2 text-[14px] text-stone-800">
              <div className="flex items-center justify-between">
                <span>Date:</span>
                <span>{formatOrderDate(now)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Time:</span>
                <span>{formatOrderTime(now)}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200">
              <h3 className="text-[16px] font-bold text-stone-900">Products</h3>
              <div className="mt-3 space-y-2 text-[14px]">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3">
                    <span className="text-stone-800">{item.title || item.name}</span>
                    <span className="text-stone-800 flex-shrink-0">{item.quantity}</span>
                  </div>
                ))}
                {checkoutItems.map((item) => (
                  <div key={`${item.id}-compliment`} className="flex items-start justify-between gap-3">
                    <span className="text-stone-800">Added Compliment</span>
                    <span className="text-stone-800 flex-shrink-0">{item.compliment || 'Hold Bag'}</span>
                  </div>
                ))}
                {couple && (
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-stone-800">Wedding Details</span>
                    <span className="text-stone-800 text-right">
                      {couple.groomName || 'Groom'} &amp; {couple.brideName || 'Bride'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {coupon && (
              <div className="mt-4 flex items-center justify-between bg-[#E3E2DE] rounded-md px-3 py-2 text-[13px]">
                <span className="font-bold text-stone-900">{coupon}</span>
                <span className="text-emerald-600 font-semibold">Coupon Applied</span>
              </div>
            )}

            <div className="mt-5 space-y-3 text-[15px] text-[#C68A2E]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="flex items-center gap-2">
                  {shipping.toFixed(2)}
                  <span className="text-[10px] bg-[#E3E2DE] text-stone-700 px-2 py-0.5 rounded">Free</span>
                </span>
              </div>
              {discount > 0 && (
                <div className="flex items-center justify-between">
                  <span>Discount ({coupon})</span>
                  <span className="text-emerald-600">- Rs. {discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-stone-900 font-semibold">
                <span>Taxes</span>
                <span className="text-stone-700 text-[12px]">{taxRate} included</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePay}
              className="mt-7 w-full max-w-[280px] mx-auto block py-2.5 rounded-md bg-[#F5A623] hover:bg-[#e59500] text-stone-900 font-bold text-[15px] shadow-sm"
            >
              Pay Rs. {total.toFixed(2)}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mt-3 w-full text-center text-[11px] text-stone-500 hover:text-amber-800 underline"
            >
              Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
