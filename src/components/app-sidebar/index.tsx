import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import AppSidebarHeader from "./app-sidebar-header";
import AppSidebarDashboardMenu from "./app-sidebar-dashboard-menu";
import AppSidebarPagesMenu from "./app-sidebar-pages-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <AppSidebarHeader />
      <SidebarContent className="bg-card">
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="cursor-pointer">
              <CollapsibleTrigger>
                <span className="text-sm font-semibold">Dashboard</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <AppSidebarDashboardMenu />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="cursor-pointer">
              <CollapsibleTrigger>
                <span className="text-sm font-semibold">Ecommerce</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <AppSidebarPagesMenu />
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
