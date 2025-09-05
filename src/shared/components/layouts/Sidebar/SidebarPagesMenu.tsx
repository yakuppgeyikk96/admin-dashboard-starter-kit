"use client";

import { SidebarMenu } from "@/shared/components/ui/sidebar";
import { SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { pagesSidebarItems } from "@/shared/constants/sidebar-items";
import AppSidebarMenuButton from "./SidebarMenuButton";

export default function SidebarPagesMenu() {
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
