import React from 'react';
import { useStore } from '../context/StoreContext';

export const Toast = () => {
  const { notification } = useStore();

  if (!notification) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-bounce bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-stone-700 text-xs">
      <span>{notification}</span>
    </div>
  );
};
