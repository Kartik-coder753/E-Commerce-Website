export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  featured?: boolean;
  discount?: number;
  colors?: string[];
  sizes?: string[];
}