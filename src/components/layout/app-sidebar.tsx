"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { Logo } from "../icons/logo";
import { SidebarTrigger } from "../icons/sidebar-trigger";
import MenuItem from "../common/MenuItem";
import NewChatIcon from "../icons/new-chat";
import SearchIcon from "../icons/search";
import LibraryIcon from "../icons/library";
import { stat } from "fs";

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
      label: "Library",
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
      <SidebarHeader className="p-0">
        <div className="flex flex-row items-center justify-between touch:p-1.5 p-2">
          <a
            href="/"
            className={`hover:bg-[var(--surface-hover)] touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
              state === "collapsed" ? "group-hover:hidden group-focus-visible:hidden" : ""
            }`}
          >
            <Logo />
          </a>

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
      <SidebarContent className="py-2 touch:py-1.5">
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
