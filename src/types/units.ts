export interface Unit {
    name: string;
    symbol?: string;
    toBase: (value: number) => number;
    fromBase: (value: number) => number;
  }
  
 export type UnitType = "area" | "length";