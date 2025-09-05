"use client";

import { PRODUCT_FILTERS_COLORS } from "@/shared/constants/product-filters";
import { ProductColor } from "@/shared/types/Product";
import { Check } from "lucide-react";
import { useRef, useState } from "react";

export default function ProductsFilterColors() {
  const [selectedColor, setSelectedColor] = useState<ProductColor>("black");

  const handleSelectColor = (color: ProductColor) => {
    setSelectedColor(color);
  };

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
            {selectedColor === item.color && (
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
