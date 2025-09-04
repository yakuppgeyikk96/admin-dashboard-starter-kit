import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CheckIcon, FilterIcon } from "lucide-react";
import ProductsFilters from "../products-filter";

export default function ProductsFilterDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button variant="default" className="cursor-pointer">
          <FilterIcon className="size-4" />
          <span>Filters</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>

        <div className="px-4">
          <ProductsFilters />
        </div>

        <DrawerFooter>
          <Button variant="default" className="cursor-pointer">
            <CheckIcon className="size-4" />
            <span>Apply</span>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
