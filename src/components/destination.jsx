import React from 'react';

const Destination = () => {
  const destinations = [
    { name: 'Hunza Valley', description: 'Stunning valley with majestic mountains and serene views', img: 'https://images.pexels.com/photos/27244349/pexels-photo-27244349/free-photo-of-a-road-towards-khunjerab-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Skardu', description: 'Rugged mountains, serene lakes, and a peaceful atmosphere', img: 'https://images.pexels.com/photos/19442078/pexels-photo-19442078/free-photo-of-resort-on-the-shore-of-lower-kachura-lake-at-the-foot-of-the-himalayas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Naran', description: 'Lush meadows, rivers, and scenic landscapes', img: 'https://images.pexels.com/photos/27457479/pexels-photo-27457479/free-photo-of-a-group-of-people-standing-around-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Neelum', description: 'Scenic valley with dense forests and the Neelum River', img: 'https://images.pexels.com/photos/27822821/pexels-photo-27822821/free-photo-of-arang-kel-kashmir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <section
      className="relative w-full p-8 md:p-16 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/19442078/pexels-photo-19442078/free-photo-of-resort-on-the-shore-of-lower-kachura-lake-at-the-foot-of-the-himalayas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Popular Destinations</h2>
        <p className="text-base md:text-lg">Explore the best places to travel around the world.</p>
      </div>

      {/* Destination Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg backdrop-blur-lg transform transition-transform hover:scale-105"
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">{destination.name}</h3>
              <p className="text-gray-700">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
