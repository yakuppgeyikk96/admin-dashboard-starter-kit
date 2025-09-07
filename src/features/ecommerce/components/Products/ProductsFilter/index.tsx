"use client";

import ProductsFilterItemsFor from "./ProductsFilterItemsFor";
import ProductsFilterCategories from "./ProductsFilterCategories";
import ProductsFilterSearch from "./ProductsFilterSearch";
import ProductsFilterBrands from "./ProductsFilterBrands";
import ProductsFilterColors from "./ProductsFilterColors";
import ProductsFilterPrice from "./ProductsFilterPrice";
import ProductsFilterRatings from "./ProductsFilterRatings";
import ProductsFilterApplyButton from "./ProductsFilterApplyButton";
import ProductsFilterHeader from "./ProductsFilterHeader";

export default function ProductsFilters() {
  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 hidden lg:block">
      <div className="bg-card p-4 rounded-lg shadow">
        <ProductsFilterHeader />
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
          <ProductsFilterApplyButton />
        </div>
      </div>
    </aside>
  );
}
