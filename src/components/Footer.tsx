import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Sparkles className="text-yellow-500 h-8 w-8 mr-2" />
              <span className="font-bold text-2xl text-white">
                <span className="text-yellow-500">Energy</span> Clean
              </span>
            </Link>
            <p className="mb-6 text-gray-300">
              Professional cleaning services for offices, homes, gardens, pools, and more. We ensure spotless results every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Office Cleaning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Home Cleaning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Garden Maintenance</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Pool Cleaning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Leaf Collection</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Snow Removal</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Norwich, Connecticut</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <a href="tel:+18602226516" className="text-gray-300 hover:text-yellow-500 transition-colors">(860) 222-6516</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <a href="mailto:energycleanllc@gmail.com" className="text-gray-300 hover:text-yellow-500 transition-colors">energycleanllc@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Monday - Friday: 8AM - 7PM</p>
                  <p className="text-gray-300">Saturday: 9AM - 5PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Energy Clean LLC. All rights reserved.
          </p>
          <div>
            <p className="text-gray-400 text-sm">
              Designed with <span className="text-yellow-500">♥</span> for spotless spaces
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;