import { Linkedin, Github, Twitter, Instagram, Music, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Team', href: '#team' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'E-commerce', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Music className="w-5 h-5" />, href: '#', name: 'TikTok' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
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

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with innovative digital solutions. From idea to execution, 
              we deliver cutting-edge technology that drives growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Lenzro Studio. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="mailto:team@lenzro.com" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                team@lenzro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
