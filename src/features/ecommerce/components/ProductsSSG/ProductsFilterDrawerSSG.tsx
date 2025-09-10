"use client";

import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Filter } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";
import ProductsFiltersSSG from "../ProductsSSG/ProductsFilterSSG";

export default function ProductsFilterDrawerSSG() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <ProductsFiltersSSG />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
