import ProductsListPage from "@/features/ecommerce/components/Products/ProductsListPage";

interface ProductsListPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function ProductsListPageRoute({
  searchParams,
}: ProductsListPageProps) {
  const params = await searchParams;
  return <ProductsListPage params={params} />;
}
