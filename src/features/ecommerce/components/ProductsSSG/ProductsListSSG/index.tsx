import ProductCard from "../../Products/ProductsList/ProductCard";
import { Product } from "@/features/ecommerce/types/Product.types";

interface ProductsListSSGProps {
  products: Product[];
}

export default function ProductsListSSG({ products }: ProductsListSSGProps) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Showing {products.length} products (SSG rendered)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
