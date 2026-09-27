// Shared helpers for the Hindu Wedding Cards purchase flow
// (product -> wedding details -> payment -> order confirmed)

export const COUPON_DISCOUNT = 5; // ₹5 flat off whenever a coupon such as MAR0057 is attached to a card
export const TAX_RATE_PERCENT = 18; // GST is already included in the per-unit printed price

export const round2 = (value) => Math.round((Number(value) || 0) * 100) / 100;

// Picks the coupon code (e.g. MAR0057) attached to any selected card
export const resolveCoupon = (items = []) => {
  const withCoupon = (items || []).find((item) => item && item.coupon);
  return withCoupon ? withCoupon.coupon : null;
};

// Single source of truth for every money figure shown in cart / payment / order screens
export const computeOrderTotals = (items = [], couponCode = null) => {
  const subtotal = round2(
    (items || []).reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
  );
  const shipping = 0;
  const discount = couponCode ? COUPON_DISCOUNT : 0;

  return {
    subtotal,
    shipping,
    discount,
    coupon: couponCode,
    taxRate: `${TAX_RATE_PERCENT}%`,
    total: round2(Math.max(subtotal - discount, 0))
  };
};

export const generateOrderId = () =>
  String(Math.floor(100000000 + Math.random() * 899999999));

const ordinal = (day) => {
  if (day % 100 >= 11 && day % 100 <= 13) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

// 16th Apr
export const formatOrderDate = (date = new Date()) =>
  `${ordinal(date.getDate())} ${date.toLocaleString('en-US', { month: 'short' })}`;

// 5.35pm
export const formatOrderTime = (date = new Date()) => {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const suffix = hours >= 12 ? 'pm' : 'am';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}.${minutes}${suffix}`;
};

// 2027-04-16 -> 16th Apr 2027
export const formatWeddingDate = (value) => {
  if (!value) return '';
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return `${ordinal(parsed.getDate())} ${parsed.toLocaleString('en-US', { month: 'short' })} ${parsed.getFullYear()}`;
};

const pad = (num) => String(num).padStart(2, '0');

const toIcsStamp = (date) =>
  `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;

// Builds a real Date from the entered wedding date + time (defaults to 10:00 AM)
const toEventDate = (dateValue, timeValue, fallbackHour = 10) => {
  const base = dateValue ? new Date(`${dateValue}T00:00:00`) : new Date();
  if (Number.isNaN(base.getTime())) return null;
  let hours = fallbackHour;
  let minutes = 0;
  if (timeValue && /^\d{1,2}:\d{2}/.test(timeValue)) {
    const [h, m] = timeValue.split(':');
    hours = Number(h);
    minutes = Number(m);
  }
  base.setHours(hours, minutes, 0, 0);
  return base;
};

// Builds a downloadable .ics invite for the "Add to calander" button
export const buildCalendarFile = ({ groom, bride, date, time, location, dressCode }) => {
  const startDate = toEventDate(date, time, 10);
  if (!startDate) return null;
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hour ceremony

  const title = `${groom || 'Groom'} & ${bride || 'Bride'} Wedding`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wed Knot Craft//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@wedknotcraft`,
    `DTSTAMP:${toIcsStamp(new Date())}`,
    `DTSTART:${toIcsStamp(startDate)}`,
    `DTEND:${toIcsStamp(endDate)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location || ''}`,
    `DESCRIPTION:${`Reception to follow. Dress code: ${dressCode || 'Any Dress Code'}`}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ];
  return lines.join('\r\n');
};
