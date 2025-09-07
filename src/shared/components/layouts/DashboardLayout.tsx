import { cookies } from "next/headers";
import Sidebar from "@/shared/components/layouts/Sidebar";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import Navbar from "@/shared/components/layouts/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/contexts/auth-context";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isSidebarOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={isSidebarOpen}>
          <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 py-2.5 px-4">
              <Navbar />
              <main className="flex-1 overflow-y-auto overflow-x-hidden py-4">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
