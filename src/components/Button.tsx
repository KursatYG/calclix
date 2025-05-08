import React from "react";

type Props = {
  title: string | React.ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  className?: string
};

const Button = ({ title, onClick, disabled, className }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-white/50 p-2 rounded-2xl  text-[#0F2027]  hover:bg-white/30 active:bg-white/60  active:scale-98 transition-all duration-75 cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
