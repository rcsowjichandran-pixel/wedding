import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  SearchIcon, 
  UserIcon, 
  HeartIcon, 
  ShoppingCartIcon, 
  MenuIcon, 
  CloseIcon,
  ChevronDownIcon
} from './Icons';
import { BrandLogo } from './HeaderLogo';
import { useStore } from '../context/StoreContext';
import { 
  SPECIAL_OCCASIONS, 
  THEME_CARDS, 
  SCROLL_INVITATIONS, 
  DIGITAL_INVITATIONS 
} from '../data/cardsData';

/*
 * Navigation rule (client requirement):
 * "Home" and "Wedding Invitation" are the only dynamic (routable) menu items.
 * Every other label is STATIC - clicking it never navigates anywhere, it only
 * reveals the option list below the label (informational, no route attached).
 */
const STATIC_NAV_ITEMS = [
  {
    id: 'occasions',
    label: 'Special occasions',
    heading: 'Special Occasions Invitations',
    align: 'center',
    width: 'w-80',
    options: SPECIAL_OCCASIONS,
    meta: (option) => option.priceRange
  },
  {
    id: 'themes',
    label: 'Theme Cards',
    heading: 'Thematic Invitations',
    align: 'center',
    width: 'w-72',
    options: THEME_CARDS,
    meta: (option) => option.priceRange
  },
  {
    id: 'scrolls',
    label: 'Scroll Invitation',
    heading: 'Royal Farman Scrolls',
    align: 'center',
    width: 'w-72',
    options: SCROLL_INVITATIONS,
    meta: (option) => option.priceRange
  },
  {
    id: 'digital',
    label: 'Digital Invitation',
    heading: 'E-Cards & Video Invites',
    align: 'right',
    width: 'w-64',
    options: DIGITAL_INVITATIONS,
    meta: () => '24h',
    pill: true
  }
];

