export const formatNumber = (num: number) =>
    num.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });