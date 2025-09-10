import ProductsGridSSG from "@/features/ecommerce/components/ProductsSSG/ProductsGridSSG";
import { getFilteredProductsByQueryString } from "@/features/ecommerce/actions/products";
import { Metadata } from "next";
import { PRODUCT_FILTERS_CATEGORIES } from "@/features/ecommerce/constants/productFilters";

interface QueryPageProps {
  params: Promise<{ query: string }>;
}

export const metadata: Metadata = {
  title: "Products SSG - Filtered",
  description: "Filtered Products with Static Site Generation",
};

export async function generateStaticParams() {
  const categories = PRODUCT_FILTERS_CATEGORIES.items.map(
    (category) => category.value
  );

  const params = [
    ...categories.map((category) => ({
      query: `category=${category}`,
    })),
    { query: `category=${categories[0]},${categories[1]}` },
    { query: `category=${categories[0]},${categories[2]}` },
    { query: `category=${categories[1]},${categories[2]}` },
    { query: `category=${categories[0]},${categories[3]}` },
    { query: `category=${categories[1]},${categories[3]}` },
    { query: `category=${categories[2]},${categories[3]}` },
    { query: `category=${categories[0]},${categories[1]},${categories[2]}` },
    { query: `category=${categories[0]},${categories[1]},${categories[3]}` },
    { query: `category=${categories[1]},${categories[2]},${categories[3]}` },
    { query: `category=${categories.join(",")}` },
  ];

  return params;
}

export const dynamic = "force-static";

export default async function QueryPage({ params }: QueryPageProps) {
  const { query } = await params;

  const filteredProducts = await getFilteredProductsByQueryString(query);

  console.log(filteredProducts);
  console.log(query);

  return <ProductsGridSSG products={filteredProducts} />;
}
