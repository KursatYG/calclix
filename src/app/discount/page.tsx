"use client";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [price, setPrice] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [endPrice, setEndPrice] = useState<number | null>(null);
  const [gain, setGain] = useState<number>();
  const [error, setError] = useState<string>("");

  const priceNum = Number(price);
  const discountNum = Number(discount);

  const isValid =
    !isNaN(priceNum) &&
    priceNum >= 0 &&
    !isNaN(discountNum) &&
    discountNum >= 0;

  useEffect(() => {
    if (isValid && price !== "" && discount !== "") {
      const discountAmount = priceNum * (discountNum / 100);
      const result = priceNum - discountAmount;
      setEndPrice(Number(result.toFixed(2)));
      setGain(Number(discountAmount.toFixed(2)));
      setError("");
    } else {
      setEndPrice(0);
      setGain(0);
      if (price === "" || discount === "") {
        setError("");
      } else if (discountNum < 0 || discountNum > 100) {
        setError("İndirim yüzdesi 0 ile 100 arasında olmalıdır.");
      } else {
        setError("Lütfen geçerli fiyat ve indirim değerleri girin.");
      }
    }
  }, [price, discount, priceNum, discountNum, isValid]);

  return (
    <div className="text-white/70 sm:border border-white/50 sm:p-6 rounded-2xl sm:max-w-[400px]">
      <h1 className="font-bold text-white mb-8 text-center">İndirim</h1>
      <div className="flex flex-col gap-8 mb-8">
        <Input
          type="number"
          title="Normal fiyat"
          value={price}
          onChange={setPrice}
          placeholder="100"
        />
        <Input
          type="number"
          title="İndirim (%)"
          value={discount}
          onChange={setDiscount}
          placeholder="10"
        />
        {endPrice !== null && (
          <div className="flex flex-col gap-1">
            <span className="block text-white/80 text-sm">Son Fiyat</span>
            <p className="w-full p-2 rounded-lg bg-white/20 text-white">
              {endPrice} TL
            </p>
          </div>
        )}
      </div>
      {gain !== 0 && (
        <p className="text-center text-white/70">
          Kazancınız: <span>{gain} TL</span>
        </p>
      )}
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      
    </div>
  );
};

export default Page;
