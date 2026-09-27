import React from 'react';

const FAQS = [
  {
    q: '1. How much do Indian wedding invitation cards typically cost?',
    a: [
      'The cost of Indian wedding cards can vary widely depending on several factors such as design complexity, materials used, customization options, and quantity ordered. Typically, Indian wedding invitations can range from affordable options to more extravagant and luxurious choices.',
      'For simpler and more budget-friendly options, you can find Indian wedding cards starting from around INR 10 to INR 50 per card. These cards may feature standard designs, basic printing techniques, and standard paper quality.'
    ]
  },
  {
    q: '2. Do you provide sample card before finalizing the order?',
    a: [
      "We don't practise business by providing sample cards, since all the cards are manufactured against order, once the customer places the order, we go for the manufacturing process. So we don't keep sample cards to carry."
    ]
  },
  {
    q: '3. Do you provide printing services?',
    a: [
      'Yes, we provide the cards with printing. The text can be printed in ink, foil and by using thermographic process.'
    ]
  },
  {
    q: '4. How much time will it take for the complete procedure for an order?',
    a: [
      'Once the customer approve the proof and after the confirmation of the payment, we shall start the printing process and deliver the cards in ten working days time. Then the cards can be shipped across in three to four days, which is to be door delivered.'
    ]
  },
  {
    q: '5. Do you provide add on cards like Rsvp, Thank you cards etc.?',
    a: [
      'Yes, we provide full range of save the date. Card, Rsvp card, Thank you card, Place card, Reception card, Sangeet card, Cocktail card, Mehandi card etc.'
    ]
  },
  {
    q: '6. Do you provide the text samples of addon cards?',
    a: [
      'Kindly visit the (******) for the text samples link.'
    ]
  },
  {
    q: '7. Could you suggest me, wordings, symbols, logos for the order?',
    a: [
      'You can select appropriate text for your card with related logos fonts the link and as specified below.'
    ]
  },
  {
    q: '8. How to place the order after selecting the card?',
    a: [
      'You can choose a card from the hosted list and initially register with us for proceeding to the order booking. After registration, you can book the card with the quantity required and other details.'
    ]
  },
  {
    q: '9. Can I add up extra page / Insert in the card?',
    a: [
      'You can add extra inserts to your card. The charges for the insert and the printing charges will be additional.'
    ]
  },
  {
    q: '10. How do we pay through online?',
    a: [
      'After all your selections are finished, you can make use of the view cost option, to view the entire selections of cards with their prices and shipping cost. Then click on the pay Icon which will take you to the online payment gateway through which the payment can be done online within minutes. After the confirmation of the payment only we shall start the manufacturing process.'
    ]
  }
];

export const FaqPage = () => {
  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 font-poppins pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-10">
        <h1 className="text-[24px] sm:text-[28px] font-bold uppercase tracking-wide text-center text-stone-900 mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="space-y-6">
          {FAQS.map((item) => (
            <section key={item.q}>
              <div className="bg-[#E8A317] text-stone-900 font-bold text-[14px] sm:text-[15px] text-center py-2 px-3">
                {item.q}
              </div>
              <div className="pt-3 pb-1 space-y-3">
                {item.a.map((para) => (
                  <p key={para.slice(0, 40)} className="text-[14px] sm:text-[15px] leading-relaxed text-stone-700">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
