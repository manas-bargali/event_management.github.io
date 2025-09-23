import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <div className="px-6 py-8 w-full mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <span className="block text-sm text-gray-600">
          <a className="text-indigo-600 font-semibold" href="/">Home</a>
          {' '} / {' '}
          <span className="text-gray-800">About Us</span>
        </span>
      </div>

      {/* Main Content */}
      <div className="bg-white px-48 py-12 rounded-2xl shadow-2xl">
        {/* Mission Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Our Mission: Connecting Campuses
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            University life is more than just lectures and libraries; it's about
            the vibrant community, the shared experiences, and the connections
            that last a lifetime. <span className="font-semibold">CampusConnect</span> 
            was born from a simple idea: to create a single, unified platform that
            bridges the gap between students, clubs, and faculty. We saw a world
            of scattered notices, missed opportunities, and events that didn't
            reach their audience. Our mission is to change that.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that every student should have easy access to the full
            spectrum of campus life. Whether it's a coding workshop hosted by the
            computer science club, a guest lecture from a Nobel laureate, or the
            annual university music festival, CampusConnect ensures you never miss
            out. We provide the tools for organizers to effortlessly create and
            promote their events, and for students to discover, book, and engage
            with the activities that enrich their university journey.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a passionate team of developers, designers, and former students
            dedicated to improving the university experience. Have a question,
            suggestion, or just want to say hello? We'd love to hear from you.
          </p>

          <div className="space-y-2 flex items-center justify-between mt-10">
            
            <div className="flex items-center gap-4 px-19 py-4 bg-purple-100">
              <FaMessage className="text-blue-500 text-2xl" />
              <div>
                <p>Contact by Email:</p>
                <a
                  href="mailto:contact@campusconnect.edu"
                  className="text-indigo-600 hover:underline"
                >
                  contact@campusconnect.edu
                </a>

                </div>
            </div>
            <div className="flex items-center gap-4 px-19 py-4 bg-gray-200">
              <FaGithub className="text-gray-600 text-2xl " />
              <div>
                <p>Connect on GitHub:</p>
                <a
                  href="https://github.com/campus-connect"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  /campus-connect
                </a>

                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
