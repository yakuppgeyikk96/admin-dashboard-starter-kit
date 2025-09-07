"use client";

import { PRODUCT_FILTERS_COLORS } from "@/features/ecommerce/constants/productFilters";
import { ProductColor } from "@/features/ecommerce/types";
import { useFilterSelection } from "@/features/ecommerce/hooks/useFilterSelection";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductsFilterColors() {
  const [activeColors, setActiveColors] = useState<ProductColor[]>([]);

  const { handleItemChangeArray } = useFilterSelection({
    filterKey: "colors",
  });

  const handleSelectColor = (color: ProductColor) => {
    if (activeColors.includes(color)) {
      setActiveColors(activeColors.filter((c) => c !== color));
    } else {
      setActiveColors([...activeColors, color]);
    }
  };

  useEffect(() => {
    handleItemChangeArray(activeColors as string[]);
  }, [activeColors, handleItemChangeArray]);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">{PRODUCT_FILTERS_COLORS.title}</h3>
      <div className="flex flex-wrap gap-2">
        {PRODUCT_FILTERS_COLORS.items.map((item) => (
          <button
            key={item.value}
            onClick={() => handleSelectColor(item.color)}
            className="relative w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 transition-colors"
            style={{ backgroundColor: item.color }}
            aria-label={item.label}
          >
            {activeColors.includes(item.color) && (
              <Check
                className={`w-4 h-4 absolute inset-0 m-auto ${
                  item.color === "white" ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
