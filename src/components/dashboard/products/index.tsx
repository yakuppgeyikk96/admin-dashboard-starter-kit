import PageHeader from "../page-header";
import ProductsFilters from "./products-filter";
import ProductsFilterDrawer from "./products-filter-drawer";
import ProductsFilterSearch from "./products-filter/products-filter-search";
import { ProductsList } from "./products-list/products-list";

export default function ProductsGrid() {
  return (
    <div className="space-y-6">
      <PageHeader title="Products" />

      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-4 xl:col-span-3 hidden lg:block">
          <div className="bg-card rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Filter</h2>
            <ProductsFilters />
          </div>
        </aside>
        <div className="col-span-12 lg:hidden flex justify-between items-center">
          <ProductsFilterSearch showTitle={false} />
          <ProductsFilterDrawer />
        </div>

        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          <ProductsList />
        </main>
      </div>
    </div>
  );
}
