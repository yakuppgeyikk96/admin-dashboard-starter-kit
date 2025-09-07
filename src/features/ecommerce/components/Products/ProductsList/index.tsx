import { PRODUCTS } from "@/features/ecommerce/constants/products";
import ProductCard from "./ProductCard";

interface ProductsListProps {
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

export default function ProductsList({ searchParams }: ProductsListProps) {
  const filters = {
    search: searchParams?.search || "",
    categories: searchParams?.categories?.split(",") || [],
    brands: searchParams?.brands?.split(",") || [],
    colors: searchParams?.colors?.split(",") || [],
    ratings: searchParams?.ratings?.split(",") || [],
    itemsFor: searchParams?.itemsFor?.split(",") || [],
    minPrice: parseInt(searchParams?.minPrice || "0"),
    maxPrice: parseInt(searchParams?.maxPrice || "1000"),
  };

  let filteredProducts = PRODUCTS;

  if (filters.search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.categories.includes(product.category)
    );
  }

  if (filters.brands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.brands.includes(product.brand)
    );
  }

  if (filters.colors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.colors.includes(product.color)
    );
  }

  if (filters.itemsFor.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.itemsFor.includes(product.itemsFor)
    );
  }

  if (filters.ratings.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.ratings.includes(product.rating.toString())
    );
  }

  if (filters.minPrice > 0 || filters.maxPrice < 1000) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );
  }

  console.log(filteredProducts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
