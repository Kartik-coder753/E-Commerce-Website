import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  // Get product data
  const product = getProductById(Number(id));
  
  // Set default color and size when product loads
  useEffect(() => {
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
        <Link 
          to="/products" 
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Back to All Products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Calculate discounted price if available
  const discountedPrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2) 
    : null;
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6 flex items-center">
          <Link to="/" className="hover:text-purple-700">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-purple-700">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-purple-700">
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-700 font-medium truncate">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Images */}
            <div className="p-6">
              {/* Main Image */}
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center h-80">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="object-contain h-full w-full"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                      selectedImage === index ? 'border-purple-500' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 flex flex-col">
              {/* Title and Rating */}
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {discountedPrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-700">${discountedPrice}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                    <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                      {product.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-purple-700">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
                  <div className="flex space-x-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-full border ${
                          selectedColor === color 
                            ? 'border-purple-700 bg-purple-50 text-purple-700' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md ${
                          selectedSize === size 
                            ? 'bg-purple-700 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity and Add to Cart */}
              <div className="mt-auto">
                <div className="flex items-center mb-6">
                  <span className="text-sm font-medium text-gray-700 mr-3">Quantity</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1}
                      className="px-3 py-1 text-gray-600 hover:text-purple-700 disabled:opacity-50"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                      disabled={quantity >= product.stock}
                      className="px-3 py-1 text-gray-600 hover:text-purple-700 disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    {product.stock} available
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-grow bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-md transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} />
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-md transition-colors"
                    aria-label="Share product"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details and Shipping Info */}
          <div className="border-t border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold mb-4">Product Details</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel 
                    tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. 
                    Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <p className="text-gray-600">
                    Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam 
                    nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Shipping & Returns</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Truck className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Secure payments with encrypted checkout</span>
                  </li>
                  <li className="flex items-start">
                    <RotateCcw className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={18} />
                    <span className="text-gray-600">30-day money back guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;