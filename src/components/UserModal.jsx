import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { CloseIcon, UserIcon } from './Icons';
import { BrandLogo } from './HeaderLogo';

export const UserModal = () => {
  const { isUserModalOpen, setIsUserModalOpen, showToast } = useStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [weddingDate, setWeddingDate] = useState('');

  if (!isUserModalOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phoneNumber) return;
    showToast(`Welcome ${name || 'Valued Guest'}! Logged in successfully.`);
    setIsUserModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xs animate-fadeIn font-sans">
      <div 
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 p-6 relative text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsUserModalOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <BrandLogo />
          <h2 className="font-serif font-bold text-xl text-stone-900 mt-3">
            Customer Login
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xs leading-relaxed">
            Login to track your sample delivery, review digital drafts, and unlock bulk discounts.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-5 space-y-3">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Anand & Priya"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Mobile Number / WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Wedding / Event Date
            </label>
            <input
              type="date"
              value={weddingDate}
              onChange={(e) => setWeddingDate(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-3 mt-2 bg-[#e69500] hover:bg-[#d48800] text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <UserIcon size={18} />
            <span>Login</span>
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-stone-100 text-center text-[11px] text-stone-500">
          <span>Need immediate assistance? Call Chennai studio at </span>
          <a href="tel:+919176882120" className="font-bold text-amber-900 hover:underline">
            +91 9176882120
          </a>
        </div>
      </div>
    </div>
  );
};
