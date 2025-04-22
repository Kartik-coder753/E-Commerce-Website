import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/Product';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };
  
  // Calculate item total
  const itemTotal = (item.price * item.quantity).toFixed(2);
  
  // Calculate discounted price if available
  const discountedPrice = item.discount 
    ? (item.price - (item.price * item.discount / 100)).toFixed(2) 
    : null;
  
  // Calculate total with discount if applicable
  const total = discountedPrice 
    ? (parseFloat(discountedPrice) * item.quantity).toFixed(2)
    : itemTotal;
  
  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-full sm:w-1/4 md:w-1/6 mb-4 sm:mb-0">
        <Link to={`/products/${item.id}`}>
          <img 
            src={item.images[0]} 
            alt={item.name} 
            className="w-full h-32 object-cover rounded-md"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow px-4">
        <Link to={`/products/${item.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-purple-700 transition-colors">
            {item.name}
          </h3>
        </Link>
        
        {item.colors && item.colors.length > 0 && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Color:</span> {item.colors[0]}
          </p>
        )}
        
        {item.sizes && item.sizes.length > 0 && (
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Size:</span> {item.sizes[0]}
          </p>
        )}
        
        {/* Price Info */}
        <div className="mb-3">
          {discountedPrice ? (
            <div className="flex items-center">
              <span className="text-purple-700 font-bold">${discountedPrice}</span>
              <span className="text-gray-500 text-sm line-through ml-2">${item.price.toFixed(2)}</span>
              <span className="ml-2 text-sm text-red-500 font-medium">
                {item.discount}% OFF
              </span>
            </div>
          ) : (
            <span className="text-purple-700 font-bold">${item.price.toFixed(2)}</span>
          )}
        </div>
        
        {/* Quantity Controls */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button 
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="text-gray-600 hover:text-purple-700 p-1 rounded-full border border-gray-300 disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            
            <span className="mx-3 w-8 text-center">{item.quantity}</span>
            
            <button 
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={item.quantity >= item.stock}
              className="text-gray-600 hover:text-purple-700 p-1 rounded-full border border-gray-300 disabled:opacity-50"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="font-bold text-gray-800 mr-4">${total}</span>
            <button 
              onClick={handleRemove}
              className="text-gray-500 hover:text-red-600 p-1"
              aria-label="Remove item"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;