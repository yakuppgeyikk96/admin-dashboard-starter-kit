"use client";

import { PRODUCT_FILTERS_RATINGS } from "@/shared/constants/product-filters";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Star } from "lucide-react";
import { useFilterSelection } from "@/shared/hooks/use-filter-selection";

export default function ProductsFilterRatings() {
  const { selectedItems, handleItemChange } = useFilterSelection({
    items: PRODUCT_FILTERS_RATINGS.items,
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">{PRODUCT_FILTERS_RATINGS.title}</h3>
      <div className="space-y-2">
        {PRODUCT_FILTERS_RATINGS.items.map((item) => (
          <div key={item.value} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={item.value}
                checked={selectedItems.includes(item.value)}
                onCheckedChange={(checked) =>
                  handleItemChange(item.value, checked as boolean)
                }
              />
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < item.rating
                        ? "fill-orange-400 text-orange-400"
                        : "text-orange-400"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  ({item.rating})
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
