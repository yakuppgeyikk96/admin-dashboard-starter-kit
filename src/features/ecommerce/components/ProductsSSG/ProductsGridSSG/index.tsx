import PageHeader from "@/shared/components/common/PageHeader";
import ProductsFiltersSSG from "@/features/ecommerce/components/ProductsSSG/ProductsFilterSSG";
import ProductsFilterDrawerSSG from "@/features/ecommerce/components/ProductsSSG/ProductsFilterDrawerSSG";
import ProductsFilterSearchSSG from "@/features/ecommerce/components/ProductsSSG/ProductsFilterSSG/ProductsFilterSearchSSG";
import ProductsListSSG from "@/features/ecommerce/components/ProductsSSG/ProductsListSSG";
import { Product } from "@/features/ecommerce/types/Product.types";

interface ProductsGridSSGProps {
  products: Product[];
}

export default async function ProductsGridSSG({
  products,
}: ProductsGridSSGProps) {
  return (
    <div className="space-y-6">
      <PageHeader title="Products (SSG)" />

      <div className="grid grid-cols-12 gap-6">
        <ProductsFiltersSSG />
        <div className="col-span-12 lg:hidden flex justify-between items-center">
          <ProductsFilterSearchSSG showTitle={false} />
          <ProductsFilterDrawerSSG />
        </div>

        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ProductsListSSG products={products} />
        </main>
      </div>
    </div>
  );
}
