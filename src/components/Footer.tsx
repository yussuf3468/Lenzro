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
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Lenzro
              </span>
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
