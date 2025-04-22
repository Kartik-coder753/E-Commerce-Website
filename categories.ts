export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
    count: 24
  },
  {
    id: "pants",
    name: "Pants",
    image: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg",
    count: 18
  },
  {
    id: "shirts",
    name: "Shirts",
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    count: 20
  },
  {
    id: "dresses",
    name: "Dresses",
    image: "https://images.pexels.com/photos/6207628/pexels-photo-6207628.jpeg",
    count: 32
  },
  {
    id: "shoes",
    name: "Shoes",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    count: 25
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    count: 30
  },
  {
    id: "sweaters",
    name: "Sweaters",
    image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
    count: 15
  }
];

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(category => category.name === name);
};