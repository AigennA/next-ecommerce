'use client';
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Us</h1>

      {/* Company Overview */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Company Overview</h2>
        <p className="text-lg mb-4 text-gray-700">
          Welcome to <span className="text-blue-900 font-bold">Lammazon</span>, your go-to destination for high-quality products at competitive prices. Our journey started with a simple idea: to provide a seamless and enjoyable shopping experience for our customers.
        </p>
        <p className="text-lg text-gray-700">
          We offer a wide range of products, from fashion to electronics, each selected with care to ensure you get the best value for your money. Our dedicated team is here to assist you every step of the way, making your shopping experience as smooth and enjoyable as possible.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg mb-4 text-gray-700">
          Our mission is to deliver outstanding products and services that meet the needs and exceed the expectations of our customers. We are committed to offering exceptional quality and value while continuously improving our processes to better serve you.
        </p>
        <p className="text-lg text-gray-700">
          We strive to create a shopping experience that is not only convenient but also enjoyable, with a focus on customer satisfaction and long-term relationships.
        </p>
      </section>

      {/* Our Values */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Values</h2>
        <ul className="list-disc list-inside ml-6 mb-4 text-gray-700">
          <li><strong>Quality:</strong> We prioritize excellence in every product we offer.</li>
          <li><strong>Customer Satisfaction:</strong> We are dedicated to ensuring every customer is happy with their purchase.</li>
          <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
          <li><strong>Innovation:</strong> We are always looking for ways to enhance our products and services.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Our core values guide us in everything we do, ensuring that we stay true to our mission and deliver on our promises.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-700 mt-2">
                Jane is the visionary behind Lammazon, bringing years of experience in retail and a passion for customer satisfaction to the company.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
              <p className="text-gray-700 mt-2">
                John oversees the daily operations of Lammazon, ensuring that everything runs smoothly and efficiently.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Head of Customer Service</p>
              <p className="text-gray-700 mt-2">
                Emily leads our customer service team, dedicated to providing exceptional support and resolving any issues you may encounter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
