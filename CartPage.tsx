import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

const CartPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Shopping Cart</h1>
        <p className="text-gray-600 mb-8">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
            >
              <ShoppingCart size={20} className="mr-2" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
                  <button 
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cart.map(item => (
                    <div key={item.id} className="px-6">
                      <CartItem item={item} />
                    </div>
                  ))}
                </div>
                
                <div className="p-6 border-t">
                  <Link 
                    to="/products" 
                    className="text-purple-700 hover:text-purple-900 font-medium inline-flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2 transform rotate-180" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;