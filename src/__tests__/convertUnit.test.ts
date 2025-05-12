import { convertUnit } from "@/lib/unitDefinitions";


describe("convertUnit", () => {
  it("metreyi santimetreye çevirir", () => {
    expect(convertUnit(2, "Metre", "Santimetre", "length")).toBe(200);
  });

  it("santimetreyi metreye çevirir", () => {
    expect(convertUnit(300, "Santimetre", "Metre", "length")).toBe(3);
  });

  it("aynı birimler verilirse değişiklik yapmaz", () => {
    expect(convertUnit(5, "Metre", "Metre", "length")).toBe(5);
  });
});