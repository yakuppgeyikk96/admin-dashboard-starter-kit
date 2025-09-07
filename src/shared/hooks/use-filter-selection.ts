import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";

interface FilterItem {
  value: string;
  label: string;
}

interface UseFilterSelectionProps {
  items: FilterItem[];
  filterKey: "categories" | "brands" | "colors" | "ratings" | "itemsFor";
}

export function useFilterSelection({
  items,
  filterKey,
}: UseFilterSelectionProps) {
  const { filters, setFilter } = useProductsFilter();

  const selectedItems = filters[filterKey] as string[];

  const handleItemChange = (value: string, checked: boolean) => {
    let newSelection: string[];

    if (value === "all") {
      if (checked) {
        newSelection = items.map((item) => item.value);
      } else {
        newSelection = [];
      }
    } else {
      if (checked) {
        newSelection = selectedItems
          .filter((item) => item !== "all")
          .concat(value);
      } else {
        const filtered = selectedItems.filter((item) => item !== value);

        if (filtered.length === 0) {
          newSelection = ["all"];
        } else {
          newSelection = filtered;
        }
      }
    }

    setFilter(filterKey, newSelection);
  };

  return {
    selectedItems,
    handleItemChange,
  };
}
