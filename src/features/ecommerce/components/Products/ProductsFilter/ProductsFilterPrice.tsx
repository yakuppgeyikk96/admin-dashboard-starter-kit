"use client";

import { Slider } from "@/shared/components/ui/slider";
import { formatCurrency } from "@/shared/lib/currency-utils";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";
import { useState } from "react";

export default function ProductsFilterPrice() {
  const { filters, setFilter } = useProductsFilter();
  const [value, setValue] = useState<number[]>([
    filters.minPrice,
    filters.maxPrice,
  ]);

  const debouncedSetPriceRange = useDebounce((value: number[]) => {
    setFilter("minPrice", value[0]);
    setFilter("maxPrice", value[1]);
  }, 300);

  const handlePriceRangeChange = (value: number[]) => {
    setValue(value);
    debouncedSetPriceRange(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">Price</h3>
      <div className="space-y-4">
        <div className="relative">
          <Slider
            value={value}
            onValueChange={handlePriceRangeChange}
            min={0}
            max={10000}
            step={100}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="font-medium">{formatCurrency(value[0])}</span>
          <span className="font-medium">{formatCurrency(value[1])}</span>
        </div>
      </div>
    </div>
  );
}
