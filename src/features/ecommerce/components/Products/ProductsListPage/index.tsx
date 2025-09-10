import PageHeader from "@/shared/components/common/PageHeader";
import ProductsTableList from "../ProductsTableList";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/shared/components/ui/input";

interface ProductsListPageProps {
  params: { [key: string]: string | undefined };
}

export default async function ProductsListPage({
  params,
}: ProductsListPageProps) {
  return (
    <div className="space-y-6">
      <PageHeader title="Products List" />

      <div className="space-y-2">
        <div className="flex items-center justify-between bg-card p-4 rounded-md">
          <Input
            type="text"
            placeholder="Search products..."
            className="max-w-80"
          />
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </div>

        <ProductsTableList searchParams={params} />
      </div>
    </div>
  );
}
