import React from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-6 py-8">
      
      {/* Breadcrumb */}
      <div className="mb-4">
        <span className="text-sm text-gray-600">
            <Link to="/">
            <span className="text-indigo-600 font-semibold">Home</span> /{" "}
            </Link>
          
          <span className="text-gray-800">Help Center</span>
        </span>
      </div>

      {/* Help Center Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2 text-center">Help Center & Support</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center">Contact Admin</h2>
      </div>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Email Support */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <FaEnvelope className="text-indigo-600 text-4xl mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Email Support</h3>
          <p className="text-gray-600 text-sm">contact@campusconnect.edu</p>
        </div>

        {/* Connect on LinkedIn */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <FaLinkedin className="text-indigo-600 text-4xl mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Connect on LinkedIn</h3>
          <p className="text-gray-600 text-sm">linkedin.com/campus-connect</p>
        </div>

        {/* Live Chat & Phone */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
          <FaComments className="text-indigo-600 text-4xl mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Live Chat & Phone</h3>
          <p className="text-gray-600 text-sm">Mon-Fri 9am to 5pm</p>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-gray-300 mb-8" />

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-600 mb-3">How It Works: A Quick Guide</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Purpose: A More Connected Campus</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          In a bustling university environment, countless opportunities for learning, networking, and fun can easily get lost in the noise of scattered emails, outdated flyers, and disorganized social media posts. CampusConnect was created to solve this exact problem. Our purpose is to provide a single, centralized, and easy-to-use platform for the entire campus community.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For students, CampusConnect is your one-stop-shop to discover everything happening on campus. You can search for events, learn about the purpose and organizers, and book your spot with a single click. For event organizers—be it faculty, student clubs, or the administration—CampusConnect provides the tools you need to reach your audience effectively. Our admin panel allows authorized users to create, manage, and promote events, ensuring maximum visibility and engagement.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ultimately, we aim to foster a more vibrant, engaged, and connected campus culture where no student misses out on an opportunity to grow and connect.
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
