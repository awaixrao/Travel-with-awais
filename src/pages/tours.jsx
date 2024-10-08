import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTours } from '../store/tourSlice'; // Import the fetchAllTours action

const handleBookNow = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const ToursPage = () => {
  const dispatch = useDispatch();
  
  // Fetching tours from the Redux state
  const { tours, loading, error } = useSelector((state) => state.tours);

  // Fetch all tours on component load
  useEffect(() => {
    dispatch(fetchAllTours());
  }, [dispatch]);

  return (
    <section className="w-full p-8 md:p-16 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Explore Our Tours</h1>
        <p className="text-lg text-gray-600">Choose your next adventure from our wide selection of tours.</p>
      </div>

      {/* Loading and error handling */}
      {loading && <p>Loading tours...</p>}
      {error && <p>Error loading tours: {error}</p>}

      {/* Tour Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        {tours && tours.length > 0 && tours.slice(0, 8).map((tour) => (
          <div
            key={tour._id}
            className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg backdrop-blur-lg transform transition-transform hover:scale-105"
          >
            <img
              src={tour.photos[0]}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">{tour.name}</h3>
              <p className="text-gray-700">{tour.description}</p>
              <p className="text-gray-800 font-semibold mt-2">{`$${tour.price}`}</p>
              <p className="text-gray-600 text-sm">{`${tour.duration} Days`}</p>
              <Link to={`/tour/${tour._id}`} onClick={handleBookNow}>
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
          {/* Static upcoming tours */}
          {tours && tours.slice(8, 16).map((tour) => (
            <div
              key={tour._id}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-gray-600">{new Date(tour.startDate).toDateString()}</p>
              </div>
              <Link to={`/tour/${tour._id}`}>
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
