import { ProductStatus } from "@/features/ecommerce/types";

export const getProductStatusColor = (status: ProductStatus) => {
  switch (status) {
    case "in-stock":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "low-stock":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "out-of-stock":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
};

export const getProductStatusText = (status: ProductStatus) => {
  switch (status) {
    case "in-stock":
      return "In Stock";
    case "low-stock":
      return "Low Stock";
    case "out-of-stock":
      return "Out of Stock";
    default:
      return "Unknown";
  }
};
