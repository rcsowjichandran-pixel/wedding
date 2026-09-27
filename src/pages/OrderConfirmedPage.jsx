import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { BagIcon, MailIcon, PhoneIcon, TrashIcon, UserIcon } from '../components/Icons';
import { formatWeddingDate } from '../utils/orderUtils';

// Gold medallion with the curved "ORDER CONFIRMED" ribbon from the reference design
const OrderMedallion = () => (
  <div className="flex justify-center">
    <svg viewBox="0 0 320 320" className="w-[230px] h-[230px] sm:w-[280px] sm:h-[280px]">
      <defs>
        <path id="orderArc" d="M 160,160 m -118,0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0" />
      </defs>
      <circle cx="160" cy="160" r="150" fill="#F0A500" />
      <text fill="#ffffff" fontSize="26" fontWeight="600" letterSpacing="1">
        <textPath href="#orderArc" startOffset="4%">
          ORDER CONFIRMED ❀ ORDER CONFIRMED ✿
        </textPath>
      </text>
      <text x="160" y="70" textAnchor="middle" fontSize="17" fill="#ffffff">🌸</text>
      <text x="256" y="218" textAnchor="middle" fontSize="17" fill="#ffffff">🌸</text>
      <text x="62" y="218" textAnchor="middle" fontSize="17" fill="#ffffff">🌸</text>
      <circle cx="160" cy="160" r="36" fill="#1B1B1B" />
      <path d="M144 160 l11 12 l22 -24" stroke="#ffffff" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const InfoRow = ({ icon, children, className = '' }) => (
  <div className={`flex items-start gap-2 text-[13px] text-stone-600 ${className}`}>
    <span className="text-stone-500 flex-shrink-0 mt-0.5">{icon}</span>
    <span className="flex-1">{children}</span>
  </div>
);

export const OrderConfirmedPage = () => {
  const navigate = useNavigate();
  const { lastOrder, removeOrderItem } = useStore();

  if (!lastOrder) {
    return (
      <div className="bg-[#E6E6FA] min-h-[60vh] flex flex-col items-center justify-center gap-3 font-poppins px-4 text-center">
        <BagIcon size={48} className="text-stone-400" />
        <h1 className="text-[22px] font-bold text-stone-800">No order to show</h1>
        <p className="text-xs text-stone-500 max-w-sm">
          Complete a payment from the checkout page to see your confirmed order here.
        </p>
        <Link to="/wedding-cards?cat=hindu" className="btn-primary mt-2">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const order = lastOrder;
  const { customer, shippingAddress } = order;

  return (
    <div className="bg-[#E6E6FA] min-h-screen font-poppins pb-16">
      <div className="pt-8 pb-2">
        <OrderMedallion />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Your order */}
        <div className="lg:col-span-8">
          <h1 className="text-[26px] font-bold text-stone-900">Your Order</h1>
          <p className="mt-3 text-[15px] font-bold text-stone-900">Order ID: {order.id}</p>
          <p className="mt-2 text-[15px] text-stone-800">Thank You! &nbsp;Your Order has been confirmed.</p>
          <p className="mt-1 text-[12px] text-stone-500">
            Paid via {order.paymentMethod} on {order.dateLabel} at {order.timeLabel}
          </p>

          <div className="mt-6 border border-stone-300 rounded-md bg-white divide-y divide-stone-200">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4">
                <div className="w-[84px] h-[84px] rounded-md bg-white border border-stone-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="bg-[#F0A500] text-white rounded-md px-4 py-3 flex-1 max-w-[260px]">
                  <p className="text-[13px] font-semibold">SKU: {item.sku}</p>
                  <p className="text-[13px] font-semibold mt-1">SN ({item.sn})</p>
                </div>
                <span className="ml-auto text-[15px] font-semibold text-stone-900">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => removeOrderItem(order.id, item.id)}
                  className="text-stone-700 hover:text-rose-600 p-1"
                  title="Remove this item"
                >
                  <TrashIcon size={18} />
                </button>
              </div>
            ))}
            {order.items.length === 0 && (
              <div className="p-6 text-[13px] text-stone-500 text-center">All items were removed from this order.</div>
            )}
          </div>

          {/* Order summary */}
          <div className="mt-6 border border-stone-200 rounded-md bg-white p-5">
            <h2 className="text-[17px] font-bold text-stone-900 mb-4">Order Summary</h2>
            <div className="space-y-2 text-[14px] text-stone-800">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>Rs. {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping Charge</span>
                <span>Rs. {order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxes</span>
                <span>{order.taxRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span>Rs. {order.discount.toFixed(2)}</span>
              </div>
              <div className="border-t border-stone-300 pt-3 flex items-center justify-between text-[16px] font-bold">
                <span>Total</span>
                <span>Rs. {order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/wedding-cards?cat=hindu')}
              className="px-8 py-2.5 rounded-md bg-[#F0A500] hover:bg-[#e59500] text-stone-900 font-bold text-[14px] shadow-sm"
            >
              Continue Shopping
            </button>
          </div>

        </div>

        {/* Customer side cards */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-stone-200 rounded-md bg-white p-5">
            <h3 className="text-[15px] font-bold text-stone-900 mb-3">Customer</h3>
            <InfoRow icon={<UserIcon size={18} />}>{customer.name}</InfoRow>
            <InfoRow icon={<BagIcon size={18} />} className="mt-2">{customer.ordersCount} order</InfoRow>
            {order.couple && (
              <InfoRow icon={<span>❤</span>} className="mt-2">
                {order.couple.groom || 'Groom'} &amp; {order.couple.bride || 'Bride'}
              </InfoRow>
            )}
          </div>

          <div className="border border-stone-200 rounded-md bg-white p-5">
            <h3 className="text-[15px] font-bold text-stone-900 mb-3">Customer Information</h3>
            <InfoRow icon={<MailIcon size={18} />}>{customer.email}</InfoRow>
            <InfoRow icon={<PhoneIcon size={18} />} className="mt-2">{customer.phone}</InfoRow>
          </div>

          <div className="border border-stone-200 rounded-md bg-white p-5">
            <h3 className="text-[15px] font-bold text-stone-900 mb-3">Shipping Address</h3>
            <InfoRow icon={<UserIcon size={18} />}>{shippingAddress.name}</InfoRow>
            <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
              <p>{shippingAddress.line1}</p>
              <p>{shippingAddress.line2}</p>
              <p>{shippingAddress.line3}</p>
            </div>
            {order.couple?.date && (
              <p className="mt-3 text-[12px] text-emerald-700 font-semibold">
                Wedding date: {formatWeddingDate(order.couple.date)}
              </p>
            )}
          </div>

          <div className="border border-stone-200 rounded-md bg-white p-5">
            <h3 className="text-[15px] font-bold text-stone-900 mb-2">Billing Address</h3>
            <p className="text-[13px] text-stone-500">{order.billingAddress}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
