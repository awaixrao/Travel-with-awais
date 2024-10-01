import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


// Modal component for login
const LoginModal = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <p className="mb-4">Please log in to confirm your booking.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin(); // Call the login function passed as a prop
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
        </form>
        

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const TourDetail = () => {
  const { id } = useParams(); // Extract the id from the URL

  // Sample data for demonstration
  const tours = {
    1: {
      name: 'Hunza Valley',
      description: 'Hunza is a breathtaking valley located in Gilgit-Baltistan, known for its majestic mountains, scenic views, and rich culture. It offers visitors a peaceful atmosphere and stunning landscapes, with famous spots like Attabad Lake, Baltit Fort, and Passu Cones.',
      price: '$500',
      duration: '7 Days / 6 Nights',
      highlights: ['Attabad Lake', 'Baltit Fort', 'Passu Cones'],
      img: [
        'https://images.pexels.com/photos/27244349/pexels-photo-27244349/free-photo-of-a-road-towards-khunjerab-pass.jpeg',
        'https://images.pexels.com/photos/1367173/pexels-photo-1367173.jpeg',
        'https://images.pexels.com/photos/755141/pexels-photo-755141.jpeg',
      ],
    },
    2: {
      name: 'Skardu',
      description: 'Skardu is known for its stunning lakes, snow-capped peaks, and peaceful valleys. Visitors can explore Shangrila Resort, Satpara Lake, and the amazing Deosai National Park.',
      price: '$600',
      duration: '5 Days / 4 Nights',
      highlights: ['Shangrila Resort', 'Satpara Lake', 'Deosai National Park'],
      img: [
        'https://images.pexels.com/photos/19442078/pexels-photo-19442078/free-photo-of-resort-on-the-shore-of-lower-kachura-lake.jpeg',
        'https://images.pexels.com/photos/1236789/pexels-photo-1236789.jpeg',
        'https://images.pexels.com/photos/678141/pexels-photo-678141.jpeg',
      ],
    },
    3: {
      name: 'Naran',
      description: 'Naran is a famous town in the Kaghan Valley, known for its lush green meadows, river views, and surrounding mountains. The popular Saif-ul-Malook Lake, Lulusar Lake, and Babusar Top are must-visit locations.',
      price: '$400',
      duration: '4 Days / 3 Nights',
      highlights: ['Saif-ul-Malook Lake', 'Lulusar Lake', 'Babusar Top'],
      img: [
        'https://images.pexels.com/photos/27457479/pexels-photo-27457479/free-photo-of-a-group-of-people-standing-around-a-mountain.jpeg',
        'https://images.pexels.com/photos/756358/pexels-photo-756358.jpeg',
        'https://images.pexels.com/photos/723023/pexels-photo-723023.jpeg',
      ],
    },
    4: {
      name: 'Neelum Valley',
      description: 'Neelum Valley is a picturesque valley in Azad Kashmir, surrounded by mountains and lush forests. The valley is known for its beautiful rivers and serene, green landscapes with must-see spots like Arang Kel and Shounter Lake.',
      price: '$550',
      duration: '6 Days / 5 Nights',
      highlights: ['Arang Kel', 'Shounter Lake', 'Keran'],
      img: [
        'https://images.pexels.com/photos/27822821/pexels-photo-27822821/free-photo-of-arang-kel-kashmir.jpeg',
        'https://images.pexels.com/photos/6723589/pexels-photo-6723589.jpeg',
        'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg',
      ],
    },
  };

  const tour = tours[id];

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 

  const handleConfirmBooking = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true); 
    } else {
      alert('Booking confirmed!');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false); 
  };

  return (
    <section className="tour-detail bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-cover bg-center h-64 md:h-auto">
            <img
              src={tour.img[0]}
              alt={tour.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tour Info */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{tour.name}</h2>
            <p className="text-gray-700 mb-4">{tour.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-4">Price: {tour.price}</p>
            <p className="text-sm text-gray-600 mb-4">Duration: {tour.duration}</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Tour Highlights</h4>
            <ul className="list-disc pl-6 mb-6">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700">{highlight}</li>
              ))}
            </ul>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto mt-8 p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Landscape Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tour.img.map((image, index) => (
            <div key={index} className="w-full h-64">
              <img
                src={image}
                alt={`Landscape ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </section>
  );
};

export default TourDetail;
