import {
  ProductFilterCategories,
  ProductFilterBrands,
  ProductFilterItemsFor,
  ProductFilterColors,
  ProductFilterRatings,
} from "@/features/ecommerce/types";

export const PRODUCT_FILTERS_ITEMS_FOR: ProductFilterItemsFor = {
  title: "Items for",
  items: [
    {
      label: "Women",
      value: "women",
    },
    {
      label: "Men",
      value: "men",
    },
    {
      label: "Kids",
      value: "kids",
    },
    {
      label: "Unisex",
      value: "unisex",
    },
  ],
};

export const PRODUCT_FILTERS_CATEGORIES: ProductFilterCategories = {
  title: "Categories",
  items: [
    {
      label: "Electronics",
      value: "electronics",
      count: 82,
    },
    {
      label: "Clothing",
      value: "clothing",
      count: 72,
    },
    {
      label: "Wearables",
      value: "wearables",
      count: 62,
    },
    {
      label: "Accessories",
      value: "accessories",
      count: 52,
    },
    {
      label: "Sports",
      value: "sports",
      count: 42,
    },
    {
      label: "Games",
      value: "games",
      count: 32,
    },
    {
      label: "Computers",
      value: "computers",
      count: 22,
    },
  ],
};

export const PRODUCT_FILTERS_BRANDS: ProductFilterBrands = {
  title: "Brands",
  items: [
    {
      label: "AudioTech",
      value: "audio-tech",
      count: 82,
    },
    {
      label: "FitTech",
      value: "fit-tech",
      count: 72,
    },
    {
      label: "EcoWear",
      value: "eco-wear",
      count: 62,
    },
    {
      label: "PowerTech",
      value: "power-tech",
      count: 52,
    },
    {
      label: "HydroLife",
      value: "hydro-life",
      count: 42,
    },
    {
      label: "GameTech",
      value: "game-tech",
      count: 32,
    },
    {
      label: "SmartHome",
      value: "smart-home",
      count: 22,
    },
  ],
};

export const PRODUCT_FILTERS_COLORS: ProductFilterColors = {
  title: "Colors",
  items: [
    {
      label: "Black",
      value: "black",
      color: "black",
      count: 45,
    },
    {
      label: "White",
      value: "white",
      color: "white",
      count: 38,
    },
    {
      label: "Red",
      value: "red",
      color: "red",
      count: 32,
    },
    {
      label: "Green",
      value: "green",
      color: "green",
      count: 28,
    },
    {
      label: "Blue",
      value: "blue",
      color: "blue",
      count: 42,
    },
    {
      label: "Orange",
      value: "orange",
      color: "orange",
      count: 25,
    },
    {
      label: "Pink",
      value: "pink",
      color: "pink",
      count: 18,
    },
    {
      label: "Purple",
      value: "purple",
      color: "purple",
      count: 22,
    },
  ],
};

export const PRODUCT_FILTERS_RATINGS: ProductFilterRatings = {
  title: "Ratings",
  items: [
    {
      label: "5 Stars",
      value: "5",
      rating: 5,
      count: 156,
    },
    {
      label: "4 Stars",
      value: "4",
      rating: 4,
      count: 75,
    },
    {
      label: "3 Stars",
      value: "3",
      rating: 3,
      count: 12,
    },
    {
      label: "2 Stars",
      value: "2",
      rating: 2,
      count: 5,
    },
    {
      label: "1 Star",
      value: "1",
      rating: 1,
      count: 3,
    },
  ],
};
