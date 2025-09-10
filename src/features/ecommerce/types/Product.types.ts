export type ProductStatus = "in-stock" | "low-stock" | "out-of-stock";

export enum ProductColor {
  BLACK = "black",
  WHITE = "white",
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  ORANGE = "orange",
  PINK = "pink",
  PURPLE = "purple",
  BROWN = "brown",
  CYAN = "cyan",
  LIME = "lime",
  INDIGO = "indigo",
  GRAY = "gray",
  VIOLET = "violet",
  YELLOW = "yellow",
}

export enum ProductItemsFor {
  MEN = "men",
  WOMEN = "women",
  KIDS = "kids",
  UNISEX = "unisex",
}

export enum ProductCategory {
  ELECTRONICS = "Electronics",
  CLOTHING = "Clothing",
  ACCESSORIES = "Accessories",
  HOME_AND_GARDEN = "Home & Garden",
  SPORTS = "Sports",
  BOOKS = "Books",
  BEAUTY = "Beauty",
  WEARABLES = "Wearables",
  GAMES = "Games",
  COMPUTERS = "Computers",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
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
