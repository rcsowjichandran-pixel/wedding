import React from 'react';

const STEPS = [
  {
    title: 'Browse the Collection:',
    body: 'Take your time to explore our collection and discover various designs that suit your style and preferences. You can use the search filters to narrow down your options based on themes, colors, or card types.'
  },
  {
    title: 'Select a Design:',
    body: 'Once you have found a design that catches your eye, click on it to view more details. You can zoom in to see the intricate details and read the card description to ensure it meets your requirements.'
  },
  {
    title: 'Add to Cart:',
    body: 'Once you are happy with your design, select the quantity and click on the "Add to Cart" button to proceed to the next step.'
  },
  {
    title: 'Review Your Order:',
    body: 'In the shopping cart, you will be able to review your order summary, including the quantity, price, and any additional services you have selected.'
  },
  {
    title: 'Secure Payment:',
    body: 'King of Cards offers a secure online payment system. Choose your preferred payment method and enter the necessary details to complete your transaction.'
  },
  {
    title: 'Place Your Order:',
    body: 'After confirming your payment, you will receive an order confirmation via email, along with an estimated delivery date.'
  }
];

export const HowToOrderPage = () => {
  return (
    <div className="bg-[#E6E6FA] min-h-screen text-stone-800 font-poppins pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-12">
        <h1 className="text-[26px] sm:text-[32px] font-bold text-stone-900 leading-snug mb-8">
          How do I order wedding cards from Wed Knot Craft online?
        </h1>

        <div className="space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-stone-800">
          {STEPS.map((step) => (
            <p key={step.title}>
              <span className="font-bold">{step.title}</span> {step.body}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
