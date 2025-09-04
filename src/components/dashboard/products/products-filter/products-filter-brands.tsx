"use client";

import { PRODUCT_FILTERS_BRANDS } from "@/constants/product-filters";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useFilterSelection } from "@/hooks/use-filter-selection";

export default function ProductsFilterBrands() {
  const { selectedItems, handleItemChange } = useFilterSelection({
    items: PRODUCT_FILTERS_BRANDS.items,
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">{PRODUCT_FILTERS_BRANDS.title}</h3>
      <div className="space-y-2">
        {PRODUCT_FILTERS_BRANDS.items.map((item) => (
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
