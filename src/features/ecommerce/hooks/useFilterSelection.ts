import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";
import { useCallback } from "react";

interface UseFilterSelectionProps {
  filterKey: "categories" | "brands" | "colors" | "ratings" | "itemsFor";
}

export function useFilterSelection({ filterKey }: UseFilterSelectionProps) {
  const { filters, setFilter } = useProductsFilter();

  const selectedItems = filters[filterKey] as string[];

  const handleItemChange = (value: string, checked: boolean) => {
    const uniquedItems = checked
      ? [...new Set([...selectedItems, value])]
      : selectedItems.filter((item) => item !== value);

    setFilter(filterKey, uniquedItems);
  };

  const handleItemChangeArray = useCallback(
    (value: string[]) => {
      setFilter(filterKey, value);
    },
    [filterKey, setFilter]
  );

  return {
    selectedItems,
    handleItemChange,
    handleItemChangeArray,
  };
}
