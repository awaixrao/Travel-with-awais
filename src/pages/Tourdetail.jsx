import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourById } from '../store/tourSlice'; 
import LoginModal from '../components/LoginModal';

const TourDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  const { tour, loading, error } = useSelector((state) => state.tours); 

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTourById(id)); 
  }, [dispatch, id]);

  const handleConfirmBooking = () => {
    if (!isLogin) {
      setIsLoginModalOpen(true); // Show login modal if not logged in
    } else {
    
    }
  };

  const handleLogin = () => {
    setIsLoginModalOpen(false); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    tour ? (
      <section className="tour-detail bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-cover bg-center h-64 md:h-auto">
              <img src={tour.photos[0]} alt={tour.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{tour.name}</h2>
              <p className="text-gray-700 mb-4">{tour.description}</p>
              <p className="text-xl font-semibold text-green-600 mb-4">Price: ${tour.price}</p>
                <p className="text-gray-600"> Date: {new Date(tour.startDate).toDateString()}</p>

              <p className="text-sm text-gray-600 mb-2">From: {tour.startLocation} </p>
              <p className="text-sm text-gray-600 mb-2"> Location : {tour.locations} </p>              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tour Highlights</h4>
              
              <p className="text-sm text-gray-600 mb-4"> {tour.highlight} </p>

              {isLogin ? (
                <Link
                  to={`/booking/${tour._id}`} // Navigate to the booking page with the tour ID
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Confirm Booking
                </Link>
              ) : (
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                  onClick={handleConfirmBooking}
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 p-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Landscape Photos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tour.photos.map((image, index) => (
              <div key={index} className="w-full h-64">
                <img src={image} alt={`Landscape ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
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
    ) : (
      <div>No tour found</div>
    )
  );
};

export default TourDetail;
