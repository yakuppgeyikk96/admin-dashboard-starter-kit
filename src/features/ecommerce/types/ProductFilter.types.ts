import { ProductColor } from "./Product.types";

export interface ProductFilter {
  search: string;
  itemsFor: string[];
  categories: string[];
  brands: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
  ratings: string[];
  status: string;
}

export interface ProductFilterItem {
  label: string;
  value: string;
  count?: number;
}

export interface ProductFilterSection<T extends ProductFilterItem> {
  title: string;
  items: T[];
}

export interface ProductFilterColorItem extends ProductFilterItem {
  color: ProductColor;
}

export interface ProductFilterRatingItem extends ProductFilterItem {
  rating: number;
}

export type ProductFilterItemsFor = ProductFilterSection<ProductFilterItem>;

export type ProductFilterCategories = ProductFilterSection<ProductFilterItem>;

export type ProductFilterBrands = ProductFilterSection<ProductFilterItem>;

export type ProductFilterColors = ProductFilterSection<ProductFilterColorItem>;

export type ProductFilterRatings =
  ProductFilterSection<ProductFilterRatingItem>;
