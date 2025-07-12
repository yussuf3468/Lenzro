import React from 'react';
import { Target, Heart, Zap, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality",
      description: "Every project is crafted with attention to detail and excellence."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Fast delivery without compromising on quality or functionality."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to your growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">Lenzro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking digital agency dedicated to empowering small and medium-sized businesses 
            with innovative technology solutions. Our mission is to bridge the gap between your vision and 
            digital reality through expert craftsmanship and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-900 to-purple-600 text-white p-3 rounded-xl w-fit mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h3>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              "At Lenzro, we believe every business deserves access to world-class digital solutions. 
              We're not just service providers – we're your technology partners, committed to turning 
              your ideas into powerful digital experiences that drive growth and success."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;