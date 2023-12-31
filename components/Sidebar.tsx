"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface sidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar: React.FC<sidebarProps> = ({ children, songs }) => {
  const pathName = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );
  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div className="hidden md:flex flex-col h-full w-[300px] p-2 gap-y-2 bg-black">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => {
              return <SidebarItem key={item.label} {...item} />;
            })}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="py-2 md:pr-2 flex-1 overflow-y-auto h-full">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
