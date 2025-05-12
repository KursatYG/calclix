"use client";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";
import React, { useEffect, useState } from "react";

const validateInputs = (price: number, discount: number) => {
  const isValidPrice = !isNaN(price) && price >= 0;
  const isValidDiscount = !isNaN(discount) && discount >= 0 && discount <= 100;
  return isValidPrice && isValidDiscount;
};
const roundToTwoDecimals = (num: number) => Number(num.toFixed(2));

const Page = () => {
  const [endPrice, setEndPrice] = useState<number | null>(null);
  const [gain, setGain] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const [inputs, handleChange] = useInput({ price: "", discount: "" });

  const priceNum = Number(inputs.price);
  const discountNum = Number(inputs.discount);

  useEffect(() => {
    if (inputs.price === "" || inputs.discount === "") {
      setEndPrice(null);
      setGain(null);
      setError("");
      return;
    }

    if (!validateInputs(priceNum, discountNum)) {
      setEndPrice(null);
      setGain(null);
      setError(
        discountNum < 0 || discountNum > 100
          ? "İndirim yüzdesi 0 ile 100 arasında olmalıdır."
          : "Lütfen geçerli fiyat ve indirim değerleri girin."
      );
      return;
    }

    const discountAmount = priceNum * (discountNum / 100);
    setEndPrice(roundToTwoDecimals(priceNum - discountAmount));
    setGain(roundToTwoDecimals(discountAmount));
    setError("");
  }, [inputs.price, inputs.discount]);

  return (
    <div className="text-white/70  max-w-[370px] w-full">
      <h1 className="font-bold text-white text-2xl text-center">İndirim</h1>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70 flex flex-col gap-8">
        <Input
          name="price"
          type="number"
          title="Normal fiyat"
          value={inputs.price}
          onChange={handleChange}
          placeholder="100"
        />
        <Input
          name="discount"
          type="number"
          title="İndirim (%)"
          value={inputs.discount}
          onChange={handleChange}
          placeholder="10"
          min={0}
          max={100}
        />

        <div className="flex flex-col gap-1">
          <span className="block text-white/80 text-sm">Son Fiyat</span>
          <p className="w-full p-2 rounded-lg bg-white/20 text-white">
            {endPrice} {endPrice ? "TL" : "\u00A0"}
          </p>
        </div>

        {gain !== null && (
          <p className="text-center text-white/70">
            Kazancınız: <span>{gain} TL</span>
          </p>
        )}
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Page;
