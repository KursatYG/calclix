import { menuItems } from "@/data/menuItems";
import { MenuItem } from "@/types/menuItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 border-white/20 text-white/80 mt-16">
      <div className="flex flex-col items-center py-10 gap-4">
        <div className="flex flex-col gap-3 items-center">
          <Image src="logo.svg" alt="logo" width={120} height={150} />
          <p className="text-base">Hızlı ve Kolay Hesaplama</p>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-2 gap-x-4">
            {menuItems.map((item: MenuItem) => (
              <li
                key={item.id}
                className="text-white/30 hover:text-white/80 duration-100 transition-all"
              >
                <Link href={item.path} className="">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white/30">© 2025 Calclix. Made with 💻 by <span className="text-white/70 font-bold">KursatYG</span></p>
      </div>
    </div>
  );
};

export default Footer;
