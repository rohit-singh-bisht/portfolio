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
        <div className="relative flex basis-auto justify-end flex-col grow overflow-hidden">
          <div className="flex justify-center">
            <div className="justify-center mb-7 flex h-full text-2xl text-center px-6">
              <h1 className="text-[28px]">How can I help?</h1>
            </div>
          </div>
        </div>
        <div className="text-base mx-auto w-full grow">
          <ChatMessageInput />
        </div>
      </main>
    </div>
  );
}
