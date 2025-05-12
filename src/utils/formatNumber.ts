export const formatNumberLs = (num: number) =>
    num.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  export const formatNumber = (value: string): string => {
    const parts = value.split(/([+\-x÷])/);
    const formattedParts = parts.map((part) => {
      if (!isNaN(Number(part))) {
        const [whole, decimal] = part.split(",");
        const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return decimal ? `${formattedWhole},${decimal}` : formattedWhole;
      }
      return part;
    });
    return formattedParts.join("");
  };

  export const formatExpression = (expression: string): string => {
    return expression.replace(/\d+/g, (match) => formatNumber(match));
  };
