import { currencyCodes } from "@/data/currencyData";
import Image from "next/image";
import React from "react";

type Props= {
selectedCurrency: string
onChange?: (value: string) => void;
}

const Select = ({selectedCurrency, onChange}:Props) => {

    const countryCode = selectedCurrency.substring(0,2)

  return (
    <div className="flex items-center gap-2 border rounded-lg border-white/30 shadow-2xl drop-shadow-2xl px-2">
      <Image
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        width={36}
        height={10}
        alt=""
      />
      <select className=" w-full outline-0" value={selectedCurrency} onChange={(e)=> onChange?.(e.target.value)}>
        {Object.entries(currencyCodes).map(([code, name]) => (
          <option value={code} key={code} className="bg-[#0F2027] text-wrap">
            {name} ({code})
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
