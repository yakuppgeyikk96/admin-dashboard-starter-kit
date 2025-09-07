"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import OrderTimeFilter from "@/shared/components/orders/OrderTimeFilter";
import OrderTable from "@/shared/components/orders/OrderTable";
import { Pagination } from "@/shared/components/common/Pagination";
import { usePagination } from "@/shared/components/common/Pagination/use-pagination";
import {
  ITEMS_PER_PAGE,
  RECENT_ORDERS,
} from "@/features/ecommerce/constants/recentOrders";

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <OrderTimeFilter
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />
      </CardHeader>
      <CardContent>
        <OrderTable orders={currentOrders} className="w-full" />

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
      </CardContent>
    </Card>
  );
}
