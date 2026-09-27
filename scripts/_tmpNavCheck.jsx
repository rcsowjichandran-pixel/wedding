import React from 'react';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from '../src/context/StoreContext';
import { Navbar } from '../src/components/Navbar';
import {
  SPECIAL_OCCASIONS,
  THEME_CARDS,
  SCROLL_INVITATIONS,
  DIGITAL_INVITATIONS
} from '../src/data/cardsData';

globalThis.localStorage = {
  store: {},
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
  renderToStaticMarkup(
    <StoreProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="*" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </StoreProvider>
  );

fs.writeFileSync('ssr-tmp/nav.html', render('/'));
fs.writeFileSync(
  'ssr-tmp/options.txt',
  [
    ...SPECIAL_OCCASIONS.map((o) => `Special occasions  | ${o.title} | ${o.priceRange}`),
    ...THEME_CARDS.map((o) => `Theme Cards        | ${o.title} | ${o.priceRange}`),
    ...SCROLL_INVITATIONS.map((o) => `Scroll Invitation  | ${o.title} | ${o.priceRange}`),
    ...DIGITAL_INVITATIONS.map((o) => `Digital Invitation | ${o.title} | 24h`)
  ].join('\n')
);
console.log('dump written');
