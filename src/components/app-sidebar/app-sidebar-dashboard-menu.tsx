"use client";

import Link from "next/link";
import { SidebarMenu, SidebarMenuButton } from "../ui/sidebar";
import { SidebarMenuItem } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import { dashboardSidebarItems } from "@/constants/sidebar-items";

export default function AppSidebarDashboardMenu() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url;
  };

  return (
    <SidebarMenu>
      {dashboardSidebarItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={isActive(item.url)}>
            <Link href={item.url}>
              <item.icon />
              <span
                className={
                  isActive(item.url)
                    ? "text-sidebar-accent-foreground font-semibold"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                }
              >
                {item.title}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