export const Navbar = () => {
  const navigate = useNavigate();
  const { 
    wishlist, 
    cartDistinctCount, 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    setIsWishlistOpen,
    setActiveModalItem
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // Which static menu is expanded (desktop) / which accordion is expanded (mobile)
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const navRef = useRef(null);

  // Click-to-open only: the static labels toggle their option list and never navigate
  const toggleMenu = (id) => setOpenMenu((prev) => (prev === id ? null : id));

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/wedding-cards?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleResultClick = (item) => {
    setIsSearchFocused(false);
    setSearchQuery('');
    if (item.link) {
      navigate(item.link);
    } else {
      setActiveModalItem(item);
    }
  };

  return (
    <header className="bg-[#E6E6FA]  ">
      {/* Top Header Bar matching Image 1: Logo on Left, Search + Icons on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo (Wreath + 'Wed Knot Craft' diagonal text) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>

            <Link to="/" className="cursor-pointer">
              <BrandLogo size="lg" />
            </Link>
          </div>

          {/* Right: Search Box + User + Wishlist + Cart with Black Badge (Exact Image 1) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Search Box - Rounded Rectangle with border-stone-800 and search icon on right */}
            <div className="relative">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                  className="w-44 sm:w-60 md:w-72 pl-3.5 pr-9 py-1.5 text-xs sm:text-sm bg-transparent border border-stone-900 rounded-[8px] focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900 placeholder-stone-600 transition-all font-sans"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-2.5 text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <SearchIcon size={18} />
                </button>
              </form>

              {/* Live Search Suggestions Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-stone-200 rounded-xl shadow-xl z-50 overflow-hidden text-left">
                  <div className="p-2.5 bg-stone-50 border-b border-stone-100 text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Quick Results ({searchResults.length})
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-stone-100">
                    {searchResults.map((item, idx) => (
                      <div
                        key={idx}
                        onMouseDown={() => handleResultClick(item)}
                        className="p-2.5 hover:bg-amber-50/70 cursor-pointer flex items-center gap-3 transition-colors"
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt=""
                            className="w-10 h-10 object-cover rounded-md border border-stone-200"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-stone-800 truncate">
                            {item.title || item.name}
                          </p>
                          <p className="text-[10px] text-amber-800">
                            {item.type || item.category || 'Invitation'} {item.price ? `• ₹${item.price}` : ''}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Account Icon - opens the Login / Sign Up page */}
            <button
              onClick={() => navigate('/login')}
              className="text-stone-900 hover:text-amber-800 transition-colors p-1"
              title="User Account"
              aria-label="User Account"
            >
              <UserIcon size={24} />
            </button>

            {/* Wishlist Heart Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="text-stone-900 hover:text-rose-600 transition-colors p-1"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <HeartIcon size={24} fill={wishlist.length > 0 ? "#e11d48" : "none"} className={wishlist.length > 0 ? "text-rose-600" : ""} />
            </button>

            {/* Cart Icon with Black Circle Badge (Exact Image 1) - opens the Cart page */}
            <button
              onClick={() => navigate('/cart')}
              className="relative text-stone-900 hover:text-amber-800 transition-colors p-1"
              title="Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingCartIcon size={24} />
              {/* Black circle badge with white number */}
              <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartDistinctCount > 0 ? cartDistinctCount : 1}
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* Navigation Bar (Exact as Image 1 and Image 2) */}
      <nav ref={navRef} className="bg-[#E6E6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="hidden lg:flex items-center justify-center space-x-8 text-[13px] font-bold text-stone-800 py-1.5">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                onClick={() => setOpenMenu(null)}
                className={({ isActive }) =>
                  `transition-colors hover:text-amber-800 ${
                    isActive ? 'font-bold text-stone-950' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Wedding Invitation */}
            <li>
              <NavLink
                to="/wedding-cards"
                onClick={() => setOpenMenu(null)}
                className={({ isActive }) =>
                  `transition-colors hover:text-amber-800 ${
                    isActive ? 'font-bold text-stone-950' : ''
                  }`
                }
              >
                Wedding Invitation
              </NavLink>
            </li>

            {/* Static labels - clicking only reveals the option list, it never navigates */}
            {STATIC_NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu(item.id)}
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.id}
                  className={`font-bold text-stone-800 transition-colors hover:text-amber-800 cursor-pointer ${
                    openMenu === item.id ? 'text-amber-900' : ''
                  }`}
                >
                  {item.label}
                </button>

                {openMenu === item.id && (
                  <div
                    className={`absolute top-full ${
                      item.align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'
                    } ${item.width} bg-white border border-stone-200 rounded-xl shadow-2xl p-3 space-y-1 z-50 text-left font-normal`}
                  >
                    <div className="pb-1.5 border-b border-stone-100 text-[11px] font-bold uppercase tracking-wider text-amber-900">
                      {item.heading}
                    </div>
                    {item.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-2 text-xs text-stone-800 font-medium"
                      >
                        <span>{option.title}</span>
                        {item.pill ? (
                          <span className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full font-normal">
                            {item.meta(option)}
                          </span>
                        ) : (
                          <span className="text-[10px] text-stone-400 font-normal">
                            {item.meta(option)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-stone-800 hover:text-amber-800"
            >
              Home
            </Link>
            <Link
              to="/wedding-cards"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-semibold text-amber-900"
            >
              Wedding Invitation
            </Link>
            {/* Static labels - tapping reveals the option list inside the drawer */}
            {STATIC_NAV_ITEMS.map((item) => (
              <div key={`mobile-${item.id}`}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileMenu((prev) => (prev === item.id ? null : item.id))
                  }
                  aria-expanded={openMobileMenu === item.id}
                  className="w-full flex items-center justify-between py-1.5 text-sm font-semibold text-amber-900 cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon
                    size={16}
                    className={openMobileMenu === item.id ? 'rotate-180 transition-transform' : 'transition-transform'}
                  />
                </button>

                {openMobileMenu === item.id && (
                  <div className="ml-1 pl-3 pb-1 border-l-2 border-[#FFE5B4] space-y-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                      {item.heading}
                    </p>
                    {item.options.map((option) => (
                      <p key={option.id} className="text-[12px] font-medium text-stone-700">
                        {option.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
