import React from 'react';
import { Link } from 'react-router-dom';
import { 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon
} from './Icons';
import { BrandLogo } from './HeaderLogo';

export const Footer = () => {
  return (
    <footer className="bg-[#FFE5B4] border-t border-[#fed387] text-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-3">
            <BrandLogo />
            
            <p className="text-stone-600 text-xs leading-relaxed max-w-xs font-serif italic pt-1">
              Largest Wedding Cards Collections in Chennai
            </p>

            <div className="pt-2">
              <p className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Follow us on :
              </p>
              <div className="flex items-center space-x-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  title="Instagram"
                >
                  <InstagramIcon size={15} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  title="Facebook"
                >
                  <FacebookIcon size={14} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  title="YouTube"
                >
                  <YoutubeIcon size={14} />
                </a>
                <a
                  href="https://wa.me/919176882120"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-stone-900 tracking-wide uppercase">
              Information
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <Link to="/about-us" className="hover:text-amber-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-amber-800 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-800 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="hover:text-amber-800 transition-colors">
                  How to order wedding invitation online?
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Access */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-stone-900 tracking-wide uppercase">
              Quick Access
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <Link to="/" className="hover:text-amber-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/wedding-cards" className="hover:text-amber-800 transition-colors">
                  Wedding Cards
                </Link>
              </li>
              <li>
                <Link to="/wedding-cards?cat=hindu" className="hover:text-amber-800 transition-colors">
                  Hindu Wedding Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3" id="contact">
            <h4 className="font-serif font-bold text-sm text-stone-900 tracking-wide uppercase">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-stone-700">
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="text-amber-800 flex-shrink-0" />
                <a href="tel:+919176882120" className="hover:text-amber-900 font-medium">
                  +91 9176882120
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={14} className="text-amber-800 flex-shrink-0" />
                <a href="mailto:wedknotcraftweddingcards.com" className="hover:text-amber-900 truncate">
                  wedknotcraftweddingcards.com
                </a>
              </div>
              <div className="pt-1 flex items-start gap-2 text-stone-600 text-[11px] leading-relaxed">
                <ClockIcon size={14} className="text-amber-800 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-800">Operating hours:</p>
                  <p>10.0 AM to 13.00 PM</p>
                  <p className="text-amber-900 font-medium">Monday - Sunday</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-4 border-t border-[#ead8a6] text-center text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Wed Knot craft India Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
