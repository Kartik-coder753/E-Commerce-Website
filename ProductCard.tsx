import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  // Calculate discounted price if available
  const discountedPrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2) 
    : null;

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Discount tag */}
      {product.discount && (
        <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold z-10">
          {product.discount}% OFF
        </div>
      )}
      
      {/* Favorite button */}
      <button 
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-70 hover:opacity-100 z-10"
        aria-label="Add to favorites"
      >
        <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Product image */}
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Product details */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
            {/* Rating */}
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          {/* Price */}
          <div className="flex justify-between items-center">
            <div>
              {discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-purple-700 font-bold">${discountedPrice}</span>
                  <span className="text-gray-500 text-sm line-through ml-2">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-purple-700 font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Add to cart button */}
            <button 
              onClick={handleAddToCart}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-all transform hover:scale-105"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;