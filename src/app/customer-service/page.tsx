// pages/customer-service.tsx

'use client';
import React from 'react';

const CustomerService: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Customer Service
      </h1>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Common Questions
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Below are some frequently asked questions that might help you:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li><strong>How do I track my order?</strong> You can track your order using the tracking link provided in your confirmation email.</li>
          <li><strong>How can I return an item?</strong> To return an item, please visit our Returns page or contact our customer support for assistance.</li>
          <li><strong>What payment methods do you accept?</strong> We accept various payment methods including credit cards, PayPal, and more.</li>
          <li><strong>How can I update my account information?</strong> Log in to your account and navigate to the profile settings to update your information.</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Contact Us
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          If you need assistance, you can contact us through the following methods:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></li>
          <li><strong>Email:</strong> <a href="mailto:support@lammazon.com" className="text-blue-600 hover:underline">support@lammazon.com</a></li>
          <li><strong>Live Chat:</strong> Available on our website from 9 AM to 9 PM EST.</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Contact Form
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Fill out the form below to send us a message. We will get back to you as soon as possible.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default CustomerService;
