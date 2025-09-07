export type ProductStatus = "in-stock" | "low-stock" | "out-of-stock";

export type ProductColor =
  | "black"
  | "white"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "pink"
  | "purple"
  | "yellow"
  | "gray"
  | "brown"
  | "cyan"
  | "lime"
  | "indigo"
  | "violet";

export type ProductItemsFor = "men" | "women" | "kids" | "unisex";

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
  status: ProductStatus;
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
  color: ProductColor;
  itemsFor: ProductItemsFor;
}
