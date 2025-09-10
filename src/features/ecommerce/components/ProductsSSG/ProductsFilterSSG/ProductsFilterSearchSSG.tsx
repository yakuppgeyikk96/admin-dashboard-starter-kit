"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/shared/components/ui/input";
import { Search } from "lucide-react";

interface ProductsFilterSearchSSGProps {
  showTitle?: boolean;
}

export default function ProductsFilterSearchSSG({
  showTitle = true,
}: ProductsFilterSearchSSGProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // SSG sayfasına yönlendir
    router.push(
      `/dashboard/ecommerce/products/ssg${
        params.toString() ? `?${params.toString()}` : ""
      }`
    );
  };

  return (
    <div className="w-full">
      {showTitle && <h3 className="font-medium mb-2">Search Products</h3>}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
}
