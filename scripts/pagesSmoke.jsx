import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from '../src/context/StoreContext';
import { CartPage } from '../src/pages/CartPage';
import { LoginPage } from '../src/pages/LoginPage';
import { ProductDetailPage } from '../src/pages/ProductDetailPage';
import { WeddingDetailsPage } from '../src/pages/WeddingDetailsPage';
import { PaymentPage } from '../src/pages/PaymentPage';
import { OrderConfirmedPage } from '../src/pages/OrderConfirmedPage';

const seedOrder = {
  id: '356958190',
  createdAt: Date.now(),
  dateLabel: '16th Apr',
  timeLabel: '5.35pm',
  items: [
    {
      id: 'hindu-blue',
      title: 'The blue Wedding Cards',
      price: 72.25,
      quantity: 2,
      image: 'x.png',
      sku: 'KSN0054',
      sn: 'SN 54',
      compliment: 'Hold Bag',
      coupon: 'MAR0057'
    }
  ],
  subtotal: 144.5,
  shipping: 0,
  discount: 5,
  coupon: 'MAR0057',
  taxRate: '18%',
  total: 139.5,
  paymentMethod: 'UPI - Paytm',
  couple: { groom: 'Arun', bride: 'Divya', date: '2027-04-16', time: '10:30', location: 'Chennai' },
  customer: { name: 'Arun', email: 'jhon057@gmail.com', phone: '+91 98765 43210', ordersCount: 1 },
  shippingAddress: { name: 'Arun', line1: '123 Elm street', line2: 'Anytown, ABC 12345', line3: 'Anywhere.' },
  billingAddress: 'Same as Shipping address'
};

globalThis.localStorage = {
  store: {
    wedknot_last_order: JSON.stringify(seedOrder),
    wedknot_cart: JSON.stringify([
      {
        id: 'hindu-blue',
        title: 'The blue Wedding Cards',
        price: 72.25,
        quantity: 2,
        image: 'x.png',
        sku: 'KSN0054',
        sn: 'SN 54',
        compliment: 'Hold Bag',
        coupon: 'MAR0057'
      }
    ])
  },
  getItem(key) {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  removeItem(key) {
    delete this.store[key];
  }
};

const render = (path) =>
  renderToString(
    <StoreProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wedding-details/:productId" element={<WeddingDetailsPage />} />
          <Route path="/checkout" element={<PaymentPage />} />
          <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
        </Routes>
      </MemoryRouter>
    </StoreProvider>
  );

const checks = [
  ['/cart', ['Product', 'Qty', 'Unit Price', 'Tax', 'Price', 'KSN0054', 'SN 54', 'Rs.72.25', 'Rs.144.50', '18%', 'Sub Total:', 'Total Tax:', 'Rs.26.01', 'Total:', 'Rs.170.51', 'To checkout please add minimum 100 items to the cart', 'Continue Shopping', 'Checkout', 'minimum 100 items required']],
  ['/login', ['Login', 'Sign Up', 'Login to my Account', 'Email', 'Password', 'Enter Email', 'Enter Password', 'Login &amp; Continue', 'Forgot Password']],
  ['/product/hindu-blue', ['KSN0054', 'Buy Now', 'Add to Cart', 'The Wedding Details', 'Related Cards', 'Variants', '27.5 cms']],
  ['/wedding-details/hindu-blue', ['Wedding Details', 'Together with their families', 'View map', 'Add to calander', 'RSVP Now', 'Groom Name', 'Buy Now']],
  ['/checkout', ['Pay by UPI', 'Paytm', 'Gpay', 'Phonepe', 'Cred', 'Cash on Delivery', 'Order Summary', 'MAR0057', 'Coupon Applied', 'Added Compliment', 'Hold Bag', '144.50', '139.50', 'Pay Rs.']],
  ['/order-confirmed', ['356958190', 'Your Order', 'Order Summary', 'Shipping Address', 'Billing Address', 'KSN0054', 'SN 54', 'Total', 'Continue Shopping']]
];

let failures = 0;
checks.forEach(([path, needles]) => {
  let html = '';
  try {
    html = render(path);
  } catch (error) {
    failures += 1;
    console.log(`FAIL render ${path}: ${error.message}`);
    return;
  }
  needles.forEach((needle) => {
    if (!html.includes(needle)) {
      failures += 1;
      console.log(`FAIL ${path} -> missing "${needle}"`);
    }
  });
  console.log(`OK ${path} (${html.length} chars)`);
});

console.log(failures === 0 ? 'ALL SMOKE CHECKS PASSED' : `${failures} CHECK(S) FAILED`);
