import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, MicOff as Office, Flower, Droplets, Wind, Cloud } from 'lucide-react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="h-6 w-6" />;
      case 'Office':
        return <Office className="h-6 w-6" />;
      case 'Flower':
        return <Flower className="h-6 w-6" />;
      case 'Droplets':
        return <Droplets className="h-6 w-6" />;
      case 'Wind':
        return <Wind className="h-6 w-6" />;
      case 'Cloud':
        return <Cloud className="h-6 w-6" />;
      default:
        return <Home className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 bg-yellow-500 rounded-full p-3 text-white">
          {getIcon(service.icon)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-navy-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link 
          to={`/services`} 
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium transition-colors"
        >
          Learn more
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;