"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { Logo } from "../icons/logo";
import { SidebarTrigger } from "../icons/sidebar-trigger";
import MenuItem from "../common/menu-item";
import NewChatIcon from "../icons/new-chat";
import SearchIcon from "../icons/search";
import LibraryIcon from "../icons/library";
import Link from "next/link";

export default function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const menuGroups = [
    {
      label: "New chat",
      icon: <NewChatIcon />,
    },
    {
      label: "Search chats",
      icon: <SearchIcon />,
    },
    {
      label: "Projects Library",
      icon: <LibraryIcon />,
    },
  ];

  const handleSidebarToggle = (type?: string) => {
    if (type === "sidebar") {
      if (state === "collapsed") {
        toggleSidebar();
      }
    } else {
      toggleSidebar();
    }
  };

  return (
    <Sidebar collapsible="icon" onClick={() => handleSidebarToggle("sidebar")} className={`${state === "collapsed" ? "cursor-e-resize" : "cursor-default"}`}>
      <SidebarHeader className="p-0 pb-4">
        <div className="flex flex-row items-center justify-between touch:p-1.5 p-2">
          <Link
            href="/"
            className={`hover:bg-[var(--surface-hover)] touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
              state === "collapsed" ? "group-hover:hidden group-focus-visible:hidden" : ""
            }`}
          >
            <Logo />
          </Link>

          <button
            className={
              `hover:bg-[var(--surface-hover)] rounded-lg touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center group-hover:flex group-focus-visible:flex transition-all ` +
              (state === "collapsed" ? "cursor-e-resize hidden" : "cursor-w-resize visible max-md:flex")
            }
            onClick={() => handleSidebarToggle()}
          >
            <SidebarTrigger className="opacity-70" aria-label="Toggle Sidebar" />
          </button>
        </div>
        <aside className="touch:px-1.5 px-2 flex flex-col gap-0.5">
          {menuGroups?.map((group, index) => (
            <MenuItem key={index} icon={group.icon} label={group.label} />
          ))}
        </aside>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>

          {state !== "collapsed" && (
            <div>
              <MenuItem label={"Tell me about Rohit."} />
              <MenuItem label={"What experience does Rohit have?"} />
              <MenuItem label={"Which frameworks does Rohit know?"} />
              <MenuItem label={"Can I see some of Rohit’s work?"} />
              <MenuItem label={"How can I contact Rohit?"} />
              <MenuItem label={"Can I see Rohit’s resume?"} />
              <MenuItem label={"What are Rohit’s strengths?"} />
              <MenuItem label={"What is Rohit’s educational background?"} />
            </div>
          )}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="group __menu-item hover:bg-[var(--menu-secondary-hover)] rounded-lg px-2 py-2 touch:p-1.5 cursor-pointer w-full">
          <div className="flex min-w-0 items-center gap-1.5">
            <div className="flex items-center justify-center icon">
              <div className="flex justify-center items-center overflow-hidden rounded-full select-none bg-slate-500 h-7 w-7 shrink-0">R</div>
            </div>
            <div className="flex flex-col min-w-0 grow items-start justify-center">
              <div className="truncate">Rohit Singh Bisht</div>
              <div className="opacity-70 text-xs">Premium</div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
