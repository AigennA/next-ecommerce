
'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is lammazon?",
    answer: "Lammazon is an online marketplace that offers a wide variety of products including fashion, electronics, home goods, and more. We aim to provide a seamless shopping experience with great deals and customer service."
  },
  {
    question: "How can I create an account on lammazon?",
    answer: "You can create an account by clicking on the 'Sign Up' button at the top right corner of the homepage. Fill in the required details, and you'll receive a confirmation email to activate your account."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, PayPal, and other secure online payment gateways."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has been shipped, you will receive an email with a tracking number and a link to track your package. You can also log in to your lammazon account and check the 'Orders' section for the status of your shipment."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most products. Items must be returned in their original condition and packaging. For more details, visit our Returns & Exchanges page."
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact our customer service team via email at support@lammazon.com or by using the contact form on our website. Our support team is available 24/7 to assist you."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination. For more information, visit our Shipping Policy page."
  },
  {
    question: "How do I apply a discount code?",
    answer: "During checkout, you can enter your discount code in the provided field. Click 'Apply' to see the discount reflected in your total amount."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "If you need to change or cancel your order, please contact our customer service team as soon as possible. If the order has not yet been processed, we will do our best to accommodate your request."
  },
  {
    question: "Is my personal information secure on lammazon?",
    answer: "Yes, we prioritize your privacy and security. We use advanced encryption methods and secure payment gateways to protect your personal and payment information. For more details, please review our Privacy Policy."
  },
  {
    question: "How can I leave a review for a product?",
    answer: "After receiving your order, you can log in to your lammazon account, go to the 'Orders' section, and find the product you wish to review. Click on the 'Leave a Review' button and submit your feedback."
  },
  {
    question: "What should I do if I receive a damaged or incorrect item?",
    answer: "If you receive a damaged or incorrect item, please contact our customer service team immediately. Provide your order number and details of the issue, and we will assist you with a replacement or refund."
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes, we offer gift cards in various denominations. You can purchase them on our website, and they can be redeemed during checkout."
  },
  {
    question: "How can I stay updated on promotions and new arrivals?",
    answer: "Subscribe to our newsletter by entering your email at the bottom of our homepage. You can also follow us on social media for the latest updates and exclusive offers."
  },
  {
    question: "Can I save items to purchase later?",
    answer: "Yes, you can add items to your Wishlist by clicking the 'Add to Wishlist' button on the product page. You must be logged in to save items to your Wishlist."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
          >
            <h2
              className="text-xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">
                {activeIndex === index ? '-' : '+'}
              </span>
            </h2>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
