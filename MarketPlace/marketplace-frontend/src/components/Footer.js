// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mb-4">
          <a href="/about" className="hover:text-blue-400 transition duration-300 mb-2 md:mb-0">About Us</a>
          <a href="/services" className="hover:text-blue-400 transition duration-300 mb-2 md:mb-0">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition duration-300 mb-2 md:mb-0">Contact</a>
          <a href="/privacy" className="hover:text-blue-400 transition duration-300 mb-2 md:mb-0">Privacy Policy</a>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 text-xs">
          <a href="/terms" className="hover:text-blue-400 transition duration-300 mb-2 md:mb-0">Terms of Service</a>
          <a href="/faq" className="hover:text-blue-400 transition duration-300">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
