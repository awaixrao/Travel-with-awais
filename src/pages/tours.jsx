import React from 'react';
import { Link } from 'react-router-dom'; 

const tours = [
  {
    id: 1,
    name: 'Hunza Valley',
    description: 'Stunning valley with majestic mountains and serene views.',
    img: 'https://images.pexels.com/photos/27244349/pexels-photo-27244349/free-photo-of-a-road-towards-khunjerab-pass.jpeg',
    price: '$500',
    duration: '7 Days / 6 Nights',
  },
  {
    id: 2,
    name: 'Skardu',
    description: 'Rugged mountains, serene lakes, and a peaceful atmosphere.',
    img: 'https://images.pexels.com/photos/19442078/pexels-photo-19442078/free-photo-of-resort-on-the-shore-of-lower-kachura-lake.jpeg',
    price: '$600',
    duration: '5 Days / 4 Nights',
  },
  {
    id: 3,
    name: 'Naran',
    description: 'Lush meadows, rivers, and scenic landscapes.',
    img: 'https://images.pexels.com/photos/27457479/pexels-photo-27457479/free-photo-of-a-group-of-people-standing-around-a-mountain.jpeg',
    price: '$400',
    duration: '4 Days / 3 Nights',
  },
  {
    id: 4,
    name: 'Neelum Valley',
    description: 'Scenic valley with dense forests and the Neelum River.',
    img: 'https://images.pexels.com/photos/27822821/pexels-photo-27822821/free-photo-of-arang-kel-kashmir.jpeg',
    price: '$450',
    duration: '6 Days / 5 Nights',
  }
];

const handleBookNow = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const upcomingTours = [
  { id: 5, name: 'Fairy Meadows', date: '12th Oct, 2024' },
  { id: 6, name: 'Murree', date: '18th Oct, 2024' },
  { id: 7, name: 'Kumrat Valley', date: '25th Oct, 2024' },
  { id: 8, name: 'Swat', date: '30th Oct, 2024' },
];

const ToursPage = () => {
  return (
    <section className="w-full p-8 md:p-16 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Explore Our Tours</h1>
        <p className="text-lg text-gray-600">Choose your next adventure from our wide selection of tours.</p>
      </div>

      {/* Tour Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        {tours.slice(0, 4).map((tour) => (
          <div
            key={tour.id}
            className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg backdrop-blur-lg transform transition-transform hover:scale-105"
          >
            <img
              src={tour.img}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">{tour.name}</h3>
              <p className="text-gray-700">{tour.description}</p>
              <p className="text-gray-800 font-semibold mt-2">{tour.price}</p>
              <p className="text-gray-600 text-sm">{tour.duration}</p>
              <Link to={`/tour/${tour.id}`} onClick={handleBookNow}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Tours Section */}
      <div className="mt-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {upcomingTours.map((tour) => (
            <div
              key={tour.id}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-gray-600">{tour.date}</p>
              </div>
              <Link to={`/tour/${tour.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursPage;
