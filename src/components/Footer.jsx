import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">About SavorySpot</h3>
          <p className="text-sm text-gray-300">
            SavorySpot is your ultimate destination for delicious recipes from around the globe.
            Whether you're a beginner or a culinary expert, we have something for everyone.
            Join us and explore the world of flavors!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cuisines" className="hover:underline hover:text-primary">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>

        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us on social media for the latest updates and recipe inspiration.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter to receive the latest recipes and updates directly to your inbox.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-deeper-light text-white py-2 px-4 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-col items-center justify-between space-y-4 sm:space-y-0 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SavorySpot. All rights reserved.
          </p>
          <div className="flex flex-col justify-center items-center space-x-4 text-sm md:flex-row">
            <a href="/privacy" className="hover:underline hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
