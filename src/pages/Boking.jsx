import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTourById } from '../store/tourSlice';
import { createBooking } from '../store/bookingSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { notification } from "antd";
import {jwtDecode} from 'jwt-decode'; 

const BookingPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tour = useSelector((state) => state.tours.tour);
    const loading = useSelector((state) => state.tours.loading);
    const error = useSelector((state) => state.tours.error);

    const token = localStorage.getItem('token');
    let userId = null;

    // Decode the token to get user ID
    if (token) {
        try {
            const decodedToken = jwtDecode(token); 
            userId = decodedToken.userId; 
        } catch (error) {
            console.error('Invalid token', error);
        }
    }

    const [seats, setSeats] = useState(1);
    const [email, setEmail] = useState("");  
    const [username, setUsername] = useState(""); 

    useEffect(() => {
        if (id) {
            dispatch(fetchTourById(id));
        }
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!tour) return <div>No tour details found!</div>;

    const totalPrice = seats * tour.price;

    const handleSeatChange = (e) => {
        setSeats(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
  
        if (!userId) {
            return notification.error({
                message: "Booking Failed",
                description: "Invalid user ID. Please log in again.",
                placement: 'topRight',
            });
        }

        // Check if email and username are provided
        if (!email || !username) {
            return notification.error({
                message: "Booking Failed",
                description: "Please provide both your email and username.",
                placement: 'topRight',
            });
        }
  
        const bookingData = {
            user: userId,
            email: email,  
            username: username,  
            tours: [{ _id: tour._id, seatsBooked: seats, pricePerSeat: tour.price }],
            totalAmount: totalPrice,
        };
  
        const bookingResult = await dispatch(createBooking(bookingData));
  
        if (bookingResult.type === 'bookings/create/fulfilled') {
            notification.success({
                message: "Booking Successful",
                description: `Your booking for ${tour.name} has been confirmed!`,
                placement: 'topRight',
            });
  
            // Navigate to Payment Page with necessary data
            navigate(`/booking/${bookingResult.payload._id}/payment`, {
                state: {
                    bookingId: bookingResult.payload._id, 
                    amount: totalPrice,
                },
            });
        } else {
            // Handle booking error
            notification.error({
                message: "Booking Failed",
                description: bookingResult.error.message,
                placement: 'topRight',
            });
        }
    };

    return (
        <section className="w-full p-8 md:p-16 bg-gray-100">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>

                <p className="text-lg mb-2">Tour: {tour.name}</p>
                <p className="text-lg mb-2">Date: {new Date(tour.startDate).toDateString()}</p>
                <p className="text-lg mb-2">Price per seat: ${tour.price}</p>

                {/* Username Field */}
                <label htmlFor="username" className="block mb-2 text-lg font-semibold">
                    Your Name:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    placeholder="Enter your name"
                    required
                />

                {/* Email Field */}
                <label htmlFor="email" className="block mb-2 text-lg font-semibold">
                    Email Address:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    placeholder="Enter your email"
                    required
                />

                {/* Seat Selection */}
                <label htmlFor="seats" className="block mb-2 text-lg font-semibold">
                    Number of seats:
                </label>
                <input
                    type="number"
                    id="seats"
                    name="seats"
                    min="1"
                    max={tour.availableSeats}
                    value={seats}
                    onChange={handleSeatChange}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />

                <p className="text-xl font-bold mb-4">Total Price: ${totalPrice}</p>

                {/* Booking Submit */}
                <form onSubmit={handleBookingSubmit}>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookingPage;
