
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type HistoryItem = {
  expression: string;
  result: string;
};

type Props = {
  history: HistoryItem[];
  onBack: () => void;
  handleClearHistory: () => void;
  formatExpression: (expression: string) => string;
  formatNumber: (value: string) => string;
};

const History = ({
  history,
  onBack,
  handleClearHistory,
  formatExpression,
  formatNumber,
}: Props) => {
  return (
    <div className="h-[486px]">
      <div className="h-full overflow-hidden">
      <div className="flex justify-between items-center">
        <button onClick={onBack} className="cursor-pointer">
        <Icon icon="mingcute:arrow-left-line" className="text-white/70 hover:text-white/80 w-6 h-6"/>
        </button>
        <p className="text-white/80 font-semibold">İşlem Geçmişi</p>
        <button
          onClick={() => {
            handleClearHistory();
          }}
          className="cursor-pointer"
        >
          <Icon icon="mdi:trash" className="text-white/70 hover:text-white/80 h-6 w-6"/>
        </button>
      </div>
      <div className="text-right py-4 text-white/50 h-full px-2">
        {history.length === 0 ? (
          <p className="flex justify-center items-center h-full">
            Henüz İşlem Geçmişi Yok
          </p>
        ) : (
          history.slice(-20).map((item, i) => (
            <div
              key={i}
              className={`justify-end ${
                item.expression.length > 17 ? "block" : "flex"
              } `}
            >
              <div className="break-words mr-1">
                {formatExpression(item.expression)}=
              </div>
              <div className="">{formatNumber(item.result)}</div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default History;
