import React from "react";
import { FaUserCircle } from "react-icons/fa";

const OrganizerSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-12 max-w-6xl mx-auto">
      
      {/* Left Div */}
      <div className="flex-1 bg-indigo-50 p-8 rounded-2xl shadow-lg flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          Want to create an event?
        </h2>
        <p className="text-gray-700 mb-6">
          Organize and promote your campus events easily. Reach students, faculty, and the entire university community seamlessly.
        </p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition w-max">
          Go to admin panel 
        </button>
      </div>

      {/* Right Div */}
      <div className="flex-1 bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col justify-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Authorized Organizers
        </h2>
        <div className="flex items-center justify-center gap-6 mb-4">
            <div className="flex flex-col items-center justiry-center space-y-2 text-gray-700">
                <FaUserCircle className="text-indigo-600 text-6xl" />
                <p>Student Affairs</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <FaUserCircle className="text-indigo-600 text-6xl" />
                <p>Faculty Board</p>
            </div>
          
          
        </div>
        
      </div>

    </div>
  );
};

export default OrganizerSection;
