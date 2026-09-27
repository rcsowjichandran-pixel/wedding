import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { TAX_RATE_PERCENT, round2 } from '../utils/orderUtils';
import { BagIcon } from '../components/Icons';

/* Checkout stays locked until the bag holds the minimum order quantity */
const MIN_CHECKOUT_ITEMS = 100;

/* Fallbacks keep the SKU / SN boxes filled for cards saved before these fields existed */
const FALLBACK_SKU = 'KSN0054';
const FALLBACK_SN = 'SN 54';

const money = (value) => `Rs.${round2(value).toFixed(2)}`;

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateCartQuantity, removeFromCart, showToast } = useStore();

  // One row per bag line: quantity, unit price, 18% GST for that line and the line price
  const lines = cart.map((item) => {
    const unitPrice = item.price || 0;
    const quantity = item.quantity || 1;
    const lineSubtotal = round2(unitPrice * quantity);
    return {
      ...item,
      unitPrice,
      quantity,
      lineSubtotal,
      lineTax: round2((lineSubtotal * TAX_RATE_PERCENT) / 100)
    };
  });

  const subTotal = round2(lines.reduce((sum, line) => sum + line.lineSubtotal, 0));
  const totalTax = round2(lines.reduce((sum, line) => sum + line.lineTax, 0));
  const total = round2(subTotal + totalTax);
  const totalItems = lines.reduce((sum, line) => sum + line.quantity, 0);
  const canCheckout = totalItems >= MIN_CHECKOUT_ITEMS;

  const handleCheckout = () => {
    if (!canCheckout) {
      showToast(`To checkout please add minimum ${MIN_CHECKOUT_ITEMS} items to the cart.`);
      return;
    }
    navigate('/checkout');
  };

  /* ---------- Empty bag ---------- */
  if (lines.length === 0) {
    return (
      <div className="bg-white min-h-screen font-poppins text-stone-900 flex flex-col items-center justify-center gap-[10px] px-4 text-center">
        <BagIcon size={48} className="text-stone-300" />
        <h1 className="text-[22px] font-bold text-stone-800">Your cart is empty</h1>
        <p className="text-xs text-stone-500 max-w-sm">
          Browse the wedding invitation collection and add your favourite cards to the cart.
        </p>
        <button
          type="button"
          onClick={() => navigate('/wedding-cards')}
          className="mt-[10px] px-[24px] py-[10px] rounded-md bg-[#F0A500] hover:bg-[#e59500] text-stone-900 font-bold text-[15px] shadow-md transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-poppins text-stone-900 pb-[48px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-[40px]">
        <h1 className="sr-only">Shopping Cart</h1>

        {/* Product / Qty / Unit Price / Tax / Price header */}
        <div className="grid grid-cols-12 gap-x-2 pb-[10px] border-b-2 border-stone-900 text-[12px] sm:text-[15px] font-bold">
          <span className="col-span-4">Product</span>
          <span className="col-span-2 text-right">Qty</span>
          <span className="col-span-2 text-right">Unit Price</span>
          <span className="col-span-2 text-right">Tax</span>
          <span className="col-span-2 text-right">Price</span>
        </div>

        {/* Cart lines */}
        {lines.map((line) => (
          <div
            key={line.id}
            className="grid grid-cols-12 gap-x-2 items-center py-[24px] border-b border-stone-400"
          >
            {/* Product: orange SKU / SN box */}
            <div className="col-span-4 pr-2">
              <div className="inline-block rounded-md bg-[#F0A500] px-3 py-3 sm:px-4 sm:py-4">
                <p className="text-[10px] sm:text-[13px] font-bold text-stone-900">
                  SKU: {line.sku || FALLBACK_SKU}
                </p>
                <p className="mt-[6px] text-[10px] sm:text-[13px] font-bold text-stone-900">
                  SN ({line.sn || FALLBACK_SN})
                </p>
              </div>
              <p className="mt-[6px] max-w-[220px] text-[11px] text-stone-500">
                {line.title || line.name}
              </p>
              <button
                type="button"
                onClick={() => removeFromCart(line.id)}
                className="mt-[6px] text-[11px] text-stone-500 underline hover:text-rose-600 transition-colors"
              >
                Remove
              </button>
            </div>

            {/* Quantity with quick step adjusters */}
            <div className="col-span-2 text-right">
              <span className="text-[13px] sm:text-[15px] font-semibold">{line.quantity}</span>
              <div className="mt-[6px] flex items-center justify-end gap-[6px]">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => updateCartQuantity(line.id, Math.max(1, line.quantity - 25))}
                  className="w-[20px] h-[20px] rounded border border-stone-300 text-[12px] leading-none text-stone-600 hover:bg-[#FFF2DF] transition-colors"
                >
                  -
                </button>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => updateCartQuantity(line.id, line.quantity + 25)}
                  className="w-[20px] h-[20px] rounded border border-stone-300 text-[12px] leading-none text-stone-600 hover:bg-[#FFF2DF] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <span className="col-span-2 text-right text-[12px] sm:text-[15px]">{money(line.unitPrice)}</span>
            <span className="col-span-2 text-right text-[12px] sm:text-[15px]">{`${TAX_RATE_PERCENT}%`}</span>
            <span className="col-span-2 text-right text-[12px] sm:text-[15px] font-semibold">{money(line.lineSubtotal)}</span>
          </div>
        ))}

        {/* Money summary */}
        <div className="mt-[24px] space-y-[10px]">
          <div className="grid grid-cols-12 gap-x-2">
            <span className="col-span-8 text-right text-[13px] sm:text-[15px] font-semibold">Sub Total:</span>
            <span className="col-span-4 text-right text-[13px] sm:text-[15px]">{money(subTotal)}</span>
          </div>
          <div className="grid grid-cols-12 gap-x-2">
            <span className="col-span-8 text-right text-[13px] sm:text-[15px] font-semibold">Total Tax:</span>
            <span className="col-span-4 text-right text-[13px] sm:text-[15px]">{money(totalTax)}</span>
          </div>
          <div className="grid grid-cols-12 gap-x-2">
            <span className="col-span-8 text-right text-[13px] sm:text-[15px] font-bold">Total:</span>
            <span className="col-span-4 text-right text-[13px] sm:text-[15px] font-bold">{money(total)}</span>
          </div>
        </div>

        {/* Minimum order warning */}
        {!canCheckout && (
          <p className="mt-[32px] text-center text-[13px] sm:text-[16px] font-bold uppercase tracking-wide text-[#E01E1E]">
            {`To checkout please add minimum ${MIN_CHECKOUT_ITEMS} items to the cart`}
          </p>
        )}

        {/* Actions */}
        <div className="mt-[32px] flex flex-wrap items-center justify-center gap-x-[24px] gap-y-[16px]">
          <button
            type="button"
            onClick={() => navigate('/wedding-cards')}
            className="px-[24px] py-[10px] rounded-md bg-[#F0A500] hover:bg-[#e59500] text-stone-900 font-bold text-[15px] shadow-md transition-colors cursor-pointer"
          >
            Continue Shopping
          </button>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={!canCheckout}
            aria-disabled={!canCheckout}
            title={canCheckout ? 'Proceed to checkout' : `Add minimum ${MIN_CHECKOUT_ITEMS} items to checkout`}
            className={`px-[24px] py-[10px] rounded-md font-bold text-[15px] shadow-md transition-colors ${
              canCheckout
                ? 'bg-[#FFAB0D] hover:bg-[#e59500] text-stone-900 cursor-pointer'
                : 'bg-[#A9A9A9] text-stone-900 cursor-not-allowed'
            }`}
          >
            Checkout
          </button>
        </div>

        {/* Item counter helper */}
        <p className="mt-[16px] text-center text-[11px] text-stone-500">
          {totalItems} item{totalItems === 1 ? '' : 's'} in the cart
          {canCheckout
            ? ' - minimum order quantity reached.'
            : ` - minimum ${MIN_CHECKOUT_ITEMS} items required.`}
        </p>
      </div>
    </div>
  );
};
