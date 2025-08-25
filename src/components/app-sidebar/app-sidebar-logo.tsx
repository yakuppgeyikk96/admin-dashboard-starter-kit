import { useSidebar } from "../ui/sidebar";

export default function AppSidebarLogo() {
  const { open } = useSidebar();

  return open ? <h1 className="text-2xl font-bold">Logo</h1> : null;
}
