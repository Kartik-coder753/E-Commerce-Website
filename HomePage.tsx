import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import Testimonials from '../components/home/Testimonials';
import { ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-purple-700 mb-2" size={28} />
              <h3 className="text-gray-800 font-medium">Secure Shopping</h3>
              <p className="text-gray-600 text-sm">Protected & encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="text-purple-700 mb-2" size={28} />
              <h3 className="text-gray-800 font-medium">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">Free on orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="text-purple-700 mb-2" size={28} />
              <h3 className="text-gray-800 font-medium">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30 day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-purple-700 mb-2" size={28} />
              <h3 className="text-gray-800 font-medium">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Categories */}
      <CategorySection />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-purple-100 mb-8">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-700"
                required
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;