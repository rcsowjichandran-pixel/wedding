import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CardModal } from './components/CardModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { UserModal } from './components/UserModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { WeddingCardsPage } from './pages/WeddingCardsPage';
import { WeddingInvitationPage } from './pages/WeddingInvitationPage';
import { SpecialOccasionsPage } from './pages/SpecialOccasionsPage';
import { ThemeCardsPage } from './pages/ThemeCardsPage';
import { ScrollInvitationPage } from './pages/ScrollInvitationPage';
import { DigitalInvitationPage } from './pages/DigitalInvitationPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WeddingDetailsPage } from './pages/WeddingDetailsPage';
import { PaymentPage } from './pages/PaymentPage';
import { OrderConfirmedPage } from './pages/OrderConfirmedPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { FaqPage } from './pages/FaqPage';
import { HowToOrderPage } from './pages/HowToOrderPage';

// Helper component to scroll to top whenever URL path changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/wedding-cards" element={<WeddingCardsPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/wedding-details/:productId" element={<WeddingDetailsPage />} />
              <Route path="/checkout" element={<PaymentPage />} />
              <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
              <Route path="/wedding-invitation" element={<WeddingInvitationPage />} />
              <Route path="/special-occasions" element={<SpecialOccasionsPage />} />
              <Route path="/themes" element={<ThemeCardsPage />} />
              <Route path="/scroll-invitations" element={<ScrollInvitationPage />} />
              <Route path="/digital-invitations" element={<DigitalInvitationPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/how-to-order" element={<HowToOrderPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Modals & Drawers */}
          <CardModal />
          <CartDrawer />
          <WishlistDrawer />
          <UserModal />
          <Toast />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
