"use client";

import { cn } from "@/shared/lib/utils";
import {
  useSidebar,
  SidebarHeader as SidebarHeaderComponent,
} from "@/shared/components/ui/sidebar";
import SidebarTrigger from "./SidebarTrigger";
import SidebarLogo from "./SidebarLogo";

export default function SidebarHeader() {
  const { open } = useSidebar();

  return (
    <SidebarHeaderComponent
      className={cn(
        "flex flex-row items-center p-4 bg-card rounded-t-md",
        open ? "justify-between" : "justify-center"
      )}
    >
      <SidebarLogo />
      <SidebarTrigger />
    </SidebarHeaderComponent>
  );
}
