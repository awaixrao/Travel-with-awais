import React, { useState } from "react";
import Filter from "./filter";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen m-0 p-0 overflow-hidden relative">
      {/* Navbar */}
      <div className="bg-black/70 backdrop-blur-sm top-0 left-0 w-full z-20">
        <nav className="w-full lg:w-[1250px] mx-auto">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white">
                  Travel with Awais
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:flex sm:items-center space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 text-white hover:text-indigo-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-white hover:text-indigo-300"
                >
                  Tours
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-white hover:text-indigo-300"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-white hover:text-indigo-300"
                >
                  Contact
                </a>
              </div>

              <div className="hidden sm:flex items-center">
                <Link
                  to="/login"
                  className="px-3 py-2 text-white hover:text-indigo-300"
                >
                  Login / Sign up
                </Link>
              </div>

              <div className="sm:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden bg-black/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:text-indigo-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:text-indigo-300"
                >
                  Tours
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:text-indigo-300"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:text-indigo-300"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-white hover:text-indigo-300"
                >
                  Login / Sign up
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
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
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>{" "}
        {/* Overlay for Darkening */}
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
            {" "}
            {/* Adjust position as needed */}
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
