import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, X, Menu, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Sparkles className="text-yellow-500 h-8 w-8 mr-2" />
            <span className="font-bold text-2xl text-navy-900">
              <span className="text-yellow-500">Energy</span> Clean LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/services" label="Services" isScrolled={isScrolled} />
            <NavLink to="/about" label="About Us" isScrolled={isScrolled} />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            <a 
              href="tel:+18602226516" 
              className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              (860) 222-6516
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-navy-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-navy-900' : 'text-navy-900'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center">
              <Sparkles className="text-yellow-500 h-8 w-8 mr-2" />
              <span className="font-bold text-2xl text-navy-900">
                <span className="text-yellow-500">Energy</span> Clean LLC
              </span>
            </Link>
            <button 
              className="text-navy-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/services" label="Services" />
            <MobileNavLink to="/about" label="About Us" />
            <MobileNavLink to="/contact" label="Contact" />
            <a 
              href="tel:+18602226516" 
              className="flex items-center bg-yellow-500 text-white px-4 py-3 rounded-lg mt-4 font-medium justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (860) 222-6516
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors duration-300 ${
        isActive 
          ? 'text-yellow-500' 
          : isScrolled
            ? 'text-navy-900 hover:text-yellow-500'
            : 'text-navy-900 hover:text-yellow-500'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-lg py-2 ${isActive ? 'text-yellow-500 font-medium' : 'text-navy-900'}`}
    >
      {label}
    </Link>
  );
};

export default Header;