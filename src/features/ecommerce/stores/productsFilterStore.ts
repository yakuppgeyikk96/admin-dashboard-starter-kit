import { ProductFilter } from "../types/ProductFilter.types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProductsFilterState {
  filters: ProductFilter;

  // Actions
  setFilter: <K extends keyof ProductFilter>(
    key: K,
    value: ProductFilter[K]
  ) => void;
  setFilters: (filters: Partial<ProductFilter>) => void;
  resetFilters: () => void;
  toggleArrayFilter: <
    K extends keyof Pick<
      ProductFilter,
      "itemsFor" | "categories" | "brands" | "colors" | "ratings"
    >
  >(
    key: K,
    value: ProductFilter[K][0]
  ) => void;

  // Computed
  isFilterActive: (key: keyof ProductFilter) => boolean;
  getActiveFiltersCount: () => number;
}

const initialFilters: ProductFilter = {
  search: "",
  itemsFor: [],
  categories: [],
  brands: [],
  colors: [],
  minPrice: 0,
  maxPrice: 1000,
  ratings: [],
  status: "All Status",
};

export const useProductsFilterStore = create<ProductsFilterState>()(
  devtools(
    (set, get) => ({
      filters: initialFilters,

      // Actions
      setFilter: (key, value) => {
        set(
          (state) => ({
            filters: { ...state.filters, [key]: value },
          }),
          false,
          `setFilter/${key}`
        );
      },

      setFilters: (newFilters) => {
        set(
          (state) => ({
            filters: { ...state.filters, ...newFilters },
          }),
          false,
          "setFilters"
        );
      },

      resetFilters: () => {
        set({ filters: initialFilters }, false, "resetFilters");
      },

      // Toggle array filters (for multiple selection)
      toggleArrayFilter: (key, value) => {
        set(
          (state) => {
            const currentArray = state.filters[key] as (string | number)[];
            const newArray = currentArray.includes(value as never)
              ? currentArray.filter((item) => item !== value)
              : [...currentArray, value as never];

            return {
              filters: { ...state.filters, [key]: newArray },
            };
          },
          false,
          `toggleArrayFilter/${key}`
        );
      },

      // Computed functions
      isFilterActive: (key) => {
        const { filters } = get();
        const value = filters[key];

        if (Array.isArray(value)) {
          return value.length > 0;
        }

        if (typeof value === "string") {
          return value !== "" && value !== "All Status";
        }

        if (key === "minPrice" || key === "maxPrice") {
          const price = value as number;
          return price > 0 || price < 1000;
        }

        return false;
      },

      getActiveFiltersCount: () => {
        const { filters } = get();
        let count = 0;

        count += filters.categories.length;
        count += filters.brands.length;
        count += filters.colors.length;
        count += filters.ratings.length;

        if (filters.search) count++;
        if (filters.status !== "All Status") count++;
        if (filters.minPrice > 0 || filters.maxPrice < 1000) count++;

        return count;
      },
    }),
    {
      name: "products-filter-store",
    }
  )
);
