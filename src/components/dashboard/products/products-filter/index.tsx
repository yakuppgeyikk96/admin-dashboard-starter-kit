import ProductsFilterItemsFor from "./products-filter-items-for";
import ProductsFilterCategories from "./products-filter-categories";
import ProductsFilterSearch from "./products-filter-search";
import ProductsFilterBrands from "./products-filter-brands";
import ProductsFilterColors from "./products-filter-colors";
import ProductsFilterPrice from "./products-filter-price";
import ProductsFilterRatings from "./products-filter-ratings";

export default function ProductsFilters() {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden lg:block">
        <ProductsFilterSearch />
      </div>

      <ProductsFilterItemsFor />
      <ProductsFilterCategories />
      <ProductsFilterBrands />
      <ProductsFilterColors />
      <ProductsFilterPrice />
      <ProductsFilterRatings />
    </div>
  );
}
