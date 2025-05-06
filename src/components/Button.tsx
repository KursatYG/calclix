import React from "react";

type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean  
};

const Button = ({ title, onClick,disabled }: Props) => {
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      className="bg-white/50 p-2 rounded-2xl mt-8 text-[#0F2027] w-full hover:bg-white/30 active:bg-white/60  active:scale-98 transition-all duration-75 cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
