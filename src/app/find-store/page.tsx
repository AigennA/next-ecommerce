'use client';
import React from 'react';

const FindStore: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Find a Store
      </h1>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Search for a Store
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Use the search form below to find a store near you. Enter your city, state, or zip code to get started.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter city, state, or zip code"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </form>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Store Locations on the Map
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          View our store locations on the map below. You can zoom in and out to explore different areas.
        </p>
        <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
          {/* Placeholder for map */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <span>Map Placeholder</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. Contact Us for Assistance
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          If you need further assistance in finding a store or have any questions, please reach out to us.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
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

export default FindStore;
