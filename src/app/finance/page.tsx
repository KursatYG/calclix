"use client";

import Button from "@/components/Button";
import TotalPayment from "@/components/finance/TotalPayment";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [money, setMoney] = useState<number | "">("");
  const [interest, setInterest] = useState<number | "">("");
  const [time, setTime] = useState<number | "">(3);
  const [investType, setInvestType] = useState<"only" | "recurring">("only");
  const [selected, setSelected] = useState<"credit" | "investment">("credit");
  const [result, setResult] = useState<number | null>(null);
  const [resultScreen, setResultScreen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [payment, setPayment] = useState<number | null>(null);

  const moneyNum = Number(money);
  const interestNum = Number(interest);
  const timeNum = Number(time);

  const isValid =
    !isNaN(moneyNum) &&
    moneyNum > 0 &&
    !isNaN(interestNum) &&
    interestNum >= 0 &&
    !isNaN(timeNum) &&
    timeNum >= 3 &&
    timeNum <= 36;

  const calculatePayment = () => {
    if (
      !isValid ||
      money === "" ||
      interest === "" ||
      time === "" ||
      interestNum === 0 ||
      moneyNum === 0
    ) {
      setError("Lütfen geçerli ana para, faiz oranı ve vade süresi girin.");
      setResult(null);
      return;
    }

    const monthlyRate = interestNum / 100 / 12;

    if (selected === "credit") {
      const installment =
        (moneyNum * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -timeNum));
      setPayment(Number(installment.toFixed(2)));
      const totalPayment = installment * timeNum;
      setResult(Number(totalPayment.toFixed(2)));
    } else {
      let finalAmount: number;
      if (investType === "only") {
        finalAmount = moneyNum * Math.pow(1 + monthlyRate, timeNum);
      } else {
        finalAmount = 0;
        for (let i = 0; i < timeNum; i++) {
          finalAmount += moneyNum * Math.pow(1 + monthlyRate, timeNum - i);
        }
      }
      setResult(Number(finalAmount.toFixed(2)));
    }
    setError("");
  };

  const handleCalculation = () => {
    calculatePayment();
    setResultScreen(true);
  };

  useEffect(() => {
    if (resultScreen && !isValid) {
      setResultScreen(false);
    }
  }, [money, interest, time, isValid]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full max-w-[370px]">
      <h1 className="text-2xl font-bold text-white mb-4">Finans Hesaplama</h1>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70">
        {resultScreen && !error ? (
          <TotalPayment
            result={result}
            onBack={() => setResultScreen(false)}
            time={time}
            selected={selected}
            payment={payment}
            money={money}
            investType={investType}

          />
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Ana Para (TL)</label>
              <Input
                type="number"
                placeholder="Miktar girin"
                value={money}
                onChange={setMoney}
              />
            </div>
            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  selected === "credit"
                    ? "bg-white/30 text-white"
                    : "bg-white/10 text-white/70"
                }`}
                onClick={() => setSelected("credit")}
              >
                Kredi
              </button>
              <button
                className={`flex-1 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  selected === "investment"
                    ? "bg-white/30 text-white"
                    : "bg-white/10 text-white/70"
                }`}
                onClick={() => setSelected("investment")}
              >
                Yatırım
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Faiz Oranı (%)</label>
              <Input
                type="number"
                placeholder="Oran girin"
                value={interest}
                onChange={setInterest}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-white/80 text-sm">Vade Süresi (Ay)</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={3}
                  max={36}
                  step={3}
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-white/70 w-1/4">{time} ay</span>
              </div>
            </div>
            {selected === "investment" && (
              <div className="flex flex-col gap-1">
                <label className="text-white/80 text-sm">Yatırım Türü</label>
                <select
                  value={investType}
                  onChange={(e) =>
                    setInvestType(e.target.value as "only" | "recurring")
                  }
                  className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="only" className="bg-[#0F2027]">Bir Kez</option>
                  <option value="recurring" className="bg-[#0F2027]">Yinelenen</option>
                </select>
              </div>
            )}
            <Button title="Hesapla" onClick={handleCalculation} />
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
