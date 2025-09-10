import ProductsGrid from "@/features/ecommerce/components/Products";
import { Metadata } from "next";

interface ProductsPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const metadata: Metadata = {
  title: "Products",
  description: "Products",
};

export const revalidate = 3600;

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  return <ProductsGrid params={params} />;
}
