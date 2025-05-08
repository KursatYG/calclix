import { formatNumber } from "@/utils/formatNumber";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {
  result: number | null;
  onBack: () => void;
  time: number | "";
  selected: string;
  payment: number | null;
  money: number | "";
  investType: string;
};

const TotalPayment = ({
  result,
  onBack,
  time,
  selected,
  payment,
  money,
  investType,
}: Props) => {
  let interest;
  let totalInvestment;
  let principalPercentage;
  let interestPercentage;

  if (selected === "credit" || investType === "only") {
    totalInvestment = Number(money);
    interest = Number(result) - totalInvestment;
    principalPercentage = (totalInvestment / Number(result)) * 100;
    interestPercentage = (interest / Number(result)) * 100;
  } else {
    totalInvestment = Number(money) * Number(time);
    interest = Number(result) - totalInvestment;
    principalPercentage = (totalInvestment / Number(result)) * 100;
    interestPercentage = (interest / Number(result)) * 100;
  }

  return (
    <div className="">
      <div className="flex items-center relative mb-8">
        <div className="absolute">
          <Icon
            onClick={onBack}
            icon="mingcute:arrow-left-line"
            className="text-white/70 hover:text-white/80 w-6 h-6 cursor-pointer"
          />
        </div>
        <h1 className=" w-1/1 text-center font-bold text-white">Ayrıntılar</h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-center border-b border-white/30 pb-8">
          <h2 className="mb-3">
            {selected === "credit" ? "Aylık eşit taksit" : "Toplam değer"}
          </h2>
          <p className="">{time} ay</p>
          <p className="text-2xl text-white font-bold">
            {selected === "credit" ? `${formatNumber(Number(payment))}` : `${formatNumber(Number(result))}`}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {selected === "credit" && (
            <div className="flex flex-col items-center mb-4">
              <span className="text-sm">Toplam ödeme</span>{" "}
              <span className="text-white font-bold">{formatNumber(Number(result))}</span>
            </div>
          )}
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-4 relative flex">
            <div
              className="h-full bg-white w-full"
              style={{ width: `${principalPercentage}%` }}
            ></div>
            <div
              className="h-full bg-green-500 w-full"
              style={{ width: `${interestPercentage}%` }}
            ></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <p className=" flex justify-between w-full">
              Toplam yatırım{" "}
              <span className="text-white font-bold">{formatNumber(totalInvestment)}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className=" w-2 h-2 rounded-full bg-green-500"></div>
            <p className=" flex justify-between w-full">
              Toplam faiz{" "}
              <span className="text-white font-bold">
                {formatNumber(interest)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPayment;
