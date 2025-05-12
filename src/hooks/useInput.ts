import { useCallback, useState } from "react";


export const useInput = <T extends Record<string, number | "">>(initialState: T) => {
  const [inputs, setInputs] = useState<T>(initialState);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInputs((prev) => ({
        ...prev,
        [name]: value === "" ? "" : isNaN(Number(value)) ? 0 : Number(value),
      }));
    },
    []
  );

  return [inputs, handleChange] as const;
};
