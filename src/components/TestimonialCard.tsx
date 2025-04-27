import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    imageUrl: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;