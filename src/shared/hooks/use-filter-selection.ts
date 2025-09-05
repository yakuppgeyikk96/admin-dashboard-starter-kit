import { useState } from "react";

interface FilterItem {
  value: string;
  label: string;
}

interface UseFilterSelectionProps {
  items: FilterItem[];
  defaultSelected?: string[];
  onSelectionChange?: (selectedItems: string[]) => void;
}

export function useFilterSelection({
  items,
  defaultSelected = ["all"],
  onSelectionChange,
}: UseFilterSelectionProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>(defaultSelected);

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

    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  return {
    selectedItems,
    handleItemChange,
  };
}
