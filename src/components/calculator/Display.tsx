import React from "react";

type HistoryItem = {
  expression: string;
  result: string;
};

type Props = {
  value: string;
  result: string;
  type: boolean;
  lastTwoHistory: HistoryItem[];
  formatExpression: (expression: string) => string;
  formatNumber: (value: string) => string;
};

const Display = ({
  value,
  result,
  type,
  lastTwoHistory,
  formatExpression,
  formatNumber,
}: Props) => {
  return (
    <div className="h-40 py-2 flex flex-col justify-between items-end mb-2">
      <div className="text-white/50 text-right text-sm break-words w-full">
        {lastTwoHistory.map((item, i) => (
          <div key={i}>
            {formatExpression(item.expression)}
            <span className="mr-1">=</span>
            {formatNumber(item.result)}
          </div>
        ))}
      </div>
      <div className="w-full overflow-hidden">
        <div
          className={`transition-all duration-300 text-right break-words overflow-hidden ${
            type ? "text-xl text-white/50" : "text-3xl text-white/70"
          } ${value.length > 17 ? "text-xl" : "text-3xl"}`}
        >
          {value}
        </div>
        <div
          className={`transition-all duration-300 text-right ${
            type ? "text-3xl text-white/70" : "text-xl text-white/50"
          } ${value.length > 20 ? "text-xl" : "text-3xl"}`}
        >
          {value !== "0" && `= ${result}`}
        </div>
      </div>
    </div>
  );
};

export default Display;
