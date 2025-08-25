"use client";

import { useState } from "react";
import TimeFilter from "./time-filter";
import OrderTable from "./order-table";
import Pagination from "@/components/common/pagination/pagination";
import { usePagination } from "@/components/common/pagination/use-pagination";
import { ITEMS_PER_PAGE, RECENT_ORDERS } from "@/constants/recent-orders";

export default function RecentOrders() {
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
    totalItems: RECENT_ORDERS.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const currentOrders = RECENT_ORDERS.slice(startIndex, endIndex);

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Recent Orders</h2>
        <TimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </div>

      <OrderTable orders={currentOrders} startIndex={startIndex} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={RECENT_ORDERS.length}
        onPageChange={handlePageChange}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
}
