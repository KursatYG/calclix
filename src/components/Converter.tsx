import { useState, useEffect } from "react";
import { Unit, UnitType } from "@/types/units";
import { convertUnit, unitDefinitions } from "@/lib/unitDefinitions";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NumberConverterProps {
  unitType: UnitType;
}

export default function Converter({ unitType }: NumberConverterProps) {
  const units: Unit[] = unitDefinitions[unitType];
  const [fromUnit, setFromUnit] = useState<string>(units[0].name);
  const [toUnit, setToUnit] = useState<string>(units[1].name);
  const [inputValue, setInputValue] = useState<number | "">(0);
  const [outputValue, setOutputValue] = useState<number>(0);

  const handleSwitch = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  useEffect(() => {
    if (inputValue !== "" && inputValue >= 0) {
      const result = convertUnit(
        Number(inputValue),
        fromUnit,
        toUnit,
        unitType
      );
      setOutputValue(Number(result.toFixed(8)));
    } else {
      setOutputValue(0);
    }
  }, [inputValue, fromUnit, toUnit, unitType]);

  return (
    <div className="flex flex-col sm:flex-row gap-16 sm:gap-8">
      <div className="">
        <select
          className="border border-white/50 rounded-2xl py-3 px-1 mb-8 outline-0 w-full text-sm"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option
              className="bg-[#0F2027] text-sm"
              key={unit.name}
              value={unit.name}
            >
              {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
            </option>
          ))}
        </select>
        <input
          className="outline-0 text-3xl border-b w-full"
          type="number"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            setInputValue(value === "" ? "" : Number(value));
          }}
          placeholder="Değer girin"
        />
      </div>
      <div className="transform transition-transform duration-300">
        <Button
          title={
            <Icon
              icon="icon-park-outline:switch"
              className="rotate-90 sm:rotate-0 w-6 h-6 m-auto"
            />
          }
          onClick={handleSwitch}
          className="w-full"
        />
      </div>
      <div>
        <select
          className="border border-white/50 rounded-2xl py-3 px-1 text-sm mb-8 outline-0 w-full"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option className="bg-[#0F2027]" key={unit.name} value={unit.name}>
              {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
            </option>
          ))}
        </select>
        <input
          className="outline-0 text-3xl border-b w-full"
          type="number"
          value={outputValue}
          readOnly
          placeholder="Sonuç"
        />
      </div>
    </div>
  );
}
