import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, Menu, X, 
  ShoppingBag, LogIn, Heart, Home
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-gradient-to-r from-violet-600 to-purple-800 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag 
              className={`mr-2 ${isScrolled ? 'text-purple-700' : 'text-yellow-400'}`} 
              size={28} 
            />
            <span className={`text-2xl font-extrabold tracking-tight ${
              isScrolled ? 'text-purple-700' : 'text-white'
            }`}>
              ZAYRA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" icon={<Home size={18} />} isScrolled={isScrolled} />
            <NavLink href="/products" label="Shop" icon={<ShoppingBag size={18} />} isScrolled={isScrolled} />
            <NavLink href="/cart" label="Cart" icon={<ShoppingCart size={18} />} isScrolled={isScrolled} />
            {isAuthenticated ? (
              <NavLink href="/admin" label="Admin" icon={<User size={18} />} isScrolled={isScrolled} />
            ) : (
              <NavLink href="/login" label="Login" icon={<LogIn size={18} />} isScrolled={isScrolled} />
            )}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-64 focus:outline-none text-gray-700"
            />
            <button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700 p-2 text-white"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Cart and Mobile Menu Icons */}
          <div className="flex items-center">
            {/* Cart Icon with Counter */}
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className={isScrolled ? 'text-purple-700' : 'text-white'} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden focus:outline-none"
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-purple-700' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-purple-700' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <form onSubmit={handleSearch} className="flex items-center mb-4 bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 w-full focus:outline-none text-gray-700"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 p-2 text-white"
              >
                <Search size={20} />
              </button>
            </form>
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/" label="Home" icon={<Home size={18} />} />
              <MobileNavLink href="/products" label="Shop" icon={<ShoppingBag size={18} />} />
              <MobileNavLink href="/cart" label="Cart" icon={<ShoppingCart size={18} />} />
              {isAuthenticated ? (
                <>
                  <MobileNavLink href="/admin" label="Admin" icon={<User size={18} />} />
                  <button 
                    onClick={logout}
                    className="flex items-center px-4 py-2 text-white hover:bg-purple-700 rounded"
                  >
                    <LogIn size={18} className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <MobileNavLink href="/login" label="Login" icon={<LogIn size={18} />} />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon, isScrolled }) => (
  <Link 
    to={href} 
    className={`flex items-center ${
      isScrolled ? 'text-gray-800 hover:text-purple-700' : 'text-white hover:text-yellow-300'
    } transition-colors duration-200`}
  >
    <span className="mr-1">{icon}</span>
    <span>{label}</span>
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, icon }) => (
  <Link 
    to={href} 
    className="flex items-center px-4 py-2 text-white hover:bg-purple-700 rounded"
  >
    <span className="mr-2">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Header;