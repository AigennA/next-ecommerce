// pages/shop-transport.tsx

'use client';
import React from 'react';

const ShopTransport: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Shipping & Delivery
      </h1>
      
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Shipping Methods
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          We offer various shipping options to ensure that you receive your products in a timely manner:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
          <li><strong>Expedited Shipping:</strong> Delivery within 2-3 business days.</li>
          <li><strong>Next-Day Shipping:</strong> Delivery by the next business day.</li>
        </ul>
      </section>
      
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Shipping Costs
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Shipping costs are based on the weight of your order and the shipping method selected. The estimated shipping cost will be displayed at checkout before you confirm your purchase.
        </p>
      </section>
      
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Delivery Times
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Delivery times can vary depending on the shipping method and destination. We strive to deliver your order as quickly as possible. During peak times or unforeseen events, there may be slight delays.
        </p>
      </section>
      
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          4. International Shipping
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          We offer international shipping to select countries. Shipping costs and delivery times for international orders vary based on the destination. Any customs duties or taxes are the responsibility of the recipient.
        </p>
      </section>
      
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          5. Tracking Your Order
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          After your order has been dispatched, you will receive a tracking number via email. You can use this number to track your shipment on the courier's website.
        </p>
      </section>
      
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          6. Contact Us
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          If you have any questions about our shipping and delivery policies or need assistance with your order, please contact us:
          <br />
          <a href="mailto:support@lammazon.com" className="text-blue-600 hover:underline">
            support@lammazon.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default ShopTransport;
