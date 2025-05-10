"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { formatNumber } from "@/utils/formatNumber";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [amount, setAmount] = useState<number | string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("TRY");
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Error");
      const data = await response.json();
      const rate = (data.conversion_rate * Number(amount)).toFixed(2);
      setResult(`${formatNumber(Number(amount))} ${fromCurrency} = ${formatNumber(Number(rate))} ${toCurrency}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Lütfen geçerli bir miktar girin.");
      setResult(undefined);
      return;
    } else {
      getExchangeRate();
      setError(null)
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="flex flex-col items-center w-full max-w-[370px]">
      <h1 className="font-bold text-white text-2xl">Para Birimi Dönüştürme</h1>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70 flex flex-col gap-8">
        <Input
          placeholder="Değer girin"
          onChange={setAmount}
          type="number"
          value={amount}
        />
        <div className="flex flex-col items-center justify-between gap-6">
          <Select selectedCurrency={fromCurrency} onChange={setFromCurrency} />
          <div className="transform transition-transform duration-300 hover:scale-110 rotate-90">
            <Button
              title={<Icon icon="icon-park-outline:switch" />}
              onClick={handleSwitch}
            />
          </div>
          <Select selectedCurrency={toCurrency} onChange={setToCurrency} />
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
