import { useState } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

export function usePagination({
  totalItems,
  itemsPerPage,
}: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handlePreviousPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const resetToFirstPage = () => setCurrentPage(1);

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    resetToFirstPage,
  };
}
