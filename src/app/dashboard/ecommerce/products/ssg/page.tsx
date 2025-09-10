import ProductsGridSSG from "@/features/ecommerce/components/ProductsSSG/ProductsGridSSG";
import { getFilteredProductsByQueryString } from "@/features/ecommerce/actions/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products SSG",
  description: "Products with Static Site Generation",
};

export const dynamic = "force-static";

export default async function ProductsSSGPage() {
  const filteredProducts = await getFilteredProductsByQueryString("");
  return <ProductsGridSSG products={filteredProducts} />;
}
