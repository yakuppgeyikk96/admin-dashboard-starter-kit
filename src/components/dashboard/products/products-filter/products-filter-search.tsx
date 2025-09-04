"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProductsFilterSearchProps {
  showTitle?: boolean;
}

export default function ProductsFilterSearch({
  showTitle = true,
}: ProductsFilterSearchProps) {
  return (
    <div className="flex flex-col gap-2 ">
      {showTitle && <h3 className="text-sm font-semibold">Search</h3>}
      <div className="relative flex-1 max-w-sm bg-card rounded-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          placeholder="Search products..."
          className="pl-10"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}
