"use client";

import { useParams } from "next/navigation";
import { UnitType } from "@/types/units";
import Converter from "@/components/Converter";
import { unitDefinitions } from "@/lib/unitDefinitions";
import { menuItems } from "@/data/menuItems";

export default function UnitConverter() {
  const params = useParams();
  const unitType = params.unitType as string;

  console.log(unitType);

  if (!unitType || !(unitType in unitDefinitions)) {
    return <div>Geçersiz birim türü</div>;
  }

  const menuItem = menuItems.find((item) => item.path === `/${unitType}`);
  const title = menuItem ? `${menuItem.label} Dönüştürücü` : "Dönüştürücü";

  return (
    <div className="text-white text-center">
      <h1 className="mb-8 text-2xl">{title}</h1>
      <Converter unitType={unitType as UnitType} />
    </div>
  );
}
