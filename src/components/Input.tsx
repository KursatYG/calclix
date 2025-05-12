import React from "react";

type Props = {
  title?: string;
  placeholder?: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number";
  className?: string;
  name: string | number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  title,
  placeholder,
  value,
  onChange,
  type,
  className,
  name,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm md:text-base mb-2">{title}</label>
      <input
        name={name}
        value={value}
        type={type}
        className={`border-b  md:text-lg border-white/50 text-white outline-0 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
