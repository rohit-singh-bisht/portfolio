import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        <SidebarTrigger />
        <Header />
      </main>
    </SidebarProvider>
  );
}
