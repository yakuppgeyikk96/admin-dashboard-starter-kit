import ProductsGrid from "@/features/ecommerce/components/Products";

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  return <ProductsGrid params={params} />;
}
