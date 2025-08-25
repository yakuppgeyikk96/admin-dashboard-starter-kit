import { cookies } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppNavbar from "@/components/app-navbar";
import { ThemeProvider } from "@/providers/theme-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isSidebarOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider defaultOpen={isSidebarOpen}>
        <div className="flex h-screen w-screen">
          <AppSidebar />
          <div className="flex flex-col flex-1 px-4 py-2.5">
            <AppNavbar />
            <main className="flex-1 py-6 overflow-auto">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
