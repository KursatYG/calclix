"use client";
import React, { useEffect, useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import { evaluate } from "mathjs";
import History from "./History";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatExpression, formatNumber } from "@/utils/formatNumber";

type HistoryItem = {
  expression: string;
  result: string;
};

const Calculator = () => {
  const [history, setHistory] = useLocalStorage<HistoryItem[]>(
    "calc-history",
    []
  );

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [lastTwoHistory, setLastTwoHistory] = useState<HistoryItem[]>([]);

  const btnClear = expression === "0" || expression === "" ? "AC" : "C";

  const isInvalid =
    expression === "NaN" || expression === "Hata" || expression === "Infinity";

  const handleClear = (buttonTitle: string) => {
    setIsEvaluated(false);
    setExpression("0");
    setResult("");

    if (buttonTitle === "AC") {
      setLastTwoHistory([]);
    }
  };

  const handleDelete = () => {
    setIsEvaluated(false);
    if (!isInvalid) setExpression(expression.slice(0, -1));
  };

  const handleNumberInput = (num: string) => {
    if (isEvaluated) {
      setIsEvaluated(false);
      setExpression(num);
      return;
    }

    const parts = expression.split(/[+\-x÷]/);
    const currentNumber = parts[parts.length - 1];
    if (currentNumber.length >= 20) return;

    if (expression === "0" && num === "00") {
      return;
    }

    setExpression((prev) => (!prev || prev === "0" ? num : prev + num));
  };

  const handleOperatorInput = (operator: string) => {
    if (isEvaluated) {
      setIsEvaluated(false);
      setExpression(result + operator);

      return;
    }
    if (
      expression === "NaN" ||
      expression === "Hata" ||
      expression === "Infinity"
    ) {
      if (result !== "" && !isNaN(Number(result)) && isFinite(Number(result))) {
        setIsEvaluated(false);
        setExpression(result + operator);
      }
      return;
    }

    if (expression === "0") {
      if (operator === "-") {
        setExpression("-");
      } else {
        setExpression("0" + operator);
      }
      return;
    }

    if (expression === "-" && operator !== "-") {
      setExpression("0" + operator);
      return;
    }

    const lastChar = expression.at(-1);

    const isLastCharOperator = ["+", "-", "x", "÷"].includes(lastChar || "");

    setExpression(
      isLastCharOperator
        ? expression.slice(0, -1) + operator
        : expression + operator
    );
  };

  const handlePercentage = () => {
    if (
      expression === "" ||
      ["+", "-", "x", "÷"].includes(expression.at(-1) || "")
    ) {
      return;
    }

    const operators = ["+", "-", "x", "÷"];
    let lastOperatorIndex = -1;

    for (let i = expression.length - 1; i >= 0; i--) {
      if (operators.includes(expression[i])) {
        lastOperatorIndex = i;
        break;
      }
    }
    const lastPart = expression.slice(lastOperatorIndex + 1);
    const percentage = (parseFloat(lastPart) / 100).toString();

    const newExpression =
      expression.slice(0, lastOperatorIndex + 1) + percentage;

    setExpression(newExpression);
  };

  const handleComma = () => {
    if (isInvalid) return;

    if (["+", "-", "x", "÷"].includes(expression.at(-1) || "")) {
      return;
    }

    const lastNumber = expression.split(/[+\-x÷]/).pop() || "";
    if (lastNumber.includes(".")) {
      return;
    }

    setExpression((prev) => prev + ".");
  };

  const handleEqual = () => {
    try {
      const fixed = expression
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/[\+\-\*/]$/, "");

      const resultValue = evaluate(fixed);

      if (
        isNaN(resultValue) ||
        resultValue === Infinity ||
        resultValue === -Infinity
      ) {
        setIsEvaluated(false);
        return;
      }

      setResult(resultValue.toString());

      setIsEvaluated(true);

      const historyEntry = { expression, result: resultValue.toString() };

      setHistory((prev) => {
        if (
          prev[prev.length - 1]?.expression === historyEntry.expression &&
          prev[prev.length - 1]?.result === historyEntry.result
        ) {
          return prev;
        }
        return [...prev, historyEntry];
      });
      setLastTwoHistory((prev) => {
        const updatedHistory = [...prev, historyEntry];
        return updatedHistory.length > 2
          ? updatedHistory.slice(-2)
          : updatedHistory;
      });
    } catch {
      setIsEvaluated(false);
    }
  };

  useEffect(() => {
    if (expression === "" || expression === "0") {
      setResult("");
      return;
    }

    const lastChar = expression.at(-1);
    if (["+", "-", "x", "÷"].includes(lastChar || "")) {
      const partial = expression.slice(0, -1);
      try {
        const partialResult = evaluate(
          partial.replace(/x/g, "*").replace(/÷/g, "/")
        );
        setResult(partialResult.toString());
      } catch {
        setResult("");
      }
    } else {
      try {
        const fullResult = evaluate(
          expression.replace(/x/g, "*").replace(/÷/g, "/")
        );
        setResult(fullResult.toString());
      } catch {
        setResult("");
      }
    }
  }, [expression]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;

      if (/^[0-9]$/.test(key)) return handleNumberInput(key);

      if (["+", "-", "*", "x", "/"].includes(key)) {
        return handleOperatorInput(key === "*" ? "x" : key === "/" ? "÷" : key);
      }

      if (key === "Backspace") return handleDelete();
      if (key === "Delete") return handleClear(btnClear);
      if (key === "." || key === ",") return handleComma();
      if (key === "Enter") return handleEqual();
      if (key === "%") return handlePercentage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expression, isEvaluated, result]);

  const handleClearHistory = () => {
    const confirmClear = window.confirm(
      "Tüm geçmişi silmek istediğine emin misin?"
    );
    if (confirmClear) {
      localStorage.removeItem("calc-history");
      setHistory([]);
    }
  };

  return (
    <div className="max-w-[370px] w-full">
      <h1 className="font-bold text-white text-2xl text-center mb-6">
        Hesap Makinesi
      </h1>
      <div className="bg-white/10 shadow-md rounded-2xl pb-6 pt-3 px-6">
        {showFullHistory ? (
          <History
            history={history}
            onBack={() => {
              setShowFullHistory(false);
            }}
            handleClearHistory={handleClearHistory}
            formatExpression={formatExpression}
            formatNumber={formatNumber}
          />
        ) : (
          <div className="">
            <button
              onClick={() => setShowFullHistory(true)}
              className="text-md text-white/30 cursor-pointer"
            >
              İşlem Geçmişi
            </button>
            <Display
              value={formatNumber(expression || "0")}
              result={formatNumber(result)}
              type={isEvaluated}
              lastTwoHistory={lastTwoHistory}
              formatExpression={formatExpression}
              formatNumber={formatNumber}
            />
            <Keypad
              handleNumberInput={handleNumberInput}
              handleOperatorInput={handleOperatorInput}
              handleClear={handleClear}
              handleDelete={handleDelete}
              handleEqual={handleEqual}
              handlePercentage={handlePercentage}
              handleComma={handleComma}
              btnClear={btnClear}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
