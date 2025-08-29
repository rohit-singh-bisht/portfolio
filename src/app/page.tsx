import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatMessageInput from "@/components/common/chat-message-input";

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
      <main className="w-full flex flex-col">
        <Header />
        <div className="relative flex basis-auto flex-col grow overflow-hidden">
          <div className="relative h-full"></div>
        </div>
        <div className="text-base mx-auto [--thread-content-margin:--spacing(4)] @[37rem]:[--thread-content-margin:--spacing(6)] @[72rem]:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)">
          <div className="[--thread-content-max-width:32rem] @[34rem]:[--thread-content-max-width:40rem] @[64rem]:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1">
            <ChatMessageInput />
          </div>
        </div>
      </main>
    </div>
  );
}
