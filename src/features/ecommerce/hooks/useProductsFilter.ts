import { useProductsFilterStore } from "../stores/productsFilterStore";

export const useProductsFilter = () => {
  const store = useProductsFilterStore();
  return store;
};

export const useProductFilters = () => {
  const {
    filters,
    setFilter,
    setFilters,
    resetFilters,
    toggleArrayFilter,
    isFilterActive,
  } = useProductsFilterStore();

  return {
    filters,
    setFilter,
    setFilters,
    resetFilters,
    toggleArrayFilter,
    isFilterActive,
  };
};

export const useArrayFilters = () => {
  const { filters, toggleArrayFilter } = useProductFilters();

  const toggleCategory = (category: string) =>
    toggleArrayFilter("categories", category);
  const toggleBrand = (brand: string) => toggleArrayFilter("brands", brand);
  const toggleColor = (color: string) => toggleArrayFilter("colors", color);
  const toggleRating = (rating: string) => toggleArrayFilter("ratings", rating);
  const toggleItemsFor = (item: string) => toggleArrayFilter("itemsFor", item);

  return {
    filters,
    toggleCategory,
    toggleBrand,
    toggleColor,
    toggleRating,
    toggleItemsFor,
    isCategoryActive: (category: string) =>
      filters.categories.includes(category),
    isBrandActive: (brand: string) => filters.brands.includes(brand),
    isColorActive: (color: string) => filters.colors.includes(color),
    isRatingActive: (rating: string) => filters.ratings.includes(rating),
    isItemsForActive: (item: string) => filters.itemsFor.includes(item),
  };
};
