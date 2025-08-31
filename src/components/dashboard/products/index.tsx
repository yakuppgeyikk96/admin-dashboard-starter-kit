import PageHeader from "@/components/dashboard/page-header";
import { ProductsFilters } from "./filters/products-filters";
import { ProductsList } from "./products-list/products-list";

export default function ProductsGrid() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        description="Manage your product catalog and inventory"
      />

      <ProductsFilters />
      <ProductsList />
    </div>
  );
}
