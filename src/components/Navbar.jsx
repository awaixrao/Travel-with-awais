// src/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
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
              <Link
                to="/"
                className="px-3 py-2 text-white hover:text-indigo-300"
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="px-3 py-2 text-white hover:text-indigo-300"
              >
                Tours
              </Link>

              <Link
                to="https://resturant-project-ruddy.vercel.app/"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Resturant
              </Link>

              <Link
                to="/about"
                className="px-3 py-2 text-white hover:text-indigo-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-white hover:text-indigo-300"
              >
                Contact
              </Link>
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
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Home
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Tours
              </Link>

              <Link
                to="https://resturant-project-ruddy.vercel.app/"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Resturant


              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                About Us
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-white hover:text-indigo-300"
              >
                Login / Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
