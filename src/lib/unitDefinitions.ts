export const unitDefinitions = {
  area: [
    {
      name: "Metrekare",
      symbol: "m²",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Kilometre kare",
      symbol: "km²",
      toBase: (value: number) => value * 1_000_000,
      fromBase: (value: number) => value / 1_000_000,
    },
    {
      name: "Hektar",
      symbol: "ha",
      toBase: (value: number) => value * 10_000,
      fromBase: (value: number) => value / 10_000,
    },
    {
      name: "Ar",
      symbol: "a",
      toBase: (value: number) => value * 100,
      fromBase: (value: number) => value / 100,
    },
    {
      name: "Desimetre kare",
      symbol: "dm²",
      toBase: (value: number) => value * 0.01,
      fromBase: (value: number) => value / 0.01,
    },
    {
      name: "Santimetre kare",
      symbol: "cm²",
      toBase: (value: number) => value * 0.0001,
      fromBase: (value: number) => value / 0.0001,
    },
    {
      name: "Milimetre kare",
      symbol: "mm²",
      toBase: (value: number) => value * 0.000001,
      fromBase: (value: number) => value / 0.000001,
    },
    {
      name: "Mikron kare",
      symbol: "μm²",
      toBase: (value: number) => value * 0.000000000001,
      fromBase: (value: number) => value / 0.000000000001,
    },
    {
      name: "İnç kare",
      symbol: "in²",
      toBase: (value: number) => value * 0.00064516,
      fromBase: (value: number) => value / 0.00064516,
    },
    {
      name: "Yard kare",
      symbol: "yd²",
      toBase: (value: number) => value * 0.83612736,
      fromBase: (value: number) => value / 0.83612736,
    },
  ],
  length: [
    {
      name: "Metre",
      symbol: "m",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Kilometre",
      symbol: "km",
      toBase: (value: number) => value * 1000,
      fromBase: (value: number) => value / 1000,
    },
    {
      name: "Desimetre",
      symbol: "dm",
      toBase: (value: number) => value * 0.1,
      fromBase: (value: number) => value / 0.1,
    },
    {
      name: "Santimetre",
      symbol: "cm",
      toBase: (value: number) => value * 0.01,
      fromBase: (value: number) => value / 0.01,
    },
    {
      name: "Milimetre",
      symbol: "mm",
      toBase: (value: number) => value * 0.001,
      fromBase: (value: number) => value / 0.001,
    },
    {
      name: "Mil",
      symbol: "mi",
      toBase: (value: number) => value * 1_609_344,
      fromBase: (value: number) => value / 1_609_344,
    },
  ],
  weight: [
    {
      name: "Ton",
      symbol: "t",
      toBase: (value: number) => value * 1_000_000,
      fromBase: (value: number) => value / 1_000_000,
    },
    {
      name: "Kilogram",
      symbol: "kg",
      toBase: (value: number) => value * 1_000,
      fromBase: (value: number) => value / 1_000,
    },
    {
      name: "Gram",
      symbol: "g",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Miligram",
      symbol: "mg",
      toBase: (value: number) => value * 0.001,
      fromBase: (value: number) => value / 0.001,
    },
  ],
  time: [
    {
      name: "Yıl",
      toBase: (value: number) => value * 31_536_000,
      fromBase: (value: number) => value / 31_536_000,
    },
    {
      name: "Hafta",
      toBase: (value: number) => value * 604_800,
      fromBase: (value: number) => value / 604_800,
    },
    {
      name: "Gün",
      toBase: (value: number) => value * 86_400,
      fromBase: (value: number) => value / 86_400,
    },
    {
      name: "Saat",
      toBase: (value: number) => value * 3600,
      fromBase: (value: number) => value / 3600,
    },
    {
      name: "Dakika",
      toBase: (value: number) => value * 60,
      fromBase: (value: number) => value / 60,
    },
    {
      name: "Saniye",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
  ],
  data: [
    {
      name: "Bit",
      symbol: "b",
      toBase: (value: number) => value * 0.125,
      fromBase: (value: number) => value / 0.125,
    },
    {
      name: "Bayt",
      symbol: "B",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Kilobayt",
      symbol: "KB",
      toBase: (value: number) => value * 1024,
      fromBase: (value: number) => value / 1024,
    },
    {
      name: "Megabayt",
      symbol: "MB",
      toBase: (value: number) => value * 1024 * 1024,
      fromBase: (value: number) => value / (1024 * 1024),
    },
    {
      name: "Gigabayt",
      symbol: "GB",
      toBase: (value: number) => value * 1024 * 1024 * 1024,
      fromBase: (value: number) => value / (1024 * 1024 * 1024),
    },
    {
      name: "Terabayt",
      symbol: "TB",
      toBase: (value: number) => value * 1024 * 1024 * 1024 * 1024,
      fromBase: (value: number) => value / (1024 * 1024 * 1024 * 1024),
    },
  ],
  volume: [
    {
      name: "Mililitre",
      symbol: "mL",
      toBase: (value: number) => value * 0.001,
      fromBase: (value: number) => value / 0.001,
    },
    {
      name: "Litre",
      symbol: "L",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Santimetreküp",
      symbol: "cm³",
      toBase: (value: number) => value * 0.001,
      fromBase: (value: number) => value / 0.001,
    },
    {
      name: "Desilitre",
      symbol: "dL",
      toBase: (value: number) => value * 0.1,
      fromBase: (value: number) => value / 0.1,
    },
    {
      name: "Metreküp",
      symbol: "m³",
      toBase: (value: number) => value * 1000,
      fromBase: (value: number) => value / 1000,
    },
    {
      name: "Galon",
      symbol: "gal",
      toBase: (value: number) => value * 3.78541,
      fromBase: (value: number) => value / 3.78541,
    },
  ],
  speed: [
    {
      name: "Metre/Saniye",
      symbol: "m/s",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Kilometre/Saat",
      symbol: "km/h",
      toBase: (value: number) => value * 0.277778,
      fromBase: (value: number) => value / 0.277778,
    },
    {
      name: "Mil/Saat",
      symbol: "mph",
      toBase: (value: number) => value * 0.44704,
      fromBase: (value: number) => value / 0.44704,
    },
    {
      name: "Knot",
      symbol: "kn",
      toBase: (value: number) => value * 0.514444,
      fromBase: (value: number) => value / 0.514444,
    },
    {
      name: "Metre/Dakika",
      symbol: "m/min",
      toBase: (value: number) => value * (1 / 60),
      fromBase: (value: number) => value / (1 / 60),
    },
    {
      name: "Kilometre/Saniye",
      symbol: "km/s",
      toBase: (value: number) => value * 1000,
      fromBase: (value: number) => value / 1000,
    },
  ],
  temp: [
    {
      name: "Celsius",
      symbol: "°C",
      toBase: (value: number) => value,
      fromBase: (value: number) => value,
    },
    {
      name: "Fahrenheit",
      symbol: "°F",
      toBase: (value: number) => (value - 32) * (5 / 9),
      fromBase: (value: number) => value * (9 / 5) + 32,
    },
    {
      name: "Kelvin",
      symbol: "K",
      toBase: (value: number) => value - 273.15,
      fromBase: (value: number) => value + 273.15,
    },
    {
      name: "Rankine",
      symbol: "°R",
      toBase: (value: number) => value * (5 / 9) - 273.15,
      fromBase: (value: number) => (value + 273.15) * (9 / 5),
    },
  ],
};

export const convertUnit = (
  value: number,
  fromUnit: string,
  toUnit: string,
  unitType: keyof typeof unitDefinitions
): number => {
  const units = unitDefinitions[unitType];
  const from = units.find((unit) => unit.name === fromUnit);
  const to = units.find((unit) => unit.name === toUnit);

  if (!from || !to) return 0;

  const baseValue = from.toBase(value);
  const convertedValue = to.fromBase(baseValue);

  return convertedValue;
};
