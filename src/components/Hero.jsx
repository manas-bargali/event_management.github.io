// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-400 to-indigo-400 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">
            Connect with Your Campus Community
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Discover and join exciting events, workshops, and student groups tailored for you.
          </p>
          <a href="#upcoming-events">
            <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Explore Events
          </button>
          </a>
          
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <img
            className='max-w-full h-max rounded-lg object-cover shadow-2xl'
            src="../../images/HeroImage.avif"
            alt="Students connecting on campus"
          />
        </div>
      </div>
      {/* Optional: Background overlay or shape for visual interest */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;