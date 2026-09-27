import React from 'react';
import wreathImg from '../assets/download__23_-removebg-preview.png';

export const BrandLogo = ({ className = "", size = "md" }) => {
  const big = size === "lg";

  const wreathClasses = big
    ? "w-28 h-28 sm:w-32 sm:h-32"
    : "w-20 h-20 sm:w-24 sm:h-24";
  // Even font sizes across all sizes — "Cherish By" (14cqw inside the wreath)
  // and "Wed Knot Craft" both render at the same size (14% of wreath width).
  const wordClasses = big ? "text-[22px] sm:text-[24px]" : "text-[13px] sm:text-[15px]";

  return (
    <div className={`flex items-center ${big ? "gap-5 sm:gap-6" : "gap-4 sm:gap-5"} select-none ${className}`}>
      {/* Exact Wreath Image with overlay Cherish By + Wedding Cards */}
      {/* cqw font sizes keep the text fitted inside the wreath at every size */}
      <div
        className={`relative ${wreathClasses} flex-shrink-0`}
        style={{ containerType: 'inline-size' }}
      >
        <img 
          src={wreathImg} 
          alt="Cherish By Wedding Cards" 
          className="w-full h-full object-contain drop-shadow-xs"
        />

        {/* Center Text: Cherish By in elegant cursive */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-1 pointer-events-none">
          <span 
            className="text-stone-900 leading-none font-normal"
            style={{ fontFamily: "'Alex Brush', cursive", fontSize: '14cqw', lineHeight: 1 }}
          >
            Cherish
          </span>
          <span 
            className="text-stone-900 leading-none font-normal"
            style={{ fontFamily: "'Alex Brush', cursive", fontSize: '14cqw', lineHeight: 1, marginTop: '0.3cqw' }}
          >
            By
          </span>
        </div>

        {/* Ribbon Text: Wedding Cards placed on the cream ribbon */}
        <div className="absolute left-0 right-0 top-[78.5%] -translate-y-1/2 flex justify-center pointer-events-none">
          <span 
            className="font-bold text-[#245235] uppercase"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '4.5cqw', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
          >
            Wedding Cards
          </span>
        </div>
      </div>

      {/* Stepped / Diagonal Script Text: Wed Knot Craft (Exact 1:1 Match to Image 1) */}
      <div className="flex flex-col items-start justify-center self-center leading-none text-stone-950 select-none py-1">
        <span 
          className={`${wordClasses} font-normal text-stone-900 tracking-wide`}
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Wed
        </span>
        <span 
          className={`${wordClasses} font-normal text-stone-900 tracking-wide ${big ? "pl-6 sm:pl-8 -mt-1 sm:-mt-1" : "pl-3 sm:pl-3.5 -mt-1 sm:-mt-1"}`}
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Knot
        </span>
        <span 
          className={`${wordClasses} font-normal text-stone-900 tracking-wide ${big ? "pl-12 sm:pl-16 -mt-1 sm:-mt-1" : "pl-3 sm:pl-3.5 -mt-1 sm:-mt-1"}`}
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Craft
        </span>
      </div>
    </div>
  );
};
