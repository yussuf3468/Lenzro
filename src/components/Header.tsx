import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Lenzro
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Portfolio</a>
            <a href="#team" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-gradient-to-r from-blue-900 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Portfolio</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</a>
              <a href="#contact" className="block mx-3 my-2 bg-gradient-to-r from-blue-900 to-purple-600 text-white px-4 py-2 rounded-full text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
