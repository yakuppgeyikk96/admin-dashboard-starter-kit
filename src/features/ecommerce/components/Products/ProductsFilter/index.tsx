"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";
import ProductsFilterItemsFor from "./ProductsFilterItemsFor";
import ProductsFilterCategories from "./ProductsFilterCategories";
import ProductsFilterSearch from "./ProductsFilterSearch";
import ProductsFilterBrands from "./ProductsFilterBrands";
import ProductsFilterColors from "./ProductsFilterColors";
import ProductsFilterPrice from "./ProductsFilterPrice";
import ProductsFilterRatings from "./ProductsFilterRatings";
import ProductsFilterApplyButton from "./ProductsFilterApplyButton";
import ProductsFilterHeader from "./ProductsFilterHeader";

export default function ProductsFilters() {
  const searchParams = useSearchParams();
  const { setFilters } = useProductsFilter();

  useEffect(() => {
    const urlFilters = {
      search: searchParams.get("search") || "",
      categories: searchParams.get("categories")?.split(",") || ["all"],
      brands: searchParams.get("brands")?.split(",") || ["all"],
      colors: searchParams.get("colors")?.split(",") || ["all"],
      ratings: searchParams.get("ratings")?.split(",") || ["all"],
      itemsFor: searchParams.get("itemsFor")?.split(",") || ["all"],
      minPrice: parseInt(searchParams.get("minPrice") || "0"),
      maxPrice: parseInt(searchParams.get("maxPrice") || "1000"),
      status: searchParams.get("status") || "All Status",
    };

    setFilters(urlFilters);
  }, []);

  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 hidden lg:block">
      <div className="bg-card p-4 rounded-lg shadow">
        <ProductsFilterHeader />
        <div className="flex flex-col gap-4">
          <div className="hidden lg:block">
            <ProductsFilterSearch />
          </div>

          <ProductsFilterItemsFor />
          <ProductsFilterCategories />
          <ProductsFilterBrands />
          <ProductsFilterColors />
          <ProductsFilterPrice />
          <ProductsFilterRatings />
          <ProductsFilterApplyButton />
        </div>
      </div>
    </aside>
  );
}
