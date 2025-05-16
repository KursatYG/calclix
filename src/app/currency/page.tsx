"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectCurrency from "@/components/SelectCurrency";
import { useInput } from "@/hooks/useInput";
import { formatNumberLs } from "@/utils/formatNumber";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useCallback, useEffect, useState } from "react";


const Page = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("TRY");
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  const [inputs, handleChange] = useInput({ amount: 1 });

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/exchange?from=${fromCurrency}&to=${toCurrency}&amount=${inputs.amount}`
      );
      if (!response.ok) {
        throw new Error("API isteği başarısız");
      }
      const data = await response.json();
      setResult(
        `${formatNumberLs(
          Number(inputs.amount)
        )} ${fromCurrency} = ${formatNumberLs(Number(data.result))} ${toCurrency}`
      );
    } catch (error) {
      setError(
        "Veri alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      );
      console.log(error);
    }
  }, [fromCurrency, toCurrency, inputs.amount]);

  useEffect(() => {
    if (
      !inputs.amount ||
      isNaN(Number(inputs.amount)) ||
      Number(inputs.amount) <= 0
    ) {
      setError("Lütfen geçerli bir miktar girin.");
      setResult(undefined);
      return;
    } else {
      getExchangeRate();
      setError(null);
    }
  }, [getExchangeRate, inputs.amount]);

  return (
    <div className="flex flex-col items-center w-full max-w-[370px]">
      <h1 className="font-bold text-white text-2xl">Para Birimi Dönüştürme</h1>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70 flex flex-col gap-8">
        <Input
          name="amount"
          placeholder="Değer girin"
          onChange={handleChange}
          type="number"
          value={inputs.amount.toString()}
        />
        <div className="flex flex-col items-center justify-between gap-6">
          <SelectCurrency
            selectedCurrency={fromCurrency}
            onChange={setFromCurrency}
          />
          <div className="transform transition-transform duration-300 hover:scale-110 w-full text-center">
            <Button
              title={
                <Icon
                  icon="icon-park-outline:switch"
                  className="rotate-90 m-auto"
                />
              }
              onClick={handleSwitch}
              className="w-1/2"
            />
          </div>
          <SelectCurrency
            selectedCurrency={toCurrency}
            onChange={setToCurrency}
          />
        </div>

        {error ? (
          <div className="text-center bg-red-500/20 py-2 rounded-lg text-red-300 shadow-sm">
            {error}
          </div>
        ) : (
          result && (
            <div className="text-center bg-white/20 py-2 rounded-lg shadow-sm drop-shadow-lg text-white">
              {result}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Page;
