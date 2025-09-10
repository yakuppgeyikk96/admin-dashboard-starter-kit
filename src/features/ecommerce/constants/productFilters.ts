import {
  ProductFilterCategories,
  ProductFilterBrands,
  ProductFilterItemsFor,
  ProductFilterColors,
  ProductFilterRatings,
  ProductCategory,
  ProductItemsFor,
  ProductColor,
} from "@/features/ecommerce/types";

export const PRODUCT_FILTERS_ITEMS_FOR: ProductFilterItemsFor = {
  title: "Items for",
  items: [
    {
      label: "Women",
      value: ProductItemsFor.WOMEN,
    },
    {
      label: "Men",
      value: ProductItemsFor.MEN,
    },
    {
      label: "Kids",
      value: ProductItemsFor.KIDS,
    },
    {
      label: "Unisex",
      value: ProductItemsFor.UNISEX,
    },
  ],
};

export const PRODUCT_FILTERS_CATEGORIES: ProductFilterCategories = {
  title: "Categories",
  items: [
    {
      label: "Electronics",
      value: ProductCategory.ELECTRONICS,
      count: 82,
    },
    {
      label: "Clothing",
      value: ProductCategory.CLOTHING,
      count: 72,
    },
    {
      label: "Wearables",
      value: ProductCategory.WEARABLES,
      count: 62,
    },
    {
      label: "Accessories",
      value: ProductCategory.ACCESSORIES,
      count: 52,
    },
    {
      label: "Sports",
      value: ProductCategory.SPORTS,
      count: 42,
    },
    {
      label: "Games",
      value: ProductCategory.GAMES,
      count: 32,
    },
    {
      label: "Computers",
      value: ProductCategory.COMPUTERS,
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
      value: ProductColor.BLACK,
      color: ProductColor.BLACK,
      count: 45,
    },
    {
      label: "White",
      value: ProductColor.WHITE,
      color: ProductColor.WHITE,
      count: 38,
    },
    {
      label: "Red",
      value: ProductColor.RED,
      color: ProductColor.RED,
      count: 32,
    },
    {
      label: "Green",
      value: ProductColor.GREEN,
      color: ProductColor.GREEN,
      count: 28,
    },
    {
      label: "Blue",
      value: ProductColor.BLUE,
      color: ProductColor.BLUE,
      count: 42,
    },
    {
      label: "Orange",
      value: ProductColor.ORANGE,
      color: ProductColor.ORANGE,
      count: 25,
    },
    {
      label: "Pink",
      value: ProductColor.PINK,
      color: ProductColor.PINK,
      count: 18,
    },
    {
      label: "Purple",
      value: ProductColor.PURPLE,
      color: ProductColor.PURPLE,
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
