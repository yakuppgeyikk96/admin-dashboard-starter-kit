"use client";

import { MenuIcon } from "lucide-react";
import { useSidebar } from "@/shared/components/ui/sidebar";
import { cn } from "@/shared/lib/utils";
import NavbarProfileMenu from "./NavbarProfileMenu";
import NavbarThemeSwitcher from "./NavbarThemeSwitcher";
import NotificationBell from "@/features/notifications/components/NotificationBell";
import { useAuth } from "@/shared/hooks/use-auth";
import { Button } from "@/shared/components/ui/button";
import { ButtonSkeleton } from "@/shared/components/ui/button-skeleton";
import Link from "next/link";

export default function Navbar() {
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
          <NavbarThemeSwitcher />
          <NotificationBell />
        </div>

        {isLoading ? (
          <ButtonSkeleton />
        ) : isAuthenticated ? (
          <NavbarProfileMenu />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
