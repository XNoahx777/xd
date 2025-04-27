import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Trophy, Clock, Shield, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Carlos Morales',
      role: 'Founder & CEO',
      bio: 'With over 15 years in the cleaning industry, Carlos founded Energy Clean with a vision to provide exceptional cleaning services. As CEO and Administrator, he manages supplier relationships for office maintenance, ensuring top-quality service delivery.',
      imageUrl: 'https://images.pexels.com/photos/7432/pexels-photo-7432.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Gualberto Morales',
      role: 'Co-CEO',
      bio: 'With over 10 years of experience in the cleaning industry, Gualberto brings extensive expertise in professional cleaning services. His dedication to excellence has helped establish Energy Clean as a leader in the industry.',
      imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Isabella Valencia',
      role: 'Operations Manager',
      bio: 'Originally from Colombia, Isabella brings international expertise in operations management. Her innovative approaches to service delivery have significantly improved our cleaning processes and client satisfaction.',
      imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Energy Clean LLC</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We're a dedicated team of cleaning professionals committed to providing exceptional 
            cleaning services throughout Connecticut.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Energy Clean LLC was founded in Norwich, Connecticut with a simple mission: to provide exceptional 
                cleaning services that make spaces not just clean, but truly shine with energy and vitality.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small residential cleaning service has grown into a comprehensive 
                cleaning company offering a wide range of services for both residential and commercial clients.
              </p>
              <p className="text-gray-600 mb-4">
                Our growth has been fueled by our unwavering commitment to quality, reliability, and 
                customer satisfaction. We've built our reputation one clean space at a time, earning the 
                trust of hundreds of satisfied clients across Connecticut.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a leader in the cleaning industry, known for our attention to 
                detail, professional staff, and eco-friendly cleaning practices. 
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3760609/pexels-photo-3760609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Our cleaning team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Energy Clean LLC, from how we clean 
              to how we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 rounded-full p-3 inline-block mb-4">
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every cleaning job, no matter how big or small. 
                Our attention to detail ensures spotless results every time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 rounded-full p-3 inline-block mb-4">
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, every time. Our clients can depend on us to deliver 
                consistent, high-quality cleaning services without fail.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 rounded-full p-3 inline-block mb-4">
                <Shield className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings. We treat 
                our clients' properties with respect and care.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 rounded-full p-3 inline-block mb-4">
                <Users className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are at the center of everything we do. We listen to your needs 
                and tailor our services accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals who ensure every cleaning job meets our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(member => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Choose Energy Clean?</h2>
              <p className="text-gray-600 mb-8">
                With so many cleaning services to choose from, here's why Energy Clean LLC 
                stands out from the competition:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">Our cleaning professionals have years of experience and receive ongoing training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Comprehensive Services</h3>
                    <p className="text-gray-600">From offices to homes to outdoor spaces, we offer a complete range of cleaning solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Eco-Friendly Approach</h3>
                    <p className="text-gray-600">We use environmentally safe cleaning products that are effective yet gentle on the planet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Customized Cleaning Plans</h3>
                    <p className="text-gray-600">We create personalized cleaning plans based on your specific needs and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">If you're not completely satisfied with our work, we'll make it right—guaranteed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4107098/pexels-photo-4107098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Office cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4107093/pexels-photo-4107093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Home cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5589396/pexels-photo-5589396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Garden maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4107067/pexels-photo-4107067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Window cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Energy Clean Difference?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Contact us today to schedule a cleaning service or request a free quote.
            Let us show you why we're the preferred cleaning service in Connecticut.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-yellow-500 hover:bg-navy-900 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="bg-navy-900 text-white hover:bg-navy-800 font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;