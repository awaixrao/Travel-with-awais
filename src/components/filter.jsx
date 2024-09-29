import React, { useState } from 'react';
import { FaBus, FaCar, FaHotel, FaCalendarAlt, FaMonument } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Filter = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('2024-09-24');

    const handleSearch = () => {
        console.log('From:', from);
        console.log('To:', to);
        console.log('Date:', date);
    };

    return (
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4 sm:space-x-6 text-white">
                <FaBus className="text-xl sm:text-2xl" />
                <FaCar className="text-xl sm:text-2xl" />
                <FaHotel className="text-xl sm:text-2xl" />
                <FaCalendarAlt className="text-xl sm:text-2xl" />
                <FaMonument className="text-xl sm:text-2xl" />
            </div>

            {/* Dropdowns and Date Picker */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center space-y-4 sm:space-y-0">
                {/* From Dropdown */}
                <div className="relative w-full sm:w-auto">
                    <IoLocationSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full sm:w-auto p-3 pl-10 pr-4 rounded-lg bg-white text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        <option value="" disabled>From</option>
                        <option value="bahawalpur">Bahawalpur</option>
                        <option value="faislabad">Faislabad</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                    </select>
                </div>

                {/* To Dropdown */}
                <div className="relative w-full sm:w-auto">
                    <IoLocationSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full sm:w-auto p-3 pl-10 pr-4 rounded-lg bg-white text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        <option value="" disabled>To</option>
                        <option value="hunza">Hunza</option>
                        <option value="naran">Naran</option>
                        <option value="skardu">Skardu</option>
                        <option value="swat">Swat</option>
                        <option value="neelum">Neelum</option>
                    </select>
                </div>

                {/* Date Picker */}
                <div className="relative w-full sm:w-auto">
                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full sm:w-auto p-3 pl-10 pr-4 rounded-lg bg-white text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-yellow-500 text-white px-4 sm:px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition-all w-full sm:w-auto"
                >
                    Search 🔍
                </button>
            </div>
        </div>
    );
};

export default Filter;
