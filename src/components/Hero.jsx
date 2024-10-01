// src/Hero.js
import React from "react";
import Filter from "./Filter"; // Ensure Filter component is correctly imported
import Navbar from "./Navbar"; // Import the Navbar component

const Hero = () => {
  return (
    <div className="min-h-screen m-0 p-0 overflow-hidden relative">
     

      {/* Background Video */}
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/19150354/19150354-uhd_2560_1440_60fps.mp4" // Ensure you have the correct video path
          autoPlay
          loop
          muted
        ></video>
        {/* Overlay for Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        {/* Centered Content Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full text-center z-10">
          {/* Hero Heading */}
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Your Dream Vacation Awaits
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl italic">
              Explore the North with us
            </p>
          </div>

          <div className="hidden lg:block w-full p-4 sm:w-auto z-50">
            <div className="p-4">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
