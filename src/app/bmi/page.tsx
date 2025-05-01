"use client";

import Input from "@/components/Input";
import React, { useState } from "react";

const Page = () => {
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const numericAge = parseFloat(age)
  const numericWeight = parseFloat(weight);
  const numericHeight = parseFloat(height)

  const calculateBmi = () => {
    if ((!isNaN(numericWeight) && numericWeight > 0)) {
      const heightInMeters = numericHeight / 100;
      const bmiValue = numericWeight / (heightInMeters * heightInMeters);
      setBMI(Number(bmiValue.toFixed(2)));
    }
  };

  return (
    <div className=" text-white/70 border border-white/50 p-6 rounded-2xl">
      <h1 className="text-white font-bold mb-8 text-center">
        Vücut Kitle Endeksi Hesaplayıcı
      </h1>
      <div className="flex flex-col items-center justify-center gap-8">
        <Input
          title="Yaş"
          placeholder="Yaş girin"
          value={age}
          onChange={setAge}
        />
        <Input
          title="Boy (cm)"
          placeholder="Boy girin"
          value={height}
          onChange={setHeight}
        />
        <Input
          title="Ağırlık (kg)"
          placeholder="Kilo girin"
          value={weight}
          onChange={setWeight}
        />
      </div>
      <button className="bg-white/50 p-2 rounded-2xl mt-8 text-[#0F2027] w-full">
        Hesapla
      </button>
    </div>
  );
};
export default Page;
