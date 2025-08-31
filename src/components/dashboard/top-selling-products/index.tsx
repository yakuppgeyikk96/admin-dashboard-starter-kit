"use client";

import { useState } from "react";
import TimeFilter from "./time-filter";
import ProductTable from "./product-table";
import Pagination from "@/components/common/pagination/pagination";
import { usePagination } from "@/components/common/pagination/use-pagination";
import {
  ITEMS_PER_PAGE,
  TOP_SELLING_PRODUCTS,
} from "@/constants/top-selling-products";

export default function TopSellingProducts() {
  const [timeFilter, setTimeFilter] = useState("This Week");

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
  } = usePagination({
    totalItems: TOP_SELLING_PRODUCTS.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const currentProducts = TOP_SELLING_PRODUCTS.slice(startIndex, endIndex);

  return (
    <div className="bg-card rounded-lg border p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Top Selling Products
        </h2>
        <TimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </div>

      <div className="flex-1">
        <ProductTable products={currentProducts} startIndex={startIndex} />
      </div>

      <div className="mt-auto pt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={TOP_SELLING_PRODUCTS.length}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}
