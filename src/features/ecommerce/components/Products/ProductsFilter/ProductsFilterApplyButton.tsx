"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/shared/components/ui/button";
import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";

export default function ProductsFilterApplyButton() {
  const { filters } = useProductsFilter();
  const router = useRouter();

  const handleApply = () => {
    const searchParams = new URLSearchParams();

    if (filters.search) {
      searchParams.set("search", filters.search);
    }

    const arrayFilters = [
      "categories",
      "brands",
      "colors",
      "ratings",
      "itemsFor",
    ] as const;

    arrayFilters.forEach((filterKey) => {
      const values = filters[filterKey] as string[];

      if (values && values.length > 0 && !values.includes("all")) {
        searchParams.set(filterKey, values.join(","));
      }
    });

    if (
      filters.minPrice !== undefined &&
      filters.maxPrice !== undefined &&
      (filters.minPrice !== 0 || filters.maxPrice !== 1000)
    ) {
      searchParams.set("minPrice", filters.minPrice.toString());
      searchParams.set("maxPrice", filters.maxPrice.toString());
    }

    const queryString = searchParams.toString();
    const url = queryString
      ? `/dashboard/ecommerce/products?${queryString}`
      : "/dashboard/ecommerce/products";

    router.push(url);
  };

  return (
    <Button
      onClick={handleApply}
      className="cursor-pointer sticky bottom-0 mt-4"
    >
      Apply Filters
    </Button>
  );
}
