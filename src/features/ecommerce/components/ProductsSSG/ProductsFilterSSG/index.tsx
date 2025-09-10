"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { X } from "lucide-react";

export default function ProductsFiltersSSG() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    categories:
      searchParams.get("categories")?.split(",").filter(Boolean) || [],
  });

  const updateURL = (newFilters: typeof filters) => {
    const params = new URLSearchParams();

    if (newFilters.categories.length > 0) {
      params.set("category", newFilters.categories.join(","));
    }

    const queryString = params.toString();
    if (queryString) {
      router.push(`/dashboard/ecommerce/products/ssg/${queryString}`);
    } else {
      router.push("/dashboard/ecommerce/products/ssg");
    }
  };

  const toggleFilter = (value: string) => {
    const currentValues = filters.categories;
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    const newFilters = { ...filters, categories: newValues };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { categories: [] };
    setFilters(clearedFilters);
    updateURL(clearedFilters);
  };

  const hasActiveFilters = filters.categories.length > 0;

  return (
    <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-2">Categories</h4>
            <div className="space-y-2">
              {["Electronics", "Clothing", "Accessories", "Home & Garden"].map(
                (category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => toggleFilter(category)}
                      className="rounded"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div>
              <h4 className="font-medium mb-2">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                    <button
                      onClick={() => toggleFilter(category)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
