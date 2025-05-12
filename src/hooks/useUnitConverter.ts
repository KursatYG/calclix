import { convertUnit, unitDefinitions } from "@/lib/unitDefinitions";
import { UnitType } from "@/types/units";
import { useCallback, useEffect, useState } from "react";

export const useUnitConverter = (inputValue: number, unitType: UnitType) => {
  const units = unitDefinitions[unitType];
  const [fromUnit, setFromUnit] = useState<string>(units[0].name);
  const [toUnit, setToUnit] = useState<string>(units[1].name);
  const [outputValue, setOutputValue] = useState<number>(0);

  const switchUnits = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }, [fromUnit, toUnit]);

  useEffect(() => {
    if (!isNaN(inputValue) && inputValue >= 0) {
      const result = convertUnit(inputValue, fromUnit, toUnit, unitType);
      setOutputValue(Number(result));
    } else {
      setOutputValue(0);
    }
  }, [inputValue, fromUnit, toUnit, unitType]);

  return {
    fromUnit,
    toUnit,
    outputValue,
    setFromUnit,
    setToUnit,
    switchUnits,
    units,
  };
};
