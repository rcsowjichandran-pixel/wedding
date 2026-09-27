import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  SIMPLE_AFFORDABLE_CARDS, 
  WEDDING_CARDS_PRODUCTS, 
  WEDDING_CARD_CATEGORIES,
  SPECIAL_OCCASIONS,
  THEME_CARDS,
  SCROLL_INVITATIONS,
  DIGITAL_INVITATIONS
} from '../data/cardsData';
import {
  computeOrderTotals,
  resolveCoupon,
  generateOrderId,
  formatOrderDate,
  formatOrderTime
} from '../utils/orderUtils';

const StoreContext = createContext();

const readStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('wedknot_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('wedknot_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'aff-1',
          title: 'Red Divine Card with Bride And Groom Names',
          price: 10.25,
          quantity: 150,
          image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
          paperType: '280 GSM Gloss Metallic Board'
        }
      ];
    } catch {
      return [];
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  /* ---- Hindu wedding card purchase flow state ---- */
  // Buy Now draft: { item, quantity } - the single card being purchased
  const [buyNow, setBuyNow] = useState(null);
  const [checkoutQty, setCheckoutQty] = useState(2);
  // Entered wedding invitation details mapped by product id
  const [weddingDetails, setWeddingDetails] = useState({});
  // Placed orders history + most recent confirmed order
  const [orders, setOrders] = useState(() => readStorage('wedknot_orders', []));
  const [lastOrder, setLastOrder] = useState(() => readStorage('wedknot_last_order', null));

  useEffect(() => {
    try {
      localStorage.setItem('wedknot_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('wedknot_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('wedknot_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('wedknot_last_order', JSON.stringify(lastOrder));
    } catch (e) {
      console.error(e);
    }
  }, [lastOrder]);

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((x) => x.id === item.id);
      if (exists) {
        showToast(`Removed "${item.title || item.name}" from Wishlist`);
        return prev.filter((x) => x.id !== item.id);
      } else {
        showToast(`Added "${item.title || item.name}" to Wishlist ❤️`);
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id) => wishlist.some((x) => x.id === id);

  // options.ifAbsent -> only add the card when it is not already in the bag
  const addToCart = (item, quantity = 100, options = {}) => {
    const opts = options && typeof options === 'object' ? options : {};
    setCart((prev) => {
      const existingIndex = prev.findIndex((x) => x.id === item.id);
      if (existingIndex > -1) {
        if (opts.ifAbsent) return prev;
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (!opts.silent) {
          showToast(`Updated quantity for "${item.title || item.name}" in bag!`);
        }
        return updated;
      } else {
        if (!opts.silent) {
          showToast(`Added "${item.title || item.name}" to your bag! 🛍️`);
        }
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const updateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from bag');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartDistinctCount = cart.length;

  /* ------------------------------------------------------------------ *
   * Hindu wedding card purchase flow:
   * grid -> product options -> wedding details -> payment -> order
   * ------------------------------------------------------------------ */

  const saveWeddingDetails = (productId, details) => {
    if (!productId) return;
    setWeddingDetails((prev) => ({ ...prev, [productId]: details }));
  };

  const getWeddingDetails = (productId) => weddingDetails[productId] || null;

  // Starts a direct purchase for a single selected card (Buy Now)
  const startBuyNow = (item, quantity = 2, details = null) => {
    if (!item) return;
    if (details) saveWeddingDetails(item.id, details);
    setCheckoutQty(quantity);
    setBuyNow({ item, quantity });
  };

  const clearBuyNow = () => setBuyNow(null);

  // Payment screen always works from one source: the Buy Now draft or the shopping bag
  const checkoutSource = buyNow ? 'buy-now' : 'cart';
  const checkoutItems = useMemo(() => {
    if (buyNow) return [{ ...buyNow.item, quantity: buyNow.quantity }];
    return cart;
  }, [buyNow, cart]);

  const checkoutTotals = useMemo(
    () => computeOrderTotals(checkoutItems, resolveCoupon(checkoutItems)),
    [checkoutItems]
  );

  // Turns the current checkout selection into a confirmed order
  const placeOrder = ({ paymentMethod = 'UPI - Paytm' } = {}) => {
    const items = checkoutItems.map((item) => ({
      id: item.id,
      title: item.title || item.name,
      price: item.price || 0,
      quantity: item.quantity || 1,
      image: item.image,
      sku: item.sku || 'KSN0054',
      sn: item.sn || 'SN 54',
      compliment: item.compliment || 'Hold Bag',
      coupon: item.coupon || null
    }));

    const totals = computeOrderTotals(items, resolveCoupon(items));
    const savedDetails = weddingDetails[items[0]?.id] || null;
    const now = new Date();

    const order = {
      id: generateOrderId(),
      createdAt: now.getTime(),
      dateLabel: formatOrderDate(now),
      timeLabel: formatOrderTime(now),
      items,
      ...totals,
      paymentMethod,
      couple: savedDetails
        ? {
            groom: savedDetails.groomName || '',
            bride: savedDetails.brideName || '',
            date: savedDetails.weddingDate || '',
            time: savedDetails.weddingTime || '',
            location: savedDetails.location || ''
          }
        : null,
      customer: {
        name: savedDetails?.groomName || 'Jhon',
        email: 'jhon057@gmail.com',
        phone: '+91 98765 43210',
        ordersCount: orders.length + 1
      },
      shippingAddress: {
        name: savedDetails?.groomName || 'Jhon',
        line1: '123 Elm street',
        line2: 'Anytown, ABC 12345',
        line3: 'Anywhere.'
      },
      billingAddress: 'Same as Shipping address'
    };

    setOrders((prev) => [order, ...prev]);
    setLastOrder(order);
    if (!buyNow) setCart([]);
    setBuyNow(null);
    return order;
  };

  // Trash action on the order page - drops a line item and recalculates the money rows
  const removeOrderItem = (orderId, itemId, keepCoupon = true) => {
    const trim = (order) => {
      const items = order.items.filter((item) => item.id !== itemId);
      const totals = computeOrderTotals(items, keepCoupon ? resolveCoupon(items) : null);
      return { ...order, items, ...totals };
    };

    setOrders((prev) => prev.map((order) => (order.id === orderId ? trim(order) : order)));
    setLastOrder((prev) => (prev && prev.id === orderId ? trim(prev) : prev));
  };

  // Search indexing across all datasets
  const allSearchableItems = [
    ...SIMPLE_AFFORDABLE_CARDS.map(x => ({ ...x, type: 'Affordable Wedding Card', link: '/wedding-cards' })),
    ...WEDDING_CARDS_PRODUCTS.map(x => ({ ...x, type: 'Wedding Collection', link: '/wedding-cards' })),
    ...WEDDING_CARD_CATEGORIES.map(x => ({
      ...x,
      type: 'Wedding Category',
      link: x.id === 'hindu' ? `/wedding-cards?cat=${x.id}` : '/wedding-cards'
    })),
    ...SPECIAL_OCCASIONS.map(x => ({ ...x, type: 'Special Occasion', link: `/special-occasions?cat=${x.id}` })),
    ...THEME_CARDS.map(x => ({ ...x, type: 'Theme Card', link: `/themes?cat=${x.id}` })),
    ...SCROLL_INVITATIONS.map(x => ({ ...x, type: 'Scroll Invitation', link: `/scroll-invitations?cat=${x.id}` })),
    ...DIGITAL_INVITATIONS.map(x => ({ ...x, type: 'Digital Invitation', link: `/digital-invitations?cat=${x.id}` }))
  ];

  const searchResults = searchQuery.trim() === '' ? [] : allSearchableItems.filter((item) => {
    const q = searchQuery.toLowerCase();
    const titleMatch = (item.title || item.name || '').toLowerCase().includes(q);
    const descMatch = (item.desc || item.tagline || item.category || '').toLowerCase().includes(q);
    return titleMatch || descMatch;
  }).slice(0, 8);

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        cartTotal,
        cartItemCount,
        cartDistinctCount,
        searchQuery,
        setSearchQuery,
        searchResults,
        activeModalItem,
        setActiveModalItem,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isUserModalOpen,
        setIsUserModalOpen,
        notification,
        showToast,
        // Hindu wedding card purchase flow
        buyNow,
        checkoutQty,
        setCheckoutQty,
        startBuyNow,
        clearBuyNow,
        checkoutItems,
        checkoutSource,
        checkoutTotals,
        weddingDetails,
        saveWeddingDetails,
        getWeddingDetails,
        orders,
        lastOrder,
        placeOrder,
        removeOrderItem
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
