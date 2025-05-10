"use client";
import { menuItems } from "@/data/menuItems";
import { MenuItem } from "@/types/menuItems";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentUnitType = pathname?.split("/")[1] || null;

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden py-2 px-3 rounded-2xl bg-white/10 text-white/80 shadow-md transition-all duration-200 active:scale-97"
      >
        Hesaplama Araçları
      </button>
      <div
        className={`${
          menuOpen
            ? "opacity-100 translate-y-4 pointer-events-auto "
            : "opacity-0 translate-y-0 pointer-events-none hidden"
        } sm:block sm:opacity-100 sm:pointer-events-auto sm:translate-y-0 transition-all duration-200 ease-in-out`}
      >
        <div className="flex flex-wrap justify-center gap-5 sm:justify-center md:border-r  sm:border-white/30">
          {menuItems.map((item: MenuItem) => {
            const isActive = currentUnitType
              ? `/${currentUnitType}` === item.path
              : item.path === "/";
            return (
              <Link
                onClick={() => setMenuOpen(!menuOpen)}
                href={item.path}
                key={item.id}
                className="flex flex-col items-center gap-2 w-16 sm:w-fit"
              >
                <div
                  className={`bg-white/10 backdrop-blur-md transition-all duration-200 active:scale-95 hover:scale-105 w-16 h-16 sm:w-30 sm:h-30 shadow-md rounded-2xl flex items-center justify-center ${
                    isActive ? "bg-white/30 scale-105" : "hover:bg-white/30"
                  }`}
                >
                  {" "}
                  <div className="text-white/80 flex flex-col gap-4 justify-center items-center">
                    <Icon
                      icon={item.icon}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <span className="text-lg leading-5 text-center hidden sm:block">
                      {item.label}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-center sm:hidden text-white/80">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
