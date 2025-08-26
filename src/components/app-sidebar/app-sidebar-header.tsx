"use client";

import { cn } from "@/lib/utils";
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import AppSidebarTrigger from "./app-sidebar-trigger";
import AppSidebarLogo from "./app-sidebar-logo";

export default function AppSidebarHeader() {
  const { open } = useSidebar();

  return (
    <SidebarHeader
      className={cn(
        "flex flex-row items-center p-4 bg-card rounded-md",
        open ? "justify-between" : "justify-center"
      )}
    >
      <AppSidebarLogo />
      <AppSidebarTrigger />
    </SidebarHeader>
  );
}
