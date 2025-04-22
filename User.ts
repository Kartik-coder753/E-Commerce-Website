export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'user';
  avatar?: string;
  address?: Address;
  orders?: number[];
  wishlist?: number[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}