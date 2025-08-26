"use client";

import { MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import ProfileMenu from "./profile-menu";
import ThemeSwitcher from "./theme-switcher";
import NotificationDropdown from "./notification-bell/notification-dropdown";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center bg-card px-4 shadow border rounded-sm justify-between lg:justify-end"
      )}
    >
      <MenuIcon className="cursor-pointer lg:hidden" onClick={toggleSidebar} />
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <NotificationDropdown />
        <ProfileMenu />
      </div>
    </div>
  );
}
