import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    description: "Luxurious cotton t-shirt with a comfortable fit. Perfect for everyday wear with its breathable fabric and stylish design.",
    price: 29.99,
    images: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
      "https://images.pexels.com/photos/5698850/pexels-photo-5698850.jpeg",
      "https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg"
    ],
    category: "T-Shirts",
    rating: 4.5,
    reviews: 128,
    stock: 50,
    featured: true,
    colors: ["White", "Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Designer Denim Jeans",
    description: "High-quality denim jeans with a modern cut. Features distressed details and a comfortable stretch fit.",
    price: 79.99,
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg",
      "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg"
    ],
    category: "Pants",
    rating: 4.7,
    reviews: 95,
    stock: 30,
    discount: 10,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag with multiple compartments. Perfect for both casual and formal occasions.",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      "https://images.pexels.com/photos/5699752/pexels-photo-5699752.jpeg",
      "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg"
    ],
    category: "Accessories",
    rating: 4.8,
    reviews: 76,
    stock: 15,
    featured: true,
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: 4,
    name: "Classic Oxford Shirt",
    description: "Timeless oxford shirt perfect for business casual or formal settings. Made from premium cotton with a comfortable fit.",
    price: 59.99,
    images: [
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
      "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
      "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg"
    ],
    category: "Shirts",
    rating: 4.6,
    reviews: 114,
    stock: 40,
    colors: ["White", "Blue", "Pink", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 5,
    name: "Summer Floral Dress",
    description: "Beautiful floral dress perfect for summer. Features a flattering silhouette and lightweight fabric.",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/7691218/pexels-photo-7691218.jpeg",
      "https://images.pexels.com/photos/6207628/pexels-photo-6207628.jpeg",
      "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg"
    ],
    category: "Dresses",
    rating: 4.9,
    reviews: 67,
    stock: 20,
    featured: true,
    discount: 15,
    colors: ["Floral", "Blue", "White"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Athletic Running Shoes",
    description: "High-performance running shoes with superior cushioning and support. Designed for comfort and endurance.",
    price: 119.99,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
      "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg"
    ],
    category: "Shoes",
    rating: 4.7,
    reviews: 152,
    stock: 25,
    colors: ["Black/Red", "Blue/White", "Gray/Orange"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 7,
    name: "Cashmere Blend Sweater",
    description: "Luxurious cashmere blend sweater that's perfect for colder weather. Features a classic design with ribbed cuffs and hem.",
    price: 149.99,
    images: [
      "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
      "https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg",
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg"
    ],
    category: "Sweaters",
    rating: 4.8,
    reviews: 43,
    stock: 15,
    discount: 5,
    colors: ["Camel", "Gray", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Aviator Sunglasses",
    description: "Classic aviator sunglasses with UV protection. Stylish design that complements any outfit.",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
      "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg"
    ],
    category: "Accessories",
    rating: 4.5,
    reviews: 98,
    stock: 30,
    colors: ["Gold/Brown", "Silver/Black", "Black/Gray"]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsBySearch = (searchTerm: string): Product[] => {
  const term = searchTerm.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
  );
};