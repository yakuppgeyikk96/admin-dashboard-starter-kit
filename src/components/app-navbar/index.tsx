"use client";

import { BellIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import ProfileMenu from "./profile-menu";
import ThemeSwitcher from "./theme-switcher";

export default function AppNavbar() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center bg-card px-8 shadow border rounded-sm",
        isMobile ? "justify-between" : "justify-end"
      )}
    >
      {isMobile ? <MenuIcon onClick={toggleSidebar} /> : null}
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <BellIcon className="w-4 h-4 cursor-pointer" />
        <ProfileMenu />
      </div>
    </div>
  );
}
