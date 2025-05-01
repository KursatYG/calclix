import React from "react";
import Button from "../Button";

type Props = {
  handleNumberInput: (title: string) => void;
  handleOperatorInput: (title: string) => void;
  handleClear: (btnClear:string) => void;
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
      <Button title={btnClear} onClick={() => handleClear(btnClear)} />
      <Button title="⌫" onClick={handleDelete} />
      <Button title="%" onClick={handlePercentage} />
      <Button title="÷" onClick={handleOperatorInput} />
      <Button title="7" onClick={handleNumberInput} />
      <Button title="8" onClick={handleNumberInput} />
      <Button title="9" onClick={handleNumberInput} />
      <Button title="x" onClick={handleOperatorInput} />
      <Button title="4" onClick={handleNumberInput} />
      <Button title="5" onClick={handleNumberInput} />
      <Button title="6" onClick={handleNumberInput} />
      <Button title="-" onClick={handleOperatorInput} />
      <Button title="1" onClick={handleNumberInput} />
      <Button title="2" onClick={handleNumberInput} />
      <Button title="3" onClick={handleNumberInput} />
      <Button title="+" onClick={handleOperatorInput} />
      <Button title="0" onClick={handleNumberInput} />
      <Button title="00" onClick={handleNumberInput} />
      <Button title="." onClick={handleComma} />
      <Button title="=" type="equal" onClick={handleEqual} />
    </div>
  );
};

export default Keypad;
