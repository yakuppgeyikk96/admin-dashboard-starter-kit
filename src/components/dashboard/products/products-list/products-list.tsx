import { PRODUCTS } from "@/shared/constants/products";
import { ProductCard } from "./product-card";

export function ProductsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
