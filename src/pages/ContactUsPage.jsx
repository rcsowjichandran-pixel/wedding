import React from 'react';
import { PhoneIcon, SearchIcon } from '../components/Icons';

export const ContactUsPage = () => {
  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 font-poppins pb-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-10">
        <h1 className="text-[28px] sm:text-[32px] font-bold text-center text-stone-900 mb-5">
          Contact Us
        </h1>

        <p className="text-[15px] leading-relaxed text-stone-700 text-center max-w-3xl mx-auto mb-10">
          We&apos;d love to hear from you! Whether you have a question, need help customizing your invites, or just want to chat about your dream wedding stationery — we&apos;re here for you.
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-stone-800">
          <section>
            <div className="flex items-center gap-2 font-bold text-[#2563eb] mb-2">
              <PhoneIcon size={18} className="text-[#2563eb]" />
              <span>Support</span>
            </div>
            <p>India (toll free):</p>
            <p>999-264-9444</p>
            <p>Only Call - No WhatsApp Number</p>
            <a
              href="mailto:sales@wedknotcraftinvitationcards.com"
              className="text-[#2563eb] underline underline-offset-2"
            >
              sales@wedknotcraftinvitationcards.com
            </a>
          </section>

          <section>
            <div className="flex items-center gap-2 font-bold text-stone-900 mb-2">
              <SearchIcon size={18} className="text-stone-800" />
              <span>Proofing Department</span>
            </div>
            <p>Indian Standard Time (IST)</p>
            <p>Mobile (9.00am to 9.00pm IST) Monday to Saturday</p>
            <p className="font-bold mt-3">HR Team</p>
            <p>
              <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
            </p>
            <a
              href="mailto:hrteam@wedknotcraftinvitationcards.com"
              className="text-[#2563eb] underline underline-offset-2"
            >
              hrteam@wedknotcraftinvitationcards.com
            </a>
            <p className="font-bold mt-3">Customer Support Team</p>
            <p>
              <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
            </p>
            <a
              href="mailto:customersupport@wedknotcraftinvitationcards.com"
              className="text-[#2563eb] underline underline-offset-2"
            >
              customersupport@wedknotcraftinvitationcards.com
            </a>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-stone-900 mb-3">Contact Us</h2>
            <p>
              Whether you&apos;re looking for inquires, would like to ask before ordering, or just want to let us know how we did.
            </p>
          </section>

          <section className="text-center space-y-4 pt-2">
            <h2 className="text-[20px] sm:text-[22px] font-bold text-stone-900">
              An online Invitation Store with Worldwide Delivery
            </h2>
            <p>
              Weddings are always special but the fact about Wedknotcraft wedding Cards is that they are bespoke and exquisite in design that wins the hearts of millions across the world.
            </p>
            <p>
              The team behind us is extremely talented and has more than 50 years of experience with them to translate your dream wedding card into reality.
            </p>
            <p>
              If you want your wedding card to be truly rare and exceptional then look no further. The team here is fully able to weave dreams into reality.
            </p>
            <p>
              No matter what kind of wedding you have planned,{' '}
              <a
                href="https://wedknotcraft.in"
                target="_blank"
                rel="noreferrer"
                className="text-[#2563eb] underline underline-offset-2"
              >
                wedknotcraft.in
              </a>{' '}
              is well known to design various wedding invitations like Hindu Wedding Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interfaith Wedding Cards and so on.
            </p>
            <p className="font-medium pt-2">
              If you have any query related to invitation designs or our cards, please feel free to contact us!!!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
