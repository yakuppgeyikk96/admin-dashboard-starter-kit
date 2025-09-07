"use client";

import { SidebarMenu } from "@/shared/components/ui/sidebar";
import { SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { dashboardSidebarItems } from "@/shared/constants/sidebarItems";
import SidebarMenuButton from "./SidebarMenuButton";

export default function SidebarDashboardMenu() {
  return (
    <SidebarMenu>
      {dashboardSidebarItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton item={item} />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
