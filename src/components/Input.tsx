import React from "react";

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value:string) => void;
};

const Input = ({ title, placeholder, value, onChange }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm md:text-base mb-2">{title}</label>
      <input
        value={value}
        type="number"
        className="border-b text-base md:text-lg border-white/50 px-4 pl-0 text-white outline-0"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
