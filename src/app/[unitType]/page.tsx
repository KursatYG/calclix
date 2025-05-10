"use client";

import { useParams } from "next/navigation";
import { UnitType } from "@/types/units";
import Converter from "@/components/Converter";
import { unitDefinitions } from "@/lib/unitDefinitions";
import { menuItems } from "@/data/menuItems";

export default function UnitConverter() {
  const params = useParams();
  const unitType = params.unitType as string;

  if (!unitType || !(unitType in unitDefinitions)) {
    return <div>Geçersiz birim türü</div>;
  }

  const menuItem = menuItems.find((item) => item.path === `/${unitType}`);
  const title = menuItem ? `${menuItem.label} Dönüştürücü` : "Dönüştürücü";

  return (
    <div className="text-white text-center max-w-[370px] w-full">
      <h1 className=" text-2xl font-bold">{title}</h1>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70">
        <Converter unitType={unitType as UnitType} />
      </div>
    </div>
  );
}
