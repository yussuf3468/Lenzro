import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-purple-700 overflow-hidden text-white"
    >
      {/* Abstract Glow Elements */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-40 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm mb-6 shadow-md">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="uppercase text-sm font-medium tracking-wide text-white/90">
              Powering Innovation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Shape Tomorrow’s
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Lenzro crafts high-impact digital experiences for forward-thinking businesses. 
            Whether you're launching, scaling, or transforming — we bring ideas to life with design, code, and strategy.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-white text-blue-900 font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-white/70 mt-1 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
