'use client';
import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Careers at Lammazon
      </h1>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          1. Why Work With Us?
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          At Lammazon, we believe that our success is driven by our talented and dedicated team. We offer a dynamic work environment where creativity and innovation are encouraged. Here are a few reasons why you should consider joining us:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li>Opportunity for career growth and development</li>
          <li>Collaborative and inclusive work culture</li>
          <li>Competitive salary and benefits package</li>
          <li>Work-life balance with flexible scheduling</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          2. Current Openings
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          We are currently hiring for the following positions:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li><strong>Marketing Specialist:</strong> Develop and execute marketing strategies to enhance brand visibility.</li>
          <li><strong>Software Engineer:</strong> Build and maintain our website and backend systems.</li>
          <li><strong>Customer Support Representative:</strong> Provide exceptional support to our customers and address their inquiries.</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          3. How to Apply
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          To apply for any of our open positions, please follow these steps:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
          <li>Send your resume and cover letter to our HR department at <a href="mailto:careers@lammazon.com" className="text-blue-600 hover:underline">careers@lammazon.com</a></li>
          <li>In your cover letter, specify the position you are applying for and why you would be a great fit for the role.</li>
          <li>Include any relevant work samples or portfolios if applicable.</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          4. Contact Us
        </h2>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          If you have any questions about the application process or our open positions, feel free to reach out to us:
          <br />
          <a href="mailto:careers@lammazon.com" className="text-blue-600 hover:underline">
            careers@lammazon.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Careers;
