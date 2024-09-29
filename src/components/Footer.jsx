import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-full">
      {/* "Looking for an experience?" Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('naran.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Looking for an experience?</h1>
          <p className="text-lg md:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.
          </p>
          <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-lg transition duration-300">
            VIEW PACKAGES
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-10 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/?ocean,water')" }}>
        <div className="container mx-auto text-center text-white">
          <div className="mb-6">
            {/* Star Travels Logo */}
            <div className="inline-block mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-.832.445l-3 5a1 1 0 00.011 1.102l4.001 5.573 4.001-5.573a1 1 0 00.011-1.102l-3-5A1 1 0 0010 2zm0 1.766L12.071 8H7.929L10 3.766zm1.85 10.755L10 13.278l-1.85 2.243a.25.25 0 01-.4-.064l-1.1-2.358L7.267 10h5.466l.618 3.592-1.1 2.358a.25.25 0 01-.4.064z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Star Travels</h2>
          </div>
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="text-lg hover:text-teal-300 transition duration-300">Home</a>
            <a href="#" className="text-lg hover:text-teal-300 transition duration-300">Packages</a>
            <a href="#" className="text-lg hover:text-teal-300 transition duration-300">Tours</a>
            <a href="#" className="text-lg hover:text-teal-300 transition duration-300">About Us</a>
            <a href="#" className="text-lg hover:text-teal-300 transition duration-300">Contact</a>
          </div>
          {/* Copyright */}
          <p className="text-sm text-gray-400">© 2023 StarTravels.com | All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
