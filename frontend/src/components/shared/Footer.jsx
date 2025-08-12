import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">JobHunt</h2>
            <p className="mt-2 text-gray-400">
              Your dream job is just a click away. <br />
              Find top opportunities and get hired faster.
            </p>
          </div>

          {/* Social Media Icons with Follow Us */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} JobHunt. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
