import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              viewBox="0 0 70 1080"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-[100px]"
            >
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
              <g fill="url(#logoGradient)">
                <path d="M395.4,434l-63.4-59.8c-11.6-11.4-27.1-17.7-43.3-17.7H103.7c-34.1,0-61.8,27.7-61.8,61.8v184.4c0,16.6,6.7,32.5,18.5,44.1l63.4,59.8c11.6,11.3,27.1,17.7,43.3,17.7h185.1c34.1,0,61.8-27.7,61.8-61.8v-184.4c0-16.6-6.7-32.5-18.5-44.1h0ZM279.4,647.8c9.8,0,18.4-.8,25.8-2.5s13.7-4.1,18.9-7.4c9.2-5.9,13.9-10.4,20.6-23.8,1.4-2.8,4.7-4,7.6-2.7,2.1,1,3.4,3.1,3.4,5.3s-.1,1.3-.4,2l-18.8,50.6h-130.6c-4.4,0-8-3.6-8-8s.6-3.4,1.6-4.8l87.1-115.2c9.2-12.2.5-29.7-14.8-29.7s-11.9.3-16.8.9c-4.9.6-9.2,1.5-12.9,2.7-7.3,2.4-13.7,6.2-19.1,11.3-4.6,4.3-6.4,6.4-10.5,11.5-1.5,1.9-4.1,2.6-6.4,1.6-2.1-.9-3.3-2.9-3.3-5s.2-1.5.5-2.3l19.4-42.2h125.9c4.5,0,8.1,3.6,8.1,8.1s-.6,3.5-1.6,4.9l-88.9,117.8c-8.4,11.1-.5,27,13.4,27h0Z" />
              </g>
            </svg>

            <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Lenzro
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-900 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Portfolio
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Team
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block mx-3 my-2 bg-gradient-to-r from-blue-900 to-purple-600 text-white px-4 py-2 rounded-full text-center"
              >
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
