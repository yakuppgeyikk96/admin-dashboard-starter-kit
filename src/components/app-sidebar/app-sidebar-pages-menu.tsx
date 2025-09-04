"use client";

import { SidebarMenu } from "../ui/sidebar";
import { SidebarMenuItem } from "../ui/sidebar";
import { pagesSidebarItems } from "@/constants/sidebar-items";
import AppSidebarMenuButton from "./app-sidebar-menu-button";

export default function AppSidebarPagesMenu() {
  return (
    <SidebarMenu>
      {pagesSidebarItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <AppSidebarMenuButton item={item} />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
