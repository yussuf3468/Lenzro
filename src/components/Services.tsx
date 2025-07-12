import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Mail, 
  MessageCircle, 
  Server, 
  Package 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design & Branding",
      description: "Visual identity design, logos, marketing materials, and brand strategy development."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications that enhance user experience."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "SEO, social media marketing, and digital advertising to grow your online presence."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email & Domain Setup",
      description: "Professional email solutions and domain registration with ongoing support."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Tech Consultation",
      description: "Strategic technology consulting to help you make informed digital decisions."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hosting & Infrastructure",
      description: "Reliable hosting solutions with scalable infrastructure and 24/7 monitoring."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management SaaS",
      description: "Custom inventory management systems to streamline your business operations."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-purple-100">
              <div className="bg-gradient-to-r from-blue-900 to-purple-600 text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="bg-gradient-to-r from-blue-900 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;