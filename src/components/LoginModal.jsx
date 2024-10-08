// src/components/LoginModal.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userLoginSlice'; // Your Redux login action
import { Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })); // Dispatch Redux login action
    onLogin(); // Call the login function to close modal after successful login
  };

  if (!isOpen) return null; // Return nothing if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <p className="mb-4">Please log in to confirm your booking.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
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

export default LoginModal;
