import { describe, it, expect } from "vitest";

import { sumProducts, parseNumbers, calculateProducts } from "../index";

describe("sumProducts", () => {
  it("should sum numbers correctly", async () => {
    const result: number = sumProducts([2, 2, 2, 2, 2]);
    expect(result).toBe(10);
  });
});

describe("parseNumbers", () => {
  it("should return parsed number in inner arrays", () => {
    const result: number[][] = parseNumbers(["mul(5,5)", "mul(2,2)", "mul(3,3)"]);
    expect(result).toStrictEqual([
      [5, 5],
      [2, 2],
      [3, 3],
    ]);
  });
});

describe("calculateProducts", () => {
  it("should correctly multiply numbers in each inner array ", () => {
    const result: number[] = calculateProducts([
      [1, 2],
      [5, 5],
      [10, 10],
    ]);
    expect(result).toStrictEqual([2, 25, 100]);
  });
});
