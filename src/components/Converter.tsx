import { useState, useEffect } from "react";
import { Unit, UnitType } from "@/types/units";
import { convertUnit, unitDefinitions } from "@/lib/unitDefinitions";


interface NumberConverterProps {
  unitType: UnitType;
}

export default function Converter({ unitType }: NumberConverterProps) {
  const units: Unit[] = unitDefinitions[unitType];
  const [fromUnit, setFromUnit] = useState<string>(units[0].name);
  const [toUnit, setToUnit] = useState<string>(units[1].name);
  const [inputValue, setInputValue] = useState<number | "">(0);
  const [outputValue, setOutputValue] = useState<number>(0);

  useEffect(() => {
    if (inputValue !== "" && inputValue >= 0) {
      const result = convertUnit(Number(inputValue), fromUnit, toUnit, unitType);
      setOutputValue(Number(result.toFixed(8)));
    } else {
      setOutputValue(0);
    }
  }, [inputValue, fromUnit, toUnit, unitType]);

  return (
    <div className="flex flex-col sm:flex-row gap-16">
      <div>
        <select className="border border-white/50 rounded-2xl p-3 mb-8 outline-0 w-full" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {units.map((unit) => (
            <option className="bg-[#0F2027] text-sm" key={unit.name} value={unit.name}>
              {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
            </option>
          ))}
        </select>
        <input
        className="outline-0 text-3xl border-b w-full"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.valueAsNumber || "")}
          placeholder="Değer girin"
        />
      </div>
      <div>
        <select className="border border-white/50 rounded-2xl p-3 mb-8 outline-0 w-full" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((unit) => (
            <option className="bg-[#0F2027]" key={unit.name} value={unit.name}>
              {unit.name} {unit.symbol ? `(${unit.symbol})` : ""}
            </option>
          ))}
        </select>
        <input className="outline-0 text-3xl border-b w-full" type="number" value={outputValue} readOnly placeholder="Sonuç" />
      </div>
    </div>
  );
}