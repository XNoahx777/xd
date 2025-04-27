import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have questions or ready to schedule a cleaning service? 
            We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're always ready to answer your questions and provide the information you need about our cleaning services. 
                Contact us using any of the methods below, or fill out the form to schedule a service or request a quote.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-1">Phone</h3>
                    <a href="tel:+18602226516" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      (860) 222-6516
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-1">Email</h3>
                    <a href="mailto:energycleanllc@gmail.com" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      energycleanllc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Norwich, Connecticut
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8AM - 7PM<br />
                      Saturday: 9AM - 5PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-navy-900 mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the following areas and surrounding communities:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">City Name</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Request a Quote</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center mb-6">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Thank you for your message! We'll get back to you shortly.</span>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition-all"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition-all"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="House Cleaning">House Cleaning</option>
                      <option value="Garden Maintenance">Garden Maintenance</option>
                      <option value="Pool Cleaning">Pool Cleaning</option>
                      <option value="Leaf Collection">Leaf Collection</option>
                      <option value="Snow Removal">Snow Removal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition-all"
                      placeholder="Tell us about your needs and any specific requirements"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office or give us a call. We're conveniently located to serve the entire region.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              {/* Replace with an actual map component in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Map showing our location at Norwich, Connecticut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our cleaning services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-navy-900 mb-2">What areas do you service?</h3>
              <p className="text-gray-600">
                We provide cleaning services throughout Norwich, Connecticut and surrounding areas. 
                Contact us to confirm if we serve your specific location.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-navy-900 mb-2">How often should I schedule cleaning services?</h3>
              <p className="text-gray-600">
                It depends on your specific needs. For offices, weekly or bi-weekly cleaning is common. 
                For homes, it varies from weekly to monthly. We can help you determine the right frequency for your situation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-navy-900 mb-2">Are your cleaning products safe for children and pets?</h3>
              <p className="text-gray-600">
                Yes, we use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. 
                If you have specific concerns or preferences, please let us know.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-navy-900 mb-2">Do I need to be present during the cleaning?</h3>
              <p className="text-gray-600">
                No, you don't need to be present. Many of our clients provide us with a key or access code. 
                All of our staff are thoroughly vetted and trustworthy.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-navy-900 mb-2">What's included in your standard cleaning service?</h3>
              <p className="text-gray-600">
                Our standard cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, 
                and general tidying. We also offer deep cleaning services for more thorough cleaning needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;