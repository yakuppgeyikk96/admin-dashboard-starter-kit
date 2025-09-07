"use client";

import { PRODUCT_FILTERS_CATEGORIES } from "@/features/ecommerce/constants/productFilters";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";
import { useFilterSelection } from "@/features/ecommerce/hooks/useFilterSelection";

export default function ProductsFilterCategories() {
  const { selectedItems, handleItemChange } = useFilterSelection({
    filterKey: "categories",
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">
        {PRODUCT_FILTERS_CATEGORIES.title}
      </h3>
      <div className="space-y-2">
        {PRODUCT_FILTERS_CATEGORIES.items.map((item) => (
          <div key={item.value} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={item.value}
                checked={selectedItems.includes(item.value)}
                onCheckedChange={(checked) =>
                  handleItemChange(item.value, checked as boolean)
                }
              />
              <Label htmlFor={item.value} className="text-sm font-medium">
                {item.label}
              </Label>
            </div>
            <span className="text-sm text-gray-500">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
