'use client';
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
      <p className="text-lg mb-4 text-gray-700">
        Welcome to our eCommerce store! We are committed to delivering the best products to our customers.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Our mission is to provide high-quality products that meet the needs and exceed the expectations of our customers.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        We believe in exceptional customer service and strive to create a shopping experience that you will love.
      </p>
      <p className="text-lg text-gray-700">
        Thank you for choosing <span className="text-blue-900 font-bold text-2xl">lammazon</span>. 
        <br />
        Happy shopping!
      </p>
    </div>
  );
};

export default About;
