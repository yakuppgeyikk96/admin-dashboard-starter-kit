import { NavigationItem } from "@/types/Navigation";
import { BellIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

export const profileMenuItems: NavigationItem[] = [
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellIcon,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
  {
    name: "Log out",
    href: "/logout",
    icon: LogOutIcon,
  },
];
