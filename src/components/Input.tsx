import React from "react";

type Props = {
  title?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: number) => void;
  readOnly?: boolean;
  type: string;
};

const Input = ({
  title,
  placeholder,
  value,
  onChange,
  readOnly,
  type,
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm md:text-base mb-2">{title}</label>
      <input
        value={value === "" ? "" : String(value)}
        type={type}
        className="border-b text-base md:text-lg border-white/50 text-white outline-0"
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === "" ? NaN : Number(val));
        }}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
