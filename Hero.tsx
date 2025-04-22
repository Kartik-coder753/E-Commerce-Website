import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-violet-600 to-purple-800 text-white">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeIn">
            Elevate Your Style with <span className="text-yellow-400">ZAYRA</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Discover curated collections of premium fashion items that blend comfort, 
            style, and quality. Shop the latest trends and timeless classics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <ShoppingBag className="mr-2" size={20} />
              Shop Now
            </Link>
            <Link 
              to="/products?featured=true" 
              className="bg-transparent hover:bg-white/20 border-2 border-white py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <TrendingUp className="mr-2" size={20} />
              Featured Items
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,53.3C1120,53,1280,43,1360,37.3L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;