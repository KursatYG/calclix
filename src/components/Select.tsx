import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: { name: string; symbol?: string }[];
};

const Select = ({ value, onChange, options }: Props) => {
  return (
    <div className="relative mb-8">
      <select
        className="bg-white/20 drop-shadow-lg shadow-md rounded-2xl py-3 px-3 outline-0 w-full  text-sm appearance-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            className="bg-[#0F2027] text-sm"
            key={option.name}
            value={option.name}
          >
            {option.name} {option.symbol ? `(${option.symbol})` : ""}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none ">
        <Icon icon="mdi:chevron-down" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Select;
