"use client";

import { MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import ProfileMenu from "./profile-menu";
import ThemeSwitcher from "./theme-switcher";
import NotificationDropdown from "./notification-bell/notification-dropdown";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { ButtonSkeleton } from "@/components/ui/button-skeleton";
import Link from "next/link";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center bg-card px-4 shadow border rounded-sm justify-between lg:justify-end"
      )}
    >
      <MenuIcon className="cursor-pointer lg:hidden" onClick={toggleSidebar} />
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <NotificationDropdown />
        </div>

        {isLoading ? (
          <ButtonSkeleton />
        ) : isAuthenticated ? (
          <ProfileMenu />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
