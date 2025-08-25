import { Menu, PanelLeftClose } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

export default function AppSidebarTrigger() {
  const { open, toggleSidebar } = useSidebar();

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const iconClassName = "w-4 h-4 cursor-pointer";

  return open ? (
    <PanelLeftClose className={iconClassName} onClick={handleToggleSidebar} />
  ) : (
    <Menu className={iconClassName} onClick={handleToggleSidebar} />
  );
}
