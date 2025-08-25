import { ShoppingCart, Users } from "lucide-react";
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
