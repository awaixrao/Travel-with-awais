import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black/70 text-white py-8">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
                {/* Payment Section */}
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Payment</h3>
                    <div className="flex items-center space-x-4">
                        <img src="https://www.completesports.com/wp-content/uploads/2024/03/easypaisa.jpg" alt="EasyPaisa" className="h-8" />
                        <img src="https://iconape.com/wp-content/png_logo_vector/jazz-cash-logo.png" alt="JazzCash" className="h-8" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Uo9ycNjSSn3kZopn6gAUQZdyQTbI4skHUw&s" alt="Visa" className="h-8" />
                        <img src="https://cdn-icons-png.flaticon.com/512/8043/8043680.png" alt="Bank Transfer" className="h-8" />
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="px-4 py-2 rounded-l-md border-none focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media Section */}
                <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold mb-2 lg:hidden">Keep in Touch</h3>
                    <a href="#" className="text-blue-500 hover:text-white">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-white">
                        <FaLinkedinIn size={24} />
                    </a>
                </div>
            </div>

            <hr className="my-6 border-gray-700" />

        {/* Footer Links */}
<div className="container mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
    <div className="flex flex-wrap justify-center space-x-4">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">FAQs</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
    </div>
</div>

            {/* Copyright */}
            <div className="text-center mt-6 text-gray-500">
                <p>&copy; 2024 TravelWithAwais. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
