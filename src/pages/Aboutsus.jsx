import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-8 md:px-16">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-semibold text-blue-600">Travel with Awais</span> – your ultimate partner in discovering the world's most breathtaking destinations! 
            We are a passionate team of travel enthusiasts who aim to create unforgettable experiences for adventurers, explorers, and nature lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Travel with Awais</span>, our mission is to connect travelers with the rich cultures, landscapes, and wonders of the world. We believe that travel is about more than just seeing new places—it's about immersion, transformation, and inspiration. We’re here to help you experience the beauty of the world through carefully curated tours that reflect authenticity and adventure.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <span className="font-semibold text-blue-600">Expert Guides</span>: Our guides are seasoned professionals who know the ins and outs of every destination, ensuring a safe and enriching experience.
              </li>
              <li className="mb-2">
                <span className="font-semibold text-blue-600">Personalized Experiences</span>: Whether you're a solo traveler, couple, or group, we tailor every journey to meet your needs and preferences.
              </li>
              <li className="mb-2">
                <span className="font-semibold text-blue-600">Sustainable Travel</span>: We promote responsible tourism practices that respect local cultures, economies, and environments.
              </li>
              <li className="mb-2">
                <span className="font-semibold text-blue-600">Memorable Adventures</span>: From the majestic mountains of the Hunza Valley to the serene lakes of Skardu, every adventure is crafted to provide a lifetime of memories.
              </li>
            </ul>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet Awais</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Awais, the founder and visionary behind <span className="font-semibold text-blue-600">Travel with Awais</span>. 
            With a passion for travel, adventure, and connecting people with the beauty of the world, I started this journey to share the wonders of our planet with fellow travelers. 
            I have explored various breathtaking regions, from the valleys of Pakistan to hidden gems across the globe, and I can't wait to share these experiences with you.
          </p>

          <img 
            src="awais.jpeg" alt="Awais"

            className="w-40 h-40 rounded-full mx-auto mt-8 shadow-md"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join Us on an Unforgettable Journey</h3>
        <p className="text-gray-700 mb-6">
          Ready to embark on your next adventure? Whether you're looking to explore the mountains, dive into culture, or relax in nature, <span className="font-semibold text-blue-600">Travel with Awais</span> is here to make your travel dreams come true.
        </p>
        <a 
          href="/tours" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Explore Our Tours
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
