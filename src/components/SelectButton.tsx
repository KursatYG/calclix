import React from "react";

type Props = {
  options: string[];
  selectedOption: string;
  onSelect: (value: string) => void;
};

const SelectButton = ({ options, selectedOption, onSelect }: Props) => {
  return (
    <select className="border border-b-0 px-3 py-3 rounded-t-2xl"></select>
  );
};

export default SelectButton;
