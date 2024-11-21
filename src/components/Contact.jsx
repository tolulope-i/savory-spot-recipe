import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

  }, [])

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[70vh]"
        style={{
          backgroundImage: "url('images/food6.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-white md:text-6xl">
            Get in Touch with Us
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">
              We'd Love to Hear From You
            </h2>
            <p className="mb-4 text-gray-600">
              Whether you have questions or want to share feedback, feel free
              to drop us a message. Our team is ready to help you!
            </p>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deeper-light focus:outline-none sm:text-md"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail@example.com"
                  className="mt-1 block w-full px-4 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deeper-light focus:outline-none sm:text-md"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 block w-full px-4 py-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deeper-light focus:outline-none sm:text-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-accent text-white rounded-lg hover:bg-primary focus:outline-none focus:ring-4 focus:ring-orange-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-center text-primary font-semibold text-3xl">
                Contact Details
              </h2>
            </div>
            {/* Location */}
            <div className="flex items-center space-x-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-primary w-8 h-8"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  123 Culinary Ave, Foodie City, FL 45678
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-6">
              <FontAwesomeIcon icon={faPhone} className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+234 816 7351 891</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-6">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@savoryspot.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-6">
              <FontAwesomeIcon icon={faClock} className="text-primary w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Mon - Fri: 9 AM - 6 PM <br />
                  Sat: 10 AM - 4 PM <br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
