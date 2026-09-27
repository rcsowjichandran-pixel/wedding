import React from 'react';
import { Link } from 'react-router-dom';
import celebratingImg from '../assets/newstyle-wedding.avif';
import ourStoryImg from '../assets/interfaith-trad.png';
import ourPromiseImg from '../assets/palace.png.png';

export const AboutUsPage = () => {
  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 font-poppins pb-16">
      <div className="pt-10 pb-6 text-center px-6">
        <h1 className="text-[32px] font-bold uppercase tracking-wider text-stone-900">
          ABOUT US
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-14">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[22px] sm:text-[24px] font-bold text-stone-900 leading-snug mb-4">
              Celebrating Love, One Invitation at a Time
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-700">
              At Wed Knot Craft, we believe that every love story is unique and deserves to be celebrated in a way that reflects its individuality.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={celebratingImg}
              alt="Wedding invitation celebrating a couple"
              className="w-full max-w-xs aspect-4/5 object-cover rounded-sm shadow-md"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <img
              src={ourStoryImg}
              alt="Our story"
              className="w-full max-w-xs aspect-square object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[22px] sm:text-[24px] font-bold uppercase tracking-wide text-stone-900 mb-4">
              OUR STORY
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-700">
              What started as a passion for design has blossomed into a full-fledged business dedicated to bringing couples&apos; visions to life. Our founder envisioned a platform where couples could find invitations that resonated with their personal style and cultural heritage.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[22px] sm:text-[24px] font-bold uppercase tracking-wide text-stone-900 mb-4">
              OUR PROMISE
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-700 mb-3">
              We are committed to providing:
            </p>
            <ul className="text-[15px] leading-relaxed text-stone-700 space-y-2 list-disc pl-5">
              <li>
                <span className="font-semibold">Custom Designs:</span> Tailored invitations that reflect your unique love story.
              </li>
              <li>
                <span className="font-semibold">Quality Craftsmanship:</span> Invitations crafted with attention to detail and high-quality materials.
              </li>
              <li>
                <span className="font-semibold">Customer Satisfaction:</span> A seamless experience from selection to delivery, ensuring your complete satisfaction.
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={ourPromiseImg}
              alt="Our promise"
              className="w-full max-w-xs aspect-square object-cover rounded-sm shadow-md"
            />
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto pt-2">
          <h2 className="text-[22px] sm:text-[24px] font-bold text-stone-900 mb-4">
            JOIN Us in Celebrating Your Special Day
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-700">
            Explore our diverse range of designs and let us help you set the tone for your wedding celebration. At{' '}
            <span className="font-semibold">Wed Knot Craft</span>, your love story is our inspiration.
          </p>
          <Link
            to="/wedding-cards"
            className="inline-block mt-6 px-8 py-2 rounded-md bg-[#FFAB0D] hover:bg-[#e59500] text-stone-950 font-semibold text-sm shadow-md transition-colors"
          >
            Browse Wedding Cards
          </Link>
        </section>
      </div>
    </div>
  );
};
