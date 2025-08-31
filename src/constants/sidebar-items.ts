import { GridIcon, ShoppingCart, Users } from "lucide-react";
import { SidebarItem } from "@/types/Sidebar";

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
];
