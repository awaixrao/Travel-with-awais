import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">We'd love to hear from you! Whether you have a question about a tour, need assistance, or just want to share your travel story, feel free to get in touch with us.</p>
      </div>

      {/* Contact Form and Information */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have a question or need assistance with planning your trip? We are here to help! You can contact us using the following details:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">awaixxxxx.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">+92 3057836168</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Office Location</h3>
              <p className="text-gray-600">Lodhran, Pakistan</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Working Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Our Location</h2>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.4420709633614!2d71.49349981104007!3d29.561738275066652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ba1610b3a4a27%3A0x614171ed8d1c9c9a!2sAwais%20Rao%20House!5e0!3m2!1sen!2s!4v1727694034843!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
        ></iframe>

      </div>
    </section>
  );
};

export default ContactUs;
