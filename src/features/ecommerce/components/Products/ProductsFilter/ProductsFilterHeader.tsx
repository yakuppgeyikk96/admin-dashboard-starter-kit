"use client";

import { Button } from "@/shared/components/ui/button";
import { XIcon } from "lucide-react";
import { useProductsFilter } from "@/features/ecommerce/hooks/useProductsFilter";
import { useRouter } from "next/navigation";

export default function ProductsFilterHeader() {
  const { resetFilters } = useProductsFilter();
  const router = useRouter();

  const handleResetFilters = () => {
    resetFilters();

    router.push("/dashboard/ecommerce/products");
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Filter</h2>
      <Button
        variant="ghost"
        className="cursor-pointer"
        onClick={handleResetFilters}
      >
        <XIcon className="size-4" />
        <span>Clear All</span>
      </Button>
    </div>
  );
}
