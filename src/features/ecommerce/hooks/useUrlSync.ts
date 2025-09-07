"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useProductsFilter } from "./useProductsFilter";

export function useUrlSync() {
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
  }, [searchParams, setFilters]);
}
