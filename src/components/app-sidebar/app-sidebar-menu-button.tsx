"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function AppSidebarMenuButton({
  item,
}: {
  item: { url: string; title: string; icon: LucideIcon };
}) {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url;
  };

  return (
    <SidebarMenuButton asChild isActive={isActive(item.url)}>
      <Link href={item.url}>
        <item.icon
          className={isActive(item.url) ? "text-primary" : "text-foreground"}
        />
        <span
          className={isActive(item.url) ? "text-primary" : "text-foreground"}
        >
          {item.title}
        </span>
      </Link>
    </SidebarMenuButton>
  );
}
