import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* CampusConnect Logo/Title */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">CampusConnect</h2>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/legal" className="hover:text-white transition">Legal</a></li>
            
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Email: contact@campusconnect.edu</li>
            <li>Phone: +91 123 456 7890</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-white mb-2">Connect with Us</h3>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://linkedin.com/campus-connect" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/campusconnect" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/campusconnect" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 CampusConnect. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
