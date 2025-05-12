import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Select from "./Select";
import Input from "./Input";
import { useInput } from "@/hooks/useInput";
import { useUnitConverter } from "@/hooks/useUnitConverter";
import { UnitType } from "@/types/units";

interface ConverterProps {
  unitType: UnitType;
}

export default function Converter({ unitType }: ConverterProps) {
  const [inputs, handleChange] = useInput({ inputValue: 0 });
  const {
    fromUnit,
    toUnit,
    outputValue,
    setFromUnit,
    setToUnit,
    switchUnits,
    units,
  } = useUnitConverter(Number(inputs.inputValue), unitType);

  return (
    <div className="flex flex-col  gap-8">
      <div className="">
        <Select value={fromUnit} onChange={setFromUnit} options={units} />
        <Input
          name="inputValue"
          type="number"
          value={inputs.inputValue.toString()}
          placeholder="Değer girin"
          onChange={handleChange}
          className="text-2xl"
        />
      </div>
      <div className="transform transition-transform duration-300">
        <Button
          title={
            <Icon
              icon="icon-park-outline:switch"
              className="rotate-90  w-6 h-6 m-auto"
            />
          }
          onClick={switchUnits}
          className="w-full"
        />
      </div>
      <div className="">
        <Select value={toUnit} onChange={setToUnit} options={units} />
        <Input
          name="outputValue"
          type="number"
          value={outputValue}
          placeholder="Değer girin"
          className="text-2xl"
          readOnly
        />
      </div>
    </div>
  );
}
