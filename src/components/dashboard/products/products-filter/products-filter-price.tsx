"use client";

import { Slider } from "@/shared/components/ui/slider";
import { useState } from "react";
import { formatCurrency } from "@/shared/lib/currency-utils";
import { useDebounce } from "@/shared/hooks/use-debounce";

export default function ProductsFilterPrice() {
  const [priceRange, setPriceRange] = useState([2500, 7500]);

  const debouncedSetPriceRange = useDebounce((value: number[]) => {
    console.log(value);
  }, 300);

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
    debouncedSetPriceRange(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">Price</h3>
      <div className="space-y-4">
        <div className="relative">
          <Slider
            value={priceRange}
            onValueChange={handlePriceRangeChange}
            min={0}
            max={10000}
            step={100}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="font-medium">{formatCurrency(priceRange[0])}</span>
          <span className="font-medium">{formatCurrency(priceRange[1])}</span>
        </div>
      </div>
    </div>
  );
}
