import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence and data visualization.",
      image: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      category: "SaaS Development"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Firebase", "Biometric", "Security"],
      category: "Mobile Development"
    },
    {
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, website, and marketing materials.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Logo Design", "Web Design", "Print"],
      category: "Design & Branding"
    },
    {
      title: "Inventory Management System",
      description: "Custom inventory tracking system with barcode scanning and reporting.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Express", "MySQL", "Barcode"],
      category: "Business Solutions"
    },
    {
      title: "Digital Marketing Campaign",
      description: "Comprehensive digital marketing strategy resulting in 300% ROI increase.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SEO", "Social Media", "PPC", "Analytics"],
      category: "Digital Marketing"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <button className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="bg-gradient-to-r from-blue-900 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;