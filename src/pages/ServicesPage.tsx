import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Office Cleaning',
      description: 'We provide comprehensive cleaning services for offices of all sizes. Our professional team ensures a clean, healthy, and productive workplace for your employees.',
      features: [
        'Reception and common areas cleaning',
        'Workstation and desk sanitization',
        'Restroom deep cleaning and sanitization',
        'Kitchen and break room cleaning',
        'Floor cleaning (vacuuming, mopping)',
        'Window cleaning',
        'Trash removal and recycling',
        'Special attention to high-touch surfaces'
      ],
      imageUrl: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'House Cleaning',
      description: 'Our residential cleaning services are tailored to meet your specific needs. We use eco-friendly products to ensure a clean and healthy home environment for you and your family.',
      features: [
        'Living spaces dusting and cleaning',
        'Kitchen deep cleaning',
        'Bathroom sanitization',
        'Bedroom cleaning',
        'Floor vacuuming and mopping',
        'Window cleaning',
        'Furniture cleaning',
        'Special requests accommodated'
      ],
      imageUrl: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Garden Maintenance',
      description: 'Keep your garden looking beautiful year-round with our professional garden maintenance services. We handle everything from routine maintenance to seasonal care.',
      features: [
        'Lawn mowing and edging',
        'Hedge trimming and shaping',
        'Weeding and mulching',
        'Plant health care',
        'Garden bed maintenance',
        'Pruning and trimming',
        'Fertilization',
        'Seasonal garden cleanup'
      ],
      imageUrl: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Pool Cleaning',
      description: 'Our professional pool cleaning services ensure your pool remains clean, safe, and ready for use throughout the swimming season.',
      features: [
        'Water chemical balance testing',
        'Pool vacuuming',
        'Skimming the water surface',
        'Filter cleaning and maintenance',
        'Algae prevention and treatment',
        'Pool equipment inspection',
        'Tile and wall cleaning',
        'Seasonal pool opening and closing'
      ],
      imageUrl: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Leaf Collection',
      description: 'Our leaf collection service keeps your property clean and tidy during fall. We efficiently remove leaves from your lawn, garden, and other outdoor spaces.',
      features: [
        'Complete yard leaf removal',
        'Gutter cleaning',
        'Driveway and walkway clearing',
        'Lawn protection from leaf damage',
        'Garden bed leaf removal',
        'Proper leaf disposal or composting',
        'Regular scheduled service',
        'One-time or seasonal services available'
      ],
      imageUrl: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Snow Removal',
      description: 'Our reliable snow removal services keep your property safe and accessible during winter. We offer both residential and commercial snow removal services.',
      features: [
        'Driveway and walkway clearing',
        'Sidewalk shoveling',
        'Ice removal and prevention',
        'Salt and de-icing application',
        'Snow plowing for larger areas',
        'Roof snow removal',
        '24/7 emergency service',
        'Seasonal contracts available'
      ],
      imageUrl: 'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cleaning Services</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            From spotless offices to pristine homes, we offer a comprehensive range of professional 
            cleaning services to meet all your needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`mb-20 ${
                index % 2 === 0 
                  ? 'lg:flex lg:flex-row' 
                  : 'lg:flex lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-lg text-navy-900 mb-4">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
                >
                  Request This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-500 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Cleaning Solution?</h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              We understand that every space is unique. Contact us today to discuss 
              your specific cleaning needs and get a customized solution.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-yellow-500 hover:bg-navy-900 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;