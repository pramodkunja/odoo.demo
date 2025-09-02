import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Building2 } from 'lucide-react';
import oddoo from '../assets/generated-image.png';
import logo from '../assets/sria infotech.png'


interface HeroSectionProps {
  onScrollNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Background Video Simulation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div className="w-full h-full bg-cover bg-center opacity-30" 
             style={{
               backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>
        
        {/* Animated overlay elements */}
<div className="absolute inset-0 z-20 flex items-center justify-center">
  {/* Purple Balloon with Logo Inside */}
  <div className="absolute top-20 left-20 w-48 h-48 bg-purple-600/10 rounded-full animate-pulse flex items-center justify-center">
    <img 
      src={logo} 
      alt="Sria Infotech Logo" 
      className="w-40 h-auto drop-shadow-lg"  // bigger logo
    />
  </div>

  {/* Other Balloons */}
  <div className="absolute bottom-32 right-32 w-32 h-32 bg-orange-500/10 rounded-full animate-bounce"></div>
  <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-yellow-400/10 rounded-full animate-ping"></div>
</div>



      </div>

      <div className="relative z-30 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo/Brand Section */}
            <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                 <img src={oddoo}/>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">ERP</div>
                  <div className="text-sm text-purple-300">SOLUTION</div>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Odoo ERP
              </span>
              <br />
              <span className="text-yellow-400">DEMO</span>
            </h1>

            {/* Subtitle */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-4">Proposal for</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8">Elegant Infra Developers</h2>
            </div>

            {/* Description */}
            <p className={`text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Transform your construction business with a comprehensive ERP solution designed for modern infrastructure development
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                onClick={onScrollNext}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </button>
              
              <button className="flex items-center space-x-2 text-white/80 hover:text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                <a href="https://youtu.be/nbso3NVz3p8?si=dVbWHIEWf4Uleibh" target="_blank" rel="noopener noreferrer"> 
                <span>Watch Demo</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button 
          onClick={onScrollNext}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;