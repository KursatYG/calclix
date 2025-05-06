"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const monthName = [
    { month: "01", name: "Ocak" },
    { month: "02", name: "Şubat" },
    { month: "03", name: "Mart" },
    { month: "04", name: "Nisan" },
    { month: "05", name: "Mayıs" },
    { month: "06", name: "Haziran" },
    { month: "07", name: "Temmuz" },
    { month: "08", name: "Ağustos" },
    { month: "09", name: "Eylül" },
    { month: "10", name: "Ekim" },
    { month: "11", name: "Kasım" },
    { month: "12", name: "Aralık" },
  ];

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [dateDifference, setDateDifference] = useState<{
    years: number;
    months: number;
    days: number;
  }>({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const todayDate = new Date().toISOString().split("T")[0];
    setStartDate(todayDate);
    setEndDate(todayDate);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      calculateDateDifference();
    }
  }, [startDate, endDate]);

  const formatDate = (date: string): string => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    const monthObj = monthName.find((m) => m.month === month);
    const monthNameStr = monthObj ? monthObj.name.slice(0, 3) : month;
    return `${day} ${monthNameStr} ${year}`;
  };

  const calculateDateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const earlier = start <= end ? start : end;
    const later = start <= end ? end : start;

    let years = later.getFullYear() - earlier.getFullYear();
    let months = later.getMonth() - earlier.getMonth();
    let days = later.getDate() - earlier.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(later.getFullYear(), later.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setDateDifference({ years, months, days });
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full max-w-[370px]">
      <h1 className="text-2xl font-bold text-white mb-4">Tarih Hesaplama</h1>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md mt-4 text-white/70 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label>Başlangıç</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              className="date-input hover:text-white transition-all duration-100 cursor-pointer"
            />
          </div>
          <div className="flex justify-between">
            <label>Bitiş</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              className="date-input hover:text-white transition-all duration-100 cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 flex flex-col items-center shadow-md">
          <p className="mb-4 text-white font-bold">Fark</p>
          <div className="flex justify-between p-6 w-full border-b border-t border-white/30">
            <div className="flex flex-col items-center">
              <label htmlFor="">Yıl</label>
              <p className="font-bold text-white">{dateDifference.years}</p>
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="">Ay</label>
              <p className="font-bold text-white">{dateDifference.months}</p>
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="">Gün</label>
              <p className="font-bold text-white">{dateDifference.days} </p>
            </div>
          </div>
          <div className="flex justify-between  gap-8  mt-4 ">
            <div className="text-center">
              <label>Başlangıç</label>
              <p className="text-white font-bold">{formatDate(startDate)}</p>
            </div>
            <div className="text-center">
              <label>Bitiş</label>
              <p className="text-white font-bold">{formatDate(endDate)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
