import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CalendarCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-yellow-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center bg-yellow-50 text-yellow-600 rounded-full px-4 py-2 text-sm font-medium inline-block mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Professional Cleaning Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              <span className="text-yellow-500">Sparkling Clean</span> Spaces for Every Need
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Energy Clean LLC provides exceptional cleaning services for offices, homes, gardens, pools, 
              leaf collection, and snow removal. Our professional team delivers spotless results every time.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link 
                to="/contact" 
                className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/services" 
                className="flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="flex items-center text-gray-600">
              <CalendarCheck className="h-5 w-5 text-yellow-500 mr-2" />
              <span>Same-day service available for emergencies</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional cleaning service" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-500 rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-navy-900 rounded-full opacity-20 z-0"></div>
            
            {/* Floating features */}
            <div className="absolute top-5 -right-10 bg-white rounded-lg p-4 shadow-lg z-20 transform rotate-3 animate-pulse-slow">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <Sparkles className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium text-navy-900">Eco-Friendly</p>
                  <p className="text-sm text-gray-500">Safe for your family</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 right-12 bg-white rounded-lg p-4 shadow-lg z-20 transform -rotate-2 animate-pulse-slow animation-delay-500">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-navy-900">100% Satisfaction</p>
                  <p className="text-sm text-gray-500">Guaranteed results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;