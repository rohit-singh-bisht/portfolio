import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "var(--custom-sidebar-width)",
            "--sidebar-width-icon": "var(--sidebar-rail-width)",
          } as React.CSSProperties
        }
        className="shrink-0 w-auto"
      >
        <Sidebar />
      </SidebarProvider>
      <main className="w-full">
        <Header />
      </main>
    </div>
  );
}
