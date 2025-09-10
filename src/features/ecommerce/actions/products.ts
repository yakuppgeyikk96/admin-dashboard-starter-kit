"use server";

import { PRODUCTS } from "@/features/ecommerce/constants/products";
import { Product } from "@/features/ecommerce/types/Product.types";

export interface ProductFilters {
  search?: string;
  categories?: string[];
  brands?: string[];
  colors?: string[];
  ratings?: string[];
  itemsFor?: string[];
  minPrice?: number;
  maxPrice?: number;
}

export async function getFilteredProducts(
  filters: ProductFilters
): Promise<Product[]> {
  let filteredProducts = PRODUCTS;

  if (filters.search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(filters.search!.toLowerCase())
    );
  }

  if (filters.categories && filters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.categories!.includes(product.category)
    );
  }

  if (filters.brands && filters.brands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.brands!.includes(product.brand)
    );
  }

  if (filters.colors && filters.colors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.colors!.includes(product.color)
    );
  }

  if (filters.itemsFor && filters.itemsFor.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.itemsFor!.includes(product.itemsFor)
    );
  }

  if (filters.ratings && filters.ratings.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.ratings!.includes(product.rating.toString())
    );
  }

  if (filters.minPrice && filters.minPrice > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= filters.minPrice!
    );
  }

  if (filters.maxPrice && filters.maxPrice < 1000) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= filters.maxPrice!
    );
  }

  return filteredProducts;
}

export async function getFilteredProductsByQueryString(
  queryString: string
): Promise<Product[]> {
  const decodedQueryString = decodeURIComponent(queryString);
  const params = new URLSearchParams(decodedQueryString);

  const filters = {
    search: params.get("search") || "",
    categories: params.get("category")?.split(",").filter(Boolean) || [],
    brands: params.get("brands")?.split(",").filter(Boolean) || [],
    colors: params.get("colors")?.split(",").filter(Boolean) || [],
    ratings: params.get("ratings")?.split(",").filter(Boolean) || [],
    itemsFor: params.get("itemsFor")?.split(",").filter(Boolean) || [],
    minPrice: parseInt(params.get("minPrice") || "0"),
    maxPrice: parseInt(params.get("maxPrice") || "1000"),
  };

  return getFilteredProducts(filters);
}
