import React from "react";

type Props = {
  title: string;
  type?: "equal";
  onClick: (title: string) => void;
};

const Key = ({ title, type, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={`sm:w-16 sm:h-16 text-2xl ${
        type == "equal" ? "bg-white/30" : "bg-white/10"
      } text-white/80  rounded-2xl backdrop-blur-md transition-all duration-200 active:scale-95 hover:scale-105 hover:bg-white/30 shadow-md flex  justify-center items-center p-2.5 cursor-pointer`}
    >
      {title}
    </button>
  );
};

export default Key;
