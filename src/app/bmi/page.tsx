"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";
import { Icon } from "@iconify/react/dist/iconify.js";

import React, { useState } from "react";



const Page = () => {
  const [selectGender, setSelectGender] = useState<string>("male");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [inputs, handleChange] = useInput({ age:"",height:"", weight:""  });

  const handleGenderSelect = (gender: string) => {
    setSelectGender(gender);
  };

  const numericAge = Number(inputs.age);
  const numericWeight = Number(inputs.weight);
  const numericHeight = Number(inputs.height);

  const calculateBmi = () => {
    if (numericWeight > 0 && numericHeight > 0 && numericAge > 0) {
      const heightInMeters = numericHeight / 100;
      const bmiValue = numericWeight / heightInMeters ** 2;
      const roundedBmi = Number(bmiValue.toFixed(2));
      setBMI(roundedBmi);

      if (numericAge < 18) {
        setCategory("Çocuklar için persentil tablosuna bakılmalı");
        setMessage(
          "2-18 yaş arası çocuklar için VKİ, yaş ve cinsiyete göre persentil tablosuyla değerlendirilir. Doktorunuza danışın."
        );
        return;
      }

      let cat = "";
      if (bmiValue < 18.5) cat = "Zayıf";
      else if (bmiValue < 25) cat = "Normal";
      else if (bmiValue < 30) cat = "Kilolu";
      else if (bmiValue < 35) cat = "Obez (Sınıf I)";
      else if (bmiValue < 40) cat = "Obez (Sınıf II)";
      else cat = "Aşırı Obez";

      setCategory(cat);
      setMessage(
        numericAge >= 65
          ? "65 yaş üstü bireylerde hafif kilolu (VKİ 25-27) daha sağlıklı olabilir."
          : "Bel çevresi ölçümü, VKİ’yi değerlendirirken faydalı olabilir."
      );
    } else {
      setBMI(null);
      setCategory("");
      setMessage("Lütfen bilgileri eksiksiz ve geçerli girin.");
    }
  };

  return (
    <div className="text-white/70  w-full max-w-[370px]">
      <h1 className="text-white font-bold mb-8 text-center text-2xl">
        Vücut Kitle Endeksi Hesaplayıcı
      </h1>
      <div className="flex flex-col items-center gap-8 w-full  bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md max-w-md mt-4 text-white/70">
        <div className="flex items-start gap-4  justify-between w-full">
          <div className="w-full">
            <Input
              name="age"
              type="number"
              title="Yaş"
              placeholder="Yaş girin"
              value={inputs.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base">
              Cinsiyet: {selectGender === "male" ? "Erkek" : "Kadın"}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => handleGenderSelect("male")}
                className={`flex items-center justify-center sm:w-12 h-10 ${
                  selectGender === "male" ? "bg-white/30" : "bg-white/10"
                } rounded-lg cursor-pointer transition-all duration-150 active:scale-95 active:bg-white/30`}
              >
                <Icon icon="fa:male" className="w-8 h-8" />
              </button>
              <button
                onClick={() => handleGenderSelect("female")}
                className={`flex items-center justify-center sm:w-12 h-10 ${
                  selectGender === "female" ? "bg-white/30" : "bg-white/10"
                } rounded-lg cursor-pointer transition-all duration-150 active:scale-95 active:bg-white/30`}
              >
                <Icon icon="fa:female" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
        <Input
          name="height"
          type="number"
          title="Boy (cm)"
          placeholder="Boy girin"
          value={inputs.height}
          onChange={handleChange}
        />
        <Input
          name="weight"
          type="number"
          title="Ağırlık (kg)"
          placeholder="Kilo girin"
          value={inputs.weight}
          onChange={handleChange}
        />{" "}
        <Button title="Hesapla" onClick={calculateBmi} className="w-full" />
        {bmi !== null && (
          <div className="flex flex-col gap-3 mt-8 text-white text-center">
            <p className="font-bold text-5xl">{bmi}</p>
            <p>Vücut kitle endeksi</p>
            <p>
              Kategori: <span className="font-bold">{category}</span>
            </p>
            {message && (
              <p className="mt-2 text-center text-white/80">{message}</p>
            )}
          </div>
        )}
        {message && !bmi && (
          <p className="mt-2 text-red-400 text-center">{message}</p>
        )}
        {((inputs.height !== "" && inputs.height <= 0) || (inputs.weight !== "" && inputs.weight <= 0)) && (
          <p className="text-red-400 text-sm mt-2 text-center">
            Boy ve kilo pozitif bir değer olmalıdır.
          </p>
        )}
      </div>
    </div>
  );
};
export default Page;
