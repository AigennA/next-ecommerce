'use client';
import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Privacy Policy
      </h1>
      <p className="text-lg mb-6 text-gray-800 leading-relaxed">
        At lammazon, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        1. Information We Collect
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        We collect various types of information in connection with your use of our website and services, including:
      </p>
      <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
        <li>Personal identification information (name, email address, etc.)</li>
        <li>Payment information (credit card details, billing address, etc.)</li>
        <li>Browsing data (IP address, browser type, etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        2. How We Use Your Information
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        We use your information for various purposes, including:
      </p>
      <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
        <li>Processing transactions and fulfilling orders</li>
        <li>Improving our website and services</li>
        <li>Sending promotional and informational communications</li>
        <li>Protecting against fraud and abuse</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        3. How We Protect Your Information
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        We implement a variety of security measures to ensure the safety of your personal information, including:
      </p>
      <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
        <li>Encryption of sensitive data</li>
        <li>Regular security assessments and updates</li>
        <li>Access controls and secure storage practices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        4. Your Rights and Choices
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        You have the right to:
      </p>
      <ul className="list-disc list-inside ml-6 mb-6 text-gray-700">
        <li>Access and update your personal information</li>
        <li>Opt out of receiving promotional communications</li>
        <li>Request the deletion of your personal information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        5. Changes to This Privacy Policy
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our website or services after such changes signifies your acceptance of the revised policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        6. Contact Us
      </h2>
      <p className="text-lg mb-4 text-gray-700 leading-relaxed">
        If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        <br />
        <a href="mailto:support@lammazon.com" className="text-blue-600 hover:underline">
          support@lammazon.com
        </a>
      </p>
    </div>
  );
};

export default Privacy;
