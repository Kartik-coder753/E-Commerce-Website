import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Facebook, Twitter, Instagram, Mail, 
  Phone, MapPin, CreditCard, Truck, Award, ShieldCheck
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <ShoppingBag className="mr-2 text-yellow-400" size={24} />
              <span className="text-xl font-bold text-white">ZAYRA</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium shopping experience with high-quality products and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">Account</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Information</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Fashion Street, Design District, FL 33137</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">support@zayra.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Truck className="text-yellow-400 mb-2" size={24} />
              <h4 className="text-sm font-medium">Free Shipping</h4>
              <p className="text-xs text-gray-400">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-yellow-400 mb-2" size={24} />
              <h4 className="text-sm font-medium">Secure Payments</h4>
              <p className="text-xs text-gray-400">Protected & encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-yellow-400 mb-2" size={24} />
              <h4 className="text-sm font-medium">Quality Guarantee</h4>
              <p className="text-xs text-gray-400">30-day money back</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="text-yellow-400 mb-2" size={24} />
              <h4 className="text-sm font-medium">Flexible Payment</h4>
              <p className="text-xs text-gray-400">Multiple payment methods</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ZAYRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;