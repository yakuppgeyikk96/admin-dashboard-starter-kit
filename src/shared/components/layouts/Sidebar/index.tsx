import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/shared/components/ui/sidebar";
import AppSidebarHeader from "./SidebarHeader";
import AppSidebarDashboardMenu from "./SidebarDashboardMenu";
import AppSidebarPagesMenu from "./SidebarPagesMenu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <SidebarComponent collapsible="icon" variant="floating">
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
    </SidebarComponent>
  );
}
