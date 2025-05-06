import React from "react";
import Key from "../Key";

type Props = {
  handleNumberInput: (title: string) => void;
  handleOperatorInput: (title: string) => void;
  handleClear: (btnClear: string) => void;
  handleDelete: () => void;
  handleEqual: () => void;
  handlePercentage: () => void;
  handleComma: () => void;
  btnClear: string;
};

const Keypad = ({
  handleNumberInput,
  handleOperatorInput,
  handleClear,
  handleDelete,
  handleEqual,
  handlePercentage,
  handleComma,
  btnClear,
}: Props) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Key title={btnClear} onClick={() => handleClear(btnClear)} />
      <Key title="⌫" onClick={handleDelete} />
      <Key title="%" onClick={handlePercentage} />
      <Key title="÷" onClick={handleOperatorInput} />
      <Key title="7" onClick={handleNumberInput} />
      <Key title="8" onClick={handleNumberInput} />
      <Key title="9" onClick={handleNumberInput} />
      <Key title="x" onClick={handleOperatorInput} />
      <Key title="4" onClick={handleNumberInput} />
      <Key title="5" onClick={handleNumberInput} />
      <Key title="6" onClick={handleNumberInput} />
      <Key title="-" onClick={handleOperatorInput} />
      <Key title="1" onClick={handleNumberInput} />
      <Key title="2" onClick={handleNumberInput} />
      <Key title="3" onClick={handleNumberInput} />
      <Key title="+" onClick={handleOperatorInput} />
      <Key title="0" onClick={handleNumberInput} />
      <Key title="00" onClick={handleNumberInput} />
      <Key title="." onClick={handleComma} />
      <Key title="=" type="equal" onClick={handleEqual} />
    </div>
  );
};

export default Keypad;
