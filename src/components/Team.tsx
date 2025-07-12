import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Jessica Park",
      role: "Lead Designer",
      bio: "Creative designer specializing in user experience and brand identity with award-winning projects.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      bio: "Backend specialist with expertise in cloud architecture and database optimization.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Maria Santos",
      role: "Digital Marketing Lead",
      bio: "Growth marketing expert helping businesses achieve 10x growth through strategic digital campaigns.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    <a href={member.social.linkedin} className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.github} className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.social.twitter} className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-purple-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a href="mailto:careers@lenzro.com" className="bg-gradient-to-r from-blue-900 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;