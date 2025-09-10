"use client";

import { PRODUCTS } from "@/features/ecommerce/constants/products";
import ProductsTable from "../ProductsTable";
import { Pagination } from "@/shared/components/common/Pagination";
import { usePagination } from "@/shared/hooks/use-pagination";
import { ITEMS_PER_PAGE } from "@/features/ecommerce/constants/products";

interface ProductsTableListProps {
  searchParams: {
    search?: string;
    categories?: string;
    brands?: string;
    colors?: string;
    ratings?: string;
    itemsFor?: string;
    minPrice?: string;
    maxPrice?: string;
  };
}

export default function ProductsTableList({
  searchParams,
}: ProductsTableListProps) {
  const searchTerm = searchParams?.search || "";

  let filteredProducts = PRODUCTS;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
  } = usePagination({
    totalItems: filteredProducts.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="space-y-2">
      <ProductsTable products={currentProducts} />

      <div className="bg-card p-4 rounded-md">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={filteredProducts.length}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}
