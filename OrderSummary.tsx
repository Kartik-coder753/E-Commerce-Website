import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface OrderSummaryProps {
  isCheckoutPage?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ isCheckoutPage = false }) => {
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const discount = promoApplied ? (subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;
  
  const handlePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'zayra10') {
      setPromoApplied(true);
    }
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
        Order Summary
      </h3>
      
      {/* Order Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({cart.length} items)</span>
          <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span className="text-gray-800 font-medium">${shipping.toFixed(2)}</span>
          )}
        </div>
        
        {promoApplied && (
          <div className="flex justify-between text-green-600">
            <span>Discount (10%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span className="text-gray-800">Total</span>
            <span className="text-purple-700">${total.toFixed(2)}</span>
          </div>
          
          {shipping === 0 && (
            <p className="text-sm text-green-600 mt-1">
              Free shipping on orders over $50
            </p>
          )}
        </div>
      </div>
      
      {/* Promo Code */}
      {!promoApplied && (
        <form onSubmit={handlePromoCode} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300 transition-colors"
            >
              Apply
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Try using code "ZAYRA10" for 10% off
          </p>
        </form>
      )}
      
      {/* Checkout Button */}
      {!isCheckoutPage && (
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Proceed to Checkout
        </button>
      )}
      
      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center">
            <CreditCard className="text-gray-600 mb-1" size={18} />
            <span className="text-xs text-gray-600">Secure Payment</span>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="text-gray-600 mb-1" size={18} />
            <span className="text-xs text-gray-600">Fast Shipping</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="text-gray-600 mb-1" size={18} />
            <span className="text-xs text-gray-600">Buyer Protection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;