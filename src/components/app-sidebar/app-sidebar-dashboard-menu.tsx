"use client";

import { SidebarMenu } from "../ui/sidebar";
import { SidebarMenuItem } from "../ui/sidebar";
import { dashboardSidebarItems } from "@/constants/sidebar-items";
import AppSidebarMenuButton from "./app-sidebar-menu-button";

export default function AppSidebarDashboardMenu() {
  return (
    <SidebarMenu>
      {dashboardSidebarItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <AppSidebarMenuButton item={item} />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
