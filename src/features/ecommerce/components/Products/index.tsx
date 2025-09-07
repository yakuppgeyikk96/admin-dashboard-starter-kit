import PageHeader from "@/shared/components/common/PageHeader";
import ProductsFilters from "./ProductsFilter";
import ProductsFilterDrawer from "./ProductsFilterDrawer";
import ProductsFilterSearch from "./ProductsFilter/ProductsFilterSearch";
import ProductsList from "./ProductsList";

interface ProductsGridProps {
  params: { [key: string]: string | undefined };
}

export default async function ProductsGrid({ params }: ProductsGridProps) {
  return (
    <div className="space-y-6">
      <PageHeader title="Products" />

      <div className="grid grid-cols-12 gap-6">
        <ProductsFilters />
        <div className="col-span-12 lg:hidden flex justify-between items-center">
          <ProductsFilterSearch showTitle={false} />
          <ProductsFilterDrawer />
        </div>

        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ProductsList searchParams={params} />
        </main>
      </div>
    </div>
  );
}
