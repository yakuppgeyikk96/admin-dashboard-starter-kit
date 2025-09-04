"use client";

import { PRODUCT_FILTERS_ITEMS_FOR } from "@/constants/product-filters";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useFilterSelection } from "@/hooks/use-filter-selection";

export default function ProductsFilterItemsFor() {
  const { selectedItems, handleItemChange } = useFilterSelection({
    items: PRODUCT_FILTERS_ITEMS_FOR.items,
    onSelectionChange: (selectedItems) => {
      console.log(selectedItems);
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold">
        {PRODUCT_FILTERS_ITEMS_FOR.title}
      </h3>
      <div className="space-y-2">
        {PRODUCT_FILTERS_ITEMS_FOR.items.map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
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
        ))}
      </div>
    </div>
  );
}
