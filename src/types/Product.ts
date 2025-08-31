export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image: string;
  stock: number;
  itemId?: string;
  itemsSold?: number;
  sales?: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  search: string;
  category: string;
  brand: string;
  priceRange: [number, number];
  status: string;
}
