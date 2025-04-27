import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Office Cleaning',
      description: 'Professional cleaning services for offices of all sizes, ensuring a clean and productive work environment.',
      icon: 'Office',
      imageUrl: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'House Cleaning',
      description: 'Comprehensive house cleaning services tailored to your specific needs and preferences.',
      icon: 'Home',
      imageUrl: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Garden Maintenance',
      description: 'Keep your garden looking beautiful with our professional garden maintenance services.',
      icon: 'Flower',
      imageUrl: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Pool Cleaning',
      description: 'Regular pool cleaning and maintenance to keep your pool sparkling clean and ready for use.',
      icon: 'Droplets',
      imageUrl: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Leaf Collection',
      description: 'Professional leaf removal services to keep your property clean and tidy during fall.',
      icon: 'Wind',
      imageUrl: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Snow Removal',
      description: 'Reliable snow removal services to keep your property safe and accessible during winter.',
      icon: 'Cloud',
      imageUrl: 'https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Big Y',
      role: 'Supermarket Chain',
      content: 'Energy Clean has transformed our stores. Their attention to detail is remarkable, and our customers notice the difference in cleanliness.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Walgreens',
      role: 'Norwich Branch',
      content: 'We\'ve been using Energy Clean for our store cleaning needs for over a year now. They are reliable, thorough, and always go the extra mile.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Carlos Morales',
      role: 'Satisfied Customer',
      content: 'Energy Clean handles all our properties in Norwich. Their snow removal service is particularly impressive – they\'re always prompt even after the heaviest snowfalls.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive cleaning solutions tailored to your specific needs. 
              From office spaces to residential properties across Connecticut, we ensure spotless results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">Why Choose Energy Clean?</h2>
              <p className="text-gray-600 mb-8">
                With years of experience and a commitment to excellence, Energy Clean LLC has become the 
                trusted choice for cleaning services across Connecticut. Here's what sets us apart:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">Our team consists of highly trained and experienced cleaning professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Eco-Friendly Products</h3>
                    <p className="text-gray-600">We use environmentally friendly cleaning products that are safe for your family and the planet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">We tailor our services to meet your specific cleaning needs and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">We're not satisfied until you are. Our work comes with a 100% satisfaction guarantee.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium mt-8 transition-colors"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cleaning team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 rounded-lg p-6 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-white fill-current" />
                  <Star className="h-5 w-5 text-white fill-current" />
                  <Star className="h-5 w-5 text-white fill-current" />
                  <Star className="h-5 w-5 text-white fill-current" />
                  <Star className="h-5 w-5 text-white fill-current" />
                </div>
                <p className="text-white font-medium">
                  "The most reliable cleaning service in Norwich. Highly recommended!"
                </p>
                <p className="text-white text-sm mt-2">— Big Y Supermarket</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers in Connecticut have to say about 
              our cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Cleaner Space?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Contact us today to schedule a cleaning service or request a free quote.
            We're ready to help you achieve a cleaner, healthier environment in Norwich and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-yellow-500 hover:bg-navy-900 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/services" 
              className="bg-navy-900 text-white hover:bg-navy-800 font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;