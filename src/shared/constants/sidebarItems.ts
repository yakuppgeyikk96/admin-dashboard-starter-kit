import { GridIcon, ListIcon, ShoppingCart, Users } from "lucide-react";
import { SidebarItem } from "@/shared/types";

export const dashboardSidebarItems: SidebarItem[] = [
  {
    title: "Ecommerce",
    url: "/dashboard/ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "CRM",
    url: "/dashboard/crm",
    icon: Users,
  },
];

export const pagesSidebarItems: SidebarItem[] = [
  {
    title: "Products Grid",
    url: "/dashboard/ecommerce/products",
    icon: GridIcon,
  },
  {
    title: "Products List",
    url: "/dashboard/ecommerce/products-list",
    icon: ListIcon,
  },
  {
    title: "Products SSG",
    url: "/dashboard/ecommerce/products/ssg",
    icon: GridIcon,
  },
];
